/* 
import {
  FaWhatsapp,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      "
    >
      {/* Background Image 
      <div
        className="
        absolute
        inset-0
        bg-cover
        bg-center
        "
        style={{
          backgroundImage:
            "url('/hero.jpg')",
        }}
      />

      {/* Dark Overlay 
      <div
        className="
        absolute
        inset-0
        bg-[#062B3D]/55
        "
      />

      {/* Content 
      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
        w-full
        "
      >
        <div className="max-w-4xl">

          {/* Small Label 
          <div
            className="
            flex
            items-center
            gap-4
            mb-6
            "
          >
            <span className="w-20 h-[2px] bg-[#1687B9]" />

          
          </div>

          {/* Heading 
          <h1
            className="
            text-white
            font-serif
            text-5xl
            md:text-7xl
            lg:text-8xl
            leading-none
            "
          >
            Prashant
            <br />
            Telecom
          </h1>

          {/* Tagline 
          <p
            className="
            mt-8
            text-xl
            md:text-2xl
            text-white/90
            max-w-2xl
            "
          >
            Your Trusted Partner for
            Travel & Tour Planning
          </p>

          {/* Buttons 
          <div
            className="
            flex
            flex-wrap
            gap-4
            mt-12
            "
          >
            {/* Quote 
            <button
              className="
              group
              px-8
              py-4
              bg-[#F59E0B]
              text-black
              font-semibold
              rounded-md
              hover:scale-105
              transition-all
              duration-300
              flex
              items-center
              gap-3
              "
            >
              Get Travel Quote

              <FaArrowRight
                className="
                group-hover:translate-x-1
                transition
                "
              />
            </button>

            {/* WhatsApp 
            <button
              className="
              px-8
              py-4
              bg-[#22C55E]
              text-white
              font-semibold
              rounded-md
              hover:scale-105
              transition-all
              duration-300
              flex
              items-center
              gap-3
              "
            >
              <FaWhatsapp />

              WhatsApp Now
            </button>

            {/* Contact 
            <button
              className="
              px-8
              py-4
              border
              border-white/40
              bg-white/10
              backdrop-blur-sm
              text-white
              rounded-md
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
              flex
              items-center
              gap-3
              "
            >
              <FaPhoneAlt />

              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

*/

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop" 
          alt="Aerial Ocean Travel" 
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#062B3D]/70 via-[#0A4D68]/60 to-[#062B3D]/90" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#18D8FF] text-sm font-semibold tracking-wider uppercase mb-6 inline-block">
            Welcome to Prashant Telecom
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Your Trusted Partner for <br />
          <span className="text-gradient">Travel & Tour Planning</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[#EDF4F7] mb-10 max-w-3xl mx-auto font-light"
        >
          Explore the world's most beautiful destinations with personalized travel solutions, affordable packages, and exceptional support.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/contact" className="px-8 py-4 bg-[#FF7A1A] hover:bg-[#e66a15] text-white rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(255,122,26,0.4)] hover:shadow-[0_0_30px_rgba(255,122,26,0.6)] flex items-center gap-2">
            Contact Us <ChevronRight size={20} />
          </Link>
          <Link to="/inquiry" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
            Get Travel Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}