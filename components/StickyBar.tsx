"use client";

import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { products } from "@/lib/products-data";
import {
  getRecordedOrderCount,
  RECORDED_ORDER_COUNT_EVENT,
  RECORDED_ORDER_COUNT_KEY,
  type RecordedOrderCountDetail,
} from "@/lib/recorded-order-count";

const FEATURED_PRODUCT_ID = 1;

export function StickyBar() {
  const product = products.find((p) => p.id === FEATURED_PRODUCT_ID) ?? products[0];
  const [recordedOrderCount, setRecordedOrderCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setRecordedOrderCount(getRecordedOrderCount());

    const onRecorded = (ev: Event) => {
      const e = ev as CustomEvent<RecordedOrderCountDetail>;
      if (typeof e.detail?.count === "number") {
        setRecordedOrderCount(e.detail.count);
      } else {
        setRecordedOrderCount(getRecordedOrderCount());
      }
    };

    const onStorage = (e: StorageEvent) => {
      if (e.key === RECORDED_ORDER_COUNT_KEY || e.key === null) {
        setRecordedOrderCount(getRecordedOrderCount());
      }
    };

    window.addEventListener(RECORDED_ORDER_COUNT_EVENT, onRecorded);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(RECORDED_ORDER_COUNT_EVENT, onRecorded);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  useEffect(() => {
    const updateVisibility = () => {
      const targets = ["#results", "#products"]
        .map((selector) => document.querySelector<HTMLElement>(selector))
        .filter((el): el is HTMLElement => Boolean(el));

      if (targets.length === 0) {
        setIsVisible(false);
        return;
      }

      const viewportHeight = window.innerHeight;
      const visibleInTarget = targets.some((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < viewportHeight * 0.7 && rect.bottom > 120;
      });

      setIsVisible(visibleInTarget);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const scrollToOrderForm = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden p-4 bg-[#8B3A2A] text-white border-t border-[#8B3A2A] shadow-lg">
        <button
          onClick={scrollToOrderForm}
          className="w-full py-4 rounded-2xl text-base whitespace-nowrap lp-cta flex items-center justify-center gap-2"
        >
          <span className="relative inline-flex items-center justify-center">
            <ShoppingCart className="h-5 w-5" />
            {recordedOrderCount > 0 && (
              <span className="absolute -top-2 -left-2 min-w-5 h-5 px-1 rounded-full bg-black text-white text-[11px] leading-5 font-bold tabular-nums">
                {recordedOrderCount}
              </span>
            )}
          </span>
          اطلبي الآن - الدفع عند الاستلام
        </button>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-50 hidden md:block bg-[#8B3A2A] text-white backdrop-blur-md border-t border-[#8B3A2A] shadow-lg p-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary rounded-lg border border-border" />
            <p className="font-bold text-sm text-white">{product.name}</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-white font-bold text-lg">{product.price} دج</p>
            <button
              onClick={scrollToOrderForm}
              className="py-3 px-8 rounded-xl lp-cta flex items-center gap-2"
            >
              <span className="relative inline-flex items-center justify-center">
                <ShoppingCart className="h-5 w-5" />
                {recordedOrderCount > 0 && (
                  <span className="absolute -top-2 -left-2 min-w-5 h-5 px-1 rounded-full bg-black text-white text-[11px] leading-5 font-bold tabular-nums">
                    {recordedOrderCount}
                  </span>
                )}
              </span>
              اطلبي الآن - الدفع عند الاستلام
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
