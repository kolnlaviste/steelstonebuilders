import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">

        {/* ── HEADER ─────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-8 pt-20 pb-14 border-b border-[#E5DDD0]">
          <p className="font-[family-name:var(--font-sans)] text-sm text-[#8B7355] tracking-widest uppercase mb-4">
            {projects.length} Projects
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#1A1A1A]">
            Our Work
          </h1>
        </section>

        {/* ── GRID ───────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
              >
                <div
                  className="relative overflow-hidden bg-[#EDE8DF] mb-5"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={project.coverImage}
                    alt={project.coverAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[#1A1A1A] mb-1 group-hover:text-[#8B7355] transition-colors">
                  {project.title}
                </h3>
                <p className="font-[family-name:var(--font-sans)] text-sm text-[#7A7A7A]">
                  {project.location} — {project.year}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────── */}
        <footer className="max-w-6xl mx-auto px-8 py-10 border-t border-[#E5DDD0] flex flex-col sm:flex-row justify-between gap-4">
          <span className="font-[family-name:var(--font-sans)] text-sm text-[#B0A090]">
            © {new Date().getFullYear()} Steel & Stone Builders, OPC
          </span>
          <a href="mailto:steelstonebuilders@gmail.com" className="font-[family-name:var(--font-sans)] text-sm text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors">
            steelstonebuilders@gmail.com
          </a>
        </footer>

      </main>
    </>
  );
}