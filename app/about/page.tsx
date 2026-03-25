import Nav from "@/components/Nav";
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
            Building with integrity and commitment since 2008.
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