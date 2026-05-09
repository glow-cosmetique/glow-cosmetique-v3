"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Star, CheckCircle, Droplets, Sparkles, Shield, Sun, Heart } from "lucide-react"
import { products } from "@/lib/products-data"

const FEATURED_PRODUCT_ID = 1

function ProductPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-transparent">
      <span className="text-xs text-muted-foreground/35 font-medium">صورة المنتج</span>
    </div>
  )
}

export function Products() {
  const product = products.find((p) => p.id === FEATURED_PRODUCT_ID) ?? products[0]
  const targetTime = useMemo(() => Date.now() + 1000 * 60 * 60 * 6, [])
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(Math.max(targetTime - Date.now(), 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetTime])

  const totalSeconds = Math.floor(timeLeft / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const formatTime = (value: number) => value.toString().padStart(2, "0")

  return (
    <section id="products" className="py-20 bg-[var(--section-bg)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">منتج الأسبوع</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">اختيارنا الخاص لك هذا الأسبوع</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            تركيبة غنية وفاخرة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center lp-card overflow-visible">
          <div className="relative aspect-[4/5] sm:aspect-square md:min-h-[min(72vw,520px)] md:aspect-auto md:h-[min(72vw,640px)] overflow-visible bg-transparent isolate">
            <ProductPlaceholder />
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-contain object-center p-0 scale-[1.06] sm:scale-[1.05] origin-center"
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = "none"
              }}
            />
          </div>

          <div className="p-8 space-y-5" dir="rtl">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 lp-star fill-current" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-muted-foreground text-sm">({product.reviews} تقييم)</span>
            </div>

            <h3 className="text-3xl font-bold">{product.name}</h3>
            <p className="text-muted-foreground leading-relaxed">
              مصنوعة بزيت الأرغان الجزائري الأصيل + خلاصة التمر والزيتون
            </p>

            <div className="space-y-2">
              <p className="font-bold text-foreground text-lg mb-4">فوائده المذهلة:</p>
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="p-1.5 bg-blue-50 text-blue-500 rounded-lg">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground/80">ترطيب عميق لمدة 24 ساعة</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1.5 bg-amber-50 text-amber-500 rounded-lg">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground/80">تنعيم وتلطيف البشرة فوراً</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1.5 bg-red-50 text-red-400 rounded-lg">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground/80">تقليل الجفاف والتشققات</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1.5 bg-orange-50 text-orange-500 rounded-lg">
                    <Sun className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground/80">إعطاء نضارة وإشراق طبيعي</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1.5 bg-green-50 text-green-500 rounded-lg">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground/80">مناسب لكل أنواع البشرة (حتى الحساسة)</span>
                </li>
              </ul>
            </div>

            <div className="mb-2 mt-4 flex flex-col items-start gap-2">
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl font-bold text-red-500/80 line-through decoration-2 decoration-red-500">
                  {product.originalPrice} دج
                </span>
                <span className="inline-flex items-center justify-center bg-green-100 text-green-700 text-sm font-extrabold px-3 py-1 rounded-full border border-green-200 shadow-sm animate-pulse">
                  خصم {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% (توفري {product.originalPrice - product.price} دج)
                </span>
              </div>
              <div className="text-5xl md:text-6xl font-black text-[#8B3A2A] drop-shadow-sm mt-1">
                {product.price} <span className="text-3xl md:text-4xl font-bold tracking-tight">دج فقط</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span>عرض خاص لهذا الأسبوع فقط</span>
            </div>

            {/* مؤشرات الندرة والسوشال بروف */}
            <div className="w-full max-w-md my-4 flex flex-col gap-3">
              {/* Live Viewers */}
              <div className="flex items-center justify-center gap-2 bg-orange-50 border border-orange-200 text-orange-800 px-3 py-2.5 rounded-xl shadow-sm w-fit">
                <span className="animate-pulse text-lg">🔥</span>
                <span className="text-sm md:text-base font-bold">28 شخص يشاهدون هذا المنتج الآن</span>
              </div>

              {/* Scarcity Bar */}
              <div className="flex flex-col gap-2.5 bg-red-50/80 border border-red-200 rounded-xl p-3.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                    </div>
                    <span className="text-sm font-extrabold text-red-700">متبقي 9 قطع فقط!</span>
                  </div>
                  <span className="text-xs font-bold text-red-800/80">تم بيع 53 قطعة اليوم</span>
                </div>
                <div className="w-full bg-red-200 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-red-600 h-full rounded-full relative" style={{ width: '12%' }}>
                    <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>

              {/* Recent Order Notification */}
              <div className="flex items-center gap-3 bg-white border border-green-100 shadow-sm rounded-xl p-3 mt-1 animate-in fade-in slide-in-from-bottom-2 duration-700 w-fit pr-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-sm font-bold text-gray-800">فاطمة من وهران</span>
                  <span className="text-xs font-medium text-gray-500 mt-0.5">قامت بطلب كريم الأرغان قبل 5 دقائق</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border-2 border-red-100 bg-gradient-to-r from-red-50 to-orange-50 p-4 shadow-sm w-fit">
              <div className="flex items-center gap-2">
                <span className="text-2xl animate-pulse drop-shadow-sm">⏰</span>
                <span className="text-base font-extrabold text-red-700 tracking-tight">ينتهي العرض خلال:</span>
              </div>
              <div className="flex items-center gap-2" dir="ltr">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-b from-red-500 to-orange-600 text-xl font-black text-white shadow-lg ring-1 ring-black/10">
                    {formatTime(hours)}
                  </div>
                  <span className="text-[11px] font-bold text-red-700/80">ساعات</span>
                </div>
                <span className="text-red-500/50 font-black text-2xl -mt-5 animate-pulse">:</span>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-b from-red-500 to-orange-600 text-xl font-black text-white shadow-lg ring-1 ring-black/10">
                    {formatTime(minutes)}
                  </div>
                  <span className="text-[11px] font-bold text-red-700/80">دقائق</span>
                </div>
                <span className="text-red-500/50 font-black text-2xl -mt-5 animate-pulse">:</span>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-b from-red-500 to-orange-600 text-xl font-black text-white shadow-lg ring-1 ring-black/10">
                    {formatTime(seconds)}
                  </div>
                  <span className="text-[11px] font-bold text-red-700/80">ثواني</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="flex-1 text-base lp-cta">
                <a href="#order-section">
                  <ShoppingBag className="w-5 h-5 ml-2" />
                  اطلبي الآن
                </a>
              </Button>

              <Link href={`/product/${product.id}`} className="flex-1">
                <Button size="lg" variant="outline" className="w-full text-base font-semibold border-border hover:bg-muted">
                  تفاصيل المنتج
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
