import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Leaf } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[84vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fbfdf7] to-[#f6faed]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* شارة الثقة */}
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              +10,000 زبونة سعيدة في الجزائر
            </span>
          </div>

          {/* العنوان الرئيسي الكبير */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-foreground text-balance">
            توقفي عن تضييع الوقت مع منتجات ما تناسب بشرتك.
            <br />
            <span className="text-primary">روتيننا صُمّم خصيصًا للبشرة الجزائرية.</span>
          </h1>

          {/* الوصف */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-7 leading-relaxed text-pretty">
            روتين طبيعي 100% للبشرة الجزائرية:
            <span className="font-semibold text-foreground"> ترطيب، توحيد لون، وتقليل الحبوب بسرعة.</span>
          </p>

          {/* CTA واحد رئيسي */}
          <div className="flex flex-col items-center gap-4">
            <Button asChild size="lg" className="text-lg px-10 py-6 h-auto lp-cta">
              <a href="#order-section">
                تسوقي الآن - التوصيل لكل الولايات
                <ArrowLeft className="mr-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              عرض خاص: خصم 20% على أول طلب
            </p>
          </div>

          {/* مؤشرات الثقة */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-7 border-t border-border/70">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent/40 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-sm font-medium">طبيعي 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-lg">🇩🇿</span>
              </div>
              <span className="text-sm font-medium">صنع في الجزائر</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-lg">🚚</span>
              </div>
              <span className="text-sm font-medium">توصيل لـ 58 ولاية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
