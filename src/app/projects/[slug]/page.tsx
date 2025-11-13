import Image from "next/image";
import Link from "next/link";
import { allSlugs, getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

type Props = {
  // Next 15: params is a Promise
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
        This project, <strong>The Crucible</strong>, is a VFX/post-production
        pipeline automation tool built in Python for a professional video
        workflow. It ingests Baselight frame exports and Xytech workorder
        locations, stores them in MongoDB, and uses that combined data to
        automate shot extraction and reporting.
      </p>

      <p>The pipeline streamlines the workflow by:</p>
      <ul>
        <li>Matching Baselight shot locations to Xytech workorders</li>
        <li>Extracting specific frame ranges from a source video using FFmpeg</li>
        <li>Generating thumbnails and SMPTE timecode for each shot</li>
        <li>Building Excel reports with embedded thumbnails and metadata</li>
        <li>Tracking missing or unprocessed frames in a CSV export</li>
        <li>Batch-uploading rendered shots to Vimeo via its API</li>
      </ul>

      <p>
        The goal is to replace a slow, manual process involving multiple tools
        with a single automated pipeline that is repeatable, auditable, and
        easier for artists and producers to work with.
      </p>
    </>
  ) : isPsy ? (
    <>
      <p>
        <strong>Psy-Code-Ogists</strong> is a team-based capstone project for a
        COMP 490 course. The focus of the project is less on a single feature
        and more on applying solid software engineering practices in a
        collaborative environment using a modern web stack.
      </p>

      <p>
        The application is built with <strong>Next.js</strong>,{" "}
        <strong>React</strong>, and <strong>TypeScript</strong>, styled with{" "}
        <strong>Tailwind CSS</strong>. As a team, we worked on defining a
        consistent component architecture, shared design language, and a clear
        separation between presentational and container components.
      </p>

      <p>
        My contributions included working on the front-end implementation,
        helping structure reusable UI components, and participating in code
        reviews to keep the codebase consistent and maintainable.
      </p>
    </>
  ) : (
    <>
      <p>
        This project showcases how I approach building real-world software:
        starting from a clear problem, working within constraints, and focusing
        on performance, maintainability, and developer experience.
      </p>
      <p>
        The main goals were to deliver a solid user experience, keep the
        implementation understandable for other developers, and leave room for
        future improvements like better observability, testing, and automation.
      </p>
    </>
  );

  // ---------- IMPROVEMENTS CONTENT ----------
  const improvementsContent = isVfx ? (
    <ul>
      <li>
        Add a simple web UI (e.g. FastAPI + React) so producers can trigger
        runs without using the terminal.
      </li>
      <li>
        Containerize the pipeline with Docker and run it in a job queue so
        multiple reels can be processed in parallel.
      </li>
      <li>
        Extend reporting with success/error dashboards and per-shot processing
        metrics for better visibility.
      </li>
      <li>
        Add automated tests around parsing Baselight/Xytech formats and
        timecode conversion to catch regressions early.
      </li>
    </ul>
  ) : isPsy ? (
    <ul>
      <li>
        Strengthen automated testing (unit + integration) around the most
        important user flows.
      </li>
      <li>
        Improve documentation for new contributors: clear setup instructions,
        architecture overview, and contribution guidelines.
      </li>
      <li>
        Add basic analytics or logging to understand how people actually use
        the app and prioritize future changes.
      </li>
      <li>
        Refine the design system and extract more shared components to reduce
        duplication.
      </li>
    </ul>
  ) : (
    <ul>
      <li>Increase automated test coverage and add integration tests.</li>
      <li>Improve monitoring/metrics to track performance and errors.</li>
      <li>Refine the UX and documentation for easier onboarding.</li>
    </ul>
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/projects"
        className="mb-6 inline-block underline underline-offset-4"
      >
        ← Back to projects
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight">
        {project.title}
      </h1>
      <p className="mt-3 text-muted-foreground">{project.summary}</p>

      {project.image && (
        <div className="mt-6 overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            width={1280}
            height={720}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      <section className="prose prose-neutral dark:prose-invert mt-8">
        <h2>Overview</h2>
        {overviewContent}

        <h3>Highlights</h3>
        <ul>
          {project.highlights?.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <h3>Stack</h3>
        <ul>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <h2>What I’d improve next</h2>
        {improvementsContent}
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        {project.links?.demo && (
          <a
            className="underline underline-offset-4"
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live demo
          </a>
        )}
        {project.links?.repo && (
          <a
            className="underline underline-offset-4"
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>
        )}
      </div>
    </main>
  );
}
