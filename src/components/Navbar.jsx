// components/Navbar.jsx
/*
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Plane } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
        
            // Logo 
        <div className="flex items-center gap-2 text-white cursor-pointer group">
          <div className="w-10 h-10 bg-[#FF7A1A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plane size={24} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold leading-none tracking-wide">Prashant Telecom</span>
            <span className="text-xs text-[#18D8FF] tracking-widest uppercase">Travel & Tour</span>
          </div>
        </div>

           // Desktop Links 
        <ul className="hidden lg:flex items-center gap-8 text-white font-medium">
          {['Home', 'About', 'Services', 'Testimonials', 'Gallery', 'Contact'].map((item) => (
            <li key={item} className="relative group cursor-pointer hover:text-[#18D8FF] transition-colors">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#18D8FF] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

         // CTA 
        <button className="hidden lg:block px-6 py-2.5 bg-[#FF7A1A] hover:bg-[#e66a15] text-white rounded-full font-semibold transition-all duration-300 shadow-[0_4px_14px_rgba(255,122,26,0.4)] hover:-translate-y-1">
          Get Travel Quote
        </button>

         // Mobile Toggle 
        <button className="lg:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

        // Mobile Menu 
      {mobileMenu && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#062B3D] border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {['Home', 'About', 'Services', 'Testimonials', 'Gallery', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white text-lg font-medium border-b border-white/10 pb-2">
              {item}
            </a>
          ))}
          <button className="mt-4 px-6 py-3 bg-[#FF7A1A] text-white rounded-lg font-bold">
            Get Travel Quote
          </button>
        </div>
      )}
    </motion.nav>
  );
}
  */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Plane } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Inquiry', path: '/inquiry' },
    { name: 'Contact', path: '/contact' }
  ];

  // Only the Home page has a dark hero behind the navbar, so a transparent
  // bar is only safe there. Every other route has a light background and
  // needs a solid/frosted bar so the white text stays visible.
  const isHome = location.pathname === '/';

  return (
    <motion.nav
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'glass-nav py-3 shadow-lg' : 'bg-[#062B3D] lg:bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white cursor-pointer group">
          <div className="w-10 h-10 bg-[#FF7A1A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plane size={24} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold leading-none tracking-wide">Prashant Telecom</span>
            <span className="text-xs text-[#18D8FF] tracking-widest uppercase">Travel & Tour</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 text-white font-medium">
          {navLinks.map((item) => (
            <li key={item.name} className="relative group cursor-pointer hover:text-[#18D8FF] transition-colors">
              <Link to={item.path}>{item.name}</Link>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#18D8FF] transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/inquiry" className="hidden lg:block px-6 py-2.5 bg-[#FF7A1A] hover:bg-[#e66a15] text-white rounded-full font-semibold transition-all duration-300 shadow-[0_4px_14px_rgba(255,122,26,0.4)] hover:-translate-y-1">
          Get Travel Quote
        </Link>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#062B3D] border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setMobileMenu(false)}
              className="text-white text-lg font-medium border-b border-white/10 pb-2"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/inquiry" onClick={() => setMobileMenu(false)} className="mt-4 text-center px-6 py-3 bg-[#FF7A1A] text-white rounded-lg font-bold">
            Get Travel Quote
          </Link>
        </div>
      )}
    </motion.nav>
  );
}