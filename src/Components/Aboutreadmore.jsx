import React from "react";

const ReadMore = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text section - appears second on mobile, first on lg */}
          <div className="order-last lg:order-first">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
              Delivering Solution.
              <br className="hidden sm:block" />
              <span className="block">
                Building Trust.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase ">
                P.A. Bawaya Group
              </h2>
              <p className="pt-5">
                Our company is a diversified service company committed to delivering reliable, innovative, and result driven solutions across multiple industries. We operate with a clear mission: to support businesses and projects with the expertise, structure, and professionalism required to succeed in today's competitive environment.
              </p>
              <br />
              <p className="pt-5">
                Our services span logistics solutions, construction and site jobs, ICT and technology services, oil and gas support, and international trade and business solutions. By combining industry knowledge with strategic partnerships, we provide end-to-end services tailored to meet the unique needs of our clients.
              </p>
              <br />
              <p className="pt-5">
                At P.A Bawaya Group, we believe that every project deserves careful planning, secure handling, and timely execution. This is why we place strong emphasis on efficiency, confidentiality, and quality delivery in everything we do.
              </p>
            </p>
          </div>

          {/* Images section - appears first on mobile, second on lg */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="pointer-events-none absolute inset-y-6 right-4 left-4 lg:-right-10 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-pink-400/10 to-transparent blur-3xl" />

            <div className="relative flex gap-4 sm:gap-6">
              <div className="mt-10 space-y-4 sm:space-y-6">
                <div className="overflow-hidden rounded-3xl bg-gray-200 shadow-xl w-32 h-40 sm:w-40 sm:h-52 lg:w-44 lg:h-60">
                  <img
                    src="/img/container-817406_1280.jpg"
                    alt="Team presentation"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl bg-gray-200 shadow-xl w-32 h-40 sm:w-40 sm:h-52 lg:w-44 lg:h-60">
                  <img
                    src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Office collaboration"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="overflow-hidden rounded-3xl bg-gray-200 shadow-xl w-32 h-40 sm:w-40 sm:h-52 lg:w-44 lg:h-60">
                  <img
                    src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Woman working on laptop"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl bg-gray-200 shadow-xl w-32 h-40 sm:w-40 sm:h-52 lg:w-44 lg:h-60">
                  <img
                    src="https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="People having discussion"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
