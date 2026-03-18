import { motion } from 'motion/react';

const steps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "Your journey with us begins with a detailed assessment of your condition, your concerns, and discuss your treatment goals to develop a personalized plan tailored to your needs.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Tailored Treatment Plan",
    description: "Based on the assessment, we design a customized treatment plan utilizing advanced modalities like shock therapy, laser therapy. Each plan is unique, focusing on your condition and optimizing your recovery.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Hands-On Therapy",
    description: "Our skilled therapists provide hands-on techniques such as manual therapy and alleviate pain, improve mobility. These techniques are integral to our holistic approach to our rehabilitation.",
    image: "https://images.unsplash.com/photo-1584467735815-f778f274e296?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Progress Monitoring and Adjustments",
    description: "Throughout your monitor that your progress closely and make necessary to adjustments to to ensure you're on your goals. Your feedback is invaluable our approach, ensures, ensuring the best possible outcomes.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop",
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[linear-gradient(120deg,#E9F2FB,#DCE7F7,#F3F8FF)] font-sans">
      {/* Background Textures */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2v20M12 2a2 2 0 0 0-2 2c0 1.1.9 2 2 2M12 2a2 2 0 0 1 2 2c0 1.1-.9 2-2 2M10 10.5c-1.7-.6-3-2.3-3-4.5M14 10.5c1.7-.6 3-2.3 3-4.5M8 14.5c-1.7-.6-3-2.3-3-4.5M16 14.5c1.7-.6 3-2.3 3-4.5M10 18.5c-1.7-.6-3-2.3-3-4.5M14 18.5c1.7-.6 3-2.3 3-4.5M12 22a2 2 0 0 0 2-2M12 22a2 2 0 0 1-2-2' stroke='%232F6BC9' stroke-width='0.5' fill='none'/%3E%3C/svg%3E\")",
        backgroundSize: '80px 80px'
      }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] tracking-tight">
            Our Process <span className="text-[#60a5fa]">Features</span>
          </h2>
        </motion.div>

        {/* Desktop Circular Layout */}
        <div className="hidden lg:block relative w-full max-w-[1200px] mx-auto h-[700px]">
          
          {/* Central SVG Arrows & Connections */}
          <motion.svg 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] pointer-events-none z-0" 
            viewBox="0 0 540 540"
          >
            <defs>
              <marker id="arrow-gold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#D4AF37" />
              </marker>
            </defs>
            <path d="M 115 115 A 220 220 0 0 1 425 115" fill="none" stroke="#D4AF37" strokeWidth="6" strokeOpacity="0.4" markerEnd="url(#arrow-gold)" />
            <path d="M 425 115 A 220 220 0 0 1 425 425" fill="none" stroke="#D4AF37" strokeWidth="6" strokeOpacity="0.4" markerEnd="url(#arrow-gold)" />
            <path d="M 425 425 A 220 220 0 0 1 115 425" fill="none" stroke="#D4AF37" strokeWidth="6" strokeOpacity="0.4" markerEnd="url(#arrow-gold)" />
            <path d="M 115 425 A 220 220 0 0 1 115 115" fill="none" stroke="#D4AF37" strokeWidth="6" strokeOpacity="0.4" markerEnd="url(#arrow-gold)" />
          </motion.svg>

          {/* Center Hub */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center w-64 h-64 rounded-full bg-gradient-to-b from-[#93c5fd] to-[#3b82f6] border-8 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.4)] group"
          >
            <div className="absolute inset-0 rounded-full border-4 border-white/30 m-2"></div>
            <svg className="w-20 h-20 text-white mb-2 drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20" />
              <path d="M12 2a2 2 0 0 0-2 2c0 1.1.9 2 2 2" />
              <path d="M12 2a2 2 0 0 1 2 2c0 1.1-.9 2-2 2" />
              <path d="M10 10.5c-1.7-.6-3-2.3-3-4.5" />
              <path d="M14 10.5c1.7-.6 3-2.3 3-4.5" />
              <path d="M8 14.5c-1.7-.6-3-2.3-3-4.5" />
              <path d="M16 14.5c1.7-.6 3-2.3 3-4.5" />
              <path d="M10 18.5c-1.7-.6-3-2.3-3-4.5" />
              <path d="M14 18.5c1.7-.6 3-2.3 3-4.5" />
              <path d="M12 22a2 2 0 0 0 2-2" />
              <path d="M12 22a2 2 0 0 1-2-2" />
            </svg>
            <span className="text-white font-semibold text-base text-center px-4 drop-shadow-md leading-tight">Total Care<br/>Lifecycle</span>
          </motion.div>

          {/* Top Left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-[60px] left-0 flex items-center w-[380px] z-20"
          >
            <div className="bg-gradient-to-br from-[#FDFBF4] via-[#F4F0E6] to-[#E8F0F8] p-6 pr-20 rounded-3xl border-[4px] border-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.2),inset_0_0_15px_rgba(212,175,55,0.2)] w-full relative z-10 text-center">
              <h3 className="font-['Montserrat'] text-xl font-bold mb-3 text-[#8B6508]">{steps[0].title}</h3>
              <p className="font-['Inter'] text-[#334155] text-[15px] leading-relaxed">{steps[0].description}</p>
            </div>
            <div className="absolute right-0 translate-x-1/2 z-20 w-36 h-36 rounded-full border-8 border-[#D4AF37] bg-white shadow-lg overflow-hidden">
              <img src={steps[0].image} alt={steps[0].title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          {/* Top Right */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-[60px] right-0 flex items-center w-[380px] justify-end z-20"
          >
            <div className="absolute left-0 -translate-x-1/2 z-20 w-36 h-36 rounded-full border-8 border-[#D4AF37] bg-white shadow-lg overflow-hidden">
              <img src={steps[1].image} alt={steps[1].title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="bg-gradient-to-br from-[#FDFBF4] via-[#F4F0E6] to-[#E8F0F8] p-6 pl-20 rounded-3xl border-[4px] border-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.2),inset_0_0_15px_rgba(212,175,55,0.2)] w-full relative z-10 text-center">
              <h3 className="font-['Montserrat'] text-xl font-bold mb-3 text-[#8B6508]">{steps[1].title}</h3>
              <p className="font-['Inter'] text-[#334155] text-[15px] leading-relaxed">{steps[1].description}</p>
            </div>
          </motion.div>

          {/* Bottom Left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute bottom-[60px] left-0 flex items-center w-[380px] z-20"
          >
            <div className="bg-gradient-to-br from-[#FDFBF4] via-[#F4F0E6] to-[#E8F0F8] p-6 pr-20 rounded-3xl border-[4px] border-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.2),inset_0_0_15px_rgba(212,175,55,0.2)] w-full relative z-10 text-center">
              <h3 className="font-['Montserrat'] text-xl font-bold mb-3 text-[#8B6508]">{steps[3].title}</h3>
              <p className="font-['Inter'] text-[#334155] text-[15px] leading-relaxed">{steps[3].description}</p>
            </div>
            <div className="absolute right-0 translate-x-1/2 z-20 w-36 h-36 rounded-full border-8 border-[#D4AF37] bg-white shadow-lg overflow-hidden">
              <img src={steps[3].image} alt={steps[3].title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          {/* Bottom Right */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-[60px] right-0 flex items-center w-[380px] justify-end z-20"
          >
            <div className="absolute left-0 -translate-x-1/2 z-20 w-36 h-36 rounded-full border-8 border-[#D4AF37] bg-white shadow-lg overflow-hidden">
              <img src={steps[2].image} alt={steps[2].title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="bg-gradient-to-br from-[#FDFBF4] via-[#F4F0E6] to-[#E8F0F8] p-6 pl-20 rounded-3xl border-[4px] border-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.2),inset_0_0_15px_rgba(212,175,55,0.2)] w-full relative z-10 text-center">
              <h3 className="font-['Montserrat'] text-xl font-bold mb-3 text-[#8B6508]">{steps[2].title}</h3>
              <p className="font-['Inter'] text-[#334155] text-[15px] leading-relaxed">{steps[2].description}</p>
            </div>
          </motion.div>
        </div>

        {/* Mobile / Tablet Vertical Layout */}
        <div className="lg:hidden flex flex-col gap-12 relative mt-12">
          <div className="absolute left-[39px] md:left-[55px] top-0 bottom-0 w-0.5 bg-[#D4AF37]/30"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 md:gap-8 relative z-10"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-[#D4AF37] shrink-0 relative bg-white shadow-lg overflow-hidden">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              
              <div className="bg-gradient-to-br from-[#FDFBF4] via-[#F4F0E6] to-[#E8F0F8] p-6 rounded-3xl border-[4px] border-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.2),inset_0_0_15px_rgba(212,175,55,0.2)] flex-1 text-center">
                <h3 className="font-['Montserrat'] text-xl font-bold mb-3 text-[#8B6508]">{step.title}</h3>
                <p className="font-['Inter'] text-[#334155] text-sm md:text-[15px] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
