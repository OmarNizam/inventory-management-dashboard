# Copilot Instructions for Inventory Management Dashboard

## Project Overview

- **Framework:** Nuxt 4 (srcDir: `src/app`)
- **Styling:** Tailwind CSS v4, shadcn UI, custom design tokens in `main.css`
- **Testing:** Vitest for unit/e2e, Playwright for browser automation
- **TypeScript:** Strict mode in dev, relaxed in prod
- **Component Library:** shadcn-nuxt (see `nuxt.config.ts`)

## Architecture & Patterns

- **Pages:** File-based routing in `src/app/pages/`
- **Components:** UI/layout in `src/app/components/`, shadcn components in `src/app/components/ui/`
- **Global Styles:** `src/app/assets/css/main.css` (includes shadcn color palette, dark mode, and custom properties)
- **Utilities/Composables:** `src/app/lib/` and `src/app/hooks/`
- **Tests:**
  - Unit: `tests/unit.spec.ts` (add more as needed)
  - E2E: `tests/e2e.spec.ts` (uses Playwright, requires server running)

## Developer Workflows

- **Install:** `npm install` (or yarn/pnpm/bun)
- **Dev Server:** `npm run dev` (serves from `src/app`)
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **Clean:** `npm run clean` (removes build artifacts and lockfile)
- **Test:** `npx vitest run` (unit/e2e)
- **E2E Browser Setup:** `npx playwright install` (required for e2e)

## Conventions & Integration

- **shadcn UI:** Use shadcn-nuxt for new UI primitives. Color variables are mapped in `main.css`.
- **Dark Mode:** Controlled by `.dark` class on `<html>`, variables auto-switch in CSS.
- **TypeScript:** Configured in `nuxt.config.ts` for strict dev checks.
- **No Tailwind config file needed for v4:** All design tokens are in `main.css`.
- **Component Naming:** Avoid duplicate names in `ui/` (see Vitest warning for `UiButton`).

## Examples

- **Add a new page:** Create a `.vue` file in `src/app/pages/`.
- **Add a new shadcn component:** Use shadcn-nuxt CLI, then import from `components/ui/`.
- **Write a unit test:** Add a `.spec.ts` in `tests/` and use Vitest.
- **Write an e2e test:** Add a `.spec.ts` in `tests/`, import Playwright, and run with Vitest.

## Troubleshooting

- If Playwright errors, ensure browsers are installed (`npx playwright install`).
- If you see duplicate component warnings, check for multiple files with the same name in `components/ui/`.
- For missing styles, verify `main.css` is imported in `nuxt.config.ts`.

---

For more, see `README.md`, `nuxt.config.ts`, and `src/app/assets/css/main.css`.
