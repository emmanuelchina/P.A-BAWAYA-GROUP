import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Logistics Solutions",
    text: "Efficient transportation and supply chain management",
    image: "/img/container-789488_1280.jpg",
  },
  {
    title: "Construction & Site Services",
    text: "Professional construction and manpower support",
    image: "/img/construction-site-3555550_1280.jpg",
  },
  {
    title: "ICT & Technology Solutions",
    text: "Advanced ICT and tech services",
    image: "/img/analytics-2606963_1280.jpg",
  },
  {
    title: "Oil & Gas Services",
    text: "Reliable oil and gas solutions",
    image: "/img/refinery-3613522_1280.jpg",
  },
  {
    title: "International Trade & Business",
    text: "Global trade and business facilitation",
    image: "/img/mixture-69523_1280.jpg",
  },
  {
    title: "Business Facilitation",
    text: "Strategic business support services",
    image: "/img/startup-593341_1280.jpg",
  },
  {
    title: "Airline Services",
    text: "Comprehensive air freight and aviation logistics solutions worldwide",
    image: "/img/airbus-4454338_1280.jpg",
  },
];


export default function Showcase() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useCallback(() => {
    navigate("/Services");
  }, [navigate]);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % services.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const service = services[index];

  // ULTRA-SMOOTH SLIDE VARIANTS
  const slideVariants = {
    initial: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.05,
      filter: "blur(20px)",
      y: 30
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        x: { 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        },
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 },
        filter: { duration: 0.8 },
        y: { duration: 0.8 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? "-120%" : "120%",
      opacity: 0,
      scale: 0.95,
      filter: "blur(20px)",
      y: -20,
      transition: {
        x: { 
          type: "spring", 
          stiffness: 400, 
          damping: 35 
        },
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
        filter: { duration: 0.6 },
        y: { duration: 0.6 }
      }
    })
  };

  // SMOOTH BACKGROUND ELEMENTS
  const backgroundVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative bg-gray-100 py-12 lg:py-20 overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        variants={backgroundVariants}
        animate="animate"
      >
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="relative w-full h-[50vh] lg:h-[60vh] xl:h-[70vh] max-w-6xl mx-auto overflow-hidden shadow-2xl rounded-3xl"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideVariants}
              className="absolute inset-0 will-change-transform"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className="relative w-full h-full">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover brightness-75"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                
                <motion.div 
                  className="absolute top-6 left-6 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-6 right-6 w-20 h-20 bg-slate-500/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-8 left-8 w-16 h-16 bg-slate-400/20 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </div>

              <motion.div 
                className="absolute inset-0 flex items-center justify-center px-6 lg:px-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="text-center text-white max-w-4xl mx-auto w-full">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: 0.4, 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 20 
                    }}
                    className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-xs"
                  >
                    <span className="font-semibold tracking-wide opacity-90">
                      {index + 1} / {services.length}
                    </span>
                  </motion.div>

                  <motion.h2 
                    className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 lg:mb-8 leading-tight tracking-tight drop-shadow-2xl"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.5, 
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {service.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-lg md:text-xl lg:text-2xl font-light mb-8 lg:mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed drop-shadow-lg"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.6, 
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {service.text}
                  </motion.p>

                  <motion.button
                    onClick={handleClick}
                    className="group relative inline-flex items-center gap-2 bg-slate-500/90 hover:bg-gray-400 backdrop-blur-sm px-6 py-3 font-semibold text-base lg:text-lg text-white rounded-2xl shadow-2xl hover:shadow-3xl hover:shadow-gray-900/30 hover:-translate-y-1.5 transition-all duration-400 border border-white/20 hover:border-white/40 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="relative ze ">
                     &ensp;&ensp;&ensp;&ensp;View Details
                    </span>
                    <motion.svg 
                      className="w-4 h-4 lg:w-5 lg:h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                    
                    </motion.svg>
                    
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent -skew-x-12 opacity-0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            {services.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === index 
                    ? "w-8 h-2.5 bg-white shadow-lg" 
                    : "w-2.5 h-2.5 bg-white/50 hover:bg-white/75"
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring" }}
              />
            ))}
          </motion.div>

          <motion.div
            className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white text-xs font-semibold drop-shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 400 }}
          >
            {isHovered ? "⏸️ Paused" : "▶️ Auto"}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
