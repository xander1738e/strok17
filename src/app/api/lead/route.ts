import { NextRequest, NextResponse } from 'next/server';

// Rate limiting store (in-memory, resets on restart)
const submissions = new Map<string, { count: number; resetAt: number }>();

function getRateLimit(ip: string): boolean {
  const now = Date.now();
  const window = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5;

  const entry = submissions.get(ip);
  if (!entry || entry.resetAt < now) {
    submissions.set(ip, { count: 1, resetAt: now + window });
    return true;
  }
  if (entry.count >= maxRequests) return false;
  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  if (!getRateLimit(ip)) {
    return NextResponse.json(
      { error: 'For mange forespørsler. Prøv igjen senere.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.phone || !body.email) {
      return NextResponse.json(
        { error: 'Manglende påkrevde felt' },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic)
    const sanitized = {
      ...body,
      name: String(body.name).slice(0, 200),
      phone: String(body.phone).slice(0, 30),
      email: String(body.email).slice(0, 200),
      location: String(body.location || '').slice(0, 200),
    };

    // If Painter OS is configured, forward the lead
    const painterOsEndpoint = process.env.PAINTER_OS_ENDPOINT;
    const painterOsApiKey = process.env.PAINTER_OS_API_KEY;

    if (painterOsEndpoint && painterOsApiKey) {
      const response = await fetch(painterOsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${painterOsApiKey}`,
        },
        body: JSON.stringify(sanitized),
      });

      if (!response.ok) {
        console.error('Painter OS submission failed:', response.status);
      }
    }

    // Log to console (replace with proper logging in production)
    console.log('New lead received:', {
      name: sanitized.name,
      phone: sanitized.phone,
      email: sanitized.email,
      service_types: sanitized.service_types,
      submitted_at: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: 'Forespørsel mottatt' });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Intern feil. Prøv igjen.' },
      { status: 500 }
    );
  }
}