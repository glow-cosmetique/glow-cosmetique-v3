"use client";

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { MidCTA } from "@/components/mid-cta"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import OrderForm from "@/components/OrderForm"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background pb-24">
      <Header />

      <main className="pt-28">
        <Hero />
        <Features />
        <Products />

        <section id="order-section">
          <OrderForm />
        </section>

        <MidCTA />
        <Testimonials />
      </main>

      <Footer />

      {/* موبايل */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden p-4 bg-white border-t shadow-lg">
        <button
          onClick={() => document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full bg-[#e2f35e] text-black font-extrabold py-4 rounded-2xl text-lg whitespace-nowrap active:scale-95 transition-transform"
        >
          إشتري الآن - الدفع عند الإستلام
        </button>
      </div>

      {/* Desktop */}
      <div className="fixed bottom-0 left-0 w-full z-50 hidden md:block bg-white/90 backdrop-blur-md border-t shadow-lg p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg border border-gray-200" />
            <p className="font-bold text-sm text-black">Acide salycilique</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-[#2d5a27] font-bold text-lg">DZD1,900.00</p>
            <button
              onClick={() => document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#e2f35e] text-black font-extrabold py-3 px-8 rounded-xl active:scale-95 transition-transform"
            >
              إشتري الآن - الدفع عند الإستلام
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

