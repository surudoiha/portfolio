export const metadata = {
  title: "About — Suren Tumasyan",
  description:
    "Software engineer building fast, accessible web apps with React, Next.js, and TypeScript.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">About Me</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi, I&apos;m <strong>Suren Tumasyan</strong>, a software engineer based in
          the Los Angeles area. I&apos;m graduating from{" "}
          <strong>California State University, Northridge</strong> with a
          Bachelor&apos;s in Computer Science (May 2025).
        </p>

        <p>
          I specialize in building performant web applications and automation
          tools. My experience spans full-stack development with{" "}
          <strong>TypeScript</strong>, <strong>React</strong>, and{" "}
          <strong>Node.js</strong>, as well as Python-based automation pipelines
          for multimedia and data processing workflows.
        </p>

        <p>
          Currently, I work as an IT Specialist managing systems across a
          multi-store retail network, which has given me hands-on experience with
          infrastructure, databases, and operational reporting.
        </p>

        <h2>What I&apos;m Working On</h2>
        <ul>
          <li>VFX pipeline automation tools for multimedia workflows</li>
          <li>Full-stack web applications with TypeScript and React</li>
          <li>Machine learning projects and data analysis</li>
        </ul>

        <h2>Technical Interests</h2>
        <ul>
          <li>Developer tooling and workflow automation</li>
          <li>Type-safe APIs and shared types across full-stack projects</li>
          <li>System design and scalable architecture</li>
        </ul>

        <p>
          You can reach me at{" "}
          <a
            href="mailto:suro2014.ss@gmail.com"
            className="underline underline-offset-4"
          >
            suro2014.ss@gmail.com
          </a>
          , or find me on{" "}
          <a
            href="https://www.linkedin.com/in/suren-tumasyan-44770836b/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </main>
  );
}
