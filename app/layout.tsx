import type { Metadata } from "next";
import { Orbitron, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DEVARAJ P | AI Engineer & Full Stack Developer",
  description:
    "DEVARAJ P — AI Engineer, Machine Learning Enthusiast & Full Stack Developer. Building AI-powered systems that solve real-world problems through machine learning, automation, and modern web technologies.",
  keywords: [
    "DEVARAJ P",
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Generative AI",
    "Python",
    "React",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "DEVARAJ P" }],
  creator: "DEVARAJ P",
  openGraph: {
    type: "website",
    title: "DEVARAJ P | AI Engineer & Full Stack Developer",
    description:
      "Building AI-powered systems that solve real-world problems through machine learning, automation, and modern web technologies.",
    siteName: "DEVARAJ P Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEVARAJ P | AI Engineer & Full Stack Developer",
    description:
      "Building AI-powered systems that solve real-world problems.",
  },
};

export const viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#050505] text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
