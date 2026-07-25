import { Link } from "react-router";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { BRAND, NAV_ITEMS, PRODUCTS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/images/logo.png" alt="AYSENT SMART FILM" className="h-9 w-auto" />
              <span className="text-[15px] font-extrabold tracking-wide">{BRAND.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              A professional smart film manufacturer and supplier in China, delivering PDLC smart glass
              film, switchable privacy solutions and OEM/ODM services to buyers in 40+ countries.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/85">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-white/65 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Footer product links">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/85">Products</h3>
            <ul className="mt-4 space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="text-sm text-white/65 transition-colors hover:text-white">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/85">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#7FB3E8]" />
                <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-white">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#7FB3E8]" />
                <span>WhatsApp / Tel: {BRAND.whatsapp}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#7FB3E8]" />
                <span>{BRAND.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">© 2026 {BRAND.name}. All Rights Reserved.</p>
          <div className="flex gap-6 text-xs text-white/50">
            <Link to="/contact" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/contact" className="transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
