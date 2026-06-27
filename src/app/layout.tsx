import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Brevet Histoire-Géo 3e - Révisions Interactives",
  description: "Révise intelligemment l'histoire et la géographie de 3ème pour obtenir 20/20 au Brevet 2025. Cours complets, quiz à répétition espacée, flashcards, frises chronologiques et cartes mentales.",
  keywords: ["brevet", "histoire", "géographie", "3e", "révision", "collège", "quiz", "flashcards", "brevet 2025", "aires urbaines", "guerre froide", "union européenne"],
  authors: [{ name: "Antigravity Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-100 transition-colors duration-300">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
