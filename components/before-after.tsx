"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"

const transformations = [
  {
    id: 1,
    beforeLabel: "قبل",
    afterLabel: "بعد 4 أسابيع",
    issue: "حبوب وبقع داكنة",
    result: "بشرة صافية ومشرقة",
    product: "سيروم فيتامين C + كريم التصبغات",
    beforeImage: "/results/before-1.jpg",
    afterImage: "/results/after-1.jpg",
  },
  {
    id: 2,
    beforeLabel: "قبل",
    afterLabel: "بعد 3 أسابيع",
    issue: "جفاف شديد وتشققات",
    result: "ترطيب عميق ونعومة",
    product: "كريم الأرغان المرطب",
    beforeImage: "/results/before-2.jpg",
    afterImage: "/results/after-2.jpg",
  },
  {
    id: 3,
    beforeLabel: "قبل",
    afterLabel: "بعد 2 أسبوع",
    issue: "مسام واسعة ودهون زائدة",
    result: "مسام مغلقة وبشرة نظيفة",
    product: "ماسك الطين المغربي",
    beforeImage: "/results/before-3.jpg",
    afterImage: "/results/after-3.jpg",
  },
  {
    id: 4,
    beforeLabel: "قبل",
    afterLabel: "بعد 5 أسابيع",
    issue: "تصبغات غير موحدة",
    result: "لون بشرة أكثر تجانسًا",
    product: "كريم مكافحة التصبغات",
    beforeImage: "/results/before-4.jpg",
    afterImage: "/results/after-4.jpg",
  },
  {
    id: 5,
    beforeLabel: "قبل",
    afterLabel: "بعد 3 أسابيع",
    issue: "بهتان وفقدان إشراق",
    result: "نضارة ولمعان طبيعي",
    product: "سيروم فيتامين C",
    beforeImage: "/results/before-5.jpg",
    afterImage: "/results/after-5.jpg",
  },
]

export function BeforeAfter() {
  return (
    <section id="results" className="py-20 bg-[#fafcf5]">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {transformations.map((item) => (
            <div key={item.id} className="lp-card overflow-hidden">
              {/* صور قبل وبعد */}
              <div className="grid grid-cols-2">
                {/* قبل */}
                <div className="relative h-[420px] sm:h-[540px] md:h-[680px] bg-[#f9f1f1]">
                  <Image
                    src={item.beforeImage}
                    alt={`نتيجة قبل - ${item.issue}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = "none"
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-2xl">😔</div>
                  <span className="absolute top-3 right-3 bg-foreground/80 text-background text-xs font-bold px-3 py-1 rounded-full">
                    {item.beforeLabel}
                  </span>
                  <p className="absolute bottom-3 right-3 left-3 text-xs text-foreground/70 bg-background/70 backdrop-blur-sm rounded-lg px-2 py-1 text-center">
                    {item.issue}
                  </p>
                </div>
                {/* بعد */}
                <div className="relative h-[420px] sm:h-[540px] md:h-[680px] bg-[#eef7da]">
                  <Image
                    src={item.afterImage}
                    alt={`نتيجة بعد - ${item.result}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = "none"
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-2xl">✨</div>
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
                <Button asChild className="mt-4 w-full lp-cta">
                  <a href="#order-section">
                    اطلبي نفس الروتين
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-10 py-6 h-auto lp-cta">
            <a href="#order-section">
              اطلبي الآن وشوفي النتيجة بنفسك
              <ArrowLeft className="mr-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

