import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MusicPlayer from "@/components/MusicPlayer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hugoqdesh.vercel.app/"),
  title: "HJ Portfolio | Web Developer",
  description:
    "HJ's portfolio, Im a 16 year old full stack web developer who loves to build things with code.",
  openGraph: {
    title: "HJ Portfolio | Web Developer",
    description:
      "HJ's portfolio, Im a 16 year old full stack web developer who loves to build things with code.",
    type: "website",
    locale: "en-US",
    url: "https://hugoqdesh.vercel.app/",
    siteName: "HJ Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed w-full">
          <Header />
        </header>
        {children}
        <MusicPlayer />
        <Analytics />
      </body>
    </html>
  );
}
