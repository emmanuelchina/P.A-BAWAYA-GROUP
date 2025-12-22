
// const stats = [
//   { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
//   { id: 2, name: 'Assets under holding', value: '$119 trillion' },
//   { id: 3, name: 'New users annually', value: '46,000' },
// ]

// export default function About() {
//   return (
//     <div className="overflow-hidden bg-gray-100 py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           {/* Image first on mobile, second on desktop */}
//           <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
//             <img
//               alt="P.A. Bawaya Group logistics operations"
//               src="/img/container-817406_1280.jpg"
//               width={2432}
//               height={1442}
//               className="w-full max-w-2xl rounded-xl shadow-2xl ring-1 ring-gray-900/5 sm:w-[36rem] md:-ml-4 lg:w-[28rem] lg:-ml-0 xl:w-[32rem]"
//               loading="lazy"
//             />
//           </div>
          
//           {/* Text second on mobile, first on desktop */}
//           <div className="order-2 lg:order-1 lg:pt-4 lg:pr-8">
//             <div className="lg:max-w-lg">
//               <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
//                 P.A. Bawaya Group
//               </h2>
//               <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//                 About Us
//               </h1>
//               <p className="mt-6 text-lg leading-8 text-gray-700">
//                 We provide cutting-edge solutions, unparalleled proficiency, and exceptional outcomes. 
//                 Our offerings include comprehensive logistics (ground, maritime/freight, air cargo, and 
//                 customs brokerage), aviation services, construction, ICT solutions, oil & gas support, 
//                 and international trade facilitation through import/export services.
//               </p>
//               <p className="mt-4 text-lg leading-8 text-gray-700">
//                 From optimizing processes to shaping tomorrow, we transform obstacles into 
//                 opportunities because excellence is our identity. We also distribute heavy-duty 
//                 machinery and transportation equipment, including new tires.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//         <div className="bg-gray-100 py-7 ">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
//           {stats.map((stat) => (
//             <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
//               <dt className="text-base/7 text-gray-600">{stat.name}</dt>
//               <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
//                 {stat.value}
//               </dd>
//             </div>
//           ))}
//         </dl>
//       </div>
//     </div>
//     </div>
    
//   );
// }



import {
FaBuilding,
FaTruck,
FaTools,
FaLaptopCode,
FaOilCan,
FaGlobe,
FaShieldAlt,
FaUsers,
FaChartLine,
FaHandshake,
FaCheckCircle,
} from "react-icons/fa";

const stats = [
{ value: "8+", label: "Years Experience" },
{ value: "120+", label: "Projects Delivered" },
{ value: "250+", label: "Clients Served" },
{ value: "5", label: "Core Services" },
{ value: "10+", label: "Strategic Partners" },
];

const services = [
{
icon: <FaTruck />,
title: "Logistics Solutions",
desc: "Efficient transportation, coordination, and supply-chain support.",
},
{
icon: <FaTools />,
title: "Construction & Site Jobs",
desc: "Road construction, buildings, site preparation, drainage, and manpower.",
},
{
icon: <FaLaptopCode />,
title: "ICT & Technology",
desc: "Modern IT solutions that improve productivity and connectivity.",
},
{
icon: <FaOilCan />,
title: "Oil & Gas Services",
desc: "Industry-compliant operational and technical support services.",
},
{
icon: <FaGlobe />,
title: "International Trade",
desc: "Cross-border trade facilitation and business solutions.",
},
];

const values = [
{
icon: <FaShieldAlt />,
title: "Confidentiality",
desc: "Strict protection of client information and operations.",
},
{
icon: <FaCheckCircle />,
title: "Reliability",
desc: "Consistent delivery and dependable execution.",
},
{
icon: <FaHandshake />,
title: "Integrity",
desc: "Transparent, honest, and ethical business practices.",
},
{
icon: <FaChartLine />,
title: "Growth Focused",
desc: "Solutions designed to scale and support long-term success.",
},
{
icon: <FaUsers />,
title: "Professional Team",
desc: "Experienced and skilled workforce across industries.",
},
];

export default function About() {
return (
<section className="w-full bg-gray-50 text-gray-800">
{/* HERO */}
<div className="bg-gray-900 text-white py-24 text-center">
<FaBuilding className="mx-auto text-7xl mb-6 opacity-80" />
<h1 className="text-4xl md:text-5xl font-bold">
P.A Bawaya Group
</h1>
<p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
Delivering Solutions. Building Trust.
</p>
</div>

{/* WHO WE ARE */}
<div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">
<div>
<h2 className="text-3xl font-bold mb-4">Who We Are</h2>
<p className="text-gray-600 leading-relaxed">
P.A Bawaya Group is a multi-service company providing
professional solutions across logistics, construction,
ICT & technology, oil and gas, and international trade.
We are driven by excellence, confidentiality, and results.
</p>
</div>
<div className="grid grid-cols-2 gap-6">
{stats.map((stat, i) => (
<div
key={i}
className="bg-white shadow rounded-xl p-6 text-center"
>
<h3 className="text-3xl font-bold text-gray-900">
{stat.value}
</h3>
<p className="text-gray-500 mt-2">{stat.label}</p>
</div>
))}
</div>
</div>

{/* SERVICES */}
<div className="bg-white py-20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-14">
What We Offer
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
{services.map((service, i) => (
<div
key={i}
className="border rounded-2xl p-8 hover:shadow-lg transition"
>
<div className="text-5xl text-gray-900 mb-6">
{service.icon}
</div>
<h3 className="text-xl font-semibold mb-3">
{service.title}
</h3>
<p className="text-gray-600">{service.desc}</p>
</div>
))}
</div>
</div>
</div>

{/* PROCESS */}
<div className="bg-gray-100 py-20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-14">
How We Work
</h2>

<div className="grid md:grid-cols-5 gap-8 text-center">
{[
"Consultation",
"Planning",
"Execution",
"Delivery",
"Support",
].map((step, i) => (
<div key={i}>
<div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gray-900 text-white text-xl font-bold mb-4">
{i + 1}
</div>
<p className="font-medium">{step}</p>
</div>
))}
</div>
</div>
</div>

{/* VALUES */}
<div className="py-20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-14">
Our Core Values
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
{values.map((value, i) => (
<div
key={i}
className="bg-white shadow rounded-xl p-8"
>
<div className="text-4xl mb-4 text-gray-900">
{value.icon}
</div>
<h3 className="text-xl font-semibold mb-2">
{value.title}
</h3>
<p className="text-gray-600">{value.desc}</p>
</div>
))}
</div>
</div>
</div>

{/* CTA */}
<div className="bg-gray-900 text-white py-20 text-center">
<h2 className="text-3xl font-bold mb-6">
Ready to Work With Us?
</h2>
<p className="text-gray-300 mb-8">
Partner with a team committed to quality, trust, and results.
</p>
<button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition">
Contact Us
</button>
</div>
</section>
);
}


