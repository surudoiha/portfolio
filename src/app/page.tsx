import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectGrid from "@/components/project-grid";
import ResumeSection from "@/components/resume-section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, Grid3X3 } from "lucide-react";

export default function HomePage() {
  const featured = projects
    .filter((p) => p.featured)
    .concat(projects.filter((p) => !p.featured))
    .slice(0, 6);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero section with name + tagline */}
      <section className="mb-6 space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Suren Tumasyan — Software Engineer
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Building performant web applications and automation tools. Explore my
          resume and selected projects below.
        </p>
      </section>

      {/* Tabs: Resume / Projects */}
      <Tabs defaultValue="resume" className="mt-2">
        <TabsList>
          <TabsTrigger value="resume" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Resume</span>
          </TabsTrigger>
          <TabsTrigger value="projects" className="flex items-center gap-2">
            <Grid3X3 className="h-4 w-4" />
            <span>Projects</span>
          </TabsTrigger>
        </TabsList>

        {/* Resume tab content */}
        <TabsContent value="resume" className="mt-6">
          <ResumeSection />
        </TabsContent>

        {/* Projects tab content */}
        <TabsContent value="projects" className="mt-6">
          <ProjectGrid projects={featured} />
          <div className="mt-6">
            <Link
              href="/projects"
              className="text-sm underline underline-offset-4"
            >
              View all projects →
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
