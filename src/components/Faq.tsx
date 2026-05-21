import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../utils/mockData";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-zinc-950 py-24 border-t border-zinc-900">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-red-500">Direct Answers</span>
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-sm">Clarify operations, documentation, and pricing policies instantly.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-zinc-850 bg-zinc-900/30 overflow-hidden transition-all duration-300 hover:border-zinc-800"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                >
                  <span className="text-base md:text-lg font-bold text-white hover:text-red-400 transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`p-1.5 rounded-full bg-zinc-800 text-red-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 md:px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-zinc-900/80 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
