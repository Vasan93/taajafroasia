import { Link } from 'react-router-dom'

export default function PageBanner({ title, subtitle, crumb }) {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="crumbs">
          <Link to="/">Home</Link> / {crumb || title}
        </div>
        <h1>{title}</h1>
        {subtitle && <p className="lead" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{subtitle}</p>}
      </div>
    </section>
  )
}
