import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useVelocity, AnimatePresence } from "framer-motion";
import { servicesData } from "../utils/mockData";
import TopDownCar from "./TopDownCar";

export default function Services() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll translation for top-down luxury car
  const carTop = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "85%"]);

  // Velocity-based tilt — car leans with scroll momentum
  const scrollVelocity = useVelocity(scrollYProgress);
  const carRotate = useTransform(scrollVelocity, [-2, 0, 2], [12, 0, -12]);

  // Mobile: car position smoothly driven by scroll
  const mobileCarLeft = useTransform(scrollYProgress, [0, 1], ["calc(5% - 14px)", "calc(91% - 14px)"]);

  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileDirection, setMobileDirection] = useState(0);
  const prevMobileIndex = useRef(0);

  const cardVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  useEffect(() => {
    const segSize = 1 / servicesData.length;
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Desktop active card
      if (latest < 0.12) setActiveServiceIndex(null);
      else if (latest < 0.28) setActiveServiceIndex(0);
      else if (latest < 0.44) setActiveServiceIndex(1);
      else if (latest < 0.6) setActiveServiceIndex(2);
      else if (latest < 0.76) setActiveServiceIndex(3);
      else if (latest < 0.92) setActiveServiceIndex(4);
      else setActiveServiceIndex(null);

      // Mobile: scroll drives card index
      const nextIdx = Math.min(servicesData.length - 1, Math.max(0, Math.floor(latest / segSize)));
      if (nextIdx !== prevMobileIndex.current) {
        setMobileDirection(nextIdx > prevMobileIndex.current ? 1 : -1);
        prevMobileIndex.current = nextIdx;
        setMobileIndex(nextIdx);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={wrapperRef} id="services" style={{ height: `${(servicesData.length + 1) * 100}vh` }} className="relative">
      <section className="sticky top-0 h-screen overflow-hidden w-full">
        <div className="mx-auto w-full max-w-6xl h-full px-6 py-12 flex flex-col">

          <div className="max-w-3xl space-y-2 flex-shrink-0">
            <span className="text-xs uppercase font-extrabold tracking-widest text-red-500">Premium Operations</span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Our Fleet Services</h2>
            <p className="text-zinc-400 text-sm">
              A comprehensive system of luxury transit designed directly around client safety, comfort, and premium style.
            </p>
          </div>

      {/* MOBILE: Scroll-driven card carousel */}
      <div className="mt-6 lg:hidden flex-1 flex flex-col min-h-0">
        {/* Horizontal Road with scroll-driven car */}
        <div className="relative h-16 flex-shrink-0 bg-zinc-950 border-y border-zinc-900 overflow-hidden rounded-lg mb-5">
          <div className="absolute inset-0 flex items-center">
            <div
              className="w-full h-[2px] animate-road-scroll-h"
              style={{
                backgroundImage: "repeating-linear-gradient(to right, #facc15 0px, #facc15 8px, transparent 8px, transparent 24px)",
                backgroundSize: "24px 2px",
              }}
            />
          </div>

          {/* Stop markers for each service */}
          {servicesData.map((_, i) => (
            <div
              key={i}
              className={`absolute top-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 z-20 ${
                i === mobileIndex
                  ? "w-3 h-3 bg-red-500 border-red-400 shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                  : "w-2 h-2 bg-zinc-700 border-zinc-600"
              }`}
              style={{ left: `calc(${(i / (servicesData.length - 1)) * 86 + 5}% - 6px)` }}
            />
          ))}

          {/* Car driven by scrollYProgress */}
          <motion.div
            style={{ left: mobileCarLeft }}
            className="absolute top-1/2 -translate-y-1/2 z-10 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          >
            <TopDownCar className="w-7 h-12 rotate-90" />
            {/* Exhaust particles — drift left when driving right */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-1 flex flex-col gap-1 pointer-events-none">
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className="rounded-full bg-zinc-400/40"
                  style={{ width: 4 - i, height: 4 - i }}
                  animate={{ x: [0, 12], opacity: [0.55, 0], scale: [1, 2] }}
                  transition={{ repeat: Infinity, duration: 0.7, delay: i * 0.25, ease: "easeOut" }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll-driven card */}
        <div className="relative flex-1 overflow-hidden min-h-0">
          <AnimatePresence mode="wait" custom={mobileDirection}>
            <motion.div
              key={mobileIndex}
              custom={mobileDirection}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_left_center,rgba(254,240,138,0.1)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col gap-4">
                <div className="relative w-full flex-1 rounded-lg overflow-hidden min-h-0">
                  <img
                    src={servicesData[mobileIndex].image}
                    alt={servicesData[mobileIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">
                    {mobileIndex + 1} / {servicesData.length}
                  </span>
                </div>
                <div className="flex-shrink-0 space-y-1">
                  <h3 className="text-xl font-bold text-white">{servicesData[mobileIndex].title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">{servicesData[mobileIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 pt-4 flex-shrink-0">
          {servicesData.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === mobileIndex ? "w-6 bg-red-500" : "w-1.5 bg-zinc-700"
              }`}
            />
          ))}
        </div>

        <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest flex-shrink-0">Scroll to explore</p>
      </div>

      {/* DESKTOP: Scroll-linked layout within sticky viewport */}
      <div className="relative mt-6 hidden lg:grid lg:grid-cols-[1fr_100px_1fr] gap-8 flex-1 min-h-0">

        {/* Left Services Cards */}
        <div className="flex flex-col justify-around overflow-hidden">
          {servicesData.slice(0, Math.ceil(servicesData.length / 2)).map((service, index) => {
            const isActive = activeServiceIndex === index;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-4 rounded-xl border transition-all duration-500 premium-shimmer overflow-hidden group ${
                  isActive
                    ? "border-yellow-500/60 shadow-[0_0_24px_rgba(234,179,8,0.18)] bg-zinc-900/70 scale-[1.02]"
                    : "border-zinc-800/80 bg-zinc-900/40 hover:border-red-500/40"
                }`}
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_left_center,rgba(254,240,138,0.28)_0%,rgba(234,179,8,0.12)_45%,transparent_100%)] pointer-events-none z-0"
                      style={{ mixBlendMode: "screen" }}
                    />
                  )}
                </AnimatePresence>
                <div className="relative z-10 flex items-stretch gap-3 h-full">
                  <div className="relative w-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center space-y-1">
                    <h3 className={`text-sm font-bold transition-colors duration-300 ${
                      isActive ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.55)]" : "text-white group-hover:text-red-400"
                    }`}>{service.title}</h3>
                    <p className={`text-xs leading-relaxed line-clamp-2 transition-colors duration-300 ${
                      isActive ? "text-zinc-200" : "text-zinc-400"
                    }`}>{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The Vertical Highway Lane - Centered */}
        <div className="relative justify-self-center w-10 bg-zinc-950 border-x border-zinc-900 rounded-full shadow-inner shadow-black/80">
          {/* Animated moving road dashes — scrolls continuously to feel like the car is driving */}
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] animate-road-scroll"
            style={{
              backgroundImage: "repeating-linear-gradient(to bottom, #facc15 0px, #facc15 8px, transparent 8px, transparent 24px)",
              backgroundSize: "2px 24px",
              filter: "drop-shadow(0 0 4px rgba(250, 204, 21, 0.3))",
            }}
          />

          {/* Animated top-down luxury car linked to viewport scroll progress */}
          <motion.div
            style={{ top: carTop, rotate: carRotate }}
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            <TopDownCar className="w-12 h-20" />

            {/* Exhaust particles — drift downward from rear of car */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className="rounded-full bg-zinc-400/40"
                  style={{ width: 4 - i, height: 4 - i }}
                  animate={{ y: [0, 16], opacity: [0.55, 0], scale: [1, 2.2] }}
                  transition={{ repeat: Infinity, duration: 0.7, delay: i * 0.25, ease: "easeOut" }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Services Cards */}
        <div className="flex flex-col justify-around overflow-hidden">
          {servicesData.slice(Math.ceil(servicesData.length / 2)).map((service, index) => {
            const actualIndex = Math.ceil(servicesData.length / 2) + index;
            const isActive = activeServiceIndex === actualIndex;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-4 rounded-xl border transition-all duration-500 premium-shimmer overflow-hidden group ${
                  isActive
                    ? "border-yellow-500/60 shadow-[0_0_24px_rgba(234,179,8,0.18)] bg-zinc-900/70 scale-[1.02]"
                    : "border-zinc-800/80 bg-zinc-900/40 hover:border-red-500/40"
                }`}
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_right_center,rgba(254,240,138,0.28)_0%,rgba(234,179,8,0.12)_45%,transparent_100%)] pointer-events-none z-0"
                      style={{ mixBlendMode: "screen" }}
                    />
                  )}
                </AnimatePresence>
                <div className="relative z-10 flex flex-row-reverse items-stretch gap-3 h-full">
                  <div className="relative w-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center space-y-1">
                    <h3 className={`text-sm font-bold transition-colors duration-300 ${
                      isActive ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.55)]" : "text-white group-hover:text-red-400"
                    }`}>{service.title}</h3>
                    <p className={`text-xs leading-relaxed line-clamp-2 transition-colors duration-300 ${
                      isActive ? "text-zinc-200" : "text-zinc-400"
                    }`}>{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

        </div>
      </section>
    </div>
  );
}
