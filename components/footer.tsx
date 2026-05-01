import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  products: [
    { label: "كريمات مرطبة", href: "#" },
    { label: "سيروم ومصلات", href: "#" },
    { label: "غسولات الوجه", href: "#" },
    { label: "زيوت طبيعية", href: "#" }
  ],
  support: [
    { label: "اتصلي بنا", href: "#" },
    { label: "الأسئلة الشائعة", href: "#" },
    { label: "سياسة الشحن", href: "#" },
    { label: "سياسة الإرجاع", href: "#" }
  ]
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* معلومات العلامة */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">ن</span>
              </div>
              <span className="text-xl font-bold text-foreground">نضارة الجزائر</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              منتجات عناية بالبشرة طبيعية 100%، مصنوعة بحب في الجزائر لكل جزائرية تستحق بشرة مشرقة.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+213555123456" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>0555 123 456</span>
              </a>
              <a href="mailto:contact@nadara-dz.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@nadara-dz.com</span>
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
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
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
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* الأسفل */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} نضارة الجزائر. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">طرق الدفع:</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-secondary rounded text-xs font-medium">الدفع عند الاستلام</span>
              <span className="px-2 py-1 bg-secondary rounded text-xs font-medium">CCP</span>
              <span className="px-2 py-1 bg-secondary rounded text-xs font-medium">Baridimob</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
