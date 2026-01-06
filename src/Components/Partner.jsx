import { FaUsers } from "react-icons/fa6";

export default function Partner() {
  const partners = [
    {
      name: "LIVIASOFT",
      role: "Strategic Partner",
      image: "/img/IMG_2776.jpeg", 
    },
    {
      name: "NELLYVAL GROUP",
      role: "Technical Partner",
      image: "/img/2E309C28-7FF1-4A46-AEF8-21EC59A74118.png",
    },
    {
      name: "Togo Mediterranean Consulting Mine",
      role: "Strategic Partner",
      image: "/img/file_0000000093dc720a9c02da6fed4a94c3.png",
    },
  ];

  // SEPARATE EDITABLE DESCRIPTIONS
  const subsidiaryDescriptions = {
    "GREAT VACATION": [
      "Visa Services",
      "Tour & Vacation", 
      "Airline Ticketing",
      "Hotel Reservation",
      "International Passport Facilitation"
    ],
    "MOUNTVILLA": [
      "Road Construction & Rehabilitation",
      "Building Construction",
      "Site Preparation & Earthworks",
      "Renovation & Maintenance Projects",
      "Manpower & Site Support Services"
    ]
  };

  const subsidiaries = [
    {
      name: "GREAT VACATION",
      focus: "TRAVELS & TOURS",
      email: "greatvacations20@gmail.com",
      phone: "0816 385 7519, 0905 084 5077",
      location: "1st Floor, Akalaka Plaza, 127 Upper chime Enugu, Enugu State",  
      image: "/img/Cloud-Travel-logo.png"
    },
    {
      name: "MOUNTVILLA",
      focus: "CONSTRUCTIONS",
      phone: "0803 708 3514",
      location: "Plot 883 Olu Awotesu Street, Jabi-Abuja", 
      image: "/img/Orange-White-Modern-Construction-Logo.png"
    },
  ];

  // HELPER FUNCTION TO RENDER DESCRIPTION
  const renderDescription = (subName) => {
    const services = subsidiaryDescriptions[subName] || [];
    return services.map((service, index) => (
      <span key={index} className="font-bold text-gray-700 block">
        .{service}
      </span>
    ));
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* PARTNERS & SUBSIDIARIES BADGE - ONLY ADDITION */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-8 py-1 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl mx-auto max-w-max">
            <span className="text-2xl text-blue-400"><FaUsers/></span>
            <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Partners & Subsidiaries
            </span>
          </div>
        </div>

        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Building Strong Alliances
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
           We work closely with trusted partners and affiliated entities to strengthen our capabilities, expand our reach, and deliver integrated solutions across our business operations.
          </p>
        </header>

        {/* Subsidiaries section - MOVED FIRST */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Group Subsidiaries
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mb-8">
            Fully or majority-owned companies operating under the P.A. BAWAYA GROUP umbrella.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsidiaries.map((sub) => (
              <article
                key={sub.name}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image for subsidiaries */}
                <div className="mb-4 h-20 w-20 mx-auto">
                  <img
                    src={sub.image}
                    alt={`${sub.name} logo`}
                    className="w-full h-full object-contain rounded-lg shadow-md"
                  />
                </div>
                
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {sub.name}
                </h4>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-3">
                  {sub.focus}
                </p>
                
                {/* SEPARATE DESCRIPTION RENDERING */}
                <div className="mt-3 mb-6 space-y-1 leading-relaxed ">
                  {renderDescription(sub.name)}
                </div>
                
                {/* Contact info - Conditional email display */}
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 mb-3 font-medium">Contact:</p>
                  {sub.email && (
                    <p className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors mb-2">
                      📧 {sub.email}
                    </p>
                  )}
                  <p className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors mb-2">
                    📞 {sub.phone}
                  </p>
                  <p className="text-sm font-medium text-slate-700">
                    📍 {sub.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Partners section - Image on LEFT */}
        <section>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Strategic Partners
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mb-8">
            Key external organizations that collaborate with us to deliver integrated business and industrial solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href="#" // Add your partner links
                className="group block rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 no-underline focus:outline-none focus:ring-4 focus:ring-blue-500/20 flex items-start gap-4 hover:no-underline"
              >
                {/* Image on LEFT */}
                <div className="flex-shrink-0 w-20 h-20 group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain rounded-lg shadow-lg"
                  />
                </div>

                {/* Content on RIGHT */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {partner.name}
                  </h4>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {partner.role}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
