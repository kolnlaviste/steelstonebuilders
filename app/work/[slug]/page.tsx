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
      <main className="pt-16">

        {/* ── HEADER ─────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-8 pt-20 pb-14 border-b border-[#E5DDD0]">
          <Link
            href="/work"
            className="font-[family-name:var(--font-sans)] text-sm text-[#8B7355] hover:text-[#1A1A1A] transition-colors mb-10 inline-block"
          >
            ← Back to Work
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-3">
                {project.title}
              </h1>
              <p className="font-[family-name:var(--font-sans)] text-base text-[#7A7A7A]">
                {project.location} — {project.year}
              </p>
            </div>

            {/* Specs */}
            <div className="flex gap-10 shrink-0">
              <div>
                <p className="font-[family-name:var(--font-sans)] text-xs text-[#B0A090] uppercase tracking-widest mb-2">
                  Type
                </p>
                <p className="font-[family-name:var(--font-sans)] text-sm text-[#1A1A1A]">
                  {project.type}
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-sans)] text-xs text-[#B0A090] uppercase tracking-widest mb-2">
                  Scope
                </p>
                <p className="font-[family-name:var(--font-sans)] text-sm text-[#1A1A1A]">
                  {project.scope}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COVER IMAGE ────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-8 mt-12">
          <div
            className="relative overflow-hidden bg-[#EDE8DF] w-full"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src={project.coverImage}
              alt={project.coverAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        {/* ── DESCRIPTION ────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-8 py-16 border-b border-[#E5DDD0]">
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-sans)] text-xs text-[#8B7355] uppercase tracking-widest mb-6">
              About this Project
            </p>
            <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-[#1A1A1A] leading-relaxed">
              {project.fullDesc}
            </p>
          </div>
        </div>

        {/* ── IMAGE GALLERY ──────────────────────────── */}
        {project.images.length > 0 && (
          <div className="max-w-6xl mx-auto px-8 py-16 space-y-6">
            {project.images.map((img, i) => (
              <div key={i}>
                <div
                  className="relative overflow-hidden bg-[#EDE8DF] w-full"
                  style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1152px"
                  />
                </div>
                {img.caption && (
                  <p className="font-[family-name:var(--font-sans)] text-sm text-[#7A7A7A] mt-3">
                    {img.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── PREV / NEXT ────────────────────────────── */}
        <nav className="max-w-6xl mx-auto px-8 py-14 border-t border-[#E5DDD0] flex justify-between gap-6">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-2">
              <span className="font-[family-name:var(--font-sans)] text-sm text-[#8B7355] group-hover:text-[#1A1A1A] transition-colors">
                ← Previous
              </span>
              <span className="font-[family-name:var(--font-display)] text-xl text-[#1A1A1A]">
                {prev.title}
              </span>
              <span className="font-[family-name:var(--font-sans)] text-sm text-[#7A7A7A]">
                {prev.location}
              </span>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/work/${next.slug}`} className="group flex flex-col gap-2 text-right">
              <span className="font-[family-name:var(--font-sans)] text-sm text-[#8B7355] group-hover:text-[#1A1A1A] transition-colors">
                Next →
              </span>
              <span className="font-[family-name:var(--font-display)] text-xl text-[#1A1A1A]">
                {next.title}
              </span>
              <span className="font-[family-name:var(--font-sans)] text-sm text-[#7A7A7A]">
                {next.location}
              </span>
            </Link>
          ) : <div />}
        </nav>

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

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}