import React from "react";

const Info = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full bg-white shadow-sm rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left side */}
        <div className="bg-gray-50 p-10 md:p-14 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Get in touch
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
          </div>

          <div className="mt-10 space-y-6 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-gray-400">
                {/* building icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 21h18M5 21V7a2 2 0 012-2h4a2 2 0 012 2v14M13 21V11a2 2 0 012-2h2a2 2 0 012 2v10M9 9h.01M9 13h.01M9 17h.01M17 13h.01M17 17h.01"
                  />
                </svg>
              </span>
              <div>
                <p className="font-medium">545 Mavis Island</p>
                <p>Chicago, IL 99191</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-400">
                {/* phone icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-2.1a1.5 1.5 0 00-1.264-1.48l-3.36-.56a1.5 1.5 0 00-1.3.43l-1.2 1.2a.75.75 0 01-.8.18 11.25 11.25 0 01-6.67-6.67.75.75 0 01.18-.8l1.2-1.2a1.5 1.5 0 00.43-1.3l-.56-3.36A1.5 1.5 0 006.6 2.25h-2.1A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <p>+1 (555) 234-5678</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-400">
                {/* mail icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 7.5l8.25 5.25L19.5 7.5M4.5 5.25h15A1.5 1.5 0 0121 6.75v10.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.25V6.75a1.5 1.5 0 011.5-1.5z"
                  />
                </svg>
              </span>
              <p>hello@example.com</p>
            </div>
          </div>
        </div>

        {/* Right side – form */}
        <div className="p-10 md:p-14 bg-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 outline-none resize-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Info;
