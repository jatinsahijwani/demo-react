import React from "react";
import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight, Search } from "lucide-react";

import banner from "../assets/banner.jpg";
import kashmir from "../assets/kashmir.jpg";
import dubai from "../assets/dubai.jpg";
import bali from "../assets/bali.jpg";
import goa from "../assets/goa.jpg";
import ladakh from "../assets/ladakh.jpg";
import rishikesh from "../assets/rishikesh.jpg";

export default function Blogs() {
  const blogs = [
    { id: 1, title: "Top 10 Places To Visit In Kashmir", location: "Kashmir, India", image: kashmir, rating: 4.9 },
    { id: 2, title: "Luxury Weekend In Dubai", location: "Dubai, UAE", image: dubai, rating: 4.8 },
    { id: 3, title: "Exploring Bali On A Budget", location: "Bali, Indonesia", image: bali, rating: 4.7 },
    { id: 4, title: "Best Beaches In Goa", location: "Goa, India", image: goa, rating: 4.8 },
    { id: 5, title: "Adventure Guide To Ladakh", location: "Ladakh, India", image: ladakh, rating: 4.9 },
    { id: 6, title: "Weekend Escape To Rishikesh", location: "Rishikesh, India", image: rishikesh, rating: 4.7 },
  ];

  return (
    <div className="bg-ink">
      {/* HERO */}
      <section className="relative flex h-[75vh] min-h-[560px] items-center justify-center overflow-hidden">
        <img
          src={banner}
          alt="Travel stories"
          className="absolute inset-0 h-full w-full scale-105 object-cover animate-pulse-slow"
        />
        <div className="absolute inset-0 hero-scrim" />

        <div className="shell relative z-10 pt-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow eyebrow-dark justify-center"
          >
            The journal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-white md:text-7xl lg:text-8xl"
          >
            Travel <span className="text-gradient italic">stories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-6 max-w-xl text-lg text-white/80 md:text-xl"
          >
            Discover destinations, guides and unforgettable journeys.
          </motion.p>
        </div>
      </section>

      {/* SEARCH BAR */}
      <div className="shell">
        <div className="relative z-20 -mt-14 rounded-3xl border border-sand bg-white p-5 shadow-[0_30px_60px_-25px_rgba(6,43,61,0.4)] md:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.4fr_1fr_1fr_auto]">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40"
              />
              <input
                placeholder="Destination"
                className="w-full rounded-xl border border-sand bg-cream py-3.5 pl-11 pr-4 text-ink outline-none transition focus:border-cyan-deep"
              />
            </div>
            <select className="rounded-xl border border-sand bg-cream px-4 py-3.5 text-ink outline-none transition focus:border-cyan-deep">
              <option>Travel Guides</option>
            </select>
            <select className="rounded-xl border border-sand bg-cream px-4 py-3.5 text-ink outline-none transition focus:border-cyan-deep">
              <option>Adventure</option>
            </select>
            <button className="btn-primary px-8">Explore</button>
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
      <section className="bg-ink py-24 md:py-28">
        <div className="shell">
          <div className="mb-16 text-center">
            <span className="eyebrow eyebrow-dark justify-center">
              Explore the beautiful
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold text-white md:text-6xl">
              Travel blogs
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, idx) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-ink shadow backdrop-blur-sm">
                    <Star size={14} fill="#FF7A1A" color="#FF7A1A" />
                    {blog.rating}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-ink/50">
                    <MapPin size={15} className="text-cyan-deep" />
                    {blog.location}
                  </div>
                  <h3 className="font-display text-2xl font-semibold leading-snug text-ink">
                    {blog.title}
                  </h3>
                  <button className="group/btn mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-deep transition-colors hover:text-teal">
                    Read More
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
