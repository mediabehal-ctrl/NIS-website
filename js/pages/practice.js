/* Practice areas index */
import { ctaBand } from "./components.js";

const AREAS = [
  { slug: "express-entry",      code: "EE", name: "Express Entry",            desc: "CRS-optimised federal skilled worker, CEC and Canadian Experience filings built to survive a refusal, not just hope for one." },
  { slug: "pnp",                code: "PN", name: "Provincial Nominee (PNP)", desc: "Ontario (OINP), Atlantic and other PNPs with employer linkage and language strategy integrated from day one." },
  { slug: "family-sponsorship", code: "F",  name: "Family Sponsorship",       desc: "Spouse, con-joinder, orphan and dependent parent sponsorships run to a single, defensible standard." },
  { slug: "study-permit",       code: "S",  name: "Study & PGWP",             desc: "Study permits with genuine-student positioning and Post-Graduation Work Permit strategy mapped before filing." },
  { slug: "work-permit",        code: "W",  name: "Work Permits",             desc: "LMIA-supported, CUSMA and intra-company transfers with compliance baked into the filing itself." },
  { slug: "citizenship",        code: "C",  name: "Citizenship",              desc: "Residency, intent and oath-preparation for adults, couples and families applying for Canadian citizenship." },
  { slug: "refugee-asylum",     code: "R",  name: "Refugee / Asylum (IRB)",   desc: "In-Canada and offshore protection claims handled by a dedicated IRB litigation team." },
  { slug: "caregivers",         code: "H",  name: "Caregivers",               desc: "Home Child Care and Home Support streams with employer-compliance and language pathways." },
  { slug: "appeals-removal",    code: "A",  name: "Inadmissibility & Appeals",desc: "Refusals, removal orders, RPs, inadmissibility and removal-protection cases — the hard file, end to end." },
  { slug: "notary-services",    code: "N",  name: "Notary & Certified Copy",  desc: "Certified copies, apostille and notarial work for the documents IRCC will ask for next." },
];

export function practice() {
  return `
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span><span class="current">Practice Areas</span>
        </nav>
        <h1>Practice areas, <em>not just services</em>.</h1>
        <p class="lead">Each of these is a discipline with its own evidence standard, its own timeline, and its own playbook. We don't generalize — we build the file for the path you're actually on.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid" style="grid-template-columns:repeat(2,1fr);">
          ${AREAS.map((a) => `
            <a class="card-link" href="#/practice/${a.slug}">
              <span class="icon" aria-hidden="true">${a.code}</span>
              <h3>${a.name}</h3>
              <p>${a.desc}</p>
              <span class="more">Explore pathway</span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
    ${ctaBand()}
  `;
}
