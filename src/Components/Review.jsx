import { motion } from "framer-motion";

const reviews = [
  {
    name: "John Williams",
    role: "Business Owner",
    text: "Excellent service and great attention to detail. Highly recommended!",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    text: "Very professional team. The result exceeded my expectations.",
  },
  {
    name: "Michael Brown",
    role: "Startup Founder",
    text: "Clean design, fast delivery, and amazing communication.",
  },
    {
    name: "Uche Emmanuel",
    role: "Business Owner",
    text: "Excellent Service from Start to finish.They handled importation, clearing and delivery seamlessly.Professional, reliable, and transparent throughout the process.Highly recommended for stress-free international trade.",
  },
    {
    name: "Michael Brown",
    role: "Startup Founder",
    text: "Clean design, fast delivery, and amazing communication.",
  },
    {
    name: " Smart kennedy ",
    role: "Business owner",
    text: "Reliable and efficient importation services. They managed customs clearing, documentation, and delivery. Communication was clear timelines were met, and the entire process was smooth and worry- free.",
  },
];

export default function Review() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
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

        {/* Reviews */}
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
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-slate-600 mb-6">
                “{review.text}”
              </p>

              {/* Author */}
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