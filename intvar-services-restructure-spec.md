# Intvar Automation — Part 3: Service Restructure (3 Pillars + Pricing)

This replaces Phase 14 (content data layer for services) and Phase 16 (Services page) from
Part 2, and corrects a framing issue in Phase 15 (About page). Paste in this order: 22 → 23 → 24 → 25.
If you already built Phase 14/16 exactly as written before, these prompts tell Antigravity to
refactor them, not duplicate them.

---

## PHASE 22 — Replace the Services Data Layer (3 pillars, not 6 blocks)

**PROMPT 11:**
```
Refactor /content/services.ts from a flat 6-item array into a 3-pillar structure.

Replace the existing `services` array with a new typed structure:

interface ServiceCapability {
  name: string;
}

interface ServicePillar {
  id: string;               // "ai-marketing" | "ai-automation" | "custom-software"
  order: number;
  emoji: string;             // 🚀 / ⚙️ / 💻
  title: string;             // "AI Marketing" / "AI Automation" / "Custom Software"
  outcome: string;           // one-line outcome-first pitch, e.g. "Become the business AI recommends."
  isFlagship: boolean;       // true only for AI Marketing
  description: string;       // 2-3 sentence expansion of the outcome for the Services page
  capabilities: ServiceCapability[];  // the "includes" list
  result: string;            // the "Result:" line
  pricing?: {
    label: string;           // e.g. "Complete AI Marketing Package"
    rangeLow: number;        // 21000
    rangeHigh: number;       // 40000
    currency: "INR";
    note: string;            // e.g. "Final quote depends on business size and scope"
  };
  slug: string;
}

Seed exactly these three pillars, in this order:

1. AI Marketing (flagship: true)
   - outcome: "Become the business AI recommends."
   - description: expand in your own words — helping local businesses show up when people ask
     ChatGPT, Gemini, Claude, or Perplexity for the best business in their category, alongside
     traditional local SEO and reputation management.
   - capabilities: AI Visibility Optimization, AI Search Optimization (GEO), Local SEO,
     Google Business Profile Optimization, Reputation Management, Review Generation,
     Knowledge Graph & Entity Optimization, AI-Friendly Website Optimization,
     Authority Content Creation, Competitor AI Visibility Analysis
   - result: "When someone asks an AI assistant for the best business in a category, your
     business has a stronger chance of being the one it recommends."
   - pricing: { label: "Complete AI Marketing Package", rangeLow: 21000, rangeHigh: 40000,
     currency: "INR", note: "Scope depends on business size, number of locations, and
     current online presence" }

2. AI Automation (flagship: false)
   - outcome: "Automate repetitive work and improve efficiency."
   - description: your own words — saving businesses hours per week and speeding up
     customer response times.
   - capabilities: AI Chatbots, WhatsApp Automation, CRM Automation, Sales Automation,
     Lead Management, Appointment Booking, Email Automation, Internal Business Automation,
     Workflow Automation, Document Processing, AI Assistants
   - result: "Businesses save hours every week while providing faster service."
   - pricing: leave undefined for now (quoted per-project, not a fixed range)

3. Custom Software Development (flagship: false)
   - outcome: "Websites, apps, and business systems built for growth."
   - description: your own words — tailored software instead of generic tools.
   - capabilities: Business Websites, Landing Pages, Corporate Websites, Android Apps,
     Dashboards, Customer Portals, Internal Business Systems, ERP/Management Systems,
     Custom Web Applications
   - result: "Businesses get software tailored to their operations instead of relying on
     generic tools."
   - pricing: leave undefined for now (quoted per-project, not a fixed range)

Do not delete the old flat services array yet — comment it out at the bottom of the file with
a note "// legacy 6-item structure, superseded by 3-pillar model" in case anything still
references it, then update all imports to use the new `servicePillars` export instead.
```

---

## PHASE 23 — Update Homepage Services Section (Phase 7 of the original spec)

**PROMPT 12:**
```
Refactor the homepage's dark "OUR SERVICES" section (originally step 32-34) to map over the
new `servicePillars` array instead of the old flat 6-item list.

Changes:
- Grid becomes 3 blocks instead of 6 (or 2x2 with the third spanning full width — your call
  on layout, keep it visually balanced).
- Each block shows: emoji, pillar title, outcome line (not the full capability list — keep
  the homepage version scannable).
- The AI Marketing block (isFlagship: true) gets a subtle visual distinction — e.g. a slightly
  brighter border or a small "Flagship" tag — since it's the lead service.
- Keep the existing fade/slide-in-on-scroll stagger animation, no changes to that.
- Each block links to /services#[pillar.slug] (the anchor on the full services page).

This is a data-source + block-count change only — do not touch the section's background,
spacing, or animation system.
```

---

## PHASE 24 — Rebuild the Services Page Around 3 Pillars

**PROMPT 13:**
```
Rebuild app/services/page.tsx to present the 3-pillar structure instead of 6 flat cards.

Structure:
1. <PageHero variant="dark" eyebrow="OUR SERVICES"
   title="AI Marketing. Automation. Software."
   subtitle="We help businesses get found, automate, and grow with AI." />

2. For each pillar in servicePillars (ordered by `order`), render a full section (id={pillar.slug}
   for anchor linking) with:
   - emoji + title + outcome line as a large heading
   - description paragraph
   - capabilities rendered as a clean tag/pill list (not a dense bullet wall — these are meant
     to be scanned, not read line by line)
   - the `result` line styled as a short highlighted callout, not buried in body text
   - IF pricing exists: a pricing card showing the label, "₹{rangeLow.toLocaleString('en-IN')}
     – ₹{rangeHigh.toLocaleString('en-IN')}", and the note in smaller text below
   - IF pricing does NOT exist: a "Custom quote — book a call to scope your project" line
     instead of a price
   - A "Book a call" pill button linking to /contact for every pillar

3. Visually distinguish the AI Marketing pillar as the lead section — render it first,
   slightly larger heading treatment, and add a small "FLAGSHIP SERVICE" eyebrow tag above
   its title that the other two pillars don't have.

4. End with the same dark CTA band pattern already used on the About page
   ("Ready to build something bold?" style).

Reuse the existing card border/fade-in-on-scroll animation utilities from the homepage —
do not build new animation logic for this page.
```

---

## PHASE 25 — Correct the Team Framing (fixes a wording issue in Phase 15's About page)

Intvar is a team of 5-6 people, not a solo-founder studio. If you already ran Phase 15
(About page) before this correction, use this prompt to fix it — don't rebuild the whole page.

**PROMPT 14:**
```
Update the "who we are" paragraph and any other copy on app/about/page.tsx that implies
Intvar is a solo-founder operation. Intvar Automation is a team of 5-6 people. Rewrite the
paragraph in your own words to reflect a small, focused team — not a single founder — while
keeping the same tone (direct, no corporate fluff, built for Indian SMBs and clinics).

Also check app/contact/page.tsx and the homepage About Strip section (Phase 4) for any
similar solo-founder phrasing and correct it there too. Do not change layout or animations —
copy correction only.
```

---

### Quick reference: what changed vs. Part 2
- Services data model went from 6 flat items to 3 pillars with nested capabilities + optional pricing.
- Homepage services grid: 6 blocks → 3 blocks, AI Marketing visually flagged as flagship.
- Services page: flat card grid → full pillar sections with pricing/quote callouts and anchors.
- Team framing corrected everywhere: team of 5-6, not solo founder.

**Paste order:** 22 → 23 → 24 → 25. Do 22 first — 23 and 24 both depend on the new data shape existing.
