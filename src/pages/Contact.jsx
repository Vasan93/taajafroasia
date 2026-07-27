import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { company, offices } from '../data/site'
import { Icon } from '../components/Icons'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Placeholder: no backend yet. Wire this to an email service
    // (e.g. Formspree, Vercel serverless function, or your own API).
    setSent(true)
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
            {sent ? (
              <div className="value" style={{ marginTop: 20 }}>
                <h3 style={{ color: 'var(--amber-dark)' }}>Thank you!</h3>
                <p style={{ color: 'var(--muted)' }}>
                  Your message has been captured. (This demo form isn't connected to a backend yet —
                  ask your developer to wire it to an email service.)
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary">Send Message</button>
                <p className="form-note" style={{ marginTop: 12 }}>
                  We'll never share your details. Placeholder form — connect to a mail service to receive submissions.
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
