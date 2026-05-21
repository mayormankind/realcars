import { Crown, Key, Compass, ShieldCheck, Coins } from "lucide-react";

export type FleetType = "Luxury" | "SUV" | "Economy";

export interface ServiceItem {
  title: string;
  description: string;
  icon: typeof Crown | typeof Key | typeof Compass | typeof ShieldCheck | typeof Coins;
  color: string;
  glow: string;
}

export interface FleetItem {
  name: string;
  type: FleetType;
  seats: number;
  transmission: string;
  rate: string;
  tagline: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const servicesData: ServiceItem[] = [
  {
    title: "Luxury car hire services",
    description: "Arrive in style. Experience premium comfort in our top-tier chauffeur-driven luxury sedans and executive SUVs, tailored for red-carpet events, delegations, and elite arrivals.",
    icon: Crown,
    color: "from-yellow-500/10 via-zinc-900 to-zinc-950",
    glow: "shadow-yellow-500/5 hover:shadow-yellow-500/20"
  },
  {
    title: "Self-drive services",
    description: "Total control. Enjoy private independence behind the wheel of our exceptionally maintained, fully-vetted sports models, executive cruisers, and economical vehicles.",
    icon: Key,
    color: "from-zinc-900 to-zinc-950",
    glow: "shadow-zinc-500/5 hover:shadow-yellow-500/25"
  },
  {
    title: "Inter-state travel trips",
    description: "Reliable long-distance journeys. Safe, high-speed routes connecting Akure to nationwide destinations, optimized by verified professional long-haul drivers.",
    icon: Compass,
    color: "from-zinc-900 to-zinc-950",
    glow: "shadow-zinc-500/5 hover:shadow-yellow-500/25"
  },
  {
    title: "Contract driver services",
    description: "Elite personal transits. Hire highly vetted, secure, and professional personal chauffeurs on short-term contracts to manage all your daily commutes.",
    icon: ShieldCheck,
    color: "from-zinc-900 to-zinc-950",
    glow: "shadow-zinc-500/5 hover:shadow-yellow-500/25"
  },
  {
    title: "Buy & sell used/Tokunbo cars",
    description: "Transparent car dealership. Direct sales and reliable valuation on premium local and foreign pre-owned vehicles, thoroughly detailed and mechanical-inspected.",
    icon: Coins,
    color: "from-zinc-900 to-zinc-950",
    glow: "shadow-zinc-500/5 hover:shadow-yellow-500/25"
  }
];

export const fleet: FleetItem[] = [
  {
    name: "Toyota Prado",
    type: "Luxury",
    seats: 7,
    transmission: "Automatic",
    rate: "NGN 95,000/day",
    tagline: "Premium executive presence, ideal for delegations."
  },
  {
    name: "Toyota Corolla",
    type: "Economy",
    seats: 5,
    transmission: "Automatic",
    rate: "NGN 42,000/day",
    tagline: "Ultra-efficient metropolitan commuter, absolute reliability."
  },
  {
    name: "Honda CR-V",
    type: "SUV",
    seats: 5,
    transmission: "Automatic",
    rate: "NGN 60,000/day",
    tagline: "Versatile crossover comfort, outstanding road visibility."
  },
  {
    name: "Lexus RX 350",
    type: "Luxury",
    seats: 5,
    transmission: "Automatic",
    rate: "NGN 110,000/day",
    tagline: "High-end elegance and athletic power, unmatched style."
  },
  {
    name: "Hyundai Elantra",
    type: "Economy",
    seats: 5,
    transmission: "Automatic",
    rate: "NGN 38,000/day",
    tagline: "Sleek aerodynamic efficiency and modern cabin tech."
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Can I hire a car without a driver?",
    answer:
      "Absolutely. We offer flexible self-drive options for experienced drivers. You will only need to present valid identification, a current driver's license, and standard security documents.",
  },
  {
    question: "Do you handle inter-state travel from Akure?",
    answer:
      "Yes. We support comfortable nationwide travel from Akure. Pricing is calculated transparently based on distance, duration, and road security conditions. Let us know your destination for a customized quote.",
  },
  {
    question: "How quickly can I secure a vehicle?",
    answer:
      "We accommodate same-day bookings based on available garage slots. For premium categories like executive SUVs and luxury sedans, we highly recommend booking 24 to 48 hours in advance.",
  },
];
