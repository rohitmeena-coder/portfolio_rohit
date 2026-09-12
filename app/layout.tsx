import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import PageLoader from "@/components/PageLoader";
import { profile } from "@/lib/data";


export const viewport: Viewport = {
  themeColor: "#05050A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rohitmeena.dev"),
  title: `${profile.name} — Mathematics & Computing Student, AI & Full Stack Developer`,
  description:
    "Portfolio of Rohit Meena — Mathematics & Computing student building AI-powered and full-stack products, from on-device RAG systems to production web apps.",
  keywords: [
    "Rohit Meena",
    "Full Stack Developer",
    "AI Developer",
    "Mathematics and Computing",
    "React Developer",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.tagline,
    url: "https://rohitmeena.dev",
    siteName: profile.name,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Portfolio`,
    description: profile.tagline,
    images: ["/og-image.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/icons/favicon.svg",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <PageLoader />
        <ScrollProgress />
        <CustomCursor />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
