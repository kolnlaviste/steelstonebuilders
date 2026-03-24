import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.slice(0, 6);

  return (
    <>
      <Nav />
      <main className="pt-20">

        {/* ── HERO SECTION ─────────────────────────────── */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-6xl md:text-8xl text-[#1a1a1a] leading-tight mb-6">
              Steel & Stone Builders
            </h1>
            <p className="font-sans text-xl text-[#333333] max-w-2xl mx-auto leading-relaxed mb-12">
              Architecture and construction in Cebu City, Philippines. 
              Building homes and spaces since 2008.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/work"
                className="inline-block border border-[#1a1a1a] text-[#1a1a1a] font-sans text-sm px-8 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-block font-sans text-sm text-[#666666] px-8 py-3 hover:text-[#1a1a1a] transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ──────────────────────── */}
        <section className="py-20 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl text-[#1a1a1a] mb-12 text-center">
              Our Work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((project) => (
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
                    <p className="font-sans text-sm text-[#666666]">
                      {project.location} • {project.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/work"
                className="inline-block font-sans text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors"
              >
                View All Projects →
              </Link>
            </div>
          </div>
        </section>

        {/* ── ABOUT SECTION ───────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-[#1a1a1a] mb-8">
              About Us
            </h2>
            <div className="space-y-6 text-[#333333] leading-relaxed max-w-3xl mx-auto">
              <p className="font-sans text-lg">
                Steel & Stone Builders is a design and build company based in Cebu City. 
                We create homes and commercial spaces with honesty and full commitment to our clients.
              </p>
              <p className="font-sans text-lg">
                With over 15 years of experience, we work closely with our clients from 
                the first sketch to the final handover, ensuring quality and satisfaction.
              </p>
            </div>
            <div className="mt-12 flex justify-center gap-12">
              <div className="text-center">
                <div className="font-display text-3xl text-[#1a1a1a] mb-2">50+</div>
                <div className="font-sans text-sm text-[#666666]">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-[#1a1a1a] mb-2">15+</div>
                <div className="font-sans text-sm text-[#666666]">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-[#1a1a1a] mb-2">100%</div>
                <div className="font-sans text-sm text-[#666666]">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT SECTION ──────────────────────────── */}
        <section className="py-20 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-[#1a1a1a] mb-6">
              Get in Touch
            </h2>
            <p className="font-sans text-lg text-[#333333] mb-8">
              Ready to start your next project? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:0324023211"
                className="font-sans text-[#1a1a1a] hover:text-[#666666] transition-colors"
              >
                (032) 402-3211
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="mailto:steelstonebuilders@gmail.com"
                className="font-sans text-[#1a1a1a] hover:text-[#666666] transition-colors"
              >
                steelstonebuilders@gmail.com
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-8 border border-[#1a1a1a] text-[#1a1a1a] font-sans text-sm px-8 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
            >
              Contact Us
            </Link>
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
                <p className="font-sans text-sm text-[#666666]">
                  © {new Date().getFullYear()} Steel & Stone Builders, OPC
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-center md:text-right">
                <div>
                  <p className="font-sans text-sm text-[#666666] mb-1">Location</p>
                  <p className="font-sans text-sm text-[#1a1a1a]">Cebu City, Philippines</p>
                </div>
                <div>
                  <p className="font-sans text-sm text-[#666666] mb-1">Contact</p>
                  <a href="tel:0324023211" className="font-sans text-sm text-[#1a1a1a] hover:text-[#666666] transition-colors">
                    (032) 402-3211
                  </a>
                </div>
                <div>
                  <p className="font-sans text-sm text-[#666666] mb-1">Email</p>
                  <a href="mailto:steelstonebuilders@gmail.com" className="font-sans text-sm text-[#1a1a1a] hover:text-[#666666] transition-colors">
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