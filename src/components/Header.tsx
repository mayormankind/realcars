import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "./icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Dynamic Header & Navigation */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isHeaderScrolled
            ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 py-3 shadow-lg shadow-black/30"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 text-lg font-black tracking-tighter sm:text-xl group">
            <span className="h-6 w-1 bg-red-500 rounded-full group-hover:scale-y-125 transition-transform duration-300" />
            <span className="text-white">REAL CARS</span>
            <span className="text-red-500 font-extrabold tracking-wide">TRANSPORT</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden gap-8 text-sm font-semibold text-zinc-400 md:flex items-center">
            <a className="hover:text-white transition-colors duration-200" href="#services">
              Services
            </a>
            <a className="hover:text-white transition-colors duration-200" href="#fleet">
              Fleet
            </a>
            <a className="hover:text-white transition-colors duration-200" href="#quote">
              Book Vehicle
            </a>
            <a className="hover:text-white transition-colors duration-200" href="#faq">
              FAQs
            </a>
            <a
              className="rounded-full bg-red-500 px-5 py-2 text-white font-bold text-xs hover:bg-red-600 transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20"
              href="#quote"
            >
              Order Instant Ride
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-zinc-400 hover:text-white focus:outline-none md:hidden transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-zinc-950/98 backdrop-blur-lg pt-24 px-6 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6 text-center text-lg font-bold">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-zinc-300 hover:text-white transition-colors"
                href="#services"
              >
                Our Services
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-zinc-300 hover:text-white transition-colors"
                href="#fleet"
              >
                Available Fleet
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-zinc-300 hover:text-white transition-colors"
                href="#quote"
              >
                Instant Booking
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-zinc-300 hover:text-white transition-colors"
                href="#faq"
              >
                FAQs
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 rounded-full bg-red-500 py-3 text-white transition-all shadow-md shadow-red-500/20 text-center"
                href="#quote"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Footer Drawer Socials */}
            <div className="flex flex-col items-center gap-4 border-t border-zinc-900 pt-8">
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Connect directly on mobile</p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/2349039944383"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900 rounded-full text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/realcarstransport"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900 rounded-full text-pink-400 hover:bg-pink-500 hover:text-black transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/realcarstransportmondial"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900 rounded-full text-blue-400 hover:bg-blue-500 hover:text-black transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
