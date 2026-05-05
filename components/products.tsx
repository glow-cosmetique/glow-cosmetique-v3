"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Star, CheckCircle } from "lucide-react"
import { products } from "@/lib/products-data"

const FEATURED_PRODUCT_ID = 1

function ProductPlaceholder({ color }: { color: string }) {
  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 ${color}`}>
      <span className="text-xs text-current opacity-30 font-medium">صورة المنتج</span>
    </div>
  )
}

export function Products() {
  const product = products.find((p) => p.id === FEATURED_PRODUCT_ID) ?? products[0]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">منتج الأسبوع</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">اختيارنا لكِ</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            تركيبة طبيعية فعالة، مناسبة لكل أنواع البشرة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center lp-card overflow-hidden">
          <div className="relative aspect-square overflow-hidden bg-white">
            <ProductPlaceholder color={product.color} />
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = "none"
              }}
            />
          </div>

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
                وفرّي {product.originalPrice - product.price} دج
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>توصيل لكل الولايات - الدفع عند الاستلام</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="flex-1 text-base lp-cta">
                <a href="#order-section">
                  <ShoppingBag className="w-5 h-5 ml-2" />
                  اطلبي الآن
                </a>
              </Button>

              <Link href={`/product/${product.id}`} className="flex-1">
                <Button size="lg" variant="outline" className="w-full text-base font-semibold border-[#dfe7d0] hover:bg-[#f5fae8]">
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
