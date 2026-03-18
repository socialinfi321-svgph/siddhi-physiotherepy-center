import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "MD KAFIL HAYAT",
    meta: "3 reviews · 1 photo",
    time: "a year ago",
    text: "Thanks to Siddhi's physiotherapy centre for there exceptional care, I've started regaining my normal activities pain-free. I wholeheartedly recommend Siddhi's physiotherapy centre to anyone in need of physiotherapy. His expertise, compassionate care, and holistic approach make her a standout in her field.",
    rating: 5,
    initial: "M",
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "KING VICKY",
    meta: "7 reviews",
    time: "a year ago",
    text: "First time I visited at a well experienced professional manual therapist in Nawada... It is good to see that our Nawada is getting a well experienced physiotherapist like Dr. Suman, it's good fortune for our Nawada 😊 I always remember you sir Go deep no jurk",
    rating: 5,
    initial: "K",
    color: "bg-orange-500"
  },
  {
    id: 3,
    name: "DEEPAK PASWAN HEAD TEACHER",
    meta: "1 review",
    time: "a year ago",
    text: "Mera Brachial plexus injury tha. Dr suman ne mujhe kaphi thik kar diye ab mujhe puri ummid hai ki mai bahut jald hi iss center me apne hath ki movement ko pura kar lunga.Thank you sir ji Mai apko kabhi nahi bhul paunga apne meri jindagi lautayi hai.",
    rating: 5,
    initial: "D",
    color: "bg-green-500"
  },
  {
    id: 4,
    name: "PRAMOD KUMAR",
    meta: "1 review · 1 photo",
    time: "a year ago",
    text: "Dr Suman is very well experienced doctor.I had chronic pain since 4years in my shoulder and neck pain.Changed 3 doctor, but here , got relief in my four session only.",
    rating: 5,
    initial: "P",
    color: "bg-purple-500"
  },
  {
    id: 5,
    name: "Pooja Kumari",
    meta: "1 review",
    time: "4 months ago",
    text: "Manual therapy ke liye sabse best physiotherapy center baki jagah to machine lagakar patient ko bewkoof banata hai. Yaha over all good",
    rating: 5,
    initial: "P",
    color: "bg-pink-500"
  }
];

export default function Reviews() {
  // Duplicate reviews to create a seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden relative">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#e31b6d] font-bold tracking-wide uppercase text-sm mb-3"
          >
            Testimonials
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-[#004b93] mb-6 tracking-tight"
          >
            Real Stories, Real Recovery
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
            Don't just take our word for it. Here is what our patients have to say about their experience with Dr. Suman and our manual therapy treatments.
          </motion.p>
        </div>
      </div>

      {/* Sliding Marquee Container */}
      <div className="relative w-full max-w-[100vw] overflow-hidden flex">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-marquee gap-6 px-4 py-4">
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[320px] md:w-[420px] flex-shrink-0 bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,75,147,0.12)] transition-all duration-300 flex flex-col relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#004b93] opacity-5 group-hover:opacity-10 transition-opacity" />
              
              {/* User Info Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${review.color}`}>
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg leading-tight">{review.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <span>{review.meta}</span>
                    <span>•</span>
                    <span>{review.time}</span>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-700 leading-relaxed flex-grow text-sm md:text-base">
                "{review.text}"
              </p>
              
              {/* Google Review Badge */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-xs font-semibold text-slate-500">Posted on Google</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
