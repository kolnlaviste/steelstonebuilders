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
      <main className="pt-20">

        {/* ── HEADER ─────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 border-b border-[#dee2e6]">
          <Link
            href="/work"
            className="font-sans text-sm text-[#6c757d] hover:text-[#2c3e50] transition-colors mb-8 inline-block"
          >
            ← Back to Projects
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-light text-[#2c3e50] leading-tight mb-4">
                {project.title}
              </h1>
              <p className="font-sans text-lg text-[#495057]">
                {project.location} • {project.year}
              </p>
            </div>

            {/* Specs */}
            <div className="flex gap-12 shrink-0">
              <div>
                <p className="font-sans text-xs text-[#6c757d] uppercase tracking-wider mb-2">
                  Type
                </p>
                <p className="font-sans text-lg text-[#2c3e50]">
                  {project.type}
                </p>
              </div>
              <div>
                <p className="font-sans text-xs text-[#6c757d] uppercase tracking-wider mb-2">
                  Scope
                </p>
                <p className="font-sans text-lg text-[#2c3e50]">
                  {project.scope}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COVER IMAGE ────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 mt-12">
          <div
            className="relative overflow-hidden bg-[#e9ecef] w-full"
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
        <div className="max-w-7xl mx-auto px-6 py-16 border-b border-[#dee2e6]">
          <div className="max-w-3xl">
            <p className="font-sans text-xs text-[#6c757d] uppercase tracking-wider mb-6">
              About this Project
            </p>
            <p className="font-display text-2xl md:text-3xl font-light text-[#2c3e50] leading-relaxed">
              {project.fullDesc}
            </p>
          </div>
        </div>

        {/* ── IMAGE GALLERY ──────────────────────────── */}
        {project.images.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 py-16 space-y-8">
            {project.images.map((img, i) => (
              <div key={i}>
                <div
                  className="relative overflow-hidden bg-[#e9ecef] w-full"
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
                  <p className="font-sans text-sm text-[#6c757d] mt-4">
                    {img.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── PREV / NEXT ────────────────────────────── */}
        <nav className="max-w-7xl mx-auto px-6 py-14 border-t border-[#dee2e6] flex justify-between gap-6">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-2">
              <span className="font-sans text-sm text-[#6c757d] group-hover:text-[#2c3e50] transition-colors">
                ← Previous
              </span>
              <span className="font-display text-xl font-light text-[#2c3e50]">
                {prev.title}
              </span>
              <span className="font-sans text-sm text-[#495057]">
                {prev.location}
              </span>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/work/${next.slug}`} className="group flex flex-col gap-2 text-right">
              <span className="font-sans text-sm text-[#6c757d] group-hover:text-[#2c3e50] transition-colors">
                Next →
              </span>
              <span className="font-display text-xl font-light text-[#2c3e50]">
                {next.title}
              </span>
              <span className="font-sans text-sm text-[#495057]">
                {next.location}
              </span>
            </Link>
          ) : <div />}
        </nav>

        {/* ── FOOTER ─────────────────────────────────── */}
        <footer className="py-12 border-t border-[#dee2e6]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <p className="font-display text-xl font-light text-[#2c3e50] mb-2">
                  Steel & Stone Builders
                </p>
                <p className="font-sans text-sm text-[#6c757d]">
                  © {new Date().getFullYear()} Steel & Stone Builders, OPC
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-center md:text-right">
                <div>
                  <p className="font-sans text-sm text-[#6c757d] mb-1">Location</p>
                  <p className="font-sans text-[#2c3e50]">Cebu City, Philippines</p>
                </div>
                <div>
                  <p className="font-sans text-sm text-[#6c757d] mb-1">Contact</p>
                  <a href="tel:0324023211" className="font-sans text-[#2c3e50] hover:text-[#6c757d] transition-colors">
                    (032) 402-3211
                  </a>
                </div>
                <div>
                  <p className="font-sans text-sm text-[#6c757d] mb-1">Email</p>
                  <a href="mailto:steelstonebuilders@gmail.com" className="font-sans text-[#2c3e50] hover:text-[#6c757d] transition-colors">
                    steelstonebuilders@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}