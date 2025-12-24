import { useState } from 'react';

const offices = [
  {
    city: 'Anambra HQ',
    address: '251/252 BLESSED LINE ATDA-NKPOR,ONITSHA ANAMBRA STATE-NIGERIA',
    phone: '+234 803 337 4082',
    email: 'Aniekwebawaya4@gmail.com',
  },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
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
    submitData.append('name', formData.name);
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
        setFormData({ name: '', email: '', phone: '', message: '' });
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
    <div className="min-h-screen bg-gray-100">
   
      <header className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 pt-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600">Business made effortless</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">Get in touch</h1>
            <p className="mt-4 text-base text-gray-700 sm:text-lg">Let's discuss how our team can streamline your supply chain</p>
            <p className="mt-4 text-xs text-gray-500">Average response time under 2 business hours.</p>
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

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <section className="relative rounded-3xl bg-white p-6 shadow-2xl shadow-gray-200 ring-1 ring-gray-200/50 xl:p-8">
            <div className="absolute inset-x-16 -top-16 h-32 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl" />
            <div className="relative">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-sm text-gray-600 mb-8">Share a few details about your shipments. Our team will reach out with next steps.</p>

              <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-1">
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

                <div className="md:col-span-2 md:col-span-1">
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
                  <div className={`md:col-span-2 p-4 rounded-2xl text-sm border transition-all ${
                    isSuccess
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800 shadow-md'
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}>
                    {message}
                  </div>
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
          </section>

          {/* [Aside section unchanged - same as before] */}
          <aside className="space-y-6">
            <section className="rounded-3xl bg-white/80 p-6 shadow-xl shadow-gray-200/30 ring-1 ring-gray-200/50 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-gray-900">Contact information</h3>
              <p className="mt-1 text-xs text-gray-600">Prefer to speak directly? Reach the operations team below.</p>
              <div className="mt-5 space-y-4 text-sm">
                <div><p className="text-xs font-medium uppercase tracking-wide text-gray-500">Phone</p><p className="mt-1 text-gray-900">+234 803 337 4082</p></div>
                <div><p className="text-xs font-medium uppercase tracking-wide text-gray-500">Email</p><p className="mt-1 text-gray-900"><a href="mailto:Aniekwebawaya4@gmail.com" className="hover:text-blue-600">Aniekwebawaya4@gmail.com</a></p></div>
                <div><p className="text-xs font-medium uppercase tracking-wide text-gray-500">Business hours</p><p className="mt-1 text-gray-900">Mon-Fri: 8AM–6PM (WAT)</p><p className="text-gray-700">Sat: 9AM–2PM (WAT)</p></div>
              </div>
            </section>
            <section className="rounded-3xl bg-white p-6 shadow-xl shadow-gray-200/30 ring-1 ring-gray-200/50 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-gray-900">Head office</h3>
              <ul className="mt-4 space-y-4 text-sm">
                {offices.map((office) => (
                  <li key={office.city} className="border-l border-gray-200 pl-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">{office.city}</p>
                    <p className="mt-1 text-gray-900">{office.address}</p>
                    <p className="mt-1 text-gray-800">{office.phone}</p>
                    <p className="text-gray-700">{office.email}</p>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
