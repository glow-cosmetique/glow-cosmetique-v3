import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, ArrowRight, ShoppingBag, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products-data"

interface Props {
  params: { id: string }
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === Number(params.id))
  if (!product) notFound()

  return (
    <div className="min-h-screen bg-background" dir="rtl">

      {/* رجوع */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/#products" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm w-fit">
          <ArrowRight className="w-4 h-4" />
          رجوع للمنتجات
        </Link>
      </div>

      {/* قسم المنتج الرئيسي */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* صورة المنتج */}
          <div className={`relative aspect-square rounded-2xl overflow-hidden ${product.color}`}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-8"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none"
              }}
            />
            {product.badge && (
              <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          {/* معلومات المنتج */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-muted-foreground text-sm">({product.reviews} تقييم)</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.longDescription}</p>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">{product.price} دج</span>
              <span className="text-lg text-muted-foreground line-through">{product.originalPrice} دج</span>
              <span className="bg-primary/10 text-primary text-sm font-semibold px-2 py-1 rounded-md">
                وفري {product.originalPrice - product.price} دج
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>توصيل لكل الولايات - الدفع عند الاستلام</span>
            </div>

            <Button size="lg" className="w-full md:w-auto text-base font-semibold px-8">
              <ShoppingBag className="w-5 h-5 ml-2" />
              أضيفي للسلة
            </Button>
          </div>
        </div>
      </section>

      {/* قسم النتائج - Before/After */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">نتائج حقيقية</span>
            <h2 className="text-3xl font-bold mt-2">قبل وبعد الاستخدام</h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              نتائج حقيقية من زبوناتنا بعد الاستخدام المنتظم
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* صورة Before/After */}
            <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={product.beforeAfterImage}
                alt={`نتائج ${product.name} قبل وبعد`}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none"
                }}
              />
              {/* Labels */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between pointer-events-none">
                <span className="bg-black/60 text-white text-sm font-bold px-3 py-1 rounded-full">قبل</span>
                <span className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">بعد</span>
              </div>
            </div>

            {/* نتيجة مميزة */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4" />
                {product.results}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA نهائي */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">جاهزة لتجربي الفرق؟</h2>
        <p className="text-muted-foreground mb-8">الدفع عند الاستلام - توصيل لكل الولايات</p>
        <Button size="lg" className="text-base font-semibold px-10">
          <ShoppingBag className="w-5 h-5 ml-2" />
          اطلبي الآن - {product.price} دج
        </Button>
      </section>

    </div>
  )
}
