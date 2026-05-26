import "./globals.css";
import { Anton, Inter_Tight, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Grain from "@/components/Grain";
import Spotlight from "@/components/Spotlight";
import TopNav from "@/components/TopNav";
import Textures from "@/components/Textures";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Daniel Canoy — Full-stack developer",
  description:
    "Full-stack developer in Puerto Princesa, PH. Next.js, NestJS, Postgres. Shipping production systems since 2023.",
  // Favicon auto-discovered from app/icon.png by Next.js App Router conventions
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${interTight.variable} ${jetbrains.variable}`}
      style={
        {
          "--font-display": "var(--font-anton)",
          "--font-body": "var(--font-inter-tight)",
          "--font-mono": "var(--font-jetbrains)",
        } as React.CSSProperties
      }
    >
      <body className="bg-bg text-ink antialiased overflow-x-hidden">
        <SmoothScroll>
          <Spotlight />
          <Grain />
          <Textures />
          <TopNav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
