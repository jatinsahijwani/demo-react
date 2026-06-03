import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Train, Heart, Users, Briefcase, Map } from 'lucide-react';

export default function Services() {
  const servicesData = [
    { title: 'Flight Booking', icon: <Plane />, desc: 'Premium domestic & international flight reservations.' },
    { title: 'Train Booking', icon: <Train />, desc: 'Hassle-free railway ticket booking assistance.' },
    { title: 'Honeymoon Packages', icon: <Heart />, desc: 'Romantic getaways tailored for couples.' },
    { title: 'Family Vacations', icon: <Users />, desc: 'Unforgettable trips for the whole family.' },
    { title: 'Business Travel', icon: <Briefcase />, desc: 'Corporate travel arrangements & management.' },
    { title: 'Customized Tours', icon: <Map />, desc: 'Bespoke itineraries designed just for you.' },
  ];

  return (
    <section className="py-24 luxury-gradient relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Premium Services
          </motion.h2>
          <p className="text-[#EDF4F7] text-lg">Comprehensive travel solutions tailored for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-[#18D8FF] mb-6 group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{srv.title}</h3>
              <p className="text-[#EDF4F7]/80">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}