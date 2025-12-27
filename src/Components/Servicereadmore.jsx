import {
  FaTruckMoving,
  FaHardHat,
  FaLaptopCode,
  FaOilCan,
  FaGlobe,
  FaPlane,
  FaCogs,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Industries from "./Companyserved";
import ToolsTechnologies from "./Toolsweuse";
import WhyChooseUs from "./Whychooseus";

export default function Servicereadmore() {
  const navigate = useNavigate();
  
  const handleConsultation = () => {
    navigate("/Contact");
  };

  const services = [
    // ... (services data unchanged)
    {
      title: "Logistics Solutions",
      description: "Efficient movement and handling of goods across multiple channels.",
      icon: <FaTruckMoving className="text-blue-500" size={32} />,
      subs: [
        { title: "Sea Freight", text: "We transport goods safely and efficiently through ships, handling bulk cargo, containers, and international maritime logistics." },
        { title: "Land Transportation", text: "Reliable road transport solutions ensuring timely delivery across cities, states, and borders." },
        { title: "Clearing & Forwarding", text: "Professional customs clearing and documentation for smooth cargo release." },
      ],
    },
 {
      title: "Construction / Site Jobs",
      description: "End-to-end construction support and site operations management.",
      icon: <FaHardHat className="text-orange-500" size={32} />,
      subs: [
        { title: "Site Preparation", text: "Land clearing, groundwork, and site setup for construction projects." },
        { title: "Material Supply", text: "Timely supply of construction materials and equipment to sites." },
        { title: "Project Support", text: "On-site coordination to keep projects on schedule." },
      ],
    },
    {
      title: "ICT & Tech Solutions",
      description: "Modern technology solutions designed to support business growth.",
      icon: <FaLaptopCode className="text-purple-500" size={32} />,
      subs: [
        { title: "IT Infrastructure", text: "Setup and management of network systems and servers." },
        { title: "Software & Systems", text: "Implementation of digital and business software solutions." },
        { title: "Technical Support", text: "Ongoing troubleshooting and IT maintenance services." },
      ],
    },
    {
      title: "Oil and Gas Services",
      description: "Specialized support services for oil and gas operations.",
      icon: <FaOilCan className="text-red-500" size={32} />,
      subs: [
        { title: "Equipment Logistics", text: "Safe transport of oil and gas equipment to operation sites." },
        { title: "Operational Support", text: "Logistics and field support tailored for oil and gas projects." },
        { title: "Safety & Compliance", text: "Strict adherence to industry safety and regulatory standards." },
      ],
    },
    {
      title: "International Trade & Business Solutions",
      description: "Simplifying global trade and cross-border business operations.",
      icon: <FaGlobe className="text-green-500" size={32} />,
      subs: [
        { title: "Import & Export", text: "Complete import and export handling from sourcing to delivery." },
        { title: "Trade Documentation", text: "Accurate handling of customs and trade documents." },
        { title: "Business Consulting", text: "Advisory services for successful international expansion." },
      ],
    },
    {
      title: "Airline Services",
      description: "Comprehensive air freight and aviation logistics solutions worldwide.",
      icon: <FaPlane className="text-indigo-500" size={32} />,
      subs: [
        { title: "Air Freight", text: "Fast and secure air cargo transportation for time-sensitive shipments globally." },
        { title: "Flight Booking & Visa", text: "Complete flight booking services and visa processing support for seamless international travel." },
        { title: "Express Delivery", text: "Priority air services for urgent deliveries with door-to-door tracking." },
      ],
    },
  ];

  return (
    <section className="w-full bg-gray-100">
      {/* HERO - Continuous Motion (unchanged) */}
      <section className="h-80 w-full py-24 bg-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Floating Background Particles */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full"
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-20 right-20 w-3 h-3 bg-blue-400/30 rounded-full"
            animate={{ y: [0, 15, 0], x: [-10, 10, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-1 h-1 bg-white/10 rounded-full"
            animate={{ y: [0, -10, 0], scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="flex flex-col items-center space-y-6 z-10 max-w-7xl mx-auto px-4 w-full relative z-10"
          initial={{ scale: 0.8, opacity: 0, rotateX: -10 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaCogs className="mx-auto text-7xl mb-6 opacity-80 text-white drop-shadow-2xl" />
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-white to-slate-700 bg-clip-text text-transparent leading-tight drop-shadow-lg"
            animate={{ scale: [1, 1.02, 1], y: [0, -2, 0], opacity: [1, 0.95, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Our Core Services
          </motion.h1>
          
          <motion.p
            className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto text-center px-4"
            animate={{ y: [0, -3, 0], opacity: [1, 0.9, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Delivering Smart Solutions
          </motion.p>
        </motion.div>
      </section>

      {/* Services Section - Fade In Animations */}
      <motion.section 
        className="w-full bg-gray-100 py-16 px-4 md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-indigo-600">P.A. Bawaya Group</span> delivers integrated solutions across logistics,
              construction, technology, oil & gas, international trade, and
              airline services.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-10 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-500 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="flex flex-col lg:flex-row items-start gap-6 mb-8"
                  whileHover={{ transition: { staggerChildren: 0.1 } }}
                >
                  <motion.div 
                    className="w-20 h-20 p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-5 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <motion.div className="flex-1 min-w-0">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600"
                      whileHover={{ color: "#4f46e5" }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 text-lg leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {service.description}
                    </motion.p>
                  </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.subs.map((sub, subIndex) => (
                    <motion.div
                      key={subIndex}
                      className="group border border-gray-200/50 rounded-2xl p-6 bg-gray-50/50 hover:bg-white hover:border-indigo-200 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (subIndex * 0.05) }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <motion.h4 
                        className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {sub.title}
                      </motion.h4>
                      <motion.p 
                        className="text-gray-600 leading-relaxed text-base"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {sub.text}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Request a Consultation Button - Centered with Fade In */}
          <motion.div 
            className="text-center pt-20 pb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              onClick={handleConsultation}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-lg tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Consultation
            </motion.button>
          </motion.div>
        </div>
        
        {/* Child Components */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Industries />
          <ToolsTechnologies />
          <WhyChooseUs />
        </motion.div>
      </motion.section>
    </section>
  );
}
