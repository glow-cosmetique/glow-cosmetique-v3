"use client"

export function Products() {
  return (
    <section id="products" className="bg-white" dir="rtl">

      {/* ══ القسم الأول: نص + صورة المنتج يسار / صورة قبل-بعد يمين ══ */}
      <div className="flex flex-col md:flex-row min-h-[90vh]">

        {/* يسار: نص كبير + صورة المنتج */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-14 bg-white border-b md:border-b-0 md:border-l border-gray-100">
          {/* النص الكبير */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-black leading-tight mb-4">
              لبشرة مشرقة<br />
              وخالية من<br />
              الشوائب
            </h2>
            <div className="w-24 h-1 bg-black mb-8 rounded-full" />
          </div>

          {/* صورة المنتج */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-48 h-72 bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm">
              <p className="text-gray-400 text-xs text-center">ضع صورة<br />المنتج هنا</p>
            </div>
            {/* تفاصيل المنتج */}
            <div className="w-full border border-gray-200 rounded-2xl p-5">
              <p className="font-black text-lg text-black mb-3">تركيـــبة ذكية تعمل على</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>+ &nbsp; تزيل الخلايا الميتة للبشرة.</li>
                <li>+ &nbsp; تعالج ظهور البثور الجلدية.</li>
                <li>+ &nbsp; تمنع الرؤوس و الشوائب.</li>
                <li>+ &nbsp; تنظم إفراز الدهون.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* يمين: صورة قبل/بعد كبيرة جداً */}
        <div className="w-full md:w-1/2 relative overflow-hidden min-h-[50vh] md:min-h-full">
          <div className="grid grid-cols-2 h-full">
            {/* قبل */}
            <div className="relative bg-rose-100 flex items-center justify-center min-h-[50vh]">
              <div className="w-32 h-32 rounded-full bg-white/40 flex items-center justify-center">
                <span className="text-7xl">😔</span>
              </div>
              <span className="absolute top-5 right-5 text-white text-lg font-black">[قبل]</span>
            </div>
            {/* بعد */}
            <div className="relative bg-green-100 flex items-center justify-center min-h-[50vh]">
              <div className="w-32 h-32 rounded-full bg-white/40 flex items-center justify-center">
                <span className="text-7xl">✨</span>
              </div>
              <span className="absolute top-5 left-5 text-white text-lg font-black">[بعد]</span>
            </div>
          </div>
          {/* خط الفصل */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
        </div>
      </div>

      {/* ══ عنوان النتائج في المنتصف ══ */}
      <div className="text-center py-16 bg-white">
        <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
          نتائج استخدام<br />حمض الساليسيليك
        </h2>
      </div>

      {/* ══ صور قبل/بعد عمودية كبيرة ══ */}
      <div className="flex flex-col">
        {[
          { bg1: "bg-rose-50", bg2: "bg-green-50" },
          { bg1: "bg-amber-50", bg2: "bg-emerald-50" },
          { bg1: "bg-orange-50", bg2: "bg-teal-50" },
          { bg1: "bg-pink-50", bg2: "bg-lime-50" },
        ].map((item, i) => (
          <div key={i} className="relative overflow-hidden border-b border-gray-100">
            <div className="grid grid-cols-2">
              {/* بعد — يسار */}
              <div className={`relative ${item.bg2} flex items-center justify-center`} style={{ minHeight: "320px" }}>
                <div className="w-28 h-28 rounded-full bg-white/50 flex items-center justify-center">
                  <span className="text-6xl">✨</span>
                </div>
                <span className="absolute top-5 right-5 text-black text-base font-black">[بعد]</span>
                <span className="absolute bottom-5 right-5 left-5 text-center text-xs text-gray-500">
                  ضع صورة بعد الاستخدام
                </span>
              </div>
              {/* قبل — يمين */}
              <div className={`relative ${item.bg1} flex items-center justify-center`} style={{ minHeight: "320px" }}>
                <div className="w-28 h-28 rounded-full bg-white/50 flex items-center justify-center">
                  <span className="text-6xl">😔</span>
                </div>
                <span className="absolute top-5 left-5 text-black text-base font-black">[قبل]</span>
                <span className="absolute bottom-5 right-5 left-5 text-center text-xs text-gray-500">
                  ضع صورة قبل الاستخدام
                </span>
              </div>
            </div>
            {/* خط الفصل */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
          </div>
        ))}
      </div>

    </section>
  )
}
