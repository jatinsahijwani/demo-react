import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#062B3D] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" alt="Map Overlay" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Plan Your Dream Trip</h2>
            <p className="text-[#EDF4F7] mb-12 text-lg">Reach out to Prashant Telecom for customized quotes and bookings.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-[#18D8FF] group-hover:bg-[#18D8FF] group-hover:text-[#062B3D] transition-colors">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call / WhatsApp</p>
                  <p className="text-2xl font-bold">+91 92851 17911</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-[#18D8FF] group-hover:bg-[#18D8FF] group-hover:text-[#062B3D] transition-colors">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Address</p>
                  <p className="text-xl font-bold">praphullrajak1988@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-[#18D8FF] group-hover:bg-[#18D8FF] group-hover:text-[#062B3D] transition-colors shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Office Location</p>
                  <p className="text-lg font-bold">Near Imperilla Hotel, Shastri Bridge, Napier Town, Jabalpur, MP – 482001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form className="glass-card p-8 md:p-10 rounded-2xl flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white mb-2">Request a Free Quote</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:border-[#18D8FF]" />
                <input type="tel" placeholder="Mobile Number" className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:border-[#18D8FF]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Travel Destination" className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:border-[#18D8FF]" />
                <select className="w-full bg-[#0A4D68] border border-white/20 text-white p-4 rounded-lg focus:outline-none focus:border-[#18D8FF] appearance-none">
                  <option value="">Service Required</option>
                  <option value="flight">Flight Booking</option>
                  <option value="tour">Tour Package</option>
                  <option value="hotel">Hotel Booking</option>
                </select>
              </div>
              <textarea placeholder="Additional Requirements" rows="4" className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:border-[#18D8FF]"></textarea>
              <button type="button" className="w-full py-4 bg-[#18D8FF] hover:bg-[#05B7D8] text-[#062B3D] text-lg font-bold rounded-lg transition-colors mt-2 shadow-[0_0_15px_rgba(24,216,255,0.4)]">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}