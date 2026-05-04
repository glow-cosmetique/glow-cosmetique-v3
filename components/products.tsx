"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "كريم مرطب بزيت الأرغان",
    description: "ترطيب عميق يدوم 24 ساعة",
    price: 2500,
    originalPrice: 3200,
    rating: 4.9,
    reviews: 156,
    badge: "الأكثر مبيعاً",
    color: "bg-rose-100",
    image: "/products/product-1.jpg", // ← ضع اسم صورتك هنا لاحقاً
  },
  {
    id: 2,
    name: "سيروم فيتامين C",
    description: "توحيد لون البشرة وإشراقها",
    price: 3200,
    originalPrice: 4000,
    rating: 4.8,
    reviews: 203,
    badge: "جديد",
    color: "bg-amber-100",
    image: "/products/product-2.jpg",
  },
  {
    id: 3,
    name: "غسول وجه بالعسل الطبيعي",
    description: "تنظيف عميق بدون جفاف",
    price: 1800,
    originalPrice: 2200,
    rating: 4.7,
    reviews: 89,
    badge: null,
    color: "bg-orange-100",
    image: "/products/product-3.jpg",
  },
  {
    id: 4,
    name: "ماسك الطين المغربي",
    description: "تنقية المسام وإزالة السموم",
    price: 2800,
    originalPrice: 3500,
    rating: 4.9,
    reviews: 178,
    badge: "عرض خاص",
    color: "bg-emerald-100",
    image: "/products/product-4.jpg",
  },
  {
    id: 5,
    name: "زيت أرغان جزائري نقي",
    description: "للوجه والشعر - عضوي 100%",
    price: 3500,
    originalPrice: 4200,
    rating: 5.0,
    reviews: 234,
    badge: "الأفضل تقييماً",
    color: "bg-yellow-100",
    image: "/products/product-5.jpg",
  },
  {
    id: 6,
    name: "كريم مكافحة التصبغات",
    description: "نتائج ملحوظة خلال أسبوعين",
    price: 4200,
    originalPrice: 5000,
    rating: 4.8,
    reviews: 145,
    badge: null,
    color: "bg-pink-100",
    image: "/products/product-6.jpg",
  },
]

// Placeholder SVG لما ما تكون الصورة موجودة
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
  return (
    <section id="products" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            منتجاتنا المميزة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance">
            اختاري ما يناسب بشرتك
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            كل منتجاتنا مصنوعة من مكونات طبيعية محلية، مثبتة علمياً وآمنة لكل أنواع البشرة
          </p>
        </div>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className={`relative aspect-square overflow-hidden ${product.color}`}>

                {/* Placeholder دائماً موجود كخلفية */}
                <ProductPlaceholder color={product.color} />

                {/* الصورة الحقيقية — لما تضيفها بتظهر فوق الـ placeholder */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={product.id <= 3}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // إخفاء الصورة لو ما وُجدت، يبقى الـ placeholder ظاهر
                    (e.target as HTMLImageElement).style.display = "none"
                  }}
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
                    {product.badge}
                  </span>
                )}

                {/* زر السلة عند hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/10 z-10">
                  <Button className="shadow-lg font-semibold">
                    <ShoppingBag className="w-4 h-4 ml-2" />
                    أضيفي للسلة
                  </Button>
                </div>
              </div>

              <CardContent className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews} تقييم)</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">{product.price} دج</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice} دج</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


