import type { Metadata } from "next";
import "./globals.css";
import { playfairDisplay, inter } from "@/lib/types/fonts";

export const metadata: Metadata = {
  title: "Lumière | Premium E-Commerce",
  description: "Découvrez notre collection exclusive de vêtements et accessoires. Élégance, qualité et style pour tous.",
};

export default function RootLayout({ children }: React.ReactNode) {
  return (
    <html lang="fr" className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}>
      <body className={cn("min-h-full flex flex-col", inter.className)}>
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

function cn(...inputs: unknown[]) {
  return inputs.filter(Boolean).join("");
}
