"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"

const transformations = [
  {
    id: 1,
    beforeLabel: "قبل",
    afterLabel: "بعد 4 أسابيع",
    issue: "حبوب وبقع داكنة",
    result: "بشرة صافية ومشرقة",
    product: "سيروم فيتامين C + كريم التصبغات"
  },
  {
    id: 2,
    beforeLabel: "قبل",
    afterLabel: "بعد 3 أسابيع",
    issue: "جفاف شديد وتشققات",
    result: "ترطيب عميق ونعومة",
    product: "كريم الأرغان المرطب"
  },
  {
    id: 3,
    beforeLabel: "قبل",
    afterLabel: "بعد 2 أسبوع",
    issue: "مسام واسعة ودهون زائدة",
    result: "مسام مغلقة وبشرة نظيفة",
    product: "ماسك الطين المغربي"
  }
]

export function BeforeAfter() {
  return (
    <section id="results" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">نتائج حقيقية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            شوفي الفرق بنفسك... نتائج حقيقية
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            صور حقيقية من زبوناتنا - نفس الإضاءة، نفس الزاوية، نتائج مذهلة
          </p>
        </div>

        {/* بطاقات قبل وبعد */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {transformations.map((item) => (
            <div key={item.id} className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-shadow">
              {/* صور قبل وبعد */}
              <div className="grid grid-cols-2">
                {/* قبل */}
                <div className="relative aspect-square bg-rose-100/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-rose-200/80 flex items-center justify-center">
                      <span className="text-2xl">😔</span>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-foreground/80 text-background text-xs font-bold px-3 py-1 rounded-full">
                    {item.beforeLabel}
                  </span>
                  <p className="absolute bottom-3 right-3 left-3 text-xs text-foreground/70 bg-background/70 backdrop-blur-sm rounded-lg px-2 py-1 text-center">
                    {item.issue}
                  </p>
                </div>
                {/* بعد */}
                <div className="relative aspect-square bg-accent/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent/50 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {item.afterLabel}
                  </span>
                  <p className="absolute bottom-3 right-3 left-3 text-xs text-foreground bg-background/70 backdrop-blur-sm rounded-lg px-2 py-1 text-center font-medium">
                    {item.result}
                  </p>
                </div>
              </div>
              {/* معلومات المنتج */}
              <div className="p-5 text-center">
                <p className="text-sm text-muted-foreground mb-3">المنتج المستخدم:</p>
                <p className="font-bold text-foreground">{item.product}</p>
                <Button className="mt-4 w-full" variant="outline">
                  اكتشفي المنتج
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="text-lg px-10 py-6 h-auto font-bold shadow-lg shadow-primary/30">
            شوفي كل النتائج
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

