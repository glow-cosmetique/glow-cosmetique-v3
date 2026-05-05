import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { BeforeAfter } from "@/components/before-after"
import { MidCTA } from "@/components/mid-cta"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import OrderForm from "@/components/OrderForm"
import { StickyBar } from "@/components/StickyBar"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background pb-24">
      <Header />

      <main className="pt-28">
        <Hero />
        <Features />
        <Products />
        <BeforeAfter />
        <Testimonials />
        <MidCTA />

        <section id="order-section" className="container mx-auto px-4 max-w-5xl">
          <OrderForm />
        </section>
      </main>

      <Footer />
      <StickyBar />
    </div>
  )
}
