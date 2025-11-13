"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold tracking-tight">
            SS
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="mailto:you@example.com"
            className="text-sm underline-offset-4 hover:underline"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
