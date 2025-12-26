import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes, 
  FaPhone,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/Contact");
  };
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/25"
        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md"
    }`;

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/95 border-b border-gray-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Enhanced */}
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <img
                src="/img/IMG_2800.jpeg"
                alt="P.A. Bawaya Group"
                className="h-13 w-15.5 object-cover rounded-2xl  ring-indigo-100 group-hover:ring-indigo-200 transition-all duration-300"
              />
            </div>
            <div>
              <div className="font-black text-xl bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-800 bg-clip-text text-transparent leading-tight">
                P.A. BAWAYA
              </div>
              <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
                GROUP
              </div>
            </div>
          </motion.div>

          {/* Desktop Menu - Glassmorphism */}
          <motion.div 
            className="hidden lg:flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex space-x-1 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-3xl border border-gray-200/50 shadow-lg">
              <NavLink to="/" end className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/About" className={linkClass}>
                Company
              </NavLink>
              <NavLink to="/Services" className={linkClass}>
                Services
              </NavLink>
              <NavLink to="/Industries" className={linkClass}>
                Industries
              </NavLink>
              <NavLink to="/Contact" className={linkClass}>
                Contact
              </NavLink>
            </div>
          </motion.div>

          {/* Desktop CTA Button - FIXED: Phone is now clickable */}
          <motion.div 
            className="hidden lg:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* ✅ FIXED: Now clickable phone link */}
            <motion.a
              href="tel:+2348033374082"
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-green-600 cursor-pointer transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhone className="text-lg group-hover:scale-110 transition-transform duration-200" />
              <span className="font-semibold hover:underline">+234 803 337 4082</span>
            </motion.a>
            
            <motion.button 
              onClick={handleContact}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold px-8 py-3 rounded-2xl shadow-xl hover:shadow-2xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 text-sm tracking-wide border-0"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Quote
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 focus:outline-none shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {open ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu - Fullscreen overlay */}
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl py-8"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl mx-auto px-6 space-y-2"
            >
              <motion.div variants={itemVariants}>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/"
                  end
                  className={linkClass}
                >
                  Home
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/About"
                  className={linkClass}
                >
                  Company
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/Services"
                  className={linkClass}
                >
                  Services
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/Industries"
                  className={linkClass}
                >
                  Industries
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/Contact"
                  className={linkClass}
                >
                  Contact
                </NavLink>
              </motion.div>
              
              {/* Mobile CTA - Phone clickable too */}
              <motion.div variants={itemVariants} className="pt-4 border-t border-gray-200 mt-4">
                <motion.a
                  href="tel:+2348033374082"
                  onClick={() => setOpen(false)}
                  className="flex items-center space-x-3 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border border-green-200 text-green-800 font-semibold text-sm transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPhone className="text-xl" />
                  <span>Call Now: +234 803 337 4082</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
