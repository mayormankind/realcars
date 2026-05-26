import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useVelocity, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
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
      <div className="relative mt-16 grid grid-cols-[36px_1fr] md:grid-cols-[100px_1fr] gap-4 md:gap-12 pl-1">

        {/* The Vertical Highway Lane */}
        <div className="relative justify-self-center w-3 md:w-10 bg-zinc-950 border-x border-zinc-900 rounded-full py-6 shadow-inner shadow-black/80">
          {/* Animated moving road dashes — scrolls continuously to feel like the car is driving */}
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] animate-road-scroll"
            style={{
              backgroundImage: "repeating-linear-gradient(to bottom, #52525b 0px, #52525b 12px, transparent 12px, transparent 24px)",
              backgroundSize: "2px 24px",
            }}
          />

          {/* Animated top-down luxury car linked to viewport scroll progress */}
          <motion.div
            style={{ top: carTop, rotate: carRotate }}
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

        {/* Services Cards Checklist */}
        <div className="space-y-8 pr-1">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeServiceIndex === index;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative p-6 md:p-8 rounded-xl border transition-all duration-500 premium-shimmer overflow-hidden group ${
                  isActive
                    ? "border-yellow-500/60 shadow-[0_0_30px_rgba(234,179,8,0.18)] bg-zinc-900/70 scale-[1.02]"
                    : "border-zinc-800/80 bg-zinc-900/40 shadow-md hover:border-red-500/30"
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
                  {/* Premium Icon Badge */}
                  <div
                    className={`self-start rounded-lg p-3 border transition-all duration-300 ${
                      isActive
                        ? "bg-yellow-500 text-black border-yellow-400 scale-110 shadow-md shadow-yellow-500/20"
                        : "bg-zinc-900 text-red-500 border-zinc-800 group-hover:text-white group-hover:bg-red-500"
                    }`}
                  >
                    <IconComponent size={24} className="transition-transform group-hover:scale-110" />
                  </div>

                  <div className="space-y-2">
                    <h3
                      className={`text-xl font-bold transition-colors duration-300 flex items-center gap-2 ${
                        isActive
                          ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.55)]"
                          : "text-white group-hover:text-red-400"
                      }`}
                    >
                      {service.title}
                      <ChevronRight
                        size={16}
                        className={`transition-all ${
                          isActive
                            ? "text-yellow-500 translate-x-1"
                            : "text-zinc-600 group-hover:text-red-500 group-hover:translate-x-1"
                        }`}
                      />
                    </h3>
                    <p className={`transition-colors duration-300 text-sm leading-relaxed max-w-3xl ${
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
