import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigation from "@/components/TopNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeoLife AI - Investment Deck",
  description: "가장 나 다운 삶을 설계하는 혁신 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.className} antialiased selection:bg-blue-500/30 bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        <TopNavigation />
        <main className="flex-1 w-full relative">
          {children}
        </main>
      </body>
    </html>
  );
}
