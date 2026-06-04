import React from "react";
import { motion } from "framer-motion";
import Flight from "../assets/flight.jpg";
import TrainImg from "../assets/train.jpg";
import Honey from "../assets/honey.jpg";
import Family from "../assets/family.jpg";
import Business from "../assets/business.jpg";
import Custom from "../assets/custom.jpg";
import { Plane, Train, Heart, Users, Briefcase, Map } from "lucide-react";

export default function Services() {
  const servicesData = [
    {
      title: "Flight Booking",
      image: Flight,
      icon: <Plane size={20} />,
      desc: "Premium domestic & international flight reservations.",
    },
    {
      title: "Train Booking",
      image: TrainImg,
      icon: <Train size={20} />,
      desc: "Hassle-free railway ticket booking assistance.",
    },
    {
      title: "Honeymoon Packages",
      image: Honey,
      icon: <Heart size={20} />,
      desc: "Romantic getaways tailored for couples.",
    },
    {
      title: "Family Vacations",
      image: Family,
      icon: <Users size={20} />,
      desc: "Unforgettable trips for the whole family.",
    },
    {
      title: "Business Travel",
      image: Business,
      icon: <Briefcase size={20} />,
      desc: "Corporate travel arrangements & management.",
    },
    {
      title: "Customized Tours",
      image: Custom,
      icon: <Map size={20} />,
      desc: "Bespoke itineraries designed just for you.",
    },
  ];

  return (
    <section className="luxury-gradient relative py-24 md:py-32">
      <div className="shell relative z-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow eyebrow-dark justify-center"
          >
            What we offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 font-display text-4xl font-semibold text-white md:text-5xl"
          >
            Our premium services
          </motion.h2>
          <p className="mt-4 text-lg text-white/65">
            Comprehensive travel solutions tailored for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((srv, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan/40"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                {/* Icon chip overlapping the image */}
                <span className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-ink/70 text-cyan backdrop-blur-md">
                  {srv.icon}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {srv.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">{srv.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
