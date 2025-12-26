// Footer.jsx - FIXED SOCIAL LINKS + ALL FEATURES
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
  Globe,
  Search,
  ArrowUp
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
  FaWhatsapp
} from "react-icons/fa6";
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // ✅ SCROLL TO TOP FUNCTIONALITY
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-300 border-t-2 border-orange-500/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* TOP SECTION: Branding + Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-start">
          
          {/* Company Branding */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex  items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm">
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
            
            {/* ✅ FIXED SOCIAL MEDIA LINKS */}
            <div className="flex gap-2">
              {[
                { icon: FaFacebookF, href: '/', label: 'Facebook' },
                // ✅ FIXED INSTAGRAM LINK
                { icon: FaInstagram, href: 'https://www.instagram.com/greatvacationtravelandtours?igsh=MW1neDVuNHA0Zzd0dQ==', label: 'Instagram' },
                // ✅ FIXED TWITTER LINK
                { icon: FaXTwitter, href: 'https://x.com/Greatvacat78432?s=08', label: 'Twitter' },
                { icon: FaWhatsapp, href: 'https://wa.me/2348033374082', label: 'WhatsApp' },
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
            
            {/* Quick Search Area with Company Logo */}
            <div>
              <h3 className="mb-8 text-lg font-semibold text-white flex items-center gap-3">
                <Search className="h-7 w-7 text-orange-400 shrink-0" />
                Quick Search
              </h3>
              <div className="space-y-4">
                {/* Company Logo in Quick Search */}
              

                {/* Quick Links */}
                <nav className="space-y-3 pt-2">
                  {[
                    { icon: Home, href: '/', label: 'Home' },
                    { icon: Info, href: '/About', label: 'About Us' },
                    { icon: Layers, href: '/Services', label: 'Services' },
                    { icon: Building2, href: '/Industries', label: 'Company' },
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
        

          {/* FOOTER BOTTOM */}
          <div className="pt-12 border-t border-slate-800/50">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 text-center lg:text-left">
              <p className="text-sm text-slate-500 font-medium">
                © 2025 P.A. Bawaya Group. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ SCROLL TO TOP BUTTON */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-500/90 to-gray-600/90 border-2  shadow-2xl backdrop-blur-sm transition-all duration-300 hover:from-gray-600 hover:to-gray-700 hover:shadow-orange-500/50 hover:-translate-y-1 hover:scale-110 active:scale-95 ${
            showScrollTop 
              ? 'opacity-100 translate-y-0 shadow-2xl' 
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 text-white drop-shadow-lg" />
        </button>
      </div>
    </footer>
  );
}
