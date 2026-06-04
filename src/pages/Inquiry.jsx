import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Sparkles } from "lucide-react";

export default function Inquiry() {
  const fieldBase =
    "w-full rounded-xl border border-sand bg-cream p-4 text-ink placeholder-ink/35 outline-none transition focus:border-cyan-deep focus:ring-1 focus:ring-cyan-deep/30";

  const perks = [
    { icon: <Clock size={18} />, text: "Reply within 24 hours" },
    { icon: <ShieldCheck size={18} />, text: "No hidden charges" },
    { icon: <Sparkles size={18} />, text: "100% tailored to you" },
  ];

  return (
    <div className="bg-cream">
      {/* HEADER BAND */}
      <section className="luxury-gradient relative overflow-hidden pb-28 pt-36 md:pb-32 md:pt-44">
        <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
        <div className="shell relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow eyebrow-dark justify-center"
          >
            Tell us your dream trip
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-display text-5xl font-semibold text-white md:text-6xl"
          >
            Request a travel quote
          </motion.h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
            Fill out the form below and our travel experts will get back to you
            with the best packages.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {perks.map((p) => (
              <span
                key={p.text}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
              >
                <span className="text-cyan">{p.icon}</span>
                {p.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FORM CARD — pulled up over the band */}
      <div className="shell relative z-10 -mt-20 pb-24 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <form className="flex flex-col gap-6 rounded-[2rem] border border-sand bg-white p-8 shadow-[0_40px_80px_-30px_rgba(6,43,61,0.35)] md:p-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-ink">Full Name</label>
                <input type="text" placeholder="John Doe" className={fieldBase} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-ink">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className={fieldBase}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-ink">
                  Destination / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maldives, Kerala, Dubai"
                  className={fieldBase}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-ink">
                  Service Needed
                </label>
                <select className={`${fieldBase} appearance-none`} defaultValue="">
                  <option value="">Select Service</option>
                  <option value="flight">Flight Booking</option>
                  <option value="tour">Tour Package</option>
                  <option value="hotel">Hotel Booking</option>
                  <option value="custom">Custom Itinerary</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-ink">
                Additional Details &amp; Requirements
              </label>
              <textarea
                placeholder="Tell us about dates, number of travelers, budget, etc."
                rows="5"
                className={fieldBase}
              ></textarea>
            </div>

            <button type="button" className="btn-primary mt-2 w-full">
              Submit My Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
