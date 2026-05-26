import { useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
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
            <div className="flex flex-col">
              <span className="text-white">REAL CARS</span>
              <span className="text-red-500 font-extrabold">TRANSPORT</span>
            </div>
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

          {/* Social channel cards — vertical list */}
          <div className="space-y-2">

            {/* WhatsApp — Bookings */}
            <a
              href="https://wa.me/2349039944383"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 hover:bg-emerald-950/20 transition-all duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all">
                <div className="relative">
                  <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                  <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 border-2 border-zinc-900 animate-pulse" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white text-xs font-bold leading-tight">WhatsApp Bookings</div>
                <div className="text-zinc-500 text-[10px] font-medium mt-0.5">+234 903 994 4383</div>
              </div>
              <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-emerald-400 flex-shrink-0 transition-colors" />
            </a>

            {/* WhatsApp — Support */}
            <a
              href="https://wa.me/2348120124847"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 hover:bg-emerald-950/20 transition-all duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all">
                <div className="relative">
                  <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                  <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 border-2 border-zinc-900 animate-pulse" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white text-xs font-bold leading-tight">WhatsApp Support</div>
                <div className="text-zinc-500 text-[10px] font-medium mt-0.5">+234 812 012 4847</div>
              </div>
              <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-emerald-400 flex-shrink-0 transition-colors" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/realcarstransport"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-pink-500/40 hover:bg-pink-950/20 transition-all duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/20 group-hover:border-pink-500/40 transition-all">
                <InstagramIcon className="w-5 h-5 text-pink-400" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white text-xs font-bold leading-tight">Instagram</div>
                <div className="text-zinc-500 text-[10px] font-medium mt-0.5">@realcarstransport</div>
              </div>
              <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-pink-400 flex-shrink-0 transition-colors" />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/realcarstransportmondial"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/40 hover:bg-blue-950/20 transition-all duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all">
                <FacebookIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white text-xs font-bold leading-tight">Facebook</div>
                <div className="text-zinc-500 text-[10px] font-medium mt-0.5">realcarstransportmondial</div>
              </div>
              <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-blue-400 flex-shrink-0 transition-colors" />
            </a>

            {/* Phone — direct call CTA */}
            <a
              href="tel:07062002717"
              className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center group-hover:bg-red-500/30 transition-all">
                <Phone className="w-5 h-5 text-red-400" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white text-xs font-bold leading-tight">Call Directly</div>
                <div className="text-zinc-400 text-[10px] font-medium mt-0.5">0706 200 2717</div>
              </div>
              <span className="flex-shrink-0 text-[9px] font-black uppercase tracking-wider text-red-400 bg-red-500/10 border border-red-500/20 rounded-full px-2 py-0.5">
                Live
              </span>
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
