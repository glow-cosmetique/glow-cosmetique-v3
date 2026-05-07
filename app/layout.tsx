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
  title: 'Glow Cosmetique | حمض الساليسيليك لعلاج الشوائب - الجزائر',
  description: 'كريم حمض الساليسيليك الطبيعي لعلاج الشوائب والبشرة الدهنية. نتائج مضمونة خلال أسبوعين. توصيل لجميع ولايات الجزائر - دفع عند الاستلام.',
  keywords: 'حمض الساليسيليك, علاج الشوائب, كريم بشرة الجزائر, Glow Cosmetique, عناية بشرة طبيعية, acide salicylique algerie',
  metadataBase: new URL('https://glow-cosmetique-v3.vercel.app'),
  openGraph: {
    title: 'Glow Cosmetique | بشرة نضرة ومشرقة 100% طبيعية',
    description: 'انضمي لأكثر من 10,000 زبونة جزائرية اختارت العناية الطبيعية. دفع عند الاستلام.',
    url: 'https://glow-cosmetique-v3.vercel.app',
    siteName: 'Glow Cosmetique',
    locale: 'ar_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glow Cosmetique | حمض الساليسيليك لعلاج الشوائب',
    description: 'كريم حمض الساليسيليك الطبيعي. توصيل لجميع ولايات الجزائر.',
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
              "name": "Acide Salicylique - Glow Cosmetique",
              "description": "مستحضر حمض الساليسيليك لعلاج الشوائب والبشرة الدهنية للبشرة الجزائرية",
              "brand": { "@type": "Brand", "name": "Glow Cosmetique" },
              "offers": {
                "@type": "Offer",
                "price": "1900",
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
