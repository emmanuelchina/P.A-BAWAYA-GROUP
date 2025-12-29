import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Services");
  };

  const handleContact = () => {
    navigate("/Contact");
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 * i, duration: 3, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center" >
    <img
    src="/img/containers-2018438_1280.webp"
    alt="Logistics Containers"
    className="absolute inset-0 w-full h-full object-cover"
    fetchPriority="high"/>
    <div className="absolute inset-0 bg-black/50 min-h-screen flex items-center">
      <div className="w-full">
        <motion.section
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.p
            custom={0}
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs sm:text-sm font-medium text-slate-600 shadow-sm"
          >
            P.A. BAWAYA GROUP
            <span className="h-1 w-1 rounded-full bg-blue-600" />
            Integrated Solutions
          </motion.p>

          <motion.h1
            custom={1}
            variants={item}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance text-white"
          >
            Integrated{" "}
            <span className="text-blue-600">Business &amp; Industrial</span>{" "}
            Solutions
          </motion.h1>

          <motion.p
            custom={2}
            variants={item}
            className="mt-6 text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto leading-relaxed"
          >
            Delivering excellence across Logistics, Construction, ICT, Oil &amp;
            Gas, and International Trade connecting ideas, infrastructure,
            AirLine Services and opportunities for sustainable growth.
          </motion.p>

          <motion.div
            custom={3}
            variants={item}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={handleClick}
              className="
              
              border border-slate-300 bg-white hover:bg-slate-50 text-white-800 font-semibold py-2.5 px-6 rounded-lg text-sm sm:text-base"
            >
              Explore our services
            </button>

            <button
              onClick={handleContact}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg text-sm sm:text-base shadow-md shadow-blue-500/30
              "
            >
              Request a Consultation
            </button>
          </motion.div>

          <motion.div
            custom={4}
            variants={item}
            className="mt-10 flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-slate-600"
          >
            <div>
              <span className="font-semibold text-white">6+ sectors</span>
              <span className="block text-white">
                Logistics, ICT, Oil &amp; Gas…
              </span>
            </div>
            <div>
              <span className="font-semibold text-white">
                Pan‑African reach
              </span>
              <span className="block text-white">
                Regional &amp; global trade links
              </span>
            </div>
            <div>
              <span className="font-semibold text-white">Client‑first</span>
              <span className="block text-white">
                Tailored industrial solutions
              </span>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>

    </div>
  );
}
