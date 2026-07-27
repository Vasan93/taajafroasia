import { Link } from 'react-router-dom'
import { company, offices, services } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <img src="/images/logo.png" alt="Taaj Afro Asia" className="footer-logo" />
            <p style={{ fontSize: '0.93rem', marginTop: 16 }}>{company.intro}</p>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="foot-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="foot-links">
              {services.map((s) => (
                <li key={s.slug}><Link to="/services">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            {offices.map((o) => (
              <div className="office" key={o.city}>
                <strong>{o.city}</strong>
                {o.address}<br />
                {o.phones.map((p) => (
                  <span key={p}>
                    <a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a><br />
                  </span>
                ))}
                <a href={`mailto:${o.email}`}>{o.email}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {company.name}. All rights reserved.</span>
          <span>{company.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
