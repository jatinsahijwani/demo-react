import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, Map, Compass, Star, Phone, Mail, MapPin, CheckCircle, 
  Play, ChevronRight, Train, Briefcase, Heart, Users
} from 'lucide-react';

// --- DATA ---
const services = [
  { title: 'Flight Booking', icon: <Plane />, desc: 'Premium domestic & international flight reservations.' },
  { title: 'Train Booking', icon: <Train />, desc: 'Hassle-free railway ticket booking assistance.' },
  { title: 'Honeymoon Packages', icon: <Heart />, desc: 'Romantic getaways tailored for couples.' },
  { title: 'Family Vacations', icon: <Users />, desc: 'Unforgettable trips for the whole family.' },
  { title: 'Business Travel', icon: <Briefcase />, desc: 'Corporate travel arrangements & management.' },
  { title: 'Customized Tours', icon: <Map />, desc: 'Bespoke itineraries designed just for you.' },
];

const testimonials = [
  { name: 'Rahul Sharma', text: 'Prashant Telecom arranged our Maldives trip flawlessly. 5-star service all the way!', rating: 5 },
  { name: 'Priya Patel', text: 'The customized family package to Kerala was affordable yet highly premium. Highly recommended.', rating: 5 },
  { name: 'Amit Singh', text: 'Quick flight and hotel bookings. Praphull is incredibly helpful and professional.', rating: 5 },
];

// --- COMPONENTS ---

const Hero = () => (
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
        <button className="px-8 py-4 bg-[#FF7A1A] hover:bg-[#e66a15] text-white rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(255,122,26,0.4)] hover:shadow-[0_0_30px_rgba(255,122,26,0.6)] flex items-center gap-2">
          Contact Us <ChevronRight size={20} />
        </button>
        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
          Get Travel Quote
        </button>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 bg-[#F8FBFD]" id="about">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl h-150"
        >
          <img 
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Travel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-[#062B3D] mb-2">15+ Years of Excellence</h3>
            <p className="text-gray-600">Creating unforgettable memories since inception.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#062B3D] mb-6">Discover the World with Premium Comfort</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            At Prashant Telecom, managed by Praphull Rajak, we believe travel should be seamless, luxurious, and accessible. Based in Jabalpur, we offer end-to-end travel management designed specifically for your comfort and budget.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Trusted Service', value: '10K+ Happy Customers' },
              { title: 'Global Reach', value: '50+ Destinations' },
              { title: 'Custom Packages', value: '100% Personalized' },
              { title: 'Affordability', value: 'Best Price Guarantee' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-[#EDF4F7] hover:shadow-md transition-shadow">
                <CheckCircle className="text-[#05B7D8] mb-4" size={32} />
                <h4 className="text-xl font-bold text-[#062B3D] mb-2">{item.title}</h4>
                <p className="text-gray-500">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 luxury-gradient relative" id="services">
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
        {services.map((srv, idx) => (
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

const Testimonials = () => (
  <section className="py-24 bg-white" id="testimonials">
    <div className="container mx-auto px-4 max-w-7xl">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#062B3D] mb-16">What Our Travelers Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
            className="p-8 bg-[#F8FBFD] rounded-2xl border border-[#EDF4F7] shadow-lg hover:shadow-xl transition-shadow relative"
          >
            <div className="flex text-[#FF7A1A] mb-6">
              {[...Array(test.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{test.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#05B7D8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                {test.name.charAt(0)}
              </div>
              <h4 className="font-bold text-[#062B3D]">{test.name}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Inquiry = () => (
  <section className="py-24 bg-[#062B3D] relative overflow-hidden" id="contact">
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

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Inquiry />
    </div>
  );
}