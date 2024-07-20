import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "./_head";

const font = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hugoqdesh.lol/"),
  keywords: [
    "hugoqdesh" + "portfolio",
    "hj" + "portfolio",
    "Hugo Johan Di Maria",
    "Hugo Di Maria",
  ],
  title: "HJ - Web Developer",
  description: "Hey im Hugo - a 16 year old web developer",
  openGraph: {
    title: "HJ - Web Developer",
    description: "Hey im Hugo - a 16 year old web developer",
    type: "website",
    locale: "en-US",
    url: "https://hugoqdesh.lol/",
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
      <Head />
      <body className={font.className}>
        <header className="fixed w-full"></header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
