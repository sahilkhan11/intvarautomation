---
name: intvar-local-schema-nap
description: Generates and validates LocalBusiness/Organization JSON-LD structured data for Intvar Automation pages, and checks NAP (Name/Address/Phone) and brand-name consistency across the site. Use when adding schema markup to a new page or auditing brand consistency.
---

# Intvar Local Schema & NAP Consistency

## When to use
- A new service/city page needs LocalBusiness, Organization, or Service JSON-LD
- Sahil asks to check brand-name or NAP consistency across the site, Google Business Profile, or social profiles
- Validating schema before requesting re-indexing in Search Console

## Rules
1. The business name in every schema block and every page footer must read exactly "Intvar Automation." Flag any variant found ("Intvar", "INTVAR Automation," etc.) — don't silently rewrite brand copy without Sahil's sign-off.
2. Include serviceArea (Alwar, Bhiwadi, Jaipur, plus whichever city page is being built) and sameAs links to verified profiles only (e.g. Instagram @Intvar.automate) — never invent a profile URL.
3. Each city/service page gets its own Service or LocalBusiness block reflecting that specific offering. Don't reuse one generic block sitewide.
4. After generating schema, output the Rich Results Test URL (https://search.google.com/test/rich-results) and remind Sahil to validate before shipping.

## Steps
1. Identify which page needs schema and what service/location it targets.
2. Pull any existing schema from the site and diff it against the rules above rather than replacing it blind.
3. Generate the JSON-LD block.
4. List any brand-name or NAP inconsistencies found across pages/profiles for Sahil to confirm before changing anything.
