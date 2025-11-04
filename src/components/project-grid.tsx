// src/components/project-grid.tsx
"use client";

import ProjectCard from "./project-card";
import type { Project } from "@/lib/projects";

type Props = {
  projects: Project[];
  role?: "list" | "grid";
};

export default function ProjectGrid({ projects, role = "list" }: Props) {
  return (
    <div
      role={role}
      aria-label="Projects"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}
