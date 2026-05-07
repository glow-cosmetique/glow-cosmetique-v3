"use client";

import React, { useState, useRef, Suspense } from 'react';
import { supabase } from '@/lib/supabase'; 
import { products } from "@/lib/products-data"
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

      {/* ✅ قسم البرومو */}
      <div className="lp-accent-soft text-center px-8 py-8 border-b border-border">
       <span className="inline-block bg-accent/15 lp-accent-text text-sm font-extrabold px-4 py-1 rounded-full mb-4">
          ✦ عرض لفترة محدودة ✦
        </span>
        <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
        <p className="text-4xl font-extrabold lp-accent-text mb-2">{product.price} دج فقط</p>
        <p className="text-sm text-foreground/80">بدل {product.originalPrice} دج - الدفع عند الاستلام</p>
        {searchParams.get("upsell") && (
          <p className="text-xs text-foreground/70 mt-2">تم تفعيل عرض إضافي خاص على هذا المنتج</p>
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
    <Suspense fallback={<div>loading...</div>}>
      <OrderFormContent />
    </Suspense>
  );
}