import {
  FaIndustry,
  FaShoppingCart,
  FaOilCan,
  FaBuilding,
  FaTruck,
  FaLaptopCode,
  FaGlobe,
  FaPlane
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Industry() {
  const navigate = useNavigate();

 

  const handleContact = () => {
    navigate("/Contact");
  };

  const industries = [
    {
      name: "Logistics & Supply Chain",
      icon: <FaTruck className="text-white" size={28} />,
      description: "Supporting supply chain operations with reliable transportation and cargo handling solutions.",
    },
    {
      name: "Construction & Infrastructure",
      icon: <FaBuilding className="text-white" size={28} />,
      description: "Providing logistics, materials, and operational support for construction and site projects.",
    },
    {
      name: "Oil & Gas",
      icon: <FaOilCan className="text-white" size={28} />,
      description: "Specialized logistics and operational services for onshore and offshore oil and gas activities.",
    },
    {
      name: "ICT & Technology",
      icon: <FaLaptopCode className="text-white" size={28} />,
      description: "Delivering scalable ICT and tech solutions to modern businesses.",
    },
    {
      name: "Manufacturing & Production",
      icon: <FaIndustry className="text-white" size={28} />,
      description: "Supporting manufacturers with raw material sourcing and finished goods distribution.",
    },
    {
      name: "Retail & International Trade",
      icon: <FaGlobe className="text-white" size={28} />,
      description: "Helping retail businesses and traders move goods efficiently across borders.",
    },
    {
      name: "Aviation & Airline Services",
      icon: <FaPlane className="text-white" size={28} />,
      description: "Comprehensive airline support including cargo handling, flight logistics, and aviation operations.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* INDUSTRIES WE SERVE BADGE - ONLY ADDITION */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-8 py-1 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl mx-auto max-w-max">
            <span className="text-2xl">🌐</span>
            <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Industries We Serve
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Serving Diverse Industries


          </h2>
          <p className="mt-4 text-gray-600">
           We combine industry expertise, strategic insight, and a client focused approach to deliver reliable solutions that create long-term value for our partners.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition bg-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gray-400">
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

        {/* CTA Buttons Section */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleContact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition w-67"
            >
              Request a Consultation
            </button>
         
          </div>
        </div>

      </div>
    </section>
  );
}
