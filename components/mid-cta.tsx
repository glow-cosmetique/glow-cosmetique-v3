import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// CTA ثاني بعد بناء الرغبة (بعد المنتجات)
export function MidCTA() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
          جاهزة لبشرة أجمل؟
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          انضمي لأكثر من 10,000 زبونة جزائرية اختارت العناية الطبيعية
        </p>
        
        {/* CTA رئيسي واحد مع Urgency */}
        <Button 
          size="lg" 
          variant="secondary"
          className="text-lg px-10 py-6 h-auto font-bold"
        >
          احصلي على خصم 20% الآن
          <ArrowLeft className="mr-2 h-5 w-5" />
        </Button>
        
        <p className="text-sm text-primary-foreground/60 mt-4">
          العرض ينتهي قريباً - الكمية محدودة
        </p>
      </div>
    </section>
  )
}
