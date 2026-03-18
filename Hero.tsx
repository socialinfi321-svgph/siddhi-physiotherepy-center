import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const MedicalCross = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M40 15h20v25h25v20H60v25H40V60H15V40h25V15z" fill="#004b93"/>
    <path d="M40 15 C 20 15, 15 20, 15 40 H 28 C 28 28, 28 28, 40 28 V 15 Z" fill="#e31b6d"/>
  </svg>
);

const Squiggle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 0 10 Q 12.5 0 25 10 T 50 10 T 75 10 T 100 10" stroke="#004b93" strokeWidth="4" fill="none" strokeLinecap="round"/>
  </svg>
);

const DotGrid = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 50" className={className} xmlns="http://www.w3.org/2000/svg">
    <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#004b93" opacity="0.5" />
    </pattern>
    <rect x="0" y="0" width="100" height="50" fill="url(#dots)" />
  </svg>
);

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    subtitle: "Welcome to",
    title: <>Siddhi Physiotherapy <br className="hidden md:block" /> Centre</>,
    locationText: "NAWADA | BIHAR"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Introducing",
    title: <>Our Expert Physiotherapy <br className="md:hidden" /> Services</>,
    locationText: "NAWADA | BIHAR"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Advanced Care",
    title: <>Restore Your Mobility & <br className="md:hidden" /> Strength</>,
    locationText: <>Leading Home Rehabilitation Service <br className="hidden md:block" /> Provider in nawada</>
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 8 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[100vh] md:min-h-[600px] lg:min-h-[700px] flex items-center py-20 md:py-0 overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-white">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentSlide}
            src={slides[currentSlide].image}
            alt="Physiotherapy Background" 
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 md:from-white/85 md:via-white/60 md:to-white/10"></div>
      </div>

      {/* Magenta Background Shape - Hidden on mobile, visible on md+ */}
      <div 
        className="hidden md:block absolute top-0 right-0 w-[45%] md:w-[40%] lg:w-[35%] h-full bg-[#e31b6d] z-0" 
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}
      ></div>

      {/* Crosses & Decorative - Hide some on mobile to reduce clutter */}
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="hidden md:block absolute top-32 right-[20%] md:right-[40%] w-12 h-12 md:w-16 md:h-16 z-10">
        <MedicalCross />
      </motion.div>
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 right-[10%] md:bottom-1/4 md:right-[35%] w-12 h-12 md:w-20 md:h-20 z-10">
        <MedicalCross />
      </motion.div>
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="hidden md:block absolute bottom-20 right-[45%] md:right-[55%] w-8 h-8 md:w-10 md:h-10 z-10 opacity-70">
        <MedicalCross />
      </motion.div>

      {/* Squiggly Line */}
      <div className="hidden md:block absolute top-40 right-[15%] md:right-[30%] w-24 md:w-32 z-10">
        <Squiggle />
      </div>

      {/* Dot Grid */}
      <div className="hidden md:block absolute bottom-32 right-[25%] md:right-[40%] w-32 md:w-48 h-24 z-10">
        <DotGrid />
      </div>

      {/* Main Content Container - Flex Column on Mobile, Row on Tablet/Desktop */}
      <div className="container mx-auto px-5 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 h-full">
        
        {/* Text Content */}
        <div className="w-full md:w-[55%] lg:w-[50%] flex flex-col justify-center text-left relative -top-[50px] md:-top-5 mt-10 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              className="md:pl-[40px] lg:pl-[80px]"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.2 } },
                exit: { opacity: 0, x: -30, transition: { duration: 0.5 } }
              }}
            >
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
                }}
                className="text-[22px] md:text-[3vw] lg:text-5xl font-extrabold text-[#004b93] mb-2 tracking-tight drop-shadow-sm"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
                }}
                className="text-[26px] md:text-[4vw] lg:text-6xl font-normal text-[#004b93] mb-4 md:mb-8 leading-tight drop-shadow-sm"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
                }}
                className="text-[16px] md:text-[2vw] lg:text-2xl font-black text-[#004b93] mb-8 md:mb-10 tracking-widest drop-shadow-sm"
              >
                {slides[currentSlide].locationText}
              </motion.p>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
                }}
                className="w-auto inline-block"
              >
                <Link to="/contact" className="inline-block bg-[#e31b6d] hover:bg-[#c2155b] text-white px-6 py-3 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center whitespace-nowrap">
                  Book Appointment
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Content - Doctor Circle */}
        <div className="w-[80%] md:w-[40%] lg:w-[45%] self-start md:self-auto flex justify-center items-center relative mt-12 md:mt-0 -ml-5 md:ml-0">
          {/* Shared Container for Circle and Band */}
          <div className="relative w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px] aspect-square z-10">
            
            {/* Diagonal Blue Band */}
            <div className="absolute top-1/2 left-1/2 w-[200vw] h-[60px] md:h-[100px] lg:h-[140px] bg-[#004b93] -translate-x-1/2 -translate-y-1/2 rotate-[55deg] z-0"></div>

            {/* Main Image Frame (Dark Blue -> White -> Image) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              {/* Dark Blue Outer Ring */}
              <div className="absolute inset-0 rounded-full bg-[#004b93] shadow-2xl"></div>

              {/* White Inner Ring */}
              <div className="relative w-[80%] h-[80%] rounded-full bg-white flex items-center justify-center shadow-xl">
                {/* Doctor Image */}
                <div className="w-[90%] h-[90%] rounded-full overflow-hidden">
                  <img 
                    src="https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/photo_2026-03-17_13-00-46.jpg" 
                    alt="Dr. Suman Raj" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
