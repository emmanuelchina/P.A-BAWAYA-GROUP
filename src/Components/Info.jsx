import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react"; // npm i lucide-react

const Info = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    { value: '', label: 'Select a service...' },
    { value: 'Logistics Solutions', label: 'Logistics Solutions' },
    { value: 'Construction & Site Jobs', label: 'Construction & Site Jobs' },
    { value: 'ICT & Technology', label: 'ICT & Technology' },
    { value: 'Oil & Gas Services', label: 'Oil & Gas Services' },
    { value: 'International Trade', label: 'International Trade' },
    { value: 'Airline Services', label: 'Airline Services' }
  ];

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
     submitData.append('access_key', '4e3d3a25-fb70-4783-a6b3-1cc697ed5340');
    submitData.append('firstName', formData.firstName);
    submitData.append('lastName', formData.lastName);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('service', formData.service);
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
        setMessage('✅ You have Contacted P.A. Bawaya Group! We\'ll get back to you ASAP.');
        setFormData({ 
          firstName: '', 
          lastName: '', 
          email: '', 
          phone: '', 
          service: '',
          message: '' 
        });
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Info with Icons */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 p-10 md:p-14 flex flex-col justify-between relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5" />
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 drop-shadow-sm">
              Get in touch
            </h1>
            <p className="text-gray-600 leading-relaxed mb-12 max-w-lg">
              Our company offers end-to-end solutions in logistics, construction, ICT, oil and gas, international trade, and airline services built to help businesses operate smoothly and grow.
            </p>
          </div>

          <div className="mt-8 space-y-6 relative z-10">
            {/* Address */}
            <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:border-blue-200 hover:bg-white/80 transition-all duration-300 hover:shadow-md">
              <div className="flex-shrink-0 mt-1 p-2 bg-white/80 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900 text-lg">251/252 BLESSED LINE ATDA-NKPOR</p>
                <p className="text-gray-700 mt-1">ONITSHA ANAMBRA STATE-NIGERIA</p>
              </div>
            </div>

            {/* Phone - Clickable */}
            <a 
              href="tel:+2348033374082"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 border border-emerald-200/50 hover:border-emerald-300 hover:shadow-md transition-all duration-300 block"
            >
              <div className="flex-shrink-0 p-2 bg-emerald-100/80 rounded-xl shadow-sm group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                <Phone className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors">+234 803 337 4082</p>
                <p className="text-sm text-gray-600 group-hover:text-emerald-600 transition-colors">Tap to call</p>
              </div>
            </a>

            {/* Email - Clickable */}
            <a 
              href="mailto:Aniekwebawaya4@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200/50 hover:border-blue-300 hover:shadow-md transition-all duration-300 block"
            >
              <div className="flex-shrink-0 p-2 bg-blue-100/80 rounded-xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg group-hover:text-blue-700 transition-colors break-all">
                  Aniekwebawaya4@gmail.com
                </p>
                <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">Send email</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right side – form */}
        <div className="p-10 md:p-14 bg-white/90 backdrop-blur-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            {message && (
              <div className={`p-4 rounded-2xl text-sm border transition-all mb-6 shadow-sm ${
                isSuccess
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                {message}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-200 bg-gray-50/50 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-200 bg-gray-50/50 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-200 bg-gray-50/50 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  disabled={loading}
                />
              </div>

              {/* SERVICE SELECT INPUT */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service needed
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full appearance-none rounded-2xl border-2 border-gray-200 px-4 py-3 pr-10 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-200 bg-gray-50/50 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {services.map((service, index) => (
                      <option key={index} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
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
                className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-200 bg-gray-50/50 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none resize-none transition-all duration-200 bg-gray-50/50 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={loading}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full md:w-auto inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-sm font-bold text-white hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 disabled:cursor-not-allowed disabled:from-indigo-400 disabled:opacity-50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Info;
