// Lead submission abstraction — ready for Painter OS integration
// Connect to your backend or Painter OS API by configuring environment variables

export interface LeadPayload {
  source: 'stroek17_website';
  name: string;
  phone: string;
  email: string;
  location: string;
  service_types: string[];
  property_type: string;
  approximate_size: string;
  rooms_areas: string;
  current_condition: string;
  desired_work: string;
  preferred_start_date: string;
  flexible_start: boolean;
  preferred_contact_method: string;
  image_urls: string[];
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  submitted_at: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  message: string;
  leadId?: string;
}

export async function submitLead(payload: LeadPayload): Promise<LeadSubmissionResult> {
  try {
    // If Painter OS endpoint is configured, POST to it
    const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

    if (endpoint) {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // API key should be handled server-side, not exposed here
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, message: 'Forespørsel mottatt', leadId: data.id };
    }

    // Fallback: POST to our own Next.js API route
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    return { success: true, message: 'Forespørsel sendt' };
  } catch {
    return {
      success: false,
      message: 'Noe gikk galt. Prøv igjen eller ring oss direkte.',
    };
  }
}