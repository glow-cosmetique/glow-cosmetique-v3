import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content: "بشرتي صارت ناعمة ومشرقة بعد أسبوعين فقط! كنت أعاني من جفاف شديد خاصة في الشتاء، والآن بشرتي رطبة طول اليوم.",
    author: "سارة بن عمر",
    location: "الجزائر العاصمة",
    rating: 5,
    avatar: "س"
  },
  {
    id: 2,
    content: "منتجات طبيعية ورخيصة مقارنة بالماركات الأجنبية. السيروم غير حياتي! التصبغات بدأت تخف بشكل واضح.",
    author: "أمينة بوزيد",
    location: "وهران",
    rating: 5,
    avatar: "أ"
  },
  {
    id: 3,
    content: "أخيراً لقيت منتجات تفهم بشرتنا الجزائرية! الماسك الطيني ممتاز للمسام الواسعة. أنصح كل البنات بتجربته.",
    author: "نور الهدى",
    location: "قسنطينة",
    rating: 5,
    avatar: "ن"
  },
  {
    id: 4,
    content: "التوصيل كان سريع جداً لعنابة، والتغليف راقي. زيت الأرغان أصلي 100% وريحته طبيعية. راح أطلب مرة ثانية.",
    author: "ياسمين شريف",
    location: "عنابة",
    rating: 5,
    avatar: "ي"
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            شهادات زبوناتنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance">
            آراء حقيقية من جزائريات مثلك
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            أكثر من 10,000 زبونة سعيدة في كل الولايات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card border-border/50">
              <CardContent className="p-6">
                {/* النجوم */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* الاقتباس */}
                <p className="text-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* معلومات الكاتبة */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
