"use client";

import React, { useState, useRef, Suspense, useEffect, useMemo } from 'react';
import { supabase } from '@/lib/supabase'; 
import { products } from "@/lib/products-data"
import { CheckCircle, Award } from "lucide-react"
import {
  ALGERIAN_PHONE_INVALID_MESSAGE,
  ALGERIAN_PHONE_PLACEHOLDER,
  normalizeAlgerianMobilePhone,
} from "@/lib/validate-algerian-phone"
import {
  emitRecordedOrderCount,
  incrementRecordedOrderCount,
} from "@/lib/recorded-order-count"
import { useRouter, useSearchParams } from "next/navigation";

const FEATURED_PRODUCT_ID = 1

function OrderFormContent() {
  const [loading, setLoading] = useState(false);
  const [wilayaSearch, setWilayaSearch] = useState("");
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const upsellParam = Number(searchParams.get("upsell"));
  const product =
    products.find((p) => p.id === upsellParam) ??
    products.find((p) => p.id === FEATURED_PRODUCT_ID) ??
    products[0]

  const savings = product.originalPrice - product.price
  const targetTime = useMemo(() => Date.now() + 1000 * 60 * 60 * 6, [])
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(Math.max(targetTime - Date.now(), 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetTime])

  const totalSeconds = Math.floor(timeLeft / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const formatTime = (value: number) => value.toString().padStart(2, "0")

  const wilayas = [
    "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna",
    "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira",
    "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou",
    "Alger", "Djelfa", "Jijel", "Sétif", "Saïda",
    "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine",
    "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla",
    "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès",
    "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela",
    "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma",
    "Aïn Témouchent", "Ghardaïa", "Relizane", "Timimoun", "Bordj Badji Mokhtar",
    "Ouled Djellal", "Béni Abbès", "In Salah", "In Guezzam", "Touggourt",
    "Djanet", "El M'Ghair", "El Meniaa"
  ];

  const filtered = wilayas.filter(w =>
    w.toLowerCase().includes(wilayaSearch.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedWilaya) {
      alert("الرجاء اختيار الولاية");
      return;
    }
    const formData = new FormData(e.currentTarget);
    const phoneRaw = String(formData.get("phone") ?? "").trim();
    const phoneNormalized = normalizeAlgerianMobilePhone(phoneRaw);
    if (!phoneNormalized) {
      setPhoneError(ALGERIAN_PHONE_INVALID_MESSAGE);
      return;
    }
    setPhoneError(null);
    setLoading(true);
    const { error } = await supabase
      .from('orders')
      .insert([{
        full_name: formData.get('fullname'),
        phone: phoneNormalized,
        wilaya: selectedWilaya,
        address: `${formData.get('baladia')} - ${formData.get('address')}`
      }]);
    if (error) {
      alert("خطأ: " + error.message);
    } else {
      const nextCount = incrementRecordedOrderCount();
      emitRecordedOrderCount(nextCount);
      (e.target as HTMLFormElement).reset();
      setSelectedWilaya("");
      setWilayaSearch("");
      router.replace("/thank-you");
    }
    setLoading(false);
  };

  return (
    <div id="order-form" dir="rtl" className="w-full my-10 rounded-3xl overflow-hidden shadow-sm border border-border bg-card">

      {/* ✅ قسم البرومو (Merged) */}
      <div className="lp-accent-soft text-center px-4 sm:px-8 py-8 border-b border-border flex flex-col items-center">
        <div className="mb-4 flex flex-col items-center gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border-2 border-red-100 bg-gradient-to-r from-red-50 to-orange-50 p-4 shadow-sm w-fit mx-auto mt-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl animate-pulse drop-shadow-sm">⏰</span>
              <span className="text-base font-extrabold text-red-700 tracking-tight">ينتهي العرض خلال:</span>
            </div>
            <div className="flex items-center gap-2" dir="ltr">
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-b from-red-500 to-orange-600 text-xl font-black text-white shadow-lg ring-1 ring-black/10">
                  {formatTime(hours)}
                </div>
                <span className="text-[11px] font-bold text-red-700/80">ساعات</span>
              </div>
              <span className="text-red-500/50 font-black text-2xl -mt-5 animate-pulse">:</span>
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-b from-red-500 to-orange-600 text-xl font-black text-white shadow-lg ring-1 ring-black/10">
                  {formatTime(minutes)}
                </div>
                <span className="text-[11px] font-bold text-red-700/80">دقائق</span>
              </div>
              <span className="text-red-500/50 font-black text-2xl -mt-5 animate-pulse">:</span>
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-b from-red-500 to-orange-600 text-xl font-black text-white shadow-lg ring-1 ring-black/10">
                  {formatTime(seconds)}
                </div>
                <span className="text-[11px] font-bold text-red-700/80">ثواني</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-balance text-foreground">
          احصلي على بشرة أنعم وإشراقة أوضح خلال أسابيع
        </h2>
        <h3 className="text-xl font-bold text-foreground/90 mb-2">{product.name}</h3>
        <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
          تركيبة مناسبة للبشرة الجزائرية بنتائج ملحوظة مع الاستعمال المنتظم
        </p>

        <div className="mb-6 mt-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="text-xl md:text-2xl font-bold text-red-500/80 line-through decoration-2 decoration-red-500">
              {product.originalPrice} دج
            </span>
            <span className="inline-flex items-center justify-center bg-green-100 text-green-700 text-sm font-extrabold px-3 py-1 rounded-full border border-green-200 shadow-sm animate-pulse">
              خصم {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% (توفري {savings} دج)
            </span>
          </div>
          <div className="text-5xl md:text-6xl font-black text-[#8B3A2A] drop-shadow-sm mt-1">
            {product.price} <span className="text-3xl md:text-4xl font-bold tracking-tight">دج فقط</span>
          </div>
        </div>

        {/* Certified Stamp */}
        <div className="flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 p-3.5 rounded-2xl shadow-sm mb-6 w-full max-w-md mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-amber-200/20 rounded-bl-full"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="bg-gradient-to-b from-amber-200 to-amber-400 p-2.5 rounded-full shadow-md border border-amber-300">
              <Award className="w-6 h-6 text-amber-900" />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-base font-black text-amber-900 tracking-tight">حاصل على براءة اختراع</span>
              <span className="text-[13px] font-bold text-amber-800/80">مجرب ومصادق عليه لضمان الفعالية التامة</span>
            </div>
          </div>
        </div>

        {/* مؤشرات الندرة والسوشال بروف */}
        <div className="w-full max-w-md mx-auto mb-6 flex flex-col gap-3">
          {/* Live Viewers */}
          <div className="flex items-center justify-center gap-2 bg-orange-50 border border-orange-200 text-orange-800 px-3 py-2.5 rounded-xl shadow-sm">
            <span className="animate-pulse text-lg">🔥</span>
            <span className="text-sm md:text-base font-bold">23 شخص يشاهدون هذا المنتج الآن</span>
          </div>

          {/* Scarcity Bar */}
          <div className="flex flex-col gap-2.5 bg-red-50/80 border border-red-200 rounded-xl p-3.5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </div>
                <span className="text-sm font-extrabold text-red-700">متبقي 12 قطعة فقط!</span>
              </div>
              <span className="text-xs font-bold text-red-800/80">تم بيع 47 قطعة اليوم</span>
            </div>
            <div className="w-full bg-red-200 rounded-full h-2.5 overflow-hidden">
              <div className="bg-red-600 h-full rounded-full relative" style={{ width: '18%' }}>
                <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
          </div>

          {/* Recent Order Notification */}
          <div className="flex items-center gap-3 bg-white border border-green-100 shadow-sm rounded-xl p-3 mt-1 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-sm font-bold text-gray-800">أمينة من تلمسان</span>
              <span className="text-xs font-medium text-gray-500 mt-0.5">قامت بطلب كريم الأرغان قبل 3 دقائق</span>
            </div>
          </div>
        </div>

        <p className="text-sm md:text-base text-foreground/80 mb-4">
          ⭐ {product.rating} / 5 من {product.reviews}+ مراجعة حقيقية
        </p>

        {searchParams.get("upsell") && (
          <p className="text-xs text-foreground/70 mt-2 bg-accent/10 py-1 px-3 rounded-full">تم تفعيل عرض إضافي خاص على هذا المنتج</p>
        )}
      </div>

      {/* ✅ الفورم */}
      <div className="bg-card p-8 md:p-10">
        <h2 className="text-center text-foreground font-bold text-2xl mb-3">
          أدخل بياناتك أدناه لتأكيد طلبك الآن ↓
        </h2>
        <p className="text-center text-sm text-muted-foreground mb-7">
          سيتم التواصل معك بسرعة لتأكيد الطلب والشحن
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6 text-center">
          <div className="text-xs bg-secondary border border-border rounded-lg py-2 px-2">الدفع عند الاستلام</div>
          <div className="text-xs bg-secondary border border-border rounded-lg py-2 px-2">توصيل سريع لكل الولايات</div>
          <div className="text-xs bg-secondary border border-border rounded-lg py-2 px-2">تأكيد فوري عبر الهاتف</div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="fullname"
            type="text"
            required
            className="w-full p-4 border border-border rounded-2xl outline-none focus:ring-2 focus:ring-primary text-right text-lg"
            placeholder="الاسم الكامل"
          />
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground text-right mb-1">
              رقم الجوال (10 أرقام، يبدأ بـ 05 أو 06 أو 07). يمكن إدخال{" "}
              <span dir="ltr" className="inline-block font-mono text-foreground/80">
                +213…
              </span>
            </p>
            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              required
              dir="ltr"
              aria-invalid={phoneError ? true : undefined}
              onChange={() => phoneError && setPhoneError(null)}
              className={`w-full p-4 border rounded-2xl outline-none focus:ring-2 focus:ring-primary text-left text-lg tabular-nums bg-card text-foreground placeholder:text-muted-foreground caret-foreground ${
                phoneError ? "border-red-500 ring-1 ring-red-200" : "border-border"
              }`}
              placeholder={ALGERIAN_PHONE_PLACEHOLDER}
            />
            {phoneError && (
              <p className="text-sm text-red-600 text-right" role="alert">
                {phoneError}
              </p>
            )}
          </div>
          <div className="relative">
            <div
              className="w-full p-4 border border-border rounded-2xl bg-white cursor-pointer flex justify-between items-center text-lg"
              onClick={() => {
                setShowDropdown(!showDropdown);
                setWilayaSearch("");
                setTimeout(() => {
                  if (listRef.current) listRef.current.scrollTop = 0;
                }, 10);
              }}
            >
              <span className={selectedWilaya ? "text-foreground" : "text-muted-foreground"}>
                {selectedWilaya || "الولاية"}
              </span>
              <span className="text-muted-foreground">▾</span>
            </div>
            {showDropdown && (
              <div className="absolute z-50 w-full bg-white border border-border rounded-2xl shadow-lg mt-1 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                  <span className="text-muted-foreground text-sm">🔍</span>
                  <input
                    type="text"
                    placeholder="Search"
                    value={wilayaSearch}
                    onChange={(e) => {
                      setWilayaSearch(e.target.value);
                      if (listRef.current) listRef.current.scrollTop = 0;
                    }}
                    className="flex-1 bg-transparent outline-none text-sm text-left"
                    autoFocus
                    dir="ltr"
                  />
                </div>
                <div ref={listRef} className="max-h-60 overflow-y-auto">
                  {filtered.map((wilaya) => (
                    <div
                      key={wilaya}
                      className="px-5 py-3 hover:bg-muted cursor-pointer text-sm font-semibold border-b border-border/60 last:border-0 text-left"
                      dir="ltr"
                      onClick={() => {
                        setSelectedWilaya(wilaya);
                        setShowDropdown(false);
                        setWilayaSearch("");
                      }}
                    >
                      {wilaya}
                    </div>
                  ))}
                  {filtered.length === 0 && (
                    <div className="px-5 py-4 text-muted-foreground text-sm text-center">
                      لا توجد نتائج
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <input
            name="baladia"
            type="text"
            className="w-full p-4 border border-border rounded-2xl outline-none focus:ring-2 focus:ring-primary text-right text-lg"
            placeholder="البلدية"
          />
          <input
            name="address"
            type="text"
            className="w-full p-4 border border-border rounded-2xl outline-none focus:ring-2 focus:ring-primary text-right text-lg"
            placeholder="عنوان التوصيل"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-accent-foreground font-extrabold py-5 rounded-2xl shadow-md active:scale-95 transition-all hover:bg-[var(--accent-strong)] disabled:opacity-50 text-xl mt-2"
          >
            {loading ? "جاري الإرسال..." : "تأكيد الطلب الآن"}
          </button>
          <p className="text-center text-xs text-muted-foreground">
            بملء هذا النموذج أنتِ توافقين على التواصل لتأكيد الطلب فقط.
          </p>
        </form>
      </div>

    </div>
  );
}

export default function OrderForm() {
  return (
    <Suspense fallback={<div className="py-8 text-center text-sm text-muted-foreground">جاري التحميل...</div>}>
      <OrderFormContent />
    </Suspense>
  );
}