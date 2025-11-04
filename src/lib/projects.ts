// typed data for projects e.g. { slug, title, summary, tech: string[], image, links }

// src/lib/projects.ts
export type Project = {
    slug: string;
    title: string;
    summary: string;
    image?: string;           // public path under /public, e.g. "/images/todo.webp"
    tech: string[];           // e.g. ["Next.js", "TypeScript", "Tailwind"]
    highlights?: string[];    // 1–3 short impact bullets
    links?: {
      demo?: string;
      repo?: string;
      caseStudy?: string;     // we’ll auto-link to /projects/[slug] if omitted
    };
    featured?: boolean;       // show first on homepage
  };
  
  export const projects: Project[] = [
    {
      slug: "nextjs-starter",
      title: "Next.js Portfolio Starter",
      summary: "Accessible card grid, static export for GitHub Pages, shadcn/ui components.",
      //image: "/images/next-starter.webp",
      tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
      highlights: ["Lighthouse ≥95", "Static export ready", "Dark mode"],
      links: {
        repo: "https://github.com/yourname/portfolio",
      },
      featured: true,
    },
    {
      slug: "todo-ai",
      title: "AI Todo App",
      summary: "Simple task manager with semantic search and offline-first caching.",
      //image: "/images/todo.webp",
      tech: ["Next.js", "React", "IndexedDB"],
      highlights: ["Search <100ms", "PWA installable"],
      links: {
        demo: "https://yourname.github.io/portfolio/todo",
        repo: "https://github.com/yourname/todo-ai",
      },
    },
    // add more...
  ];
  
  // helpers
  export const getProject = (slug: string) =>
    projects.find((p) => p.slug === slug);
  
  export const allSlugs = () => projects.map((p) => p.slug);
  