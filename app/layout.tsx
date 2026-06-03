import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk, Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Sam Dhanalakota",
  description: "Senior Software Engineer — React, TypeScript, Node.js",
  icons: {
    icon: "/favicon.svg",
    apple: "/logo-dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(spaceGrotesk.variable, inter.variable, playfair.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body
        className="font-body antialiased bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <ScrollProgressBar />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
