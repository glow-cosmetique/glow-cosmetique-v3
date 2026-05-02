"use client"

export function Products() {
  return (
    <section id="products" className="bg-white" dir="rtl">

      {/* ══ القسم العلوي: يسار نص+منتج / يمين صورة قبل-بعد ══ */}
      <div className="flex flex-col md:flex-row">

        {/* يسار: نص + صورة المنتج + تفاصيل + سعر + زر */}
        <div className="w-full md:w-1/2 flex flex-col p-6 md:p-10 bg-white">
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-2">
            لبشرة مشرقة<br />وخالية من<br />الشوائب
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-36 h-52 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center shadow-sm">
              <p className="text-gray-400 text-xs text-center">صورة<br />المنتج</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-4 mb-4">
            <p className="font-black text-base text-black mb-2">تركيـــبة ذكية تعمل على</p>
            <ul className="text-sm text-gray-700 space-y-1.5">
              <li>+ &nbsp;تزيل الخلايا الميتة للبشرة.</li>
              <li>+ &nbsp;تعالج ظهور البثور الجلدية.</li>
              <li>+ &nbsp;تمنع الرؤوس و الشوائب.</li>
              <li>+ &nbsp;تنظم إفراز الدهون.</li>
            </ul>
          </div>
          <p className="text-center text-xs font-bold border border-black rounded px-2 py-1 mb-3 self-center tracking-widest">
            [ ACIDE SALICYLIQUE ]
          </p>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs text-gray-400 leading-tight">عرض خـــاص<br />لمدة محدودة فقط</span>
            <div className="text-right">
              <p className="text-2xl font-black text-black">1900 <span className="text-base font-bold">DA</span></p>
              <p className="text-sm text-gray-400 line-through">4600 DA</p>
            </div>
          </div>
          <button
            onClick={() => document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full bg-black text-white font-extrabold py-4 rounded-xl text-base hover:bg-gray-900 transition-colors"
          >
            لا تضيع الفرصة، أحصل عليه الآن !
          </button>
        </div>

        {/* يمين: صورة قبل/بعد بالطول */}
        <div className="w-full md:w-1/2 relative overflow-hidden" style={{ minHeight: "600px" }}>
          <div className="grid grid-cols-2 h-full">
            <div className="relative bg-rose-100 flex items-center justify-center h-full" style={{ minHeight: "600px" }}>
              <div className="w-28 h-28 rounded-full bg-white/40 flex items-center justify-center">
                <span className="text-6xl">😔</span>
              </div>
              <span className="absolute top-4 right-4 text-white text-base font-black drop-shadow">[قبل]</span>
              <p className="absolute bottom-4 text-xs text-gray-400 text-center px-2">ضع صورة قبل</p>
            </div>
            <div className="relative bg-green-100 flex items-center justify-center h-full" style={{ minHeight: "600px" }}>
              <div className="w-28 h-28 rounded-full bg-white/40 flex items-center justify-center">
                <span className="text-6xl">✨</span>
              </div>
              <span className="absolute top-4 left-4 text-white text-base font-black drop-shadow">[بعد]</span>
              <p className="absolute bottom-4 text-xs text-gray-400 text-center px-2">ضع صورة بعد</p>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
        </div>
      </div>

      {/* ══ عنوان النتائج ══ */}
      <div className="text-center py-12 bg-white border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-black text-black leading-tight">
          نتائج استخدام<br />حمض الساليسيليك
        </h2>
      </div>

      {/* ══ 4 صور قبل/بعد بالطول ══ */}
      <div className="flex flex-col gap-0">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative overflow-hidden border-b border-gray-100">
            <div className="grid grid-cols-2">
              {/* بعد — يسار */}
              <div
                className="relative bg-green-50 flex items-center justify-center"
                style={{ minHeight: "480px" }}
              >
                <div className="w-24 h-24 rounded-full bg-white/50 flex items-center justify-center">
                  <span className="text-5xl">✨</span>
                </div>
                <span className="absolute top-4 right-4 text-black text-sm font-black">[بعد]</span>
                <p className="absolute bottom-4 text-xs text-gray-400 text-center px-2">
                  ضع صورة بعد الاستخدام
                </p>
              </div>
              {/* قبل — يمين */}
              <div
                className="relative bg-rose-50 flex items-center justify-center"
                style={{ minHeight: "480px" }}
              >
                <div className="w-24 h-24 rounded-full bg-white/50 flex items-center justify-center">
                  <span className="text-5xl">😔</span>
                </div>
                <span className="absolute top-4 left-4 text-black text-sm font-black">[قبل]</span>
                <p className="absolute bottom-4 text-xs text-gray-400 text-center px-2">
                  ضع صورة قبل الاستخدام
                </p>
              </div>
            </div>
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
          </div>
        ))}
      </div>

    </section>
  )
}

