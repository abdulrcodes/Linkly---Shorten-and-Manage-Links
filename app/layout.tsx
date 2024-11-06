import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Importing Outfit font from Google Fonts
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Linkly - The Ultimate URL Shortening Tool",
  description:
    "Effortlessly shorten, track, and manage your links with Linkly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
