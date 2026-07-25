import { useState } from "react";
import { X, MessageCircle, Copy, Check } from "lucide-react";
import { BRAND } from "@/lib/site";

/** WhatsApp number for wa.me deep links: digits only, with country code. */
const WA_NUMBER = BRAND.whatsapp.replace(/[^\d]/g, "");
const WECHAT_ID = (BRAND as any).wechat ?? "aysent-smartfilm";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

type Panel = "whatsapp" | "wechat" | null;

export default function WhatsAppFloat() {
  const [panel, setPanel] = useState<Panel>(null);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const chatUrl = `https://wa.me/${WA_NUMBER}${
    message.trim() ? `?text=${encodeURIComponent(message.trim())}` : ""
  }`;

  const toggle = (p: Exclude<Panel, null>) => {
    setPanel((cur) => (cur === p ? null : p));
  };

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
    } catch {
      // clipboard API 不可用时忽略
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* ---------- WhatsApp 面板 ---------- */}
      {panel === "whatsapp" && (
        <div className="w-72 overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/10 sm:w-80">
          <div className="flex items-center justify-between bg-[#075E54] px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">{BRAND.name}</p>
              <p className="text-xs text-white/80">Typically replies within 1 hour</p>
            </div>
            <button
              onClick={() => setPanel(null)}
              className="rounded-full p-1 transition-colors hover:bg-white/10"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="bg-[#ECE5DD] p-4">
            <div className="mb-3 max-w-[85%] rounded-lg rounded-tl-none bg-white p-3 text-sm text-gray-700 shadow-sm">
              Hi there! Interested in our smart film products? Send us a message and we'll get back
              to you shortly.
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              rows={3}
              className="mb-3 w-full resize-none rounded-lg border border-gray-200 bg-white p-2.5 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
            />
            <a
              href={chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1EBE5B]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Start Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* ---------- WeChat 面板 ---------- */}
      {panel === "wechat" && (
        <div className="w-72 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10 sm:w-80">
          <div className="flex items-center justify-between bg-[#07C160] px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">WeChat</p>
              <p className="text-xs text-white/80">Scan or add us on WeChat</p>
            </div>
            <button
              onClick={() => setPanel(null)}
              className="rounded-full p-1 transition-colors hover:bg-white/10"
              aria-label="Close WeChat panel"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4">
            {/* 二维码图片：把微信二维码命名为 wechat-qr.png 放到 public/images/ */}
            <div className="mx-auto mb-3 flex h-44 w-44 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
              <img
                src="/images/wechat-qr.png"
                alt="WeChat QR code"
                className="h-full w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5">
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-wide text-gray-400">WeChat ID</p>
                <p className="truncate text-sm font-semibold text-gray-800">{WECHAT_ID}</p>
              </div>
              <button
                onClick={copyWechat}
                className="ml-2 flex shrink-0 items-center gap-1.5 rounded-md bg-[#07C160] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#06AD56]"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------- 悬浮按钮组（上下排列） ---------- */}
      <div className="flex flex-col gap-3">
        <button
          onClick={() => toggle("whatsapp")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          {panel === "whatsapp" ? <X className="h-6 w-6" /> : <WhatsAppIcon className="h-7 w-7" />}
        </button>
        <button
          onClick={() => toggle("wechat")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#07C160] text-white shadow-xl shadow-[#07C160]/30 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Chat on WeChat"
        >
          {panel === "wechat" ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
        </button>
      </div>
    </div>
  );
}