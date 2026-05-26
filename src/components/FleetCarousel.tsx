import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, User, Layers } from "lucide-react";
import { fleet } from "../utils/mockData";
import type { FleetType } from "../utils/mockData";

interface FleetCarouselProps {
  onBookCar: (category: FleetType) => void;
}

const carImages: Record<string, string> = {
  "Toyota Prado":    "/images/cars/toyota-prado.jpg",
  "Toyota Corolla":  "/images/cars/toyota-corolla.jpg",
  "Honda CR-V":      "/images/cars/honda-crv.jpg",
  "Lexus RX 350":    "/images/cars/lexus-rx350.jpg",
  "Hyundai Elantra": "/images/cars/hyundai-elantra.jpg",
};

const SCROLL_AMOUNT = 310;

export default function FleetCarousel({ onBookCar }: FleetCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  return (
    <section className="py-24 border-t border-zinc-900 bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section header + arrow controls */}
        <div className="flex items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-lg">
            <span className="text-xs uppercase font-extrabold tracking-widest text-red-500">Visual Gallery</span>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Explore Our Fleet</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              From executive sedans to rugged SUVs — a vehicle tailored to every journey and budget.
            </p>
          </div>

          <div className="hidden md:flex gap-2 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`p-3 rounded-full border transition-all duration-200 cursor-pointer ${
                canScrollLeft
                  ? "border-zinc-700 bg-zinc-900 text-white hover:bg-red-500 hover:border-red-500"
                  : "border-zinc-800 bg-zinc-900/40 text-zinc-600 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`p-3 rounded-full border transition-all duration-200 cursor-pointer ${
                canScrollRight
                  ? "border-zinc-700 bg-zinc-900 text-white hover:bg-red-500 hover:border-red-500"
                  : "border-zinc-800 bg-zinc-900/40 text-zinc-600 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable cards row */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory carousel-scroll"
        >
          {fleet.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex-shrink-0 w-[268px] md:w-[295px] snap-start rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden group hover:border-red-500/30 transition-colors duration-300"
            >
              {/* Car image area */}
              <div className="relative h-44 bg-zinc-900 overflow-hidden flex items-center justify-center">
                <img
                  src={carImages[car.name]}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = parent.querySelector(".img-fallback") as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }
                  }}
                />

                {/* Fallback shown when image is missing */}
                <div
                  className="img-fallback absolute inset-0 hidden items-center justify-center flex-col gap-1"
                  style={{ display: "none" }}
                >
                  <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">{car.name}</span>
                  <span className="text-zinc-700 text-[10px]">Photo coming soon</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none" />
                <span className="absolute top-3 right-3 rounded-full bg-zinc-800/80 border border-zinc-700 px-2.5 py-0.5 text-[10px] font-bold text-zinc-300 backdrop-blur-sm">
                  {car.type}
                </span>
              </div>

              {/* Card content */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{car.name}</h3>
                  <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">{car.tagline}</p>
                </div>

                <div className="flex gap-5 text-xs font-semibold text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <User size={12} className="text-red-500" />
                    {car.seats} Seats
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers size={12} className="text-red-500" />
                    {car.transmission}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Daily Rate</span>
                    <span className="text-lg font-black text-red-400">{car.rate}</span>
                  </div>
                  <button
                    onClick={() => onBookCar(car.type)}
                    className="rounded-lg bg-red-500 text-xs font-black text-white px-4 py-2 hover:bg-red-600 transition-colors shadow-md shadow-red-500/10 cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile arrow controls */}
        <div className="flex md:hidden justify-center gap-3 mt-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`p-3 rounded-full border transition-all cursor-pointer ${
              canScrollLeft
                ? "border-zinc-700 bg-zinc-900 text-white"
                : "border-zinc-800 text-zinc-600 cursor-not-allowed"
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`p-3 rounded-full border transition-all cursor-pointer ${
              canScrollRight
                ? "border-zinc-700 bg-zinc-900 text-white"
                : "border-zinc-800 text-zinc-600 cursor-not-allowed"
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
