import React from "react";
import { Link } from "react-router-dom";
import { Plane, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const quickLinks = ["Home", "Destination", "Blogs", "Contact"];
  const services = [
    "Flight Booking",
    "Train Booking",
    "Hotel Reservations",
    "Honeymoon Packages",
    "Corporate Travel",
  ];
  const socialIcons = [FaFacebookF, FaInstagram, FaYoutube];

  return (
    <footer className="relative overflow-hidden bg-ink-deep text-white">
      {/* soft brand glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />

      <div className="shell relative pt-20 pb-10">
        {/* TOP CTA STRIP */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:flex-row md:items-center md:p-10">
          <div>
            <p className="eyebrow eyebrow-dark">Start your journey</p>
            <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Ready to plan your next escape?
            </h3>
          </div>
          <Link to="/inquiry" className="btn-primary shrink-0">
            Get Travel Quote <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* BRAND */}
          <div>
            <Link to="/" className="group mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber transition-transform duration-300 group-hover:-rotate-12">
                <Plane size={22} />
              </span>
              <span className="leading-none">
                <span className="block font-display text-2xl font-semibold">
                  Prashant Telecom
                </span>
                <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan">
                  Travel &amp; Tour
                </span>
              </span>
            </Link>

            <p className="mb-8 max-w-sm leading-relaxed text-white/60">
              Your premium travel partner in Jabalpur, delivering exceptional
              global tours and personalized itineraries managed by Praphull
              Rajak.
            </p>

            <div className="flex gap-3">
              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:bg-cyan hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-6 font-display text-lg font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="group flex items-center gap-3 text-white/60 transition hover:text-cyan"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber transition-transform group-hover:scale-150" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-6 font-display text-lg font-semibold">
              Our Services
            </h4>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="group flex items-center gap-3 text-white/60 transition hover:text-cyan"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan transition-transform group-hover:scale-150" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-6 font-display text-lg font-semibold">
              Contact Info
            </h4>
            <div className="space-y-5 text-white/60">
              <div className="flex gap-3.5">
                <MapPin size={18} className="mt-1 shrink-0 text-cyan" />
                <p className="leading-relaxed">
                  Near Imperilla Hotel, Shastri Bridge, Napier Town, Jabalpur –
                  482001
                </p>
              </div>
              <a
                href="tel:+919285117911"
                className="flex items-center gap-3.5 transition hover:text-cyan"
              >
                <Phone size={18} className="shrink-0 text-cyan" />
                +91 92851 17911
              </a>
              <a
                href="mailto:praphullrajak1988@gmail.com"
                className="flex items-start gap-3.5 break-all transition hover:text-cyan"
              >
                <Mail size={18} className="mt-1 shrink-0 text-cyan" />
                praphullrajak1988@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>© 2026 Prashant Telecom. All Rights Reserved.</p>
          <p>Crafted with care for unforgettable journeys.</p>
        </div>
      </div>
    </footer>
  );
}
