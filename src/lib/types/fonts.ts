import { Playfair_Display } from "next/font/google";
import { Inter } from "next/font/google";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  subsets: ["latin"],
});

export { playfairDisplay, inter };
