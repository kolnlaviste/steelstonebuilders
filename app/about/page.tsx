import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Steel & Stone Builders, OPC — a design and build company based in Cebu City, Philippines.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-14 max-w-5xl mx-auto px-6">

        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

            {/* Photo */}
            <div className="relative bg-stone-100 border border-stone-200 overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-xs text-stone-300">Photo — Paulo P. Llaguno</span>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <p className="font-mono text-xs text-stone-400 mb-8 tracking-wide">
                About the Company
              </p>

              <h1 className="font-serif text-2xl text-[#1C1917] mb-6 leading-snug">
                Steel & Stone Builders, OPC
              </h1>

              <div className="space-y-4 text-sm text-stone-600 leading-relaxed mb-10 font-serif">
                <p>
                  Steel & Stone Builders is a One-Person Corporation based in Kinasang-an Pardo, Cebu City, engaged in design and construction. Our primary goal is to help clients transform their vision into reality — delivered with care, honesty, and full commitment.
                </p>
                <p>
                  We work across residential, commercial, and institutional projects throughout Cebu. Whether it's a family home, an apartment building, a retail fit-out, or structural works, every project receives the same attention and standards.
                </p>
                <p>
                  We believe in green building principles — designing and building structures that are responsible to both the client and the environment.
                </p>
              </div>

              {/* Facts */}
              <div className="grid grid-cols-2 gap-6 border-t border-stone-200 pt-8">
                {[
                  { label: "Founded", value: "2023" },
                  { label: "Location", value: "Cebu City" },
                  { label: "Typology", value: "Design & Build" },
                  { label: "Projects", value: "15+" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-mono text-[10px] text-stone-300 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="font-mono text-xs text-stone-700">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Core values */}
              <div className="mt-10 border-t border-stone-200 pt-8">
                <p className="font-mono text-[10px] text-stone-300 uppercase tracking-wider mb-6">
                  Core Values
                </p>
                <div className="space-y-4">
                  {[
                    { value: "Safety", desc: "Safety is always our first concern on every site." },
                    { value: "Integrity", desc: "Committed to the highest ethical standards, earned through results." },
                    { value: "Attitude", desc: "Willingness to go the extra mile for every client." },
                    { value: "Quality", desc: "The best outcomes come from teamwork and clear communication." },
                  ].map((v) => (
                    <div key={v.value} className="flex gap-4">
                      <span className="font-serif text-sm text-[#1C1917] w-20 shrink-0">{v.value}</span>
                      <span className="font-mono text-xs text-stone-400 leading-relaxed">{v.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        <footer className="border-t border-stone-200 py-8 flex flex-col sm:flex-row justify-between gap-3">
          <span className="font-mono text-xs text-stone-300">
            © {new Date().getFullYear()} Steel & Stone Builders, OPC
          </span>
          <a href="mailto:steelstonebuilders@gmail.com" className="font-mono text-xs text-stone-400 hover:text-[#1C1917] transition-colors">
            steelstonebuilders@gmail.com
          </a>
        </footer>

      </main>
    </>
  );
}