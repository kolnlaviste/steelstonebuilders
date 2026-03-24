"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F6F1] border-b border-[#E5DDD0]">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">

          {/* Wordmark */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1A1A1A] hover:text-[#8B7355] transition-colors"
          >
            Steel & Stone Builders
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-sans)] text-sm transition-colors
                  ${pathname === link.href
                    ? "text-[#1A1A1A] font-medium"
                    : "text-[#7A7A7A] hover:text-[#1A1A1A]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="sm:hidden font-[family-name:var(--font-sans)] text-sm text-[#7A7A7A]"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#F9F6F1] pt-16 px-8 sm:hidden">
          <nav className="flex flex-col gap-8 pt-12">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-display)] text-3xl text-[#1A1A1A] hover:text-[#8B7355] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-10 left-8 space-y-2">
            <p className="font-[family-name:var(--font-sans)] text-sm text-[#7A7A7A]">steelstonebuilders@gmail.com</p>
            <p className="font-[family-name:var(--font-sans)] text-sm text-[#7A7A7A]">(032) 402-3211</p>
          </div>
        </div>
      )}
    </>
  );
}