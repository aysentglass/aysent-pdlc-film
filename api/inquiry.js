// POST /api/inquiry — receive a customer inquiry, store it, and email a notification.
import { insertInquiry } from "./_db.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, company, email, country = "", requirements, website = "" } = req.body ?? {};

  // Honeypot: the hidden "website" field should never be filled by a real user.
  // If it is, silently accept the request without storing — don't reveal the trap.
  if (website && String(website).trim()) {
    return res.status(200).json({ ok: true });
  }

  // server-side validation (never trust the client)
  if (!name?.trim() || !company?.trim() || !email?.trim() || !requirements?.trim()) {
    return res.status(400).json({ error: "Missing required fields." });
  }
  if (!EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const row = {
    name: name.trim(),
    company: company.trim(),
    email: email.trim(),
    country: (country ?? "").trim(),
    requirements: requirements.trim(),
  };

  try {
    await insertInquiry(row);
  } catch (err) {
    console.error("DB insert failed:", err);
    return res.status(500).json({ error: "Failed to save inquiry. Please email us directly." });
  }

  // Email notification via Resend (best-effort — a mail failure never blocks the customer)
  if (process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.FROM_EMAIL || "AYSENT Website <onboarding@resend.dev>",
          to: [process.env.NOTIFY_EMAIL],
          subject: `New Inquiry — ${row.name} (${row.company})`,
          text: [
            `New inquiry from the website:`,
            ``,
            `Name: ${row.name}`,
            `Company: ${row.company}`,
            `Email: ${row.email}`,
            `Country: ${row.country || "-"}`,
            ``,
            `Requirements:`,
            row.requirements,
          ].join("\n"),
        }),
      });
    } catch (err) {
      console.error("Email notification failed (non-blocking):", err);
    }
  }

  return res.status(200).json({ ok: true });
}
