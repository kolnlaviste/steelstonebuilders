import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      <Nav />
      <main className="pt-14 max-w-5xl mx-auto px-6">

        {/* ── INTRO ──────────────────────────────────── */}
        <section className="py-16 md:py-24 border-b border-stone-200">
          <p className="font-mono text-xs text-stone-400 mb-6 tracking-wide">
            Cebu City, Philippines — Design & Build
          </p>
          <h1 className="font-serif text-2xl md:text-3xl text-[#1C1917] leading-snug max-w-lg mb-4">
            We design and build homes, offices, and commercial spaces across Cebu.
          </h1>
          <p className="font-mono text-xs text-stone-400 max-w-md leading-relaxed mb-10">
            Founded on honesty, integrity, and a commitment to quality — Steel & Stone Builders has been serving clients across Cebu since 2015.
          </p>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 border border-[#1C1917] px-5 py-3
              font-mono text-xs text-[#1C1917]
              hover:bg-[#1C1917] hover:text-[#FAFAF8] transition-colors duration-200"
          >
            View Our Work →
          </Link>
        </section>

        {/* ── FEATURED PROJECTS ──────────────────────── */}
        <section className="py-16 border-b border-stone-200">
          <p className="font-mono text-xs text-stone-400 mb-10 tracking-wide">
            Recent Projects
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
              >
                <div
                  className="relative overflow-hidden bg-stone-100 mb-4 border border-stone-200"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={project.coverImage}
                    alt={project.coverAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-serif text-sm text-[#1C1917] mb-0.5">
                      {project.title}
                    </p>
                    <p className="font-mono text-xs text-stone-400">
                      {project.location} — {project.year}
                    </p>
                    <p className="font-mono text-xs text-stone-300 mt-0.5">
                      {project.type}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-stone-300 shrink-0 mt-0.5">
                    {project.index}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/work"
              className="font-mono text-xs text-stone-400 hover:text-[#1C1917] transition-colors"
            >
              See all {projects.length} projects →
            </Link>
          </div>
        </section>

        {/* ── CONTACT CTA ────────────────────────────── */}
        <section className="py-16">
          <p className="font-mono text-xs text-stone-400 mb-4 tracking-wide">
            Start a Project
          </p>
          <p className="font-serif text-xl text-[#1C1917] mb-6 max-w-md leading-snug">
            Have something in mind? We'd love to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#1C1917] px-5 py-3
              font-mono text-xs text-[#1C1917]
              hover:bg-[#1C1917] hover:text-[#FAFAF8] transition-colors duration-200"
          >
            Get in Touch →
          </Link>
        </section>

        {/* ── FOOTER ─────────────────────────────────── */}
        <footer className="border-t border-stone-200 py-8 flex flex-col sm:flex-row justify-between gap-3">
          <span className="font-mono text-xs text-stone-300">
            © {new Date().getFullYear()} Steel & Stone Builders, OPC
          </span>
          <a
            href="mailto:steelstonebuilders@gmail.com"
            className="font-mono text-xs text-stone-400 hover:text-[#1C1917] transition-colors"
          >
            steelstonebuilders@gmail.com
          </a>
        </footer>

      </main>
    </>
  );
}