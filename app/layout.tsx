import type { Metadata } from "next";
import "@fontsource/inter/index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Chaudhary | Software Engineer",
  description:
    "Personal portfolio for Ayush Chaudhary, a software engineer focused on AI, data science, web apps, APIs, and ML systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
