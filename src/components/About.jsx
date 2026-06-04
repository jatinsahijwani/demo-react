import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    { title: "Trusted Service", value: "10K+ Happy Customers" },
    { title: "Global Reach", value: "50+ Destinations" },
    { title: "Custom Packages", value: "100% Personalized" },
    { title: "Affordability", value: "Best Price Guarantee" },
  ];

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[520px] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(6,43,61,0.45)]">
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury travel"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>

            {/* Floating experience badge */}
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-sand bg-white/95 p-6 shadow-xl backdrop-blur-md md:left-10 md:right-auto md:max-w-xs">
              <h3 className="font-display text-2xl font-semibold text-ink">
                15+ Years of Excellence
              </h3>
              <p className="mt-1 text-sm text-ink/60">
                Creating unforgettable memories since inception.
              </p>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Discover the world with premium comfort
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/65">
              At Prashant Telecom, managed by Praphull Rajak, we believe travel
              should be seamless, luxurious, and accessible. Based in Jabalpur,
              we offer end-to-end travel management designed specifically for
              your comfort and budget.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {highlights.map((it, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group rounded-2xl border border-sand bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-deep/40 hover:shadow-lg"
                >
                  <CheckCircle2
                    className="mb-4 text-cyan-deep transition-transform group-hover:scale-110"
                    size={28}
                  />
                  <h4 className="font-display text-lg font-semibold text-ink">
                    {it.title}
                  </h4>
                  <p className="mt-1 text-sm text-ink/55">{it.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
