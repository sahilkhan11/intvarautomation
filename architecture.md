# Architecture

## Purpose
Main corporate website for Intvar Automation.

## Technology Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- GSAP / Framer Motion
- Three.js / @react-three/fiber
- Node.js/PHP Backend (referenced in spec, though current codebase appears to be mainly the frontend).

## Application Structure
- `src/app/`: Next.js pages and routes.
- `src/components/`: Reusable React components.
- `public/`: Static assets.
- `.agents/`: AI configuration and specs.
- `intvar-website-build-guide.md` and related `.md` files contain the 40-step build architecture.

## Important Architectural Patterns
- React Server Components (RSC).
- 3D Wireframe rendering via WebGL/Three.js.
- Scroll-driven animations via GSAP and ScrollTrigger.
