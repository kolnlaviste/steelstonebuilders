import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Steel & Stone Builders in Cebu City.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">

        {/* ── HEADER ─────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-8 pt-20 pb-14 border-b border-[#E5DDD0]">
          <p className="font-[family-name:var(--font-sans)] text-sm text-[#8B7355] tracking-widest uppercase mb-4">
            Contact Us
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#1A1A1A] leading-tight max-w-xl">
            Let's talk about your project.
          </h1>
        </section>

        {/* ── CONTENT ────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Left */}
            <div>
              <p className="font-[family-name:var(--font-sans)] text-base text-[#5A5A5A] leading-relaxed mb-12 max-w-sm">
                Whether you have a clear brief or just an early idea, we're happy to have a conversation. No pressure, no obligation.
              </p>

              <div className="space-y-8">
                {[
                  { label: "Email", value: "steelstonebuilders@gmail.com", href: "mailto:steelstonebuilders@gmail.com" },
                  { label: "Telephone", value: "(032) 402-3211", href: "tel:0324023211" },
                  { label: "Mobile", value: "0945 378 4114", href: "tel:+639453784114" },
                  { label: "Address", value: "No. 3 Greyhound Subdivision\nKinasang-an Pardo, Cebu City", href: undefined },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-[family-name:var(--font-sans)] text-xs text-[#B0A090] uppercase tracking-widest mb-2">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="font-[family-name:var(--font-sans)] text-base text-[#1A1A1A] hover:text-[#8B7355] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-[family-name:var(--font-sans)] text-base text-[#1A1A1A] whitespace-pre-line leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              <form className="space-y-8">
                {[
                  { label: "Your Name", type: "text", placeholder: "Juan dela Cruz" },
                  { label: "Email Address", type: "email", placeholder: "juan@email.com" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="font-[family-name:var(--font-sans)] text-xs text-[#B0A090] uppercase tracking-widest block mb-3">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full border-b border-[#C9B99A] pb-3 text-base text-[#1A1A1A]
                        placeholder:text-[#C9B99A] focus:outline-none focus:border-[#1A1A1A]
                        transition-colors bg-transparent font-[family-name:var(--font-sans)]"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-[family-name:var(--font-sans)] text-xs text-[#B0A090] uppercase tracking-widest block mb-3">
                    Project Type
                  </label>
                  <select className="w-full border-b border-[#C9B99A] pb-3 text-base text-[#1A1A1A]
                    focus:outline-none focus:border-[#1A1A1A] transition-colors bg-transparent
                    font-[family-name:var(--font-sans)]">
                    <option value="">Select...</option>
                    <option>Residential — New Build</option>
                    <option>Residential — Renovation</option>
                    <option>Commercial Fit-Out</option>
                    <option>Structural Works</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-[family-name:var(--font-sans)] text-xs text-[#B0A090] uppercase tracking-widest block mb-3">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full border-b border-[#C9B99A] pb-3 text-base text-[#1A1A1A]
                      placeholder:text-[#C9B99A] focus:outline-none focus:border-[#1A1A1A]
                      transition-colors bg-transparent resize-none font-[family-name:var(--font-sans)]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A1A1A] text-[#F9F6F1] font-[family-name:var(--font-sans)] text-sm py-4
                    hover:bg-[#8B7355] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
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