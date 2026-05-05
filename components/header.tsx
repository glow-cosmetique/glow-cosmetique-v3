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
    <header className="fixed top-0 right-0 left-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">

      {/* ── شريط التوصيل ── */}
      <div className="bg-[#263c2f] text-white text-center py-2 px-4">
        <p className="text-xs sm:text-sm font-medium">
          توصيل مجاني للطلبات فوق 5000 دج - عرض محدود
        </p>
      </div>

      <div className="container mx-auto px-4">

        {/* ══ DESKTOP: 3 أعمدة ══ */}
        <div className="hidden md:grid grid-cols-3 items-center h-16">

          {/* يمين: عبارات متحركة */}
          <div className="flex justify-start overflow-hidden">
            <span
              className="text-base font-bold text-foreground whitespace-nowrap"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}
            >
              {phrases[currentPhrase]}
            </span>
          </div>

          {/* وسط: nav */}
          <nav className="flex justify-center items-center gap-8">
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              منتجاتنا
            </a>
          </nav>

          {/* يسار: أزرار */}
          <div className="flex justify-end items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button asChild className="font-semibold text-black">
              <a href="#order-section">تسوقي الآن</a>
            </Button>
          </div>
        </div>

        {/* ══ MOBILE ══ */}
        <div className="flex md:hidden items-center justify-between h-16">

          {/* يمين: هامبرغر */}
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* وسط: العبارة المتحركة */}
          <div className="flex-1 overflow-hidden mx-3 text-center">
            <span
              className="text-sm font-bold text-foreground whitespace-nowrap"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}
            >
              {phrases[currentPhrase]}
            </span>
          </div>

          {/* يسار: سلة */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </Button>
        </div>

        {/* ── القائمة المتنقلة ── */}
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
              <Button asChild className="w-full font-semibold text-black" onClick={() => setMobileMenuOpen(false)}>
                <a href="#order-section">تسوقي الآن</a>
              </Button>
            </nav>
          </div>
        )}

      </div>
    </header>
  )
}

