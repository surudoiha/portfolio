This portfolio is a static-exported Next.js 15 + TypeScript application, deployed to GitHub Pages using GitHub Actions.

### This project uses:

- Next.js App Router (static pages + dynamic segments)
- Tailwind CSS (with typography & forms plugins)
- shadcn/ui for accessible UI primitives
- next-themes for dark/light mode
- Lucide icons
- Static sitemap & robots.txt for SEO compatibility with GitHub Pages


### High-level Architecture
```
Next.js (App Router)
│
├── Layout layer (RootLayout)
│   ├── global theme provider
│   ├── header + navigation
│   └── footer
│
├── Page layer
│   ├── Home (featured project cards)
│   ├── Projects index (full grid)
│   ├── Dynamic project pages (case studies)
│   └── About page
│
├── Component layer
│   ├── reusable ProjectCard + ProjectGrid
│   ├── Header, Footer, ThemeToggle
│   └── UI components from shadcn/ui
│
├── Content/data layer
│   └── Typed project definitions (lib/projects.ts)
│
└── Export + Deployment
    ├── next.config.mjs (basePath + export mode)
    ├── GitHub Actions workflow
    └── Static public files (robots, sitemap, OG image)
```
