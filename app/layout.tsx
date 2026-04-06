import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOEI RELATIONS | Creating new possibilities.",
  description: "関わるすべてに、次の可能性をひらく。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;700&family=M+PLUS+1p:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
