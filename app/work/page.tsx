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
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              
              {/* Company Info */}
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">Steel & Stone Builders</h3>
                <p className="font-sans text-gray-300 mb-6">
                  Design and build excellence in Cebu City since 2023.
                </p>
                <div className="mt-6">
                  <p className="font-sans text-gray-300 mb-2">
                    Connect with us for your architectural needs
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-sans text-base font-semibold mb-4 text-gray-200">Quick Links</h4>
                <ul className="space-y-3">
                  <li><Link href="/" className="font-sans text-gray-300 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/work" className="font-sans text-gray-300 hover:text-white transition-colors">Projects</Link></li>
                  <li><Link href="/about" className="font-sans text-gray-300 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="font-sans text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-sans text-base font-semibold mb-4 text-gray-200">Services</h4>
                <ul className="space-y-3">
                  <li className="font-sans text-gray-300">Architectural Design</li>
                  <li className="font-sans text-gray-300">Construction</li>
                  <li className="font-sans text-gray-300">Renovation</li>
                  <li className="font-sans text-gray-300">Consultation</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-sans text-base font-semibold mb-4 text-gray-200">Contact Info</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:steelstonebuilders@gmail.com" className="font-sans text-gray-300 hover:text-white transition-colors">
                      steelstonebuilders@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13 2.257a1 1 0 001.21.502l4.493 1.498a1 1 0 00.684-.949V5a2 2 0 00-2-2h-3.28z" />
                    </svg>
                    <a href="tel:0324023211" className="font-sans text-gray-300 hover:text-white transition-colors">
                      (032) 402-3211
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.415 0l4.244 4.243a1.998 1.998 0 002.827 0l4.244-4.243A8 8 0 0117.657 16.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-sans text-gray-300">
                      No. 3 Greyhound Subdivision<br />
                      Kinasang-an Pardo, Cebu City
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="font-sans text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} Steel & Stone Builders, OPC. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <Link href="/privacy" className="font-sans text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="font-sans text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}