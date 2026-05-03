"use client"

export function Products() {
  return (
    <section id="products" className="bg-white w-full" dir="rtl">

      {/* === عمودان Grid: القسم الطولي === */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* العمود الأيمن: نص + صورة المنتج + تفاصيل + نص + زر */}
        <div className="flex flex-col justify-between gap-6 p-6 md:p-12 bg-white">

          {/* النص الكبير */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
            ليشرة مشرقة<br />وخالية من<br />الشوائب
          </h2>

          {/* صورة المنتج */}
          <div className="flex justify-center">
            <div className="w-40 h-60 bg-gray-100 rounded-2xl border-2 border-black flex items-center justify-center shadow-sm">
              <p className="text-gray-400 text-xs text-center">صورة<br />المنتج</p>
            </div>
          </div>

          {/* تفاصيل المنتج */}
          <div className="border-2 border-black rounded-2xl p-5">
            <p className="font-black text-lg text-black mb-3">تركيبة ذكية تعمل على</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2"><span className="font-bold">+</span> تزيل الخلايا الميتة للبشرة.</li>
              <li className="flex items-start gap-2"><span className="font-bold">+</span> تعالج ظهور البثور الجلدية.</li>
              <li className="flex items-start gap-2"><span className="font-bold">+</span> تمنع الرؤوس و الشوائب.</li>
              <li className="flex items-start gap-2"><span className="font-bold">+</span> تنظم إفراز الدهون.</li>
            </ul>
          </div>

          {/* اسم المنتج */}
          <p className="text-center text-xs font-bold border-2 border-black rounded-lg px-3 py-2 tracking-widest self-center">
            [ ACIDE SALICYLIQUE ]
          </p>

          {/* السعر */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 leading-relaxed">عرض خـاص<br />لأمدة محدودة فقط</span>
            <div className="text-right">
              <p className="text-3xl font-black text-black">1900 <span className="text-lg">DA</span></p>
              <p className="text-sm text-gray-400 line-through">4600 DA</p>
            </div>
          </div>

          {/* ✅ الجملة في الوسط */}
          <p className="text-center font-extrabold text-base">
            ! لا تضيع الفرصة، أحصل عليه الآن
          </p>

          {/* زر الشراء */}
          <button
            onClick={() => document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full bg-black text-white font-extrabold py-4 rounded-2xl text-base hover:bg-gray-900 transition-colors"
          >
            ! لا تضيع الفرصة، أحصل عليه الآن
          </button>

        </div>

        {/* العمود الأيسر: صورة قبل/بعد كبيرة */}
        <div className="relative overflow-hidden border-2 border-black" style={{ minHeight: "500px" }}>
          <div className="grid grid-cols-2 h-full">
            {/* قبل */}
            <div className="relative bg-rose-100 flex items-center justify-center h-full" style={{ minHeight: "500px" }}>
              <div className="w-28 h-28 rounded-full bg-white/40 flex items-center justify-center">
                <span className="text-6xl">😔</span>
              </div>
              <span className="absolute top-5 right-5 text-white text-lg font-black drop-shadow-lg">[قبل]</span>
              <p className="absolute bottom-5 text-xs text-gray-400 text-center px-4">ضع صورة قبل الاستخدام</p>
            </div>
            {/* بعد */}
            <div className="relative bg-green-100 flex items-center justify-center h-full" style={{ minHeight: "500px" }}>
              <div className="w-28 h-28 rounded-full bg-white/40 flex items-center justify-center">
                <span className="text-6xl">✨</span>
              </div>
              <span className="absolute top-5 left-5 text-white text-lg font-black drop-shadow-lg">[بعد]</span>
              <p className="absolute bottom-5 text-xs text-gray-400 text-center px-4">ضع صورة بعد الاستخدام</p>
            </div>
            {/* خط الفصل */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
          </div>
        </div>

      </div>

      {/* === عنوان النتائج === */}
      <div className="text-center py-14 bg-white border-t-2 border-black">
        <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
          نتائج استخدام<br />حمض الساليسيليك
        </h2>
      </div>

      {/* === صور قبل/بعد بالطول 4 === */}
      <div className="flex flex-col gap-8 px-4 pb-12">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative overflow-hidden border-2 border-black rounded-2xl">
            <div className="grid grid-cols-2">
              {/* بعد */}
              <div className="relative bg-green-50 flex items-center justify-center" style={{ minHeight: "480px" }}>
                <div className="w-24 h-24 rounded-full bg-white/50 flex items-center justify-center">
                  <span className="text-5xl">✨</span>
                </div>
                <span className="absolute top-4 right-4 text-black text-sm font-black">[بعد]</span>
                <p className="absolute bottom-4 text-xs text-gray-400 text-center px-2">ضع صورة بعد الاستخدام</p>
              </div>
              {/* قبل */}
              <div className="relative bg-rose-50 flex items-center justify-center" style={{ minHeight: "480px" }}>
                <div className="w-24 h-24 rounded-full bg-white/50 flex items-center justify-center">
                  <span className="text-5xl">😔</span>
                </div>
                <span className="absolute top-4 left-4 text-black text-sm font-black">[قبل]</span>
                <p className="absolute bottom-4 text-xs text-gray-400 text-center px-2">ضع صورة قبل الاستخدام</p>
              </div>
            </div>
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-black z-10" />
          </div>
        ))}
      </div>

    </section>
  )
}
