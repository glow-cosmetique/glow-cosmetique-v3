"use client";

import { Leaf, MapPin, Truck, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% طبيعي",
    description: "مكونات طبيعية نقية بدون مواد كيميائية ضارة أو عطور صناعية",
  },
  {
    icon: MapPin,
    title: "مصنوع في الجزائر",
    description: "فخورون بمنتجاتنا المحلية - أرغان، تمر، زيتون جزائري",
  },
  {
    icon: Truck,
    title: "توصيل سريع لـ 58 ولاية",
    description: "توصيل سريع لكل ولايات الوطن - الدفع عند الاستلام",
  },
  {
    icon: ShieldCheck,
    title: "ضمان الرضا",
    description: "إذا لم تعجبك النتيجة، نرجع لك فلوسك - بدون أسئلة",
  },
  {
    icon: Sparkles,
    title: "نتائج مضمونة",
    description: "تركيبات مثبتة علمياً - نتائج ملحوظة خلال أسبوعين",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-foreground">
            لماذا تختار منتجاتنا؟
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            كل ميزة في منتجاتنا مصممة لتوفر لك تجربة طبيعية وفعّالة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group lp-card p-8 hover:border-primary/35 flex flex-col"
              >
                <div className="mb-6 w-16 h-16 flex items-center justify-center bg-muted rounded-2xl group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed flex-1">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}