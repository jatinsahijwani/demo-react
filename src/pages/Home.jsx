import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <ContactSection />
    </div>
  );
}