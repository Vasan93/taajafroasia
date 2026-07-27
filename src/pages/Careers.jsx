import PageBanner from '../components/PageBanner'
import { company, openRoles } from '../data/site'

export default function Careers() {
  return (
    <>
      <PageBanner title="Careers" subtitle="Build your career with a growing engineering team." />

      <section className="section">
        <div className="container split">
          <div>
            <div className="kicker">Join Us</div>
            <h2>Grow With {company.name}</h2>
            <p className="lead">
              We are always looking for talented engineers, technicians and support staff who take
              pride in their work and share our commitment to quality and safety.
            </p>
            <p>
              We offer hands-on experience across diverse MEP projects, structured development, and
              a culture where good work is recognised. If that sounds like you, we'd love to hear from you.
            </p>
          </div>
          <div className="media"><div className="badge-since"><small>Team</small>Join</div></div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Openings</div>
            <h2>Current Vacancies</h2>
          </div>
          <div className="roles">
            {openRoles.map((r) => (
              <div className="role" key={r.title}>
                <div>
                  <h3>{r.title}</h3>
                  <div className="meta">{r.type} · {r.location}</div>
                </div>
                <a className="btn btn-primary" href={`mailto:${company.careersEmail}?subject=Application: ${encodeURIComponent(r.title)}`}>
                  Apply
                </a>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 30, color: 'var(--muted)' }}>
            Don't see a suitable role? Send your CV to{' '}
            <a href={`mailto:${company.careersEmail}`} style={{ color: 'var(--amber-dark)', fontWeight: 600 }}>
              {company.careersEmail}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
