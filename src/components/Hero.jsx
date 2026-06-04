import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, MapPin } from "lucide-react";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "50+", label: "Destinations" },
  { value: "10K+", label: "Happy Travellers" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop"
          alt="Aerial coastline"
          className="h-full w-full scale-105 object-cover animate-pulse-slow"
        />
        <div className="absolute inset-0 hero-scrim" />
        {/* subtle left-to-right darkening for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="shell relative z-10 pt-28"
      >
        <div className="max-w-3xl">
          <motion.span variants={item} className="eyebrow eyebrow-dark">
            Welcome to Prashant Telecom
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-white md:text-7xl"
          >
            Your trusted partner for{" "}
            <span className="text-gradient italic">travel &amp; tour</span>{" "}
            planning
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/80"
          >
            Explore the world's most beautiful destinations with personalized
            travel solutions, affordable packages, and exceptional support.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link to="/contact" className="btn-primary">
              Contact Us <ChevronRight size={18} />
            </Link>
            <Link to="/inquiry" className="btn-ghost">
              Get Travel Quote
            </Link>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/15 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold text-white md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating location chip — adds depth */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-12 right-10 z-10 hidden items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md xl:flex animate-float-soft"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan text-ink">
          <MapPin size={18} />
        </span>
        <div className="text-white">
          <p className="text-xs text-white/60">Based in</p>
          <p className="font-semibold">Jabalpur, India</p>
        </div>
      </motion.div>
    </section>
  );
}
