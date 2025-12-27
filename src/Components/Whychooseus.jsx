import {
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaGlobe,
  FaTruck,
  FaHeadset,
  FaChartLine,
  FaRocket, // Added missing import
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";





export default function WhyChooseUs() {
const navigate = useNavigate();

    const handleContact = () => {
    navigate("/Contact");
  };
  const reasons = [
    {
      icon: FaCheckCircle,
      title: "Proven Track Record",
      description:
        "Years of delivering excellence across Logistics, Construction, ICT, Oil & Gas, Airline Services, and International Trade with 99.9% on-time performance.",
      color: "text-emerald-500",
    },
    {
      icon: FaShieldAlt,
      title: "End-to-End Solutions",
      description:
        "One trusted partner for all your needs - from sea freight and air cargo to construction sites, IT infrastructure, and global trade compliance.",
      color: "text-blue-500",
    },
    {
      icon: FaClock,
      title: "Lightning Fast Delivery",
      description:
        "Real-time GPS tracking, AI-optimized routing, and 24/7 operations ensure your goods and projects move faster than the competition.",
      color: "text-orange-500",
    },
    {
      icon: FaGlobe,
      title: "Global Network",
      description:
        "Strategic partnerships worldwide covering every continent, major airports, seaports, and trade routes for seamless international operations.",
      color: "text-purple-500",
    },
    {
      icon: FaTruck,
      title: "Cost Optimization",
      description:
        "Advanced TMS/WMS systems, consolidated shipping, and volume discounts deliver up to 30% cost savings without compromising quality.",
      color: "text-indigo-500",
    },
    {
      icon: FaHeadset,
      title: "Dedicated Support",
      description:
        "24/7 customer service with dedicated account managers, live tracking portals, and instant response teams for peace of mind.",
      color: "text-pink-500",
    },
    {
      icon: FaChartLine,
      title: "Technology Driven",
      description:
        "Cutting-edge AI, IoT sensors, blockchain documentation, and custom dashboards give you complete visibility and control.",
      color: "text-cyan-500",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Choose P.A. Bawaya Group?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your strategic partner connecting ideas, infrastructure, Airline
            Services, and opportunities for sustainable growth across every
            industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 mx-auto">
                  <Icon className={`${reason.color} w-12 h-12`} />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center">
                  <div className="w-24 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                    <FaCheckCircle className="text-white w-7 h-7" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-24 grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: "10K+", label: "Projects Delivered" },
            { number: "500+", label: "Happy Clients" },
            { number: "99.9%", label: "Success Rate" },
            { number: "24/7", label: "Global Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-100 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <div className="text-gray-700 font-semibold text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >

        <button
              onClick={handleContact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition w-67"
            >
             Start Your Project
            </button>

        </motion.div>
      </div>
    </section>
  );
}
