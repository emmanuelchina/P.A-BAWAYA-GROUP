export default function Partner() {
  const partners = [
    {
      name: "NELLYVAL GROUP",
      role: "Strategic Partner",
      description:
        "Provides end‑to‑end logistics support, ensuring seamless movement of goods across regional and international routes.",
      email: "nellyvalgroup@example.com",
      phone: "0800 123 4567",
      location: "Lagos, Nigeria", 
      image: "/images/nellyval-logo.png",
      link: "/partners/nellyval"
    },
    {
      name: "Nova Infrastructure Partner",
      role: "Technical Partner",
      description:
        "Offers engineering and infrastructure expertise for large‑scale construction and industrial projects.",
      email: "contact@nova-infra.com",
      phone: "0800 987 6543",
      location: "Abuja, Nigeria",  
      image: "/images/nova-logo.png",
      link: "/partners/nova"
    },
  ];

  const subsidiaries = [
    {
      name: "GREAT VACATION",
      focus: "TRAVELS & TOURS",
      description:
        ".Visa Services .Tour & Vacation .Airline Ticketing .Hotel Reservation .International Passport Facilitation",
      email: "greatvacations20@gmail.com",
      phone: "0816 385 7519 ,  0905 084 5077",
      location: "1st Floor, Akalaka Plaza, 127 Upper chime Enugu,Enugu State",  
      image: "/img/IMG_2766.png"
    },
    {
      name: "MOUNTVILLA",
      focus: "CONSTRUCTIONS",
      description:
        ".Road Construction & Rehabilitation .Building Construction .Site Preparation & Earthworks .Ronovation & Maintenance Projects .Manpower & Site Support Services ",
      email: "support@bawayaict.com",
      phone: "0801 876 5432",
      location: "Lagos, Nigeria", 
      image: "/img/IMG_2767.png"
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Our Partners & Subsidiaries
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Strategic alliances and owned entities that strengthen the <span className="text-indigo-600">P.A 
            BAWAYA GROUP</span> value chain.
          </p>
        </header>

        {/* Partners section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-900">
            Strategic Partners
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Key external organizations that collaborate with us to deliver
            integrated business and industrial solutions.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.link}
                className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm group hover:shadow-xl transition-all duration-300 no-underline focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              >
                {/* Image for partners */}
                <div className="mb-4 h-20 w-20 mx-auto group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain rounded-lg shadow-lg"
                  />
                </div>

                <h4 className="text-lg font-semibold text-slate-900  transition-colors">
                  {partner.name}
                </h4>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {partner.role}
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  {partner.description}
                </p>
                
                {/* Contact info for partners */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 mb-3">Contact:</p>
                  <p className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors mb-2">
                    📧 {partner.email}
                  </p>
                  <p className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors mb-2">
                    📞 {partner.phone}
                  </p>
                  <p className="text-sm font-medium text-slate-700 mb-3">
                    📍 {partner.location}
                  </p>
                  
                  {/* Click to view button */}
                  <div className="pt-3">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg shadow-sm border border-blue-200 inline-block transition-all duration-300 hover:shadow-md cursor-pointer">
                      CLICK TO VIEW
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Subsidiaries section */}
        <section>
          <h3 className="text-2xl font-semibold text-slate-900 group-hover:scale-110 transition-transform duration-500">
            Group Subsidiaries
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Fully or majority‑owned companies operating under the P.A BAWAYA
            GROUP umbrella.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {subsidiaries.map((sub) => (
              <article
                key={sub.name}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image for subsidiaries */}
                <div className="mb-4 h-20 w-20 mx-auto">
                  <img
                    src={sub.image}
                    alt={`${sub.name} logo`}
                    className="w-full h-full object-contain rounded-lg shadow-md"
                  />
                </div>
                
                <h4 className="text-lg font-semibold text-slate-900">
                  {sub.name}
                </h4>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {sub.focus}
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  {sub.description}
                </p>
                
                {/* Contact info for subsidiaries */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 mb-3">Contact:</p>
                  <p className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors mb-2">
                    📧 {sub.email}
                  </p>
                  <p className="text-sm font-mediumtext-slate-600 hover:text-blue-700 transition-colors mb-2">
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
      </div>
    </section>
  );
}
