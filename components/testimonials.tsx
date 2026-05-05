import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  { id: 1, content: "بشرتي صارت ناعمة ومشرقة بعد أسبوعين فقط!", author: "سارة بن عمر", location: "الجزائر العاصمة", rating: 5, avatar: "س" },
  { id: 2, content: "السيروم فرق معي كثير والتصبغات بدأت تخف.", author: "أمينة بوزيد", location: "وهران", rating: 5, avatar: "أ" },
  { id: 3, content: "منتجات مناسبة فعلاً لبشرتنا والمناخ الجاف.", author: "نور الهدى", location: "قسنطينة", rating: 5, avatar: "ن" },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-[#fafcf5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">آراء الزبونات</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance">
            نتائج حقيقية من جزائريات مثلك
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">+10,000 زبونة سعيدة في مختلف الولايات</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.id} className="lp-card">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">{t.avatar}</span>
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
