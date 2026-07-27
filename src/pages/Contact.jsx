import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { company, offices } from '../data/site'
import { Icon } from '../components/Icons'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || 'Something went wrong. Please try again.')
      form.reset()
      setStatus('sent')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  return (
    <>
      <PageBanner title="Contact Us" subtitle="Let's talk about your project." />

      <section className="section">
        <div className="container contact-grid">
          {/* Form */}
          <div>
            <div className="kicker">Send a Message</div>
            <h2>Request a Consultation</h2>
            {status === 'sent' ? (
              <div className="value" style={{ marginTop: 20 }}>
                <h3 style={{ color: 'var(--amber-dark)' }}>Thank you!</h3>
                <p style={{ color: 'var(--muted)' }}>
                  Your message has been sent — our team will get back to you shortly.
                </p>
                <button className="btn btn-dark" onClick={() => setStatus('idle')} style={{ marginTop: 8 }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Honeypot — hidden from humans, catches bots */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                />
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" placeholder="How can we help?" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Tell us about your project" />
                </div>
                {status === 'error' && (
                  <p style={{ color: '#b3261e', margin: '0 0 12px', fontSize: '0.92rem' }}>{error}</p>
                )}
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                <p className="form-note" style={{ marginTop: 12 }}>
                  We'll never share your details. You can also email us at{' '}
                  <a href={`mailto:${company.email}`} style={{ color: 'var(--amber-dark)', fontWeight: 600 }}>
                    {company.email}
                  </a>.
                </p>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="contact-info">
            <div className="kicker">Reach Us</div>
            <h2>Contact Details</h2>
            {offices.map((o) => (
              <div key={o.city} style={{ marginBottom: 28 }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: 12 }}>{o.city}</h3>
                <div className="row">
                  <span className="ic"><Icon.pin width={20} height={20} /></span>
                  <div><h4>Address</h4><p>{o.address}</p></div>
                </div>
                <div className="row">
                  <span className="ic"><Icon.phone width={20} height={20} /></span>
                  <div>
                    <h4>Phone</h4>
                    {o.phones.map((p) => (
                      <p key={p}><a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a></p>
                    ))}
                  </div>
                </div>
                <div className="row">
                  <span className="ic"><Icon.mail width={20} height={20} /></span>
                  <div><h4>Email</h4><p><a href={`mailto:${o.email}`}>{o.email}</a></p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
