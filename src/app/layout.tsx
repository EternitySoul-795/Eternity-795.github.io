import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ParticleField } from "@/components/ui/ParticleField";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EternitySoul - @KD",
  description:
    "Building immersive digital experiences & AI-powered products. Full stack developer, UI/UX designer, and creative technologist.",
  metadataBase: new URL("https://eternitysoul.me"),
  icons: {
    icon: "/ES_logo.png",
    shortcut: "/ES_logo.png",
    apple: "/ES_logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="relative min-h-full overflow-x-hidden bg-[#05050b] text-[#eeeef5]">
        <SmoothScrollProvider>
          <CustomCursor />
          <ParticleField />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
