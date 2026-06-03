/* import { useState } from 'react'
//import Header from './components/header'
import Navbar from './components/navbar'
import Hero from './components/Hero'
//import Footer from './components/footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Hero />
    </>
  )
}

export default App */



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyButtons from './components/StickyButtons';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Inquiry from './pages/Inquiry';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inquiry" element={<Inquiry />} />
          </Routes>
        </main>
        <Footer />
        <StickyButtons />
      </div>
    </Router>
  );
}