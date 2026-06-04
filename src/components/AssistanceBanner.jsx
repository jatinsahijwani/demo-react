import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";

export default function AssistanceBanner() {
  return (
    <section className="luxury-gradient relative overflow-hidden py-20 md:py-24">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="shell relative z-10">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-white"
          >
            <span className="eyebrow eyebrow-dark">We're here to help</span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Need assistance planning your trip?
            </h2>
            <p className="mt-4 text-lg text-white/65">
              Our travel experts are ready to help you plan your next
              unforgettable journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 sm:flex-row md:flex-col"
          >
            <Link to="/contact" className="btn-cyan">
              Contact Us <ChevronRight size={18} />
            </Link>
            <a href="tel:+919285117911" className="btn-ghost">
              <Phone size={18} /> +91 92851 17911
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
