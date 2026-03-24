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
      <main className="pt-16">

        {/* ── HEADER ─────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-8 pt-20 pb-14 border-b border-[#E5DDD0]">
          <p className="font-[family-name:var(--font-sans)] text-sm text-[#8B7355] tracking-widest uppercase mb-4">
            About Us
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#1A1A1A] leading-tight max-w-2xl">
            Building with honesty, integrity, and full commitment.
          </h1>
        </section>

        {/* ── MAIN CONTENT ───────────────────────────── */}
        <section className="max-w-6xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Photo */}
            <div
              className="relative bg-[#EDE8DF] overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[family-name:var(--font-sans)] text-sm text-[#B0A090]">
                  Photo — Paulo P. Llaguno
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#1A1A1A] mb-8 leading-snug">
                Steel & Stone Builders, OPC
              </h2>

              <div className="space-y-5 mb-12">
                <p className="font-[family-name:var(--font-sans)] text-base text-[#5A5A5A] leading-relaxed">
                  We are a One-Person Corporation based in Kinasang-an Pardo, Cebu City. We design and build residential homes, commercial fit-outs, and institutional structures across Cebu.
                </p>
                <p className="font-[family-name:var(--font-sans)] text-base text-[#5A5A5A] leading-relaxed">
                  Our goal is straightforward — help our clients build something they're proud of. We stay involved from the first conversation through to the final handover, so you always know where your project stands.
                </p>
                <p className="font-[family-name:var(--font-sans)] text-base text-[#5A5A5A] leading-relaxed">
                  We also believe in building responsibly — using methods and materials that are good for our clients, and for the environment around us.
                </p>
              </div>

              {/* Facts */}
              <div className="grid grid-cols-2 gap-8 border-t border-[#E5DDD0] pt-10 mb-12">
                {[
                  { label: "Incorporated", value: "2023" },
                  { label: "Based In", value: "Cebu City" },
                  { label: "Services", value: "Design & Build" },
                  { label: "Projects Completed", value: "15+" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-[family-name:var(--font-sans)] text-xs text-[#B0A090] uppercase tracking-widest mb-2">
                      {item.label}
                    </p>
                    <p className="font-[family-name:var(--font-display)] text-lg text-[#1A1A1A]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Core values */}
              <div className="border-t border-[#E5DDD0] pt-10">
                <p className="font-[family-name:var(--font-sans)] text-xs text-[#B0A090] uppercase tracking-widest mb-8">
                  Our Core Values
                </p>
                <div className="space-y-6">
                  {[
                    { value: "Safety", desc: "Safety is always our first concern on every site." },
                    { value: "Integrity", desc: "Committed to the highest standards, earned through results." },
                    { value: "Attitude", desc: "Willingness to go the extra mile for every client." },
                    { value: "Quality", desc: "The best outcomes come from teamwork and clear communication." },
                  ].map((v) => (
                    <div key={v.value} className="flex gap-6">
                      <span className="font-[family-name:var(--font-display)] text-base text-[#8B7355] w-24 shrink-0 pt-0.5">
                        {v.value}
                      </span>
                      <span className="font-[family-name:var(--font-sans)] text-sm text-[#7A7A7A] leading-relaxed">
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