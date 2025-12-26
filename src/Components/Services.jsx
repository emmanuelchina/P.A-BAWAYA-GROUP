import {
  FaTruckMoving,
  FaHardHat,
  FaLaptopCode,
  FaOilCan,
  FaGlobe,
  FaPlane,
} from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "Logistics Solution",
    desc: "Streamlining supply chains with precision routing, real-time tracking, and risk mitigation empowering businesses to conquer distance, cut costs, and deliver reliability in a hyper-connected global economy.",
    icon: FaTruckMoving,
  },
  {
    title: "Oil & Gas Services",
    desc: "Optimizing extraction, refining, and distribution with sustainable tech and regulatory expertise securing energy independence, powering industries, and balancing environmental stewardship with economic vitality worldwide.",
    icon: FaOilCan,
  },
  {
    title: "International Trade and Business Solutions",
    desc: "Navigating tariffs, compliance, and cross-border strategies with expert facilitation unlocking global markets, fostering partnerships, and amplifying growth for businesses in an interconnected trade landscape.",
    icon: FaGlobe,
  },
  {
    title: "Construction/Site Jobs",
    desc: "Building tomorrow's infrastructure through skilled labor, safety-first execution, and innovative site management transforming visions into enduring structures that drive economic growth and community resilience.",
    icon: FaHardHat,
  },
  {
    title: "ICT and Tech Solutions",
    desc: "Harnessing cutting-edge digital tools, cybersecurity, and cloud integration to fuel innovation bridging gaps in efficiency, scalability, and data intelligence for a competitive edge in the digital age.",
    icon: FaLaptopCode,
  },
  {
    title: "Airline Services",
    desc: "Delivering swift air freight, flight booking, visa processing, and aviation logistics with global reach ensuring time-critical shipments, seamless travel, and comprehensive airport operations worldwide.",
    icon: FaPlane,
  },
];

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0 
  },
};

export default function Services() {
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

  const handleClick = () => {
    navigate("/Services");
  };

  return (
    <section className="relative bg-gray-100 py-20 px-4 overflow-hidden">
      <div className="absolute " />
      <motion.div 
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.4  // DELAY STARTS AFTER EXPERTISE BADGE
            }
          }
        }}
        initial="hidden"
        animate={controls}
        className="relative max-w-7xl mx-auto"
      >
        {/* EXPERTISE BADGE - APPEARS FIRST */}
        <motion.div
          variants={{
            hidden: { scale: 0.5, opacity: 0, y: -20 },
            visible: { 
              scale: 1, 
              opacity: 1, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: 0.1  // APPEARS FIRST - 0.1s delay
              }
            }
          }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-8 py-1 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 mx-auto max-w-max">
            <span className="text-xl">⭐</span>
            <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Our Expertise
            </span>
          </div>
        </motion.div>

        {/* Header - appears AFTER expertise badge */}
        <motion.div
          variants={cardVariants}
          className="text-center mb-16"
        >
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
            Smart Services for Global Business
          </h2>
          <p className="mt-4 text-slate-900 max-w-2xl mx-auto">
          We deliver smart, results driven services backed by industry expertise and a commitment to exceptional outcomes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl bg-white backdrop-blur border border-white/10 p-6 hover:bg-gray-300 transition"
              >
                <div className="absolute -top-5 left-6 w-12 h-12 rounded-xl bg-gray-400 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                <div className="pt-8">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          variants={cardVariants}
          className="mt-16 text-center"
        >
          <button
            onClick={handleClick}
            className="
            inline-flex items-center gap-2 rounded-full bg-slate-500 px-8 py-3 font-semibold text-white hover:bg-gray-400 transition"
          >
            Explore This Service
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
