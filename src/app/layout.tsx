import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";


const siteName = "Suren Tumasyan — Software Engineer";
const siteUrl = "https://surudoiha.github.io/portfolio"; 
const ogImage = `${siteUrl}/og.png`; // static image in /public

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s — Suren Tumasyan",
  },
  description:
    "I build fast, accessible web apps with Next.js, React, and TypeScript.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    siteName,
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9", // tweak color
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
