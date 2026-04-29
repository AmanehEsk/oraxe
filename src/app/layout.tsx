import type { Metadata } from "next";
import { Inter, Inika } from "next/font/google";
import Footer from "@/components/Footer";
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
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col w-full relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
