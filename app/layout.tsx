import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hugoqdesh.vercel.app/"),
  title: "HJ - Web Developer",
  description: "Hey im Hugo - a 16 year old web developer",
  openGraph: {
    title: "HJ - Web Developer",
    description: "Hey im Hugo - a 16 year old web developer",
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
        <header className="fixed w-full"></header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
