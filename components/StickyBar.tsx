"use client";

import { products } from "@/lib/products-data";

const FEATURED_PRODUCT_ID = 1;

export function StickyBar() {
  const product = products.find((p) => p.id === FEATURED_PRODUCT_ID) ?? products[0];

  const scrollToForm = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden p-4 bg-white border-t border-[#e5ecd8] shadow-lg">
        <button
          onClick={scrollToForm}
            className="w-full bg-[#d4f036] py-4 rounded-2xl text-base whitespace-nowrap lp-cta"
        >
          اطلبي الآن - الدفع عند الاستلام
        </button>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-50 hidden md:block bg-white/95 backdrop-blur-md border-t border-[#e5ecd8] shadow-lg p-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#f3f9e8] rounded-lg border border-[#e5ecd8]" />
            <p className="font-bold text-sm text-black">{product.name}</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-[#2d5a27] font-bold text-lg">{product.price} دج</p>
            <button
              onClick={scrollToForm}
              className="bg-[#d4f036] py-3 px-8 rounded-xl lp-cta"
            >
              اطلبي الآن - الدفع عند الاستلام
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
