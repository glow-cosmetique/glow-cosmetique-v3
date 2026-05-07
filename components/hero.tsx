"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Leaf } from "lucide-react"

export function Hero() {
  const targetTime = useMemo(() => Date.now() + 1000 * 60 * 60 * 6, [])
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(Math.max(targetTime - Date.now(), 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetTime])

  const totalSeconds = Math.floor(timeLeft / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const formatTime = (value: number) => value.toString().padStart(2, "0")

  return (
    <section className="relative min-h-[84vh] flex items-center overflow-hidden lp-hero">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff7f2] via-[#fdf0e8] to-[#fff7f2]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* شارة الثقة */}
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 mb-8 shadow-sm bg-[var(--badge-bg)]">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-[var(--badge-txt)]">
              +10,000 زبونة سعيدة في الجزائر
            </span>
          </div>

          {/* العنوان الرئيسي الكبير */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-[var(--hero-title)] text-balance">
            توقفي عن تضييع الوقت مع منتجات ما تناسب بشرتك.
            <br />
            <span className="text-[var(--btn-bg)]">روتيننا صُمّم خصيصًا للبشرة الجزائرية.</span>
          </h1>

          {/* الوصف */}
          <p className="text-lg sm:text-xl text-[var(--hero-sub)] max-w-2xl mx-auto mb-7 leading-relaxed text-pretty">
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
            <p className="text-sm lp-discount">
              عرض خاص: خصم 20% على أول طلب
            </p>
            <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 shadow-sm">
              <span className="text-xs font-semibold text-muted-foreground">ينتهي خلال:</span>
              <span className="font-mono text-sm font-bold text-primary tracking-wider">
                {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
              </span>
            </div>
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
