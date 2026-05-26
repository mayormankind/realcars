import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5,  suffix: "",  label: "Cars in Fleet" },
  { value: 3,  suffix: "+", label: "Years Operating" },
  { value: 24, suffix: "/7", label: "Dispatch Active" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setCount(current);
      if (current >= value) clearInterval(interval);
    }, 1400 / value);
    return () => clearInterval(interval);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="border-y border-zinc-900 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <span className="text-5xl sm:text-6xl font-black text-red-500" style={{ fontFamily: "Cinzel, serif" }}>
              <Counter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-[11px] uppercase tracking-widest font-bold text-zinc-400">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
