import { motion } from 'motion/react';

const expertiseItems = [
  {
    title: "Back Pain",
    description: "Are you struggling with persistent back pain that's affecting your daily life? Look no further than Siddhi Physiotherapy for effective and personalized care.",
    image: "https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/unnamed%20(1).jpg"
  },
  {
    title: "Knee Pain",
    description: "Specialized care for joint conditions, arthritis, and knee pain to restore mobility, reduce inflammation, and improve joint function.",
    image: "https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/unnamed%20(3).jpg"
  },
  {
    title: "Arthritis Treatment",
    description: "Siddhi Physiotherapy is a renowned name in the field of physiotherapy, particularly in the realm of arthritis treatment. Arthritis is a common yet manageable condition.",
    image: "https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/n8WCCB3aVtiQAAAAABJRU5ErkJggg%3D%3D.webp"
  },
  {
    title: "Balance Exercise Therapy",
    description: "At Siddhi Physiotherapy, the pursuit of wellness extends beyond mere physical rehabilitation; it encompasses the holistic enhancement of bodily balance.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Foot & Ankle Pain",
    description: "Siddhi Physiotherapy is a renowned name in the field of physiotherapy, particularly in addressing foot and ankle pain. With a commitment to excellence.",
    image: "https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/unnamed%20(4).jpg"
  },
  {
    title: "Heat Therapy",
    description: "At Siddhi Physiotherapy, we believe in utilizing the latest advancements in physiotherapy to provide comprehensive care to our patients.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Hip Pain",
    description: "Are you struggling with hip pain that limits your mobility and affects your quality of life? Siddhi Physiotherapy offers comprehensive hip pain management.",
    image: "https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/unnamed%20(6).jpg"
  },
  {
    title: "Shoulder Pain",
    description: "Shoulder pain can be a debilitating condition, impacting everything from daily tasks to quality of life. Fortunately, seeking the right care can make a difference.",
    image: "https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/unnamed%20(5).jpg"
  },
  {
    title: "Spinal Injuries",
    description: "Spinal injuries can be profoundly life-altering, impacting not just physical health but also emotional well-being. In the journey towards recovery...",
    image: "https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/unnamed%20(7).jpg"
  },
  {
    title: "Paediatric Physiotherapy",
    description: "At Siddhi Physiotherapy, we understand that every child is unique, and their journey to physical wellness may require specialized care.",
    image: "https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/download%20(1).jpg"
  },
  {
    title: "Post Surgery",
    description: "Undergoing surgery is a significant event in anyone's life, and the recovery process can often be challenging. However, with the right support...",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Physical Therapy",
    description: "In the realm of physical therapy, Siddhi Physiotherapy stands out as a beacon of innovation and excellence. Led by seasoned professionals...",
    image: "https://raw.githubusercontent.com/socialinfi321-svgph/sidhi-physiotherepy/main/download%20(2).jpg"
  }
];

export default function Expertise() {
  const len = expertiseItems.length;

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#004b93] mb-4 uppercase tracking-tight"
          >
            Our Areas of <span className="text-[#e31b6d]">Expertise</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1.5 bg-[#e31b6d] mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Grid Layout with Borders (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {expertiseItems.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className={`group flex flex-col items-center text-center p-8 sm:p-10 border-gray-200
                ${index < len - 1 ? 'border-b' : 'border-b-0'}
                ${index < len - 2 ? 'md:border-b' : 'md:border-b-0'}
                ${index < len - 3 ? 'lg:border-b' : 'lg:border-b-0'}
                border-r-0
                ${index % 2 === 0 ? 'md:border-r' : 'md:border-r-0'}
                ${index % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0'}
              `}
            >
              {/* Image Container with Dashed Border */}
              <div className="relative w-56 h-56 mb-8 rounded-full p-2 border border-dashed border-[#004b93] group-hover:border-[#e31b6d] transition-colors duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Typography & Content */}
              <h3 className="text-xl md:text-2xl font-bold text-[#004b93] mb-4 font-sans">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-[1.6] max-w-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
