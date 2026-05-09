import Image from "next/image"
import fs from "node:fs"
import path from "node:path"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"

type TransformationMeta = {
  beforeLabel: string
  afterLabel: string
  issue: string
  result: string
  product: string
}

const transformationMetaById: Record<number, TransformationMeta> = {
  1: {
    beforeLabel: "قبل",
    afterLabel: "بعد 4 أسابيع",
    issue: "حبوب وبقع داكنة",
    result: "بشرة صافية ومشرقة",
    product: "سيروم فيتامين C + كريم التصبغات",
  },
  2: {
    beforeLabel: "قبل",
    afterLabel: "بعد 3 أسابيع",
    issue: "جفاف شديد وتشققات",
    result: "ترطيب عميق ونعومة",
    product: "كريم الأرغان المرطب",
  },
  3: {
    beforeLabel: "قبل",
    afterLabel: "بعد 2 أسبوع",
    issue: "مسام واسعة ودهون زائدة",
    result: "مسام مغلقة وبشرة نظيفة",
    product: "ماسك الطين المغربي",
  },
  4: {
    beforeLabel: "قبل",
    afterLabel: "بعد 5 أسابيع",
    issue: "تصبغات غير موحدة",
    result: "لون بشرة أكثر تجانسًا",
    product: "كريم مكافحة التصبغات",
  },
  5: {
    beforeLabel: "قبل",
    afterLabel: "بعد 3 أسابيع",
    issue: "بهتان وفقدان إشراق",
    result: "نضارة ولمعان طبيعي",
    product: "سيروم فيتامين C",
  },
}

const defaultMeta: TransformationMeta = {
  beforeLabel: "قبل",
  afterLabel: "بعد",
  issue: "الحالة قبل الاستخدام",
  result: "النتيجة بعد الاستخدام",
  product: "روتين العناية المناسب",
}

function getTransformations() {
  const resultsDir = path.join(process.cwd(), "public", "results")

  if (!fs.existsSync(resultsDir)) return []

  const files = fs.readdirSync(resultsDir)
  const beforeRegex = /^before-(\d+)\.(jpg|jpeg|png|webp)$/i
  const afterRegex = /^after-(\d+)\.(jpg|jpeg|png|webp)$/i

  const beforeByIndex = new Map<number, string>()
  const afterByIndex = new Map<number, string>()

  for (const file of files) {
    const beforeMatch = file.match(beforeRegex)
    if (beforeMatch) {
      beforeByIndex.set(Number(beforeMatch[1]), file)
      continue
    }

    const afterMatch = file.match(afterRegex)
    if (afterMatch) {
      afterByIndex.set(Number(afterMatch[1]), file)
    }
  }

  return [...beforeByIndex.keys()]
    .filter((index) => afterByIndex.has(index))
    .sort((a, b) => a - b)
    .map((index) => {
      const meta = transformationMetaById[index] ?? defaultMeta

      return {
        id: index,
        ...meta,
        beforeImage: `/results/${beforeByIndex.get(index)}`,
        afterImage: `/results/${afterByIndex.get(index)}`,
      }
    })
}

export function BeforeAfter() {
  const transformations = getTransformations()

  return (
    <section id="results" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="inline-block px-10 py-6 bg-white/40 backdrop-blur-lg border border-white/60 rounded-3xl text-5xl sm:text-6xl md:text-7xl font-black mb-6 text-balance text-black shadow-lg">
            نتائج حقيقية
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
            شوفي الفرق بنفسك... صور حقيقية من زبوناتنا قبل وبعد الاستعمال
          </p>
        </div>

        {/* بطاقات قبل وبعد */}
        {transformations.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            {transformations.map((item) => (
              <div key={item.id} className="lp-card overflow-hidden">
                {/* صور قبل وبعد */}
                <div className="grid grid-cols-2">
                  {/* قبل */}
                  <div className="relative h-[420px] sm:h-[540px] md:h-[680px] bg-accent/18">
                    <Image
                      src={item.beforeImage}
                      alt={`نتيجة قبل - ${item.issue}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-foreground/80 text-background text-xs font-bold px-3 py-1 rounded-full">
                      {item.beforeLabel}
                    </span>
                    <p className="absolute bottom-3 right-3 left-3 text-xs text-foreground/70 bg-background/70 backdrop-blur-sm rounded-lg px-2 py-1 text-center">
                      {item.issue}
                    </p>
                  </div>
                  {/* بعد */}
                  <div className="relative h-[420px] sm:h-[540px] md:h-[680px] bg-muted">
                    <Image
                      src={item.afterImage}
                      alt={`نتيجة بعد - ${item.result}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
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
        ) : (
          <div className="mb-12 rounded-xl border border-dashed border-primary/30 bg-card p-6 text-center text-muted-foreground">
            أضيفي صور النتائج داخل
            {" "}
            <span dir="ltr" className="font-semibold text-foreground">public/results</span>
            {" "}
            بأسماء مثل
            {" "}
            <span dir="ltr" className="font-semibold text-foreground">before-1.jpg</span>
            {" / "}
            <span dir="ltr" className="font-semibold text-foreground">after-1.jpg</span>
            {" "}
            حتى تظهر هنا تلقائياً.
          </div>
        )}

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

