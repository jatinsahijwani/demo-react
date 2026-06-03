import React from 'react';
import { motion } from 'framer-motion';

export default function Inquiry() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8FBFD]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#062B3D] mb-4">Request a Travel Quote</h1>
          <p className="text-gray-600 text-lg">Fill out the form below and our travel experts will get back to you with the best packages.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <form className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-[#EDF4F7] flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#062B3D]">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-[#F8FBFD] border border-gray-200 text-gray-800 p-4 rounded-lg focus:outline-none focus:border-[#05B7D8]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#062B3D]">Mobile Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full bg-[#F8FBFD] border border-gray-200 text-gray-800 p-4 rounded-lg focus:outline-none focus:border-[#05B7D8]" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#062B3D]">Destination / Location</label>
                <input type="text" placeholder="e.g. Maldives, Kerala, Dubai" className="w-full bg-[#F8FBFD] border border-gray-200 text-gray-800 p-4 rounded-lg focus:outline-none focus:border-[#05B7D8]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#062B3D]">Service Needed</label>
                <select className="w-full bg-[#F8FBFD] border border-gray-200 text-gray-800 p-4 rounded-lg focus:outline-none focus:border-[#05B7D8] appearance-none">
                  <option value="">Select Service</option>
                  <option value="flight">Flight Booking</option>
                  <option value="tour">Tour Package</option>
                  <option value="hotel">Hotel Booking</option>
                  <option value="custom">Custom Itinerary</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#062B3D]">Additional Details & Requirements</label>
              <textarea placeholder="Tell us about dates, number of travelers, budget, etc." rows="5" className="w-full bg-[#F8FBFD] border border-gray-200 text-gray-800 p-4 rounded-lg focus:outline-none focus:border-[#05B7D8]"></textarea>
            </div>

            <button type="button" className="w-full py-4 bg-[#FF7A1A] hover:bg-[#e66a15] text-white text-lg font-bold rounded-lg transition-colors mt-4 shadow-lg hover:shadow-xl">
              Submit My Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}