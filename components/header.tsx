"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Menu, X } from "lucide-react"

const phrases = [
  "بشرتك تستحق الأفضل ✨",
  "جربيها مرة واحدة وما تندمي 💛",
  "آلاف الجزائريات اخترن Glow 🌟",
  "طبيعي 100% — بشرتك تحس بالفرق",
  "وصلنا لولايتك — اطلبي الآن 🚀",
  "منتجات صُممت للبشرة الجزائرية",
  "الدفع عند الاستلام — بدون مخاطرة 💪",
  "لا كيماويات، لا أضرار — فقط نتائج",
  "جمالك الطبيعي يبدأ من هنا ✨",
  "أكثر من 10,000 زبونة سعيدة 🌸",
  "بشرة نضرة في أسبوع واحد فقط",
  "توصيل سريع لكل ولايات الجزائر 🇩🇿",
  "سرّ الإشراق الذي تبحثين عنه",
  "العناية الحقيقية تبدأ بـ Glow 💛",
  "منتج واحد يحل كل مشاكل بشرتك",
  "آمن، طبيعي، وفعّال — مضمون 100%",
  "جربيها اليوم وشوفي الفرق بنفسك 👀",
  "لأن بشرتك تستاهل عناية حقيقية 💕",
  "الحل الجزائري لبشرة مثالية 🌿",
  "اطلبي الآن — الكميات محدودة ⏳",
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* ── شريط التوصيل العلوي ── */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <p className="text-xs sm:text-sm font-medium">
          توصيل مجاني للطلبات فوق 5000 دج - عرض محدود
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-16">

          {/* العمود الأول — العبارات المتحركة (desktop فقط) */}
          {/* ✅ الإصلاح: حذف "flex" الزائدة قبل "hidden md:flex" */}
          <div className="hidden md:flex justify-start overflow-hidden">
            <span
              className="text-base font-bold text-foreground whitespace-nowrap"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}
            >
              {phrases[currentPhrase]}
            </span>
          </div>

          {/* على موبايل: اسم البراند في مكان العبارات */}
          <div className="flex md:hidden justify-start">
            <span className="text-sm font-bold text-foreground">
              ✦ Glow
            </span>
          </div>

          {/* العمود الثاني — nav (desktop فقط) */}
          <nav className="hidden md:flex justify-center items-center gap-8">
            <a
              href="#products"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              منتجاتنا
            </a>
          </nav>

          {/* على موبايل: اسم البراند في المنتصف */}
          <div className="flex md:hidden justify-center">
            <span className="text-base font-bold text-foreground">
              Glow Cosmetique
            </span>
          </div>

          {/* العمود الثالث — أزرار */}
          <div className="flex justify-end items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="hidden sm:flex font-semibold">
              تسوقي الآن
            </Button>
            {/* ✅ زر الهامبرغر — موبايل فقط */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* ── القائمة المتنقلة ── */}
        {/* ✅ الإصلاح: أضفنا bg-card ونصوص واضحة */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-card">
            <nav className="flex flex-col gap-4">
              <a
                href="#products"
                className="text-foreground hover:text-primary transition-colors font-medium text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                منتجاتنا
              </a>
              <Button className="w-full font-semibold" onClick={() => setMobileMenuOpen(false)}>
                تسوقي الآن
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
