import {
  FaTruckMoving,
  FaHardHat,
  FaLaptopCode,
  FaOilCan,
  FaGlobe,
  FaPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Industries from "./Companyserved";
import ToolsTechnologies from "./Toolsweuse";
import WhyChooseUs from "./Whychooseus";
export default function Servicereadmore() {
  const services = [
    {
      title: "Logistics Solutions",
      description:
        "Efficient movement and handling of goods across multiple channels.",
      icon: <FaTruckMoving className="text-blue-500" size={32} />,
      subs: [
        {
          title: "Sea Freight",
          text: "We transport goods safely and efficiently through ships, handling bulk cargo, containers, and international maritime logistics.",
        },
        {
          title: "Land Transportation",
          text: "Reliable road transport solutions ensuring timely delivery across cities, states, and borders.",
        },
        {
          title: "Clearing & Forwarding",
          text: "Professional customs clearing and documentation for smooth cargo release.",
        },
      ],
    },
    {
      title: "Construction / Site Jobs",
      description:
        "End-to-end construction support and site operations management.",
      icon: <FaHardHat className="text-orange-500" size={32} />,
      subs: [
        {
          title: "Site Preparation",
          text: "Land clearing, groundwork, and site setup for construction projects.",
        },
        {
          title: "Material Supply",
          text: "Timely supply of construction materials and equipment to sites.",
        },
        {
          title: "Project Support",
          text: "On-site coordination to keep projects on schedule.",
        },
      ],
    },
    {
      title: "ICT & Tech Solutions",
      description:
        "Modern technology solutions designed to support business growth.",
      icon: <FaLaptopCode className="text-purple-500" size={32} />,
      subs: [
        {
          title: "IT Infrastructure",
          text: "Setup and management of network systems and servers.",
        },
        {
          title: "Software & Systems",
          text: "Implementation of digital and business software solutions.",
        },
        {
          title: "Technical Support",
          text: "Ongoing troubleshooting and IT maintenance services.",
        },
      ],
    },
    {
      title: "Oil and Gas Services",
      description: "Specialized support services for oil and gas operations.",
      icon: <FaOilCan className="text-red-500" size={32} />,
      subs: [
        {
          title: "Equipment Logistics",
          text: "Safe transport of oil and gas equipment to operation sites.",
        },
        {
          title: "Operational Support",
          text: "Logistics and field support tailored for oil and gas projects.",
        },
        {
          title: "Safety & Compliance",
          text: "Strict adherence to industry safety and regulatory standards.",
        },
      ],
    },
    {
      title: "International Trade & Business Solutions",
      description:
        "Simplifying global trade and cross-border business operations.",
      icon: <FaGlobe className="text-green-500" size={32} />,
      subs: [
        {
          title: "Import & Export",
          text: "Complete import and export handling from sourcing to delivery.",
        },
        {
          title: "Trade Documentation",
          text: "Accurate handling of customs and trade documents.",
        },
        {
          title: "Business Consulting",
          text: "Advisory services for successful international expansion.",
        },
      ],
    },
    {
      title: "Airline Services",
      description:
        "Comprehensive air freight and aviation logistics solutions worldwide.",
      icon: <FaPlane className="text-indigo-500" size={32} />,
      subs: [
        {
          title: "Air Freight",
          text: "Fast and secure air cargo transportation for time-sensitive shipments globally.",
        },
        {
          title: "Flight Booking & Visa",
          text: "Complete flight booking services and visa processing support for seamless international travel.",
        },
        {
          title: "Express Delivery",
          text: "Priority air services for urgent deliveries with door-to-door tracking.",
        },
      ],
    },
  ];

  return (
    <section className="w-full">
      <section className="h-96 w-full py-24 bg-slate-900 flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="flex flex-col items-center space-y-6 z-10 max-w-7xl mx-auto px-4 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaGlobe className="mx-auto text-7xl mb-6 opacity-80 text-white" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            P.A. Bawaya Group
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Reliable Solutions. Exceptional Care.
          </motion.p>
        </motion.div>
      </section>

      <section className="w-full bg-gray-50 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
             <span className="text-indigo-600"> P.A. Bawaya Group</span> delivers integrated solutions across logistics,
              construction, technology, oil & gas, international trade, and
              airline services.
            </p>
          </div>

          <div className="grid gap-10 md:gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row items-start gap-6 mb-8">
                  <div className="w-20 h-20 p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shrink-0 shadow-lg hover:scale-110 hover:rotate-5 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.subs.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="group border border-gray-200/50 rounded-2xl p-6 bg-gray-50/50 hover:bg-white hover:border-gray-300 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
                    >
                      <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900">
                        {sub.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Industries />
        <ToolsTechnologies />
        <WhyChooseUs />
      </section>
    </section>
  );
}
