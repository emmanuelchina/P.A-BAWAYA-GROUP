





const services = [

  {
    title: "Logistics Solutions",
    text: "Efficient transportation and supply chain management.",
    image: "/img/container-789488_1280.jpg",
  },
  {
    title: "Construction & Site Services",
    text: "Professional construction and manpower support.",
    image: "/img/construction-site-3555550_1280.jpg",
  },
  {
    title: "ICT & Technology Solutions",
    text: "Advanced ICT and tech services.",
    image: "/img/analytics-2606963_1280.jpg",
  },
  {
    title: "Oil & Gas Services",
    text: "Reliable oil and gas solutions.",
    image: "/img/refinery-3613522_1280.jpg",
  },
  {
    title: "International Trade & Business",
    text: "Global trade and business facilitation.",
    image: "/img/mixture-69523_1280.jpg",
  },
  {
    title: "Business Facilitation",
    text: "Strategic business support services.",
    image: "/img/startup-593341_1280.jpg",
  },
];





import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Showcase() {
 
 
 const navigate = useNavigate()

const handleClick = () => {
 navigate(  "/Services")
};
const [index, setIndex] = useState(0);
const [direction, setDirection] = useState(1);

useEffect(() => {
const interval = setInterval(() => {
setDirection(1);
setIndex((prev) => (prev + 1) % services.length);
}, 5000);

return () => clearInterval(interval);
}, []);

const service = services[index];

const slideVariants = {
initial: (dir) => ({
x: dir > 0 ? "105%" : "-105%",
opacity: 0.8
}),
animate: {
x: 0,
opacity: 1
},
exit: (dir) => ({
x: dir > 0 ? "-60%" : "60%",
opacity: 0
})
};

return (
<section className="flex justify-center items-center bg-gray-100">
<div className="relative w-[100vw] h-[45vh] overflow-hidden shadow-lg">
<AnimatePresence mode="popLayout">
<motion.div
key={index}
custom={direction}
initial="initial"
animate="animate"
exit="exit"
variants={slideVariants}
transition={{ duration: 0.8, ease: "easeInOut" }}
className="absolute inset-0"
>
{/* IMAGE */}
<img
src={service.image}
alt={service.title}
className="w-full h-full object-cover"
/>

{/* OVERLAY */}
<div className="absolute inset-0 bg-black/50" />

{/* TEXT */}
<div className="absolute inset-0 flex items-center justify-center px-6">
<div className="text-center text-white max-w-2xl">
<h2 className="text-3xl md:text-5xl font-bold mb-4">
{service.title}
</h2>
<p className="text-base md:text-lg mb-6">
{service.text}
</p>
<button
   onClick={handleClick}
    className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-opacity-90 transition-colors">
Learn More
</button>
</div>
</div>
</motion.div>
</AnimatePresence>
</div>
</section>
);
}