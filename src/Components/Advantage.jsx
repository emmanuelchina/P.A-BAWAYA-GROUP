import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Proven Expertise",
    text: "We bring hands-on experience across logistics, construction, ICT, oil & gas, and international trade, delivering solutions that work in real-world conditions.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Reliable & Professional Team",
    text: "Our team operates with integrity, transparency, and accountability, ensuring every project meets high professional standards.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovative Solutions",
    text: "We combine modern technology with industry best practices to create smart, scalable, and future-ready solutions.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Client-Focused Approach",
    text: "Your goals come first. We listen, adapt, and work closely with you to deliver measurable value and long-term success.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Growth & Opportunity",
    text: "Partnering with us means growing with a forward-thinking company committed to sustainable success and continuous improvement.",
  },
];

export default function Advantage() {
  return (
    <section className="py-20 bg-gray-100">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {" "}
        {/* Header */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {" "}
          <h2 className="text-4xl font-bold text-slate-900">
            {" "}
            Work <span className="text-blue-600">With Us</span>{" "}
          </h2>{" "}
          <p className="mt-4 text-slate-600">
            {" "}
            At<span className="text-indigo-600"> P.A. Bawaya Group</span>, we don’t just deliver services — we build
            strong partnerships that drive success across multiple industries.{" "}
          </p>{" "}
        </motion.div>
        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl bg-white backdrop-blur border border-white/10 p-6 hover:bg-gray-300 transition"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-400 text-white
              flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-slate-900">
            Let’s Build Success Together
          </h3>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Whether you’re a client, partner, or professional looking to
            collaborate, we’re ready to work with you.
          </p>
       
        </motion.div>
      </div>
    </section>
  );
}
