// src/components/project-card.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn, withBasePath } from "@/lib/utils";

type Props = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className }: Props) {
  const caseHref = `/projects/${project.slug}`;
  const repo = project.links?.repo;
  const demo = project.links?.demo;

  return (
    <Card
      className={cn(
        "group relative h-full overflow-hidden transition-transform",
        "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        "hover:-translate-y-0.5",
        className
      )}
      role="listitem"
    >
      {/* Make the whole card clickable to the case page */}
      <Link href={project.links?.caseStudy ?? caseHref} className="absolute inset-0" aria-label={`Open case study for ${project.title}`}>
        <span className="sr-only">Open case study</span>
      </Link>

      {project.image ? (
        <div className="aspect-[16/9] w-full overflow-hidden">
          <Image
            src={withBasePath(project.image)}
            alt={project.title}
            width={1280}
            height={720}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
            loading="lazy"
          />
        </div>
      ) : null}

      <CardHeader className="space-y-2">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{project.summary}</p>
        {project.highlights?.length ? (
          <ul className="list-inside list-disc text-sm">
            {project.highlights.slice(0, 3).map((h) => <li key={h}>{h}</li>)}
          </ul>
        ) : null}

        <div className="flex gap-3 pt-2">
          {demo && (
            <a
              className="inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline"
              href={demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open demo for ${project.title}`}
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
          {repo && (
            <a
              className="inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline"
              href={repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open GitHub repo for ${project.title}`}
            >
              <Github size={16} /> Code
            </a>
          )}
          <Link
            className="ml-auto text-sm underline-offset-4 hover:underline"
            href={caseHref}
            aria-label={`Read case study for ${project.title}`}
          >
            Case study →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
