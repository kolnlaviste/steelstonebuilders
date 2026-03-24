import type { Metadata } from "next";
import { Inter, Oswald, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Steel & Stone Builders — Cebu",
    template: "%s | Steel & Stone Builders",
  },
  description:
    "A design and build company based in Cebu City. We build homes, offices, and commercial spaces with honesty and full commitment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${roboto.variable}`}>
      <body className="bg-white text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  );
}