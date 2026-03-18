import { motion } from 'motion/react';
import { Award, Building2, GraduationCap, CheckCircle2, FileCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#f4f9f6]">
      {/* Aesthetic Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-teal-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-[20%] w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', 
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
        }}
      ></div>
      
      {/* Decorative Geometric Lines */}
      <div className="absolute top-0 left-0 w-64 h-64 border-[1px] border-[#1b6350]/20 -translate-x-1/2 -translate-y-1/2 rotate-45 z-0"></div>
      <div className="absolute top-20 left-10 w-64 h-64 border-[1px] border-[#1b6350]/20 -translate-x-1/2 -translate-y-1/2 rotate-45 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 border-[1px] border-[#1b6350]/20 translate-x-1/3 translate-y-1/3 rotate-45 z-0"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 border-[1px] border-[#1b6350]/20 translate-x-1/3 translate-y-1/3 rotate-45 z-0"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Image & Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full relative flex justify-center lg:justify-end mt-10 lg:mt-0"
          >
            {/* Dark Green Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] bg-[#1b6350] rounded-full z-0"></div>
            
            {/* Doctor Image */}
            <div className="relative z-10 w-full max-w-[420px] -mt-10">
              <img 
                src="https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/photo_2026-03-17_13-00-46.jpg" 
                alt="Dr. Suman Raj" 
                className="w-full h-auto object-cover drop-shadow-2xl rounded-b-full mix-blend-normal"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Book Appointment Badge */}
            <a href="#contact" className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[400px] bg-gradient-to-r from-[#3a6b5d] to-[#144d3e] rounded-full p-1.5 shadow-2xl z-20 hover:scale-105 transition-transform cursor-pointer block">
              <div className="flex items-center bg-gradient-to-r from-[#4b7c6e] to-[#1b6350] rounded-full px-6 py-3.5 border border-white/10">
                <div className="flex -space-x-3 mr-5">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-md border border-gray-100 relative z-10">
                    <FileCheck className="w-6 h-6 text-[#1b6350]" />
                  </div>
                  <div className="w-10 h-10 bg-white/90 rounded flex items-center justify-center shadow-md border border-gray-100 scale-90 relative z-0">
                    <FileCheck className="w-6 h-6 text-[#1b6350]/70" />
                  </div>
                </div>
                <span className="text-white font-medium tracking-wide text-lg">Book Appointment</span>
              </div>
            </a>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full pt-10 lg:pt-0"
          >
            <h2 className="text-[#1b6350] font-bold tracking-widest uppercase text-sm mb-3">Meet The Expert</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1b6350] mb-6 font-bold">
              Dr. Suman Raj <span className="text-2xl font-sans font-medium text-[#1b6350]/80">(PT)</span>
            </h3>
            
            <p className="text-lg text-gray-800 mb-10 leading-relaxed max-w-2xl">
              With extensive experience in top hospitals in New Delhi, Dr. Suman Raj brings world-class physiotherapy and chiropractic care to Nawada. Dedicated to providing personalized, evidence-based treatments for lasting recovery.
            </p>

            <div className="space-y-8">
              {/* Qualifications */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#e0f2ec] rounded-full flex items-center justify-center text-[#1b6350] mt-1 border border-[#1b6350]/10">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-2xl font-serif font-bold text-gray-900">Qualifications</h4>
                  <p className="text-gray-800 mt-1 text-lg">BPT, MIAP, CMT</p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#e0f2ec] rounded-full flex items-center justify-center text-[#1b6350] mt-1 border border-[#1b6350]/10">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-2xl font-serif font-bold text-gray-900">Experience</h4>
                  <ul className="text-gray-800 mt-2 space-y-2 text-lg">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-[#22c55e] mr-3 fill-[#dcfce7]" />
                      Ex- Jain Neuro Hospital, New Delhi
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-[#22c55e] mr-3 fill-[#dcfce7]" />
                      Ex- Kailash Deepak Memorial Hospital, New Delhi
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Specialties */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#e0f2ec] rounded-full flex items-center justify-center text-[#1b6350] mt-1 border border-[#1b6350]/10">
                  <Award className="w-6 h-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-2xl font-serif font-bold text-gray-900">Specialties</h4>
                  <p className="text-gray-800 mt-1 leading-relaxed text-lg">
                    Cervical, Sciatica, Knee Pain, Back Pain, Paralysis, Sports Injuries, Cupping Therapy, Dry Needling, Laser Therapy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
