import { tours } from "../data/tours";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock3, ArrowRight } from "lucide-react";

export default function RecommendedTours() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="shell">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Handpicked for you</span>
            <h2 className="mt-5 font-display text-4xl font-semibold text-ink md:text-5xl">
              Recommended tours
            </h2>
          </div>
          <Link
            to="/inquiry"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-deep transition-colors hover:text-teal"
          >
            Enquire about a package
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour, idx) => (
            <motion.article
              key={tour.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-sand bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-sm">
                  Featured
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold tracking-wide text-ink">
                  {tour.title}
                </h3>

                <div className="mt-5 flex items-center justify-between border-t border-sand pt-4">
                  <span className="flex items-center gap-2 text-sm text-ink/55">
                    <Clock3 size={16} className="text-cyan-deep" />
                    {tour.duration}
                  </span>
                  <span className="font-display text-xl font-semibold text-ink">
                    ₹{tour.price}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
