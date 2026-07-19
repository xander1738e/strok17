export interface Project {
  slug: string;
  title: string;
  location: string;
  serviceType: string;
  serviceCategory: 'innvendig' | 'utvendig' | 'sparkling' | 'rehabilitering';
  heroImage: string;
  heroImageAlt: string;
  beforeImage: string;
  beforeImageAlt: string;
  afterImage: string;
  afterImageAlt: string;
  gallery: {src: string;alt: string;caption?: string;}[];
  challenge: string;
  workCompleted: string[];
  materials: string[];
  result: string;
  duration?: string;
  featured: boolean;
}

export const projects: Project[] = [
{
  slug: 'utvendig-maling-tomannsbolig-tromsdalen',
  title: 'Utvendig maling — tomannsbolig',
  location: 'Tromsdalen',
  serviceType: 'Utvendig maling',
  serviceCategory: 'utvendig',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1627cbea9-1783688253747.png",
  heroImageAlt: 'Tomannsbolig med ferdigmalt fasade, hvit kledning med mørke detaljer, Tromsdalen',
  beforeImage: "https://images.unsplash.com/photo-1712582431684-83995f2103c5",
  beforeImageAlt: 'Fasade med slitt og avflassende maling, synlige råteskader i listverk, grå betong',
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11ebd9905-1783688253725.png",
  afterImageAlt: 'Ferdigmalt fasade med jevnt strøk, rene overganger og ny listverksdetalj',
  gallery: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_12b8d9813-1768002408308.png", alt: 'Nærfoto av ferdig listverk med ren overgang mot kledning', caption: 'Listverk og overganger' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_141f13c75-1783688253740.png", alt: 'Fasadedetalj med vindskier og beslag', caption: 'Vindskier og beslag' },
  { src: "https://images.unsplash.com/photo-1656646549504-10462a5d1d4e", alt: 'Helhetsbilde av ferdig hus fra hagen', caption: 'Ferdig resultat' }],

  challenge: 'Fasaden hadde store partier med avflassende maling og noe råteskade i listverket. Underlaget krevde grundig skraping, sliping og behandling av skadde partier før ny maling.',
  workCompleted: [
  'Skraping og sliping av eksisterende maling',
  'Utbedring av råteskader i listverk',
  'Grunning av bar ved og reparerte partier',
  'Fuging rundt vinduer og dører',
  'To strøk utendørsmaling på fasade',
  'Maling av listverk, vindskier og detaljer'],

  materials: ['Jotun Demidekk Ultimate', 'Jotun Trebeskyttelse Grunning', 'Akrylspark til utvendig bruk'],
  result: 'Fasaden fremstår jevn og hel med rene overganger. Listverket er utbedret og korrekt behandlet for å tåle nordnorsk klima.',
  duration: '5 dager',
  featured: true
},
{
  slug: 'helsparkling-innvendig-leilighet-tromso',
  title: 'Helsparkling og maling — leilighet',
  location: 'Tromsø sentrum',
  serviceType: 'Helsparkling',
  serviceCategory: 'sparkling',
  heroImage: "/assets/images/3A58D711-8A33-42D8-95B1-319B5138E2C1-1783695372640.jpg",
  heroImageAlt: 'Maler på stige utfører helsparkling av tak, profesjonelt overflatearbeid innvendig',
  beforeImage: "https://images.unsplash.com/photo-1610541796415-8787c6b183b3",
  beforeImageAlt: 'Vegg med synlige ujevnheter, sprekker og gammel tapet, mørkt rom',
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18acbe8bf-1773605707189.png",
  afterImageAlt: 'Perfekt jevn vegg etter helsparkling og maling, lys og luftig leilighet',
  gallery: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_11010bd7d-1779507250911.png", alt: 'Sliping av spartlet vegg for å oppnå perfekt jevn overflate', caption: 'Sliping og forarbeid' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8be9366-1783688252954.png", alt: 'Ferdig spartlet og malt vegg med ren overgang mot tak', caption: 'Vegg/tak-overgang' }],

  challenge: 'Veggene hadde gammel tapet og ujevne underlag fra tidligere reparasjoner. Kunden ønsket helglatt resultat til ny innredning.',
  workCompleted: [
  'Fjerning av tapet',
  'Reparasjon av sprekker og hull',
  'Remsing av skjøter',
  'Hjørnelister på alle innvendige hjørner',
  'Helsparkling i 2–3 lag',
  'Sliping mellom lag',
  'Grunning og 2 strøk Jotun Lady'],

  materials: ['Gyproc Spackel Fint', 'Jotun Lady Pure Color', 'Gyproc Fugebånd'],
  result: 'Veggene er helglatte og klare for ny innredning. Overgangene mot tak og gulv er rene og presise.',
  duration: '6 dager',
  featured: true
},
{
  slug: 'innvendig-maling-enebolig-kvaloya',
  title: 'Innvendig maling — enebolig',
  location: 'Kvaløya',
  serviceType: 'Innvendig maling',
  serviceCategory: 'innvendig',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_158cf5bb6-1772063868995.png",
  heroImageAlt: 'Lys stue med nymalt vegg i varm hvit, clean Skandinavisk stil',
  beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1064732af-1772187338641.png",
  beforeImageAlt: 'Stue med gulnet og slitt maling, synlige reparasjoner og ujevne flater',
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_16ef383cc-1783688253241.png",
  afterImageAlt: 'Ferdig malt stue med jevnt strøk og rene listverk',
  gallery: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_10f82de56-1783688253729.png", alt: 'Nærfoto av rent listverk med presis overgang mot vegg', caption: 'Listverk og detaljer' }],

  challenge: 'Flere rom med slitt maling og noen hull etter bilder og festepunkter. Listverk trengte grundig behandling.',
  workCompleted: [
  'Puss og sparkling av hull og skader',
  'Sliping av overganger',
  'Masking av gulv, vinduer og listverk',
  '2 strøk på vegger',
  'Maling av listverk og dørkarmer'],

  materials: ['Jotun Lady Supreme Finish', 'Jotun Trefiberspark'],
  result: 'Boligen fremstår fersk og godt vedlikeholdt. Kunden valgte å male 4 rom i én omgang for å effektivisere arbeidet.',
  duration: '4 dager',
  featured: true
},
{
  slug: 'rehabilitering-eldre-bolig-stakkevollan',
  title: 'Overflaterehab — eldre bolig',
  location: 'Stakkevollan',
  serviceType: 'Rehabilitering',
  serviceCategory: 'rehabilitering',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_19493dc5e-1783688254104.png",
  heroImageAlt: 'Rehabilitert eldre bolig med ny fasadebehandling, Stakkevollan Tromsø',
  beforeImage: "https://images.unsplash.com/photo-1665588096098-10f383b18c0a",
  beforeImageAlt: 'Slitt innvendig vegg med synlige skader, gammel maling og ujevnheter',
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_139af5b4b-1780738413454.png",
  afterImageAlt: 'Ferdig rehabilitert rom med jevne overflater og frisk maling',
  gallery: [],
  challenge: 'Eldre bolig med mye slitasje, sprekker i overgangssonene og manglende listverk på noen vegger.',
  workCompleted: [
  'Kartlegging av skader og underlag',
  'Utbedring av sprekker',
  'Montering av hjørnelister',
  'Sparkling og sliping',
  'Grunnbehandling',
  'Maling av vegger og tak'],

  materials: ['Jotun Lady Balance', 'Gyproc Spackel', 'Profil hjørnelister'],
  result: 'Boligen er klar for ny bruk med jevne, holdbare overflater.',
  duration: '8 dager',
  featured: false
},
{
  slug: 'listverk-detaljarbeid-hamna',
  title: 'Listverk og detaljarbeid',
  location: 'Hamna',
  serviceType: 'Listverk/detaljer',
  serviceCategory: 'innvendig',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_120a3c966-1783688253199.png",
  heroImageAlt: 'Presist malt listverk med ren overgang mot vegg, hvit glans',
  beforeImage: "https://images.unsplash.com/photo-1571863358012-b0d15f40a4ba",
  beforeImageAlt: 'Slitt listverk med avflassende maling og sprekker i overgangene',
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_13a0ba969-1783688253043.png",
  afterImageAlt: 'Ferdig listverk med jevnt glansstrøk og presise overganger',
  gallery: [],
  challenge: 'Eldre listverk med slitt maling, noen sprekker og ujevn glans. Kunden ønsket et friskere og mer presist uttrykk.',
  workCompleted: [
  'Sliping og avfetting av listverk',
  'Sparkling av sprekker',
  'Grunning',
  '2 strøk halvglans på listverk',
  'Fuging av overganger'],

  materials: ['Jotun Lady Finishing Touch', 'Akrylspark'],
  result: 'Listverk og dørkarmer fremstår presise og godt utført. Rene overganger mot vegger.',
  duration: '2 dager',
  featured: false
}];


export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'alle') return projects;
  return projects.filter((p) => p.serviceCategory === category);
}