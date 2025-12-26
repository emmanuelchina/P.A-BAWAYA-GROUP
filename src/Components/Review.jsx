import { motion } from "framer-motion";

const reviews = [
  {
    name: "Mr Elochukwu Igwegbe",
    role: "International Business Owner",
    text: "P.A. BAWAYA GROUP is a top-tier logistics and trade solutions company. They handled everything from product arrival to clearing, saving us time, money, and stress.",
  },
  {
    name: "Jude Odoh",
    role: "Business Investor",
    text: "P.A. BAWAYA GROUP provided dependable ICT and tech solutions, combining strong technical expertise with timely project execution and responsive support that met our business needs effectively.",
  },
  {
    name: "Augustine Owunna",
    role: "Business Owner",
    text: "Exceptional logistics support from P.A. BAWAYA GROUP. They helped bring in our products, managed customs clearing perfectly, and kept us informed throughout the entire process.",
  },
  {
    name: "Mr Chris Oholi",
    role: "German Business Mogul",
    text: "Excellent Service from Start to finish.They handled importation, clearing and delivery seamlessly.Professional, reliable, and transparent throughout the process.Highly recommended for stress-free international trade.",
  },
  {
    name: "Mr Dominic Ekwe",
    role: "Business Owner",
    text:" Working with P.A BAWAYA GROUP was a game-changer. They simplified international shipping, handled all documentation, and delivered our goods safely without delays.",
  },
  {
    name: "Mr Chinedu Nwaku ",
    role: "Business owner",
    text: "Reliable and efficient importation services. They managed customs clearing, documentation, and delivery. Communication was clear timelines were met, and the entire process was smooth and worry- free.",
  },
 {
    name: "Mr Emmanuel Danjuma",
    role: "Business Owner",
    text: "P.A. BAWAYA GROUP provided dependable ICT and tech solutions, combining strong technical expertise with timely project execution and responsive support that met our business needs effectively",
  },
];

export default function Review() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* REVIEWS BADGE - ONLY ADDITION */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl mx-auto max-w-max">
            <span className="text-2xl">⭐</span>
            <span className="text-lg font-bold text-slate-900 tracking-wide uppercase">
              Reviews
            </span>
          </div>
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-slate-900"
        >
          What Our Clients Say
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-slate-600 mb-6">
                "{review.text}"
              </p>

              <div>
                <h4 className="font-semibold text-slate-900">
                  {review.name}
                </h4>
                <p className="text-sm text-slate-500">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
