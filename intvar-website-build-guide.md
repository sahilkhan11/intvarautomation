# Intvar Automation Website — 40-Step Build Spec (for Antigravity)

Based on directly fetching trionn.com (theme color, section structure, and their published tech stack), plus frame-by-frame review of your screen recording.

**Important:** Their exact marketing sentences aren't reproduced below — I've paraphrased structure/intent only. Write your own copy for every heading/paragraph; don't paste their sentences into your own site (bad for SEO duplicate-content, and it's someone else's brand voice, not yours).

**Confirmed tech stack (from their /services page):** Next.js + React, Tailwind CSS, GSAP + ScrollTrigger, Framer Motion, Three.js/WebGL + shaders for the 3D hero object, Node.js/PHP backend. Background theme color: `#040508`.

---

## PHASE 1 — Project Setup
1. Scaffold Next.js 14 (App Router) + TypeScript + Tailwind CSS.
2. Install `gsap` (with `ScrollTrigger` and `SplitText`/`SplitType` for the letter/line text reveals), `three` + `@react-three/fiber` (for the rotating 3D wireframe object in the hero), `framer-motion` (for simpler UI hover/fade transitions), `lenis` (for buttery smooth scroll — this is almost certainly what's giving the site its "premium" scroll feel).
3. Set global background to `#040508` (near-black, not pure `#000`) and default text to off-white `#f5f5f5`/`#e5e5e5` for that soft-contrast look.
4. Set heading font to a tall condensed grotesk (their headlines look like **Neue Machina**, **PP Neue Montreal**, or **General Sans** — condensed/tight tracking, all-caps for big display type). Body font: a clean sans like Inter or Suisse Intl.
5. Set up Lenis smooth scroll wrapper at the root layout level, and sync it with GSAP's ScrollTrigger (`ScrollTrigger.scrollerProxy` or the standard Lenis+GSAP integration snippet).
6. Build a reusable `<Section variant="dark"|"light">` wrapper — the whole site alternates near-black and off-white (`#f4f4f4`) sections.
7. Build a reusable text-reveal component: splits a heading into lines/words, each animated `yPercent: 100 → 0` + fade, staggered via GSAP timeline, triggered either on load (hero) or `ScrollTrigger` (everywhere else).
8. Build a reusable `<Marquee>` component (CSS or GSAP-driven infinite horizontal scroll) — used for the awards/partner logo strips.

## PHASE 2 — Navbar
9. Sticky/fixed navbar: logo (wordmark + icon) on the left, nav links (Work, Services, About, Contact) center-right, a sound-toggle icon, a pill-shaped "Let's Talk" button, and a "Menu" toggle on the far right.
10. Nav links have an underline-on-hover animation (thin line grows left→right).
11. The "Let's Talk" and "Menu" buttons are pill/rounded-full, dark-filled with light text, subtle scale on hover.
12. Menu toggle opens a full-screen overlay (their overlay showed business-enquiry info + social links + nav) — build this as a slide/fade-in panel with staggered link reveals.
13. Navbar background stays mostly transparent over the dark hero; no heavy blur needed since hero itself is dark — but add `backdrop-blur` once scrolled past light sections so the dark navbar/text stays legible.

## PHASE 3 — Hero Section (Dark)
14. Full-viewport hero, background `#040508`.
15. Center-stage: an abstract 3D wireframe/geometric object (their site uses a Three.js scene — angular architectural-looking wireframe shapes), slowly rotating, mouse-parallax reacting slightly to cursor movement. Start simple: a low-poly rotating icosahedron/abstract shape with thin white edges is a very achievable v1.
16. Top-left: two small eyebrow lines of tracked-out uppercase text (tagline style). Top-right: a short mission-style sentence + a "More about us" link with an arrow, underlined.
17. Center: your big two-line display headline in the tall condensed font, large (`text-6xl md:text-8xl`), tight line-height, revealed with the line-stagger animation from step 7 on page load (not scroll-triggered, since it's above the fold).
18. A horizontal rule/divider strip below the headline, then a second line of big text made of 2–3 words separated by "+" (their site does "IMPACT + INSPIRE + INNOVATE" style horizontal marquee of value words) — make this scroll/drag horizontally as a GSAP horizontal-scroll marquee tied to page scroll position.
19. Small bottom-left tagline lines, bottom-right a tiny "from idea to outcome"-style line with a sparkle/star icon.
20. Scroll cue at the very bottom center (thin animated line or chevron).

## PHASE 4 — About Strip (Light)
21. Switch to light background (`#f4f4f4`). Small "about" eyebrow label, then a medium-large heading paragraph (2–3 sentences, your own words) describing who Intvar is and what you believe in.
22. A "More about us" link with arrow, underlined, same treatment as hero.
23. Two short supporting lines bottom-left ("Focused vision. / Measured execution." style — two-line micro-taglines are a recurring motif on this site, reuse the pattern with your own words).

## PHASE 5 — Key Facts / Stats (Light → transitions to media)
24. "Key facts" heading + short subtext.
25. A grid of big animated counters: e.g. "50+ Projects Completed", "1,000+ Cold Calls Made", "X% Repeat Client Rate", "20+ Businesses Automated" — count up on scroll into view.
26. An "Featured & Awards"-style horizontal logo marquee if you have any press mentions, certifications, or partner logos — otherwise skip or replace with client logos.
27. A short video/photo card (they use an autoplaying muted background video clip in a rounded card) — you could use a short clip of you cold-calling, building, or a client testimonial snippet.
28. A "team"/"partners" mini-section with another counter + logo marquee if relevant to Intvar (or replace with "tools we use" logos — n8n, WhatsApp Business API, Android Studio, etc.).

## PHASE 6 — Selected Work (Light)
29. "Selected work" large heading + "View all projects" link.
30. Horizontally-scrolling or stacked project cards: each card is a dark rounded rectangle containing a project screenshot/mockup, a short one-liner, and an "Explore project" link. Use your real projects (Lali Super, KisanBazaar, MyWorker-style AI tool, Modulus Smart School work, etc.).
31. Cards animate in with a slight scale/opacity reveal as they scroll into view, and the whole row can pin briefly while horizontally scrolling (GSAP ScrollTrigger `pin: true` + horizontal tween) — this is what created the "cards scrolling sideways while page scrolls down" effect in the recording.

## PHASE 7 — Services (Dark)
32. Dark section, "OUR SERVICES" eyebrow, giant multi-line stacked heading (e.g. "AI. DESIGN. DEVELOPMENT. BRANDING.") with a smoky/foggy animated background texture (a looping low-opacity video or WebGL noise shader behind the text — a simple CSS animated gradient-blur blob is a good v1 substitute).
33. Below, a 2×N grid of service blocks (borders only, transparent fill) — each with a title, short description, and a decorative icon (concentric circles, radiating lines, nested squares — simple SVG line-art icons). List your real six services: AI Chatbots, WhatsApp Automation, Web Development, Android App Development, Business Process Automation, Lead Generation/AI Consulting.
34. Blocks fade/slide in on scroll, staggered.

## PHASE 8 — Design in Motion / Explorations (Light)
35. Optional section if you want to show off design work: "Design in Motion" giant heading with project thumbnail cards laid out in a skewed/rotated horizontal strip that straightens out as you scroll (3D perspective + rotation animated via GSAP ScrollTrigger scrub). This is a nice-to-have, not essential for v1 — skip if time-constrained.
36. A simple 2×3 grid of dribbble-style concept shots works fine as a fallback, no exotic 3D needed.

## PHASE 9 — Client Stories / Testimonials (Light → Dark transition)
37. "Client stories" heading + subtext, then testimonial cards (photo, quote, name/role) — use real Intvar client feedback once you have it, or mark as "coming soon" honestly rather than inventing quotes.

## PHASE 10 — Final CTA + Footer (Dark)
38. Full dark section: small "let's build work that inspires" eyebrow, big two-line heading ("Ready to build something bold?" style — write your own), a "Start a collaboration" link with arrow, and a live IST time display top-right (nice little detail: `new Date().toLocaleTimeString()` updating every minute).
39. Footer: copyright line + "sound on, hover the lines" hint, business enquiry email/phone, social links (Instagram @Intvar.automate, LinkedIn, etc.), and a large faint background wordmark of your brand name repeated/watermarked across the bottom — animated thin vertical "audio equalizer" style bars across the whole footer width that react subtly on hover (their signature footer detail).

## PHASE 11 — Polish & Ship
40. Add `prefers-reduced-motion` fallbacks for every GSAP/Three.js animation, lazy-load the Three.js hero scene (don't block initial paint), test all ScrollTrigger pins on mobile (usually disable horizontal-pin effects below `768px` and swap for simple vertical stacks), compress all images/videos, and deploy to Vercel.

---

### Notes for you
- The 3D wireframe hero object and the WebGL/shader fog textures are the hardest parts to match exactly — they're genuinely using Three.js + custom shaders. Steps 15 and 32 give you an achievable simplified version; treat pixel-perfect Three.js replication as a stretch goal, not a v1 requirement.
- Don't copy their actual sentences — I deliberately paraphrased everything above. Write Intvar's own headlines/copy; an AI-automation agency for Indian clinics/SMBs has a genuinely different (and honestly punchier) story to tell than a generic "premium digital studio" pitch.
- If you want, I can also draft the actual headline/section copy for Intvar in Hinglish or English next, once you've picked which sections above you're keeping.
