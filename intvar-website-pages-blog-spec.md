# Intvar Automation — Part 2: Pages, Blog & Content System (for Antigravity)

Continues from your 40-step homepage spec. Goal: add About, Services, Work, Contact, and Blog
**without** Antigravity re-generating the navbar, footer, Lenis wrapper, or 3D scene every time.

**Core rule before you paste anything below:** in Next.js App Router, `layout.tsx` persists across
route navigations automatically — it does not remount when you go from `/` to `/about`. So the fix
isn't "tell Antigravity to reuse code," it's "put the navbar/footer/Lenis/3D-scene in the layout
ONCE, then every page prompt only asks for the `page.tsx` content inside it." That's what Phase 12
does. Paste it first. Everything after depends on it.

---

## PHASE 12 — Lock the Shared Shell (paste this first, once)

**PROMPT 1:**
```
Refactor the current homepage so the Navbar, Footer, Lenis smooth-scroll provider, and the
sound-toggle state live in `app/layout.tsx` (or a `<SiteShell>` client component rendered from it),
NOT inside `app/page.tsx`.

Requirements:
- `app/layout.tsx` renders: <SiteShell><Navbar />{children}<Footer /></SiteShell>
- The Three.js hero scene (rotating wireframe object) must stay INSIDE app/page.tsx only —
  it is homepage-only and must not be imported into the shared layout.
- Lenis + GSAP ScrollTrigger sync must be initialized once in SiteShell (client component,
  "use client"), so every page automatically gets smooth scroll without re-initializing it.
- Confirm no ScrollTrigger or Lenis instance is created more than once across client-side
  navigations (guard with a ref or singleton check).
- Do not change any homepage visuals or animations — this is a structural refactor only.
```

Verify after this: click between `/` and any dummy second route — navbar/footer/scroll feel
should not flicker or reset. If it does, the refactor isn't done yet; don't proceed to Phase 13
until this is clean, or every later page will inherit the bug.

---

## PHASE 13 — Reusable Interior-Page Hero (not the 3D one)

Interior pages (About, Services, Work, Contact, Blog) should feel like the same brand, but
loading a Three.js scene on every page is slow and unnecessary. Build one lightweight hero
variant and reuse it everywhere.

**PROMPT 2:**
```
Build a reusable <PageHero /> component for interior pages (About, Services, Work, Contact, Blog).
Props: eyebrow (string), title (string, supports line breaks), subtitle (optional string),
variant: "dark" | "light".

Visual spec:
- Same dark bg #040508 / light bg #f4f4f4 tokens as the homepage Section component.
- Reuse the existing text-reveal component (line-stagger, yPercent 100->0 + fade) from Phase 1
  step 7 for the title — trigger on load, not scroll (it's above the fold).
- Small tracked-out uppercase eyebrow line above the title, same styling as the homepage
  top-left eyebrow text.
- Optional subtitle paragraph below, off-white/soft-gray, max-width ~600px.
- Behind the text, instead of the Three.js object, use a simple looping low-opacity animated
  gradient-blur blob (CSS or a small canvas gradient) — this is the "v1 substitute" already
  described in the original spec's Phase 7 notes, reused here for consistency.
- No Three.js import in this component. Must be lightweight.

Place this in components/PageHero.tsx and export it for reuse across all interior pages.
```

---

## PHASE 14 — Content Data Layer (do this before Work/Services pages)

This is the part that lets you "paste content without touching layout." Services and Work
data should not live hardcoded inside JSX — they should live in one data file each, so adding
a new project or service later is a data edit, not a layout edit.

**PROMPT 3:**
```
Create a content data layer under /content:

1. /content/services.ts — export a typed array `services: Service[]` where each Service has:
   { id, title, shortDescription, icon (string, name of an SVG icon component), slug }.
   Seed it with Intvar's six real services: AI Chatbots, WhatsApp Automation, Web Development,
   Android App Development, Business Process Automation, Lead Generation & AI Consulting.

2. /content/work.ts — export a typed array `projects: Project[]` where each Project has:
   { id, title, oneLiner, imageUrl, slug, tags: string[], year }.
   Seed with placeholder entries for: Lali Super, KisanBazaar, Fraud Detection ML project,
   Modulus Smart School digitization work — I'll swap in real screenshots later.

3. Refactor the homepage's Services section (Phase 7) and Selected Work section (Phase 6)
   to map over these arrays instead of hardcoded JSX blocks, without changing any animation
   or visual behavior.

This is a data-layer refactor only — do not change layout, styling, or scroll behavior.
```

Why this matters: once this is done, adding a new project to the homepage AND the future
`/work` page is one line in `work.ts`, not a prompt to Antigravity.

---

## PHASE 15 — About Page

**PROMPT 4:**
```
Create app/about/page.tsx.

Structure:
1. <PageHero variant="dark" eyebrow="ABOUT INTVAR" title="[your own 2-line headline]"
   subtitle="[1-2 sentence mission statement in your own words]" />
2. A light section (#f4f4f4) with a medium-length "who we are" paragraph (your own words,
   2-4 sentences) about Intvar being a solo-founder AI automation studio for Indian SMBs
   and clinics, based in Alwar, Rajasthan.
3. A "how we work" mini-grid (3 columns): short principle statements, e.g. "Fast setup,
   no bloat" / "Built for local businesses" / "One founder, direct access" — write your
   own three, reuse the two-line micro-tagline pattern from Phase 4 step 23.
4. Reuse the Key Facts counter component from Phase 5 step 25 (50+ projects, 1,000+ cold
   calls, etc.) — same component, no new build needed.
5. End with a dark CTA band reusing the Final CTA component from Phase 10 step 38
   ("Ready to build something bold?" style, your own copy) linking to /contact.

Do not build any new Section, counter, or CTA components — import and reuse the ones that
already exist from the homepage. Only page-specific content (headings/paragraphs) is new.
```

---

## PHASE 16 — Services Page

**PROMPT 5:**
```
Create app/services/page.tsx.

Structure:
1. <PageHero variant="dark" eyebrow="OUR SERVICES" title="AI. AUTOMATION. GROWTH."
   subtitle="[your own line]" />
2. Map over the `services` array from /content/services.ts. For each service, render an
   expanded card (bigger than the homepage grid version): title, full description
   (2-3 sentences — expand beyond the homepage's short description), a "what's included"
   bullet list (3-4 items), and a "Book a call" link to /contact.
3. Use the same border-only transparent-fill block style and fade/slide-in-on-scroll
   stagger from the homepage Services section (Phase 7 step 34) — reuse that animation
   utility, don't rebuild it.
4. End with the same dark CTA band pattern as the About page.

Reuse /content/services.ts as the single source of truth — if I edit that file later,
both the homepage service grid and this page should update automatically.
```

---

## PHASE 17 — Work / Portfolio Page

**PROMPT 6:**
```
Create app/work/page.tsx and app/work/[slug]/page.tsx (dynamic route).

app/work/page.tsx:
1. <PageHero variant="light" eyebrow="SELECTED WORK" title="Projects" subtitle="[your own line]" />
2. Map over `projects` from /content/work.ts as a vertical stacked grid (skip the horizontal
   pin-scroll effect here — that stays homepage-only per the original spec's note in step 31).
   Each card: image, title, one-liner, tags, "Explore project" link to /work/[slug].
3. Cards fade/scale in on scroll using the same reveal utility as the homepage.

app/work/[slug]/page.tsx:
1. Look up the project by slug from /content/work.ts (generateStaticParams for all slugs).
2. <PageHero variant="dark" eyebrow={project.tags.join(" / ")} title={project.title} />
3. A simple case-study layout: large image, problem/approach/result sections (plain text
   blocks — I'll fill these in per project), a link back to /work.
4. If the slug isn't found, render Next.js notFound().

Use the existing typed Project interface from /content/work.ts — don't redefine it.
```

---

## PHASE 18 — Contact Page

**PROMPT 7:**
```
Create app/contact/page.tsx.

Structure:
1. <PageHero variant="dark" eyebrow="GET IN TOUCH" title="Let's build something." />
2. Two-column layout (stacks on mobile):
   - Left: a contact form (name, email, business type dropdown, message) — client-side
     validation only for now, submit handler posts to a placeholder API route
     app/api/contact/route.ts that I'll wire up to email/WhatsApp later. Show a success
     state after submit.
   - Right: direct contact block — business enquiry email, phone, WhatsApp link
     (wa.me/[number]), Instagram @Intvar.automate, and a line stating you're based in
     Alwar, Rajasthan and work with clients across India remotely.
3. Reuse the pill-button style from the navbar's "Let's Talk" button for the submit button.
4. No map embed needed — skip that, it's not essential for v1.

Keep form state local (useState), no external form library needed for this scale.
```

---

## PHASE 19 — Blog System (the "paste content without touching layout" part)

This is the piece that solves your actual problem: a structure where writing a new blog post
is a file drop, not a prompt to regenerate the site.

**PROMPT 8:**
```
Set up an MDX-based blog system.

1. Install `gray-matter` and `next-mdx-remote` (keep it simple — do NOT install Contentlayer
   or Velite, they add build complexity I don't need at this scale).

2. Create /content/blog/ as the folder where blog posts live as .mdx files. Each file has
   frontmatter: title, slug, excerpt, date, tags (array), coverImage.
   Add one seed post: /content/blog/welcome-to-intvar.mdx with placeholder content, so I
   can confirm the pipeline works end to end before writing real posts.

3. Create lib/blog.ts with two functions:
   - getAllPosts(): reads every .mdx file in /content/blog, parses frontmatter with
     gray-matter, returns sorted-by-date array of post metadata (no full content).
   - getPostBySlug(slug): reads one file, returns frontmatter + compiled MDX content.

4. Create app/blog/page.tsx:
   - <PageHero variant="light" eyebrow="INSIGHTS" title="Blog" />
   - Grid of post cards (cover image, title, excerpt, date, tags) from getAllPosts(),
     using the same card fade-in-on-scroll pattern as the Work page.

5. Create app/blog/[slug]/page.tsx:
   - generateStaticParams from getAllPosts() slugs.
   - <PageHero variant="dark" eyebrow={tags.join(" / ")} title={title} subtitle={date} />
   - Render the compiled MDX content in a readable prose layout (max-width ~720px,
     off-white text on the light section background, generous line-height for readability).
   - notFound() if slug doesn't exist.

After this is built, confirm: adding a new post should require ONLY creating a new .mdx file
in /content/blog/ with the right frontmatter — no changes to any layout, component, or page
file. Test this by adding a second dummy post and confirming it appears on /blog automatically.
```

**Going forward, writing a new blog post is just this — no Antigravity prompt needed:**
```
---
title: "Your Post Title"
slug: "your-post-title"
excerpt: "One-sentence summary for the card."
date: "2026-08-03"
tags: ["ai automation", "clinics"]
coverImage: "/images/blog/your-image.jpg"
---

Your post content in normal Markdown/MDX here.
```
Drop that file in `/content/blog/`, redeploy — done.

---

## PHASE 20 — Nav & Footer Wiring

**PROMPT 9:**
```
Update the Navbar's nav links (Work, Services, About, Contact) to route to /work, /services,
/about, /contact respectively. Add "Blog" as a fifth link. Update the full-screen menu overlay
(Phase 2 step 12) with the same five links, staggered reveal, unchanged animation style.

Update the Footer to include a small "Blog" link alongside the existing social links.

Do not touch any homepage-specific sections — this is nav/footer wiring only.
```

---

## PHASE 21 — Final Check

**PROMPT 10:**
```
Audit the site for:
1. Every interior page (about, services, work, work/[slug], contact, blog, blog/[slug])
   uses <PageHero>, not a duplicated hero implementation.
2. No page other than app/page.tsx imports the Three.js scene.
3. Add per-page metadata (title, description) using Next.js generateMetadata for each route,
   including dynamic OG title/description for work/[slug] and blog/[slug] using their
   frontmatter/data.
4. Generate a basic app/sitemap.ts covering all static and dynamic (work + blog) routes.
5. Confirm prefers-reduced-motion fallback (from original Phase 11 step 40) still applies
   site-wide, not just on the homepage.
```

---

### Why this order matters
- **Phase 12 first, always.** If the shell isn't shared before you build pages, Antigravity
  will duplicate the navbar/footer/Lenis logic into every new page, and you'll be back to
  re-briefing it every time.
- **Phase 14 (content data) before Phase 15–17.** Once services/work are data-driven, editing
  or adding one is a code edit you can do yourself in 30 seconds — not a new Antigravity prompt.
- **Phase 19 (blog) is the actual fix for your original ask.** After it's built, new content
  is a `.mdx` file drop, not a build task.
