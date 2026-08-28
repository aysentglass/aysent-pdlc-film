import { Link } from "react-router";
import { useSeo } from "@/components/Seo";

export default function NotFound() {
  useSeo({
    title: "Page Not Found | AYSENT SMART FILM",
    description: "The page you are looking for does not exist. Browse our PDLC smart film products, applications and blog.",
    noindex: true,
  });

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-7xl font-extrabold text-brand sm:text-9xl">404</p>
      <h1 className="mt-4 text-2xl font-bold text-[#1B2A3A] sm:text-3xl">Page Not Found</h1>
      <p className="mt-3 max-w-md text-[#5A6B7C]">
        The page you're looking for doesn't exist or has been moved. Explore our products,
        applications or get in touch for a quote.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/products"
          className="inline-flex items-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          View Products
        </Link>
        <Link
          to="/"
          className="inline-flex items-center rounded-md border border-[#CBD5E1] px-6 py-3 text-sm font-semibold text-[#1B2A3A] hover:bg-[#F1F5F9]"
        >
          Back to Home
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-md border border-brand px-6 py-3 text-sm font-semibold text-brand hover:bg-brand-light"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
