import { ctaBand } from './components.js'

export function about() {
  return `
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span><span class="current">About us</span>
        </nav>
        <h1>The team behind your application.</h1>
        <p class="lead">We are regulated Canadian immigration consultants who believe the best advice starts with an honest conversation — not a sales pitch. That's how more than 1,900 cases have been filed, and why families come back for parents in 2021, citizenship in 2024, and H&C in 2026.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="align-items:start;gap:3rem;">
          <div>
            <h2 style="margin-top:0;">Why we started Nijjar</h2>
            <p class="lead">We watched too many good clients lose good cases to the thing that never needs to be complicated: a form that wasn't filled out right, a deadline that wasn't tracked, a question nobody answered.</p>
            <p>So we built the practice we'd want to hire for ourselves. Regulated. Multilingual. And genuinely on your side — telling you the hard truth early rather than selling you a filing you don't need.</p>
            <p>Every one of us is a member in good standing of the CICC, which means we're bound by the regulatory code of conduct, required to carry the required insurance, and held to standards a firm can choose to ignore.</p>
          </div>
          <div>
            <div class="card" style="margin-bottom:1rem;">
              <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:.75rem;">
                <div><strong>Regulated</strong><p class="muted" style="font-size:.85rem;margin-top:.25rem;">RCIC-IRB · CICC in good standing</p></div>
                <span class="badge badge-warm">Verified</span>
              </div>
            </div>
            <div class="card" style="margin-bottom:1rem;">
              <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:.75rem;">
                <div><strong>Accredited</strong><p class="muted" style="font-size:.85rem;margin-top:.25rem;">BBB A+ Accredited Business</p></div>
                <span class="badge badge-danger">A+</span>
              </div>
            </div>
            <div class="card">
              <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:.75rem;">
                <div><strong>Client-first</strong><p class="muted" style="font-size:.85rem;margin-top:.25rem;">1,900+ cases filed since 2009</p></div>
                <span class="badge">1,900+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);">
      <div class="container">
        <div class="narrow" style="margin-bottom:2.5rem;">
          <span class="eyebrow">Our values</span>
          <h2 style="margin:0 0 .75rem;">What you get working with us</h2>
        </div>
        <div class="value-grid">
          <div class="value-item">
            <span class="num">1</span>
            <h3 style="margin-top:.5rem;">Honesty over revenue</h3>
            <p class="muted" style="font-size:.9rem;">If you don't need an application filed, we tell you. Our best case is your correct one — not the most expensive one.</p>
          </div>
          <div class="value-item">
            <span class="num">2</span>
            <h3 style="margin-top:.5rem;">Multilingual by default</h3>
            <p class="muted" style="font-size:.9rem;">English, French, Punjabi, Urdu, Hindi in person and by phone. Your family understands the process every step.</p>
          </div>
          <div class="value-item">
            <span class="num">3</span>
            <h3 style="margin-top:.5rem;">Regulated and accountable</h3>
            <p class="muted" style="font-size:.9rem;">We operate under CICC oversight. There's a body that holds us to account — and a code of conduct that we can't just "choose to ignore."</p>
          </div>
          <div class="value-item">
            <span class="num">4</span>
            <h3 style="margin-top:.5rem;">Urgent matters, first</h3>
            <p class="muted" style="font-size:.9rem;">IRB, removal orders, PFL responses — we treat these as the top of the queue, with a commitment to respond within one business day.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 style="margin-top:0;">Where we're based</h2>
        <p class="lead">Three offices across the Greater Toronto Area so you don't have to drive far, and a remote-first practice that means your language, timezone and pace of life never get in the way of your case. We serve clients in Toronto, Mississauga, Brampton, and the communities around and across the province. For a virtual client, the difference is only the distance on the map.</p>
      </div>
    </section>

    ${ctaBand({
      title: 'Come ask us anything.',
      sub: 'Your first conversation is free and there\'s no obligation to proceed. We\'ll tell you honestly if you qualify — and if we\'re not the right fit, we\'ll say that too.',
    })}
  `
}
