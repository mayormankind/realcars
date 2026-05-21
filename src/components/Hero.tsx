import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-screen overflow-hidden flex items-center bg-zinc-950 text-white pt-16"
    >
      <img
        src="/images/hero-car-rental.jpg"
        alt="Premium luxury car rental service fleet"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(239,68,68,0.12),rgba(255,255,255,0))]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl text-white">
            Luxury Car Hire <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400">
              You Can Trust.
            </span>
          </h1>

          <p className="max-w-xl text-base text-zinc-300 sm:text-lg leading-relaxed">
            Premium chauffeured rentals, customized self-drive, secure inter-state commutes, and vetted contract drivers. Elevating transport inside Ondo State and beyond.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-lg bg-red-500 px-7 py-3.5 text-sm font-extrabold text-white transition-all hover:bg-red-600 shadow-lg shadow-red-500/20 hover:scale-[1.02]"
            >
              Instant Reservation
              <ChevronRight size={16} className="ml-1" />
            </a>
            <a
              href="tel:07062002717"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/60 px-7 py-3.5 text-sm font-semibold text-zinc-300 hover:text-white transition-all hover:bg-zinc-800 hover:border-zinc-500"
            >
              Call Hotline
            </a>
          </div>
        </motion.div>
      </div>

      {/* Pulsing scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-500">Scroll down</span>
        <div className="w-5 h-8 border-2 border-zinc-700 rounded-full flex justify-center pt-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1.5 bg-red-500 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
