/* Home page */
import { ctaBand } from "./components.js";

export function home() {
  return `
    <section class="hero">
      <div class="container">
        <div>
          <span class="hero-eyebrow">CICC-regulated · RCIC-IRB · Multilingual</span>
          <h1>We turn the <em>immigration maze</em> into one clear, defensible file.</h1>
          <p class="lead">Nijjar Immigration Services is a single, senior team of regulated consultants helping families, students, and skilled workers build cases that hold up to IRCC — across Express Entry, PNP, sponsorship, and appeals.</p>
          <div class="hero-actions">
            <a href="#/assessment" class="btn btn-primary btn-lg">Book a Free Assessment</a>
            <a href="#/practice" class="btn btn-ghost btn-lg">Explore practice areas →</a>
          </div>
          <div class="hero-badges">
            <span class="hbadge">3 offices in Ontario</span>
            <span class="hbadge">6 languages on request</span>
            <span class="hbadge">PIPEDA compliant</span>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="ring"></div>
          <div class="ring ring-2"></div>
          <div class="ring ring-3"></div>
          <svg class="path" viewBox="0 0 400 400" fill="none">
            <path d="M80 320 C 180 340, 280 240, 200 120 C 160 60, 260 40, 320 80" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="3 4" opacity=".35"/>
            <path d="M60 240 C 140 220, 220 260, 340 200" stroke="#E2A322" stroke-width="1.5" stroke-dasharray="3 4" opacity=".45"/>
          </svg>
          <div class="dot" style="top:28%;left:22%;"></div>
          <div class="dot d2" style="top:58%;left:68%;"></div>
          <div class="dot" style="top:72%;left:40%;"></div>
          <div class="dot d2" style="top:22%;left:78%;"></div>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="num">2,000+</span>
            <span class="lbl">Applications handled</span>
          </div>
          <div class="hero-stat">
            <span class="num">98%</span>
            <span class="lbl">Approval rate on first filing</span>
          </div>
          <div class="hero-stat">
            <span class="num">6</span>
            <span class="lbl">Languages served on request</span>
          </div>
          <div class="hero-stat">
            <span class="num">3</span>
            <span class="lbl">Ontario offices</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">What we practice</span>
          <h2>Every pathway. One team that has done it before.</h2>
          <p>Each practice area is a dedicated discipline with its own playbook, its own evidence standards, and its own timeline. Pick the one that fits your situation — or start with the free assessment and we'll map the strongest route.</p>
        </div>
        <div class="grid grid-3">
          <a class="card-link" href="#/practice/express-entry">
            <span class="icon" aria-hidden="true">EE</span>
            <h3>Express Entry</h3>
            <p>CRS-optimised federal skilled worker, CEC and Canadian Experience filings with a refusal-rate-first strategy.</p>
            <span class="more">Learn more</span>
          </a>
          <a class="card-link" href="#/practice/pnp">
            <span class="icon" aria-hidden="true">PN</span>
            <h3>Provincial Nominee</h3>
            <p>Ontario (OINP), Atlantic and other PNPs with employer linkage and language strategy built in from day one.</p>
            <span class="more">Learn more</span>
          </a>
          <a class="card-link" href="#/practice/family-sponsorship">
            <span class="icon" aria-hidden="true">F</span>
            <h3>Family Sponsorship</h3>
            <p>Spouse, con-joinder, orphan and dependent parent sponsorships run to a single, defensible standard.</p>
            <span class="more">Learn more</span>
          </a>
          <a class="card-link" href="#/practice/study-permit">
            <span class="icon" aria-hidden="true">S</span>
            <h3>Study &amp; PGWP</h3>
            <p>Study permits with genuine-student positioning and PGWP strategy mapped before the application goes in.</p>
            <span class="more">Learn more</span>
          </a>
          <a class="card-link" href="#/practice/work-permit">
            <span class="icon" aria-hidden="true">W</span>
            <h3>Work Permits</h3>
            <p>LMIA-supported, CUSMA, and intra-company transfers with compliance built into the filing itself.</p>
            <span class="more">Learn more</span>
          </a>
          <a class="card-link" href="#/practice/appeals-removal">
            <span class="icon" aria-hidden="true">A</span>
            <h3>Appeals &amp; Removal</h3>
            <p>IRB, inadmissibility and removal-protection cases handled by our dedicated litigation team.</p>
            <span class="more">Learn more</span>
          </a>
        </div>
        <div class="mt-4" style="text-align:center;">
          <a href="#/practice" class="btn btn-secondary">See all practice areas →</a>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">How we work</span>
          <h2>A process built for the hardest cases, not just the easy ones.</h2>
        </div>
        <div class="process">
          <div class="process-step" data-n="01">
            <h4>Free Assessment</h4>
            <p>A 30-minute conversation. We map every path that fits your profile and pick the strongest one.</p>
          </div>
          <div class="process-step" data-n="02">
            <h4>Strategy &amp; Estimate</h4>
            <p>You get a short written plan: what we'll file, by when, for what fee. No hourly billing.</p>
          </div>
          <div class="process-step" data-n="03">
            <h4>Build &amp; File</h4>
            <p>Senior consultants build the file to IRCC's evidence standard and track every deadline.</p>
          </div>
          <div class="process-step" data-n="04">
            <h4>Decide &amp; Land</h4>
            <p>Appeals, RPs and next steps handled by the same team that built your file — end to end.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:3rem;align-items:center;">
          <div>
            <span class="eyebrow">What clients say</span>
            <div class="quote mt-2">
              <p>They told me the honest answer on day one — that my first application was weak — and gave me a plan that worked. Approved in 11 months.</p>
              <div class="attribution"><strong>M. Kaur</strong> · Express Entry · Approved 2025</div>
            </div>
          </div>
          <div>
            <h2 style="margin-bottom:1rem;">Why families stay with us</h2>
            <ul class="checklist">
              <li>Senior-only team. No junior handoffs, no mid-file surprises.</li>
              <li>Itemized estimates. You know the price before you sign a single document.</li>
              <li>Every file tracked against IRCC's evidence standard, not a checklist.</li>
              <li>Refusal-first mindset. We build the case that survives an RP, not the one that hopes it doesn't come.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    ${ctaBand()}
  `;
}
