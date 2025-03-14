import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinod Akshat | Portfolio",
  description: "Portfolio website of Vinod Akshat, showcasing projects, skills, and achievements.",
  keywords: "Vinod Akshat, Vinod Akshat Writer,portfolio, web developer,Writer, software engineer, Stories,projects, resume",
  metadataBase: new URL("https://vinod-akshat.vercel.app"), 
  openGraph: {
    title: "Vinod Akshat | Portfolio",
    description: "Explore the projects, skills, and achievements of Vinod Akshat.",
    url: "https://vinod-akshat.vercel.app",
    siteName: "Vinod Akshat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinod Akshat | Portfolio",
    description: "Explore the projects, skills, and achievements of Vinod Akshat.",
  },icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "google-site-verification": "vHJoXYV__FsbiPx4JHobGDr4SFCvxgvuGKXudvlZXNg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
