import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { products } from "@/lib/products-data"

const FEATURED_PRODUCT_ID = 1

export function MidCTA() {
  const product = products.find((p) => p.id === FEATURED_PRODUCT_ID) ?? products[0]
  const savings = product.originalPrice - product.price

  return (
    <section className="py-16 bg-secondary text-foreground border-y border-border">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block bg-accent/15 lp-accent-text text-sm font-extrabold px-4 py-1 rounded-full mb-4">
          ✦ خصم اليوم ينتهي قريبًا ✦
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-balance">
          احصلي على بشرة أنعم وإشراقة أوضح خلال أسابيع
        </h2>
        <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
          تركيبة مناسبة للبشرة الجزائرية بنتائج ملحوظة مع الاستعمال المنتظم
        </p>
        <div className="mb-3">
          <p className="text-lg md:text-xl text-foreground/65 line-through">
            {product.originalPrice} دج
          </p>
          <p className="text-4xl font-extrabold lp-accent-text">
            {product.price} دج فقط
          </p>
          <p className="text-sm font-bold lp-accent-text mt-1">
            توفري اليوم {savings} دج
          </p>
        </div>
        <p className="text-sm md:text-base text-foreground/80 mb-7">
          ⭐ {product.rating} / 5 من {product.reviews}+ مراجعة حقيقية
        </p>

        <Button
          asChild
          size="lg"
          variant="default"
          className="w-full sm:w-auto text-base sm:text-lg px-10 py-4 h-auto whitespace-nowrap lp-cta"
        >
          <a href="#order-section">
            اطلبي الآن واستفيدي من السعر المخفض
            <ArrowLeft className="mr-2 h-5 w-5" />
          </a>
        </Button>

        <div className="mt-4 space-y-1">
          <p className="text-sm text-foreground/75">
            دفع عند الاستلام - شحن سريع لجميع الولايات
          </p>
          <p className="text-xs text-foreground/65">
            ضمان جودة المنتج قبل الاستلام - الكمية محدودة
          </p>
        </div>
      </div>
    </section>
  )
}

