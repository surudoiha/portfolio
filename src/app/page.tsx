// src/app/page.tsx
import ProjectGrid from "@/components/project-grid";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).concat(
    projects.filter((p) => !p.featured)
  ).slice(0, 6);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="mb-10 space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">SS — Software Engineer</h1>
        <p className="max-w-2xl text-muted-foreground">
          I build fast, accessible web apps with Next.js, React, and TypeScript. Below are selected projects—each with a short case study.
        </p>
        <div className="flex gap-4">
          <Link href="/projects" className="underline underline-offset-4">
            Browse all projects
          </Link>
          <a
            href="mailto:you@example.com"
            className="underline underline-offset-4"
          >
            Contact
          </a>
        </div>
      </section>

      <ProjectGrid projects={featured} />

      <section className="mt-10">
        <Link href="/projects" className="underline underline-offset-4">
          See more →
        </Link>
      </section>
    </main>
  );
}
