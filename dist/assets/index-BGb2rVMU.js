(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const h={en:{brand_tag:"Canada's Immigration Specialists",nav_home:"Home",nav_about:"About",nav_practice:"Practice Areas",nav_results:"Results",nav_resources:"Resources",nav_fees:"Fees",nav_contact:"Contact",nav_assessment:"Free Assessment",nav_portal:"Client Portal",nav_cta:"Book a Free Consultation",topbar_loc:"Brampton · Etobicoke · ON",topbar_call:"Free urgent line",footer_disclaimer:"Visiting this website and submitting a contact form does not create a lawyer–client or consultant–client relationship. An engagement is formed only once a retainer is signed.",footer_privacy:"Privacy Policy",cta_primary:"Book a Free Consultation",cta_secondary:"Call (416) 555-0199"},fr:{brand_tag:"Spécialistes en immigration au Canada",nav_home:"Accueil",nav_about:"À propos",nav_practice:"Champs de pratique",nav_results:"Résultats",nav_resources:"Ressources",nav_fees:"Tarifs",nav_contact:"Contact",nav_assessment:"Évaluation gratuite",nav_portal:"Portail client",nav_cta:"Réserver une consultation gratuite",topbar_loc:"Brampton · Etobicoke · ON",topbar_call:"Ligne d'urgence gratuite",footer_disclaimer:"Visiter ce site et envoyer un formulaire ne crée pas de relation avocat-client ou consultant-client. Une relation est formée uniquement après la signature d'un mandat.",footer_privacy:"Politique de confidentialité",cta_primary:"Réserver une consultation gratuite",cta_secondary:"Tél. (416) 555-0199"}};let v="en";function P(){const e=typeof localStorage<"u"?localStorage.getItem("nis-lang"):null;if(e==="fr"||e==="en")return e;const a=typeof navigator<"u"?navigator.language:"";return/^fr/i.test(a)?"fr":"en"}function I(e){h[e]&&(v=e)}function l(e){return h[v]&&h[v][e]||h.en[e]||e}const k=[{href:"#/",key:"nav_home"},{href:"#/about",key:"nav_about"},{href:"#/practice",key:"nav_practice"},{href:"#/results",key:"nav_results"},{href:"#/resources",key:"nav_resources"},{href:"#/fees",key:"nav_fees"},{href:"#/contact",key:"nav_contact"}],C=(e,a)=>`
  <a href="tel:+14165550199" style="display:inline-flex;align-items:center;gap:.375rem;text-decoration:none;">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${e}</svg>
    <span>${a}</span>
  </a>
`;function A(){const e=document.getElementById("site-header");if(!e)return;const a='<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z"/>',t='<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>';e.innerHTML=`
    <div class="header-top">
      <div class="header-top-inner">
        <div style="display:flex;gap:1.25rem;align-items:center;flex-wrap:wrap;">
          ${C(t,"Mon–Fri 9:00–5:00 · Sat 10:00–2:00")}
          <a href="mailto:hello@niscanada.com" style="text-decoration:none;">hello@niscanada.com</a>
        </div>
        <div class="header-top-right">
          ${C(a,"Urgent line (416) 555-0199")}
          <button class="lang-toggle" type="button" aria-label="Toggle language">EN / FR</button>
        </div>
      </div>
    </div>

    <div class="header-main">
      <a class="brand" href="#/" aria-label="Nijjar Immigration Services — Home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 21V9l9-6 9 6v12"/>
            <path d="M9 21v-6h6v6"/>
          </svg>
        </span>
        <span class="brand-text">
          <span class="brand-name">Nijjar Immigration</span>
          <span class="brand-tag">${l("brand_tag")}</span>
        </span>
      </a>

      <nav class="nav" aria-label="Primary navigation">
        ${k.map(s=>`
          <a href="${s.href}" data-nav="${s.href.slice(1)}">${l(s.key)}</a>
        `).join("")}
        <div class="nav-cta">
          <a href="#/assessment" class="btn btn-primary btn-sm" data-i18n-cta>${l("nav_cta")}</a>
        </div>
      </nav>

      <button class="mobile-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
        </svg>
      </button>
    </div>

    <nav class="mobile-nav" aria-label="Mobile navigation">
      ${k.map(s=>`<a href="${s.href}" data-nav="${s.href.slice(1)}">${l(s.key)}</a>`).join("")}
      <a href="#/assessment" class="btn btn-primary">${l("nav_cta")}</a>
      <a href="#/portal" class="btn btn-secondary">${l("nav_portal")}</a>
    </nav>
  `}function S(){const e=document.getElementById("site-footer");if(!e)return;const a=new Date().getFullYear();e.innerHTML=`
    <div class="footer-grid">
      <div class="footer-col footer-brand">
        <span class="brand-name">Nijjar Immigration Services</span>
        <p>Canada's immigration specialists. Express Entry, Provincial Nominee, family sponsorship, study & work permits, citizenship, IRB proceedings. CICC-regulated · RCIC-IRB.</p>
        <div class="footer-badges" aria-label="Regulatory membership">
          <span class="fbadge">CICC · ICRC</span>
          <span class="fbadge">RCIC-IRB</span>
          <span class="fbadge">BBB A+ Accredited</span>
          <span class="fbadge">ICRA Member</span>
        </div>
      </div>

      <div class="footer-col">
        <h4>Practice Areas</h4>
        <ul>
          <li><a href="#/practice/express-entry">Express Entry</a></li>
          <li><a href="#/practice/pnp">Provincial Nominee (PNP)</a></li>
          <li><a href="#/practice/family-sponsorship">Family Sponsorship</a></li>
          <li><a href="#/practice/study-permit">Study & PGWP</a></li>
          <li><a href="#/practice/work-permit">Work Permits</a></li>
          <li><a href="#/practice/citizenship">Citizenship</a></li>
          <li><a href="#/practice/appeals-removal">Inadmissibility & Appeals</a></li>
          <li><a href="#/practice">All practice areas →</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Client</h4>
        <ul>
          <li><a href="#/assessment">Free Assessment</a></li>
          <li><a href="#/portal">Client Portal</a></li>
          <li><a href="#/results">Results & Testimonials</a></li>
          <li><a href="#/resources">Resources & Blog</a></li>
          <li><a href="#/fees">Fees & Consultation</a></li>
          <li><a href="#/about">About the Firm</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+14165550199">(416) 555-0199</a></li>
          <li><a href="mailto:hello@niscanada.com">hello@niscanada.com</a></li>
          <li>Brampton, ON · Etobicoke, ON</li>
          <li>Mon–Fri 9:00–5:00 · Sat 10:00–2:00</li>
          <li style="margin-top:.75rem;">
            <a href="https://wa.me/14165550199" target="_blank" rel="noopener" style="color:#4ade80;font-weight:600;">WhatsApp us →</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div>© ${a} Nijjar Immigration Services. All rights reserved.</div>
      <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap;">
        <span>PIPEDA compliant</span>
        <span aria-hidden="true">·</span>
        <a href="#/privacy">Privacy Policy</a>
        <span aria-hidden="true">·</span>
        <a href="#/terms">Terms</a>
      </div>
    </div>

    <div class="container" style="padding:1.25rem 1.5rem 2rem;border-top:1px solid rgba(255,255,255,.1);font-size:.75rem;color:rgba(255,255,255,.55);line-height:1.7;">
      <p style="margin:0;">${l("footer_disclaimer")} Licensed immigration consultant registration available on request. Services available in English, French, Punjabi, Urdu, Hindi, and other common community languages on request.</p>
    </div>
  `}function g({title:e="Ready to take the first step?",sub:a="A short conversation can save you months of confusion. Book a free, no-pressure consultation — we'll tell you honestly if you qualify.",primary:t={href:"#/assessment",label:"Book a Free Consultation"},secondary:s={href:"tel:+14165550199",label:"Call (416) 555-0199"},danger:i=null}){return`
    <section class="cta-band" aria-label="Get started">
      <div class="container">
        <div class="cta-band-inner">
          <div>
            <h2>${e}</h2>
            <p>${a}</p>
          </div>
          <div class="btn-group">
            ${t?`<a href="${t.href}" class="btn btn-primary btn-lg">${t.label}</a>`:""}
            ${s?`<a href="${s.href}" class="btn btn-ghost btn-lg">${s.label}</a>`:""}
            ${i?`<a href="${i.href}" class="btn btn-danger btn-lg">${i.label}</a>`:""}
          </div>
        </div>
      </div>
    </section>
  `}function W(){return`
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
  `}function w({slug:e,title:a,blurb:t,icon:s,tags:i=[],urgent:n=!1}){const r=i.length?`<ul class="tag-list">${i.map(y=>`<li>${y}</li>`).join("")}</ul>`:"";return`
    <a class="pathway-card${n?" urgent":""}" href="#/practice/${e}">
      <div class="card-top">
        <span class="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${s}</svg>
        </span>
        ${n?'<span class="urgent-tag">Urgent matter</span>':""}
      </div>
      <h3>${a}</h3>
      <p>${t}</p>
      ${r}
      <span class="more">Learn more →</span>
    </a>
  `}const m={express:'<path d="M2 12h20M12 2c5 4 5 16 0 20M12 2c-5 4-5 16 0 20M2 12c3-2 17-2 20 0M2 12c3 2 17 2 20 0"/>',pnp:'<path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',family:'<circle cx="9" cy="7" r="4"/><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M22 21v-2a4 4 0 0 0-3-3.85"/>',study:'<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5"/>',work:'<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',citizen:'<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/>',caregiver:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>',lmia:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2"/><path d="M9 12h6M9 16h6"/>',refuge:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',hc:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',appeals:'<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><path d="M5 3 2 6l3 3"/>',notary:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',other:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'},u=[{slug:"express-entry",title:"Express Entry",tagline:"Skilled worker, Canadian Experience & French-first streams",icon:"express",blurb:"The fast-track for skilled workers. We score your CRS, identify the right stream (FSWP, CEC, FSTP), and get you an Invitation to Apply.",who:["Skilled workers outside Canada","Workers already in Canada (CEC)","Bilingual candidates (French-speaking)","Provincially-nominated Express Entry candidates"],steps:["Eligibility & CRS scoring — we verify points against current draw cut-offs and pick the strongest stream.","Profile optimization — experience, language, education, and occupation strategy to lift your score.","Profile submission — EOI profile into the pool, monitored through every draw.","ITA & application — complete, error-free submission with the full documentary package."],faqs:[{q:"What score do I need for an Invitation to Apply?",a:"Scores vary by stream and draw. General Canadian draws currently sit in the ~500s; French-First and skilled-trade draws can be meaningfully lower. We check your exact range against the latest draws before we start."},{q:"How long does Express Entry take?",a:"From ITA to a decision, most first-time applicants are processed in about 6 months. Time in the pool before an ITA depends on your CRS and draw activity — many candidates are within 12–24 months."},{q:"My CRS score is below the current cut-off. Can I still get through?",a:"Often, yes. We look at stream fit, French-first eligibility, category-based draws, and PNP routes that can bypass the pooled cut-off entirely."},{q:"What documents do I need first?",a:"Valid passport, language test results (IELTS/CELPIP or TEF/TCF), educational credential assessment (ECA), and employment letters. We give you a tailored checklist once your eligibility is confirmed."}]},{slug:"pnp",title:"Provincial Nominee Programs (PNP)",tagline:"Provincial pathways tailored to your skills and location",icon:"pnp",blurb:"Each province nominates candidates that fit its labour market. We match you to the right stream in the right province — many have lower cut-offs than federal Express Entry.",who:["Skilled workers without a high CRS","Students graduating in that province","In-demand occupation profiles","Spouses of in-province workers"],steps:["Province & stream selection — Ontario, Manitoba, Saskatchewan, BC, Atlantic and others.","Nomination file — tailored to the province’s labour-market priorities.","PR application — we prepare the federal PR file after nomination is granted."],faqs:[{q:"Which province should I apply through?",a:"It depends on your occupation, experience, language, and any provincial connections (study, work, family). We run a province-compatibility matrix rather than a one-size-fits-all answer."},{q:"Do I need a job offer for PNP?",a:"Not always. Many streams (international graduate, in-demand skills, regional initiatives) do not require a live job offer. We identify offer-free options in your situation."},{q:"How is PNP different from Express Entry?",a:"PNP is province-run. Some PNP streams feed into Express Entry for a 600-point boost; others are standalone applications. We tell you which route fits your profile."}]},{slug:"family-sponsorship",title:"Family Sponsorship",tagline:"Spousal, parents/grandparents, and dependent children",icon:"family",blurb:"Bring the people you love to Canada. Spousal, conjugal, and parent/grandparent sponsorship handled with the care these cases deserve.",who:["Canadian citizens & PRs sponsoring a spouse or common-law partner","Sponsoring parents or grandparents","Sponsoring dependent children","Conjugal partners living abroad in a genuine relationship"],steps:["Relationship & eligibility review — we establish what the IRCC needs to see.","Sponsorship package — your household, tax, and relationship evidence, organized.","Open/Closed strategy — where an open work/study permit makes sense early."],faqs:[{q:"How long does spousal sponsorship take?",a:"Processing times vary; inland spousal sponsorship is currently in the several-months range. We give you a current-time estimate and flag where open-permit strategy can shorten waiting time."},{q:"Can I sponsor my long-distance partner?",a:"If you live together less than half the time, live outside Canada, and could not reasonably live together, conjugal sponsorship may apply. This is one of the trickiest categories — professional handling matters."},{q:"Do my sponsor’s assets or income affect approval?",a:"Yes. Sponsorship requires meeting minimum low-income cut-offs and no social-assistance reliance (unless waived). We verify your sponsor eligibility before you commit."}]},{slug:"study-permit",title:"Study Permits & PGWP",tagline:"International students & post-graduation work permits",icon:"study",blurb:"From admission to study permit to the PGWP that can become a PR route. We get the full student pathway right.",who:["International students applying to Canadian DLI","Parents of student children","Students planning the PGWP → PR route","Students switching to work study streams"],steps:["Admission & DLI check — confirm the school and program qualify.","Study permit file — financial, biographic and intent evidence.","PGWP strategy — line up the post-graduation permit for a clean PR runway."],faqs:[{q:"What is a PGWP?",a:"The Post-Graduation Work Permit lets you work in Canada after graduating from an eligible program — up to 3 years depending on program length. It’s a common on-ramp to permanent residence."},{q:"How much do I need to show in funds?",a:"You must prove you can cover tuition plus living expenses (the IRCC’s current living-cost figure) for you and any dependents, minus any on-campus or on-campus employment income."},{q:"Can my parents come with me?",a:"Yes — parents may apply for visitor or, in some streams, family-accompanying permits tied to your study permit. We handle the family file together so nothing falls through."}]},{slug:"work-permit",title:"Work Permits",tagline:"LMIA-based, intra-company transfer & International Mobility",icon:"work",blurb:"Whether you’re an employer hiring abroad or a worker seeking transfer, we match the right permit stream.",who:["Employers hiring foreign workers (LMIA)","Multinationals moving staff (intra-company transfer)","International Mobility Program (IMP/LMIA-exempt) workers","Spouses of international students on open permits"],steps:["Stream match — LMIA vs LMIA-exempt vs ICP depends on role, employer, and country of origin.","Employer readiness — LMIA labour test, job offer, wage verification where needed.","Permit application — complete worker file with employer and employee in sync."],faqs:[{q:"Do I need a job offer for a work permit?",a:"Most work permits do require an offered or held job. LMIA-exempt (International Mobility) routes include CUSMA, intra-company transfers, and certain cultural/academic exchanges that bypass the LMIA."},{q:"What is an LMIA?",a:"A Labour Market Impact Assessment is the employer’s proof that hiring a foreign worker won’t harm the Canadian labour market. It’s a precondition for most LMIA-based work permits and often a PR pathway."},{q:"How long does a work permit take?",a:"Varies by stream and country of processing. LMIA-based permits often take several months; LMIA-exempt ones can be quicker. We build a processing-timeline expectation before we start."}]},{slug:"citizenship",title:"Citizenship & Naturalization",tagline:"From PR card to Canadian citizenship",icon:"citizenship",blurb:"You’ve earned it. We make the naturalization application clean — physical presence, history declaration, and the citizenship test all handled.",who:["PRs ready to apply for citizenship","People who may have overstayed or have gaps — we surface issues early","Parents naturalizing minor children"],faqs:[{q:"When can I apply for citizenship?",a:"Generally once you’re a permanent resident and have physically been in Canada for at least 730 days in the last 4 years — meeting the tax, criminal and identity requirements as well."},{q:"Do I need to know a lot of French/English to take the test?",a:"You need language ability at around CLB 4 (basic working level) in your official language of instruction. We prepare you for the test scope."}],steps:["Eligibility & presence audit — count your days, catch gaps before IRCC does.","Application + history declaration — clean, consistent, and verifiable","Test & ceremony — prep for the citizenship exam and oath."]},{slug:"caregivers",title:"Caregivers Program",tagline:"Home Child-Care & Home Support workers",icon:"caregiver",blurb:"Caregiver permits that can lead to PR. We handle the employer match, permit and the PR application together.",who:["Home Child-Care Providers","Home Support Workers","Caregivers with in-Canada experience","Caring for dependent adults (home support)"],faqs:[{q:"What experience do I need?",a:"The Home Child-care and Home Support streams each have experience minima — typically 6 months full-time-equivalent in the last 24 months, in a qualifying caregiving role."},{q:"Do I need a job offer?",a:"Yes. Caregiver PR applications require a Canadian job offer, or an existing caregiver permit tied to a qualifying role."}],steps:["Role & experience verification — confirm your role fits the stream you qualify for.","Job offer & permit — where a work permit comes first.","PR application — full caregiver file, including the language requirement."]},{slug:"lmia",title:"LMIA & Labour Market Impact Assessments",tagline:"Employer-side work authorization, end-to-end",icon:"lmia",blurb:"We handle the Canadian-side LMIA for employers who want to hire internationally — from filing to post-approval compliance.",who:["Canadian employers hiring abroad","Startups and mid-size firms","Multi-employer hiring programs","Employers wanting a clean, defensible LMIA file"],faqs:[{q:"How long does an LMIA take?",a:"Varies by province and program; commonly 4–10 weeks after filing. We set expectations up front so you can plan your hire around the timing."},{q:"What if my LMIA is refused?",a:"Refusals are reviewable. We prepare a review request and, where necessary, re-file with a strengthened labour-test file."}],steps:["Labour-market research — wage, occupation, and regional verification before anything is filed.","Job posting & LMIA filing — complete ESDC submission with defensible supporting documents.","Post-approval compliance — ensure the role, wage, and conditions match what was approved."]},{slug:"refugee-asylum",title:"Refugee & Asylum Claims (IRB)",tagline:"Refugee-claimant support at IRB and beyond",icon:"refugee",blurb:"A credible, consistently-told refugee claim is the foundation. We help you prepare, and represent your interests at the IRB.",who:["People inside Canada claiming refugee status","Refugee-claimants with pending IRB dates","People with a first-instance refusal seeking appeal","Refugee claimants with complex persecution histories"],faqs:[{q:"What happens in an IRB hearing?",a:"Your panel hears you and witnesses, examines your claim against the Convention grounds, then decides. Credibility, consistency and detail decide most cases. Preparation is everything."},{q:"Can I work while my claim is pending?",a:"Potentially — a pending refugee-claimant work permit may be available depending on where you are in the process and your eligibility. We handle the work-permit request alongside your claim."}],steps:["Claim assessment & consistency check — pressure-test your story for gaps.","Evidence & witness prep — documentary, testimonial, and country-condition evidence.","IRB representation — advocacy at the hearing and, where needed, Federal Court."],urgent:!0},{slug:"h-c",title:"Humanitarian & Compassionate Applications",tagline:"H&C when the usual routes aren’t available to you",icon:"hc",blurb:"H&C is an equity valve — it can succeed when the formal pathways fail. We build the strong human-rights and compassion record that wins these cases.",who:["People with a failed or expired status","Long-term residents who hit a legal hurdle","Families in genuine hardship","Spouses in failed sponsorships"],faqs:[{q:"Is H&C a last resort?",a:"Usually yes — it’s an exception to the formal rules, not a substitute. That doesn’t mean it’s weak, though: a well-built H&C record is one of the most reliable PR routes for people in difficult circumstances."},{q:"What makes a strong H&C case?",a:"Depth of integration into Canada, compelling reasons you cannot or should not leave, evidence of established family and community ties, and a credible account of your circumstances. We build to those criteria."}],steps:["Case strategy — build the human-rights and compassion record, case-by-case.","Evidence collection — character, community, and hardship evidence.","Submission & decision — H&C officer review and, where granted, PR."]},{slug:"inadmissibility-appeals",title:"Inadmissibility & Appeals",tagline:"Removal orders, IRB, Federal Court, and time-critical matters",icon:"appeals",blurb:"This is the fastest-moving, highest-stakes side of the practice. We handle suspension of removal, appeals, and IRB/Federal Court filings on strict deadlines.",who:["People facing a removal or deportation order","People with an IRB refusal","Applicants with inadmissibility findings (criminal, medical, misrepresentation)","Anyone approaching a filing deadline"],faqs:[{q:"I have a removal order. What should I do first?",a:"Call us immediately. There are often time-limited suspensions you can seek while your appeal or new application moves forward. Do not wait for a formal letter from any government — the clock may already be running."},{q:"Can a criminal record block my entry or PR?",a:"Yes, depending on the offence, its nature, when it occurred, and your rehabilitation. Criminal inadmissibility cases are fact-specific — that is exactly why professional review comes first."}],steps:["Urgent review — deadline map and immediate protection strategy.","Appeal / judicial review — IRB / Federal Court filings on strict timelines.","Residual applications — where the path allows, we file the application that can save the position."],urgent:!0},{slug:"notary-services",title:"Notary Services",tagline:"Affidavits, invitation letters, certified true copies & travel consents",icon:"notary",blurb:"Notarization is often the difference between a file moving and a file stalled. Same-day service in-person at our Brampton office.",who:["Parents consenting to a minor traveling abroad","Anyone needing a court-ready affidavit","Home-based business owners needing certified true copies","Immigration files waiting on a witness or oath"],faqs:[{q:"What documents can you notarize?",a:"Affidavits, oaths, sworn declarations, consent-to-travel letters, certified true copies, and other documents where a statutory declaration or witnessing is required. We confirm the document’s admissibility before we sign."},{q:"Do I need to bring an ID?",a:"Yes — government-issued photo ID. Depending on the document, you may also need to bring the original for comparison."}],steps:["Book a slot — in-person at our Brampton office.","We review and witness — same-day notarization where the document allows.","Send to the right desk — we can help route the document to the receiving officer or agency."]},{slug:"other-applications",title:"Other Applications",tagline:"PR card, GCMS notes, PFL responses, TRP, U.S. visas",icon:"other",blurb:"A range of time-sensitive and technical applications handled in one place — PR card renewals, GCMS notes, Procedural Fairness Letters, TRPs, U.S. visas and more.",who:["PR card expiries and renewals","Requests for GCMS notes","S.40 IRPA Procedural Fairness Letter responses","Temporary Resident Permits (TRP)","U.S. visitor/B1-B2 visas for Canadians"],faqs:[{q:"What are GCMS notes?",a:"GCMS (Global Case Management System) notes are the officer-to-officer record on your application request. They are the single most useful tool during a hold — we request and interpret them to understand what happens next."},{q:"Can you help with a Procedural Fairness Letter (PFL)?",a:"Yes. A PFL is one of the most consequential letters you can receive — it gives you a chance to present arguments before a negative decision. Response quality frequently changes the outcome, and the deadline is tight."}],steps:["Intake & scope — which application is which, and what the deadline is.","Preparation — evidence, legal argument, and submission-ready file.","Filing & follow-up — we file, track, and escalate as needed."]}],M=["express-entry","family-sponsorship","pnp","study-permit","work-permit","other-applications"];function R(){const e=M.map(a=>u.find(t=>t.slug===a)).filter(Boolean).map(a=>w({slug:a.slug,title:a.title,blurb:a.blurb,icon:m[a.icon]})).join("");return`
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

    ${W()}

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
          ${e}
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

    ${g({title:"Ready to take the first step?",sub:"Book a free, no-obligation assessment and find out if your profile qualifies — or, honestly, where it doesn't."})}
  `}function E(){return`
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
          ${u.map(a=>w({slug:a.slug,title:a.title,blurb:a.blurb,icon:m[a.icon],tags:(a.who||[]).slice(0,2),urgent:!!a.urgent})).join("")}
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

    ${g({title:"Not sure which practice area fits?",sub:"Start with the free assessment. We’ll sort it out with you in one call."})}
  `}function B(e,a){const t=u.find(o=>o.slug===a.slug);if(!t)return null;const s=`<span class="path-icon">${m[t.icon]}</span>`,i=(t.who||[]).map(o=>`<li>${o}</li>`).join(""),n=(t.steps||[]).map((o,y)=>`
    <div class="step" style="grid-column:auto;min-width:100%;">
      <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.5rem;">
        <span class="path-stepnum">${y+1}</span>
      </div>
      <p>${o}</p>
    </div>`).join(""),r=(t.faqs||[]).map(o=>`
    <div class="faq-item">
      <button class="faq-q" type="button" aria-expanded="false">${o.q}</button>
      <div class="faq-a"><p>${o.a}</p></div>
    </div>`).join("");return`
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/practice">Practice areas</a>
          <span class="sep" aria-hidden>/</span>
          <span class="current">${t.title}</span>
        </nav>
        <h1 style="margin:.75rem 0 .5rem;display:flex;align-items:center;gap:1rem;">${s} <span>${t.title}</span></h1>
        <p class="lead" style="margin-top:0;">${t.tagline}. ${t.blurb}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid" style="grid-template-columns:2fr 1fr;gap:3rem;">
          <div>
            <h2 style="margin-top:0;">Who this is for</h2>
            <ul class="checklist">
              ${i}
            </ul>
            <h2>How the process works${(t.who||[]).length,""}</h2>
            <div class="steps path-steps" style="grid-template-columns:1fr;">
              ${n}
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
              <a href="mailto:immigration@nijjarlaw.ca?subject=Urgent%20matter%20(%20${encodeURIComponent(t.title)}%20)" class="btn btn-secondary btn-block" style="margin-bottom:.5rem;">Email urgent</a>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);">
      <div class="container container-narrow">
        <h2 style="margin-top:0;">Common questions on ${t.title}</h2>
        <div class="faq-list">
          ${r}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container container-narrow">
        <h2>Related pathways</h2>
        <div class="grid grid-3" style="margin-top:1.5rem;">
          ${u.filter(o=>o.slug!==t.slug).slice(0,3).map(o=>w({slug:o.slug,title:o.title,blurb:o.blurb,icon:m[o.icon]})).join("")}
        </div>
      </div>
    </section>

    ${g({title:`${t.title} is one of our most common matters.`,sub:"Start with the free assessment. In one call, we’ll confirm the right route and the next step."})}
  `}function j(){return`
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

    ${g({title:"Come ask us anything.",sub:"Your first conversation is free and there's no obligation to proceed. We'll tell you honestly if you qualify — and if we're not the right fit, we'll say that too."})}
  `}function L(){return`
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span><span class="current">Contact</span>
        </nav>
        <h1>Reach the person who'll run the file.</h1>
        <p class="lead">No ticketing systems, no phone trees, no voicemail that evaporates. Call, WhatsApp, or send us a message and a real consultant responds within one business day — in whichever language is easiest for you.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="align-items:start;gap:3rem;">
          <div>
            <h2 style="margin-top:0;">Three offices, one team</h2>
            <div id="offices" class="office-list">
              <div class="office-card">
                <span class="office-tag">Brampton</span>
                <h3>Head office</h3>
                <p class="line"><span>120 King Street East, Suite 280<br>Brampton, ON L6W 1Z6</span></p>
                <p class="line"><a href="tel:+14165550199">(416) 555-0199</a></p>
                <p class="line"><a href="mailto:brampton@nijjarlaw.ca">brampton@nijjarlaw.ca</a></p>
              </div>
              <div class="office-card">
                <span class="office-tag">Toronto</span>
                <h3>Downtown office</h3>
                <p class="line"><span>255 University Avenue, Suite 540<br>Toronto, ON M5G 2W4</span></p>
                <p class="line"><a href="tel:+14165550198">(416) 555-0198</a></p>
                <p class="line"><a href="mailto:toronto@nijjarlaw.ca">toronto@nijjarlaw.ca</a></p>
              </div>
              <div class="office-card">
                <span class="office-tag">Mississauga</span>
                <h3>West-end office</h3>
                <p class="line"><span>3401 Rathburn Road West, Suite 1102<br>Mississauga, ON L5B 2M1</span></p>
                <p class="line"><a href="tel:+14165550197">(519) 555-0197</a></p>
                <p class="line"><a href="mailto:mississauga@nijjarlaw.ca">mississauga@nijjarlaw.ca</a></p>
              </div>
            </div>
          </div>

          <aside>
            <div class="card" style="margin-bottom:1rem;">
              <h3 style="margin-top:0;">Hours</h3>
              <div class="hours-list">
                <p><strong>Mon–Fri</strong><span>9:00 AM – 6:00 PM</span></p>
                <p><strong>Saturday</strong><span>10:00 AM – 2:00 PM</span></p>
                <p><strong>Sunday</strong><span>Closed · call for urgent matters</span></p>
              </div>
              <p class="muted" style="font-size:.8125rem;">We'll confirm your preferred appointment time when we reply.</p>
            </div>
            <div class="card">
              <h3 style="margin-top:0;">Prefer written first?</h3>
              <p class="muted" style="font-size:.9rem;">Use the form — or call. Whatever is easier for you.</p>
              <div class="btn-group">
                <a href="tel:+14165550199" class="btn btn-primary btn-block">Call (416) 555-0199</a>
                <a href="mailto:info@nijjarlaw.ca" class="btn btn-secondary btn-block">Email</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);">
      <div class="container container-narrow">
        <div class="form-card">
          <h2 style="margin-top:0;">Send us a message</h2>
          <p class="muted" style="font-size:.9rem;">We reply within one business day. For urgent matters, call or WhatsApp instead.</p>
          <form data-form="contact" novalidate>
            <div class="form-row">
              <div class="form-field">
                <label for="c-first">First name <span class="required" aria-hidden>*</span></label>
                <input type="text" id="c-first" name="first" required autocomplete="given-name" placeholder="Jane">
              </div>
              <div class="form-field">
                <label for="c-last">Last name <span class="required" aria-hidden>*</span></label>
                <input type="text" id="c-last" name="last" required autocomplete="family-name" placeholder="Doe">
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="c-email">Email <span class="required" aria-hidden>*</span></label>
                <input type="email" id="c-email" name="email" required autocomplete="email" placeholder="you@example.com">
              </div>
              <div class="form-field">
                <label for="c-phone">Phone</label>
                <input type="tel" id="c-phone" name="phone" autocomplete="tel" placeholder="+1 ...">
              </div>
            </div>
            <div class="form-field">
              <label for="c-topic">Which area is this about? <span class="required" aria-hidden>*</span></label>
              <select id="c-topic" name="topic" required>
                <option value="" selected disabled>Choose a practice area…</option>
                <option>Express Entry</option>
                <option>Provincial Nominee Program</option>
                <option>Family sponsorship</option>
                <option>Study permit / PGWP</option>
                <option>Work permit / LMIA</option>
                <option>Citizenship</option>
                <option>Caregivers</option>
                <option>Refugee / asylum (IRB)</option>
                <option>Humanitarian &amp; Compassionate</option>
                <option>Inadmissibility / appeals</option>
                <option>Notary services</option>
                <option>Other / not sure</option>
              </select>
            </div>
            <div class="form-field">
              <label for="c-lang">Preferred language</label>
              <select id="c-lang" name="lang">
                <option>English</option>
                <option>French</option>
                <option>Punjabi</option>
                <option>Urdu</option>
                <option>Hindi</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-field">
              <label for="c-msg">How can we help? <span class="required" aria-hidden>*</span></label>
              <textarea id="c-msg" name="message" required rows="5" placeholder="Tell us a bit about your situation — nothing is confidential, but it helps us prepare for our conversation."></textarea>
            </div>
            <div class="form-consent">
              <label class="checkbox">
                <input type="checkbox" name="consent" required>
                I consent to Nijjar Immigration Services contacting me about this enquiry.
              </label>
            </div>
            <button type="submit" class="btn btn-primary btn-lg">Send message</button>
            <p class="form-note muted" style="font-size:.78rem;margin-top:.75rem;">
              We only use your contact details to respond to this enquiry. We don't share your information.
            </p>
          </form>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 style="margin-top:0;">Not sure yet? Start with a free assessment</h2>
        <p class="lead">Skip the "is this the right topic?" question — a 30-minute conversation sorts it out and tells you the strongest path your profile allows.</p>
        <div class="btn-group">
          <a href="#/assessment" class="btn btn-primary btn-lg">Free Assessment</a>
        </div>
      </div>
    </section>
  `}function F(){return`
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span><span class="current">Free Assessment</span>
        </nav>
        <h1>Find out if you qualify — in one conversation.</h1>
        <p class="lead">A 30-minute, no-charge consultation where a regulated consultant maps your best route and tells you honestly whether you qualify. No card. No obligation. No "we'll call you back with a quote."</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="grid-template-columns:1fr 1.35fr;align-items:start;gap:3rem;">
          <aside>
            <div class="card" style="margin-bottom:1rem;">
              <h3 style="margin-top:0;">What you'll get</h3>
              <ul class="checklist">
                <li>An eligibility read across every path that fits you</li>
                <li>The strongest route, and the realistic timeline for it</li>
                <li>An itemized estimate — no hourly billing, no surprises</li>
                <li>A next-step plan you can act on today</li>
              </ul>
            </div>
            <div class="card">
              <h3 style="margin-top:0;">Prefer to call?</h3>
              <p class="muted" style="font-size:.9rem;">Talk now, or WhatsApp. Same consultant, same answer, either way.</p>
              <div class="btn-group" style="flex-direction:column;align-items:stretch;">
                <a href="tel:+14165550199" class="btn btn-primary btn-block">Call (416) 555-0199</a>
                <a href="https://wa.me/141****0199" target="_blank" rel="noopener" class="btn btn-secondary btn-block">WhatsApp</a>
              </div>
            </div>
          </aside>

          <div class="form-card">
            <h2 style="margin-top:0;">Book your free assessment</h2>
            <form data-form="assessment" novalidate>
              <div class="form-row">
                <div class="form-field">
                  <label for="a-first">First name <span class="required" aria-hidden>*</span></label>
                  <input type="text" id="a-first" name="first" required autocomplete="given-name">
                </div>
                <div class="form-field">
                  <label for="a-last">Last name <span class="required" aria-hidden>*</span></label>
                  <input type="text" id="a-last" name="last" required autocomplete="family-name">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label for="a-email">Email <span class="required" aria-hidden>*</span></label>
                  <input type="email" id="a-email" name="email" required autocomplete="email">
                </div>
                <div class="form-field">
                  <label for="a-phone">Phone <span class="required" aria-hidden>*</span></label>
                  <input type="tel" id="a-phone" name="phone" required autocomplete="tel">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label for="a-status">Where are you right now?</label>
                  <select id="a-status" name="status">
                    <option>I'm outside Canada</option>
                    <option>I'm in Canada on a study or work permit</option>
                    <option>I have permanent residence (PR)</option>
                    <option>I'm a Canadian citizen or sponsoring from Canada</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="form-field">
                  <label for="a-lang">Preferred language</label>
                  <select id="a-lang" name="lang">
                    <option>English</option>
                    <option>French</option>
                    <option>Punjabi</option>
                    <option>Urdu</option>
                    <option>Hindi</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div class="form-field">
                <label for="a-msg">Tell us about your situation</label>
                <textarea id="a-msg" name="message" rows="4" placeholder="Country you're from, work history, family in Canada, any past applications or refusals — whatever you've got."></textarea>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label for="a-date">Preferred day (optional)</label>
                  <input type="date" id="a-date" name="date">
                </div>
              </div>
              <div class="form-consent">
                <label class="checkbox">
                  <input type="checkbox" name="consent" required>
                  I consent to Nijjar Immigration Services contacting me about this assessment request.
                </label>
              </div>
              <button type="submit" class="btn btn-primary btn-lg">Request my free assessment</button>
              <p class="form-note muted" style="font-size:.78rem;margin-top:.75rem;">
                We'll confirm your appointment time in a reply or a call. We don't share your details with anyone.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);">
      <div class="container container-narrow">
        <h2 style="margin-top:0;">What happens after you book</h2>
        <div class="steps" style="grid-template-columns:1fr 1fr;margin-top:1.5rem;">
          <div class="step"><h4>1. We confirm</h4><p>A consultant checks in within one business day to lock a time — call or video, your choice.</p></div>
          <div class="step"><h4>2. Your 30-min consultation</h4><p>We map every route, pick the strongest, and give you a realistic timeline and itemized quote.</p></div>
          <div class="step"><h4>3. Your written plan</h4><p>You get a short plan: what we'll file, by when, for what fee. No hourly billing, no surprise line items.</p></div>
          <div class="step"><h4>4. You decide</h4><p>If it's a fit, we start. If it isn't, we'll point you somewhere it is. No pressure either way.</p></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container container-narrow">
        <h2>A few honest notes before you book</h2>
        <div class="faq-list">
          <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false">Is this really free?</button>
            <div class="faq-a"><p>Yes. The consultation is free and there's no obligation. We charge only for the work — the assessment conversation itself costs you nothing.</p></div>
          </div>
          <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false">What's the difference between assessment and a consultation?</button>
            <div class="faq-a"><p>Same thing, here. An assessment is a focused 30-minute conversation. A "consultation" is the same conversation. We use both words because clients arrive using both, but you're getting the same outcome: an honest read on your eligibility.</p></div>
          </div>
          <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false">Do I need documents ready?</button>
            <div class="faq-a"><p>Not for the call. Bring whatever you have — passport, any old application letters, your CRS score if you've checked one — and we'll tell you what you need next if you proceed.</p></div>
          </div>
        </div>
      </div>
    </section>
  `}function z(){return`
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span><span class="current">Privacy Policy</span>
        </nav>
        <h1>Privacy Policy</h1>
        <p class="lead">Effective date: 1 January 2026. We keep this short, in plain language — because that's what our regulator expects and our clients deserve.</p>
      </div>
    </section>
    <section class="section prose">
      <div class="container container-narrow">
        <h2>What we collect</h2>
        <p>When you contact us — by form, phone, email, or WhatsApp — we collect your name, email, phone number, and a description of your immigration matter. During an engagement we also process whatever documents and details you provide to run the application.</p>

        <h2>How we use it</h2>
        <p>We use your information only to: respond to your enquiry, prepare and file your immigration application, manage our client account, and comply with legal and regulatory requirements (including CICC records obligations).</p>

        <h2>Who we share it with</h2>
        <p>We share your information only: with Immigration, Refugees and Citizenship Canada (IRCC) where required to file; with service providers essential to running our practice (e.g. accounting, hosting); or where law requires it. We never sell your information.</p>

        <h2>Where it is stored</h2>
        <p>Client records are stored in Canada. Documents held to support an immigration filing are retained in line with our regulatory record-keeping obligations and our file-retention policy.</p>

        <h2>Your rights</h2>
        <p>You may request access to, correction of, or deletion of your personal information (subject to our legal retention duties). Email privacy@nijjarlaw.ca.</p>

        <h2>Security</h2>
        <p>We use industry-standard encryption in transit and at rest, and limit staff access to what's needed for the work we're doing for you.</p>

        <p class="muted" style="font-size:.85rem;margin-top:2rem;">This is a model policy. Before publication the firm should confirm the language with its own counsel or its privacy officer, and align it with any provincial privacy statutes that apply to your business (e.g. PIPEDA, provincial equivalents).</p>
      </div>
    </section>
  `}function T(){return`
    <section class="section" style="text-align:center;padding:5rem 1.5rem;">
      <div class="container container-narrow">
        <span class="eyebrow">404</span>
        <h1 style="margin:.75rem 0;">That page doesn't exist.</h1>
        <p class="lead" style="margin:0 auto 2rem;">Either the link is old, or the address is a little off. Let's get you back on the path that does work.</p>
        <div class="btn-group" style="justify-content:center;">
          <a href="#/" class="btn btn-primary btn-lg">Back home</a>
          <a href="#/practice" class="btn btn-secondary btn-lg">Browse practice areas</a>
        </div>
      </div>
    </section>
  `}const $={"/":{title:"Home",description:"Regulated Canadian immigration consultants. Express Entry, PNP, family sponsorship, study & work permits — one honest, multilingual team.",render:()=>R()},"/practice":{title:"Practice Areas",description:"All 13 immigration practice areas we handle: Express Entry, PNP, family sponsorship, study & work permits, citizenship, caregivers, LMIA, refugee/asylum, H&C, appeals, notary and more.",render:()=>E()},"/about":{title:"About Us",description:"The team behind Nijjar Immigration Services — a regulated, multilingual immigration practice serving Toronto, Mississauga and Brampton.",render:()=>j()},"/contact":{title:"Contact",description:"Reach Nijjar Immigration Services. Three GTA offices, one business-day response, in English, French, Punjabi, Urdu and Hindi.",render:()=>L()},"/assessment":{title:"Free Assessment",description:"Book a free, no-obligation 30-minute eligibility assessment. A regulated consultant maps your best route and tells you honestly if you qualify.",render:()=>F()},"/privacy":{title:"Privacy Policy",description:"How we collect, use and protect your personal information.",render:()=>z()},"/404":{title:"Page not found",description:"The page you were looking for is not available.",render:()=>T()}};function H(){const e={};for(const a of u)e[`/practice/${a.slug}`]={title:`${a.title} — Nijjar Immigration Services`,description:a.blurb,render:()=>B(null,{slug:a.slug})};return e}const c={...$,...H()},p=document.getElementById("main");document.getElementById("site-header");document.getElementById("site-footer");const N=document.getElementById("floating-ui");let b="/";try{localStorage.setItem("nis-lang",P())}catch{}let d=P();I(d);function x(){return(location.hash||"#/").slice(1)||"/"}function q(e){if(c[e])return{page:c[e],params:{}};for(const a of Object.keys(c))if(a.startsWith("/practice/")&&a===e)return{page:c[a],params:{}};return null}function _(e){document.querySelectorAll("[data-nav]").forEach(t=>{const s=t.getAttribute("data-nav");s===e?t.setAttribute("aria-current","page"):e.startsWith(s+"/")&&s!=="/"?t.setAttribute("aria-current","location"):t.removeAttribute("aria-current")})}function D(){const e=document.querySelector(".mobile-nav"),a=document.querySelector(".mobile-toggle");e&&e.classList.remove("open"),a&&(a.setAttribute("aria-expanded","false"),a.querySelector("span")?.setAttribute("hidden","hidden"))}function f(e){b=e;const a=q(e)||q("/404"),t=a?a.page:c["/404"];document.title=t.title+" | Nijjar Immigration Services";const s=document.querySelector('meta[name="description"]');s&&t.description&&s.setAttribute("content",t.description);const i=document.querySelector('link[rel="canonical"]');if(i&&i.setAttribute("href",location.origin+location.pathname+e),t.lang){const n=document.querySelector("[data-i18n-cta]");n&&(n.textContent=l("nav_cta"))}p.innerHTML=t.render(a.params),p.scrollTop=0,window.scrollTo({top:0,behavior:"instant"}),b=e,Y(t,a.params),_(e),O(),D()}function O(){const e=document.querySelector(".mobile-toggle"),a=document.querySelector(".mobile-nav");e&&a&&e.addEventListener("click",()=>{const t=a.classList.toggle("open");e.setAttribute("aria-expanded",String(t))})}function Y(e,a){p.querySelectorAll(".faq-q").forEach(s=>{s&&s.addEventListener("click",()=>{const i=s.closest(".faq-item");i&&(i.classList.toggle("open"),s.setAttribute("aria-expanded",i.classList.contains("open")))})});const t=document.querySelector(".lang-toggle");t&&t.addEventListener("click",()=>{d=d==="en"?"fr":"en",I(d);try{localStorage.setItem("nis-lang",d)}catch{}f(b)}),p.querySelectorAll("form[data-form]").forEach(s=>{s.addEventListener("submit",i=>{i.preventDefault(),U(s)})}),p.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",i=>{const n=s.getAttribute("href").slice(1),r=document.getElementById(n);r&&(i.preventDefault(),r.scrollIntoView({behavior:"smooth",block:"start"}))})})}function U(e,a){e.getAttribute("data-form");const t=e.querySelector('[type="submit"]'),s=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="Sending…"),setTimeout(()=>{t&&(t.disabled=!1,t.textContent=s),e.closest(".form-card")||e.parentElement;const i=document.createElement("div");i.className="callout",i.style.cssText="border-left-color: var(--c-success); background: var(--c-success-soft); margin-top: 1rem;",i.innerHTML="<p><strong>Thank you.</strong> We've received your message and will get back to you within one business day. For urgent matters, please call us directly.</p>",e.after(i),e.reset(),i.scrollIntoView({behavior:"smooth",block:"center"})},650)}A();S();G();window.addEventListener("hashchange",()=>f(x()));location.hash?f(x()):(history.replaceState(null,"","#/"),f("/"));function G(){N.innerHTML=`
    <a class="float-whatsapp" href="https://wa.me/14165550199?text=Hi%2C%20I'd%20like%20to%20ask%20about%20a%20Canadian%20immigration%20application."
       target="_blank" rel="noopener"
       aria-label="Chat with us on WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.02 1-1.02 2.45 1.04 2.87 1.19 3.07c.15.2 2.1 3.34 5.1 4.68.72.32 1.28.51 1.71.65.72.24 1.38.2 1.9.12.57-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2.05 21.95a.5.5 0 0 0 .56.6L8 21.21C9.48 22.03 11.17 22.5 13 22.5c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.7 0-3.27-.48-4.62-1.31l-.33-.2-3.2.74.76-3.12-.22-.35A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/></svg>
    </a>
  `}
