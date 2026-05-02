"use client"

export function BeforeAfter() {
  return (
    <section id="results" className="py-16 bg-white" dir="rtl">
      <div className="max-w-2xl mx-auto px-4">

        {/* العنوان */}
        <h2 className="text-3xl font-extrabold text-center text-black mb-10">
          نتائج استخدام<br />حمض الساليسيليك
        </h2>

        {/* صورة قبل/بعد 1 */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 mb-6">
          <div className="grid grid-cols-2">
            {/* بعد — يسار */}
            <div className="relative bg-gray-100 aspect-square flex items-center justify-center">
              {/* ضع صورة "بعد" هنا */}
              <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <p className="text-green-400 text-sm font-medium">صورة بعد</p>
              </div>
              <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">
                [بعد]
              </span>
            </div>
            {/* قبل — يمين */}
            <div className="relative bg-gray-100 aspect-square flex items-center justify-center">
              {/* ضع صورة "قبل" هنا */}
              <div className="w-full h-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                <p className="text-red-300 text-sm font-medium">صورة قبل</p>
              </div>
              <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">
                [قبل]
              </span>
            </div>
          </div>
          {/* خط الفصل */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
        </div>

        {/* صورة قبل/بعد 2 */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 mb-10">
          <div className="grid grid-cols-2">
            <div className="relative bg-gray-100 aspect-square flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <p className="text-green-400 text-sm font-medium">صورة بعد</p>
              </div>
              <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">
                [بعد]
              </span>
            </div>
            <div className="relative bg-gray-100 aspect-square flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                <p className="text-red-300 text-sm font-medium">صورة قبل</p>
              </div>
              <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">
                [قبل]
              </span>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
        </div>

        {/* قسم المنتج */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2">
            {/* صورة المنتج */}
            <div className="bg-gray-50 flex items-center justify-center p-6 border-l border-gray-200">
              {/* ضع صورة المنتج هنا */}
              <div className="w-32 h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-400 text-xs text-center">صورة<br />المنتج</p>
              </div>
            </div>

            {/* تفاصيل المنتج */}
            <div className="p-6 flex flex-col justify-center gap-3">
              <p className="text-lg font-extrabold text-black leading-snug">
                تركيـــــبة ذكية<br />تعمل على
              </p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>+ تزيل الخلايا الميتة للبشرة.</li>
                <li>+ تعالج ظهور البثور الجلدية.</li>
                <li>+ تمنع الرؤوس و الشوائب.</li>
                <li>+ تنظم إفراز الدهون.</li>
              </ul>
            </div>
          </div>

          {/* السعر وزر الشراء */}
          <div className="border-t border-gray-200 p-5 text-center bg-white">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-xs text-gray-400 text-right">عرض خـــاص<br />لمدة محدودة فقط</span>
              <div className="text-right">
                <p className="text-2xl font-extrabold text-black">1900 DA</p>
                <p className="text-sm text-gray-400 line-through">4600 DA</p>
              </div>
              <span className="text-xs font-bold text-black border border-black px-2 py-1 rounded">
                [ ACIDE SALICYLIQUE ]
              </span>
            </div>
            <button
              onClick={() => document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full bg-black text-white font-extrabold py-4 rounded-xl text-base hover:bg-gray-900 transition-colors"
            >
              لا تضيع الفرصة، أحصل عليه الآن !
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
