import { useState } from "react";
import { faqData } from "../../../data/faq.js";

function FaqAccordion() {
  const [openItems, setOpenItems] = useState(() => new Set([faqData[0]?.items[0]?.id]));

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="bg-[#f6efe6] py-16 sm:py-20">
      <div className="mx-auto w-[min(880px,calc(100%-2rem))]">
        <div className="mb-12 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f5b47]">
            Bitácora de dudas
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#362117] sm:text-4xl">
            Encuentra tu respuesta
          </h2>
        </div>

        <div className="space-y-10">
          {faqData.map((category) => (
            <div key={category.id}>
              <h3 className="mb-4 flex items-center gap-3 font-serif text-xl text-[#362117] sm:text-2xl">
                <span
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#2f5b47] text-sm text-[#e7c89e]"
                  aria-hidden="true"
                >
                  ⚓
                </span>
                {category.category}
              </h3>

              <div className="overflow-hidden rounded-3xl border border-[#e7c89e]/60 bg-[#fffaf4] shadow-[0_18px_40px_rgba(54,33,23,0.08)]">
                {category.items.map((item, index) => {
                  const isOpen = openItems.has(item.id);
                  return (
                    <div
                      key={item.id}
                      className={
                        index !== 0
                          ? "border-t border-[#e7c89e]/50"
                          : undefined
                      }
                    >
                      <h4>
                        <button
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${item.id}`}
                          id={`faq-header-${item.id}`}
                          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#f0dfc7]/40"
                        >
                          <span className="text-sm font-medium text-[#362117] sm:text-base">
                            {item.question}
                          </span>
                          <span
                            aria-hidden="true"
                            className={`flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#e7c89e] text-sm text-[#362117] transition-transform duration-300 ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          >
                            +
                          </span>
                        </button>
                      </h4>
                      <div
                        id={`faq-panel-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-header-${item.id}`}
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-6 pb-5 text-sm leading-relaxed text-[#6e5a4d]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqAccordion;
