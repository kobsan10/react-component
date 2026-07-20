# react-component

A small React + Vite app with 3 routes — **Greetings**, **Profiles**, and
**My Hobbies** — that are all rendered by the **same** component
([`src/components/RouteView.jsx`](src/components/RouteView.jsx)). The
component reads the current route name from the URL and looks up that
route's data in [`src/data/routeContent.js`](src/data/routeContent.js), so
each route shows completely different content (a greeting message, a
profile card, a hobby list) without needing three separate components.

## Project structure

```text
src/
  components/
    RouteView.jsx     # the one shared component used by every route
  data/
    routeContent.js   # per-route data (keyed by route name)
  App.jsx             # HashRouter + route definitions + nav
  App.css / index.css # styling
```

## Run locally

```bash
npm install
npm run dev
```

Then visit the printed local URL and use the nav bar to switch between
`#/greetings`, `#/profiles`, and `#/hobbies`.

## Build

```bash
npm run build
```

Outputs a static, deployable bundle to `dist/`. The Vite config uses a
relative base (`base: './'`) and the app uses `HashRouter`, so the build
works unmodified when hosted at a sub-path, e.g. GitHub Pages at
`https://<username>.github.io/react-component/`.

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` then publishes `dist/` to the `gh-pages` branch
via the `gh-pages` package. After the first deploy, enable GitHub Pages
for this repo (Settings → Pages → source: `gh-pages` branch), then the
app will be live at `https://<username>.github.io/react-component/`.
