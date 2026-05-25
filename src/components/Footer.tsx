import { useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "./icons";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-8 text-sm">
      <div className="mx-auto w-full max-w-6xl px-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Column 1: Brand details */}
        <div className="space-y-5">
          <a href="#top" className="flex items-center gap-2 text-lg font-black tracking-tighter">
            <img src="images/logo.png" alt="REAL CARS TRANSPORT" className="h-12 w-auto" />
            {/* <span className="h-6 w-1 bg-red-500 rounded-full" /> */}
            <span className="text-white">REAL CARS</span>
            {/* <span className="text-red-500 font-extrabold">TRANSPORT</span> */}
          </a>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Akure's premier operator of premium travel, self-drive, and luxury transport. Redefining your standard of comfort since 2020.
          </p>
          <div className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-light" />
            24/7 Akure Dispatch Active
          </div>
        </div>

        {/* Column 2: Operations Nav */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase font-extrabold tracking-widest text-white">Operations</h3>
          <ul className="space-y-2.5 text-zinc-400 font-medium">
            <li>
              <a className="hover:text-red-500 transition-colors" href="#services">Our Fleet Services</a>
            </li>
            <li>
              <a className="hover:text-red-500 transition-colors" href="#fleet">Available Fleet</a>
            </li>
            <li>
              <a className="hover:text-red-500 transition-colors" href="#quote">Vehicle Booking</a>
            </li>
            <li>
              <a className="hover:text-red-500 transition-colors" href="#faq">Direct FAQs</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Click-to-Email */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase font-extrabold tracking-widest text-white">Contact Center</h3>
          <div className="space-y-3">
            {/* Address card */}
            <div className="p-3 bg-zinc-900/60 border border-zinc-900 rounded-lg space-y-1">
              <div className="text-[10px] uppercase font-bold text-zinc-500">Head Office</div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Beside Oyebade close, FUTA Southgate, Akure, Ondo State.
              </p>
            </div>

            {/* Clickable Email Redirect */}
            <a
              href="mailto:info@realcarstransport.com"
              className="block p-3 bg-zinc-900/60 border border-zinc-900 rounded-lg space-y-1 hover:border-red-500/50 hover:bg-zinc-900/80 transition-all duration-200 group"
            >
              <div className="text-[10px] uppercase font-bold text-zinc-500 group-hover:text-red-400 transition-colors">
                Email Support
              </div>
              <p className="text-zinc-300 font-semibold text-xs flex items-center gap-1.5 group-hover:text-white transition-colors">
                <Mail size={12} className="text-zinc-500 group-hover:text-red-500 transition-colors" />
                info@realcarstransport.com
              </p>
            </a>
          </div>
        </div>

        {/* Column 4: Premium Social Icons & Newsletter */}
        <div className="space-y-5">
          <h3 className="text-xs uppercase font-extrabold tracking-widest text-white">Direct Communication</h3>

          {/* Social icons grid */}
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            {/* WhatsApp Hotline 1 */}
            <a
              href="https://wa.me/2349039944383"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:bg-emerald-950/20 hover:border-emerald-500/30 transition-all text-zinc-300 hover:text-emerald-400 group"
            >
              <div className="relative">
                <WhatsAppIcon className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="truncate">WhatsApp 1</span>
            </a>

            {/* WhatsApp Hotline 2 */}
            <a
              href="https://wa.me/2348120124847"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:bg-emerald-950/20 hover:border-emerald-500/30 transition-all text-zinc-300 hover:text-emerald-400 group"
            >
              <div className="relative">
                <WhatsAppIcon className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="truncate">WhatsApp 2</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/realcarstransport"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:bg-pink-950/20 hover:border-pink-500/30 transition-all text-zinc-300 hover:text-pink-400 group"
            >
              <InstagramIcon className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="truncate">Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/realcarstransportmondial"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:bg-blue-950/20 hover:border-blue-500/30 transition-all text-zinc-300 hover:text-blue-400 group"
            >
              <FacebookIcon className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="truncate">Facebook</span>
            </a>

            {/* Phone Direct – spans full width */}
            <a
              href="tel:07062002717"
              className="col-span-2 flex items-center justify-center gap-2 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:bg-red-950/30 hover:border-red-500/40 transition-all text-zinc-300 hover:text-red-400 group"
            >
              <Phone className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
              <span>Call Center: 0706 200 2717</span>
            </a>
          </div>

          {/* VIP Newsletter Form */}
          <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-2">
            <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Join VIP Fleet List</span>
            <div className="flex gap-2">
              <input
                required
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-600 outline-none transition focus:border-red-500"
                placeholder="name@email.com"
              />
              <button
                type="submit"
                className="rounded-lg bg-red-500 px-3 py-2 text-xs font-bold text-white hover:bg-red-600 transition-colors cursor-pointer"
              >
                Join
              </button>
            </div>
            <AnimatePresence>
              {newsletterSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[10px] text-emerald-400 font-semibold"
                >
                  Successfully joined VIP club list!
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>

      {/* Global Footer Credits */}
      <div className="mx-auto w-full max-w-6xl px-6 mt-16 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-600 font-medium">
        © {new Date().getFullYear()} Real Cars Transport Mondial. Crafted for Luxury & Safety. All rights reserved.
      </div>
    </footer>
  );
}
