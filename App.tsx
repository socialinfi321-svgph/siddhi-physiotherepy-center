/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import About from './components/About';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ChevronUp } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <main>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Process />
                <Expertise />
                <Gallery />
                <Reviews />
                <Contact />
              </>
            } />
            
            {/* About Page */}
            <Route path="/about" element={<About />} />
            
            {/* Services Page */}
            <Route path="/services" element={
              <>
                <Process />
                <Expertise />
              </>
            } />
            
            {/* Gallery Page */}
            <Route path="/gallery" element={<Gallery />} />
            
            {/* Reviews Page */}
            <Route path="/reviews" element={<Reviews />} />
            
            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Back to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-slate-800 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all hover:-translate-y-1 hover:shadow-xl group"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 group-hover:text-[#e31b6d] transition-colors" />
        </button>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/918084618136"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:shadow-xl flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
        </a>
      </div>
    </Router>
  );
}
