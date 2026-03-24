import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-14 max-w-5xl mx-auto px-6">

        {/* ── HEADER ─────────────────────────────────── */}
        <section className="py-16 md:py-20 border-b border-stone-200">
          <p className="font-mono text-xs text-stone-400 mb-4 tracking-wide">
            {projects.length} Projects
          </p>
          <h1 className="font-serif text-2xl md:text-3xl text-[#1C1917]">
            Our Work
          </h1>
        </section>

        {/* ── PROJECT GRID ───────────────────────────── */}
        <section className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {projects.map((project) => (
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