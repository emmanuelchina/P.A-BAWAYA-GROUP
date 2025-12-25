

const ReadMore = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
       
          <div className="order-last lg:order-first">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
           <br></br>
              Delivering Solution,
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
           Founded in 2002 and incorporated with RC number 456212, P.A. Bawaya International Limited began with modest operations fulfilling essential consumer demands. Over the years, it expanded into regional and global business delivery, diversifying into vital sectors like logistics, construction, ICT/tech, oil/gas, airline services, and international trade. The company excels at serving local and foreign investors in both large- and small-scale ventures by partnering with strategic allies worldwide for swift, dependable services.

              </p>
              <br />
           
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
                    alt="GOODS"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl bg-gray-200 shadow-xl w-32 h-40 sm:w-40 sm:h-52 lg:w-44 lg:h-60">
                  <img
                    src="/img/refinery-3613522_1280.jpg"
                    alt="oil"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="overflow-hidden rounded-3xl bg-gray-200 shadow-xl w-32 h-40 sm:w-40 sm:h-52 lg:w-44 lg:h-60">
                  <img
                    src="/img/construction-site-3555550_1280.jpg"
                    alt="Construction"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl bg-gray-200 shadow-xl w-32 h-40 sm:w-40 sm:h-52 lg:w-44 lg:h-60">
                  <img
                    src="/img/2255f80e-4d4d-4826-8848-bf5710cdb089.jpeg"
                    alt="Plane"
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
