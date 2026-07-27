import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { company, values, stats } from '../data/site'

export default function About() {
  return (
    <>
      <PageBanner title="About Us" subtitle="Who we are and what drives our engineering." />

      <section className="section">
        <div className="container split">
          <div className="media">
            <div className="badge-since"><small>Established</small>{company.established}</div>
          </div>
          <div>
            <div className="kicker">Our Story</div>
            <h2>Engineering Partners You Can Rely On</h2>
            <p className="lead">{company.intro}</p>
            <p>
              Founded in {company.established}, {company.name} has grown into a trusted MEP
              contractor serving commercial, residential, healthcare, hospitality and industrial
              clients. We combine experienced engineering leadership with a hands-on delivery team
              to complete projects safely, on time and to specification.
            </p>
            <p>
              Our approach is simple: understand the client's goals, engineer the right solution,
              and stand behind it through operation and maintenance.
            </p>
            <Link to="/contact" className="btn btn-dark">Work With Us</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.value}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Our Values</div>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid">
            {values.map((v, n) => (
              <div className="value" key={v.title}>
                <div className="n">0{n + 1}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <div className="kicker">Quality & HSE</div>
            <h2>Committed to Standards & Safety</h2>
            <p>
              Quality management and Health, Safety & Environment (HSE) are central to how we
              operate. Our processes are designed to meet international standards, and every team
              member shares responsibility for a safe, compliant worksite.
            </p>
            <p style={{ color: 'var(--muted)' }}>
              <em>Placeholder: list your ISO certifications, licenses and HSE accreditations here.</em>
            </p>
          </div>
          <div className="media"><div className="badge-since"><small>Quality</small>HSE</div></div>
        </div>
      </section>
    </>
  )
}
