import Nav from "@/components/Nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Steel & Stone Builders, OPC — design and build company based in Cebu City.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">

        {/* ── HEADER ─────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-8 border-t border-gray-200">
          <p className="font-sans text-base text-[#666666] mb-4">
            About Us
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-[#1a1a1a] leading-tight max-w-3xl">
            Building with integrity and commitment since 2023.
          </h1>
          <p className="font-sans text-xl text-[#333333] max-w-2xl mt-6">
            A Cebu-based architectural practice combining thoughtful design with precise construction.
          </p>
        </section>

        {/* ── MAIN CONTENT ───────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Photo */}
            <div
              className="relative bg-gray-100 overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/4" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-sans text-base text-[#666666]">
                  Principal Architect — Paulo P. Llaguno
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-3xl text-[#1a1a1a] mb-8 leading-snug">
                Steel & Stone Builders, OPC
              </h2>

              <div className="space-y-6 mb-12">
                <p className="font-sans text-xl text-[#333333] leading-relaxed">
                  We are an established architectural practice based in Kinasang-an Pardo, Cebu City. We design and build residential homes, commercial fit-outs, and institutional structures across Cebu province.
                </p>
                <p className="font-sans text-xl text-[#333333] leading-relaxed">
                  Our philosophy is straightforward — help our clients build spaces they're proud of. We maintain complete involvement from initial consultation through final handover, ensuring transparency and quality at every stage.
                </p>
                <p className="font-sans text-xl text-[#333333] leading-relaxed">
                  We are committed to responsible building practices — using methods and materials that serve our clients' needs while respecting our environment and community.
                </p>
              </div>

              {/* Facts */}
              <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 mb-12">
                {[
                  { label: "Established", value: "2023" },
                  { label: "Based In", value: "Cebu City" },
                  { label: "Services", value: "Design & Build" },
                  { label: "Projects", value: "50+ Completed" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-sans text-base text-[#666666] mb-2">
                      {item.label}
                    </p>
                    <p className="font-display text-2xl text-[#1a1a1a]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Core values */}
              <div className="border-t border-gray-200 pt-10">
                <p className="font-sans text-base text-[#666666] mb-8">
                  Core Values
                </p>
                <div className="space-y-6">
                  {[
                    { value: "Safety", desc: "Safety remains our first priority on every project site." },
                    { value: "Integrity", desc: "Committed to the highest professional standards through proven results." },
                    { value: "Dedication", desc: "Willingness to exceed expectations for every client." },
                    { value: "Quality", desc: "Excellence achieved through teamwork and clear communication." },
                  ].map((v) => (
                    <div key={v.value} className="flex gap-6">
                      <span className="font-display text-xl text-[#1a1a1a] w-28 shrink-0 pt-0.5">
                        {v.value}
                      </span>
                      <span className="font-sans text-base text-[#333333] leading-relaxed">
                        {v.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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