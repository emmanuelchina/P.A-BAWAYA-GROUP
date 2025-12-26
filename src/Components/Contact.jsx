// Footer.jsx - WITH WHATSAPP BUTTON (FULLY FUNCTIONAL)
import { 
  MapPin, 
  Truck, 
  Droplet, 
  Plane, 
  Building2, 
  Layers, 
  Home,     
  Info,     
  Mail as MailIcon,
  Phone,
  Globe
} from "lucide-react";
import {
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 

  FaIndustry,
  FaBuilding,
  FaTruck as FaTruckIcon,
  FaLaptopCode,
  FaGlobe as FaGlobeIcon,
  FaWhatsapp // ✅ ADDED WHATSAPP ICON
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-300 border-t-2 border-orange-500/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* TOP SECTION: Branding + Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-start">
          
          {/* Company Branding */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm shadow-2xl border-2 border-orange-500/30 p-1">
                <img
                  src="/img/IMG_2800.jpeg"
                  alt="P.A Bawaya Group Logo"
                  className="h-14 w-19 rounded-xl object-cover border-2 border-white/20 shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-orange-50 to-orange-200 bg-clip-text text-transparent tracking-tight">
                  P.A Bawaya Group
                </h2>
                <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider">Excellence Across Industries</p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed max-w-md text-slate-400">
              Delivering excellence through careful planning, secure handling, and timely execution. 
              We prioritize efficiency, confidentiality, and quality across all sectors.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-2">
              {[
                { icon: FaFacebookF, href: '/', label: 'Facebook' },
                { icon: FaInstagram, href: '/', label: 'Instagram' },
                { icon: FaXTwitter, href: '/', label: 'Twitter' },
                { icon: FaWhatsapp, href: 'https://wa.me/2348033374082', label: 'WhatsApp' }, // ✅ WHATSAPP ADDED
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/50 hover:border-orange-400 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1 hover:scale-[1.05] flex-shrink-0"
                >
                  <Icon className="h-5 w-5 text-slate-400 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:col-span-2">
            
            {/* Quick Links */}
            <div>
              <h3 className="mb-8 text-lg font-semibold text-white flex items-center gap-3">
                <Layers className="h-7 w-7 text-orange-400 shrink-0" />
                Quick Links
              </h3>
              <nav className="space-y-3">
                {[
                  { icon: Home, href: '/', label: 'Home' },
                  { icon: Info, href: '/About', label: 'About Us' },
                  { icon: Layers, href: '/Services', label: 'Services' },
                  { icon: MailIcon, href: '/Contact', label: 'Contact' }
                ].map(({ icon: Icon, href, label }, index) => (
                  <a 
                    key={index}
                    href={href}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50 hover:text-white hover:shadow-md hover:shadow-orange-500/20 transition-all duration-300 font-medium text-slate-300 hover:-translate-x-2"
                  >
                    <Icon className="h-5 w-5 text-orange-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span>{label}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Industries */}
            <div>
              <h3 className="mb-8 text-lg font-semibold text-white flex items-center gap-3">
                <Globe className="h-7 w-7 text-orange-400 shrink-0" />
                Our Industries
              </h3>
              <nav className="space-y-2">
                {[
                  { icon: FaTruckIcon, label: 'Logistics & Supply Chain' },
                  { icon: FaBuilding, label: 'Construction & Infrastructure' },
                  { icon: Droplet, label: 'Oil & Gas' },
                  { icon: FaLaptopCode, label: 'ICT & Technology' },
                  { icon: FaIndustry, label: 'Manufacturing' },
                  { icon: FaGlobeIcon, label: 'Retail & International Trade' },
                  { icon: Plane, label: 'Aviation Services' }
                ].map(({ icon: Icon, label }, index) => (
                  <a 
                    key={index}
                    href="/Industries"
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50 hover:text-white hover:shadow-md hover:shadow-orange-500/20 transition-all duration-300 font-medium text-sm text-slate-300 hover:-translate-x-2"
                  >
                    <Icon className="h-4 w-4 text-orange-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="truncate">{label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* CONTACT SECTION - 4 COLUMNS WITH WHATSAPP */}
        <div className="border-t border-slate-800/50 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* Phone Card */}
            <a 
              href="tel:+2348033374082"
              className="group flex flex-col lg:flex-row items-start lg:items-center gap-4 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-indigo-900/30 hover:from-indigo-500/20 hover:to-purple-600/20 border-2 border-slate-700/50 hover:border-indigo-400 transition-all duration-400 hover:shadow-2xl hover:shadow-indigo-500/25 hover:-translate-y-3"
            >
              <div className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-indigo-500/20 group-hover:bg-indigo-500/50 transition-all duration-300 shrink-0">
                <Phone className="h-7 w-7 lg:h-8 lg:w-8 text-indigo-400 group-hover:text-indigo-300 group-hover:rotate-12 transition-all duration-300" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-sm font-semibold text-slate-400 group-hover:text-slate-200 mb-1">Call Us Anytime</p>
                <p className="text-xl lg:text-2xl font-black text-white group-hover:text-indigo-300 tracking-tight">+234 803 337 4082</p>
              </div>
            </a>

            {/* WhatsApp Card - NEW */}
            <a 
              href="https://wa.me/2348033374082?text=Hello%20P.A.%20Bawaya%20Group%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col lg:flex-row items-start lg:items-center gap-4 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-green-900/30 hover:from-green-500/20 hover:to-emerald-600/20 border-2 border-slate-700/50 hover:border-green-400 transition-all duration-400 hover:shadow-2xl hover:shadow-green-500/25 hover:-translate-y-3"
            >
              <div className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-green-500/20 group-hover:bg-green-500/50 transition-all duration-300 shrink-0">
                <FaWhatsapp className="h-7 w-7 lg:h-8 lg:w-8 text-green-400 group-hover:text-green-300 group-hover:rotate-12 transition-all duration-300" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-sm font-semibold text-slate-400 group-hover:text-slate-200 mb-1">WhatsApp Us</p>
                <p className="text-xl lg:text-2xl font-black text-white group-hover:text-green-300 tracking-tight">Quick Chat</p>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:Aniekwebawaya4@gmail.com"
              className="group flex flex-col lg:flex-row items-start lg:items-center gap-4 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-emerald-900/30 hover:from-emerald-500/20 hover:to-teal-600/20 border-2 border-slate-700/50 hover:border-emerald-400 transition-all duration-400 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-3"
            >
              <div className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-emerald-500/20 group-hover:bg-emerald-500/50 transition-all duration-300 shrink-0">
                <MailIcon className="h-7 w-7 lg:h-8 lg:w-8 text-emerald-400 group-hover:text-emerald-300 group-hover:rotate-6 transition-all duration-300" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-sm font-semibold text-slate-400 group-hover:text-slate-200 mb-1">Send Email</p>
                <p className="text-base lg:text-lg font-bold text-white group-hover:text-emerald-300 break-words max-w-[220px]">
                  Aniekwebawaya4@gmail.com
                </p>
              </div>
            </a>

            {/* Address Card */}
            <div className="group flex flex-col gap-6 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-orange-900/30 hover:from-orange-500/20 hover:to-amber-600/20 border-2 border-slate-700/50 hover:border-orange-400 transition-all duration-400 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-3 cursor-default">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/20 group-hover:bg-orange-500/50 transition-all duration-300">
                  <MapPin className="h-7 w-7 text-orange-400 group-hover:text-orange-300 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <h4 className="text-lg font-bold text-white">Head Office</h4>
              </div>
              <div className="space-y-2 pl-2">
                <p className="font-semibold text-slate-200 text-lg">251/252 BLESSED LINE</p>
                <p className="font-semibold text-slate-200 text-lg">ATDA-NKPOR, ONITSHA</p>
                <p className="text-orange-400 font-bold text-sm uppercase tracking-wider">ANAMBRA STATE, NIGERIA</p>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="pt-12 border-t border-slate-800/50">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 text-center lg:text-left">
              <p className="text-sm text-slate-500 font-medium">
                © 2025 P.A. Bawaya Group. All rights reserved.
              </p>
           
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
