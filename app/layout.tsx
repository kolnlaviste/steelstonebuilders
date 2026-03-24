import type { Metadata } from "next";
import { Lora, Geist_Mono } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Steel & Stone Builders, OPC — Cebu",
    template: "%s | Steel & Stone Builders",
  },
  description:
    "A design and build company based in Cebu City. We design and construct residential homes, commercial fit-outs, and institutional buildings with honesty and full commitment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${geistMono.variable}`}>
      <body className="bg-[#FAFAF8] text-[#1C1917] antialiased">
        {children}
      </body>
    </html>
  );
}