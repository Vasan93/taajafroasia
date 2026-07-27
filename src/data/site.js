// ============================================================================
//  SITE CONTENT — edit everything here in one place.
//  Company details below are from the official Taaj Afro Asia letterhead.
//  Marketing copy (stats, service descriptions, projects) is placeholder —
//  replace with your real details when ready.
// ============================================================================

export const company = {
  name: 'Taaj Afro Asia',
  shortName: 'Taaj',
  tagline: 'Construction & MEP Engineering',
  // One or two line elevator pitch used in hero / about intro.
  intro:
    'Taaj Afro Asia is a specialist construction and MEP (Mechanical, Electrical & Plumbing) engineering contractor, delivering integrated construction and engineering solutions to international standards.',
  email: 'info@taajafroasia.com',
  website: 'www.taajafroasia.com',
  websiteUrl: 'https://www.taajafroasia.com',
}

// Office — from the official letterhead.
export const offices = [
  {
    city: 'Head Office',
    address: '#701, Waaberi Mall, Makkah Almukarramah Road, Mogadishu, Somalia',
    phones: ['+252 619 777161', '+252 770 709313'],
    email: 'info@taajafroasia.com',
  },
]

// Hero carousel slides (homepage). `bg` layers a dark overlay over a scene image
// so the headline stays readable. Swap the url for your own photo any time.
export const heroSlides = [
  {
    kicker: 'Construction & MEP Engineering',
    title: 'Building With Precision & Purpose',
    text: 'Integrated construction and mechanical, electrical & plumbing solutions engineered to international standards.',
    bg: 'linear-gradient(120deg, rgba(23,47,43,0.92), rgba(36,67,63,0.62)), url(/images/scene-hero.svg)',
  },
  {
    kicker: 'MEP Building Services',
    title: 'Engineering Systems That Perform',
    text: 'Design, installation, testing and commissioning of complete MEP systems for every sector.',
    bg: 'linear-gradient(120deg, rgba(23,47,43,0.90), rgba(47,87,79,0.60)), url(/images/scene-hero.svg)',
  },
  {
    kicker: 'Construction & Civil Works',
    title: 'From Groundworks to Handover',
    text: 'Turnkey construction and civil works delivered safely, on schedule and to specification.',
    bg: 'linear-gradient(120deg, rgba(20,40,36,0.93), rgba(36,67,63,0.58)), url(/images/scene-hero.svg)',
  },
]

// Homepage stats band.
export const stats = [
  { value: '25+', label: 'Projects Delivered' },
  { value: '40+', label: 'Skilled Professionals' },
  { value: '8+', label: 'Sectors Served' },
  { value: '100%', label: 'Commitment to Quality' },
]

// Core services — used on the homepage cards and the Services page.
export const services = [
  {
    slug: 'construction-civil-works',
    icon: 'building',
    title: 'Construction & Civil Works',
    summary:
      'Turnkey construction and civil works — from fit-out and refurbishment to full build delivery.',
    points: [
      'Building construction & fit-out',
      'Civil & structural works',
      'Refurbishment & remodelling',
      'Project & site management',
    ],
  },
  {
    slug: 'mep-building-services',
    icon: 'wrench',
    title: 'MEP Building Services',
    summary:
      'End-to-end installation, testing, commissioning and maintenance of mechanical, electrical and plumbing systems.',
    points: [
      'HVAC systems design & installation',
      'Electrical power & lighting distribution',
      'Plumbing, drainage & firefighting systems',
      'Testing, commissioning & handover',
    ],
  },
]

// Projects page — placeholder portfolio.
export const projects = [
  { name: 'Commercial Tower — MEP Fit-out', sector: 'Commercial', status: 'Completed', location: 'Mogadishu' },
  { name: 'Residential Community', sector: 'Residential', status: 'Completed', location: 'Mogadishu' },
  { name: 'Hospital MEP Installation', sector: 'Healthcare', status: 'Ongoing', location: 'Mogadishu' },
  { name: 'Retail Mall HVAC Upgrade', sector: 'Retail', status: 'Completed', location: 'Mogadishu' },
  { name: 'Industrial Warehouse', sector: 'Industrial', status: 'Ongoing', location: 'Mogadishu' },
  { name: 'Hospitality Development', sector: 'Hospitality', status: 'Completed', location: 'Mogadishu' },
]

// Gallery strip — image tiles. Drop real photos in /public/images and set
// `img` to e.g. '/images/gallery-1.jpg' to replace the branded placeholder.
export const gallery = [
  { caption: 'On-Site Construction', tag: 'Construction', img: '/images/gallery-construction.svg' },
  { caption: 'MEP Installation', tag: 'Engineering', img: '/images/gallery-mep.svg' },
  { caption: 'HVAC Systems', tag: 'Mechanical', img: '/images/gallery-hvac.svg' },
  { caption: 'Electrical Works', tag: 'Electrical', img: '/images/gallery-electrical.svg' },
  { caption: 'Project Delivery', tag: 'Management', img: '/images/gallery-delivery.svg' },
  { caption: 'Civil & Structural Works', tag: 'Construction', img: '/images/gallery-civil.svg' },
]

// About page — values.
export const values = [
  { title: 'Quality', text: 'We deliver to international quality standards on every project, without compromise.' },
  { title: 'Safety', text: 'A zero-harm culture underpins how we plan, build and maintain.' },
  { title: 'Integrity', text: 'Transparent, dependable partnerships built on doing what we say we will.' },
  { title: 'Innovation', text: 'We adopt modern methods and engineering tools to build smarter and reduce risk.' },
]

// Client logos band — placeholder company names (invented). Replace with your
// real clients, or swap for logo images later.
export const clients = [
  'Horizon Developments',
  'Banadir Properties',
  'Shabelle Group',
  'Marodi Real Estate',
  'Coastline Holdings',
  'Juba Construction Co.',
]
