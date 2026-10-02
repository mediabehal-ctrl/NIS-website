import { pathwayCard, ctaBand, urgentBand } from './components.js'
import { PATHWAYS, ICONS } from './pathways.js'

const featured = ['express-entry', 'family-sponsorship', 'pnp', 'study-permit', 'work-permit', 'other-applications']

export function home() {
  const cards = featured
    .map(slug => PATHWAYS.find(p => p.slug === slug))
    .filter(Boolean)
    .map(p => pathwayCard({ slug: p.slug, title: p.title, blurb: p.blurb, icon: ICONS[p.icon] }))
    .join('')

  return `
    <section class="hero" aria-label="Introduction">
      <div class="container">
        <div class="hero-inner">
          <div>
            <span class="eyebrow">Regulated Consultant · CICC / ICRC · RCIC-IRB</span>
            <h1>Canadian immigration, handled with <span class="accent">clarity</span> and care.</h1>
            <p class="lead">Express Entry, Provincial Nominee, family sponsorship, study & work permits — one trusted team that takes the time to understand your case, speaks your language, and gives you an honest answer on day one.</p>
            <div class="hero-ctas btn-group">
              <a href="#/assessment" class="btn btn-primary btn-lg">Book a Free Assessment</a>
              <a href="#/practice" class="btn btn-secondary btn-lg">Explore Practice Areas</a>
            </div>
            <div class="hero-trust">
              <span class="hero-trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>CICC-regulated · RCIC-IRB</span>
              <span class="hero-trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>BBB A+ Accredited</span>
              <span class="hero-trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Serves English · French · Punjabi · Urdu · Hindi</span>
            </div>
          </div>
          <div>
            <div class="hero-card" role="img" aria-label="Practice statistics">
              <h3>Our track record</h3>
              <div class="hero-card-stat">
                <span class="num">1,900+</span>
                <span class="label">Cases successfully filed</span>
              </div>
              <div class="hero-card-stat">
                <span class="num">15+</span>
                <span class="label">Years of combined experience</span>
              </div>
              <div class="hero-card-stat">
                <span class="num">6</span>
                <span class="label">Languages spoken with clients</span>
              </div>
              <div class="hero-card-stat">
                <span class="num">24hr</span>
                <span class="label">Callback on urgent matters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${urgentBand()}

    <section class="section" aria-label="Why choose us">
      <div class="container">
        <div class="card" style="padding:0;background:transparent;border:0;box-shadow:none;">
          <div class="value-grid">
            <div class="value-item">
              <span class="num">01</span>
              <h3 style="margin-top:.5rem;">Thorough eligibility screening</h3>
              <p class="muted" style="font-size:.9rem;">Before you spend a dollar on fees, we map every route that fits your profile and tell you honestly which is strongest.</p>
            </div>
            <div class="value-item">
              <span class="num">02</span>
              <h3 style="margin-top:.5rem;">Error-proof applications</h3>
              <p class="muted" style="font-size:.9rem;">Most refusals are avoidable — missing documents, inconsistent statements, wrong form. We build the file the officer actually reads.</p>
            </div>
            <div class="value-item">
              <span class="num">03</span>
              <h3 style="margin-top:.5rem;">Transparent communication</h3>
              <p class="muted" style="font-size:.9rem;">Status in your inbox. Deadlines on your calendar. A person who answers when you call — in your language, not a call centre.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);" aria-label="Featured pathways">
      <div class="container">
        <div class="narrow" style="margin-bottom:2.5rem;">
          <span class="eyebrow">Where we help most</span>
          <h2 style="margin:0 0 .75rem;">Pathways we handle every day</h2>
          <p class="lead" style="margin:0;">Pick the one that looks closest to your situation — or tell us about your own.</p>
        </div>
        <div class="grid grid-3">
          ${cards}
        </div>
        <div class="center mt-6">
          <a href="#/practice" class="btn btn-secondary">See all 13 practice areas →</a>
        </div>
      </div>
    </section>

    <section class="section" aria-label="Our process">
      <div class="container">
        <div class="narrow" style="margin-bottom:2.5rem;">
          <span class="eyebrow">How we work</span>
          <h2 style="margin:0 0 .75rem;">Four steps, no surprises</h2>
          <p class="lead" style="margin:0;">You’ll always know which step you’re on and what happens next.</p>
        </div>
        <div class="steps">
          <div class="step">
            <h4>Free assessment</h4>
            <p>A short call or form where we map your best route and give you an honest read.</p>
          </div>
          <div class="step">
            <h4>Strategy & quote</h4>
            <p>A written plan: what we’ll file, by when, at what fee. No moving parts.</p>
          </div>
          <div class="step">
            <h4>Application filing</h4>
            <p>The complete, error-proof package — assembled, review-ready, submitted.</p>
          </div>
          <div class="step">
            <h4>Decision & next step</h4>
            <p>Approval letters, PR cards, or the next move. We keep communicating until it’s done.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);" aria-label="Testimonials">
      <div class="container">
        <div class="narrow" style="margin-bottom:2.5rem;">
          <span class="eyebrow">Client voices</span>
          <h2 style="margin:0;">What clients say</h2>
        </div>
        <div class="grid grid-3">
          <figure class="testimonial">
            <div class="stars" aria-label="5 out of 5">★★★★★</div>
            <blockquote>“They told me my CRS was too low — no upsell, no false hope. We used the PNP route and I got my PR card in under a year.”</blockquote>
            <figcaption class="author"><strong>G.S.</strong><span>Express Entry &rarr; Ontario PNP·Mississauga</span></figcaption>
          </figure>
          <figure class="testimonial">
            <div class="stars" aria-label="5 out of 5">★★★★★</div>
            <blockquote>“After two refusals with a different firm, they found the misrepresentation issue, filed the H&C, and I’m a PR now. I can’t thank them enough.”</blockquote>
            <figcaption class="author"><strong>R.P.</strong><span>Spousal sponsorship · Brampton</span></figcaption>
          </figure>
          <figure class="testimonial">
            <div class="stars" aria-label="5 out of 5">★★★★★</div>
            <blockquote>“They answered in Punjabi every time I called. My parents understood exactly what was happening, every step, without me translating.”</blockquote>
            <figcaption class="author"><strong>K.D.</strong><span>Citizenship application · Toronto</span></figcaption>
          </figure>
        </div>
        <div class="center muted" style="font-size:.8125rem;margin-top:1.5rem;font-style:italic;">
          Testimonials shared with client consent, and in a form consistent with regulator advertising rules. Individual results depend on each client’s facts.
        </div>
      </div>
    </section>

    <section class="section" aria-label="FAQ">
      <div class="container container-narrow">
        <div class="narrow" style="margin-bottom:2.5rem;">
          <span class="eyebrow">Common questions</span>
          <h2 style="margin:0 0 .75rem;">Before you reach out</h2>
          <p class="lead" style="margin:0;">The questions we hear most, answered plainly. Yours not here? It almost certainly is.</p>
        </div>
        <div class="faq-list">
          <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false">Do I qualify? How do I know?</button>
            <div class="faq-a"><p>That’s the whole reason for the free assessment. We map your profile against the live rules and give you a real read on what your best route is — before you spend a dollar.</p></div>
          </div>
          <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false">Is the consultation really free?</button>
            <div class="faq-a"><p>Yes. A 30-minute call or form review. No card, no obligation, no obligation to proceed. If we aren’t the right fit, we’ll say so and point you in the right direction.</p></div>
          </div>
          <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false">Are you a lawyer or a consultant?</button>
            <div class="faq-a"><p>We are Regulated Canadian Immigration Consultants (RCIC) licensed by the College of Immigration and Citizenship Consultants — which is the correct regulatory body for the vast majority of immigration applications. We can also refer you to a lawyer where the matter is strictly within the law society’s jurisdiction.</p></div>
          </div>
          <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false">Can you speak my language?</button>
            <div class="faq-a"><p>Yes. English, French, Punjabi, Urdu, and Hindi in person and by phone. Other languages by arranged interpreter, no charge.</p></div>
          </div>
          <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false">How do I pay? What do you charge?</button>
            <div class="faq-a"><p>Fees vary by matter. For most PR applications we quote a flat, itemized fee at the time of engagement — never hourly, and no surprise line items. We can also set up payments in stages.</p></div>
          </div>
        </div>
      </div>
    </section>

    ${ctaBand({
      title: 'Ready to take the first step?',
      sub: 'Book a free, no-obligation assessment and find out if your profile qualifies — or, honestly, where it doesn\'t.',
    })}
  `
}
