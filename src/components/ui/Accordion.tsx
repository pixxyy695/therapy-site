"use client";

import { useState } from "react";
import clsx from "clsx";

interface AccordionItem {
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-t border-b border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-[1.05rem] font-medium text-primary-dark sm:text-[1.15rem]">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={clsx(
                    "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/25 text-primary transition-transform duration-300",
                    isOpen && "rotate-45 border-accent text-accent-dark"
                  )}
                >
                  <span className="absolute h-[1px] w-3.5 bg-current" />
                  <span className="absolute h-3.5 w-[1px] bg-current" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-2xl pb-6 pr-8 text-[0.98rem] leading-relaxed text-ink-soft">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
