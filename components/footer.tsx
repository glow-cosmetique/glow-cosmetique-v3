import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const footerLinks = {
  products: [
    { label: "كريمات مرطبة", href: "/#products" },
    { label: "سيروم ومصلات", href: "/#products" },
    { label: "غسولات الوجه", href: "/#products" },
    { label: "زيوت طبيعية", href: "/#products" }
  ],
  support: [
    { label: "اتصلي بنا", href: "tel:0662559416", external: true },
    { label: "راسلينا عبر البريد", href: "mailto:glwocosmitique@gmail.com", external: true },
    { label: "سياسة الشحن", href: "/shipping-policy" },
    { label: "سياسة الإرجاع", href: "/return-policy" }
  ]
}

export function Footer() {
  return (
    <footer className="bg-[#f8fbef] border-t border-[#e3edd0]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* معلومات العلامة */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#d4f036] flex items-center justify-center border border-[#c7df3a]">
                <span className="text-[#22352a] font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-foreground">Glow Cosmetique</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              منتجات عناية بالبشرة طبيعية 100%، مصنوعة بحب في الجزائر لكل جزائرية تستحق بشرة مشرقة.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:0662559416" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>0662559416</span>
              </a>
              <a href="mailto:glwocosmitique@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>glwocosmitique@gmail.com</span>
              </a>
              <a
                href="https://wa.me/213662559416"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dfe7d0] bg-white px-4 py-2 text-sm font-semibold text-[#1f4d1f] hover:bg-[#f3f9e8] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>الجزائر العاصمة</span>
              </div>
            </div>
          </div>

          {/* روابط المنتجات */}
          <div>
            <h4 className="font-bold text-foreground mb-4">منتجاتنا</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* روابط الدعم */}
          <div>
            <h4 className="font-bold text-foreground mb-4">المساعدة</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* الأسفل */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#e3edd0]">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Glow Cosmetique. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">طرق الدفع:</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-white border border-[#dfe7d0] rounded text-xs font-medium">الدفع عند الاستلام</span>
              <span className="px-2 py-1 bg-white border border-[#dfe7d0] rounded text-xs font-medium">CCP</span>
              <span className="px-2 py-1 bg-white border border-[#dfe7d0] rounded text-xs font-medium">Baridimob</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
