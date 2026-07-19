// Central configuration — replace all placeholder values before going live

export const siteConfig = {
  name: 'STRØK 17',
  tagline: 'Ordentlig håndverk. Fra første sparkel til siste strøk.',
  shortTagline: 'Profesjonelt malerarbeid i Tromsø.',
  description: 'STRØK 17 utfører innvendig og utvendig maling, helsparkling og overflatearbeid i Tromsø og omegn. Grundig forarbeid, rene linjer og et resultat som holder.',

  // Contact — REPLACE THESE
  phone: '[PHONE_NUMBER]',
  phoneHref: 'tel:[PHONE_NUMBER]',
  email: '[EMAIL]',
  emailHref: 'mailto:[EMAIL]',
  address: '[BUSINESS_ADDRESS]',
  city: 'Tromsø',
  region: 'Troms og Finnmark',
  postalCode: '[POSTAL_CODE]',
  country: 'NO',
  orgNumber: '[ORG_NUMBER]',

  // Social — REPLACE THESE (or remove if not active)
  instagram: '[INSTAGRAM_URL]',
  facebook: '[FACEBOOK_URL]',

  // Domain
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://[DOMAIN]',

  // Service areas
  serviceAreas: [
    'Tromsø',
    'Tromsdalen',
    'Kvaløya',
    'Hamna',
    'Kroken',
    'Stakkevollan',
  ],

  // Experience
  yearsExperience: '~5',

  // Painter OS integration (future)
  painterOsEndpoint: process.env.PAINTER_OS_ENDPOINT || '',
  painterOsApiKey: process.env.PAINTER_OS_API_KEY || '',
};

export type ServiceType =
  | 'innvendig-maling' |'utvendig-maling' |'helsparkling' |'sparkling-reparasjon' |'tak' |'listverk-dorer' |'sproytemaling' |'annet';

export const serviceLabels: Record<ServiceType, string> = {
  'innvendig-maling': 'Innvendig maling',
  'utvendig-maling': 'Utvendig maling',
  'helsparkling': 'Helsparkling',
  'sparkling-reparasjon': 'Sparkling/reparasjon',
  'tak': 'Tak',
  'listverk-dorer': 'Listverk/dører',
  'sproytemaling': 'Sprøytemaling',
  'annet': 'Annet',
};