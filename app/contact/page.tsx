import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Steel & Stone Builders, OPC in Cebu City.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-14 max-w-5xl mx-auto px-6">

        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

            {/* Left */}
            <div>
              <p className="font-mono text-xs text-stone-400 mb-8 tracking-wide">Contact</p>
              <h1 className="font-serif text-2xl text-[#1C1917] mb-6 leading-snug">
                Have a project in mind? We'd like to hear about it.
              </h1>
              <p className="font-serif text-sm text-stone-500 leading-relaxed mb-10 max-w-sm">
                Whether you're planning a new home, a renovation, or a commercial fit-out, get in touch. We're happy to discuss your project with no obligation.
              </p>

              <div className="space-y-6">
                {[
                  { label: "Email", value: "steelstonebuilders@gmail.com", href: "mailto:steelstonebuilders@gmail.com" },
                  { label: "Telephone", value: "(032) 402-3211", href: "tel:032402321" },
                  { label: "Mobile", value: "0945 378 4114", href: "tel:+639453784114" },
                  { label: "Address", value: "No. 3 Greyhound Subdivision, Kinasang-an Pardo, Cebu City", href: undefined },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-mono text-[10px] text-stone-300 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="font-mono text-xs text-stone-600 hover:text-[#1C1917] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-mono text-xs text-stone-600 leading-relaxed">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              <form className="space-y-6">
                {[
                  { label: "Name", type: "text", placeholder: "Your name" },
                  { label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="font-mono text-[10px] text-stone-400 uppercase tracking-wider block mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full border border-stone-200 px-4 py-3 text-sm text-[#1C1917]
                        placeholder:text-stone-300 focus:outline-none focus:border-stone-400
                        transition-colors bg-[#FAFAF8] font-serif"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-[10px] text-stone-400 uppercase tracking-wider block mb-2">
                    Project Type
                  </label>
                  <select className="w-full border border-stone-200 px-4 py-3 text-sm text-[#1C1917]
                    focus:outline-none focus:border-stone-400 transition-colors bg-[#FAFAF8] font-mono">
                    <option value="">Select a type...</option>
                    <option>Residential — New Build</option>
                    <option>Residential — Renovation</option>
                    <option>Commercial Fit-Out</option>
                    <option>Structural Works</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[10px] text-stone-400 uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full border border-stone-200 px-4 py-3 text-sm text-[#1C1917]
                      placeholder:text-stone-300 focus:outline-none focus:border-stone-400
                      transition-colors bg-[#FAFAF8] resize-none font-serif"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border border-[#1C1917] py-3 font-mono text-xs text-[#1C1917]
                    hover:bg-[#1C1917] hover:text-[#FAFAF8] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
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