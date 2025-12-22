const services = [
  {
    title: "",
    description: "Efficient transportation and supply chain management.",
    image: "public/img/a3e43b35-c995-4846-8b43-67553c60dd6f (2).jpeg",
  },
  {
    title: "Logistics Solutions",
    description: "Efficient transportation and supply chain management.",
    image: "public/img/f79efb5a-cc69-4a5c-9835-c501501498db.jpeg",
  },
];

export default function Subsidiaries() {
  return (
    <div className="p-2 bg-gray-100 ">
      {" "}
      <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Subsidiaries 
      </h2>{" "}
      <p className="mt-3 text-slate-500 max-w-xl mx-auto">
        {" "}
        .{" "}
      </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2  ">
        {services.map((service, index) => (
          <div key={index} className="relative  overflow-hidden shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className="h-56 w-full object-cover bg-cover bg-center"
            />

            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold text-lg">
                {service.title}
              </h3>
              <p className="text-slate-200 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
      <button className="mt-12 inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition ">
        Explore There Services →
      </button>
      </div>
    </div>
  );
}

