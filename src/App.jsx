import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyButtons from './components/StickyButtons';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Inquiry from './pages/Inquiry';
import BlogSection from './pages/Blogs';
import Destination from './pages/Destination';

// Reset scroll position on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative flex min-h-screen flex-col bg-cream">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/blogs" element={<BlogSection />} />
          </Routes>
        </main>
        <Footer />
        <StickyButtons />
      </div>
    </Router>
  );
}
