"use client";

export function StickyBar() {
  const scrollToForm = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden p-4 bg-white border-t shadow-lg">
        <button
          onClick={scrollToForm}
          className="w-full bg-[#e2f35e] text-black font-extrabold py-4 rounded-2xl text-lg whitespace-nowrap active:scale-95 transition-transform"
        >
          إشتري الآن - الدفع عند الإستلام
        </button>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-50 hidden md:block bg-white/90 backdrop-blur-md border-t shadow-lg p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg border border-gray-200" />
            <p className="font-bold text-sm text-black">Acide salycilique</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-[#2d5a27] font-bold text-lg">DZD1,900.00</p>
            <button
              onClick={scrollToForm}
              className="bg-[#e2f35e] text-black font-extrabold py-3 px-8 rounded-xl shadow-md active:scale-95 transition-transform"
            >
              إشتري الآن - الدفع عند الإستلام
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
