import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">

        {/* ── HEADER ─────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-8 border-t border-gray-200">
          <p className="font-sans text-base text-[#666666] mb-4">
            {projects.length} Projects
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-[#1a1a1a]">
            Our Work
          </h1>
          <p className="font-sans text-xl text-[#333333] max-w-2xl mt-4">
            A portfolio of our architectural and construction projects across Cebu.
          </p>
        </section>

        {/* ── GRID ───────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden bg-gray-100 mb-4"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={project.coverImage}
                    alt={project.coverAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Project Info */}
                <div>
                  <h3 className="font-display text-xl text-[#1a1a1a] mb-2">
                    {project.title}
                  </h3>
                  <p className="font-sans text-base text-[#666666]">
                    {project.location} • {project.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────── */}
        <footer className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <p className="font-display text-xl text-[#1a1a1a] mb-2">
                  Steel & Stone Builders
                </p>
                <p className="font-sans text-base text-[#666666]">
                  © {new Date().getFullYear()} Steel & Stone Builders, OPC
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-center md:text-right">
                <div>
                  <p className="font-sans text-base text-[#666666] mb-1">Location</p>
                  <p className="font-sans text-base text-[#1a1a1a]">Cebu City, Philippines</p>
                </div>
                <div>
                  <p className="font-sans text-base text-[#666666] mb-1">Contact</p>
                  <a href="tel:0324023211" className="font-sans text-base text-[#1a1a1a] hover:text-[#666666] transition-colors">
                    (032) 402-3211
                  </a>
                </div>
                <div>
                  <p className="font-sans text-base text-[#666666] mb-1">Email</p>
                  <a href="mailto:steelstonebuilders@gmail.com" className="font-sans text-base text-[#1a1a1a] hover:text-[#666666] transition-colors">
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