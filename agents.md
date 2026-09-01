# Repository guide

## Project

- This is a Next.js 16 App Router site written in strict TypeScript.
- Pages and global styles live in `app/`.
- Reusable React components live in `components/`; shared UI primitives live in `components/ui/`.
- Portfolio content lives in `lib/data.ts`, with its types in `lib/types.ts`.

## Commands

- Run the development server with `pnpm dev`.
- Check lint rules with `pnpm exec eslint .`.
- Verify a production build with `pnpm build`.

## Conventions

- Use Server Components by default. Add `"use client"` only when browser APIs, state, effects, or event handlers require it.
- Prefer the `@/` import alias for project files.
- Reuse existing components and Tailwind tokens before adding new abstractions or styles.
- Preserve the compact layout, responsive behavior, and light/dark theme support.
- Keep content changes in `lib/data.ts` unless the content needs its own route or behavior.
- Keep changes focused and run lint after editing TypeScript or React files.
