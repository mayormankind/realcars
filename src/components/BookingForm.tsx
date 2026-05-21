import { useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User, Phone, MapPin, Calendar, Briefcase, Layers, Send, CheckCircle2 } from "lucide-react";

interface BookingFormProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export default function BookingForm({ selectedCategory, setSelectedCategory }: BookingFormProps) {
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingLocation, setBookingLocation] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingService, setBookingService] = useState("");
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedCategory, setSubmittedCategory] = useState("");

  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedName(bookingName);
    setSubmittedCategory(selectedCategory || "Requested");
    setIsSubmitted(true);

    // Clear inputs
    setBookingName("");
    setBookingPhone("");
    setBookingLocation("");
    setBookingDate("");
    setBookingService("");
    setSelectedCategory("");
    event.currentTarget.reset();
  };

  return (
    <section id="quote" className="mx-auto w-full max-w-4xl px-6 py-24 relative">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <span className="text-xs uppercase font-extrabold tracking-widest text-red-500">Akure Bookings</span>
        <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Quick Booking Request</h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Confirm your itinerary details below. Our reservation dispatch team will calculate rates and contact you immediately to lock in the trip.
        </p>
      </div>

      <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-xl p-8 md:p-10 shadow-2xl">
        {/* Form submit overlay with success feedback */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 rounded-2xl bg-zinc-950/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="p-4 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 mb-6 shadow-lg shadow-emerald-500/10"
              >
                <CheckCircle2 size={56} className="animate-bounce" />
              </motion.div>

              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-black text-white"
              >
                Reservation Proposal Lodged!
              </motion.h3>

              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.18 }}
                className="text-zinc-400 mt-3 max-w-md text-sm leading-relaxed"
              >
                Thank you, <span className="text-white font-bold">{submittedName}</span>. We are checking status on our <span className="text-red-400 font-bold">{submittedCategory}</span> fleet category. A transport manager will reach you on phone within 15 minutes!
              </motion.p>

              <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                onClick={() => setIsSubmitted(false)}
                className="mt-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 px-6 py-3 text-xs font-bold text-white transition-all cursor-pointer"
              >
                Make Another Booking
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleQuoteSubmit} className="grid gap-6 sm:grid-cols-2 relative z-10">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <User size={13} className="text-red-500" />
              Full Name
            </label>
            <div className="relative">
              <input
                required
                type="text"
                value={bookingName}
                onChange={(e) => setBookingName(e.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Phone size={13} className="text-red-500" />
              WhatsApp / Phone Number
            </label>
            <input
              required
              type="tel"
              value={bookingPhone}
              onChange={(e) => setBookingPhone(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
              placeholder="080 0000 0000"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <MapPin size={13} className="text-red-500" />
              Pickup Point / Station
            </label>
            <input
              required
              type="text"
              value={bookingLocation}
              onChange={(e) => setBookingLocation(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
              placeholder="e.g. Alagbaka, Akure"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Calendar size={13} className="text-red-500" />
              Dispatch Date
            </label>
            <input
              required
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Briefcase size={13} className="text-red-500" />
              Requested Service
            </label>
            <select
              required
              value={bookingService}
              onChange={(e) => setBookingService(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-zinc-300 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500/20 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2050/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23a1a1aa%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E')] bg-[length:12px_12px] bg-[right_16px_center] bg-no-repeat"
            >
              <option value="" disabled>Select service</option>
              <option value="Self-drive">Self-drive</option>
              <option value="Chauffeur-driven">With Professional Driver</option>
              <option value="Inter-state">Inter-state journey</option>
              <option value="Luxury event">Luxury event rental</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Layers size={13} className="text-red-500" />
              Fleet Category
            </label>
            <select
              required
              id="booking-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-zinc-300 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500/20 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2050/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23a1a1aa%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E')] bg-[length:12px_12px] bg-[right_16px_center] bg-no-repeat"
            >
              <option value="" disabled>Select category</option>
              <option value="Economy">Economy commuter</option>
              <option value="SUV">Standard SUV</option>
              <option value="Luxury">Luxury executive</option>
            </select>
          </div>

          <div className="sm:col-span-2 pt-4">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-lg bg-red-500 px-6 py-4 text-sm font-extrabold text-white transition-all hover:bg-red-600 hover:scale-[1.01] shadow-lg shadow-red-500/10 cursor-pointer"
            >
              <Send size={15} className="mr-2" />
              Dispatch Rental Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
