---
name: content-repurposer
description: Repurposes core content into social media and micro-content formats.
version: 1.0.0
---

# Content Repurposer

## Department
Copywriting

## Purpose
Maximize the ROI of long-form content (blog posts, case studies) by transforming it into platform-specific micro-content (LinkedIn posts, Twitter threads, newsletter snippets) while maintaining Intvar's professional brand voice.

## Responsibilities
1. Extract core insights, data points, and technical learnings from source material.
2. Adapt the format for specific platforms (e.g., professional tone for LinkedIn).
3. Remove any fluff or generic filler introduced during adaptation.
4. Include appropriate CTAs driving traffic back to the Intvar Suite.

## Inputs
1. **Source Content**: The URL or text of the original article/case study.
2. **Target Platforms**: e.g., LinkedIn, Twitter, Email.

## Outputs
- **Micro-Content Assets**: A batch of posts tailored to the requested platforms.

## Dependencies
- `.agents/knowledge/company.md` (Brand Voice).

## Existing Capability References
- **copywriting/case-study-builder.md**: Frequently used as the source material for repurposing.
- **seo/blog-post-writer.md**: (Future capability) Will feed into this repurposer.

## Related workflows
- `master-workflow.md`

## Related agents
- `marketing-specialist` (Future capability)

## Quality checklist
- [ ] Is the tone strictly professional, avoiding engagement-bait tactics?
- [ ] Are the technical details accurate?
- [ ] Do the posts provide standalone value without requiring a click?
- [ ] Are the CTAs clear and relevant?

## Project integration notes
Intvar does not rely on hype. Social content must establish authority through technical competence and business acumen. Avoid excessive emojis and generic hooks.
