import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Plane } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile sheet whenever the route changes
  useEffect(() => setMobileMenu(false), [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destination", path: "/destination" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const isHome = location.pathname === "/";
  // Solid bar everywhere except the top of the home hero
  const solid = scrolled || !isHome;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        solid ? "glass-nav py-3.5 shadow-lg shadow-ink/20" : "bg-transparent py-5"
      }`}
    >
      <div className="shell flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="group flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber shadow-[0_8px_20px_-6px_rgba(255,122,26,0.7)] transition-transform duration-300 group-hover:-rotate-12">
            <Plane size={22} className="text-white" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-semibold tracking-tight md:text-2xl">
              Prashant Telecom
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan">
              Travel &amp; Tour
            </span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden items-center gap-10 text-sm font-medium text-white/90 lg:flex">
          {navLinks.map((item) => {
            const active = location.pathname === item.path;
            return (
              <li key={item.name} className="group relative">
                <Link
                  to={item.path}
                  className={`transition-colors duration-300 hover:text-cyan ${
                    active ? "text-cyan" : ""
                  }`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-cyan transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link to="/inquiry" className="btn-primary hidden lg:inline-flex">
          Get Travel Quote
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          aria-label="Toggle menu"
          className="text-white lg:hidden"
          onClick={() => setMobileMenu((v) => !v)}
        >
          {mobileMenu ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-ink/95 backdrop-blur-lg lg:hidden"
        >
          <div className="shell flex flex-col gap-1 py-5">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`border-b border-white/10 py-3 text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-cyan"
                    : "text-white hover:text-cyan"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/inquiry" className="btn-primary mt-5 w-full">
              Get Travel Quote
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
