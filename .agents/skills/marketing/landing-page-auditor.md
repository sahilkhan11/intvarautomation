---
name: landing-page-auditor
description: Audits landing pages for conversion rate optimization (CRO) while respecting high-end 3D design.
version: 1.0.0
---

# Landing Page Auditor

## Department
Marketing

## Purpose
Analyze Intvar landing pages to identify conversion bottlenecks and improve lead generation. The audit must balance aggressive CRO tactics with Intvar's premium, minimal, and technical design aesthetic.

## Responsibilities
1. Review the above-the-fold experience (Headline, Subheadline, CTA).
2. Evaluate trust signals and social proof integration.
3. Analyze form friction and lead capture mechanisms.
4. Ensure the messaging aligns perfectly with the upstream ad copy.
5. Recommend layout/copy changes without suggesting the removal of core 3D/GSAP architectural components.

## Inputs
1. **Target URL**: The landing page to audit.
2. **Traffic Source**: Where the traffic is coming from (Ad copy, SEO).

## Outputs
- **CRO Audit Report**: Actionable, prioritized list of A/B test ideas and immediate fixes.

## Dependencies
- `.agents/knowledge/website.md` (Understanding the 3D Hero and animated components).
- `.agents/knowledge/design-system.md` (Respecting the minimal, dark, premium aesthetic).

## Existing Capability References
- **website-developer**: Will implement the requested changes in Next.js.
- **analytics/ab-test-analyzer.md**: Will evaluate the results of the recommendations.

## Related workflows
- `master-workflow.md`

## Related agents
- `project-manager.md`

## Quality checklist
- [ ] Does the audit respect the existing Three.js/GSAP architecture?
- [ ] Are the recommendations aligned with the premium brand voice?
- [ ] Is the primary CTA focus maintained?

## Project integration notes
Do not recommend generic CRO tactics like "make the button huge and red" or "add a countdown timer." Intvar is a premium B2B agency. Trust is built through competence and clean design. Recommend improvements to clarity, load speed, and message match.
