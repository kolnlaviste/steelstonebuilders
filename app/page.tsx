import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      <Nav />
      <main className="pt-16">

        {/* ── HERO INTRO ─────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-8 pt-20 pb-16 border-b border-[#E5DDD0]">
          <p className="font-[family-name:var(--font-sans)] text-sm text-[#8B7355] tracking-widest uppercase mb-6">
            Cebu City, Philippines
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight max-w-3xl mb-8">
            We build homes and spaces that people are proud of.
          </h1>
          <p className="font-[family-name:var(--font-sans)] text-lg text-[#7A7A7A] max-w-xl leading-relaxed mb-10">
            Steel & Stone Builders is a design and build company based in Cebu. We work closely with our clients from the first sketch to the final handover.
          </p>
          <Link
            href="/work"
            className="inline-block bg-[#1A1A1A] text-[#F9F6F1] font-[family-name:var(--font-sans)] text-sm px-8 py-4 hover:bg-[#8B7355] transition-colors duration-300"
          >
            See Our Work
          </Link>
        </section>

        {/* ── FEATURED PROJECTS ──────────────────────── */}
        <section className="max-w-6xl mx-auto px-8 py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-[#1A1A1A]">
              Recent Projects
            </h2>
            <Link
              href="/work"
              className="font-[family-name:var(--font-sans)] text-sm text-[#8B7355] hover:text-[#1A1A1A] transition-colors"
            >
              View all {projects.length} →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
              >
                {/* Image */}
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

                {/* Info */}
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

        {/* ── WHY US STRIP ───────────────────────────── */}
        <section className="bg-[#1A1A1A] py-20">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-[#F9F6F1] mb-14">
              Why clients choose us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {[
                { title: "Honest Communication", body: "We keep you informed at every stage. No surprises, no hidden costs." },
                { title: "Built to Last", body: "We use quality materials and proven methods. Every structure we build is meant to stand for decades." },
                { title: "Local Experience", body: "We know Cebu — its climate, its regulations, and its communities. That knowledge shapes every project we take on." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#C9B99A] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-sans)] text-sm text-[#9A9A9A] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-8 py-20 border-b border-[#E5DDD0]">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#1A1A1A] max-w-lg leading-tight mb-6">
            Ready to start your project?
          </h2>
          <p className="font-[family-name:var(--font-sans)] text-lg text-[#7A7A7A] max-w-md leading-relaxed mb-8">
            Tell us what you have in mind. We'll get back to you within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-[#1A1A1A] text-[#1A1A1A] font-[family-name:var(--font-sans)] text-sm px-8 py-4 hover:bg-[#1A1A1A] hover:text-[#F9F6F1] transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </section>

        {/* ── FOOTER ─────────────────────────────────── */}
        <footer className="max-w-6xl mx-auto px-8 py-10 flex flex-col sm:flex-row justify-between gap-4">
          <span className="font-[family-name:var(--font-sans)] text-sm text-[#B0A090]">
            © {new Date().getFullYear()} Steel & Stone Builders, OPC
          </span>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a href="tel:032402321" className="font-[family-name:var(--font-sans)] text-sm text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors">
              (032) 402-3211
            </a>
            <a href="mailto:steelstonebuilders@gmail.com" className="font-[family-name:var(--font-sans)] text-sm text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors">
              steelstonebuilders@gmail.com
            </a>
          </div>
        </footer>

      </main>
    </>
  );
}