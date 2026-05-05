"use client";

import React, { useState, useRef } from 'react';
import { supabase } from '@/lib/supabase'; 
import { products } from "@/lib/products-data"

const FEATURED_PRODUCT_ID = 1

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [wilayaSearch, setWilayaSearch] = useState("");
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const product = products.find((p) => p.id === FEATURED_PRODUCT_ID) ?? products[0]

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
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const { error } = await supabase
      .from('orders')
      .insert([{
        full_name: formData.get('fullname'),
        phone: formData.get('phone'),
        wilaya: selectedWilaya,
        address: `${formData.get('baladia')} - ${formData.get('address')}`
      }]);
    if (error) {
      alert("خطأ: " + error.message);
    } else {
      alert("تم استلام طلبك بنجاح! شكراً لثقتك في Glow Cosmetique");
      (e.target as HTMLFormElement).reset();
      setSelectedWilaya("");
      setWilayaSearch("");
    }
    setLoading(false);
  };

  return (
    <div id="order-form" dir="rtl" className="w-full my-10 rounded-3xl overflow-hidden shadow-sm border border-[#e5ecd8] bg-white">

      {/* ✅ قسم البرومو */}
      <div className="bg-[#f3f9e8] text-center px-8 py-8 border-b border-[#e5ecd8]">
       <span className="inline-block bg-gray-800/10 text-gray-800 text-sm font-extrabold px-4 py-1 rounded-full mb-4">
          ✦ عرض لفترة محدودة ✦
        </span>
        <h3 className="text-2xl font-bold text-[#2d5a27] mb-2">{product.name}</h3>
        <p className="text-4xl font-extrabold text-[#2d5a27] mb-2">{product.price} دج فقط</p>
        <p className="text-sm text-[#2d5a27]/80">بدل {product.originalPrice} دج - الدفع عند الاستلام</p>
        
      </div>

      {/* ✅ الفورم */}
      <div className="bg-white p-8 md:p-10">
        <h2 className="text-center text-black font-bold text-2xl mb-3">
          أدخل بياناتك أدناه لتأكيد طلبك الآن ↓
        </h2>
        <p className="text-center text-sm text-muted-foreground mb-7">
          سيتم التواصل معك بسرعة لتأكيد الطلب والشحن
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6 text-center">
          <div className="text-xs bg-[#f7faef] border border-[#e5ecd8] rounded-lg py-2 px-2">الدفع عند الاستلام</div>
          <div className="text-xs bg-[#f7faef] border border-[#e5ecd8] rounded-lg py-2 px-2">توصيل سريع لكل الولايات</div>
          <div className="text-xs bg-[#f7faef] border border-[#e5ecd8] rounded-lg py-2 px-2">تأكيد فوري عبر الهاتف</div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="fullname"
            type="text"
            required
            className="w-full p-4 border border-[#dfe7d0] rounded-2xl outline-none focus:ring-2 focus:ring-[#2d5a27] text-right text-lg"
            placeholder="الاسم الكامل"
          />
          <input
            name="phone"
            type="tel"
            required
            className="w-full p-4 border border-[#dfe7d0] rounded-2xl outline-none focus:ring-2 focus:ring-[#2d5a27] text-right text-lg"
            placeholder="رقم الهاتف"
          />
          <div className="relative">
            <div
              className="w-full p-4 border border-[#dfe7d0] rounded-2xl bg-white cursor-pointer flex justify-between items-center text-lg"
              onClick={() => {
                setShowDropdown(!showDropdown);
                setWilayaSearch("");
                setTimeout(() => {
                  if (listRef.current) listRef.current.scrollTop = 0;
                }, 10);
              }}
            >
              <span className={selectedWilaya ? "text-black" : "text-gray-400"}>
                {selectedWilaya || "الولاية"}
              </span>
              <span className="text-gray-400">▾</span>
            </div>
            {showDropdown && (
              <div className="absolute z-50 w-full bg-white border border-[#dfe7d0] rounded-2xl shadow-lg mt-1 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                  <span className="text-gray-400 text-sm">🔍</span>
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
                      className="px-5 py-3 hover:bg-gray-50 cursor-pointer text-sm font-semibold border-b border-gray-100 last:border-0 text-left"
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
                    <div className="px-5 py-4 text-gray-400 text-sm text-center">
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
            className="w-full p-4 border border-[#dfe7d0] rounded-2xl outline-none focus:ring-2 focus:ring-[#2d5a27] text-right text-lg"
            placeholder="البلدية"
          />
          <input
            name="address"
            type="text"
            className="w-full p-4 border border-[#dfe7d0] rounded-2xl outline-none focus:ring-2 focus:ring-[#2d5a27] text-right text-lg"
            placeholder="عنوان التوصيل"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#d4f036] text-black font-extrabold py-5 rounded-2xl shadow-md active:scale-95 transition-all disabled:opacity-50 text-xl mt-2"
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
