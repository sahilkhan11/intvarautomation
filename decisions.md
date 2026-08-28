# Architectural Decision Log

## 2026-08-16: Frontend Framework and Animation
### Context
Site requires complex scroll-driven animations and 3D interactions.
### Decision
Chose Next.js for routing, GSAP for scrolling animations, and Three.js for 3D elements.
### Consequences
Requires careful integration of GSAP ScrollTrigger with React lifecycles and Next.js SSR.
Reason: Established from intvar-website-build-guide.md and existing dependencies.
