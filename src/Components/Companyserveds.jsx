// Companyserveds.jsx - SECOND VERSION WITH FIRST VERSION'S HERO MOTION
import {
  FaIndustry, FaShoppingCart, FaOilCan, FaBuilding, FaTruck, FaLaptopCode, 
  FaGlobe, FaPlane, FaChartLine, FaShieldAlt, FaClock, FaUsers, FaCheckCircle,
  FaGlobeAfrica
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Companyserveds() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Services");
  };

   const handleContact = () => {
    navigate("/Contact");
  };
const handleAbout= () => {
    navigate("/About");
  };
  const industries = [
    {
      name: "Logistics & Supply Chain",
      icon: FaTruck,
      color: "text-blue-500 bg-blue-50",
      stats: { projects: "500+", clients: "120+", uptime: "99.9%", routes: "42+" },
      description: "End-to-end supply chain management with real-time tracking, multi-modal transportation, customs clearance, warehousing solutions, and dedicated account management.",
      features: ["Global Network", "Real-time Tracking", "Customs Clearance", "Warehousing", "24/7 Support"]
    },
    {
      name: "Airline Services",
      icon: FaPlane,
      color: "text-blue-600 bg-blue-50",
      stats: { flights: "10K+", cargo: "50K+ tons", partners: "25+", airports: "18+" },
      description: "Comprehensive aviation support including cargo handling, flight logistics, ground operations, regulatory compliance, and priority boarding services.",
      features: ["Cargo Handling", "Ground Operations", "Flight Logistics", "Regulatory Compliance", "Priority Services"]
    },
    {
      name: "Oil & Gas",
      icon: FaOilCan,
      color: "text-blue-500 bg-blue-50",
      stats: { rigs: "75+", wells: "200+", safety: "100%", sites: "35+" },
      description: "Specialized logistics for onshore/offshore operations, equipment transport, hazardous materials handling, rig mobilization, and pipeline support services.",
      features: ["Hazardous Materials", "Rig Mobilization", "Offshore Logistics", "Pipeline Support", "Safety Certified"]
    },
    {
      name: "Construction & Infrastructure",
      icon: FaBuilding,
      color: "text-blue-600 bg-blue-50",
      stats: { projects: "180+", sites: "45+", timeline: "98%", value: "$250M+" },
      description: "Heavy equipment transport, site preparation logistics, materials supply chain, project management support, and on-time delivery guarantees.",
      features: ["Heavy Equipment", "Site Preparation", "Materials Supply", "Project Management", "On-time Guarantee"]
    },
    {
      name: "ICT & Technology",
      icon: FaLaptopCode,
      color: "text-blue-500 bg-blue-50",
      stats: { systems: "300+", uptime: "99.99%", support: "24/7", networks: "150+" },
      description: "Data center logistics, IT hardware deployment, network infrastructure transport, tech support operations, and cybersecurity compliance.",
      features: ["Data Center", "Hardware Deployment", "Network Infra", "Tech Support", "Cybersecurity"]
    },
    {
      name: "Manufacturing & Production",
      icon: FaIndustry,
      color: "text-blue-600 bg-blue-50",
      stats: { factories: "90+", lines: "450+", efficiency: "97%", output: "1.2M+" },
      description: "Just-in-time delivery, raw material sourcing, finished goods distribution, production line support, and inventory optimization services.",
      features: ["JIT Delivery", "Raw Materials", "Finished Goods", "Production Support", "Inventory Optimization"]
    },
    {
      name: "Retail & International Trade",
      icon: FaGlobe,
      color: "text-blue-500 bg-blue-50",
      stats: { shipments: "25K+", countries: "42+", clearance: "99%", volume: "120K m³" },
      description: "Cross-border e-commerce logistics, retail distribution centers, international freight forwarding, customs brokerage, and last-mile delivery.",
      features: ["Cross-border", "Retail Distribution", "Freight Forwarding", "Customs Brokerage", "Last-mile Delivery"]
    },
  ];

  return (
    <>
      {/* HERO - First version's continuous motion applied to second version */}
      <div className="h-80 w-full py-24 bg-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Floating Background Particles */}
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
            className="absolute top-20 right-20 w-3 h-3 bg-blue-400/30 rounded-full"
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

        <div className="text-center max-w-4xl mx-auto relative z-10 px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: -10 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotateX: 0,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Pulsing Globe Icon */}
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
              <FaGlobeAfrica className="mx-auto text-7xl mb-6 opacity-80 text-white drop-shadow-2xl" />
            </motion.div>
            
            {/* Continuous Breathing Title */}
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
              Sectors We Serve
            </motion.h1>
            
            {/* Floating Subtitle */}
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
              Serving Diverse Industries
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Rest of SECOND version stays exactly the same */}
      <section className="bg-gray-50 py-32 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Featured Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          >
            {[
              { icon: FaChartLine, num: "500+", label: "Projects Delivered", color: "text-blue-600" },
              { icon: FaShieldAlt, num: "99.9%", label: "Success Rate", color: "text-blue-600" },
              { icon: FaUsers, num: "50+", label: "Industry Partners", color: "text-blue-600" },
              { icon: FaCheckCircle, num: "7+", label: "Industries Served", color: "text-blue-600" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100/50 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-2"
              >
                <stat.icon className={`w-16 h-16 mx-auto mb-4 ${stat.color}`} />
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
                  {stat.num}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{stat.label}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 group"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`p-4 rounded-2xl ${industry.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
                      {Object.entries(industry.stats).map(([key, value]) => (
                        <span key={key} className="font-mono text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full border border-blue-200">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {industry.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {industry.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-all duration-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <button 
                    onClick={handleClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                    Learn More About {industry.name.split('&')[0]}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <div className="text-xs text-gray-400 text-center font-medium">
                    Trusted by Fortune 500 Companies
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 rounded-3xl px-8"
          >
            <FaClock className="w-24 h-24 text-white/80 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Power Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Partner with P.A. Bawaya Group for unmatched expertise across all sectors with guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                 onClick={handleContact}
              className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
                Get Quote Now
              </button>
              <button 
              onClick={handleAbout}
              className="border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              Serving Nigeria & West Africa | Licensed & Certified Operations
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
