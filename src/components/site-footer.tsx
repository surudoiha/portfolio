import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SS. Built with{" "}
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Tailwind CSS
          </Link>
          .
        </p>

        <div className="flex gap-4 text-sm">
          <Link
            href="https://github.com/yourname"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
