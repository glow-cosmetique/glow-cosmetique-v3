"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Star, CheckCircle } from "lucide-react"
import { products } from "@/lib/products-data"

// ← غيّر هذا الرقم لتغيير المنتج الظاهر (1 إلى 6)
const FEATURED_PRODUCT_ID = 1

// Placeholder SVG
function ProductPlaceholder({ color }: { color: string }) {
  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 ${color}`}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-40"
      >
        <rect x="28" y="8" width="24" height="8" rx="4" fill="currentColor" />
        <rect x="20" y="16" width="40" height="52" rx="8" fill="currentColor" />
        <rect x="28" y="30" width="24" height="3" rx="1.5" fill="white" opacity="0.6" />
        <rect x="28" y="38" width="16" height="3" rx="1.5" fill="white" opacity="0.4" />
        <circle cx="40" cy="54" r="6" fill="white" opacity="0.3" />
      </svg>
      <span className="text-xs text-current opacity-30 font-medium">صورة المنتج</span>
    </div>
  )
}

export function Products() {
  const product = products.find((p) => p.id === FEATURED_PRODUCT_ID) ?? products[0]

  return (
    <section id="products" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* العنوان */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            منتج اليوم
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            اختيارنا لكِ هذا الأسبوع
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            منتج طبيعي 100% مثبت علمياً وآمن لكل أنواع البشرة
          </p>
        </div>

        {/* المنتج الواحد */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-background rounded-3xl shadow-md overflow-hidden border border-border/50">

          {/* صورة المنتج */}
          <div className={`relative aspect-square overflow-hidden ${product.color}`}>
            <ProductPlaceholder color={product.color} />
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-10"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none"
              }}
            />
            {product.badge && (
              <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
                {product.badge}
              </span>
            )}
          </div>

          {/* معلومات المنتج */}
          <div className="p-8 space-y-5" dir="rtl">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-muted-foreground text-sm">({product.reviews} تقييم)</span>
            </div>

            <h3 className="text-3xl font-bold">{product.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-3xl font-bold text-primary">{product.price} دج</span>
              <span className="text-lg text-muted-foreground line-through">{product.originalPrice} دج</span>
              <span className="bg-primary/10 text-primary text-sm font-semibold px-2 py-1 rounded-md">
                وفري {product.originalPrice - product.price} دج
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>توصيل لكل الولايات - الدفع عند الاستلام</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="flex-1 text-base font-semibold">
                <ShoppingBag className="w-5 h-5 ml-2" />
                أضيفي للسلة
              </Button>
              <Link href={`/product/${product.id}`} className="flex-1">
                <Button size="lg" variant="outline" className="w-full text-base font-semibold">
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



