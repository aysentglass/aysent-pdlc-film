import { useCallback, useEffect, useState } from "react";
import {
  Building2,
  CalendarDays,
  Download,
  Globe2,
  Inbox,
  Loader2,
  Lock,
  LogOut,
  Mail,
  RefreshCw,
  TriangleAlert,
  User,
} from "lucide-react";
import { useSeo } from "@/components/Seo";

interface Inquiry {
  id: number;
  name: string;
  company: string;
  email: string;
  country: string;
  requirements: string;
  created_at: string;
}

const STORAGE_KEY = "aysent_admin_key";

export default function Admin() {
  useSeo("Admin — AYSENT SMART FILM", "Inquiry management.");
  const [key, setKey] = useState(() => sessionStorage.getItem(STORAGE_KEY) ?? "");
  const [input, setInput] = useState("");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);

  const load = useCallback(async (k: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin?key=${encodeURIComponent(k)}`);
      if (res.status === 401) throw new Error("Wrong admin key. Please try again.");
      if (!res.ok) throw new Error(`Failed to load inquiries (${res.status}).`);
      const data = await res.json();
      setInquiries(data.inquiries ?? []);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error.");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (key) load(key);
  }, [key, load]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await load(input.trim());
    if (ok) {
      sessionStorage.setItem(STORAGE_KEY, input.trim());
      setKey(input.trim());
    }
  };

  const logout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setKey("");
    setInquiries([]);
  };

  /* ---------- login screen ---------- */
  if (!key) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-brand-light px-4 py-20">
        <form onSubmit={login} className="w-full max-w-sm border border-[#E2E8EE] bg-white p-8 shadow-sm">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
            <Lock className="h-6 w-6" />
          </span>
          <h1 className="mt-5 text-center text-2xl font-extrabold tracking-tight text-[#0B2A4A]">Admin Access</h1>
          <p className="mt-2 text-center text-sm text-[#5A6B7C]">Enter the admin key to view customer inquiries.</p>
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(""); }}
            placeholder="Admin key"
            className="mt-6 w-full rounded-md border border-[#D5DEE6] px-3.5 py-2.5 text-sm outline-none focus:border-brand-accent"
            autoFocus
          />
          {error && (
            <p className="mt-3 flex items-start gap-2 text-sm text-red-600">
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" /> {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-accent disabled:opacity-60"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
            {loading ? "Verifying…" : "Sign In"}
          </button>
        </form>
      </section>
    );
  }

  /* ---------- dashboard ---------- */
  return (
    <section className="bg-brand-light py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#0B2A4A]">Customer Inquiries</h1>
            <p className="mt-1.5 text-sm text-[#5A6B7C]">
              {inquiries.length} {inquiries.length === 1 ? "inquiry" : "inquiries"} received via the website.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => load(key)}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-md border border-[#D5DEE6] bg-white px-4 py-2.5 text-sm font-semibold text-[#33475C] transition-colors hover:border-brand-accent hover:text-brand"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Refresh
            </button>
            <a
              href={`/api/admin?key=${encodeURIComponent(key)}&format=csv`}
              className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-accent"
            >
              <Download className="h-4 w-4" /> Export CSV
            </a>
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 rounded-md border border-[#D5DEE6] bg-white px-4 py-2.5 text-sm font-semibold text-[#33475C] transition-colors hover:border-red-300 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          </div>
        </div>

        {error && (
          <p className="mt-6 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" /> {error}
          </p>
        )}

        {!error && inquiries.length === 0 && !loading && (
          <div className="mt-10 flex flex-col items-center rounded-lg border border-dashed border-[#C9D6E2] bg-white px-6 py-16 text-center">
            <Inbox className="h-12 w-12 text-[#C9DAEB]" />
            <p className="mt-4 font-semibold text-[#33475C]">No inquiries yet</p>
            <p className="mt-1 text-sm text-[#7A8A9A]">New submissions from the website will appear here.</p>
          </div>
        )}

        <ul className="mt-8 space-y-4">
          {inquiries.map((inq) => {
            const open = expanded === inq.id;
            return (
              <li key={inq.id} className="border border-[#E2E8EE] bg-white">
                <button
                  onClick={() => setExpanded(open ? null : inq.id)}
                  className="flex w-full flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4 text-left"
                >
                  <span className="flex items-center gap-2 font-bold text-[#0B2A4A]">
                    <User className="h-4 w-4 text-brand-accent" /> {inq.name}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-[#425363]">
                    <Building2 className="h-4 w-4 text-[#9AA9B8]" /> {inq.company}
                  </span>
                  {inq.country && (
                    <span className="flex items-center gap-2 text-sm text-[#425363]">
                      <Globe2 className="h-4 w-4 text-[#9AA9B8]" /> {inq.country}
                    </span>
                  )}
                  <span className="ml-auto flex items-center gap-2 text-xs text-[#7A8A9A]">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(inq.created_at).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}
                  </span>
                </button>
                {open && (
                  <div className="border-t border-[#EEF2F5] px-5 py-4">
                    <p className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-brand-accent" />
                      <a href={`mailto:${inq.email}`} className="font-semibold text-brand-accent hover:underline">
                        {inq.email}
                      </a>
                    </p>
                    <p className="mt-3 whitespace-pre-wrap rounded-md bg-[#F8FAFC] p-4 text-sm leading-relaxed text-[#425363]">
                      {inq.requirements}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
