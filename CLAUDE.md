# far-calculator

## Package manager

Use **bun**, not npm/yarn/pnpm. Lockfile is `bun.lock`.

- Install: `bun install`
- Dev server: `bun dev`
- Add dep: `bun add <pkg>`

`package-lock.json` should not exist in this repo — if present, it's stale and safe to remove.

## Stack

- **Next.js 16** (App Router) + React 19
- **shadcn** — UI components (Base UI primitives under the hood, not Radix)
- **react-hook-form** — form state
- **zod** — schema validation, paired with RHF via `@hookform/resolvers`
- **Tailwind CSS 4**
- **next-themes** — theming

## Known gotchas

- **"Export Controller doesn't exist in target module" (react-hook-form)**: happens on App Router pages/components missing `'use client'`. Server Components can't use RHF hooks (`Controller`, `useForm`, etc.) — add `'use client'` as the first line of the file. Reinstalling deps does not fix this; it's a Server/Client Component boundary issue, not a dependency issue.
