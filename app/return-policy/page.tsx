import Link from "next/link"

export default function ReturnPolicyPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
          <h1 className="text-3xl font-extrabold mb-4">سياسة الإرجاع</h1>
          <p className="text-sm text-foreground/70 mb-6">آخر تحديث: 2026/05/05</p>

          <div className="space-y-4 text-foreground/85 leading-8">
            <p>يمكنك طلب إرجاع المنتج خلال 7 أيام من تاريخ الاستلام.</p>
            <p>يشترط أن يكون المنتج في حالته الأصلية وغير مستخدم وبنفس التغليف.</p>
            <p>لا يتم قبول إرجاع المنتجات المفتوحة أو المستخدمة لأسباب صحية.</p>
            <p>في حال وجود خطأ في الطلب أو منتج تالف، نتحمل تكاليف الاستبدال أو الإرجاع.</p>
            <p>لبدء طلب الإرجاع، تواصلي معنا عبر الهاتف أو البريد الإلكتروني المعلن في الفوتر.</p>
          </div>

          <div className="mt-8">
            <Link href="/" className="text-sm font-bold text-primary hover:underline">
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
