import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaServer,
  FaTruck,
  FaChartLine,
  FaShieldAlt,
  FaCloud,
  FaMobileAlt,
  FaJsSquare,
  FaDocker,
  FaAws,
  FaMapMarkedAlt,  // Fixed: Correct import name
  FaSyncAlt,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";



export default function ToolsTechnologies() {
    const navigate = useNavigate();

    const handleContact = () => {
    navigate("/Contact");
  };
  const tools = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: FaReact, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: FaReact, color: "text-cyan-400" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Python", icon: FaPython, color: "text-orange-500" },
        { name: "Express.js", icon: FaServer, color: "text-indigo-500" },
      ],
    },
    {
      category: "Database & Cloud",
      items: [
        { name: "MongoDB", icon: FaDatabase, color: "text-green-600" },
        { name: "PostgreSQL", icon: FaDatabase, color: "text-blue-600" },
        { name: "AWS", icon: FaAws, color: "text-orange-400" },
        { name: "Docker", icon: FaDocker, color: "text-blue-400" },
      ],
    },
    {
      category: "Logistics Tech",
      items: [
        { name: "GPS Tracking", icon: FaMapMarkedAlt, color: "text-red-500" },  // Fixed icon
        { name: "Real-time Analytics", icon: FaChartLine, color: "text-purple-500" },
        { name: "API Integrations", icon: FaServer, color: "text-gray-500" },
      ],
    },
    {
      category: "Security & DevOps",
      items: [
        { name: "Security Protocols", icon: FaShieldAlt, color: "text-red-400" },
        { name: "Cloud Infrastructure", icon: FaCloud, color: "text-indigo-400" },
        { name: "CI/CD Pipelines", icon: FaSyncAlt, color: "text-green-400" },
      ],
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
     
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Tools & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Powering <span className="text-indigo-600">P.A. Bawaya Group's</span> operations with cutting-edge technology across logistics, aviation, construction, and enterprise solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {tools.map((toolCategory, index) => (
            <motion.div
              key={toolCategory.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-[1.02]"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                {toolCategory.category}
              </h3>
              
              <div className="space-y-6">
                {toolCategory.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`p-3 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                        <Icon className={`${item.color} w-8 h-8`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                        <p className="text-sm text-gray-300">Enterprise-grade solution</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
             onClick={handleContact}
           className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl text-white font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-105 cursor-pointer">
            <FaRocket className="w-6 h-6" />
            Ready to Transform Your Business?
          </div>
        </motion.div>
      </div>
    </section>
  );
}
