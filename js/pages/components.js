/* Reusable page-level building blocks */

export function ctaBand({
  title  = "Ready to take the first step?",
  sub    = "A short conversation can save you months of confusion. Book a free, no-pressure consultation — we'll tell you honestly if you qualify.",
  primary = { href: '#/assessment', label: 'Book a Free Consultation' },
  secondary = { href: 'tel:+14165550199', label: 'Call (416) 555-0199' },
  danger = null,
}) {
  return `
    <section class="cta-band" aria-label="Get started">
      <div class="container">
        <div class="cta-band-inner">
          <div>
            <h2>${title}</h2>
            <p>${sub}</p>
          </div>
          <div class="btn-group">
            ${primary ? `<a href="${primary.href}" class="btn btn-primary btn-lg">${primary.label}</a>` : ''}
            ${secondary ? `<a href="${secondary.href}" class="btn btn-ghost btn-lg">${secondary.label}</a>` : ''}
            ${danger ? `<a href="${danger.href}" class="btn btn-danger btn-lg">${danger.label}</a>` : ''}
          </div>
        </div>
      </div>
    </section>
  `
}

export function urgentBand() {
  return `
    <section class="section-tight" aria-label="Urgent matters">
      <div class="container">
        <div class="urgent-banner">
          <div style="display:flex;gap:1rem;align-items:flex-start;flex-wrap:wrap;">
            <span class="icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
            </span>
            <div>
              <h3>Facing removal, detention, or a strict deadline?</h3>
              <p>IRB and Federal Court timelines are unforgiving. Call us directly now — don't wait on forms.</p>
            </div>
          </div>
          <a href="tel:+14165550199" class="btn btn-danger">Call Now: (416) 555-0199</a>
        </div>
      </div>
    </section>
  `
}

export function pageHero({ title, subtitle, crumbs }) {
  return `
    <div class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          ${crumbs.map((c, i) => `
            ${i > 0 ? '<span class="sep" aria-hidden="true">/</span>' : ''}
            ${c.href ? `<a href="${c.href}">${c.label}</a>` : `<span class="current">${c.label}</span>`}
          `).join('')}
        </nav>
        <h1>${title}</h1>
        ${subtitle ? `<p class="lead">${subtitle}</p>` : ''}
      </div>
    </div>
  `
}

export function faqBlock(entries, { id = 'faq' } = {}) {
  return `
    <div class="faq-list" id="${id}">
      ${entries.map((e, i) => `
        <div class="faq-item">
          <button class="faq-q" type="button" aria-expanded="false">${e.q}</button>
          <div class="faq-a"><p>${e.a}</p></div>
        </div>
      `).join('')}
    </div>
  `
}

export function pathwayCard({ slug, title, blurb, icon, tags = [], urgent = false }) {
  const tagHtml = tags.length
    ? `<ul class="tag-list">${tags.map(x => `<li>${x}</li>`).join('')}</ul>`
    : ''
  const urgentHtml = urgent ? '<span class="urgent-tag">Urgent matter</span>' : ''
  return `
    <a class="pathway-card${urgent ? ' urgent' : ''}" href="#/practice/${slug}">
      <div class="card-top">
        <span class="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>
        </span>
        ${urgentHtml}
      </div>
      <h3>${title}</h3>
      <p>${blurb}</p>
      ${tagHtml}
      <span class="more">Learn more →</span>
    </a>
  `
}
