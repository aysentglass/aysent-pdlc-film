import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Route, Routes } from "react-router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { OrganizationSchema } from "@/components/Schema";
// Eager imports for SSR — no React.lazy
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Applications from "@/pages/Applications";
import About from "@/pages/About";
import Faq from "@/pages/Faq";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";

/**
 * SSR-only App: all routes eagerly imported so renderToString
 * captures the full page content including per-page Schema data.
 */
function SsrApp() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1B2A3A]">
      <OrganizationSchema />
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/**
 * Server-side render entry for prerendering static HTML.
 * Used by scripts/prerender.mjs to generate per-route static files.
 */
export function render(url: string): string {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <SsrApp />
      </StaticRouter>
    </React.StrictMode>
  );
}
