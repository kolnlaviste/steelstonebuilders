"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? "bg-white/96 backdrop-blur-md border-b border-gray-100" : "bg-transparent"}`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">

          {/* Wordmark */}
          <Link
            href="/"
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#121212] hover:opacity-50 transition-opacity duration-200"
          >
            Steel Stone Builders
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-opacity duration-200
                  ${pathname.startsWith(link.href)
                    ? "text-[#121212] opacity-100"
                    : "text-[#121212] opacity-40 hover:opacity-100"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:studio@archive.com"
              className="border border-gray-300 px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase
                hover:border-[#121212] hover:bg-[#121212] hover:text-white
                transition-all duration-200"
            >
              Inquire
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span className={`block w-5 h-px bg-[#121212] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-[#121212] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#121212] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-center px-8
          transition-all duration-500 ease-in-out md:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-4xl text-[#121212] hover:opacity-40 transition-opacity duration-200"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:studio@archive.com"
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-gray-400 hover:text-[#121212] transition-colors duration-200 mt-4"
          >
            studio@archive.com
          </a>
        </nav>

        <div className="absolute bottom-10 left-8 right-8 flex justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-300">
            Est. 2008
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-300">
            Vienna / Lisbon
          </span>
        </div>
      </div>
    </>
  );
}