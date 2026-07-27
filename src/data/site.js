// ============================================================================
//  SITE CONTENT — edit everything here in one place.
//  All text below is PLACEHOLDER content. Replace with your real details.
// ============================================================================

export const company = {
  name: 'Taaj Afro Asia',
  shortName: 'Taaj',
  tagline: 'Delivering Engineering Excellence',
  established: 2013,
  // One or two line elevator pitch used in hero / about intro.
  intro:
    'Taaj Afro Asia is a specialist MEP (Mechanical, Electrical & Plumbing) engineering and facility management contractor, delivering integrated building services to global standards across Africa and Asia.',
  email: 'info@taajafroasia.com',
  // Optional secondary email
  careersEmail: 'careers@taajafroasia.com',
}

// Offices shown in the footer and on the Contact page.
export const offices = [
  {
    city: 'Head Office',
    address: 'P.O. Box 00000, Building Name, Street, City',
    phone: '+000 0 000 0000',
    email: 'info@taajafroasia.com',
  },
  {
    city: 'Regional Office',
    address: 'P.O. Box 00000, Building Name, Street, City',
    phone: '+000 0 000 0000',
    email: 'info@taajafroasia.com',
  },
]

// Hero carousel slides (homepage). `bg` is a CSS gradient placeholder —
// swap for a real photo by using: backgroundImage: `url(/images/hero1.jpg)`.
export const heroSlides = [
  {
    kicker: 'MEP Engineering',
    title: 'Delivering Engineering Excellence',
    text: 'Integrated mechanical, electrical and plumbing solutions engineered to global standards.',
    bg: 'linear-gradient(120deg, rgba(10,37,64,0.88), rgba(10,37,64,0.65)), linear-gradient(120deg, #123a5e, #0a2540)',
  },
  {
    kicker: 'BIM & Design',
    title: 'Building Smarter, From Concept to Handover',
    text: 'Data-driven Building Information Modelling that removes clashes before they reach the site.',
    bg: 'linear-gradient(120deg, rgba(10,37,64,0.88), rgba(10,37,64,0.6)), linear-gradient(120deg, #1c4b6b, #0a2540)',
  },
  {
    kicker: 'Facility Management',
    title: 'Protecting the Value of Your Assets',
    text: 'Proactive operations and maintenance that keep your facilities safe, efficient and compliant.',
    bg: 'linear-gradient(120deg, rgba(10,37,64,0.88), rgba(10,37,64,0.6)), linear-gradient(120deg, #0f3350, #071a2e)',
  },
]

// Homepage stats band.
export const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '250+', label: 'Projects Delivered' },
  { value: '400+', label: 'Skilled Professionals' },
  { value: '99%', label: 'Client Retention' },
]

// Core services — used on the homepage cards and the Services page.
export const services = [
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
  {
    slug: 'bim-engineering',
    icon: 'cube',
    title: 'BIM & Engineering',
    summary:
      'Tailored Building Information Modelling used as a practical workflow tool — not just a deliverable.',
    points: [
      'Coordinated 3D MEP modelling',
      'Clash detection & resolution',
      'Shop & as-built drawings',
      'Quantity take-offs & scheduling',
    ],
  },
  {
    slug: 'facility-management',
    icon: 'shield',
    title: 'Facility Management',
    summary:
      'Comprehensive asset preservation and operations that optimise value for every stakeholder.',
    points: [
      'Planned preventive maintenance',
      'Reactive & emergency response',
      'Energy & efficiency optimisation',
      'Compliance, HSE & reporting',
    ],
  },
]

// Projects page — placeholder portfolio.
export const projects = [
  { name: 'Commercial Tower — MEP Fit-out', sector: 'Commercial', status: 'Completed', location: 'City, Country' },
  { name: 'Residential Community', sector: 'Residential', status: 'Completed', location: 'City, Country' },
  { name: 'Hospital Facility Services', sector: 'Healthcare', status: 'Ongoing', location: 'City, Country' },
  { name: 'Retail Mall HVAC Upgrade', sector: 'Retail', status: 'Completed', location: 'City, Country' },
  { name: 'Industrial Warehouse', sector: 'Industrial', status: 'Ongoing', location: 'City, Country' },
  { name: 'Hospitality Resort', sector: 'Hospitality', status: 'Completed', location: 'City, Country' },
]

// About page — values.
export const values = [
  { title: 'Quality', text: 'We deliver to international quality standards on every project, without compromise.' },
  { title: 'Safety', text: 'A zero-harm culture underpins how we plan, build and maintain.' },
  { title: 'Integrity', text: 'Transparent, dependable partnerships built on doing what we say we will.' },
  { title: 'Innovation', text: 'We adopt modern tools like BIM to build smarter and reduce risk.' },
]

// Careers — open roles (placeholder).
export const openRoles = [
  { title: 'MEP Project Engineer', type: 'Full-time', location: 'Head Office' },
  { title: 'HVAC Technician', type: 'Full-time', location: 'Site' },
  { title: 'BIM Modeller (MEP)', type: 'Full-time', location: 'Head Office' },
  { title: 'Facility Management Supervisor', type: 'Full-time', location: 'Site' },
]

// Client logos band — text placeholders; replace with real logo images later.
export const clients = ['Client One', 'Client Two', 'Client Three', 'Client Four', 'Client Five', 'Client Six']
