//case-study page 

// src/app/projects/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { allSlugs, getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.image ? [project.image] : [],
    },
  };
}

export default function ProjectCasePage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/projects" className="mb-6 inline-block underline underline-offset-4">
        ← Back to projects
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
      <p className="mt-3 text-muted-foreground">{project.summary}</p>

      {project.image && (
        <div className="mt-6 overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            width={1280}
            height={720}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      )}

      <section className="prose prose-neutral dark:prose-invert mt-8">
        <h2>Overview</h2>
        <p>
          Summarize the problem, constraints, and your approach. Then show measurable results.
        </p>
        <h3>Highlights</h3>
        <ul>
          {project.highlights?.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <h3>Stack</h3>
        <ul>
          {project.tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <h2>What I’d improve next</h2>
        <p>
          Add 2–3 thoughtful next steps (performance, testing, DX, accessibility, etc.).
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        {project.links?.demo && (
          <a className="underline underline-offset-4" href={project.links.demo} target="_blank" rel="noreferrer">
            Live demo
          </a>
        )}
        {project.links?.repo && (
          <a className="underline underline-offset-4" href={project.links.repo} target="_blank" rel="noreferrer">
            Source code
          </a>
        )}
      </div>
    </main>
  );
}
