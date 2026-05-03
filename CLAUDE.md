# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This is a Deno-managed project (no npm/yarn). All tasks run through `deno task`:

- `deno task dev` — start Vite dev server
- `deno task build` — produce production assets in `dist/`
- `deno task preview` — preview the production build locally

There is no test runner, linter, or formatter wired up. Deno's built-in `deno fmt` / `deno lint` are not configured for the React/TSX sources.

Note: `README.md` incorrectly says to run `deno task dev` to build production. The correct build command is `deno task build`.

## Architecture

Single-page personal site. React 18 + TypeScript, bundled with Vite, run under Deno.

**Toolchain layering (important and unusual):**
- `deno.json` defines tasks and points at `import_map.json`.
- `import_map.json` resolves `react`, `react-dom`, `react-router-dom`, and `scheduler` to pinned `esm.sh/v106` URLs. This is what Deno uses at runtime.
- `vite.config.mts` imports those same packages from `npm:` specifiers purely for side effects. The comment in `README.md` ("peer dependencies need to be referenced in `vite.config.js`") explains why — Vite's Deno integration needs them referenced there to resolve peers. Don't remove those imports thinking they're dead code.
- `vite.config.[ext]` must use `.mjs` or `.mts` (per README).

**App shape:**
- Entry: `src/main.tsx` mounts `<App />` inside `<BrowserRouter>`. No routes are defined — the router is currently unused.
- `src/App.tsx` exports `HomePage` (also as default). It is one large monolithic component containing every section of the site (Go-Kart project, Astrophotography gallery, About).
- `src/StarryNight.tsx` is a self-contained canvas animation rendered as a fixed background. It manages its own `requestAnimationFrame` loop, DPR scaling, and a `setInterval` for spawning shooting stars. State lives in plain arrays inside `useEffect`, not in React state.
- `src/Rainbow.tsx`, `src/Rainbow.css`, `src/useRainbow.ts`, `src/ComponentsList.tsx` are empty placeholder files. `App.tsx` does still import `./ComponentsList.css`, which is a real stylesheet — the components-grid layout in `App.tsx` depends on it.

**Styling:**
- Global resets and `:root` font/color in `src/index.css`. It also imports two Google Font families (Crimson Pro, Rubik) that aren't actually used in the markup; the rendered fonts (IBM Plex Sans, Jacquarda Bastarda 9, Jersey 10) are loaded via `<link>` in `index.html`.
- Page-specific styles in `src/App.css`; `src/StarryNight.css` is just the fixed-canvas positioning.
- Mobile breakpoint is `max-width: 580px` only.

**Static assets:** everything under `public/` (images, favicons, logos) is served from the site root.

## Deployment

Deployed to Deno Deploy via `.github/workflows/deploy.yml` on push to `main`. The workflow runs `deno task build` and then `deployctl` with `entrypoint: deploy.ts`. `deploy.ts` is a tiny Deno HTTP server that serves the built `dist/` directory using `std@0.177.0/http`. The `dist/` directory is currently checked into the repo despite being listed in `.gitignore` — be aware before adding it to commits.
