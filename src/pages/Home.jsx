import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { company, heroSlides, stats, services, clients, gallery } from '../data/site'
import { Icon } from '../components/Icons'

function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % heroSlides.length), 6000)
    return () => clearInterval(t)
  }, [])
  const slide = heroSlides[i]

  return (
    <section className="hero">
      <div className="hero-slide" style={{ background: slide.bg }}>
        <div className="container">
          <div className="hero-inner">
            <div className="kicker">{slide.kicker}</div>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">Our Services</Link>
              <Link to="/contact" className="btn btn-outline">Talk to Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-dots">
        {heroSlides.map((_, n) => (
          <button
            key={n}
            className={n === i ? 'active' : ''}
            aria-label={`Slide ${n + 1}`}
            onClick={() => setI(n)}
          />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats */}
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

      {/* Intro split */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="kicker">Who We Are</div>
            <h2>Delivering Construction &amp; Engineering Excellence</h2>
            <p className="lead">{company.intro}</p>
            <p>
              From construction and MEP installation to long-term facility management, our teams
              bring discipline, safety and modern engineering practice to every project — helping
              clients build and operate spaces that perform.
            </p>
            <Link to="/about" className="btn btn-dark">More About Us</Link>
          </div>
          <div className="media" />
        </div>
      </section>

      {/* Services */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div className="kicker">What We Do</div>
            <h2>Our Core Services</h2>
            <p className="lead">Integrated construction and MEP solutions delivered under one accountable partner.</p>
          </div>
          <div className="cards">
            {services.map((s) => {
              const Ic = Icon[s.icon]
              return (
                <div className="card" key={s.slug}>
                  <div className="ic">{Ic && <Ic />}</div>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <ul>
                    {s.points.slice(0, 3).map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <Link to="/services" className="link">Learn more <Icon.arrow width={16} height={16} /></Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Our Work</div>
            <h2>From the Field</h2>
            <p className="lead">A look at the construction and engineering work we deliver.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((g) => (
              <div
                key={g.caption}
                className={`gtile ${g.img ? 'has-photo' : ''}`}
                style={g.img ? { backgroundImage: `url(${g.img})` } : undefined}
              >
                <div className="cap">
                  <span className="t">{g.tag}</span>
                  <h4>{g.caption}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Trusted By</div>
            <h2>Clients &amp; Partners</h2>
          </div>
          <div className="clients-grid">
            {clients.map((c) => (
              <div className="client-logo" key={c}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Have a project in mind?</h2>
            <p>Tell us about your requirements and our engineering team will get back to you with a tailored proposal.</p>
            <Link to="/contact" className="btn btn-primary">Request a Consultation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
