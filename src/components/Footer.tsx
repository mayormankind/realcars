import { useState } from "react";
import type { FormEvent } from "react";
// import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { 
  WhatsAppIcon, 
  InstagramIcon, 
  FacebookIcon, 
  TwitterIcon, 
  LinkedInIcon,
  HeadphonesIcon
} from "./icons";

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
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 text-sm">
      <div className="mx-auto w-full max-w-7xl px-6">
        
        {/* Main Footer Grid */}
        <div className="grid gap-8 sm:gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-6">
            <a href="#top" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Real Cars Transport Logo" className="h-12 w-auto" />
            </a>
            
            <p className="text-zinc-400 text-xs leading-relaxed">
              Premium car rental services offering luxury vehicles for self-drive, chauffeur services, and corporate rentals. Experience comfort and reliability.
            </p>
            
            <a href="tel:07062002717" className="flex items-center gap-2 text-white font-semibold text-sm hover:text-red-500 transition-colors">
              <Phone className="w-4 h-4 text-red-500" />
              0706 200 2717
            </a>
          </div>

          {/* Column 2: COMPANY */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-white">Company</h3>
            <ul className="space-y-3 text-zinc-400">
              <li><a className="hover:text-red-500 transition-colors" href="#about">About Us</a></li>
              <li><a className="hover:text-red-500 transition-colors" href="#fleet">Our Fleet</a></li>
              <li><a className="hover:text-red-500 transition-colors" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-red-500 transition-colors" href="#careers">Careers</a></li>
              <li><a className="hover:text-red-500 transition-colors" href="#blog">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: SERVICES */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-white">Services</h3>
            <ul className="space-y-3 text-zinc-400">
              <li><a className="hover:text-red-500 transition-colors" href="#services">Self Drive</a></li>
              <li><a className="hover:text-red-500 transition-colors" href="#services">Chauffeur Service</a></li>
              <li><a className="hover:text-red-500 transition-colors" href="#services">Interstate Trips</a></li>
              <li><a className="hover:text-red-500 transition-colors" href="#services">Airport Transfers</a></li>
              <li><a className="hover:text-red-500 transition-colors" href="#services">Corporate Rentals</a></li>
            </ul>
          </div>

          {/* Column 4: HELP & SUPPORT */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-white">Help & Support</h3>
            <ul className="space-y-3 text-zinc-400">
              <li><a className="hover:text-red-500 transition-colors" href="#faq">FAQs</a></li>
              <li><a className="hover:text-red-500 transition-colors" href="#booking">Booking Guide</a></li>
              <li><a className="hover:text-red-500 transition-colors" href="#terms">Terms & Conditions</a></li>
              <li><a className="hover:text-red-500 transition-colors" href="#privacy">Privacy Policy</a></li>
              <li><a className="hover:text-red-500 transition-colors" href="#cancellation">Cancellation Policy</a></li>
            </ul>
          </div>

          {/* Column 5: CONTACT US */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-white">Contact Us</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-xs">Beside Oyebade close, FUTA Southgate, Akure, Ondo State</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="tel:07062002717" className="hover:text-red-500 transition-colors">0706 200 2717</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="mailto:info@realcarstransport.com" className="hover:text-red-500 transition-colors">info@realcarstransport.com</a>
              </li>
              <li className="flex items-center gap-2">
                <HeadphonesIcon className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-xs">24/7 Customer Support</span>
              </li>
            </ul>
          </div>

          {/* Column 6: NEWSLETTER */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-white">Newsletter</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Subscribe for exclusive deals and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors"
              >
                Subscribe
              </button>
              {newsletterSuccess && (
                <p className="text-emerald-400 text-xs">Subscribed successfully!</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-900 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <p className="text-zinc-500 text-xs text-center lg:text-left">
              © {new Date().getFullYear()} Real Cars Transport. All rights reserved. Built with ❤️ for a better travel experience.
            </p>

            {/* Social Media & WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-4">
                <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider hidden sm:block">Follow Us</span>
                <div className="flex items-center gap-2">
                  <a href="https://instagram.com/realcarstransport" target="_blank" rel="noreferrer" className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500/40 border border-zinc-800 transition-all">
                    <InstagramIcon className="w-4 h-4 text-zinc-400 hover:text-pink-400" />
                  </a>
                  <a href="https://facebook.com/realcarstransportmondial" target="_blank" rel="noreferrer" className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/40 border border-zinc-800 transition-all">
                    <FacebookIcon className="w-4 h-4 text-zinc-400 hover:text-blue-400" />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-700 border border-zinc-800 transition-all">
                    <TwitterIcon className="w-4 h-4 text-zinc-400 hover:text-white" />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/40 border border-zinc-800 transition-all">
                    <LinkedInIcon className="w-4 h-4 text-zinc-400 hover:text-blue-400" />
                  </a>
                </div>
              </div>
              
              <a
                href="https://wa.me/2349039944383"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-zinc-900 border border-red-500 hover:border-red-400 text-white px-4 py-3 rounded-lg transition-all hover:bg-zinc-800 w-full sm:w-auto justify-center"
              >
                <WhatsAppIcon className="w-7 h-7 text-emerald-500" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Chat on WhatsApp</span>
                  <span className="text-[10px] text-zinc-400">Quick replies</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
