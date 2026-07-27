import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand" onClick={close} aria-label="Taaj Afro Asia — home">
          <img src="/images/logo.png" alt="Taaj Afro Asia" className="brand-logo" />
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
