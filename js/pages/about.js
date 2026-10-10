/* About — Nijjar Immigration Services */
import { ctaBand } from "./components.js";

export function about() {
  return `
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span><span class="current">About</span>
        </nav>
        <span class="eyebrow" style="color:var(--c-gold);">Since 2025</span>
        <h1>A consulting desk built on <em>experience, not marketing</em>.</h1>
        <p class="lead">Nijjar Immigration Services is a Canadian immigration consulting practice focused on skilled work, study, family, and appeals pathways. We operate from an Ontario-registered office and coordinate across Canada's three main immigration corridors. Our work is done by senior licensed consultants — and the people who answer your call are the same people who build your file.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div>
            <div class="section-head" style="margin-bottom:1.5rem;">
              <span class="eyebrow">Our commitment</span>
              <h2>Why we built this practice the way we did</h2>
            </div>
            <p>Too many families approach immigration as a race to the bottom — the cheapest fee, the fastest timeline, whoever files first. We built this practice to do the opposite. Every case we take is one we are confident we can win, and we tell you that before you spend a dollar, not after you've spent it.</p>
            <p class="mt-3">That means we turn down files we're not confident about. It means we price by outcome, not by volume. It means if something goes wrong we absorb it, because it was our file.</p>
          </div>
          <div class="about-card">
            <div class="kpi">
              <span class="kpi-num">2025</span>
              <span class="kpi-lbl">Ontario-registered practice</span>
            </div>
            <div class="kpi">
              <span class="kpi-num">10+</span>
              <span class="kpi-lbl">Practice areas on one desk</span>
            </div>
            <div class="kpi">
              <span class="kpi-num">6</span>
              <span class="kpi-lbl">Languages served on request</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);">
      <div class="container">
        <div class="section-head" style="margin-bottom:2rem;">
          <span class="eyebrow">How we work</span>
          <h2>The practice model — senior-only, end-to-end</h2>
        </div>
        <div class="grid grid-3">
          <div class="about-feature-card">
            <h3>1. Senior-only team</h3>
            <p>The consultant who assesses your file is the same one who builds, files and appeals it. No juniors handed off mid-stream, no "your consultant is on leave" surprises.</p>
          </div>
          <div class="about-feature-card">
            <h3>2. Itemized estimates</h3>
            <p>You get a written, line-by-line quote before you sign. Government fee, our fee, and every third-party cost — itemized, so there are no surprises at the end.</p>
          </div>
          <div class="about-feature-card">
            <h3>3. One point of contact</h3>
            <p>You get a phone number, a WhatsApp, and an email — all routed to the same senior consultant. No "please call the office and ask for me" handoffs.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head" style="margin-bottom:2rem;">
          <span class="eyebrow">What we won't do</span>
          <h2>Honest practice, including the no</h2>
        </div>
        <div class="grid grid-2">
          <div class="about-feature-card">
            <h3>We don't guess timelines</h3>
            <p>If we can't give you a realistic window, we'll say so. We'd rather give you a range and come in under it than promise a date we can't back up.</p>
          </div>
          <div class="about-feature-card">
            <h3>We don't take every file</h3>
            <p>If your case is better suited to another practice, we'll tell you — and point you to someone who's better fit. We'd rather lose a referral than win a bad outcome.</p>
          </div>
          <div class="about-feature-card">
            <h3>We don't sell the dream</h3>
            <p>If a pathway won't work for your profile, we'll say so before you commit, not after you've paid. The "no" is part of the service.</p>
          </div>
          <div class="about-feature-card">
            <h3>We don't use bots for your file</h3>
            <p>Automated drafting, copy-paste templates and AI-generated legal briefs don't survive an RP. Neither do we.</p>
          </div>
        </div>
      </div>
    </section>

    ${ctaBand()}
  `;
}
