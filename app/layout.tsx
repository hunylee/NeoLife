import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeoLife AI Investment Deck",
  description: "Original 20-page NeoLife AI Investment Deck web viewer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
