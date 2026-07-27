import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { company } from '../data/site'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">TA</span>
          <span className="brand-name">Taaj <span>Afro Asia</span></span>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={close}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary nav-cta" onClick={close}>
            Get a Quote
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}
