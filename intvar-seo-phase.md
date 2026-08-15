# Intvar Automation — Phase 2: Technical Fixes + Keyword-Ranking Build Prompts

Source reports: Technical SEO Audit (Aug 15, 2026) + Alwar/Rajasthan Keyword Strategy.
Run in order — Phase 0 gates everything else (Google can't rank pages it can't render/index properly).

**Guardrail baked into every page-creation prompt below:** no templated find-and-replace city/keyword pages. Each new page needs at least one genuinely unique content block (real local detail, real pain point, real case study slot) or it's a duplicate-content risk. This keeps you on the 21-page-style discipline instead of the 300+ page matrix the keyword report sketches.

---

## PHASE 0 — Critical Technical Fixes (do first, in this order)

**0.1 — Lazy-load the 3D Canvas**
```
In Hero.tsx, the Canvas from @react-three/fiber is currently imported synchronously, blocking hydration and hurting LCP/TBT. Replace it with next/dynamic, ssr: false, and a lightweight loading fallback (a CSS skeleton, not a spinner that shifts layout). Do not remove or simplify the 3D scene itself — only change how/when it loads. Show me the diff.
```

**0.2 — Server-render the Hero H1**
```
Hero.tsx is a full "use client" component, so the H1 ("One system to find, follow up, and keep every customer.") depends on client hydration to appear. Refactor so the H1 text itself is rendered by a Server Component (page.tsx passes it as children/props), and only the TextReveal/GSAP animation wrapper stays client-side. The visual animation should be unchanged — this is a rendering-boundary fix, not a design fix.
```

**0.3 — Fix GSAP ScrollTrigger hydration/CLS**
```
Audit every component using GSAP ScrollTrigger with a typeof window !== 'undefined' guard. Replace that pattern with the official useGSAP hook (or a properly-scoped useLayoutEffect) so ScrollTrigger recalculates pin/scroll heights only after paint, preventing layout shift on hydration. List every file changed.
```

**0.4 — Video preload strategy**
```
The background video in page.tsx (A_sleek_dark_mode_abstract_D.mp4) has no explicit preload strategy. Set preload="metadata", and if the video is purely decorative, wrap it in an IntersectionObserver so it doesn't start loading until the user scrolls near it. Keep the existing poster fix from the last SEO pass intact.
```

**0.5 — Centralize schema generation + activate HowToSchema**
```
There's a HowToSchema.tsx component in the codebase that isn't wired into any page, and JSON-LD is currently hardcoded per-file with dangerouslySetInnerHTML. Create a single src/lib/seo/schema.ts utility that generates LocalBusiness, Service, Article, BreadcrumbList, FAQPage, and HowTo JSON-LD from typed input objects. Migrate all existing hardcoded schema (layout.tsx, blog/[slug], work/[slug]) to use this utility. Then integrate HowToSchema into the service pages where a "how we work" / process section exists.
```

**0.6 — Dynamic canonical tags**
```
layout.tsx currently hardcodes the canonical URL to the homepage for every route. Fix generateMetadata (or the metadata export) on every page so canonical resolves to that page's actual path, preventing /services from cannibalizing the homepage in search results.
```

**0.7 — Preconnect + font/analytics check**
```
Check layout.tsx for any external font or analytics origins that aren't using next/font/google already. Add <link rel="preconnect"> for any remaining third-party origins (fonts, analytics, embed scripts). Report what you found.
```

---

## PHASE 1 — Site Architecture Rebuild (matches the keyword report's structure, trimmed to avoid duplicate-content risk)

**1.1 — Restructure navigation and routes**
```
Propose (don't yet build) a route structure under /services and /locations matching this hierarchy, and tell me which routes already exist vs need to be created:

/services/website-development
/services/software-development
/services/android-app-development
/services/ai-solutions
/services/business-automation
/industries/[clinics|schools|gyms|hotels|restaurants|retail|real-estate|manufacturing]
/locations/alwar (already exists per prior pass)
/locations/bhiwadi
/locations/jaipur

Do not create Neemrana, Kota, Ajmer, Jodhpur, or Rajasthan-wide pages yet — those are Phase 3, only after Alwar/Bhiwadi/Jaipur pages are indexed and showing traffic in Search Console.
```

**1.2 — Build the 5 core service pages targeting Tier-1 keywords**
```
Create or upgrade these 5 pages, each with a distinct H1 and metadata targeting its top keyword cluster from the keyword report:

- /services/website-development → "Website Development Company in Alwar" cluster
- /services/software-development → "Custom Software Development Alwar" / ERP / CRM cluster
- /services/android-app-development → "Android App Development Company in Alwar" cluster
- /services/ai-solutions → "AI Development Company Alwar" / AI agents / chatbots cluster
- /services/business-automation → "Business Automation Alwar" / WhatsApp / lead / workflow automation cluster

Use the ServiceSchema and FAQPage schema components already built. Leave body copy as [COPY: ...] placeholders — you build structure, metadata, schema, and internal links between the 5 pages; I'll write the actual copy so the pain-point framing is accurate to how we actually sell.
```

**1.3 — Cross-link the 5 service pages + homepage**
```
Update the homepage and each of the 5 new service pages so every service page links to at least 2 others with descriptive anchor text, and the homepage links to all 5. Show me the link map before writing.
```

---

## PHASE 2 — Alwar Industry Pages (highest buyer-intent keywords from the report)

**2.1 — Scaffold industry landing pages**
```
Create /industries/[slug] pages for: clinics, schools, gyms, hotels, restaurants, retail, real-estate, manufacturing. Each page should: (a) target its specific management-software keyword cluster (e.g. clinic → "clinic management software Alwar", "patient management software Alwar"), (b) reference which of the 5 core services applies (usually Software + Automation), (c) have a distinct pain-point framing per industry — do NOT reuse the same paragraph structure across industries. Use Service schema + FAQPage schema. Leave copy as [COPY: ...] placeholders.
```

**2.2 — Link industries to services and locations**
```
Wire internal links: each industry page should link to the relevant service page(s) and to /locations/alwar. Each service page should link to at least 2-3 relevant industry pages (e.g. business-automation links to clinics, real-estate, retail).
```

---

## PHASE 3 — Additional Locations (only after Phase 1-2 pages have Search Console impressions)

**3.1 — Bhiwadi page (industrial/manufacturing angle)**
```
Build /locations/bhiwadi. Do not copy the Alwar page's body text. Bhiwadi's content should emphasize the manufacturing/industrial ecosystem angle from the keyword report (ERP, factory management software, business automation for manufacturers) since that's Bhiwadi's actual local business mix, unlike Alwar's broader SMB/clinic mix. Add city-specific LocalBusiness schema (areaServed: Bhiwadi).
```

**3.2 — Jaipur page**
```
Build /locations/jaipur. Jaipur is the most competitive market in the report — position this page around the AI/automation convergence angle ("digital systems that help businesses get customers, manage operations, and automate work") rather than competing head-on for generic "software company Jaipur." Unique content block required — do not templatize from Alwar/Bhiwadi.
```

**3.3 — NAP + schema consistency check across new location pages**
```
Audit Name/Address/Phone and business-hours references across all location pages (Alwar, Bhiwadi, Jaipur) plus the footer and layout.tsx schema. Flag any inconsistency in formatting.
```

---

## PHASE 4 — Problem/Pain-Point Content Cluster (the report's "secret weapon" keywords)

**4.1 — Scaffold pain-point blog posts**
```
Create blog post scaffolding (frontmatter + metadata + Article schema) for 5 posts targeting problem-intent keywords rather than category keywords, e.g.: "How to automate WhatsApp lead follow-up for your Alwar business", "Do you need a clinic appointment system? Signs to look for", "Automating invoice generation: a guide for Rajasthan SMBs". Structure and schema only — [COPY: ...] placeholders for body text. Cross-link each post to its most relevant service and industry page.
```

---

## PHASE 5 — Validation Pass

**5.1 — Full regression + ranking-readiness check**
```
Across every page built in Phases 1-4: confirm unique title/description, one H1, working dynamic canonical, schema present and valid, and no page with fully duplicated body content against another page. Output a markdown table: route | target keyword cluster | unique content confirmed? | schema present? | internal links in. Flag anything that looks templated/thin.
```

**5.2 — Core Web Vitals re-check post-build**
```
Now that Phase 0's fixes are in place and Phases 1-4 added new pages, re-audit LCP/CLS/TBT risk on the 3 heaviest pages (homepage, and the two service pages with the most content). Confirm the Phase 0 fixes weren't undone by new additions.
```

---

## Sequencing notes
- **Phase 0 is non-negotiable and first** — it's the difference between Google being able to properly crawl/score the site vs. not, regardless of how good the keyword targeting is.
- **Phases 1-2 (Alwar core + industries) are where the real ranking opportunity is** per the keyword report's own priority tiers (🔥🔥🔥 keywords are almost all Alwar-first).
- **Hold Phase 3 (more cities) until you have Search Console data** showing the Alwar pages are indexed and getting impressions — building 8 more city pages before that just multiplies the duplicate-content risk without evidence it'll pay off.
- Every [COPY: ...] placeholder is intentional: Antigravity builds the skeleton, schema, and internal linking; you write the actual sales copy so pain points and pricing stay accurate.
