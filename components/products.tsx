"use client"

export function Products() {
  return (
    <section id="products" className="py-20 bg-white" dir="rtl">
      <div className="max-w-5xl mx-auto px-4">

        {/* العنوان */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            منتجاتنا المميزة
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            اختاري ما يناسب بشرتك
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            كل منتجاتنا مصنوعة من مكونات طبيعية محلية، مثبتة علمياً وآمنة لكل أنواع البشرة
          </p>
        </div>

        {/* المنتج 1 */}
        <div className="flex flex-col md:flex-row gap-8 mb-20 items-start">

          {/* يمين: صورة كبيرة قبل/بعد */}
          <div className="w-full md:w-1/2 shrink-0">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative aspect-square bg-rose-50 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-rose-200/60 flex items-center justify-center">
                    <span className="text-5xl">😔</span>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">[قبل]</span>
                </div>
                <div className="relative aspect-square bg-green-50 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-green-200/60 flex items-center justify-center">
                    <span className="text-5xl">✨</span>
                  </div>
                  <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">[بعد]</span>
                </div>
              </div>
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
            </div>
          </div>

          {/* يسار: الوصف + اسم المنتج + 4 صور قبل/بعد */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">

            {/* الوصف */}
            <p className="text-gray-600 text-sm leading-relaxed">
              كريم مرطب بزيت الأرغان الجزائري النقي — يرطب البشرة عمقياً ويدوم 24 ساعة. مناسب لكل أنواع البشرة خاصة الجافة والحساسة.
            </p>

            {/* خط فاصل */}
            <div className="border-t border-gray-200" />

            {/* عنوان نتائج الاستخدام */}
            <h3 className="text-xl font-extrabold text-black">نتائج الاستخدام</h3>
            <p className="text-gray-500 text-sm -mt-2">كريم مرطب بزيت الأرغان</p>

            {/* 4 صور قبل/بعد عمودية */}
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative rounded-xl overflow-hidden border border-gray-200">
                  <div className="grid grid-cols-2">
                    <div className="relative bg-rose-50 h-32 flex items-center justify-center">
                      <span className="text-3xl">😔</span>
                      <span className="absolute top-2 right-2 bg-black/60 text-white text-xs font-bold px-2 py-0.5 rounded-full">قبل</span>
                    </div>
                    <div className="relative bg-green-50 h-32 flex items-center justify-center">
                      <span className="text-3xl">✨</span>
                      <span className="absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-2 py-0.5 rounded-full">بعد</span>
                    </div>
                  </div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* المنتج 2 */}
        <div className="flex flex-col md:flex-row gap-8 mb-20 items-start">
          <div className="w-full md:w-1/2 shrink-0">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative aspect-square bg-amber-50 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-amber-200/60 flex items-center justify-center">
                    <span className="text-5xl">😔</span>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">[قبل]</span>
                </div>
                <div className="relative aspect-square bg-green-50 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-green-200/60 flex items-center justify-center">
                    <span className="text-5xl">✨</span>
                  </div>
                  <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">[بعد]</span>
                </div>
              </div>
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              سيروم فيتامين C المركّز — يوحّد لون البشرة ويعالج التصبغات والبقع الداكنة. نتائج ملحوظة خلال أسبوعين فقط.
            </p>
            <div className="border-t border-gray-200" />
            <h3 className="text-xl font-extrabold text-black">نتائج الاستخدام</h3>
            <p className="text-gray-500 text-sm -mt-2">سيروم فيتامين C</p>
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative rounded-xl overflow-hidden border border-gray-200">
                  <div className="grid grid-cols-2">
                    <div className="relative bg-amber-50 h-32 flex items-center justify-center">
                      <span className="text-3xl">😔</span>
                      <span className="absolute top-2 right-2 bg-black/60 text-white text-xs font-bold px-2 py-0.5 rounded-full">قبل</span>
                    </div>
                    <div className="relative bg-green-50 h-32 flex items-center justify-center">
                      <span className="text-3xl">✨</span>
                      <span className="absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-2 py-0.5 rounded-full">بعد</span>
                    </div>
                  </div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
