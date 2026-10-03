"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/data/faqs";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items, light = false }: { items: Faq[]; light?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-4">
      {items.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div 
            key={faq.question}
            className={cn(
              "rounded-xl border border-[rgba(255,85,0,0.14)] bg-white shadow-[0_4px_14px_rgba(255,85,0,0.04)] overflow-hidden transition-all duration-300",
              open ? "shadow-[0_10px_30px_rgba(255,85,0,0.10)] border-[#FF5500]" : "hover:border-[rgba(255,85,0,0.30)] hover:shadow-[0_6px_20px_rgba(255,85,0,0.08)]"
            )}
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full min-h-[56px] items-center justify-between gap-4 px-6 py-4 text-left text-[15px] font-semibold text-neutral-800"
            >
              {faq.question}
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 transition-transform duration-300 text-neutral-400",
                  open && "rotate-180"
                )}
              />
            </button>
            {open && (
              <div className="px-6 pb-5 pt-2 border-t border-[rgba(255,85,0,0.10)]">
                <p className="text-[14.5px] leading-relaxed text-[#5B5B63]">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
