/* Practice area detail pages */
import { ctaBand, faqList } from "./components.js";
import { bindFaq } from "./components.js";

const DATA = {
  "express-entry": {
    title: "Express Entry",
    kicker: "Federal skilled work",
    hero: `<em>CRS-optimised</em> Express Entry filings that hold up to an RP — not just to a first read. We file for refusal-rate, not for the lowest bar.`,
    lead: `Federal Skilled Worker, Canadian Experience Class and other Express Entry streams, with a strategy built around your realistic CRS range and the next few draws — not the last one.`,
    steps: [
      { phase: "Week 1", title: "CRS review & draw modelling", text: "We read your CRS honestly, model the next 6–12 months of draws, and tell you which streams actually fit your profile.", meta: "30-min call" },
      { phase: "Weeks 2–4", title: "Profile optimisation", text: "Language retest strategy, ECA upgrades, and work-history alignment to every point you're eligible for.", meta: "Written report" },
      { phase: "Month 2", title: "Profile submission", text: "We build the federal profile to IRCC's evidence standard and submit with a refusal-first risk memo attached.", meta: "Filed" },
      { phase: "Draws → ITA", title: "Draw monitoring & ITA prep", text: "If you score, we move to ITA inside the 60-day window with your full filing kit ready to go.", meta: "Tracked weekly" },
      { phase: "After ITA", title: "Filing & medicals", text: "Federal application, medicals, police checks, and the final biometric step — managed end-to-end.", meta: "Avg 4–8 wks" },
    ],
    faq: [
      { q: "Do I need to 'game' my CRS to score?", a: "No. We model the draws, position your profile for the realistic range, and tell you honestly if the stream isn't the right route — and what is." },
      { q: "What happens if I don't get an ITA?", a: "We keep monitoring, re-test language if it helps, and re-strategise for the next draw. The strategy memo you get is yours to keep." },
    ],
  },
  "pnp": {
    title: "Provincial Nominee (PNP)",
    kicker: "Ontario & Atlantic",
    in: `<em>PNP</em> pathways with employer linkage, language strategy and timing — not a generic "apply now" pitch.`,
    lead: `Provincial Nominee streams across Ontario (OINP), Atlantic and other provinces, with the employer, timing and language pieces built in from day one.`,
    steps: [
      { phase: "Week 1", title: "Province & stream fit", text: "We map which provinces' streams match your job, language and education profile — including those you haven't heard of." },
      { phase: "Weeks 2–4", title: "Employer & documentation", text: "Job offer alignment (where required), ECA, language retesting and the documentation stack, in parallel." },
      { phase: "Month 2–3", title: "Provincial filing", text: "We file to the province's evidence standard and track the timeline against the next intake window." },
      { phase: "Provincial approval", title: "Federal handoff", text: "Once the province approves, we roll into the federal stage so the two filings don't lose momentum." },
      { phase: "Final", title: "PR decision", text: "Biometrics, medicals and the final decision step, with the same consultant who built your file." },
    ],
    faq: [
      { q: "Do I need an employer?", a: "Some streams do, most don't. We'll tell you which of your profile can go in without one, and which ones can't, before you commit." },
      { q: "How long does a PNP take?", a: "Provincial timelines vary by province and stream — typically a few months, then the federal stage. We give you realistic timelines for the exact stream we recommend." },
    ],
  },
  "family-sponsorship": {
    title: "Family Sponsorship",
    kicker: "Spouse · parents · children",
    in: `Family sponsorship, run to a <em>single defensible standard</em> — not to the lowest bar that gets a filing accepted.`,
    lead: `Spouse, con-joinder, orphan and dependent parent sponsorships. The same careful standard across every family category, because IRCC's family-class evidence expectations are the highest in the program.`,
    steps: [
      { phase: "Week 1", title: "Category & evidence map", text: "We confirm the exact category (spouse, partner, con-joinder, dependent parent) and build your evidence map around it." },
      { phase: "Weeks 2–4", title: "Relationship & financials", text: "Relationship evidence, financial support documents, and the sponsorship undertaking, all coordinated." },
      { phase: "Filing", title: "Federal submission", text: "We file to IRCC's family-class evidence standard and track the processing window for your category." },
      { phase: "Processing", title: "RCMP & medicals", text: "Police certificates and medicals for the sponsored person, in the right order, in the right window." },
      { phase: "Approved", title: "Landing & citizenship", text: "Post-PR next steps, including the citizenship pathway if it fits the family's timeline." },
    ],
    faq: [
      { q: "Do we have to be cohabiting for a spousal sponsorship?", a: "Not always. We assess the category and the best-supported evidence for your specific situation before filing." },
      { q: "How long does spousal sponsorship take?", a: "It varies by category and stream. We give you a processing window based on IRCC's current published timeframes for your exact category." },
    ],
  },
  "study-permit": {
    title: "Study & PGWP",
    kicker: "Genuine-student positioning",
    in: `Study permits with <em>genuine-student positioning</em> and a PGWP strategy mapped before the application goes in — not after.`,
    lead: `Study permit applications that hold up to IRCC's post-ACEST genuine-student scrutiny, with Post-Graduation Work Permit eligibility confirmed before we file, so the whole journey is designed as one continuous plan.`,
    steps: [
      { phase: "Week 1", title: "Program fit & GSWA", text: "We assess the program, institution and your profile for genuine-student positioning, and confirm PGWP eligibility before you commit." },
      { phase: "Weeks 2–3", title: "Documentation", text: "Financials, English (if required), program justification and the supporting stack, coordinated in one package." },
      { phase: "Filing", title: "Study permit submission", text: "We file to IRCC's evidence standard and track the processing window for your program type." },
      { phase: "Decision", title: "Approval conditions", text: "If approved, we read the conditions carefully and make sure you know exactly what they require." },
      { phase: "After study", title: "PGWP transition", text: "We file the PGWP inside the eligibility window so the study-to-work transition is seamless." },
    ],
    faq: [
      { q: "Do I need a strong profile for a study permit?", a: "You need a coherent story: why this program, why this institution, and why you'll return. We build that story into the filing from the start." },
      { q: "Can I get a PGWP after my program?", a: "Most programs qualify — we confirm eligibility before you commit to the program, so you're not finding out after you've finished." },
    ],
  },
  "work-permit": {
    title: "Work Permits",
    kicker: "LMIA · CUSMA · ICT",
    in: `Work permits with <em>compliance built in</em> — not just a filing accepted, but one that holds up to an employer audit.`,
    lead: `LMIA-supported work permits, CUSMA professional mobility, and intra-company transfers. Each stream has different employer obligations, and we build the filing to the standard IRCC enforces for that specific stream.`,
    steps: [
      { phase: "Week 1", title: "Stream assessment", text: "We confirm which work-permit stream fits your employer, role and your own profile — and what the employer needs to do." },
      { phase: "Weeks 2–6", title: "Employer side", text: "LMIA job offer, wage assessment, or CUSMA compliance stack — handled in parallel with your personal documentation." },
      { phase: "Filing", title: "Work permit submission", text: "We file to the stream's evidence standard and track the processing window." },
      { phase: "Decision", title: "Approval & conditions", text: "We review the approval conditions and make sure the employer understands their ongoing obligations." },
      { phase: "After approval", title: "Renewals & extensions", text: "Before the permit expires, we start the renewal conversation so there's no gap in status." },
    ],
    faq: [
      { q: "Does my employer need an LMIA?", a: "Not always — CUSMA and some other streams are LMIA-exempt. We confirm the right stream before your employer commits to any cost." },
      { q: "How long does a work permit take?", a: "It varies by stream and visa office. We give you a processing window based on the exact stream we recommend." },
    ],
  },
  "citizenship": {
    title: "Citizenship",
    kicker: "Adults · couples · families",
    in: `Citizenship applications with the <em>residency and intent evidence</em> assembled before filing — not discovered in a refusal letter.`,
    lead: `Canadian citizenship for adults, spouses, and families. The residency calculation, intent documentation and oath-preparation, all done with the same care we give a first-time application.`,
    steps: [
      { phase: "Week 1", title: "Residency calculation", text: "We calculate your qualifying physical presence day by day, including the tax filing rules that catch people out." },
      { phase: "Week 2", title: "Evidence assembly", text: "Travel history, tax returns, intent documentation and the supporting stack, all in one package." },
      { phase: "Filing", title: "Citizenship application", text: "We file to IRCC's evidence standard and track the processing window." },
      { phase: "Oath", title: "CERB & oath", text: "We track the citizenship record, oath invitation and the final ceremony scheduling." },
      { phase: "After oath", title: "Passport & next steps", text: "We help with the Canadian passport application and the next steps once you're a citizen." },
    ],
    faq: [
      { q: "Do I need to have filed Canadian taxes?", a: "Yes — for the three of your last five years. We check this before we file, so it's not a surprise in a refusal." },
      { q: "How long does citizenship take?", a: "Current IRCC processing timeframes are typically 12 months or more for most applications — we give you a realistic window at the start." },
    ],
  },
  "refugee-asylum": {
    title: "Refugee / Asylum (IRB)",
    kicker: "IRB litigation",
    in: `Asylum and refugee claims handled by a <em>dedicated IRB litigation team</em> — not by a generalist filing a form.`,
    lead: `In-Canada and offshore protection claims. This is the area where a generalist filing a form is not just risky — it's disqualifying. We use a litigation team that has appeared before the IRB.`,
    steps: [
      { phase: "Week 1", title: "Claim assessment", text: "We assess your claim for credibility, consistency and the risk of a negative RSD first-instance decision." },
      { phase: "Weeks 2–4", title: "Claim drafting", text: "The claim, the supporting documentation and the legal authority — drafted for the hearing, not for the file." },
      { phase: "Hearing", title: "RSD appearance", text: "A member of the IRB team appears on your behalf. We prepare you for the credibility questions you'll be asked." },
      { phase: "Decision", title: "Post-decision", text: "If you're approved, we help with the follow-through. If you're refused, we assess the appeal options before the deadline." },
    ],
    faq: [
      { q: "Is this different from a regular immigration case?", a: "Yes. The evidence standard, the hearing structure and the decision-makers are all different. We use a team that works in the IRB space specifically." },
      { q: "Can I claim while I'm in Canada?", a: "Yes, in most cases. We assess the specific facts before committing you to any filing." },
    ],
  },
  "caregivers": {
    title: "Caregivers",
    kicker: "Home child care · home support",
    in: `Caregiver streams with <em>employer compliance</em> and language pathways mapped before you commit.`,
    lead: `The Home Child Care and Home Support streams, with the employer obligations and language requirements built into the plan — so you're not surprised at the filing stage.`,
    steps: [
      { phase: "Week 1", title: "Stream eligibility", text: "We confirm which caregiver stream fits your role, experience and language profile." },
      { phase: "Weeks 2–6", title: "Employer & LMIA", text: "The job offer, LMIA support and the compliance documentation, coordinated in parallel." },
      { phase: "Filing", title: "Application submission", text: "We file to the stream's evidence standard and track the processing window." },
      { phase: "Approval", title: "Conditions & PR pathway", text: "We review the work-permit conditions and confirm the PR pathway is available under the current rules." },
    ],
    faq: [
      { q: "Do I need Canadian experience?", a: "The streams have different requirements — we confirm the right stream for your specific profile before you commit." },
      { q: "Can I get PR after this?", a: "Under the current rules, yes — but the requirements change. We map the PR pathway before you start, not after." },
    ],
  },
  "appeals-removal": {
    title: "Inadmissibility & Appeals",
    kicker: "IRB · RPs · removal",
    in: `The <em>hard file</em> — refusals, removal orders, RPs and inadmissibility — handled end-to-end by the team that builds them.`,
    lead: `This is the part of immigration law where a generic filing is not a strategy — it's a risk. We handle the appeals, removal-protection and inadmissibility cases with the same care we give a first application.`,
    steps: [
      { phase: "Week 1", title: "Case assessment", text: "We read the refusal letter, the RP questions, or the removal order and tell you honestly what the options are." },
      { phase: "Weeks 2–4", title: "Appeal drafting", text: "The legal brief, the supporting documentation and the evidence standard, all assembled in one package." },
      { phase: "Filing", title: "Appeal or review", text: "We file within the deadline and track the decision window." },
      { phase: "Decision", title: "Post-decision", text: "If successful, we help with the follow-through. If not, we assess the next layer of the process." },
    ],
    faq: [
      { q: "Is there a deadline to appeal?", a: "Almost always — and it's short. Contact us as soon as you have the decision in hand." },
      { q: "Can I appeal a removal order?", a: "Yes, in most cases. The process is different from a regular immigration appeal — we handle it specifically." },
    ],
  },
  "notary-services": {
    title: "Notary & Certified Copy",
    kicker: "Document support",
    in: `Certified copies, apostille and notarial work for the <em>documents IRCC will ask for next</em>.`,
    lead: `When IRCC asks for certified copies, apostilled documents or notarial work, we handle it — so it's not a delay you have to manage yourself.`,
    steps: [
      { phase: "When needed", title: "Document list", text: "We give you the exact list of documents IRCC will likely request, so you're not chasing them one by one." },
      { phase: "Certified copies", title: "Certified copies", text: "We provide certified copies from our office, with the correct formatting and certification." },
      { phase: "Apostille", title: "Apostille & notarial", text: "For foreign-issued documents, we manage the apostille process and any notarial requirements." },
    ],
    faq: [
      { q: "Do I need certified copies for every document?", a: "No — but we'll tell you exactly which ones IRCC will ask for, so you don't send extras and you don't miss the ones that matter." },
    ],
  },
};

export function practiceArea(slug) {
  const d = DATA[slug];
  if (!d) return null;
  return `
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span>
          <a href="#/practice">Practice Areas</a><span class="sep" aria-hidden>/</span>
          <span class="current">${d.title}</span>
        </nav>
        <span class="eyebrow" style="color:var(--c-gold);">${d.kicker}</span>
        <h1>${d.in}</h1>
        <p class="lead">${d.lead}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="display:grid;grid-template-columns:2fr 1fr;gap:3rem;align-items:start;">
          <div>
            <div class="section-head" style="margin-bottom:2rem;">
              <span class="eyebrow">How the file is built</span>
              <h2>Step by step, in plain language.</h2>
            </div>
            <div class="timeline">
              ${d.steps.map((s) => `
                <div class="tl-item">
                  <span class="tl-marker" aria-hidden="true"></span>
                  <div class="tl-phase">${s.phase}</div>
                  <h4>${s.title}</h4>
                  <p>${s.text}</p>
                  ${s.meta ? `<span class="tl-meta">${s.meta}</span>` : ""}
                </div>
              `).join("")}
            </div>
          </div>
          <aside style="display:grid;gap:1rem;">
            <div class="card">
              <h3 style="margin-top:0;">Prefer to call?</h3>
              <p class="muted" style="font-size:.9rem;margin-bottom:1rem;">Talk now, or WhatsApp. Same consultant, same answer.</p>
              <div class="btn-group" style="flex-direction:column;align-items:stretch;">
                <a href="tel:+14165550199" class="btn btn-primary btn-block">Call (416) 555-0199</a>
                <a href="https://wa.me/14165550199" target="_blank" rel="noopener" class="btn btn-secondary btn-block">WhatsApp</a>
              </div>
            </div>
            <div class="card">
              <h3 style="margin-top:0;">Not sure this is your path?</h3>
              <p class="muted" style="font-size:.9rem;margin-bottom:1rem;">A 30-minute free assessment sorts it out — no card, no obligation.</p>
              <a href="#/assessment" class="btn btn-terra btn-block">Book a Free Assessment</a>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);">
      <div class="container container-narrow">
        <div class="section-head" style="margin-bottom:2rem;">
          <span class="eyebrow">Common questions</span>
          <h2>What clients ask before they start</h2>
        </div>
        <div id="faq-area">${faqList(d.faq)}</div>
      </div>
    </section>
    ${ctaBand()}
  `;
}

export function bindPracticeArea(root) {
  const faq = root.querySelector("#faq-area");
  if (faq) bindFaq(faq);
}
