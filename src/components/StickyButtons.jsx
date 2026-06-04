import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function StickyButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5">
      <a
        href="tel:+919285117911"
        aria-label="Call us"
        className="group flex h-13 w-13 items-center justify-center rounded-full border border-white/15 bg-ink text-white shadow-[0_12px_30px_-8px_rgba(6,43,61,0.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-teal"
        style={{ width: "3.25rem", height: "3.25rem" }}
      >
        <Phone size={22} className="transition-transform group-hover:rotate-12" />
      </a>
      <a
        href="https://wa.me/919285117911"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.8)] transition-all duration-300 hover:-translate-y-1"
        style={{ width: "3.25rem", height: "3.25rem" }}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60" />
        <FaWhatsapp size={24} className="relative z-10" />
      </a>
    </div>
  );
}
