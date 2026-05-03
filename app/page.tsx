import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
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

        <section id="order-section">
          <OrderForm />
        </section>

        <MidCTA />
        <Testimonials />
      </main>

      <Footer />
      <StickyBar />
    </div>
  )
}

