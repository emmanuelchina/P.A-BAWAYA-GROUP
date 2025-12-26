import { motion, useInView, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const ReadMore = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const handleLearnMore = () => {
    navigate("/about");
  };

  const images = [
    { src: "/img/container-817406_1280.jpg", alt: "Logistics" },
    { src: "/img/refinery-3613522_1280.jpg", alt: "Oil & Gas" },
    { src: "/img/construction-site-3555550_1280.jpg", alt: "Construction" },
    { src: "/img/2255f80e-4d4d-4826-8848-bf5710cdb089.jpeg", alt: "Aviation" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="bg-gray-100 py-16 lg:py-24 overflow-hidden">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* WHO WE ARE BADGE - ONLY AT TOP */}
      

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Images FIRST */}
          <motion.div
            variants={itemVariants}
            className="order-first lg:order-2 relative flex justify-center lg:justify-start"
          >
            {/* Continuous pulsing background */}
            <motion.div 
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-slate-200/60 via-transparent to-gray-200/40 rounded-3xl blur-3xl"
              animate={{ 
                scale: [1, 1.08, 1],
                opacity: [0.6, 0.9, 0.6],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            
            <div className="grid grid-cols-2 gap-6 max-w-md w-full lg:max-w-lg">
              {images.map((image, index) => (
                <div
                  key={image.alt}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl group-hover:shadow-2xl transition-all duration-500 h-48 lg:h-56 hover:-translate-y-2 hover:scale-105">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="order-last lg:order-1"
          >
             <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-8 py-1 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl mx-auto max-w-max">
            <span className="text-xl">👥</span>
            <span className="text-sm font-bold text-gray-900 tracking-wide uppercase">
              Who We Are
            </span>
          </div>
        </div>

            <motion.div 
              variants={itemVariants}
              className="mb-8"
            >
              <motion.h2 
                className="text-lg font-semibold text-gray-900 tracking-wide uppercase border-b-2 border-gray-200 pb-2 mb-4 inline-block"
                whileHover={{ scale: 1.03, color: "#1f2937" }}
                transition={{ duration: 0.3 }}
              >
                P.A. Bawaya Group
              </motion.h2>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed space-y-6 max-w-lg"
            >
              <motion.p variants={itemVariants}>
                A diversified service company committed to delivering reliable, innovative, and result-driven solutions across multiple industries.
              </motion.p>
              <motion.p variants={itemVariants}>
                We operate with a clear mission to support businesses and projects with the expertise, structure, and professionalism required to succeed in today's competitive environment.
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="font-medium text-gray-700"
              >
                Our services span Logistics, Construction, ICT, Oil &amp;
            Gas, and International Trade connecting ideas, infrastructure,
            AirLine Services.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-20"
          variants={itemVariants}
        >
          <motion.button
            onClick={handleLearnMore}
            className="group relative bg-gray-500 hover:bg-gray-400 text-white font-semibold py-3 px-12 rounded-full shadow-xl hover:shadow-2xl overflow-hidden text-lg tracking-wide"
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.4 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Learn More About Us
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.4 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent -skew-x-12 opacity-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ReadMore;
