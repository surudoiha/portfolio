export const metadata = {
    title: "About — SS",
    description:
      "Software engineer building fast, accessible web apps with React, Next.js, and TypeScript.",
  };
  
  export default function AboutPage() {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-6 text-3xl font-semibold tracking-tight">About Me</h1>
  
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Hi, I’m <strong>SS</strong>, a software engineer focused on building
            performant, accessible, and maintainable web applications using{" "}
            <strong>Next.js</strong>, <strong>React</strong>, and{" "}
            <strong>TypeScript</strong>.
          </p>
  
          <p>
            I enjoy translating ideas into scalable systems and clean interfaces.
            My projects range from full-stack SaaS prototypes to frontend
            component libraries, all built with an emphasis on UX, performance,
            and developer experience.
          </p>
  
          <p>
            Outside of coding, I like exploring UI design systems, mentoring new
            developers, and contributing to open-source projects.
          </p>
  
          <h2>Current Focus</h2>
          <ul>
            <li>Improving performance and accessibility in React apps</li>
            <li>Type-safe APIs and shared types across full-stack projects</li>
            <li>Developer tooling and automation</li>
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
              href="https://linkedin.com/in/suren-tumasyan-44770836b/"
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
  