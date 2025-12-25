// Footer.jsx
import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa6";
import { 
  MapPin, 
  Truck, 
  Droplet, 
  Plane, 
  HardDrive, 
  Building2, 
  Layers, 
  Code2,
  Home,      // ← ADD THIS
  Info,      // ← ADD THIS  
  Mail       // ← ADD THIS
} from "lucide-react";

export default function Contact() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        
    <div className="flex flex-col gap-4">
 
  <div className="flex flex-col gap-4">
  <div className="flex items-center gap-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl  font-bold text-xl shadow-lg">
     <img
     src="/img/IMG_2800.jpeg"
     alt="P.A bawaya group" />
    </div>
  
  </div>

</div>


  
  <p className="max-w-xl text-sm text-slate-400">
    We provide cutting-edge solutions, unparalleled proficiency, and exceptional outcomes.
  </p>
</div>


        {/* Bottom: link columns */}
        <div className="mt-10 grid gap-10 text-sm sm:grid-cols-2 md:grid-cols-4">
          
          {/* Quick Links - SAME STYLE AS SERVICES */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Layers className="h-5 w-5 text-orange-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 hover:text-white transition-all duration-200">
                <Home className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href="/">Home</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-all duration-200">
                <Info className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href="/About">About Us</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-all duration-200">
                <Layers className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href="/Services">Services</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-all duration-200">
                <Mail className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Layers className="h-5 w-5 text-orange-400" />
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 hover:text-white transition-all duration-200">
                <Truck className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href="/Services">Logistics Solution</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-all duration-200">
                <Droplet className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href="/Services">Oil & Gas Services</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-all duration-200">
                <Plane className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href="/Services">International Trade</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-all duration-200">
                <Building2 className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href="/Services">Construction Jobs</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-all duration-200">
                <Code2 className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href="/Services">ICT Solutions</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-all duration-200">
                <Plane className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href="/Services">Airline Services</a>
              </li>
            </ul>
          </div>

          {/* Head Office */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-base font-semibold text-white tracking-tight flex items-center gap-2">
              <MapPin className="h-5 w-5 text-orange-400" />
              Head Office
            </h3>
            <div className="space-y-4 text-sm">
              
              {/* PHONE & EMAIL FIRST */}
              <div className="flex gap-4 pt-2">
                <a href="tel:+2348033374082" className="group flex items-center gap-2 p-3 rounded-xl bg-slate-800/50 hover:bg-indigo-500/20 hover:text-indigo-300 border border-slate-700/50 hover:border-indigo-400 transition-all duration-300 flex-1">
                  <FaPhone className="h-5 w-5 flex-shrink-0" />
                  <span className="font-semibold text-slate-200 group-hover:text-white">+234 803 337 4082</span>
                </a>
                <a href="mailto:Aniekwebawaya4@gmail.com" className="group flex items-center gap-2 p-3 rounded-xl bg-slate-800/50 hover:bg-emerald-500/20 hover:text-emerald-300 border border-slate-700/50 hover:border-emerald-400 transition-all duration-300 flex-1">
                  <FaEnvelope className="h-5 w-5 flex-shrink-0" />
                  <span className="font-semibold text-slate-200 group-hover:text-white break-all">Aniekwebawaya4@gmail.com</span>
                </a>
              </div>
              
              {/* ADDRESS BELOW */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-slate-200 text-sm">251/252 BLESSED LINE ATDA-NKPOR</p>
                  <p className="text-slate-300 text-sm">ONITSHA, ANAMBRA STATE - NIGERIA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            ©  P.A. Bawaya Group. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}
