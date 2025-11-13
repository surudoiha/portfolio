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
      slug: "vfx-pipeline-automation",
      title: "The Crucible — VFX Pipeline Automation",
      summary:
        "A Python-based tool that automates a video post-production pipeline by matching Baselight frame data with Xytech workorders, processing shots, and generating Excel/Vimeo outputs for VFX teams.",
      image: "/vfx-pipeline.webp", 
      tech: ["Python", "MongoDB", "FFmpeg", "Vimeo API", "Pandas"],
      highlights: [
        "Cross-references Baselight and Xytech data into MongoDB",
        "Extracts shots, generates thumbnails, and builds Excel reports",
        "Automates batch uploads of rendered shots to Vimeo"
      ],
      links: {
        repo: "https://github.com/surudoiha/vfx-pipeline-automation01",
        // demo: "...", // leave blank unless you make a demo later
      },
      featured: true, // if want this to show near top
    },
    

    {
      slug: "psy-code-ogists",
      title: "Psy-Code-Ogists",
      summary:
        "Team-based capstone web app built with TypeScript and Next.js for a COMP 490 course, focused on applying software engineering practices in a collaborative setting.",
      image: "/psy-code-ogists.webp",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Collaborative project with a 5-person team (COMP 490 capstone)",
        "Uses a modern TypeScript/Next.js/Tailwind stack",
        "Implements reusable components and shared UI patterns"
      ],
      links: {
        repo: "https://github.com/gevoglanyan/Psy-Code-Ogists",
        // demo: "...", // add later 
      },
      featured: false, 
    },

  ];
  
  // helpers
  export const getProject = (slug: string) =>
    projects.find((p) => p.slug === slug);
  
  export const allSlugs = () => projects.map((p) => p.slug);
  