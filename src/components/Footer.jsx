/* // components/Footer.jsx
import React from 'react';
import { Plane, Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#041d29] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand 
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FF7A1A] rounded-full flex items-center justify-center">
                <Plane size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold">Prashant Telecom</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your premium travel partner in Jabalpur, delivering exceptional global tours and personalized itineraries managed by Praphull Rajak.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#18D8FF] hover:text-[#062B3D] transition-colors cursor-pointer">
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links 
          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b border-[#05B7D8] pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {['About Us', 'Our Services', 'Travel Packages', 'Customer Reviews', 'Contact Us'].map(link => (
                <li key={link} className="hover:text-[#18D8FF] transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span> {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Services 
          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b border-[#05B7D8] pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              {['Flight Booking', 'Train Booking', 'Hotel Reservations', 'Honeymoon Packages', 'Corporate Travel'].map(link => (
                <li key={link} className="hover:text-[#18D8FF] transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#18D8FF]"></span> {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact 
          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b border-[#05B7D8] pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#18D8FF] shrink-0 mt-1" size={20} />
                <span>Near Imperilla Hotel, Shastri Bridge, Napier Town, Jabalpur – 482001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#18D8FF] shrink-0" size={20} />
                <span>+91 92851 17911</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#18D8FF] shrink-0" size={20} />
                <span>praphullrajak1988@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2026 Prashant Telecom. All Rights Reserved. Designed with Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
  */

import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Facebook = FaFacebookF;
const Instagram = FaInstagram;
const Youtube = FaYoutube;

export default function Footer() {
  return (
    <footer className="bg-[#041d29] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FF7A1A] rounded-full flex items-center justify-center">
                <Plane size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold">Prashant Telecom</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your premium travel partner in Jabalpur, delivering exceptional global tours and personalized itineraries managed by Praphull Rajak.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#18D8FF] hover:text-[#062B3D] transition-colors cursor-pointer">
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b border-[#05B7D8] pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {['Home', 'Inquiry', 'Contact'].map(link => (
                <li key={link} className="hover:text-[#18D8FF] transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span> 
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b border-[#05B7D8] pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              {['Flight Booking', 'Train Booking', 'Hotel Reservations', 'Honeymoon Packages', 'Corporate Travel'].map(link => (
                <li key={link} className="hover:text-[#18D8FF] transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#18D8FF]"></span> {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b border-[#05B7D8] pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#18D8FF] shrink-0 mt-1" size={20} />
                <span>Near Imperilla Hotel, Shastri Bridge, Napier Town, Jabalpur – 482001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#18D8FF] shrink-0" size={20} />
                <span>+91 92851 17911</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#18D8FF] shrink-0" size={20} />
                <span>praphullrajak1988@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2026 Prashant Telecom. All Rights Reserved. Designed with Excellence.</p>
        </div>
      </div>
    </footer>
  );
}