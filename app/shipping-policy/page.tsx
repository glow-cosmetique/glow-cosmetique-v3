import Link from "next/link"

export default function ShippingPolicyPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f8fbef] text-[#244822]">
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto rounded-3xl border border-[#e3edd0] bg-white p-6 md:p-10 shadow-sm">
          <h1 className="text-3xl font-extrabold mb-4">سياسة الشحن</h1>
          <p className="text-sm text-[#2d5a27]/70 mb-6">آخر تحديث: 2026/05/05</p>

          <div className="space-y-4 text-[#2d5a27]/85 leading-8">
            <p>نوفّر الشحن إلى جميع ولايات الجزائر.</p>
            <p>يتم التواصل هاتفيًا لتأكيد الطلب قبل الشحن.</p>
            <p>مدة التوصيل المتوقعة من 1 إلى 5 أيام عمل حسب الولاية وشركة التوصيل.</p>
            <p>الدفع يتم عند الاستلام (Cash on Delivery) ما لم يتم الاتفاق على غير ذلك.</p>
            <p>في حالة تعذّر الوصول إليك بعد عدة محاولات، قد يتم إلغاء الطلب تلقائيًا.</p>
          </div>

          <div className="mt-8">
            <Link href="/" className="text-sm font-bold text-[#2d5a27] hover:underline">
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
