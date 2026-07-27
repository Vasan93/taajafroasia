// Lightweight inline SVG icon set (stroke-based, currentColor).
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Icon = {
  wrench: (p) => (
    <svg {...base} {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 17l3 3 5.5-5.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.1-.5-.5-2.1z" /></svg>
  ),
  cube: (p) => (
    <svg {...base} {...p}><path d="M21 7.5 12 3 3 7.5 12 12l9-4.5z" /><path d="M3 7.5v9L12 21l9-4.5v-9" /><path d="M12 12v9" /></svg>
  ),
  building: (p) => (
    <svg {...base} {...p}><path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" /><path d="M14 21V9h5a1 1 0 0 1 1 1v11" /><path d="M2 21h20" /><path d="M8 8h2M8 12h2M8 16h2M17 13h.01M17 17h.01" /></svg>
  ),
  shield: (p) => (
    <svg {...base} {...p}><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  arrow: (p) => (
    <svg {...base} {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
  ),
  phone: (p) => (
    <svg {...base} {...p}><path d="M4 5c0 8 7 15 15 15l1-3-4-2-2 2a12 12 0 0 1-6-6l2-2-2-4z" /></svg>
  ),
  mail: (p) => (
    <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  ),
  pin: (p) => (
    <svg {...base} {...p}><path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
  ),
  check: (p) => (
    <svg {...base} {...p}><path d="m5 12 5 5 9-11" /></svg>
  ),
}
