import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8FBFD]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#062B3D] mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">We are here to assist you with all your travel needs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Phone size={32} />, title: 'Call Us', detail: '+91 92851 17911', action: 'tel:+919285117911' },
            { icon: <Mail size={32} />, title: 'Email Us', detail: 'praphullrajak1988@gmail.com', action: 'mailto:praphullrajak1988@gmail.com' },
            { icon: <MapPin size={32} />, title: 'Visit Us', detail: 'Near Imperilla Hotel, Napier Town, Jabalpur', action: '#' }
          ].map((item, idx) => (
            <motion.a 
              href={item.action}
              key={idx}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#EDF4F7] flex flex-col items-center text-center hover:-translate-y-2 transition-transform"
            >
              <div className="w-16 h-16 bg-[#062B3D] text-[#18D8FF] rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#062B3D] mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.detail}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}