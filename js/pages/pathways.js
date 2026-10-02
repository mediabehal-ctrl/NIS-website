/* Practice-areas data — 13 pathways from the brief.
   Each entry drives a detail page at /practice/<slug>. */

const ICONS = {
  express: '<path d="M2 12h20M12 2c5 4 5 16 0 20M12 2c-5 4-5 16 0 20M2 12c3-2 17-2 20 0M2 12c3 2 17 2 20 0"/>',
  pnp: '<path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  family: '<circle cx="9" cy="7" r="4"/><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M22 21v-2a4 4 0 0 0-3-3.85"/>',
  study: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5"/>',
  work: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  citizen: '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/>',
  caregiver: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>',
  lmia: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2"/><path d="M9 12h6M9 16h6"/>',
  refuge: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  hc: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  appeals: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><path d="M5 3 2 6l3 3"/>',
  notary: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  other: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
};

export const PATHWAYS = [
  {
    slug: 'express-entry',
    title: 'Express Entry',
    tagline: 'Skilled worker, Canadian Experience & French-first streams',
    icon: 'express',
    blurb: 'The fast-track for skilled workers. We score your CRS, identify the right stream (FSWP, CEC, FSTP), and get you an Invitation to Apply.',
    who: ['Skilled workers outside Canada', 'Workers already in Canada (CEC)', 'Bilingual candidates (French-speaking)', 'Provincially-nominated Express Entry candidates'],
    steps: [
      'Eligibility & CRS scoring — we verify points against current draw cut-offs and pick the strongest stream.',
      'Profile optimization — experience, language, education, and occupation strategy to lift your score.',
      'Profile submission — EOI profile into the pool, monitored through every draw.',
      'ITA & application — complete, error-free submission with the full documentary package.',
    ],
    faqs: [
      { q: 'What score do I need for an Invitation to Apply?', a: 'Scores vary by stream and draw. General Canadian draws currently sit in the ~500s; French-First and skilled-trade draws can be meaningfully lower. We check your exact range against the latest draws before we start.' },
      { q: 'How long does Express Entry take?', a: 'From ITA to a decision, most first-time applicants are processed in about 6 months. Time in the pool before an ITA depends on your CRS and draw activity — many candidates are within 12–24 months.' },
      { q: 'My CRS score is below the current cut-off. Can I still get through?', a: 'Often, yes. We look at stream fit, French-first eligibility, category-based draws, and PNP routes that can bypass the pooled cut-off entirely.' },
      { q: 'What documents do I need first?', a: 'Valid passport, language test results (IELTS/CELPIP or TEF/TCF), educational credential assessment (ECA), and employment letters. We give you a tailored checklist once your eligibility is confirmed.' },
    ],
  },
  {
    slug: 'pnp',
    title: 'Provincial Nominee Programs (PNP)',
    tagline: 'Provincial pathways tailored to your skills and location',
    icon: 'pnp',
    blurb: 'Each province nominates candidates that fit its labour market. We match you to the right stream in the right province — many have lower cut-offs than federal Express Entry.',
    who: ['Skilled workers without a high CRS', 'Students graduating in that province', 'In-demand occupation profiles', 'Spouses of in-province workers'],
    steps: [
      'Province & stream selection — Ontario, Manitoba, Saskatchewan, BC, Atlantic and others.',
      'Nomination file — tailored to the province’s labour-market priorities.',
      'PR application — we prepare the federal PR file after nomination is granted.',
    ],
    faqs: [
      { q: 'Which province should I apply through?', a: 'It depends on your occupation, experience, language, and any provincial connections (study, work, family). We run a province-compatibility matrix rather than a one-size-fits-all answer.' },
      { q: 'Do I need a job offer for PNP?', a: 'Not always. Many streams (international graduate, in-demand skills, regional initiatives) do not require a live job offer. We identify offer-free options in your situation.' },
      { q: 'How is PNP different from Express Entry?', a: 'PNP is province-run. Some PNP streams feed into Express Entry for a 600-point boost; others are standalone applications. We tell you which route fits your profile.' },
    ],
  },
  {
    slug: 'family-sponsorship',
    title: 'Family Sponsorship',
    tagline: 'Spousal, parents/grandparents, and dependent children',
    icon: 'family',
    blurb: 'Bring the people you love to Canada. Spousal, conjugal, and parent/grandparent sponsorship handled with the care these cases deserve.',
    who: ['Canadian citizens & PRs sponsoring a spouse or common-law partner', 'Sponsoring parents or grandparents', 'Sponsoring dependent children', 'Conjugal partners living abroad in a genuine relationship'],
    steps: [
      'Relationship & eligibility review — we establish what the IRCC needs to see.',
      'Sponsorship package — your household, tax, and relationship evidence, organized.',
      'Open/Closed strategy — where an open work/study permit makes sense early.',
    ],
    faqs: [
      { q: 'How long does spousal sponsorship take?', a: 'Processing times vary; inland spousal sponsorship is currently in the several-months range. We give you a current-time estimate and flag where open-permit strategy can shorten waiting time.' },
      { q: 'Can I sponsor my long-distance partner?', a: 'If you live together less than half the time, live outside Canada, and could not reasonably live together, conjugal sponsorship may apply. This is one of the trickiest categories — professional handling matters.' },
      { q: 'Do my sponsor’s assets or income affect approval?', a: 'Yes. Sponsorship requires meeting minimum low-income cut-offs and no social-assistance reliance (unless waived). We verify your sponsor eligibility before you commit.' },
    ],
  },
  {
    slug: 'study-permit',
    title: 'Study Permits & PGWP',
    tagline: 'International students & post-graduation work permits',
    icon: 'study',
    blurb: 'From admission to study permit to the PGWP that can become a PR route. We get the full student pathway right.',
    who: ['International students applying to Canadian DLI', 'Parents of student children', 'Students planning the PGWP → PR route', 'Students switching to work study streams'],
    steps: [
      'Admission & DLI check — confirm the school and program qualify.',
      'Study permit file — financial, biographic and intent evidence.',
      'PGWP strategy — line up the post-graduation permit for a clean PR runway.',
    ],
    faqs: [
      { q: 'What is a PGWP?', a: 'The Post-Graduation Work Permit lets you work in Canada after graduating from an eligible program — up to 3 years depending on program length. It’s a common on-ramp to permanent residence.' },
      { q: 'How much do I need to show in funds?', a: 'You must prove you can cover tuition plus living expenses (the IRCC’s current living-cost figure) for you and any dependents, minus any on-campus or on-campus employment income.' },
      { q: 'Can my parents come with me?', a: 'Yes — parents may apply for visitor or, in some streams, family-accompanying permits tied to your study permit. We handle the family file together so nothing falls through.' },
    ],
  },
  {
    slug: 'work-permit',
    title: 'Work Permits',
    tagline: 'LMIA-based, intra-company transfer & International Mobility',
    icon: 'work',
    blurb: 'Whether you’re an employer hiring abroad or a worker seeking transfer, we match the right permit stream.',
    who: ['Employers hiring foreign workers (LMIA)', 'Multinationals moving staff (intra-company transfer)', 'International Mobility Program (IMP/LMIA-exempt) workers', 'Spouses of international students on open permits'],
    steps: [
      'Stream match — LMIA vs LMIA-exempt vs ICP depends on role, employer, and country of origin.',
      'Employer readiness — LMIA labour test, job offer, wage verification where needed.',
      'Permit application — complete worker file with employer and employee in sync.',
    ],
    faqs: [
      { q: 'Do I need a job offer for a work permit?', a: 'Most work permits do require an offered or held job. LMIA-exempt (International Mobility) routes include CUSMA, intra-company transfers, and certain cultural/academic exchanges that bypass the LMIA.' },
      { q: 'What is an LMIA?', a: 'A Labour Market Impact Assessment is the employer’s proof that hiring a foreign worker won’t harm the Canadian labour market. It’s a precondition for most LMIA-based work permits and often a PR pathway.' },
      { q: 'How long does a work permit take?', a: 'Varies by stream and country of processing. LMIA-based permits often take several months; LMIA-exempt ones can be quicker. We build a processing-timeline expectation before we start.' },
    ],
  },
  {
    slug: 'citizenship',
    title: 'Citizenship & Naturalization',
    tagline: 'From PR card to Canadian citizenship',
    icon: 'citizenship',
    blurb: 'You’ve earned it. We make the naturalization application clean — physical presence, history declaration, and the citizenship test all handled.',
    who: ['PRs ready to apply for citizenship', 'People who may have overstayed or have gaps — we surface issues early', 'Parents naturalizing minor children'],
    faqs: [
      { q: 'When can I apply for citizenship?', a: 'Generally once you’re a permanent resident and have physically been in Canada for at least 730 days in the last 4 years — meeting the tax, criminal and identity requirements as well.' },
      { q: 'Do I need to know a lot of French/English to take the test?', a: 'You need language ability at around CLB 4 (basic working level) in your official language of instruction. We prepare you for the test scope.' },
    ],
    steps: [
      'Eligibility & presence audit — count your days, catch gaps before IRCC does.',
      'Application + history declaration — clean, consistent, and verifiable',
      'Test & ceremony — prep for the citizenship exam and oath.',
    ],
  },
  {
    slug: 'caregivers',
    title: 'Caregivers Program',
    tagline: 'Home Child-Care & Home Support workers',
    icon: 'caregiver',
    blurb: 'Caregiver permits that can lead to PR. We handle the employer match, permit and the PR application together.',
    who: ['Home Child-Care Providers', 'Home Support Workers', 'Caregivers with in-Canada experience', 'Caring for dependent adults (home support)'],
    faqs: [
      { q: 'What experience do I need?', a: 'The Home Child-care and Home Support streams each have experience minima — typically 6 months full-time-equivalent in the last 24 months, in a qualifying caregiving role.' },
      { q: 'Do I need a job offer?', a: 'Yes. Caregiver PR applications require a Canadian job offer, or an existing caregiver permit tied to a qualifying role.' },
    ],
    steps: [
      'Role & experience verification — confirm your role fits the stream you qualify for.',
      'Job offer & permit — where a work permit comes first.',
      'PR application — full caregiver file, including the language requirement.',
    ],
  },
  {
    slug: 'lmia',
    title: 'LMIA & Labour Market Impact Assessments',
    tagline: 'Employer-side work authorization, end-to-end',
    icon: 'lmia',
    blurb: 'We handle the Canadian-side LMIA for employers who want to hire internationally — from filing to post-approval compliance.',
    who: ['Canadian employers hiring abroad', 'Startups and mid-size firms', 'Multi-employer hiring programs', 'Employers wanting a clean, defensible LMIA file'],
    faqs: [
      { q: 'How long does an LMIA take?', a: 'Varies by province and program; commonly 4–10 weeks after filing. We set expectations up front so you can plan your hire around the timing.' },
      { q: 'What if my LMIA is refused?', a: 'Refusals are reviewable. We prepare a review request and, where necessary, re-file with a strengthened labour-test file.' },
    ],
    steps: [
      'Labour-market research — wage, occupation, and regional verification before anything is filed.',
      'Job posting & LMIA filing — complete ESDC submission with defensible supporting documents.',
      'Post-approval compliance — ensure the role, wage, and conditions match what was approved.',
    ],
  },
  {
    slug: 'refugee-asylum',
    title: 'Refugee & Asylum Claims (IRB)',
    tagline: 'Refugee-claimant support at IRB and beyond',
    icon: 'refugee',
    blurb: 'A credible, consistently-told refugee claim is the foundation. We help you prepare, and represent your interests at the IRB.',
    who: ['People inside Canada claiming refugee status', 'Refugee-claimants with pending IRB dates', 'People with a first-instance refusal seeking appeal', 'Refugee claimants with complex persecution histories'],
    faqs: [
      { q: 'What happens in an IRB hearing?', a: 'Your panel hears you and witnesses, examines your claim against the Convention grounds, then decides. Credibility, consistency and detail decide most cases. Preparation is everything.' },
      { q: 'Can I work while my claim is pending?', a: 'Potentially — a pending refugee-claimant work permit may be available depending on where you are in the process and your eligibility. We handle the work-permit request alongside your claim.' },
    ],
    steps: [
      'Claim assessment & consistency check — pressure-test your story for gaps.',
      'Evidence & witness prep — documentary, testimonial, and country-condition evidence.',
      'IRB representation — advocacy at the hearing and, where needed, Federal Court.',
    ],
    urgent: true,
  },
  {
    slug: 'h-c',
    title: 'Humanitarian & Compassionate Applications',
    tagline: 'H&C when the usual routes aren’t available to you',
    icon: 'hc',
    blurb: 'H&C is an equity valve — it can succeed when the formal pathways fail. We build the strong human-rights and compassion record that wins these cases.',
    who: ['People with a failed or expired status', 'Long-term residents who hit a legal hurdle', 'Families in genuine hardship', 'Spouses in failed sponsorships'],
    faqs: [
      { q: 'Is H&C a last resort?', a: 'Usually yes — it’s an exception to the formal rules, not a substitute. That doesn’t mean it’s weak, though: a well-built H&C record is one of the most reliable PR routes for people in difficult circumstances.' },
      { q: 'What makes a strong H&C case?', a: 'Depth of integration into Canada, compelling reasons you cannot or should not leave, evidence of established family and community ties, and a credible account of your circumstances. We build to those criteria.' },
    ],
    steps: [
      'Case strategy — build the human-rights and compassion record, case-by-case.',
      'Evidence collection — character, community, and hardship evidence.',
      'Submission & decision — H&C officer review and, where granted, PR.',
    ],
  },
  {
    slug: 'inadmissibility-appeals',
    title: 'Inadmissibility & Appeals',
    tagline: 'Removal orders, IRB, Federal Court, and time-critical matters',
    icon: 'appeals',
    blurb: 'This is the fastest-moving, highest-stakes side of the practice. We handle suspension of removal, appeals, and IRB/Federal Court filings on strict deadlines.',
    who: ['People facing a removal or deportation order', 'People with an IRB refusal', 'Applicants with inadmissibility findings (criminal, medical, misrepresentation)', 'Anyone approaching a filing deadline'],
    faqs: [
      { q: 'I have a removal order. What should I do first?', a: 'Call us immediately. There are often time-limited suspensions you can seek while your appeal or new application moves forward. Do not wait for a formal letter from any government — the clock may already be running.' },
      { q: 'Can a criminal record block my entry or PR?', a: 'Yes, depending on the offence, its nature, when it occurred, and your rehabilitation. Criminal inadmissibility cases are fact-specific — that is exactly why professional review comes first.' },
    ],
    steps: [
      'Urgent review — deadline map and immediate protection strategy.',
      'Appeal / judicial review — IRB / Federal Court filings on strict timelines.',
      'Residual applications — where the path allows, we file the application that can save the position.',
    ],
    urgent: true,
  },
  {
    slug: 'notary-services',
    title: 'Notary Services',
    tagline: 'Affidavits, invitation letters, certified true copies & travel consents',
    icon: 'notary',
    blurb: 'Notarization is often the difference between a file moving and a file stalled. Same-day service in-person at our Brampton office.',
    who: ['Parents consenting to a minor traveling abroad', 'Anyone needing a court-ready affidavit', 'Home-based business owners needing certified true copies', 'Immigration files waiting on a witness or oath'],
    faqs: [
      { q: 'What documents can you notarize?', a: 'Affidavits, oaths, sworn declarations, consent-to-travel letters, certified true copies, and other documents where a statutory declaration or witnessing is required. We confirm the document’s admissibility before we sign.' },
      { q: 'Do I need to bring an ID?', a: 'Yes — government-issued photo ID. Depending on the document, you may also need to bring the original for comparison.' },
    ],
    steps: [
      'Book a slot — in-person at our Brampton office.',
      'We review and witness — same-day notarization where the document allows.',
      'Send to the right desk — we can help route the document to the receiving officer or agency.',
    ],
  },
  {
    slug: 'other-applications',
    title: 'Other Applications',
    tagline: 'PR card, GCMS notes, PFL responses, TRP, U.S. visas',
    icon: 'other',
    blurb: 'A range of time-sensitive and technical applications handled in one place — PR card renewals, GCMS notes, Procedural Fairness Letters, TRPs, U.S. visas and more.',
    who: ['PR card expiries and renewals', 'Requests for GCMS notes', 'S.40 IRPA Procedural Fairness Letter responses', 'Temporary Resident Permits (TRP)', 'U.S. visitor/B1-B2 visas for Canadians'],
    faqs: [
      { q: 'What are GCMS notes?', a: 'GCMS (Global Case Management System) notes are the officer-to-officer record on your application request. They are the single most useful tool during a hold — we request and interpret them to understand what happens next.' },
      { q: 'Can you help with a Procedural Fairness Letter (PFL)?', a: 'Yes. A PFL is one of the most consequential letters you can receive — it gives you a chance to present arguments before a negative decision. Response quality frequently changes the outcome, and the deadline is tight.' },
    ],
    steps: [
      'Intake & scope — which application is which, and what the deadline is.',
      'Preparation — evidence, legal argument, and submission-ready file.',
      'Filing & follow-up — we file, track, and escalate as needed.',
    ],
  },
];

export function get(slug) {
  return PATHWAYS.find(p => p.slug === slug)
}
export { ICONS }
