"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/work", label: "Projects" },
  { href: "/about", label: "About" },
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
          ${scrolled ? "bg-white/96 backdrop-blur-sm border-b border-gray-200" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Wordmark */}
          <Link
            href="/"
            className="font-display text-3xl text-[#1a1a1a] hover:text-[#666666] transition-colors duration-200"
          >
            Steel & Stone
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm transition-colors duration-200
                  ${pathname.startsWith(link.href)
                    ? "text-[#1a1a1a] font-medium"
                    : "text-[#666666] hover:text-[#1a1a1a]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:steelstonebuilders@gmail.com"
              className="border border-[#1a1a1a] px-4 py-2 font-sans text-sm
                hover:bg-[#1a1a1a] hover:text-white
                transition-all duration-200"
            >
              Inquire
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-center px-8
          transition-all duration-500 ease-in-out md:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-3xl text-[#1a1a1a] hover:text-[#666666] transition-colors duration-200"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:steelstonebuilders@gmail.com"
            className="font-sans text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors duration-200 mt-8"
          >
            steelstonebuilders@gmail.com
          </a>
        </nav>

        <div className="absolute bottom-10 left-8 right-8 flex justify-between">
          <span className="font-sans text-sm text-[#999999]">
            Cebu City, Philippines
          </span>
          <span className="font-sans text-sm text-[#999999]">
            Est. 2008
          </span>
        </div>
      </div>
    </>
  );
}