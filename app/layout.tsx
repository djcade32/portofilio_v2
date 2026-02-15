import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

const outfit = Outfit({
  variable: "--font-outfit-var",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk-var",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Norman Cade Dev",
  description:
    "I build scalable web products with strong technical foundations, clear product thinking, and long-term leverage in mind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
        <Navbar />
        <main>
          {children}
          <div id="modal-root" />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
