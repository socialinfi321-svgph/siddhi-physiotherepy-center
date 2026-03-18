import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#e31b6d] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                SP
              </div>
              <div>
                <h2 className="text-xl font-bold text-white leading-tight">Siddhi Physiotherapy</h2>
                <p className="text-xs text-[#e31b6d] font-medium tracking-wider uppercase">Centre</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Providing expert physiotherapy, manual therapy, and chiropractic care in Nawada. Led by Dr. Suman Raj, we are committed to your complete recovery and well-being.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#e31b6d] hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#e31b6d] hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#e31b6d] hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#e31b6d] hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-[#e31b6d] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#e31b6d] transition-colors">About Dr. Suman Raj</Link></li>
              <li><Link to="/services" className="hover:text-[#e31b6d] transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-[#e31b6d] transition-colors">Clinic Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[#e31b6d] transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-[#e31b6d] transition-colors">Manual Therapy</Link></li>
              <li><Link to="/services" className="hover:text-[#e31b6d] transition-colors">Chiropractic Adjustments</Link></li>
              <li><Link to="/services" className="hover:text-[#e31b6d] transition-colors">Cupping Therapy</Link></li>
              <li><Link to="/services" className="hover:text-[#e31b6d] transition-colors">Dry Needling</Link></li>
              <li><Link to="/services" className="hover:text-[#e31b6d] transition-colors">Electrotherapy</Link></li>
              <li><Link to="/services" className="hover:text-[#e31b6d] transition-colors">Sports Injury Rehab</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#e31b6d] mr-3 mt-1 flex-shrink-0" />
                <a 
                  href="https://share.google/aW25qf08RW3vX4mpU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Purani Jail Road, Near Dr. Ramesh Kumar, Nawada - 805110, Bihar
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#e31b6d] mr-3 flex-shrink-0" />
                <a href="tel:+918084618136" className="hover:text-white hover:underline transition-colors">+91 8084618136</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[#e31b6d] mr-3 flex-shrink-0" />
                <span>info@siddhiphysiotherapy.com</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="text-[#e31b6d] mr-3 flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Siddhi Physiotherapy Centre. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
