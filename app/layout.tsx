import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tanaka-web",
  description: "Website of the tanaka, by the tanaka, for the tanaka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
