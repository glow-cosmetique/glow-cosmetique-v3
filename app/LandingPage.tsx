"use client";

import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import OrderForm from "@/components/OrderForm"

// ─── قسم قبل / بعد ───────────────────────────────────────────────
function BeforeAfter() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-5xl mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-14">
          <span className="inline-block bg-accent/15 lp-accent-text text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            النتائج الحقيقية
          </span>
          <h2 className="text-4xl font-extrabold text-foreground leading-tight">
            الفرق واضح — قبل وبعد
          </h2>
          <p className="text-muted-foreground mt-3 text-base max-w-xl mx-auto">
            شاهد التحول الحقيقي بعد استخدام منتجنا لمدة 4 أسابيع فقط
          </p>
        </div>

        {/* بطاقات قبل / بعد */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* قبل */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-accent/30 bg-card shadow-md">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-accent/85 text-accent-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow">
                ❌ قبل
              </span>
            </div>
            {/* صورة placeholder */}
            <div className="w-full h-72 bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center">
              <div className="text-center text-accent/70 select-none">
                <div className="text-7xl mb-2">😟</div>
                <p className="text-sm font-medium text-accent/80">أضف صورة قبل الاستخدام</p>
              </div>
            </div>
            <div className="p-6 text-right space-y-2">
              <p className="text-foreground font-semibold text-base">المشكلة قبل الاستخدام:</p>
              <ul className="text-muted-foreground text-sm space-y-1 list-none">
                <li>✗ بشرة غير مستوية وبهتان واضح</li>
                <li>✗ حبوب وبقع داكنة مزعجة</li>
                <li>✗ مسام واسعة وزيت زائد</li>
              </ul>
            </div>
          </div>

          {/* بعد */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-primary/35 bg-card shadow-md">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow">
                ✅ بعد
              </span>
            </div>
            {/* صورة placeholder */}
            <div className="w-full h-72 bg-gradient-to-br from-muted to-primary/15 flex items-center justify-center">
              <div className="text-center select-none">
                <div className="text-7xl mb-2">😍</div>
                <p className="text-sm font-medium text-primary">أضف صورة بعد الاستخدام</p>
              </div>
            </div>
            <div className="p-6 text-right space-y-2">
              <p className="text-foreground font-semibold text-base">النتيجة بعد 4 أسابيع:</p>
              <ul className="text-muted-foreground text-sm space-y-1 list-none">
                <li>✓ بشرة مشرقة وموحّدة اللون</li>
                <li>✓ اختفاء الحبوب والبقع الداكنة</li>
                <li>✓ مسام أصغر وبشرة أكثر نعومة</li>
              </ul>
            </div>
          </div>
        </div>

        {/* إحصائيات */}
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            { num: "94%", label: "من المستخدمين رأوا فرقاً خلال أسبوعين" },
            { num: "+2000", label: "عميل راضٍ في الجزائر" },
            { num: "4★", label: "متوسط تقييم المنتج" },
          ].map(({ num, label }) => (
            <div key={num} className="bg-card rounded-2xl p-5 border border-border shadow-sm">
              <p className="text-3xl font-extrabold text-primary">{num}</p>
              <p className="text-muted-foreground text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── الصفحة الرئيسية ──────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background pb-24">
      {/* Header مخفي — صفحة منتج واحد لا تحتاجه */}
      {/* <Header /> */}

      <main className="pt-8">
        <Hero />
        <Features />

        {/* ✅ قسم قبل وبعد */}
        <BeforeAfter />

        {/* Products و MidCTA مخفيان */}
        {/* <Products /> */}
        {/* <MidCTA /> */}

        <Testimonials />

        <section id="order-section">
          <OrderForm />
        </section>
      </main>

      <Footer />

      {/* ── الشريط الثابت في الأسفل ── */}
      <div className="fixed bottom-0 left-0 w-full bg-card/90 backdrop-blur-md border-t border-border z-50 p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary rounded-lg border border-border" />
            <div className="text-right">
              <p className="font-bold text-sm text-foreground">Acide salycilique</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-primary font-bold text-lg">DZD1,900.00</p>
            <button
              onClick={() =>
                document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-accent text-accent-foreground font-extrabold py-3 px-8 rounded-xl shadow-md transition-transform hover:bg-[var(--accent-strong)] active:scale-95"
            >
              إشتري الآن - الدفع عند الإستلام
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
