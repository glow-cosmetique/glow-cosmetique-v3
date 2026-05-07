import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content: "من نهار بديت كريم الأرغان، بشرتي ولات طرية وما بقاتش تنشف كيما قبل.",
    author: "سارة بن عمر",
    location: "الجزائر العاصمة",
    rating: 5,
    avatar: "س",
    avatarBg: "#F8E4DE",
  },
  {
    id: 2,
    content: "بصراحة فرق معايا بزاف، خاصة فالخدود لي كانوا ناشفين. النتيجة تبان من أول أسبوع.",
    author: "أمينة بوزيد",
    location: "وهران",
    rating: 5,
    avatar: "أ",
    avatarBg: "#FCEBD9",
  },
  {
    id: 3,
    content: "أنا بشرتي حساسة وخفت نجرب، بصح الكريم جا خفيف وما دارلي حتى تهيج.",
    author: "نوال قادري",
    location: "قسنطينة",
    rating: 5,
    avatar: "ن",
    avatarBg: "#F3E3F2",
  },
  {
    id: 4,
    content: "الترطيب يدوم كامل النهار، وحتى فالبرد والتشققات حسيت فرق كبير.",
    author: "ريم بوشارب",
    location: "سطيف",
    rating: 5,
    avatar: "ر",
    avatarBg: "#FEE3E3",
  },
  {
    id: 5,
    content: "ريحتو هايلة وقوامو فاخر، عطاني نضارة طبيعية بلا ما يثقل الوجه.",
    author: "خديجة مرابط",
    location: "تلمسان",
    rating: 5,
    avatar: "خ",
    avatarBg: "#F6EBD8",
  },
  {
    id: 6,
    content: "أحسن كريم مرطب جربتو هاد العام. حتى المكياج ولى يجي منظم فوق البشرة.",
    author: "إيمان زراري",
    location: "عنابة",
    rating: 5,
    avatar: "إ",
    avatarBg: "#F5DFE7",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-[var(--section-bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-[#E9C97A] bg-[#FFF4D6] px-4 py-2 text-sm font-bold text-[#8A5D00]">
            10,000+ زبونة سعيدة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance">
            آراء الزبونات
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            تجارب حقيقية من كامل ولايات الجزائر مع كريم مرطب بزيت الأرغان
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card
              key={t.id}
              className="rounded-2xl border border-[#F2D8D0] bg-gradient-to-b from-[#FFF8F6] to-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4A017] text-[#D4A017]" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full border-2 border-[#E9C97A]/70 flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: t.avatarBg }}
                  >
                    <span className="text-base font-extrabold text-[#6A2818]">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
