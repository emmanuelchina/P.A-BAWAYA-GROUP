
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
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "120+", label: "Projects Delivered" },
  { value: "250+", label: "Clients Served" },
  { value: "5", label: "Core Services" },
  { value: "10+", label: "Strategic Partners" },
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
  const heroRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const valuesRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const isWhoInView = useInView(whoWeAreRef, { once: false, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: false, amount: 0.3 });
  const isProcessInView = useInView(processRef, { once: false, amount: 0.3 });
  const isValuesInView = useInView(valuesRef, { once: false, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: false, amount: 0.3 });

  return (
    <section className="w-full bg-100-100 text-gray-800">
      {/* HERO */}
      <motion.div
        ref={heroRef}
        className="bg-gray-900 text-white py-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isHeroInView ? 1 : 0, 
          y: isHeroInView ? 0 : 20 
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: isHeroInView ? 1 : 0.8, 
            opacity: isHeroInView ? 1 : 0 
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaBuilding className="mx-auto text-7xl mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold">
            P.A Bawaya Group
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Delivering Solutions. Building Trust.
          </p>
        </motion.div>
      </motion.div>

      {/* WHO WE ARE */}
      <motion.div
        ref={whoWeAreRef}
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14"
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: isWhoInView ? 1 : 0, 
          x: isWhoInView ? 0 : -20 
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            P.A Bawaya Group is a multi-service company providing
            professional solutions across logistics, construction,
            ICT & technology, oil and gas, and international trade.
            We are driven by excellence, confidentiality, and results.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white shadow rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isWhoInView ? 1 : 0, 
                scale: isWhoInView ? 1 : 0.9 
              }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-3xl font-bold text-gray-900">
                {stat.value}
              </h3>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SERVICES */}
      <motion.div
        ref={servicesRef}
        className="bg-gray-100 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isServicesInView ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="border rounded-2xl p-8 hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isServicesInView ? 1 : 0, 
                  y: isServicesInView ? 0 : 30 
                }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-5xl text-gray-900 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* PROCESS */}
      <motion.div
        ref={processRef}
        className="bg-gray-100 py-20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isProcessInView ? 1 : 0, 
          scale: isProcessInView ? 1 : 0.95 
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">How We Work</h2>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isProcessInView ? 1 : 0, 
                  y: isProcessInView ? 0 : 20 
                }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gray-900 text-white text-xl font-bold mb-4">
                  {i + 1}
                </div>
                <p className="font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* VALUES */}
      <motion.div
        ref={valuesRef}
        className="py-20 bg-gray-100"
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: isValuesInView ? 1 : 0, 
          x: isValuesInView ? 0 : 20 
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="bg-white shadow rounded-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isValuesInView ? 1 : 0, 
                  y: isValuesInView ? 0 : 30 
                }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl mb-4 text-gray-900">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        ref={ctaRef}
        className="bg-gray-900 text-white py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isCtaInView ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
        <p className="text-gray-300 mb-8">
          Partner with a team committed to quality, trust, and results.
        </p>
        <motion.button 
          className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </section>
  );
}
