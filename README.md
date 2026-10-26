# Scroll-Driven Hero Section

React + Vite + Tailwind CSS v4 + GSAP (ScrollTrigger).

## Run
    npm install
    npm run dev

## Deploy (GitHub Pages)
1. Push to a GitHub repo on the `main` branch.
2. Repo Settings > Pages > Source: **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and publishes `dist/`.

## How it works
- `src/hooks/useHeroAnimation.js`
  - Intro timeline: letters stagger in, car rises, stats appear one by one.
  - Scroll timeline: pinned hero, `scrub: 1.2` ties progress to scroll with smoothing.
  - Only `transform` and `opacity` are animated. No layout work on scroll.
  - Respects `prefers-reduced-motion`.
- Intro and scroll animations target different wrapper elements so they never conflict.
