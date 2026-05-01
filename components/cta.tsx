"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Check, Gift } from "lucide-react"

export function CTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            احصلي على خصم 15% على أول طلب
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            اشتركي في نشرتنا البريدية واحصلي على عروض حصرية، نصائح للعناية بالبشرة، وأخبار المنتجات الجديدة
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="أدخلي بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 px-4 flex-1 text-right"
              />
              <Button type="submit" size="lg" className="h-12 px-6 font-semibold">
                اشتركي الآن
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-foreground bg-accent/20 rounded-lg p-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent">
                <Check className="h-4 w-4 text-accent-foreground" />
              </div>
              <span className="font-medium">شكراً! تحققي من بريدك للحصول على كود الخصم</span>
            </div>
          )}

          {/* مؤشرات ثقة */}
          <p className="text-xs text-muted-foreground mt-4">
            نحن لا نبيع بياناتك - بدون سبام - إلغاء الاشتراك في أي وقت
          </p>
        </div>
      </div>
    </section>
  )
}
