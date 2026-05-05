import Link from "next/link"
import { CheckCircle2, Gift, ArrowLeft, ShieldCheck, Truck, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products-data"

const UPSELL_PRODUCT_ID = 2

export default function ThankYouPage() {
  const upsell = products.find((p) => p.id === UPSELL_PRODUCT_ID) ?? products[1] ?? products[0]
  const savings = upsell.originalPrice - upsell.price

  return (
    <main dir="rtl" className="min-h-screen bg-[#f8fbf1] text-[#244822]">
      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-3xl mx-auto bg-white border border-[#e3edd0] rounded-3xl shadow-sm overflow-hidden">
          <div className="px-6 md:px-10 py-8 text-center border-b border-[#e9f1dc] bg-[#f3f9e8]">
            <CheckCircle2 className="w-14 h-14 mx-auto text-[#2d5a27] mb-3" />
            <p className="text-sm font-bold text-[#2d5a27]/80 mb-2">تم استلام طلبك بنجاح</p>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-2">شكرا لثقتك</h1>
            <p className="text-[#2d5a27]/75 text-sm md:text-base">
              يتصل بك فريقنا قريباً لتأكيد العنوان والشحن
            </p>
          </div>

          <div className="px-6 md:px-10 py-8">
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 bg-[#dff063] text-black font-extrabold text-sm px-4 py-1 rounded-full">
                <Gift className="w-4 h-4" />
                Upsell خاص بعد الطلب
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold mt-4 mb-2">
                كمّلي روتينك مع {upsell.name}
              </h2>
              <p className="text-[#2d5a27]/75">
                عرض إضافي متاح الآن فقط قبل إغلاق الطلب.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e3edd0] bg-[#fbfdf6] p-5 md:p-6 text-center mb-6">
              <p className="text-sm text-[#2d5a27]/70 line-through">{upsell.originalPrice} دج</p>
              <p className="text-4xl font-extrabold my-1">{upsell.price} دج</p>
              <p className="text-sm font-bold text-[#2d5a27]/80">
                وفر/ي {savings} دج عند إضافة هذا المنتج الآن
              </p>
              <p className="text-sm text-[#2d5a27]/75 mt-3">{upsell.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-center">
              <div className="text-xs bg-white border border-[#e5ecd8] rounded-lg py-2 px-2">نفس الشحنة - دفع عند الاستلام</div>
              <div className="text-xs bg-white border border-[#e5ecd8] rounded-lg py-2 px-2">عرض صالح مباشرة بعد الطلب فقط</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="lp-cta text-base">
                <Link href={`/?upsell=${upsell.id}#order-section`}>
                  أضيفي العرض الإضافي الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <a
                  href="https://wa.me/213662559416?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AA%D8%A3%D9%83%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%D9%8A%20%D9%85%D9%86%20Glow%20Cosmetique."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  تواصل عبر واتساب
                  <MessageCircle className="mr-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link href="/">
                  العودة للرئيسية
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#2d5a27]/70">
              <span className="inline-flex items-center gap-1">
                <Truck className="w-4 h-4" />
                شحن سريع لكل الولايات
              </span>
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                جودة مضمونة قبل الاستلام
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
