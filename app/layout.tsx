import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  verification: {
  google: "XjoiYPpNdTrSD7_K7mYmA2_6RtlOqMTqGnCPOVJhGxc",
},
  title: {
    default: "Sleep Project",
    template: "%s | Sleep Project",
  },

  description:
    "Sleep Project helps you improve sleep quality through better sleep environments, bedroom optimization, sleep products, and practical sleep guides.",

  keywords: [
    "sleep better",
    "sleep environment",
    "bedroom optimization",
    "sleep setup",
    "sleep products",
    "better sleep habits",
    "sleep guides",
  ],

  metadataBase: new URL("https://sleep-project.vercel.app"),

  openGraph: {
    title: "Sleep Project",
    description:
      "Improve sleep quality with better sleep environments and practical sleep guides.",
    url: "https://sleep-project.vercel.app",
    siteName: "Sleep Project",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}