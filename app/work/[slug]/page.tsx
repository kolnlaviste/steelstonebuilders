import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { getProjectBySlug, getAdjacentProjects, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <Nav />
      <main className="pt-14 max-w-5xl mx-auto px-6">

        {/* ── HEADER ─────────────────────────────────── */}
        <section className="py-12 md:py-16 border-b border-stone-200">
          <Link
            href="/work"
            className="font-mono text-xs text-stone-400 hover:text-[#1C1917] transition-colors mb-8 inline-block"
          >
            ← Work
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-2xl md:text-3xl text-[#1C1917] mb-2">
                {project.title}
              </h1>
              <p className="font-mono text-xs text-stone-400">
                {project.location} — {project.year}
              </p>
            </div>

            <div className="flex gap-8 sm:text-right shrink-0">
              <div>
                <p className="font-mono text-[10px] text-stone-300 uppercase tracking-wider mb-1">
                  Type
                </p>
                <p className="font-mono text-xs text-stone-600">
                  {project.type}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-stone-300 uppercase tracking-wider mb-1">
                  Scope
                </p>
                <p className="font-mono text-xs text-stone-600">
                  {project.scope}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COVER IMAGE ────────────────────────────── */}
        <div
          className="relative overflow-hidden bg-stone-100 mt-8 mb-4 border border-stone-200"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={project.coverImage}
            alt={project.coverAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </div>

        {/* ── DESCRIPTION ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-12 py-12 border-b border-stone-200">
          <p className="font-serif text-base text-stone-600 leading-relaxed">
            {project.fullDesc}
          </p>
          <div />
        </div>

        {/* ── IMAGE GALLERY ──────────────────────────── */}
        {project.images.length > 0 && (
          <section className="py-12 space-y-4">
            {project.images.map((img, i) => (
              <div key={i}>
                <div
                  className="relative overflow-hidden bg-stone-100 border border-stone-200"
                  style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 960px"
                  />
                </div>
                {img.caption && (
                  <p className="font-mono text-xs text-stone-400 mt-2">
                    {img.caption}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* ── PREV / NEXT ────────────────────────────── */}
        <nav className="border-t border-stone-200 py-10 flex justify-between items-center gap-4">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-1">
              <span className="font-mono text-xs text-stone-400 group-hover:text-[#1C1917] transition-colors">
                ← Previous
              </span>
              <span className="font-serif text-sm text-[#1C1917]">
                {prev.title}
              </span>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/work/${next.slug}`} className="group flex flex-col gap-1 text-right">
              <span className="font-mono text-xs text-stone-400 group-hover:text-[#1C1917] transition-colors">
                Next →
              </span>
              <span className="font-serif text-sm text-[#1C1917]">
                {next.title}
              </span>
            </Link>
          ) : <div />}
        </nav>

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

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}