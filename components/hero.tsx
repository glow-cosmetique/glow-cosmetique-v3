import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Leaf, Droplets } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* خلفية ناعمة مع تدرجات */}
      <div className="absolute inset-0 bg-gradient-to-bl from-secondary via-background to-accent/10" />
      
      {/* عناصر زخرفية - لمسات نباتية */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 opacity-20">
        <Leaf className="w-32 h-32 text-accent" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 opacity-15">
        <Droplets className="w-24 h-24 text-primary" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* شارة الثقة */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              +10,000 زبونة سعيدة في الجزائر
            </span>
          </div>

          {/* العنوان الرئيسي الكبير */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-foreground text-balance">
            بشرة نضرة ومشرقة...
            <br />
            <span className="text-primary">طبيعية 100%</span>
            <br />
            من الجزائر إلى بشرتك
          </h1>

          {/* الوصف */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            منتجات عناية بالبشرة طبيعية وفعالة، مصممة خصيصاً للبشرة الجزائرية في مناخنا الحار والجاف. 
            <span className="font-semibold text-foreground"> ترطيب عميق، توحيد لون، مكافحة الحبوب والتصبغات.</span>
          </p>

          {/* CTA واحد رئيسي */}
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="text-lg px-10 py-7 h-auto font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
              تسوقي الآن - التوصيل لكل الولايات
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground">
              عرض خاص: خصم 20% على أول طلب
            </p>
          </div>

          {/* مؤشرات الثقة */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
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
