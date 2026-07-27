# Taaj Afro Asia — Company Website

A React (Vite) marketing website for **Taaj Afro Asia**, a specialist MEP
(Mechanical, Electrical & Plumbing) engineering and facility management contractor.
Structure and layout are modelled on a typical MEP engineering company site.

> All text, contact details, projects and client names are **placeholders**.
> Edit them in one place: [`src/data/site.js`](src/data/site.js).

## Pages

- **Home** — hero carousel, stats, intro, service cards, clients, CTA
- **About Us** — story, values, quality & HSE
- **Services** — MEP Building Services, BIM & Engineering, Facility Management, process
- **Projects** — filterable portfolio (Ongoing / Completed)
- **Careers** — open roles + speculative applications
- **Contact** — enquiry form + office details

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Editing content

Everything customer-facing lives in **`src/data/site.js`**:

- `company` — name, tagline, intro, emails
- `offices` — footer & contact page addresses/phones
- `heroSlides` — homepage carousel
- `stats`, `services`, `projects`, `values`, `openRoles`, `clients`

**Colors / branding:** edit the CSS variables at the top of `src/index.css`
(`--navy`, `--amber`, etc.).

**Images:** placeholders use CSS gradients. To use real photos, drop files in
`public/images/` and reference them, e.g. in `src/data/site.js`:
`bg: 'linear-gradient(...), url(/images/hero1.jpg)'`.

**Contact form:** currently a front-end-only demo (no backend). To receive
submissions, wire the form in `src/pages/Contact.jsx` to a service such as
[Formspree](https://formspree.io), a Vercel serverless function, or your own API.

## Deploying to Vercel (with a GoDaddy domain)

### 1. Push this repo to GitHub
Already at `https://github.com/Vasan93/taajafroasia`.

### 2. Import into Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New → Project**.
2. Import the `taajafroasia` GitHub repo.
3. Vercel auto-detects Vite. Confirm:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**. You'll get a `*.vercel.app` URL.

`vercel.json` already includes an SPA rewrite so client-side routes
(`/about`, `/contact`, …) work on refresh.

### 3. Add your GoDaddy domain
1. In Vercel: **Project → Settings → Domains → Add**, enter your domain
   (e.g. `taajafroasia.com`). Add both the apex and `www`.
2. Vercel shows the DNS records to set. Typically:
   - **Apex (`@`)** → `A` record → `76.76.21.21`
   - **`www`** → `CNAME` → `cname.vercel-dns.com`
   *(Use the exact values Vercel displays — they can change.)*
3. In **GoDaddy → Domain → DNS → Manage DNS**, add/update those records.
   Delete any conflicting GoDaddy "parked" A record for `@`.
4. Back in Vercel, wait for verification (DNS can take minutes to a few hours).
   Vercel issues an SSL certificate automatically.

> Alternative: point GoDaddy's nameservers to Vercel's for full DNS management —
> follow Vercel's on-screen instructions if you prefer that route.

## Tech

React 18 · React Router 6 · Vite 5 · plain CSS (no framework).
