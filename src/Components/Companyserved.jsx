import {
FaIndustry,
FaShoppingCart,
FaOilCan,
FaBuilding,
FaTruck,
FaLaptopCode,
FaGlobe
} from "react-icons/fa";

export default function Industries() {
const industries = [
{
name: "Logistics & Supply Chain",
icon: <FaTruck className="text-blue-500" size={28} />,
description:
"Supporting supply chain operations with reliable transportation and cargo handling solutions.",
},
{
name: "Construction & Infrastructure",
icon: <FaBuilding className="text-orange-500" size={28} />,
description:
"Providing logistics, materials, and operational support for construction and site projects.",
},
{
name: "Oil & Gas",
icon: <FaOilCan className="text-red-500" size={28} />,
description:
"Specialized logistics and operational services for onshore and offshore oil and gas activities.",
},
{
name: "ICT & Technology",
icon: <FaLaptopCode className="text-purple-500" size={28} />,
description:
"Delivering scalable ICT and tech solutions to modern businesses.",
},
{
name: "Manufacturing & Production",
icon: <FaIndustry className="text-green-500" size={28} />,
description:
"Supporting manufacturers with raw material sourcing and finished goods distribution.",
},
{
name: "Retail & International Trade",
icon: <FaGlobe className="text-teal-500" size={28} />,
description:
"Helping retail businesses and traders move goods efficiently across borders.",
},
];

return (
<section className="bg-white py-20 px-4 md:px-10">
<div className="max-w-7xl mx-auto">

{/* Section Header */}
<div className="text-center max-w-3xl mx-auto mb-14">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
Industries We Serve
</h2>
<p className="mt-4 text-gray-600">
P.A Bawaya delivers tailored solutions across multiple industries,
combining expertise, technology, and operational excellence.
</p>
</div>

{/* Industries Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{industries.map((industry, index) => (
<div
key={index}
className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
>
<div className="flex items-center gap-4 mb-4">
<div className="p-3 rounded-xl bg-gray-100">
{industry.icon}
</div>
<h3 className="text-xl font-semibold text-gray-800">
{industry.name}
</h3>
</div>

<p className="text-gray-600 text-sm">
{industry.description}
</p>
</div>
))}
</div>
</div>
</section>
);
}