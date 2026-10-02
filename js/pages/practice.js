import { pathwayCard, ctaBand } from './components.js'
import { PATHWAYS, ICONS } from './pathways.js'

export function practice() {
  const cards = PATHWAYS.map(p => pathwayCard({
    slug: p.slug,
    title: p.title,
    blurb: p.blurb,
    icon: ICONS[p.icon],
    tags: (p.who || []).slice(0, 2),
    urgent: !!p.urgent,
  })).join('')

  return `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">What we do</span>
        <h1 style="margin:.5rem 0 .75rem;">All 13 practice areas, one roof.</h1>
        <p class="lead">Whatever route you’re on — or whichever route you’re still figuring out — it’s here. Pick the closest to your situation, or start with the free assessment and we’ll find the one you don’t know you qualify for yet.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-3">
          ${cards}
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);">
      <div class="container container-narrow">
        <h2 style="margin:0 0 1rem;">Don’t recognize your situation?</h2>
        <p class="lead">Most of the hardest cases involve more than one of the routes above. H&C with a failed sponsorship, Express Entry with a criminal record, a PR card renewal plus a GCMS note — these are the kinds of tangles we untangle every week.</p>
        <p>If it doesn’t fit a box, that’s usually a sign it needs our kind of handling — not a DIY form.</p>
      </div>
    </section>

    ${ctaBand({
      title: 'Not sure which practice area fits?',
      sub: 'Start with the free assessment. We’ll sort it out with you in one call.',
    })}
  `
}

/* Detail page for any /practice/<slug> */
export function pathwayDetail(page, params) {
  const p = PATHWAYS.find(x => x.slug === params.slug)
  if (!p) return null

  const iconSvg = `<span class="path-icon">${ICONS[p.icon]}</span>`
  const whoList = (p.who || []).map(w => `<li>${w}</li>`).join('')
  const stepsList = (p.steps || []).map((s, i) => `
    <div class="step" style="grid-column:auto;min-width:100%;">
      <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.5rem;">
        <span class="path-stepnum">${i + 1}</span>
      </div>
      <p>${s}</p>
    </div>`).join('')
  const faqsList = (p.faqs || []).map(f => `
    <div class="faq-item">
      <button class="faq-q" type="button" aria-expanded="false">${f.q}</button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('')

  return `
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/practice">Practice areas</a>
          <span class="sep" aria-hidden>/</span>
          <span class="current">${p.title}</span>
        </nav>
        <h1 style="margin:.75rem 0 .5rem;display:flex;align-items:center;gap:1rem;">${iconSvg} <span>${p.title}</span></h1>
        <p class="lead" style="margin-top:0;">${p.tagline}. ${p.blurb}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid" style="grid-template-columns:2fr 1fr;gap:3rem;">
          <div>
            <h2 style="margin-top:0;">Who this is for</h2>
            <ul class="checklist">
              ${whoList}
            </ul>
            <h2>How the process works${(p.who || []).length ? '' : ''}</h2>
            <div class="steps path-steps" style="grid-template-columns:1fr;">
              ${stepsList}
            </div>
          </div>
          <aside>
            <div class="card" style="position:sticky;top:5rem;">
              <h3 style="margin-top:0;">Not sure if this fits?</h3>
              <p class="muted" style="font-size:.9rem;">Start with a free, no-pressure assessment and we’ll confirm whether this is your strongest path.</p>
              <a href="#/assessment" class="btn btn-primary btn-block">Book free assessment</a>
              <p class="muted" style="font-size:.8125rem;margin-top:1rem;">Or reach us directly: 647-403-7200 · Brampton / Toronto / Mississauga</p>
            </div>
            <div class="card urgent-band">
              <h3>Need help now?</h3>
              <p style="font-size:.9rem;margin-bottom:1rem;">For time-critical matters, call or WhatsApp — we respond within one business day.</p>
              <a href="mailto:immigration@nijjarlaw.ca?subject=Urgent%20matter%20(%20${encodeURIComponent(p.title)}%20)" class="btn btn-secondary btn-block" style="margin-bottom:.5rem;">Email urgent</a>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);">
      <div class="container container-narrow">
        <h2 style="margin-top:0;">Common questions on ${p.title}</h2>
        <div class="faq-list">
          ${faqsList}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container container-narrow">
        <h2>Related pathways</h2>
        <div class="grid grid-3" style="margin-top:1.5rem;">
          ${PATHWAYS.filter(x => x.slug !== p.slug).slice(0, 3).map(x => pathwayCard({
            slug: x.slug, title: x.title, blurb: x.blurb, icon: ICONS[x.icon],
          })).join('')}
        </div>
      </div>
    </section>

    ${ctaBand({
      title: `${p.title} is one of our most common matters.`,
      sub: 'Start with the free assessment. In one call, we’ll confirm the right route and the next step.',
    })}
  `
}
