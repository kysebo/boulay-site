import type { Metadata } from "next";
import { Provider } from 'react-wrap-balancer'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// See ARCHITECTURE.md for site intent and constraints.

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "boulay.me — Kyle Boulay",
  description: "Clear thinking, product leadership, coaching, and frontend work.",
  openGraph: {
    title: "boulay.me — Kyle Boulay",
    description: "Clear thinking, product leadership, coaching, and frontend work.",
    url: "https://boulay.me",
    siteName: "boulay.me",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "boulay.me — Kyle Boulay",
    description: "Clear thinking, product leadership, coaching, and frontend work.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
