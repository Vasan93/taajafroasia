import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { services } from '../data/site'
import { Icon } from '../components/Icons'

export default function Services() {
  return (
    <>
      <PageBanner title="Our Services" subtitle="Integrated MEP engineering, from design to long-term operation." />

      <section className="section">
        <div className="container">
          <div className="cards">
            {services.map((s) => {
              const Ic = Icon[s.icon]
              return (
                <div className="card" key={s.slug} id={s.slug}>
                  <div className="ic">{Ic && <Ic />}</div>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <ul>
                    {s.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div className="kicker">How We Work</div>
            <h2>A Clear, Accountable Process</h2>
          </div>
          <div className="values-grid">
            {[
              { t: 'Consult', d: 'We listen to your requirements and assess the scope on site.' },
              { t: 'Engineer', d: 'Our team designs and models the optimal MEP solution.' },
              { t: 'Deliver', d: 'We install, test and commission to specification and schedule.' },
              { t: 'Maintain', d: 'We keep systems running efficiently through the asset lifecycle.' },
            ].map((v, n) => (
              <div className="value" key={v.t}>
                <div className="n">0{n + 1}</div>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <h2>Need a service not listed here?</h2>
            <p>We tailor our engineering scope to each client. Get in touch and we'll advise on the best approach.</p>
            <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
