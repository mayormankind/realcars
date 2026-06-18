import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useVelocity, AnimatePresence } from "framer-motion";
import { servicesData } from "../utils/mockData";
import TopDownCar from "./TopDownCar";

export default function Services() {
  const servicesSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: servicesSectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll translation for top-down luxury car (relative percentage animation)
  const carTop = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "85%"]);

  // Velocity-based tilt — car leans with scroll momentum
  const scrollVelocity = useVelocity(scrollYProgress);
  const carRotate = useTransform(scrollVelocity, [-2, 0, 2], [12, 0, -12]);

  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Map progress to active service card index [0.12, 0.92] partitioned for 5 items
      if (latest < 0.12) {
        setActiveServiceIndex(null);
      } else if (latest >= 0.12 && latest < 0.28) {
        setActiveServiceIndex(0);
      } else if (latest >= 0.28 && latest < 0.44) {
        setActiveServiceIndex(1);
      } else if (latest >= 0.44 && latest < 0.6) {
        setActiveServiceIndex(2);
      } else if (latest >= 0.6 && latest < 0.76) {
        setActiveServiceIndex(3);
      } else if (latest >= 0.76 && latest < 0.92) {
        setActiveServiceIndex(4);
      } else {
        setActiveServiceIndex(null);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={servicesSectionRef}
      id="services"
      className="mx-auto w-full max-w-6xl px-6 py-24 relative overflow-hidden"
    >
      <div className="max-w-3xl space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-red-500">Premium Operations</span>
        <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Our Fleet Services</h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          A comprehensive system of luxury transit designed directly around client safety, comfort, and premium style.
        </p>
      </div>

      {/* Scroll-Linked highway and cards container */}
      <div className="relative mt-16 grid grid-cols-1 lg:grid-cols-[1fr_100px_1fr] gap-8 lg:gap-12">

        {/* Left Services Cards */}
        <div className="space-y-8 order-2 lg:order-1">
          {servicesData.slice(0, Math.ceil(servicesData.length / 2)).map((service, index) => {
            const isActive = activeServiceIndex === index;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative p-6 md:p-8 rounded-xl border transition-all duration-500 premium-shimmer overflow-hidden group cursor-pointer ${
                  isActive
                    ? "border-yellow-500/60 shadow-[0_0_30px_rgba(234,179,8,0.18)] bg-zinc-900/70 scale-[1.02]"
                    : "border-zinc-800/80 bg-zinc-900/40 shadow-md hover:border-red-500/50 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
                }`}
              >
                {/* Simulated headlight beam reflection overlay */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_left_center,rgba(254,240,138,0.28)_0%,rgba(234,179,8,0.12)_45%,rgba(234,179,8,0.02)_70%,transparent_100%)] pointer-events-none z-0"
                      style={{ mixBlendMode: "screen" }}
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-4">
                  {/* Service Image */}
                  <div className="relative w-full md:w-32 h-24 md:h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <h3
                      className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                        isActive
                          ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.55)]"
                          : "text-white group-hover:text-red-400"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className={`transition-colors duration-300 text-sm leading-relaxed ${
                      isActive ? "text-zinc-200" : "text-zinc-400"
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The Vertical Highway Lane - Centered */}
        <div className="relative justify-self-center w-3 md:w-10 bg-zinc-950 border-x border-zinc-900 rounded-full py-6 shadow-inner shadow-black/80 order-1 lg:order-2 my-8 lg:my-0">
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
            <TopDownCar className="w-7 h-12 md:w-12 md:h-22" />

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
        <div className="space-y-8 order-3">
          {servicesData.slice(Math.ceil(servicesData.length / 2)).map((service, index) => {
            const actualIndex = Math.ceil(servicesData.length / 2) + index;
            const isActive = activeServiceIndex === actualIndex;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative p-6 md:p-8 rounded-xl border transition-all duration-500 premium-shimmer overflow-hidden group cursor-pointer ${
                  isActive
                    ? "border-yellow-500/60 shadow-[0_0_30px_rgba(234,179,8,0.18)] bg-zinc-900/70 scale-[1.02]"
                    : "border-zinc-800/80 bg-zinc-900/40 shadow-md hover:border-red-500/50 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
                }`}
              >
                {/* Simulated headlight beam reflection overlay */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_right_center,rgba(254,240,138,0.28)_0%,rgba(234,179,8,0.12)_45%,rgba(234,179,8,0.02)_70%,transparent_100%)] pointer-events-none z-0"
                      style={{ mixBlendMode: "screen" }}
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10 flex flex-col md:flex-row-reverse md:items-start gap-4">
                  {/* Service Image */}
                  <div className="relative w-full md:w-32 h-24 md:h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <h3
                      className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                        isActive
                          ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.55)]"
                          : "text-white group-hover:text-red-400"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className={`transition-colors duration-300 text-sm leading-relaxed ${
                      isActive ? "text-zinc-200" : "text-zinc-400"
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
