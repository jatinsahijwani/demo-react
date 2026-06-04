import { categories } from "../data/categories";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function DestinationCategoriesSlider() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="shell">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">Travel by style</span>
          <h2 className="mt-5 font-display text-4xl font-semibold text-ink md:text-5xl">
            What is your travel style?
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            From island escapes to mountain adventures — pick the journey that
            speaks to you.
          </p>
        </div>

        <div className="no-scrollbar flex gap-6 overflow-x-auto pb-4">
          {categories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative min-w-[300px] cursor-pointer overflow-hidden rounded-[1.75rem] shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

              <span className="absolute right-5 top-5 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight size={18} />
              </span>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="kicker text-cyan">{item.tours} Tours</span>
                <h3 className="mt-1.5 font-display text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
