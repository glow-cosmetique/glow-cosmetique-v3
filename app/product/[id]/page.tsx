import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Amiri } from "next/font/google"
import { Star, ArrowRight, ShoppingBag, CheckCircle, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products-data"

const amiri = Amiri({
  weight: "700",
  subsets: ["arabic"],
  display: "swap",
})

interface Props {
  params: Promise<{ id: string }>
}

function HeroLeaves() {
  return (
    <>
      <svg
        className="pointer-events-none absolute -top-4 left-0 h-40 w-40 text-emerald-600/25 md:h-52 md:w-52"
        viewBox="0 0 120 120"
        fill="currentColor"
        aria-hidden
      >
        <path d="M98 18c-18 8-32 28-38 48 16-6 32-4 44 6-10-18-8-38 6-52-4-6-8-4-12-2zM72 8C52 22 42 42 40 62c14-10 30-12 46-6-4-20-8-40-14-48z" />
      </svg>
      <svg
        className="pointer-events-none absolute top-1/4 right-0 h-36 w-36 -translate-y-1/2 text-emerald-700/20 md:h-48 md:w-48"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden
      >
        <path d="M78 12c-22 4-38 22-44 42 18-4 34 2 42 14-4-22 6-42 22-54-8-4-14-4-20-2z" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-8 left-1/4 h-28 w-28 text-green-700/15 md:h-36 md:w-36"
        viewBox="0 0 80 80"
        fill="currentColor"
        aria-hidden
      >
        <path d="M58 58c8-16 6-34-4-48-6 14-18 26-32 32 14 4 28 12 36 16z" />
      </svg>
    </>
  )
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = products.find((p) => p.id === Number(id))
  if (!product) notFound()

  const discountPct =
    product.originalPrice > product.price
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : 0

  const savings = product.originalPrice - product.price

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* بانر البطل — أسلوب عرض منقسم، خلفية نعناع، نص بني */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-muted">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 60% at 20% 30%, rgba(180, 220, 190, 0.5) 0%, transparent 55%),
              radial-gradient(ellipse 70% 50% at 85% 70%, rgba(200, 235, 210, 0.45) 0%, transparent 50%)`,
          }}
        />
        <HeroLeaves />

        <div className="container relative mx-auto max-w-7xl px-4 pb-14 pt-6 md:pb-20 md:pt-8">
          <Link
            href="/#products"
            className="mb-8 flex w-fit items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
          >
            <ArrowRight className="h-4 w-4" />
            رجوع للمنتجات
          </Link>

          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
            {/* عمود النص — في RTL يظهر يمين الشاشة */}
            <div className="order-2 space-y-6 text-center md:order-1 md:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/75">
                عروض لفترة محدودة
              </p>

              <h1
                className={`${amiri.className} text-5xl leading-[1.1] text-foreground sm:text-6xl md:text-6xl lg:text-7xl`}
              >
                {discountPct > 0 ? (
                  <>
                    خصم{" "}
                    <span className="whitespace-nowrap" dir="ltr">
                      {discountPct}%
                    </span>
                  </>
                ) : (
                  product.name
                )}
              </h1>

              <p className="text-sm font-medium uppercase tracking-widest text-foreground md:text-base">
                {discountPct > 0 ? product.name : product.description}
              </p>

              {discountPct > 0 && (
                <p className="mx-auto max-w-md text-base leading-relaxed text-foreground/85 md:mx-0">
                  {product.description}
                </p>
              )}

              <div className="flex flex-wrap items-baseline justify-center gap-3 md:justify-start">
                <span className="text-3xl font-bold text-primary">{product.price} دج</span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-foreground/45 line-through">
                    {product.originalPrice} دج
                  </span>
                )}
                {savings > 0 && (
                  <span className="rounded-sm lp-accent-soft px-2 py-0.5 text-sm font-semibold lp-accent-text">
                    وفري {savings} دج
                  </span>
                )}
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-foreground/80 md:justify-start">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span className="font-semibold">{product.rating}</span>
                <span>({product.reviews} تقييم)</span>
              </div>

              <div className="flex flex-col items-center gap-3 sm:flex-row md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-auto rounded-md border-0 bg-accent px-10 py-5 text-base font-bold uppercase tracking-wide text-accent-foreground hover:bg-[var(--accent-strong)]"
                >
                  <Link href="/#order-section">
                    <ShoppingBag className="ml-2 h-5 w-5" />
                    تسوقي الآن
                  </Link>
                </Button>
              </div>
            </div>

            {/* عمود الصورة */}
            <div className="relative order-1 flex min-h-[280px] items-center justify-center md:order-2 md:min-h-[420px]">
              <div
                className="pointer-events-none absolute inset-4 rounded-full bg-white/50 blur-3xl md:inset-10"
                aria-hidden
              />
              <div className="relative aspect-square w-full max-w-md">
                <div className="absolute inset-0 rounded-[2rem] bg-white/30 shadow-inner ring-1 ring-white/60" />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-center p-4 sm:p-8"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none"
                  }}
                />
                {product.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-md">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* تفاصيل إضافية */}
      <section className="container mx-auto max-w-4xl px-4 py-14">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
          <div className="mb-6 flex items-center gap-2 text-primary">
            <Leaf className="h-5 w-5" />
            <h2 className="text-xl font-bold">عن المنتج</h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90">{product.longDescription}</p>
          <div className="mt-8 flex flex-wrap gap-4 border-t border-border pt-8">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-600" />
              توصيل لكل الولايات
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-600" />
              الدفع عند الاستلام
            </div>
          </div>
        </div>
      </section>

      {/* قبل وبعد */}
      <section className="border-y border-border bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground/80">
              نتائج حقيقية
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground">قبل وبعد الاستخدام</h2>
            <p className="mx-auto mt-3 max-w-md text-foreground/75">
              نتائج من زبوناتنا بعد الاستخدام المنتظم
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg ring-1 ring-border md:aspect-video">
              <Image
                src={product.beforeAfterImage}
                alt={`نتائج ${product.name} قبل وبعد`}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none"
                }}
              />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex justify-between">
                <span className="rounded-full bg-black/60 px-3 py-1 text-sm font-bold text-white">
                  قبل
                </span>
                <span className="rounded-full bg-accent px-3 py-1 text-sm font-bold text-accent-foreground">
                  بعد
                </span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm ring-1 ring-border">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                {product.results}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA نهائي */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-foreground">جاهزة لتجربي الفرق؟</h2>
        <p className="mt-3 text-foreground/80">الدفع عند الاستلام — توصيل لكل الولايات</p>
        <Button
          asChild
          size="lg"
          className="mt-8 h-auto rounded-md border-0 bg-accent px-10 py-5 text-base font-bold text-accent-foreground hover:bg-[var(--accent-strong)]"
        >
          <Link href="/#order-section">
            <ShoppingBag className="ml-2 h-5 w-5" />
            اطلبي الآن — {product.price} دج
          </Link>
        </Button>
      </section>
    </div>
  )
}
