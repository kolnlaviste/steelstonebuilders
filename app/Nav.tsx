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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8] border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

          {/* Wordmark — serif for tradition */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-serif text-sm font-medium text-[#1C1917] hover:text-stone-500 transition-colors tracking-wide"
          >
            Steel & Stone Builders
          </Link>

          {/* Desktop links */}
          <nav className="hidden sm:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs tracking-wide transition-colors
                  ${pathname === link.href
                    ? "text-[#1C1917]"
                    : "text-stone-400 hover:text-[#1C1917]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="sm:hidden font-mono text-xs text-stone-400"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#FAFAF8] pt-14 px-6 sm:hidden">
          <nav className="flex flex-col gap-6 pt-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-[#1C1917] hover:text-stone-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-10 left-6 space-y-1">
            <p className="font-mono text-xs text-stone-400">steelstonebuilders@gmail.com</p>
            <p className="font-mono text-xs text-stone-400">(032) 402-3211</p>
          </div>
        </div>
      )}
    </>
  );
}