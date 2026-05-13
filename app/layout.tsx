import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DNF — Next Generation Fire Safety Technology",
  description: "DNF slows fire spread, buys critical response time, and protects cities, forests, industrial facilities, and lives. Germany-based eco-conscious fire safety technology.",
  keywords: "fire safety, fire protection, fire retardant, DNF, yangın güvenliği, forest fire, industrial fire protection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
