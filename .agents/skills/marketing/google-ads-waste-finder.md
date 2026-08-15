---
name: google-ads-waste-finder
description: Audits Google Ads accounts to identify and eliminate wasted spend.
version: 1.0.0
---

# Google Ads Waste Finder

## Department
Marketing

## Purpose
Systematically analyze Search Term Reports and campaign settings to identify negative keyword opportunities, improper match types, and bleeding ad groups, directly increasing Intvar's marketing ROI.

## Responsibilities
1. Parse raw Search Term Reports.
2. Flag irrelevant terms for negative keyword lists.
3. Identify low-converting, high-spend terms.
4. Review bidding strategies and match type conflicts.
5. Provide a prioritized list of exact actions to reduce wasted spend.

## Inputs
1. **Search Term Report**: CSV export.
2. **Target Audience**: Who we actually want to reach (to define what is irrelevant).

## Outputs
- **Waste Reduction Report**: Prioritized list of negative keywords and bid adjustments.

## Dependencies
- `.agents/knowledge/services.md` (To know what Intvar actually sells vs. irrelevant traffic).
- `.agents/knowledge/target-audience.md`.

## Existing Capability References
- **analytics/unified-reporting-engine.md**: Often highlights the campaigns that need to be audited by this skill.

## Related workflows
- `master-workflow.md`

## Related agents
- `ceo.md` (Approves major bidding strategy shifts).

## Quality checklist
- [ ] Are all suggested negative keywords truly irrelevant to Intvar's services?
- [ ] Are match types recommended for the negative keywords?
- [ ] Is the estimated cost savings calculated?

## Project integration notes
Intvar focuses on B2B services. Terms like "free AI course" or "cheap website builder" are massive sources of waste. This skill must aggressively filter out low-intent, B2C, or academic search terms.
