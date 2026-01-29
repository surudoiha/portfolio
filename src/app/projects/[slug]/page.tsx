import Image from "next/image";
import Link from "next/link";
import { allSlugs, getProject } from "@/lib/projects";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Lightbulb,
  CheckCircle2,
  Layers,
  Rocket,
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
  const project = getProject(slug);
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

export default async function ProjectCasePage(props: Props) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) return notFound();

  const isVfx = project.slug === "vfx-pipeline-automation";
  const isPsy = project.slug === "psy-code-ogists";

  // ---------- OVERVIEW CONTENT ----------
  const overviewContent = isVfx ? (
    <>
      <p>
        This project, <strong>The Crucible</strong>, is a{" "}
        <strong>VFX/post-production pipeline automation tool</strong> built in
        Python for a professional video workflow. It ingests Baselight frame
        exports and Xytech workorder locations, stores them in MongoDB, and uses
        that combined data to automate shot extraction and reporting.
      </p>

      <h3 className="flex items-center gap-2 mt-8 mb-4">
        <Rocket className="h-5 w-5 text-primary" />
        What It Does
      </h3>
      <p>The pipeline streamlines the workflow by:</p>
      <ul className="space-y-2 mt-4">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
          <span>
            <strong>Matching</strong> Baselight shot locations to Xytech
            workorders
          </span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
          <span>
            <strong>Extracting</strong> specific frame ranges from source video
            using FFmpeg
          </span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
          <span>
            <strong>Generating</strong> thumbnails and SMPTE timecode for each
            shot
          </span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
          <span>
            <strong>Building</strong> Excel reports with embedded thumbnails and
            metadata
          </span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
          <span>
            <strong>Tracking</strong> missing or unprocessed frames in a CSV
            export
          </span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
          <span>
            <strong>Batch-uploading</strong> rendered shots to Vimeo via its API
          </span>
        </li>
      </ul>

      <h3 className="flex items-center gap-2 mt-8 mb-4">
        <Lightbulb className="h-5 w-5 text-yellow-500" />
        The Problem It Solves
      </h3>
      <p>
        The goal is to replace a <strong>slow, manual process</strong> involving
        multiple tools with a single automated pipeline that is{" "}
        <strong>repeatable</strong>, <strong>auditable</strong>, and easier for
        artists and producers to work with.
      </p>
    </>
  ) : isPsy ? (
    <>
      <p>
        <strong>Psy-Code-Ogists</strong> is a{" "}
        <strong>team-based capstone project</strong> for a COMP 490 course. The
        focus of the project is less on a single feature and more on applying
        solid <strong>software engineering practices</strong> in a collaborative
        environment using a modern web stack.
      </p>

      <h3 className="flex items-center gap-2 mt-8 mb-4">
        <Layers className="h-5 w-5 text-primary" />
        Technical Architecture
      </h3>
      <p>
        The application is built with <strong>Next.js</strong>,{" "}
        <strong>React</strong>, and <strong>TypeScript</strong>, styled with{" "}
        <strong>Tailwind CSS</strong>. As a team, we worked on defining a
        consistent component architecture, shared design language, and a clear
        separation between presentational and container components.
      </p>

      <h3 className="flex items-center gap-2 mt-8 mb-4">
        <Rocket className="h-5 w-5 text-primary" />
        My Contributions
      </h3>
      <ul className="space-y-2 mt-4">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
          <span>
            <strong>Front-end implementation</strong> of core features
          </span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
          <span>
            <strong>Structuring reusable UI components</strong> for consistency
          </span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
          <span>
            <strong>Code reviews</strong> to maintain codebase quality
          </span>
        </li>
      </ul>
    </>
  ) : (
    <>
      <p>
        This project showcases how I approach building{" "}
        <strong>real-world software</strong>: starting from a clear problem,
        working within constraints, and focusing on performance,
        maintainability, and developer experience.
      </p>
      <p className="mt-4">
        The main goals were to deliver a <strong>solid user experience</strong>,
        keep the implementation understandable for other developers, and leave
        room for future improvements like better observability, testing, and
        automation.
      </p>
    </>
  );

  // ---------- IMPROVEMENTS CONTENT ----------
  const improvements = isVfx
    ? [
        "Add a simple web UI (e.g. FastAPI + React) so producers can trigger runs without using the terminal",
        "Containerize the pipeline with Docker and run it in a job queue so multiple reels can be processed in parallel",
        "Extend reporting with success/error dashboards and per-shot processing metrics for better visibility",
        "Add automated tests around parsing Baselight/Xytech formats and timecode conversion to catch regressions early",
      ]
    : isPsy
      ? [
          "Strengthen automated testing (unit + integration) around the most important user flows",
          "Improve documentation for new contributors: clear setup instructions, architecture overview, and contribution guidelines",
          "Add basic analytics or logging to understand how people actually use the app and prioritize future changes",
          "Refine the design system and extract more shared components to reduce duplication",
        ]
      : [
          "Increase automated test coverage and add integration tests",
          "Improve monitoring/metrics to track performance and errors",
          "Refine the UX and documentation for easier onboarding",
        ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      {/* Title + Source Code Button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {project.title}
        </h1>

        <div className="flex gap-3 shrink-0">
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-muted transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        {project.summary}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mt-6">
        {project.tech.map((t) => (
          <Badge key={t} variant="secondary" className="text-sm">
            {t}
          </Badge>
        ))}
      </div>

      {/* Project image */}
      {project.image && (
        <div className="mt-8 overflow-hidden rounded-xl border shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            width={1280}
            height={720}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      <Separator className="my-10" />

      {/* Overview section */}
      <section className="text-base sm:text-lg leading-relaxed">
        <h2 className="text-2xl font-semibold mb-6">Overview</h2>
        {overviewContent}
      </section>

      <Separator className="my-10" />

      {/* Highlights section */}
      {project.highlights && project.highlights.length > 0 && (
        <>
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              Key Highlights
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.highlights.map((h, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <p className="text-sm sm:text-base">{h}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-10" />
        </>
      )}

      {/* Future improvements */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-yellow-500" />
          What I&apos;d Improve Next
        </h2>
        <div className="space-y-3">
          {improvements.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                {i + 1}
              </span>
              <p className="text-sm sm:text-base">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
