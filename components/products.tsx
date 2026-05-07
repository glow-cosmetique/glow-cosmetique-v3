"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Star, CheckCircle } from "lucide-react"
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
              <p className="font-bold text-foreground">فوائده:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>ترطيب عميق لمدة 24 ساعة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>تنعيم وتلطيف البشرة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>تقليل الجفاف والتشققات</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>إعطاء نضارة وإشراق طبيعي</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>مناسب لكل أنواع البشرة (حتى الحساسة)</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-3xl font-bold text-[var(--card-price)]">{product.price} دج</span>
              <span className="text-lg text-[var(--card-lbl)] line-through">{product.originalPrice} دج</span>
              <span className="text-sm font-semibold px-2 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--discount)]">
                (توفر {product.originalPrice - product.price} دج)
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span>عرض خاص لهذا الأسبوع فقط</span>
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
