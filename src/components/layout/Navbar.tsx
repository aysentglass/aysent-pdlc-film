import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, Sparkles, X } from "lucide-react";
import { BRAND, NAV_ITEMS } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-brand transition-all duration-300 ${
        scrolled ? "shadow-2xl shadow-black/30 ring-1 ring-white/10 backdrop-saturate-150" : "shadow-md"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 text-white" aria-label="AYSENT SMART FILM home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/25">
            <Sparkles className="h-5 w-5 text-[#7FB3E8]" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-wide">{BRAND.name}</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
              Smart Film Manufacturer
            </span>
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-white/15 text-white" : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/contact#quote"
            className="hidden rounded-md bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2A6FB8] sm:inline-block"
          >
            Get Free Quote
          </Link>
          {/* Hamburger */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-brand lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2.5 text-sm font-medium ${
                      isActive ? "bg-white/15 text-white" : "text-white/80 hover:bg-white/10"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact#quote"
                className="block rounded-md bg-brand-accent px-3 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#2A6FB8]"
              >
                Get Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
