import type { Metadata } from "next";
import { Inter, Inika } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});
const inika = Inika({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-inika",
});

export const metadata: Metadata = {
  title: "Galerie ORAXE",
  description: "Galerie d'Art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${inika.variable}`}>
      <body>{children}</body>
    </html>
  );
}
