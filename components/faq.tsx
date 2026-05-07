"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "هل المنتجات طبيعية 100%؟",
    answer: "نعم، كل منتجاتنا مصنوعة من مكونات طبيعية 100% بدون مواد كيميائية ضارة، بدون بارابين، وبدون عطور صناعية. نستخدم مكونات محلية جزائرية مثل زيت الأرغان، زيت الزيتون، العسل الطبيعي، والطين المغربي."
  },
  {
    question: "متى تظهر النتائج؟",
    answer: "معظم زبوناتنا يلاحظن فرقاً واضحاً خلال أسبوعين من الاستخدام المنتظم. النتائج الكاملة تظهر بعد 4-6 أسابيع حسب نوع البشرة والمشكلة المراد علاجها."
  },
  {
    question: "هل المنتجات مناسبة لكل أنواع البشرة؟",
    answer: "نعم، منتجاتنا مصممة خصيصاً للبشرة الجزائرية بكل أنواعها: الدهنية، الجافة، المختلطة، والحساسة. لكل نوع بشرة منتج مخصص يناسبها."
  },
  {
    question: "كيف يتم التوصيل والدفع؟",
    answer: "نوفر توصيل سريع لكل 58 ولاية في الجزائر. الدفع عند الاستلام متاح، بالإضافة إلى CCP و Baridimob. التوصيل مجاني للطلبات فوق 5000 دج."
  },
  {
    question: "ماذا لو لم تعجبني النتيجة؟",
    answer: "نقدم ضمان الرضا الكامل. إذا لم تحصلي على النتائج المتوقعة خلال 30 يوم، نرجع لك فلوسك بالكامل - بدون أسئلة. ثقتك أولويتنا."
  },
  {
    question: "هل يمكنني استخدام أكثر من منتج؟",
    answer: "بالطبع! منتجاتنا مصممة لتعمل معاً بشكل متكامل. ننصح بالبدء بروتين بسيط (غسول + مرطب) ثم إضافة السيروم والماسك تدريجياً حسب احتياجات بشرتك."
  }
]

export function FAQ() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/15 mb-4">
            <HelpCircle className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            أسئلة شائعة
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            إجابات على أكثر الأسئلة التي تسألها زبوناتنا
          </p>
        </div>

        {/* الأسئلة */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/70 rounded-xl px-6 data-[state=open]:border-accent/45 data-[state=open]:bg-accent/5 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-right font-bold text-foreground hover:no-underline py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
