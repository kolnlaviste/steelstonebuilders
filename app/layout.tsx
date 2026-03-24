import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-[#F9F6F1] text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}