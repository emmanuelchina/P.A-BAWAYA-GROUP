import {
  FaBuilding,
  FaTruck,
  FaTools,
  FaLaptopCode,
  FaOilCan,
  FaGlobe,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaCheckCircle,
  FaPlane,
  FaAward
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import MissionVision from "./Mission";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "120+", label: "Projects Delivered" },
  { value: "250+", label: "Clients Served" },
  { value: "6", label: "Core Services" },
  { value: "5+", label: "Strategic Partners" },
];

const services = [
  {
    icon: <FaTruck />,
    title: "Logistics Solutions",
    desc: "Efficient transportation, coordination, and supply-chain support.",
  },
  {
    icon: <FaTools />,
    title: "Construction & Site Jobs",
    desc: "Road construction, buildings, site preparation, drainage, and manpower.",
  },
  {
    icon: <FaLaptopCode />,
    title: "ICT & Technology",
    desc: "Modern IT solutions that improve productivity and connectivity.",
  },
  {
    icon: <FaOilCan />,
    title: "Oil & Gas Services",
    desc: "Industry-compliant operational and technical support services.",
  },
  {
    icon: <FaGlobe />,
    title: "International Trade",
    desc: "Cross-border trade facilitation and business solutions.",
  },
  {
    icon: <FaPlane />,
    title: "Airline Services",
    desc: "Delivering swift air freight, flight booking, visa processing, and aviation logistics.",
  },
];

const values = [
  {
    icon: <FaShieldAlt />,
    title: "Confidentiality",
    desc: "Strict protection of client information and operations.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Reliability",
    desc: "Consistent delivery and dependable execution.",
  },
  {
    icon: <FaHandshake />,
    title: "Integrity",
    desc: "Transparent, honest, and ethical business practices.",
  },
  {
    icon: <FaChartLine />,
    title: "Growth Focused",
    desc: "Solutions designed to scale and support long-term success.",
  },
  {
    icon: <FaUsers />,
    title: "Professional Team",
    desc: "Experienced and skilled workforce across industries.",
  },
];

export default function About() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const valuesRef = useRef(null);
  const ctaRef = useRef(null);

  const isWhoInView = useInView(whoWeAreRef, { once: true, amount: 0.2 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 });

  const handleContact = () => {
    navigate("/Contact");
  };

  return (
    <main className="w-full bg-gray-100 min-h-screen text-gray-800 overflow-hidden">
     
      <motion.section
        className="bg-gray-900 text-white py-24 text-center h-80 flex items-center relative overflow-hidden"
      >
       
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-20 right-20 w-3 h-3 bg-indigo-400/30 rounded-full"
            animate={{
              y: [0, 15, 0],
              x: [-10, 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-1 h-1 bg-white/10 rounded-full"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: -10 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotateX: 0,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaAward className="mx-auto text-7xl mb-6 opacity-80 drop-shadow-2xl" />
            </motion.div>
            
    
            <motion.h1 
              className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-white to-slate-700 bg-clip-text text-transparent leading-tight drop-shadow-lg"
              animate={{
                scale: [1, 1.02, 1],
                y: [0, -2, 0],
                opacity: [1, 0.95, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              About Our Company
            </motion.h1>
            
        
            <motion.p
              className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
              animate={{
                y: [0, -3, 0],
                opacity: [1, 0.9, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Driven by Excellence
            </motion.p>
          </motion.div>
        </div>
      </motion.section>


      <motion.section
        ref={whoWeAreRef}
        className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: isWhoInView ? 1 : 0,
          x: isWhoInView ? 0 : -20,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            <span className="text-indigo-600">P.A. Bawaya Group</span><br></br>
            Founded in 2002 and incorporated with RC number 456212, P.A. Bawaya
            International Limited began with modest operations fulfilling
            essential consumer demands. Over the years, it expanded into
            regional and global business delivery, diversifying into vital
            sectors like logistics, construction, ICT/tech, oil/gas, airline
            services, and international trade. The company excels at serving
            local and foreign investors in both large- and small-scale ventures
            by partnering with strategic allies worldwide for swift, dependable
            services.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-lg rounded-xl p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isWhoInView ? 1 : 0,
                scale: isWhoInView ? 1 : 0.9,
              }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
            <MissionVision/>

 
      <motion.section
        ref={servicesRef}
        className="py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: isServicesInView ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isServicesInView ? 1 : 0,
              y: isServicesInView ? 0 : 20,
            }}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isServicesInView ? 1 : 0,
                  y: isServicesInView ? 0 : 30,
                }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-5xl text-blue-600 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    
      <motion.section
        ref={processRef}
        className="py-24"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isProcessInView ? 1 : 0,
          scale: isProcessInView ? 1 : 0.95,
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isProcessInView ? 1 : 0,
              y: isProcessInView ? 0 : 20,
            }}
            transition={{ duration: 0.6 }}
          >
            How We Work
          </motion.h2>
          <div className="grid md:grid-cols-5 gap-8 text-center">
            {[
              "Consultation",
              "Planning",
              "Execution",
              "Delivery",
              "Support",
            ].map((step, i) => (
              <motion.div
                key={i}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isProcessInView ? 1 : 0,
                  y: isProcessInView ? 0 : 20,
                }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                  {i + 1}
                </div>
                <p className="font-semibold text-lg text-gray-900 group-hover:text-blue-800 transition-colors">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={valuesRef}
        className="py-24"
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: isValuesInView ? 1 : 0,
          x: isValuesInView ? 0 : 20,
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent bg-clip-text "
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isValuesInView ? 1 : 0,
              y: isValuesInView ? 0 : 20,
            }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="bg-gray-100 shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isValuesInView ? 1 : 0,
                  y: isValuesInView ? 0 : 30,
                }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-5xl mb-6 text-blue-600 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>



      <motion.section
        ref={ctaRef}
        className="bg-gray-900 text-white py-24 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isCtaInView ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: isCtaInView ? 1 : 0.9 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Work With Us?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isCtaInView ? 1 : 0,
              y: isCtaInView ? 0 : 20,
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Partner with a team committed to quality, trust, and results.
          </motion.p>

          <motion.button
            onClick={handleContact}
            className="px-12 py-4 bg-white text-gray-900 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl border-4 border-white/20 hover:border-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{
              scale: isCtaInView ? 1 : 0.95,
              opacity: isCtaInView ? 1 : 0,
            }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
}
