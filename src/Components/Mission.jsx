import React from "react";

const MissionVision = () => {
return (
<section className="w-full bg-gray-100 py-16 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

{/* Mission */}
<div className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
<h3 className="text-sm uppercase tracking-wide text-white font-semibold mb-3">
Our Mission
</h3>
<p className="text-slate-300 leading-relaxed">
To deliver smart, reliable, and integrated solutions that empower
businesses, drive sustainable growth, and create long-term value
across every industry we serve.
</p>
</div>

{/* Vision */}
<div className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
<h3 className="text-sm uppercase tracking-wide text-white font-semibold mb-3">
Our Vision
</h3>
<p className="text-slate-300 leading-relaxed">
To be a trusted global business group recognized for excellence,
innovation, and impactful solutions across logistics, technology,
energy, aviation, and international trade.
</p>
</div>

</div>
</section>
);
};

export default MissionVision;