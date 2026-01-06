import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const services = [
{
title: "Logistics Solutions",
text: "Efficient transportation and supply chain management",
image: "/img/container-789488_1280.webp",
},
{
title: "Construction & Site Services",
text: "Professional construction and manpower support",
image: "/img/construction-site-3555550_1280.webp",
},
{
title: "ICT & Technology Solutions",
text: "Advanced ICT and tech services",
image: "/img/analytics-2606963_1280.webp",
},
{
title: "Oil & Gas Services",
text: "Reliable oil and gas solutions",
image: "/img/refinery-3613522_1280.webp",
},
{
title: "International Trade & Business",
text: "Global trade and business facilitation",
image: "/img/mixture-69523_1280.webp",
},
{
title: "Business Facilitation",
text: "Strategic business support services",
image: "/img/startup-593341_1280.webp",
},
{
title: "Airline Services",
text: "Comprehensive air freight and aviation logistics solutions worldwide",
image: "/img/airbus-4454338_1280.webp",
},
];

export default function Showcase() {
const navigate = useNavigate();
const [index, setIndex] = useState(0);
const [direction, setDirection] = useState(1);
const [isHovered, setIsHovered] = useState(false);

const handleClick = useCallback(() => {
navigate("/Services");
}, [navigate]);

useEffect(() => {
if (isHovered) return;
const interval = setInterval(() => {
setDirection(1);
setIndex((prev) => (prev + 1) % services.length);
}, 4000);
return () => clearInterval(interval);
}, [isHovered]);

const service = services[index];

const slideVariants = {
initial: (dir) => ({
x: dir > 0 ? "100%" : "-100%",
opacity: 0,
scale: 1.05,
}),
animate: {
x: 0,
opacity: 1,
scale: 1,
transition: {
x: { type: "tween", duration: 0.8, ease: "easeOut" },
opacity: { duration: 0.6 },
scale: { duration: 0.6 },
},
},
exit: (dir) => ({
x: dir > 0 ? "-100%" : "100%",
opacity: 0,
scale: 0.95,
transition: {
x: { type: "tween", duration: 0.6, ease: "easeIn" },
opacity: { duration: 0.4 },
scale: { duration: 0.4 },
},
}),
};

return (
<section className="relative bg-gray-100 py-12 lg:py-20 overflow-hidden">
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<motion.div
className="relative w-full h-[50vh] lg:h-[60vh] xl:h-[70vh] max-w-6xl mx-auto overflow-hidden shadow-2xl rounded-3xl"
whileHover={{ scale: 1.01 }}
transition={{ duration: 0.3 }}
>
<AnimatePresence custom={direction}>
<motion.div
key={index}
custom={direction}
variants={slideVariants}
initial="initial"
animate="animate"
exit="exit"
className="absolute inset-0 will-change-transform"
onHoverStart={() => setIsHovered(true)}
onHoverEnd={() => setIsHovered(false)}
>

<div className="relative w-full h-full">
<motion.img
src={service.image}
alt={service.title}
loading={index === 0 ? "eager" : "lazy"}
decoding="async"
className="w-full h-full object-cover brightness-75"
initial={{ scale: 1.05 }}
animate={{ scale: 1 }}
transition={{ duration: 0.8 }}
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
</div>


<motion.div
className="absolute top-6 left-6 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hidden lg:block"
animate={{ scale: [1, 1.05, 1] }}
transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
/>
<motion.div
className="absolute top-6 right-6 w-20 h-20 bg-slate-500/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl hidden lg:block"
animate={{ scale: [1, 1.03, 1] }}
transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>
<motion.div
className="absolute bottom-8 left-8 w-16 h-16 bg-slate-400/20 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg hidden lg:block"
animate={{ scale: [1, 1.04, 1] }}
transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
/>


<motion.div
className="absolute inset-0 flex items-center justify-center px-6 lg:px-12"
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}
transition={{ duration: 0.6 }}
>
<div className="text-center text-white max-w-4xl mx-auto">


<motion.h2
className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-2xl"
initial={{ y: 40, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.3, duration: 0.8 }}
>
{service.title}
</motion.h2>

<motion.p
className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90"
initial={{ y: 40, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.4, duration: 0.8 }}
>
{service.text}
</motion.p>

<motion.button
onClick={handleClick}
className="inline-flex items-center gap-2 bg-slate-500/90 hover:bg-gray-400 px-6 py-3 font-semibold text-white rounded-2xl shadow-xl transition"
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.98 }}
>
View Details 
</motion.button>
</div>
</motion.div>
</motion.div>
</AnimatePresence>


<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
{services.map((_, i) => (
<button
key={i}
onClick={() => {
setDirection(i > index ? 1 : -1);
setIndex(i);
}}
className={`rounded-full transition-all ${
i === index
? "w-8 h-2 bg-white"
: "w-2 h-2 bg-white/50"
}`}
/>
))}
</div>

<div className="absolute top-6 right-6 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white text-xs font-semibold">
{isHovered ? "⏸️ Paused" : "▶️ Auto"}
</div>
</motion.div>
</div>
</section>
);
}