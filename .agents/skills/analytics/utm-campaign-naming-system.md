---
name: utm-campaign-naming-system
description: Standardizes UTM tagging and campaign naming conventions across Intvar.
version: 1.0.0
---

# UTM Campaign Naming System

## Department
Analytics

## Purpose
Enforce a strict, error-free UTM and campaign naming convention to ensure all data flowing into GA4 and Intvar CRMs is clean, trackable, and easily attributable to specific marketing efforts.

## Responsibilities
1. Generate standardized UTM parameters (source, medium, campaign, term, content).
2. Generate standardized internal campaign names.
3. Enforce lowercase formatting and delimiter rules (e.g., snake_case or kebab-case).
4. Maintain a structured taxonomy for Intvar services.

## Inputs
1. **Traffic Source**: e.g., Facebook, Google, Newsletter.
2. **Campaign Goal**: e.g., Q3 Web Dev Promo.
3. **Content Variation**: e.g., Video A, Image B.

## Outputs
- **UTM URLs**: Formatted and ready to use.
- **Campaign Name**: Standardized internal name.

## Dependencies
- `.agents/knowledge/services.md` (To accurately tag the promoted service).

## Existing Capability References
- **analytics/unified-reporting-engine.md**: Relies entirely on clean UTMs to function.
- **copywriting/omnichannel-ad-copywriter.md**: Uses these UTMs in generated ads.

## Related workflows
- `master-workflow.md`

## Related agents
- `project-manager.md`

## Quality checklist
- [ ] Are all parameters lowercase?
- [ ] Are spaces replaced with standard delimiters?
- [ ] Is the source/medium pairing standard (e.g., facebook/cpc)?

## Project integration notes
Data integrity is the foundation of Intvar's analytics. This skill acts as a gatekeeper. No ad or email should launch without passing through this standardized tagging system.
