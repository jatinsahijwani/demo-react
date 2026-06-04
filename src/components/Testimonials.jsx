import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonialsData = [
    {
      name: "Rahul Sharma",
      role: "Maldives Getaway",
      text: "Prashant Telecom arranged our Maldives trip flawlessly. 5-star service all the way!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Kerala Family Tour",
      text: "The customized family package to Kerala was affordable yet highly premium. Highly recommended.",
      rating: 5,
    },
    {
      name: "Amit Singh",
      role: "Flights & Hotels",
      text: "Quick flight and hotel bookings. Praphull is incredibly helpful and professional.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="shell">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="eyebrow justify-center">Loved by travellers</span>
          <h2 className="mt-5 font-display text-4xl font-semibold text-ink md:text-5xl">
            What our travellers say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {testimonialsData.map((test, idx) => (
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative flex flex-col rounded-3xl border border-sand bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Quote
                size={44}
                className="absolute right-7 top-7 text-cyan-deep/15"
                fill="currentColor"
              />
              <div className="mb-5 flex gap-1 text-amber">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <blockquote className="flex-grow font-display text-lg italic leading-relaxed text-ink/80">
                "{test.text}"
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-sand pt-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-deep to-teal text-lg font-bold text-white">
                  {test.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-ink">
                    {test.name}
                  </span>
                  <span className="block text-sm text-ink/50">{test.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
