import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import dynamic from "next/dynamic"

const BeforeAfter = dynamic(() => import("@/components/before-after").then(mod => mod.BeforeAfter), { ssr: true })
const Products = dynamic(() => import("@/components/products").then(mod => mod.Products), { ssr: true })
const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => mod.Testimonials), { ssr: true })
const OrderForm = dynamic(() => import("@/components/OrderForm"), { ssr: true })
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer), { ssr: true })
const StickyBar = dynamic(() => import("@/components/StickyBar").then(mod => mod.StickyBar))

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background pb-24">
      <Header />

      <main className="pt-28">
        <Hero />
        <Features />
        <BeforeAfter />
        <Products />
        <Testimonials />

        <section id="order-section" className="container mx-auto px-4 max-w-5xl">
          <OrderForm />
        </section>
      </main>

      <Footer />
      <StickyBar />
    </div>
  )
}
