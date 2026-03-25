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
              Building homes and spaces since 2023.
            </p>
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
                className="inline-block font-sans text-sm text-[#666666] hover:text-gray-900 transition-colors"
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
              className="inline-block mt-8 border border-[#1a1a1a] text-[#1a1a1a] font-sans text-sm px-8 py-3 hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              Contact Us
            </Link>
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