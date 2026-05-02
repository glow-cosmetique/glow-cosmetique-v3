"use client"

import { Sparkles } from "lucide-react"

export function BeforeAfter() {
  return (
    <section id="results" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">نتائج حقيقية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            شوفي الفرق بنفسك... نتائج حقيقية
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            صور حقيقية من زبوناتنا - نفس الإضاءة، نفس الزاوية، نتائج مذهلة
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg">
          <div className="grid grid-cols-2">
            <div className="relative aspect-square bg-rose-100/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-rose-200/80 flex items-center justify-center">
                  <span className="text-4xl">😔</span>
                </div>
              </div>
              <span className="absolute top-4 right-4 bg-foreground/80 text-background text-sm font-bold px-4 py-1.5 rounded-full">
                قبل
              </span>
              <div className="absolute bottom-4 right-3 left-3 text-xs text-foreground/70 bg-background/80 backdrop-blur-sm rounded-xl px-3 py-2 text-center space-y-1">
                <p>✗ حبوب وبقع داكنة</p>
                <p>✗ مسام واسعة</p>
                <p>✗ دهون زائدة</p>
              </div>
            </div>

            <div className="relative aspect-square bg-accent/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-accent/50 flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
              </div>
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full">
                بعد 4 أسابيع
              </span>
              <div className="absolute bottom-4 right-3 left-3 text-xs text-foreground bg-background/80 backdrop-blur-sm rounded-xl px-3 py-2 text-center space-y-1 font-medium">
                <p>✓ بشرة صافية ومشرقة</p>
                <p>✓ مسام أصغر ونظيفة</p>
                <p>✓ بدون دهون زائدة</p>
              </div>
            </div>
          </div>

          <div className="p-6 text-center border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-1">المنتج المستخدم</p>
            <p className="font-extrabold text-xl text-foreground mb-4">Acide Salycilique</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-secondary/30 rounded-2xl p-3">
                <p className="text-2xl font-extrabold text-primary">94%</p>
                <p className="text-xs text-muted-foreground mt-1">رأوا نتيجة في أسبوعين</p>
              </div>
              <div className="bg-secondary/30 rounded-2xl p-3">
                <p className="text-2xl font-extrabold text-primary">+2000</p>
                <p className="text-xs text-muted-foreground mt-1">عميل راضٍ</p>
              </div>
              <div className="bg-secondary/30 rounded-2xl p-3">
                <p className="text-2xl font-extrabold text-primary">4★</p>
                <p className="text-xs text-muted-foreground mt-1">متوسط التقييم</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
