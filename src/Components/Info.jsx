import React, { useState } from "react";

const Info = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const submitData = new FormData();
    submitData.append('access_key', '337bb2f6-b507-470b-b38d-17725ebebd1f');
    submitData.append('firstName', formData.firstName);
    submitData.append('lastName', formData.lastName);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('message', formData.message);
    submitData.append('from_name', 'P.A. Bawaya Group');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData,
      });

      const json = await response.json();

      if (json.success) {
        setIsSuccess(true);
        setMessage('✅ You have Contacted P.A. Bawaya Group! We\'ll get back to you within 2 hours.');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setMessage('❌ ' + (json.message || 'Something went wrong. Please try again.'));
      }
    } catch (error) {
      setMessage('❌ Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full bg-white shadow-sm rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-50 p-10 md:p-14 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Get in touch
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our company offers end-to-end solutions in logistics, construction, ICT, oil and gas, international trade, and airline services built to help businesses operate smoothly and grow.
            </p>
          </div>

          <div className="mt-10 space-y-6 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7a2 2 0 012-2h4a2 2 0 012 2v14M13 21V11a2 2 0 012-2h2a2 2 0 012 2v10M9 9h.01M9 13h.01M9 17h.01M17 13h.01M17 17h.01" />
                </svg>
              </span>
              <div>
                <p className="font-medium">251/252 BLESSED LINE ATDA-NKPOR</p>
                <p>ONITSHA ANAMBRA STATE-NIGERIA</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-2.1a1.5 1.5 0 00-1.264-1.48l-3.36-.56a1.5 1.5 0 00-1.3.43l-1.2 1.2a.75.75 0 01-.8.18 11.25 11.25 0 01-6.67-6.67.75.75 0 01.18-.8l1.2-1.2a1.5 1.5 0 00.43-1.3l-.56-3.36A1.5 1.5 0 006.6 2.25h-2.1A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <p>+234 803 337 4082</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7.5l8.25 5.25L19.5 7.5M4.5 5.25h15A1.5 1.5 0 0121 6.75v10.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.25V6.75a1.5 1.5 0 011.5-1.5z" />
                </svg>
              </span>
              <p>Aniekwebawaya4@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right side – form */}
        <div className="p-10 md:p-14 bg-white">
          <form className="space-y-6" onSubmit={onSubmit}>
            {message && (
              <div className={`p-4 rounded-lg text-sm border transition-all mb-6 ${
                isSuccess
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                {message}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                maxLength={15}
                pattern="[0-9+\-\s]*"
                placeholder="+234 810 000 0000"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 outline-none resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={loading}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-indigo-400 disabled:opacity-50 w-full md:w-auto"
              >
                {loading ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send message'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Info;
