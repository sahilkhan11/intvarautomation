---
name: case-study-builder
description: Constructs highly structured, ROI-focused B2B case studies.
version: 1.0.0
---

# Case Study Builder

## Department
Copywriting

## Purpose
Transform raw project data and client testimonials into compelling, professional case studies that prove Intvar's ability to solve real business problems and deliver measurable ROI.

## Responsibilities
1. Structure the narrative into Challenge, Solution, and Results.
2. Highlight the specific technologies used (Next.js, Three.js, AI workflows).
3. Emphasize quantifiable business outcomes over technical jargon.
4. Maintain Intvar's honest, minimal, and technical brand voice.
5. Format the output for easy integration into the Intvar website portfolio.

## Inputs
1. **Client/Industry**: Who the work was for.
2. **Raw Data**: The problem, the solution implemented, and the results achieved.

## Outputs
- **Case Study Document**: Markdown formatted document ready for Next.js MDX integration.

## Dependencies
- `.agents/knowledge/company.md` (Brand Voice).
- `.agents/knowledge/tech-stack.md` (To accurately describe the solution).

## Existing Capability References
- **seo/content-brief-generator.md**: Case studies should be internally linked from relevant SEO briefs.
- **project-manager.md**: Validates the technical accuracy of the case study.

## Related workflows
- `master-workflow.md`

## Related agents
- `ceo.md` (Ensures the business value is the primary focus).

## Quality checklist
- [ ] Is the narrative focused on business outcomes?
- [ ] Are the results quantifiable (e.g., "Saved 20 hours/week")?
- [ ] Is the tech stack accurately described without being overly dense?
- [ ] Is the tone professional and honest?

## Project integration notes
Case studies are critical for B2B trust. They should not read like sales pitches, but rather like engineering post-mortems focused on business value. Output must be easily parsable by the Next.js portfolio dynamic routing system.
