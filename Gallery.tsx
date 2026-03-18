import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/unnamed.webp',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/unnamed%20(1).webp',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/photo_2026-03-17_13-00-55.jpg',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/2026-01-15.webp',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/2025-03-20.webp',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/2024-12-05.webp',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/2024-12-05.jpg',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/2024-12-05%20(2).webp',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/2024-12-05%20(1).webp',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/2024-09-27.webp',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/2024-09-27%20(2).webp',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/2024-09-27%20(1).webp',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/2024-09-26.webp',
    'https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/2024-09-26%20(1).webp'
  ];

  const Loops = () => (
    <svg viewBox="0 0 240 80" className="w-full h-full p-2" preserveAspectRatio="xMidYMid meet">
      <path d="M10,60 C10,10 50,10 60,40 C70,70 30,70 30,40 C30,10 90,10 100,40 C110,70 70,70 70,40 C70,10 130,10 140,40 C150,70 110,70 110,40 C110,10 170,10 180,40 C190,70 150,70 150,40 C150,10 210,10 220,40 C230,70 190,70 190,40" fill="none" stroke="black" strokeWidth="1.5" />
    </svg>
  );

  const galleryItems = [
    // Row 1
    { type: 'empty', className: 'hidden md:block col-span-1 row-span-1' },
    { type: 'image', src: images[0], className: 'col-span-1 row-span-2' },
    { type: 'color', bg: '#a78bfa', className: 'col-span-1 row-span-1' },
    { type: 'text', title: 'Siddhi', subtitle: 'Physiotherapy', className: 'col-span-1 row-span-1 flex flex-col justify-center items-start pl-2 md:pl-4' },
    
    // Row 2
    { type: 'color', bg: '#ea580c', className: 'col-span-1 row-span-1' },
    { type: 'image', src: images[1], className: 'col-span-1 row-span-1' },
    { type: 'empty', className: 'hidden md:block col-span-1 row-span-1' },

    // Row 3
    { type: 'image', src: images[2], className: 'col-span-1 row-span-2' },
    { type: 'image', src: images[3], className: 'col-span-1 row-span-2' },
    { type: 'image', src: images[4], className: 'col-span-1 row-span-1' },
    { type: 'color', bg: '#ea580c', className: 'col-span-1 row-span-1' },

    // Row 4
    { type: 'image', src: images[5], className: 'col-span-1 row-span-1' },
    { type: 'empty', className: 'hidden md:block col-span-1 row-span-1' },

    // Row 5
    { type: 'svg', className: 'col-span-2 row-span-1 flex items-center justify-center bg-white border border-gray-100' },
    { type: 'color', bg: '#a78bfa', className: 'col-span-1 row-span-1' },
    { type: 'image', src: images[6], className: 'col-span-1 row-span-2' },

    // Row 6
    { type: 'image', src: images[7], className: 'col-span-1 row-span-1' },
    { type: 'image', src: images[8], className: 'col-span-1 row-span-1' },
    { type: 'image', src: images[9], className: 'col-span-1 row-span-1' },

    // Row 7
    { type: 'image', src: images[10], className: 'col-span-2 row-span-2' },
    { type: 'image', src: images[11], className: 'col-span-1 row-span-1' },
    { type: 'image', src: images[12], className: 'col-span-1 row-span-1' },

    // Row 8
    { type: 'image', src: images[13], className: 'col-span-2 row-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#faf5f5]">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        {/* Gallery Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#e31b6d] font-bold tracking-widest uppercase text-sm mb-3"
          >
            Siddhi Physiotherapy Centre
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#004b93] mb-6 font-sans tracking-tight"
          >
            Clinic Gallery
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1.5 bg-[#e31b6d] mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            A visual journey through our state-of-the-art facilities and dedicated care at Siddhi Physiotherapy.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[120px] md:auto-rows-[180px] grid-flow-dense">
          {galleryItems.map((item, index) => {
            if (item.type === 'empty') {
              return <div key={index} className={item.className}></div>;
            }
            if (item.type === 'color') {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.02 }}
                  className={item.className} 
                  style={{ backgroundColor: item.bg }}
                ></motion.div>
              );
            }
            if (item.type === 'text') {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.02 }}
                  className={item.className}
                >
                  <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black text-black leading-[0.9] tracking-tighter">
                    {item.title}<br/>{item.subtitle}
                  </h2>
                </motion.div>
              );
            }
            if (item.type === 'svg') {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.02 }}
                  className={item.className}
                >
                  <Loops />
                </motion.div>
              );
            }
            if (item.type === 'image') {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.02 }}
                  className={`${item.className} relative overflow-hidden group border border-gray-200/50`}
                >
                  <img 
                    src={item.src} 
                    alt={`Gallery image ${index}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
