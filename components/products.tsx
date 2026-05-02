"use client"

import { ShoppingBag, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
    color: "bg-rose-100"
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
    color: "bg-amber-100"
  },
  {
    id: 3,
    name: "غسول وجه بالعسل الطبيعي",
    description: "تنظيف عميق بدون جفاف",
    price: 1800,
    originalPrice: 2200,
    rating: 4.7,
    reviews: 89,
    badge: "",
    color: "bg-yellow-100"
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
    color: "bg-orange-100"
  },
  {
    id: 5,
    name: "زيت أرغان جزائري نقي",
    description: "للوجه والشعر - عضوي 100%",
    price: 3500,
    originalPrice: 4200,
    rating: 5,
    reviews: 234,
    badge: "الأفضل تقييماً",
    color: "bg-green-100"
  },
  {
    id: 6,
    name: "كريم مكافحة التصبغات",
    description: "نتائج ملحوظة خلال أسبوعين",
    price: 4200,
    originalPrice: 5000,
    rating: 4.8,
    reviews: 145,
    badge: "",
    color: "bg-purple-100"
  }
]

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
        <div className="grid grid-cols-1 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-row">
              {/* صورة المنتج */}
              <div className={`relative w-40 shrink-0 overflow-hidden ${product.color}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-4xl">🧴</span>
                  </div>
                </div>
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* تفاصيل المنتج */}
              <CardContent className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews} تقييم)</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">{product.price} دج</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice} دج</span>
                  </div>
                  <Button className="shadow-lg font-semibold">
                    <ShoppingBag className="w-4 h-4 ml-2" />
                    أضيفي للسلة
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
