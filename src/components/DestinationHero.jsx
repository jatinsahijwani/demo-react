import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import destinationbanner from "../assets/destinationbanner.jpg";

export default function DestinationHero() {
  return (
    <section className="relative flex h-[85vh] min-h-[560px] items-center overflow-hidden">
      <img
        src={destinationbanner}
        alt="Destination banner"
        className="absolute inset-0 h-full w-full scale-105 object-cover animate-pulse-slow"
      />
      <div className="absolute inset-0 hero-scrim" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/30 to-transparent" />

      <div className="shell relative z-10 pt-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow eyebrow-dark"
        >
          Find your next escape
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-white md:text-7xl"
        >
          Explore <span className="text-gradient italic">dream</span>{" "}
          destinations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-lg text-white/80"
        >
          Discover amazing places with Prashant Telecom Travel Services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-9"
        >
          <Link to="/inquiry" className="btn-primary">
            Plan This Trip <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
