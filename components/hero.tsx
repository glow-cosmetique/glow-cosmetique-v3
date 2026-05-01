import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Sparkles, Leaf, Droplets } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [showAfter, setShowAfter] = useState(false)

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
          {/* شارة الثقة - معدلة لتكون خاصة بالمنتج */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              منتج العناية بالبشرة الأول في الجزائر
            </span>
          </div>

          {/* العنوان الرئيسي الكبير - يركز على الفائدة الملموسة */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-foreground text-balance">
            بشرة خالية من العيوب في 7 أيام
            <br />
            <span className="text-primary">نتائج مضمونة وطبيعية</span>
          </h1>

          {/* الوصف المركّز على منتج واحد */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            كريم العناية الشامل للبشرة الجزائرية، بتركيبة فريدة من الزيوت الطبيعية والمستخلصات النباتية.
            <br />
            <span className="font-semibold text-foreground">يُUniform لون البشرة، يقلل التصبغات، ويمنح ترطيبًا يدوم 24 ساعة.</span>
          </p>

          {/* قسم قبل وبعد تفاعلي */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">الفرق قبل وبعد الاستخدام</h2>
            <div className="relative w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-lg">
              {/* صورة قبل أو بعد حسب الحالة */}
              {showAfter ? (
                <img 
                  src="/after.jpg" 
                  alt="بعد استخدام المنتج" 
                  className="w-full h-auto object-cover transition-opacity duration-500"
                />
              ) : (
                <img 
                  src="/before.jpg" 
                  alt="قبل استخدام المنتج" 
                  className="w-full h-auto object-cover transition-opacity duration-500"
                />
              )}
              {/* زر التبديل التفاعلي */}
              <button
                onClick={() => setShowAfter(!showAfter)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2.5 hover:bg-white/95 transition-all duration-200 ring-2 ring-primary/20"
                aria-label="عرض الصورة قبل أو بعد"
              >
                {showAfter ? (
                  <ArrowLeft className="w-5 h-5 text-primary rotate-180" />
                ) : (
                  <ArrowRight className="w-5 h-5 text-primary" />
                )}
              </button>
              {/* شريط التقدم التوضيحي */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20">
                <div 
                  className="absolute left-0 top-0 h-full w-[50%] bg-primary transition-width duration-500"
                  style={{ width: showAfter ? '100%' : '0%' }}
                ></div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              اسحب المقبض أو اضغط على الزر لمقارنة النتائج
            </p>
          </div>

          {/* CTA واحد رئيسي واضح */}
          <div className="flex flex-col items-center gap-6">
            <Button 
              size="lg" 
              className="text-lg px-12 py-8 h-auto font-bold shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5"
            >
              احصل على الكريم الآن - نتائج مرئية خلال أسبوع
              <ArrowLeft className="mr-3 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground">
              عرض خاص: شحن مجاني + ضمان استرداد المال خلال 30 يومًا
            </p>
          </div>

          {/* مؤشرات الثقة */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-14 pt-10 border-t border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-sm font-medium">مكونات طبيعية 100%</span>
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
              <span className="text-sm font-medium">توصيل لجميع الولايات</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-lg">↩️</span>
              </div>
              <span className="text-sm font-medium">ضمان رضا كامل</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}