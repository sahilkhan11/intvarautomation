# Global Project Rules

## General

Always understand the existing code before modifying it.

Never rewrite working code unless requested.

Prefer improving existing components over creating duplicates.

Always preserve project architecture.

## Code Quality

Write clean, readable code.

Avoid unnecessary complexity.

Avoid duplicated logic.

Create reusable components.

Keep functions small and focused.

## Next.js

Prefer Server Components.

Only use "use client" when interaction requires it.

Use dynamic imports for heavy components.

Never break App Router conventions.

## TypeScript

Avoid using "any".

Prefer explicit types.

Keep interfaces reusable.

## Styling

Use Tailwind CSS.

Reuse existing utility patterns.

Never introduce inline styles unless absolutely necessary.

Keep spacing consistent.

## Performance

Think about performance before adding features.

Lazy-load expensive components.

Optimize images.

Reduce unnecessary renders.

## Animations

Animations must improve UX.

Never animate for decoration alone.

Respect prefers-reduced-motion whenever possible.

Keep animations smooth.

Avoid excessive timelines.

## 3D

Protect Hero.tsx.

Do not replace the existing 3D architecture unless requested.

Optimize render performance.

Never introduce expensive shaders without approval.

## SEO

Every new page should include metadata.

Generate Open Graph tags.

Add Schema when appropriate.

Never forget accessibility.

## Accessibility

Semantic HTML.

Keyboard navigation.

ARIA labels where needed.

Color contrast must remain high.

## Communication

Explain major architectural decisions.

If uncertain, ask before making destructive changes.

Never guess project requirements.
