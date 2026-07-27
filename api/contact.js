// ============================================================================
//  Vercel Serverless Function — POST /api/contact
//  Receives contact-form submissions and emails them via Resend.
//
//  Required env var (set in Vercel → Project → Settings → Environment Variables):
//    RESEND_API_KEY   your Resend API key (starts with "re_")
//  Optional env vars:
//    CONTACT_TO       destination inbox   (default: info@taajafroasia.com)
//    CONTACT_FROM     verified sender     (default: onboarding@resend.dev for testing)
//                     After verifying taajafroasia.com in Resend, set this to e.g.
//                     "Taaj Afro Asia <noreply@taajafroasia.com>"
// ============================================================================

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, subject, message, company_website } = req.body || {}

    // Honeypot: bots fill hidden fields. Pretend success, send nothing.
    if (company_website) return res.status(200).json({ ok: true })

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide your name, email and a message.' })
    }
    // Basic email sanity check.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return res.status(503).json({ error: 'The email service is not configured yet. Please email us directly for now.' })
    }

    const to = process.env.CONTACT_TO || 'info@taajafroasia.com'
    const from = process.env.CONTACT_FROM || 'Taaj Afro Asia <onboarding@resend.dev>'
    const subj = subject && subject.trim()
      ? `Website enquiry: ${subject.trim()}`
      : `New website enquiry from ${name}`

    const text =
      `New enquiry from the Taaj Afro Asia website\n\n` +
      `Name:    ${name}\n` +
      `Email:   ${email}\n` +
      `Subject: ${subject || '(none)'}\n\n` +
      `Message:\n${message}\n`

    const html =
      `<div style="font-family:Segoe UI,Arial,sans-serif;color:#1f2a27">
        <h2 style="color:#24433f;margin:0 0 12px">New website enquiry</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:4px 12px 4px 0;color:#5f6f6a"><b>Name</b></td><td style="padding:4px 0">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#5f6f6a"><b>Email</b></td><td style="padding:4px 0">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#5f6f6a"><b>Subject</b></td><td style="padding:4px 0">${escapeHtml(subject || '(none)')}</td></tr>
        </table>
        <p style="margin:16px 0 6px;color:#5f6f6a"><b>Message</b></p>
        <p style="white-space:pre-wrap;margin:0;padding:12px 14px;background:#f4f7f5;border-radius:8px">${escapeHtml(message)}</p>
      </div>`

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: subj,
        text,
        html,
      }),
    })

    if (!resp.ok) {
      const detail = await resp.text()
      console.error('Resend error', resp.status, detail)
      return res.status(502).json({ error: 'Sorry, we could not send your message. Please email us directly.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact function error:', err)
    return res.status(500).json({ error: 'Unexpected error. Please try again in a moment.' })
  }
}
