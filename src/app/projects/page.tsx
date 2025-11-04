// grid with filters 

// src/app/projects/page.tsx
import ProjectGrid from "@/components/project-grid";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description: "Selected work with write-ups and source links.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Projects</h1>
      <ProjectGrid projects={projects} />
    </main>
  );
}
