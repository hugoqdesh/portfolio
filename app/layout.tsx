import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "./_head";

const font = Archivo({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hugoqdesh.lol/"),
  keywords: [
    "hugoqdesh" + "portfolio",
    "hj" + "portfolio",
    "Hugo",
  ],
  title: "HJ - Web Developer",
  description: "Hey im Hugo - a 17 year old web developer",
  openGraph: {
    title: "HJ - Web Developer",
    description: "Hey im Hugo - a 17 year old web developer",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
