# Inventory Management Dashboard

> Modern, scalable, and maintainable Nuxt 4 application for inventory management, built with a focus on best practices, accessibility, and developer experience.

---

## 🚀 Project Overview

This project leverages Nuxt 4, Tailwind CSS v4, shadcn UI, and VueUse to deliver a robust, themeable, and production-ready dashboard. It is architected for rapid feature development, team scalability, and long-term maintainability.

---

## 🛠️ Getting Started

### 1. Install Dependencies

Choose your preferred package manager:

```bash
# npm
npm install
# pnpm
pnpm install
# yarn
yarn install
# bun
bun install
```

### 2. Development Server

Start the app locally at [http://localhost:3000](http://localhost:3000):

```bash
# npm
npm run dev
# pnpm
pnpm dev
# yarn
yarn dev
# bun
bun run dev
```

### 3. Production Build & Preview

Build for production:

```bash
# npm
npm run build
# pnpm
pnpm build
# yarn
yarn build
# bun
bun run build
```

Preview the production build locally:

```bash
# npm
npm run preview
# pnpm
pnpm preview
# yarn
yarn preview
# bun
bun run preview
```

---

## 🧑‍💻 Tech Stack

- **Nuxt 4** — Hybrid rendering, file-based routing, and DX
- **Tailwind CSS v4** — Utility-first styling, dark mode, custom design tokens
- **shadcn UI** — Accessible, themeable component primitives
- **VueUse** — Essential Vue composition utilities
- **TypeScript** — Type safety and modern tooling
- **Vitest** — Fast unit and e2e testing
- **Playwright** — End-to-end browser testing

---

## 🗂️ Project Structure

- `src/app/` — Main application source
- `src/app/components/` — UI and layout components
- `src/app/pages/` — File-based routing
- `src/app/assets/css/main.css` — Global styles with Tailwind imports
- `src/app/hooks/` — Custom composables and hooks
- `src/lib/` — Utilities, composables, and services
- `tests/unit/` — Unit tests
- `tests/e2e/` — End-to-end tests
- `vitest.config.ts` — Vitest configuration
- `nuxt.config.ts` — Nuxt configuration

---

## 🌗 Theming & shadcn UI

- Uses shadcn-tailwind color palette and variables for consistent theming
- Supports dark mode via `.dark` class on `<html>`
- Easily extendable with shadcn-nuxt components
- Refer to [shadcn UI docs](https://ui.shadcn.com/docs/installation/nuxt) for more details
- Customize Tailwind v4 config in `src/app/assets/css/main.css` and No need in v4 for `tailwind.config.ts`

---

## 📦 Deployment

Refer to the [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment) for best practices and platform-specific instructions.

---

## 👑 About

Crafted with care by a Principal Front-End Developer. Built for scale, clarity, and developer happiness.
