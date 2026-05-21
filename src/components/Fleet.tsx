import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { User, Layers } from "lucide-react";
import { fleet } from "../utils/mockData";
import type { FleetType } from "../utils/mockData";

interface FleetProps {
  onBookCar: (category: FleetType) => void;
}

export default function Fleet({ onBookCar }: FleetProps) {
  const [activeType, setActiveType] = useState<"All" | FleetType>("All");

  const filteredFleet = useMemo(() => {
    if (activeType === "All") return fleet;
    return fleet.filter((car) => car.type === activeType);
  }, [activeType]);

  return (
    <section id="fleet" className="bg-zinc-950 py-24 border-y border-zinc-900">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-red-500">Premium Garage</span>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Available Fleet</h2>
            <p className="text-zinc-400 text-sm">Select a category below to explore rates and features.</p>
          </div>

          {/* Advanced Filter Buttons with sliding selection pill */}
          <div className="inline-flex rounded-full bg-zinc-900 p-1 border border-zinc-800 self-start md:self-auto overflow-x-auto max-w-full">
            {(["All", "Luxury", "SUV", "Economy"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                className={`relative rounded-full px-5 py-2 text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeType === type ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {activeType === type && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 rounded-full bg-red-500 shadow-lg shadow-red-500/15"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                )}
                <span className="relative z-10">{type}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Pricing Table view (hidden on small/medium mobile formats) */}
        <div className="hidden lg:block mt-12 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/70 text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                <th className="px-6 py-5">Car Model</th>
                <th className="px-6 py-5">Category</th>
                <th className="px-6 py-5">Seats</th>
                <th className="px-6 py-5">Transmission</th>
                <th className="px-6 py-5">Daily Rate</th>
                <th className="px-6 py-5 text-right">Reservation</th>
              </tr>
            </thead>
            <tbody>
              {filteredFleet.map((car, idx) => (
                <motion.tr
                  key={car.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b border-zinc-900 transition hover:bg-zinc-900/40"
                >
                  <td className="px-6 py-5">
                    <div>
                      <div className="font-extrabold text-white text-base">{car.name}</div>
                      <div className="text-xs text-zinc-500 mt-0.5">{car.tagline}</div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-semibold text-zinc-300 border border-zinc-700">
                      {car.type}
                    </span>
                  </td>
                  <td className="px-6 py-5 font-semibold text-zinc-300">{car.seats} Passengers</td>
                  <td className="px-6 py-5 text-zinc-400">{car.transmission}</td>
                  <td className="px-6 py-5">
                    <span className="font-black text-red-400 text-lg">{car.rate}</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => onBookCar(car.type)}
                      className="inline-flex items-center justify-center rounded-md bg-zinc-900 border border-zinc-800 text-xs font-bold text-white px-4 py-2 hover:bg-red-500 hover:border-red-500 transition-all duration-200 cursor-pointer"
                    >
                      Book Now
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Premium Card Layout (highly touch responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:hidden">
          {filteredFleet.map((car, idx) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between gap-6 hover:border-red-500/30 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{car.name}</h3>
                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-bold text-zinc-400 border border-zinc-700">
                    {car.type}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{car.tagline}</p>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-900 text-xs font-semibold text-zinc-400">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-red-500" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-red-500" />
                    <span>{car.transmission}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-zinc-900">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Daily Rate</span>
                  <span className="text-lg font-black text-red-400">{car.rate}</span>
                </div>
                <button
                  onClick={() => onBookCar(car.type)}
                  className="rounded-lg bg-red-500 text-xs font-black text-white px-5 py-2.5 hover:bg-red-600 transition-colors shadow-md shadow-red-500/10 cursor-pointer"
                >
                  Book Car
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
