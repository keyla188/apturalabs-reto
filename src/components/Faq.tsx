import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function Faq({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-gray-100 flex flex-col gap-1 rounded-xl p-1">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-white rounded-xl  p-4 cursor-pointer  transition"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <h3 className="font-medium text-gray-800 text-base">{item.question}</h3>
              <span className="text-gray-500">{isOpen ? "-" : "+"}</span>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-2 text-gray-600 text-lg"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
