"use client"

const productsList = [
  {
    id: 1,
    name: "كريم مرطب بزيت الأرغان",
    description: "كريم مرطب بزيت الأرغان الجزائري النقي — يرطب البشرة عمقياً ويدوم 24 ساعة. مناسب لكل أنواع البشرة خاصة الجافة والحساسة.",
    color: "bg-rose-50",
  },
  {
    id: 2,
    name: "سيروم فيتامين C",
    description: "سيروم فيتامين C المركّز — يوحّد لون البشرة ويعالج التصبغات والبقع الداكنة. نتائج ملحوظة خلال أسبوعين فقط.",
    color: "bg-amber-50",
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 bg-white" dir="rtl">
      <div className="max-w-5xl mx-auto px-4">

        {/* العنوان */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">منتجاتنا المميزة</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">اختاري ما يناسب بشرتك</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            كل منتجاتنا مصنوعة من مكونات طبيعية محلية، مثبتة علمياً وآمنة لكل أنواع البشرة
          </p>
        </div>

        {productsList.map((product) => (
          <div key={product.id} className="mb-24">

            {/* القسم العلوي: صورة كبيرة يمين + صورة المنتج والوصف يسار */}
            <div className="flex flex-col md:flex-row gap-6 items-stretch mb-8">

              {/* يمين: صورة قبل/بعد كبيرة جداً */}
              <div className="w-full md:w-1/2 shrink-0">
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-md h-full min-h-[350px]">
                  <div className="grid grid-cols-2 h-full">
                    <div className={`relative ${product.color} flex items-center justify-center min-h-[350px]`}>
                      <div className="w-28 h-28 rounded-full bg-white/50 flex items-center justify-center">
                        <span className="text-6xl">😔</span>
                      </div>
                      <span className="absolute top-4 right-4 bg-black/60 text-white text-sm font-bold px-3 py-1 rounded-full">قبل</span>
                    </div>
                    <div className="relative bg-green-50 flex items-center justify-center min-h-[350px]">
                      <div className="w-28 h-28 rounded-full bg-white/50 flex items-center justify-center">
                        <span className="text-6xl">✨</span>
                      </div>
                      <span className="absolute top-4 left-4 bg-black/60 text-white text-sm font-bold px-3 py-1 rounded-full">بعد</span>
                    </div>
                  </div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
                </div>
              </div>

              {/* يسار: صورة المنتج + الوصف */}
              <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
                {/* صورة المنتج */}
                <div className={`rounded-2xl ${product.color} flex items-center justify-center p-8 border border-gray-200`}>
                  <div className="w-32 h-48 bg-white/70 rounded-xl flex items-center justify-center shadow-sm">
                    <p className="text-gray-400 text-xs text-center">صورة<br />المنتج</p>
                  </div>
                </div>
                {/* الوصف */}
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>

            {/* اسم المنتج في الوسط مع خط داكن */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-extrabold text-black inline-block">
                نتائج استخدام {product.name}
              </h3>
              <div className="w-24 h-1 bg-black mx-auto mt-2 rounded-full" />
            </div>

            {/* 4 صور قبل/بعد عمودية بحجم كبير */}
            <div className="flex flex-col gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <div className="grid grid-cols-2">
                    <div className={`relative ${product.color} h-48 flex items-center justify-center`}>
                      <span className="text-5xl">😔</span>
                      <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">قبل</span>
                    </div>
                    <div className="relative bg-green-50 h-48 flex items-center justify-center">
                      <span className="text-5xl">✨</span>
                      <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">بعد</span>
                    </div>
                  </div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}
