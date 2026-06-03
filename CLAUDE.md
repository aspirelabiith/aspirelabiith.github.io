# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server at localhost:3000
pnpm build      # static export to ./out (required before deploy)
pnpm lint       # run ESLint
pnpm fmt        # format with Prettier
```

The package manager is **pnpm** (not npm/yarn). Use pnpm for all installs.

## Architecture

This is the website for ASPIRE Lab at IIT Hyderabad — a Next.js 16 app with static export (`output: "export"`) deployed to GitHub Pages via `.github/workflows/deploy.yml`. All pages are statically rendered; there is no server-side runtime.

**Data layer** (`data/`): All site content lives as TypeScript arrays in `data/` — `publications.ts`, `patents.ts`, `people.ts`, `projects.ts`, `positions.ts`, `news.ts`. Pages import directly from these files. To add or update content, edit the relevant data file.

**Types** (`lib/types.ts`): Shared TypeScript types for all data entities — `Publication`, `Patent`, `Faculty`, `Student`, `Position`, `Project`, `NewsItem`. Always use these types when adding entries to data files.

**Routing**: Pages live under `app/(pages)/` — the route group wraps all pages in `PageWrapper` (via `app/(pages)/layout.tsx`). The root `app/layout.tsx` adds `Navigation`, `Footer`, and `ThemeProvider` globally.

**Publications detail pages**: `app/(pages)/publications/[ID]/page.tsx` — the `id` field on each `Publication` in `data/publications.ts` is the URL segment. Use the DOI or a stable identifier.

**Metadata**: Use `createMetadata()` from `lib/metadata.ts` for page-level metadata; `ROOT_METADATA` is used by the root layout.

**UI components**: shadcn/ui components are in `components/ui/`. Add new ones via `pnpm dlx shadcn@latest add <component>`. Custom layout components (`Navigation`, `Footer`, `PageWrapper`, `Logo`) are in `components/`.

**Images**: `next/image` optimization is disabled (`unoptimized: true`) for static export compatibility. People photos go in `public/people/` and are imported as `StaticImageData` in `data/people.ts`.

**Deployment**: Pushing to `main` triggers the GitHub Actions workflow which runs `pnpm build` and deploys `./out` to GitHub Pages.
