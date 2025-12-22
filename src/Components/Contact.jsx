// Footer.jsx
import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

export default function Contact() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
  
        <div className="flex flex-col gap-6 border-b border-slate-800 pb-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/10">
               <img
               src="/public/img/IMG_2726.png"
               alt="company logo"
               className="h-9 w-auto"
               />
                <span className="h-5 w-5 rounded-full bg-indigo-400" />
              </span>
            </div>
            <p className="max-w-xl text-sm text-slate-400">
             We provide cutting-edge solutions, unparalleled proficiency, and exceptional outcomes.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="rounded-full p-2 hover:text-white hover:bg-slate-800 transition">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-full p-2 hover:text-white hover:bg-slate-800 transition">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-full p-2 hover:text-white hover:bg-slate-800 transition">
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-full p-2 hover:text-white hover:bg-slate-800 transition">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-full p-2 hover:text-white hover:bg-slate-800 transition">
              <FaYoutube className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom: link columns */}
        <div className="mt-10 grid gap-10 text-sm sm:grid-cols-2 md:grid-cols-4">
          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white">Solutions</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Marketing</a></li>
              <li><a href="#" className="hover:text-white">Analytics</a></li>
              <li><a href="#" className="hover:text-white">Automation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Submit ticket</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Jobs</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Terms of service</a></li>
              <li><a href="#" className="hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white">License</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
