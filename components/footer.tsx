import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Music2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="lp-footer border-t border-[#5a2a12]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* معلومات العلامة */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                <span className="lp-accent-text font-bold text-lg">G</span>
              </div>
              <span className="inline-flex items-center bg-[#F8F4F2] px-3 py-1 text-lg font-black uppercase tracking-tight text-[#2C1410]">
                Glow Cosmetique
              </span>
            </div>
            <p className="text-[var(--footer-txt)]/90 mb-6 max-w-sm">
              منتجات عناية بالبشرة طبيعية 100%، مصنوعة بحب في الجزائر لكل جزائرية تستحق بشرة مشرقة.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:0662559416" className="flex items-center gap-2 text-[var(--footer-txt)]/90 hover:text-[var(--footer-txt)] transition-colors">
                <Phone className="w-4 h-4" />
                <span>0662559416</span>
              </a>
              <a href="mailto:glwocosmitique@gmail.com" className="flex items-center gap-2 text-[var(--footer-txt)]/90 hover:text-[var(--footer-txt)] transition-colors">
                <Mail className="w-4 h-4" />
                <span>glwocosmitique@gmail.com</span>
              </a>
              <a
                href="https://wa.me/213662559416"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--footer-txt)]/30 bg-[#5a2a12]/45 px-4 py-2 text-sm font-semibold text-[var(--footer-txt)] hover:bg-[#5a2a12]/70 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center gap-2 text-[var(--footer-txt)]/90">
                <MapPin className="w-4 h-4" />
                <span>الجزائر العاصمة</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--footer-txt)]/20">
          <div className="flex items-center justify-start gap-5 sm:gap-7">
            <span className="text-sm sm:text-base font-semibold tracking-wide text-[var(--footer-txt)]">
              CONNECT WITH US
            </span>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[var(--footer-txt)]/90 hover:text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[var(--footer-txt)]/90 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-[var(--footer-txt)]/90 hover:text-white transition-colors"
            >
              <Music2 className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* الأسفل */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-[var(--footer-txt)]/20">
          <p className="text-sm text-[var(--footer-txt)]/90">
            &copy; {new Date().getFullYear()} Glow Cosmetique. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[var(--footer-txt)]/90">طرق الدفع:</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-[#5a2a12]/45 border border-[var(--footer-txt)]/30 rounded text-xs font-medium text-[var(--footer-txt)]">الدفع عند الاستلام</span>
              <span className="px-2 py-1 bg-[#5a2a12]/45 border border-[var(--footer-txt)]/30 rounded text-xs font-medium text-[var(--footer-txt)]">CCP</span>
              <span className="px-2 py-1 bg-[#5a2a12]/45 border border-[var(--footer-txt)]/30 rounded text-xs font-medium text-[var(--footer-txt)]">Baridimob</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
