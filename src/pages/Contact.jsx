import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

export default function Contact() {
  const cards = [
    {
      icon: <Phone size={26} />,
      title: "Call Us",
      detail: "+91 92851 17911",
      action: "tel:+919285117911",
    },
    {
      icon: <Mail size={26} />,
      title: "Email Us",
      detail: "praphullrajak1988@gmail.com",
      action: "mailto:praphullrajak1988@gmail.com",
    },
    {
      icon: <MapPin size={26} />,
      title: "Visit Us",
      detail: "Near Imperilla Hotel, Napier Town, Jabalpur",
      action: "#map",
    },
  ];

  return (
    <div className="bg-cream">
      {/* HEADER BAND */}
      <section className="luxury-gradient relative overflow-hidden pb-20 pt-36 md:pb-24 md:pt-44">
        <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
        <div className="shell relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow eyebrow-dark justify-center"
          >
            We'd love to hear from you
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-display text-5xl font-semibold text-white md:text-6xl"
          >
            Contact us
          </motion.h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            We are here to assist you with all your travel needs.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS — pulled up over the band */}
      <div className="shell relative z-10 -mt-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((item, idx) => (
            <motion.a
              href={item.action}
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col items-center rounded-3xl border border-sand bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-cyan transition-colors duration-300 group-hover:bg-cyan group-hover:text-ink">
                {item.icon}
              </span>
              <h3 className="font-display text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 break-words text-ink/60">{item.detail}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* MAP + DETAILS */}
      <section className="py-24 md:py-28">
        <div className="shell">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="eyebrow">Our office</span>
              <h2 className="mt-5 font-display text-4xl font-semibold text-ink md:text-5xl">
                Plan your journey in person
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/60">
                Drop by our Jabalpur office and our travel experts will help you
                craft the perfect itinerary — from flights and stays to
                handpicked experiences.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sand text-cyan-deep">
                    <MapPin size={22} />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Address</p>
                    <p className="text-ink/60">
                      Near Imperilla Hotel, Shastri Bridge, Napier Town,
                      Jabalpur, MP – 482001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sand text-cyan-deep">
                    <Clock size={22} />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Working Hours</p>
                    <p className="text-ink/60">Mon – Sat, 10:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>

              <Link to="/inquiry" className="btn-primary mt-10">
                Request a Travel Quote <ChevronRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              id="map"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="min-h-[420px] overflow-hidden rounded-3xl border border-sand shadow-lg"
            >
              <iframe
                title="Prashant Telecom location"
                src="https://www.google.com/maps?q=Napier%20Town%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482001&output=embed"
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
