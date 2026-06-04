import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const inputClass =
    "w-full rounded-xl border border-white/15 bg-white/5 p-4 text-white placeholder-white/40 transition-colors focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/40";

  const contactItems = [
    {
      icon: <Phone size={24} />,
      label: "Call / WhatsApp",
      value: "+91 92851 17911",
    },
    {
      icon: <Mail size={24} />,
      label: "Email Address",
      value: "praphullrajak1988@gmail.com",
    },
    {
      icon: <MapPin size={24} />,
      label: "Office Location",
      value:
        "Near Imperilla Hotel, Shastri Bridge, Napier Town, Jabalpur, MP – 482001",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink to-transparent" />
      </div>

      <div className="shell relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <span className="eyebrow eyebrow-dark">Get in touch</span>
            <h2 className="mt-5 font-display text-4xl font-semibold md:text-5xl">
              Let's plan your dream trip
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/65">
              Reach out to Prashant Telecom for customized quotes and bookings.
            </p>

            <div className="mt-12 space-y-5">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-cyan/30"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan transition-colors group-hover:bg-cyan group-hover:text-ink">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm text-white/50">{item.label}</p>
                    <p className="font-semibold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glass-card flex flex-col gap-5 rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold text-white">
                Request a free quote
              </h3>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input type="text" placeholder="Full Name" className={inputClass} />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Travel Destination"
                  className={inputClass}
                />
                <select
                  className={`${inputClass} appearance-none bg-teal`}
                  defaultValue=""
                >
                  <option value="">Service Required</option>
                  <option value="flight">Flight Booking</option>
                  <option value="tour">Tour Package</option>
                  <option value="hotel">Hotel Booking</option>
                </select>
              </div>
              <textarea
                placeholder="Additional Requirements"
                rows="4"
                className={inputClass}
              ></textarea>
              <button type="button" className="btn-cyan mt-1 w-full">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
