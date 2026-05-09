import type { Metadata } from 'next'
import { Alexandria, Tajawal } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const alexandria = Alexandria({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-alexandria',
  display: 'swap',
})

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Glow Cosmetique | كريم مرطب بزيت الأرغان الطبيعي - الجزائر',
  description: 'كريم مرطب فاخر مصنوع من زيت الأرغان الجزائري الأصيل. يمنح بشرتك ترطيباً عميقاً يدوم 24 ساعة. توصيل لجميع ولايات الجزائر - الدفع عند الاستلام.',
  keywords: 'كريم مرطب, زيت الأرغان, العناية بالبشرة الجزائر, Glow Cosmetique, عناية بشرة طبيعية, ترطيب البشرة, كريم للوجه',
  metadataBase: new URL('https://glow-cosmetique-v3.vercel.app'),
  openGraph: {
    title: 'Glow Cosmetique | كريم مرطب طبيعي 100% بزيت الأرغان',
    description: 'انضمي لأكثر من 10,000 زبونة جزائرية اختارت العناية الطبيعية. احصلي على ترطيب عميق وبشرة نضرة. دفع عند الاستلام.',
    url: 'https://glow-cosmetique-v3.vercel.app',
    siteName: 'Glow Cosmetique',
    locale: 'ar_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glow Cosmetique | كريم مرطب بزيت الأرغان',
    description: 'ترطيب عميق يدوم 24 ساعة. كريم طبيعي بزيت الأرغان الجزائري.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${alexandria.variable} ${tajawal.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "كريم مرطب بزيت الأرغان - Glow Cosmetique",
              "description": "كريم مرطب فاخر مصنوع من زيت الأرغان الجزائري الأصيل. يمنح بشرتك ترطيباً عميقاً يدوم 24 ساعة كاملة.",
              "image": "https://glow-cosmetique-v3.vercel.app/products/product-1.jpg",
              "brand": { "@type": "Brand", "name": "Glow Cosmetique" },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "156"
              },
              "offers": {
                "@type": "Offer",
                "price": "2500",
                "priceCurrency": "DZD",
                "availability": "https://schema.org/InStock",
                "areaServed": "DZ"
              }
            })
          }}
        />
      </head>
      <body className={`${tajawal.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
