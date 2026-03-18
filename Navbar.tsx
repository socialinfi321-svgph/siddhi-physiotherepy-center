import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="relative w-full z-50 bg-white shadow-sm">
      {/* Top Bar (Hidden on mobile) */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-[#004b93] text-white text-sm w-full">
        <div className="flex space-x-6">
          <a 
            href="https://share.google/aW25qf08RW3vX4mpU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-200 hover:underline transition-colors"
          >
            <MapPin size={14} className="mr-2" /> Purani Jail Road, Nawada
          </a>
          <div className="flex items-center"><Clock size={14} className="mr-2" /> Mon-Sat: 9am - 8pm</div>
        </div>
        <a href="tel:+918084618136" className="flex items-center font-semibold hover:text-gray-200 transition-colors">
          <Phone size={14} className="mr-2" /> +91 8084618136
        </a>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-4 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src="https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/Gemini_Generated_Image_qzmu7mqzmu7mqzmu.png" 
            alt="Siddhi Physiotherapy Logo" 
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain mix-blend-multiply contrast-125"
          />
          <div className="flex flex-col justify-center">
            <div className="leading-none">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#004b93] lowercase">siddhi</div>
              <div className="text-[8px] sm:text-[9px] lg:text-[11px] font-semibold text-[#e31b6d] uppercase tracking-[1px] lg:tracking-[2px] mt-1">PHYSIOTHERAPY CENTRE</div>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center md:space-x-3 lg:space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`font-medium text-[13px] lg:text-base transition-colors whitespace-nowrap ${
                location.pathname === link.href 
                  ? 'text-[#e31b6d]' 
                  : 'text-[#004b93] hover:text-[#e31b6d]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-[#e31b6d] hover:bg-[#c2155b] text-white px-4 py-2 lg:px-6 lg:py-2.5 rounded-full font-medium text-[13px] lg:text-base transition-colors shadow-sm hover:shadow-md whitespace-nowrap ml-2 lg:ml-0">
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#004b93]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`font-medium py-2 border-b border-gray-50 ${
                location.pathname === link.href ? 'text-[#e31b6d]' : 'text-[#004b93]'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-[#e31b6d] text-white text-center px-6 py-3 rounded-lg font-medium mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
