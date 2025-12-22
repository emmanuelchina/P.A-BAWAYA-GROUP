import {
  FaTruckMoving,
  FaHardHat,
  FaLaptopCode,
  FaOilCan,
  FaGlobe,
} from "react-icons/fa";

import Industries from "./Companyserved";

const services = [
  {
    title: "Logistics Solutions",
    description:
      "Efficient movement and handling of goods across multiple channels.",
    icon: <FaTruckMoving className="text-blue-500" size={32} />,
    subs: [
      {
        title: "Sea Freight",
        text: "We transport goods safely and efficiently through ships, handling bulk cargo, containers, and international maritime logistics.",
      },
      {
        title: "Land Transportation",
        text: "Reliable road transport solutions ensuring timely delivery across cities, states, and borders.",
      },
      {
        title: "Clearing & Forwarding",
        text: "Professional customs clearing and documentation for smooth cargo release.",
      },
    ],
  },
  {
    title: "Construction / Site Jobs",
    description:
      "End-to-end construction support and site operations management.",
    icon: <FaHardHat className="text-orange-500" size={32} />,
    subs: [
      {
        title: "Site Preparation",
        text: "Land clearing, groundwork, and site setup for construction projects.",
      },
      {
        title: "Material Supply",
        text: "Timely supply of construction materials and equipment to sites.",
      },
      {
        title: "Project Support",
        text: "On-site coordination to keep projects on schedule.",
      },
    ],
  },
  {
    title: "ICT & Tech Solutions",
    description:
      "Modern technology solutions designed to support business growth.",
    icon: <FaLaptopCode className="text-purple-500" size={32} />,
    subs: [
      {
        title: "IT Infrastructure",
        text: "Setup and management of network systems and servers.",
      },
      {
        title: "Software & Systems",
        text: "Implementation of digital and business software solutions.",
      },
      {
        title: "Technical Support",
        text: "Ongoing troubleshooting and IT maintenance services.",
      },
    ],
  },
  {
    title: "Oil and Gas Services",
    description: "Specialized support services for oil and gas operations.",
    icon: <FaOilCan className="text-red-500" size={32} />,
    subs: [
      {
        title: "Equipment Logistics",
        text: "Safe transport of oil and gas equipment to operation sites.",
      },
      {
        title: "Operational Support",
        text: "Logistics and field support tailored for oil and gas projects.",
      },
      {
        title: "Safety & Compliance",
        text: "Strict adherence to industry safety and regulatory standards.",
      },
    ],
  },
  {
    title: "International Trade & Business Solutions",
    description:
      "Simplifying global trade and cross-border business operations.",
    icon: <FaGlobe className="text-green-500" size={32} />,
    subs: [
      {
        title: "Import & Export",
        text: "Complete import and export handling from sourcing to delivery.",
      },
      {
        title: "Trade Documentation",
        text: "Accurate handling of customs and trade documents.",
      },
      {
        title: "Business Consulting",
        text: "Advisory services for successful international expansion.",
      },
    ],
  },
];

{
  /* <div className="bg-gray-900 text-white py-24 text-center">
<FaBuilding className="mx-auto text-7xl mb-6 opacity-80" />
<h1 className="text-4xl md:text-5xl font-bold">
P.A Bawaya Group
</h1>
<p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
Delivering Solutions. Building Trust.
</p>
</div> */
}
export default function Servicereadmore() {
  return (
    <section className="w-full">
      <div className=" h-90 w-full py-24  bg-slate-900 flex items-center justify-center relative overflow-hidden">
        <div className="flex flex-col items-center space-y-4 z-10">
          <FaGlobe className="mx-auto text-7xl mb-6 opacity-80 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            P.A Bawaya Group
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Reliable Solutions. Exceptional Care.
          </p>
        </div>
      </div>

      <section className="w-full bg-gray-50 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              P.A Bawaya delivers integrated solutions across logistics,
              construction, technology, oil & gas, and international trade.
            </p>
          </div>

          <div className="grid gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
              >
                <div className="flex flex-col items-start gap-4 mb-6">
                  <div className="w-16 h-16 p-3 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.subs.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {sub.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Industries />
      </section>
    </section>
  );
}
