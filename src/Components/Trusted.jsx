import {
TruckIcon,
CpuChipIcon,
WrenchScrewdriverIcon,
GlobeAltIcon,
BuildingOffice2Icon,
PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const industries = [
{
name: "Logistics & Supply Chain",
icon: TruckIcon,
},
{
name: "Oil & Gas",
icon: WrenchScrewdriverIcon,
},
{
name: "ICT & Technology",
icon: CpuChipIcon,
},
{
name: "Construction & Infrastructure",
icon: BuildingOffice2Icon,
},
{
name: "Aviation Services",
icon: PaperAirplaneIcon,
},
{
name: "International Trade",
icon: GlobeAltIcon,
},
];

export default function IndustryTrust() {
return (
<section className="w-full bg-gray-100 py-16 px-6">
<div className="max-w-6xl mx-auto text-center">

{/* Heading */}
<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
Trusted Across Multiple Industries
</h2>
<p className="mt-3 text-gray-600 max-w-2xl mx-auto">
Delivering reliable solutions to businesses across key sectors
in Africa and beyond.
</p>

{/* Industries Grid */}
<div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
{industries.map((industry, index) => {
const Icon = industry.icon;
return (
<div
key={index}
className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white hover:shadow-sm transition"
>
<Icon className="h-8 w-8 text-indigo-500" />
<span className="text-sm text-gray-700 font-medium text-center">
{industry.name}
</span>
</div>
);
})}
</div>

</div>
</section>
);
}