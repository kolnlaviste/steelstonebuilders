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
      <main className="pt-20">

        {/* ── HEADER ─────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 border-t border-gray-200">
          <p className="font-sans text-base text-[#666666] mb-4">
            Contact Us
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-[#1a1a1a] leading-tight max-w-2xl">
            Let's discuss your architectural project.
          </h1>
          <p className="font-sans text-xl text-[#333333] max-w-2xl mt-6">
            Whether you have detailed plans or just an initial concept, we're here to help bring your vision to life.
          </p>
        </section>

        {/* ── CONTENT ────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left */}
            <div>
              <p className="font-sans text-xl text-[#333333] leading-relaxed mb-12 max-w-md">
                We invite you to reach out for a consultation. Our team is ready to discuss your project requirements and explore how we can assist you.
              </p>

              <div className="space-y-8">
                {[
                  { label: "Email", value: "steelstonebuilders@gmail.com", href: "mailto:steelstonebuilders@gmail.com" },
                  { label: "Telephone", value: "(032) 402-3211", href: "tel:0324023211" },
                  { label: "Mobile", value: "0945 378 4114", href: "tel:+639453784114" },
                  { label: "Address", value: "No. 3 Greyhound Subdivision\nKinasang-an Pardo, Cebu City", href: undefined },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-sans text-base text-[#666666] mb-2">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="font-sans text-xl text-[#1a1a1a] hover:text-[#666666] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-sans text-xl text-[#1a1a1a] whitespace-pre-line leading-relaxed">
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
                    <label className="font-sans text-base text-[#666666] block mb-3">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full border-b border-gray-300 pb-3 text-xl text-[#1a1a1a]
                        placeholder:text-[#999999] focus:outline-none focus:border-[#1a1a1a]
                        transition-colors bg-transparent font-sans"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-sans text-base text-[#666666] block mb-3">
                    Project Type
                  </label>
                  <select className="w-full border-b border-gray-300 pb-3 text-xl text-[#1a1a1a]
                    focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent
                    font-sans">
                    <option value="">Select...</option>
                    <option>Residential — New Build</option>
                    <option>Residential — Renovation</option>
                    <option>Commercial Fit-Out</option>
                    <option>Structural Works</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-sans text-base text-[#666666] block mb-3">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full border-b border-gray-300 pb-3 text-xl text-[#1a1a1a]
                      placeholder:text-[#999999] focus:outline-none focus:border-[#1a1a1a]
                      transition-colors bg-transparent resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a1a1a] text-white font-sans text-sm px-8 py-4
                    hover:bg-[#333333] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
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