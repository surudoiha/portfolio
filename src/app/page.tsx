import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectGrid from "@/components/project-grid";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, Grid3X3, Download } from "lucide-react";

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
          SS — Software Engineer
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Below you can view my resume and explore selected projects.
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
        <TabsContent value="resume" className="mt-6 space-y-6">

          {/* Intro text */}
          <div>
            <p className="text-sm text-muted-foreground">
              You can view my resume directly on this page, download it, or open it in a new tab.
            </p>
          </div>

          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 border rounded-md p-3 bg-muted/30">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border bg-background px-3 py-2 text-sm font-medium shadow-sm hover:bg-muted"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border bg-background px-3 py-2 text-sm font-medium shadow-sm hover:bg-muted"
            >
              Open in new tab
            </Link>

            <span className="text-xs text-muted-foreground ml-auto">
              PDF viewer powered by your browser
            </span>
          </div>

          {/* Document viewer container */}
          <div className="
              rounded-xl 
              border 
              shadow-lg 
              overflow-hidden 
              bg-gradient-to-br from-background to-muted/20
              max-h-[85vh]
            "
          >
            <iframe
              src="/resume.pdf#view=FitH"
              title="SS Resume"
              className="h-[85vh] w-full"
            />
          </div>

          {/* Fallback text */}
          <p className="text-xs text-muted-foreground text-center">
            If you have trouble viewing the embedded PDF,{" "}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              click here to open it directly.
            </Link>
          </p>
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
