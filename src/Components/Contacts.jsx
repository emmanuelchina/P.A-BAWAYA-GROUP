import { useState } from 'react';
import ContactExtras from './ContactExtra';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Building2,
  Clock,
  ChevronRight,
  ChevronDown,
  MessageCircle
} from 'lucide-react';

const offices = [
  {
    city: 'Anambra HQ',
    address: '251/252 BLESSED LINE ATDA-NKPOR,ONITSHA ANAMBRA STATE-NIGERIA',
    phone: '+234 803 337 4082',
    email: 'Aniekwebawaya4@gmail.com',
  },
  {
    city: 'Great Vacation HQ',
    address: '1st Floor, Akalaka Plaza, 127 Upper chime Enugu, Enugu State',
    phone: '+234 816 385 7519, +234 905 084 5077 ',
    email: 'greatvacations20@gmail.com'
  },
  {
    city: 'MountVilla HQ',
    address: 'Plot 883 Olu Awotesu Street, Jabi-Abuja',
    phone: '+234 803 708 3514',
    email: '', // Empty - no email
  },
];

const services = [
  { value: '', label: 'Select a service...' },
  { value: 'Logistics Solutions', label: 'Logistics Solutions' },
  { value: 'Construction & Site Jobs', label: 'Construction & Site Jobs' },
  { value: 'ICT & Technology', label: 'ICT & Technology' },
  { value: 'Oil & Gas Services', label: 'Oil & Gas Services' },
  { value: 'International Trade', label: 'International Trade' },
  { value: 'Airline Services', label: 'Airline Services' }
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const formRef = useRef(null);
  const asideRef = useRef(null);
  const formInView = useInView(formRef, { once: true, amount: 0.3 });
  const asideInView = useInView(asideRef, { once: true, amount: 0.3 });

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
    submitData.append('name', formData.name);
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
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setMessage('❌ ' + (json.message || 'Something went wrong. Please try again.'));
      }
    } catch (error) {
      setMessage('❌ Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  // ✅ PAGE LOAD ANIMATION ONLY (runs once on mount)
  const pageLoadVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-8 pt-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600">Business made effortless</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">Talk to Our Team</h1>
            <p className="mt-4 text-base text-gray-700 sm:text-lg">Our company offers end-to-end solutions in logistics, construction, ICT, oil and gas, international trade, and airline services built to help businesses operate smoothly and grow.</p>
            <p className="mt-4 text-xs text-gray-500">Average response time under 30 business minutes.</p>
          </div>
          <div className="mt-6 flex w-full max-w-md flex-col gap-4 rounded-2xl bg-white p-5 text-sm text-gray-900 shadow-xl shadow-gray-200/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">●</div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-800">24/7 Replies</p>
                <p className="text-xs text-gray-600">Real people monitoring everything.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main - PAGE LOAD ANIMATION ONLY */}
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-4">
        <motion.div 
          ref={formRef}
          initial="hidden"
          animate="visible"  // ✅ Always animates on page load
          variants={pageLoadVariants}
          className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
        >
          <motion.section 
            variants={pageLoadVariants}
            className="relative rounded-3xl bg-white p-6 shadow-2xl shadow-gray-200 ring-1 ring-gray-200/50 xl:p-8"
          >
            <div className="absolute inset-x-16 -top-16 h-32 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl" />
            <div className="relative">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-sm text-gray-600 mb-8">Share a few details about your shipments. Our team will reach out with next steps.</p>

              <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="text-xs font-medium uppercase tracking-wide text-gray-500 block mb-1">Full name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Smart Williams"
                    className={`w-full rounded-xl border px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 transition-colors ${
                      loading ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 focus:border-blue-500 focus:ring-blue-500/40 border-gray-200'
                    }`}
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="text-xs font-medium uppercase tracking-wide text-gray-500 block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className={`w-full rounded-xl border px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 transition-colors ${
                      loading ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 focus:border-blue-500 focus:ring-blue-500/40 border-gray-200'
                    }`}
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="text-xs font-medium uppercase tracking-wide text-gray-500 block mb-1">Service needed</label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className={`w-full appearance-none rounded-xl border px-3 py-2.5 pr-10 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 transition-colors bg-gray-50 focus:border-blue-500 focus:ring-blue-500/40 border-gray-200 hover:bg-gray-50 cursor-pointer ${
                        loading ? 'bg-gray-100 cursor-not-allowed' : ''
                      }`}
                    >
                      {services.map((service, index) => (
                        <option key={index} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs font-medium uppercase tracking-wide text-gray-500 block mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+234 810 000 0000"
                    maxLength={15}
                    pattern="[0-9+\-\s]*"
                    className={`w-full rounded-xl border px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 transition-colors ${
                      loading ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 focus:border-blue-500 focus:ring-blue-500/40 border-gray-200'
                    }`}
                    disabled={loading}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs font-medium uppercase tracking-wide text-gray-500 block mb-1">How can we help?</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Share routes, timelines, cargo types, or any challenges you are facing today."
                    className={`w-full resize-none rounded-xl border px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 transition-colors ${
                      loading ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 focus:border-blue-500 focus:ring-blue-500/40 border-gray-200'
                    }`}
                    disabled={loading}
                  />
                </div>

                {message && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`md:col-span-2 p-4 rounded-2xl text-sm border transition-all ${
                      isSuccess
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800 shadow-md'
                        : 'bg-red-50 border-red-200 text-red-800'
                    }`}
                  >
                    {message}
                  </motion.div>
                )}

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400/70 disabled:shadow-none md:col-span-1"
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
                      'Submit request'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.section>

          <motion.aside 
            ref={asideRef}
            initial="hidden"
            animate="visible"  // ✅ Always animates on page load
            variants={pageLoadVariants}
            className="space-y-6 lg:pt-8"
          >
            <motion.section 
              variants={pageLoadVariants}
              className="rounded-3xl bg-white/80 p-6 shadow-xl shadow-gray-200/30 ring-1 ring-gray-200/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <motion.h3 
                variants={pageLoadVariants}
                className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-4"
              >
                <Building2 className="h-5 w-5 text-blue-600" />
                Contact information
              </motion.h3>
              <motion.p 
                variants={pageLoadVariants}
                className="text-xs text-gray-600 mb-6"
              >
                Prefer to speak directly? Reach the operations team below.
              </motion.p>
              
              <motion.div 
                variants={pageLoadVariants}
                className="space-y-4 text-sm"
              >
                <motion.div 
                  variants={pageLoadVariants}
                  className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 hover:bg-blue-50 transition-all duration-200 border border-blue-100/50 hover:border-blue-200"
                >
                  <Phone className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Phone</p>
                    <p className="mt-1 font-medium text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                      +234 803 337 4082 <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all ml-1" />
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={pageLoadVariants}
                  className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-green-50/70 to-emerald-50/70 hover:bg-green-50 transition-all duration-200 border border-green-100/60 hover:border-green-200"
                >
                  <MessageCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">WhatsApp</p>
                    <a 
                      href="https://wa.me/2348033374082" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-1 font-medium text-gray-900 group-hover:text-green-600 transition-colors flex items-center gap-1"
                    >
                      Chat on WhatsApp <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all ml-1" />
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  variants={pageLoadVariants}
                  className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-emerald-50/50 to-green-50/50 hover:bg-emerald-50 transition-all duration-200 border border-emerald-100/50 hover:border-emerald-200"
                >
                  <Mail className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Email</p>
                    <p className="mt-1 font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                      <a href="mailto:Aniekwebawaya4@gmail.com" className="hover:underline flex items-center gap-1">
                        Aniekwebawaya4@gmail.com <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all ml-1" />
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={pageLoadVariants}
                  className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-orange-50/50 to-yellow-50/50 hover:bg-orange-50 transition-all duration-200 border border-orange-100/50 hover:border-orange-200"
                >
                  <Clock className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Business hours</p>
                    <p className="mt-1 text-gray-900">
                      <span className="font-medium">Mon-Fri:</span> 8AM–6PM (WAT)
                      <br />
                      <span className="font-medium">Sat:</span> 9AM–2PM (WAT)
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.section>

            <motion.section 
              variants={pageLoadVariants}
              className="rounded-3xl bg-white p-6 shadow-xl shadow-gray-200/30 ring-1 ring-gray-200/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <motion.h3 
                variants={pageLoadVariants}
                className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-4"
              >
                <MapPin className="h-5 w-5 text-indigo-600" />
                offices
              </motion.h3>
              
              <motion.ul 
                variants={pageLoadVariants}
                className="space-y-4 text-sm"
              >
                {offices.map((office, index) => (
                  <motion.li 
                    key={office.city}
                    variants={pageLoadVariants}
                    className="group flex items-start gap-3 border-l-2 border-indigo-200 pl-4 hover:border-indigo-400 transition-all duration-200 hover:pl-6"
                  >
                    <MapPin className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">{office.city}</p>
                      <p className="mt-1 text-gray-900 leading-relaxed">{office.address}</p>
                      <div className="mt-2 flex flex-col gap-1 text-sm">
                        <a href={`tel:${office.phone}`} className="group-hover:text-blue-600 flex items-center gap-1 font-medium text-gray-800 hover:underline transition-colors">
                          <Phone className="h-4 w-4" /> {office.phone}
                        </a>
                        {office.email && (
                          <a href={`mailto:${office.email}`} className="group-hover:text-emerald-600 flex items-center gap-1 font-medium text-gray-800 hover:underline transition-colors">
                            <Mail className="h-4 w-4" /> {office.email}
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>
          </motion.aside>
        </motion.div>
      </main>
      <ContactExtras/>
    </div>
  );
}
