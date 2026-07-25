// GET /api/admin?key=...&format=csv — protected inquiry listing / CSV export.
import { listInquiries } from "./_db.js";

function toCsv(rows) {
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const header = ["ID", "Name", "Company", "Email", "Country", "Requirements", "Submitted At"];
  const lines = [header.map(esc).join(",")];
  for (const r of rows) {
    lines.push(
      [r.id, r.name, r.company, r.email, r.country, r.requirements, r.created_at].map(esc).join(",")
    );
  }
  return "\uFEFF" + lines.join("\r\n"); // BOM so Excel opens UTF-8 correctly
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const adminKey = process.env.ADMIN_KEY;
  if (!adminKey) {
    return res.status(500).json({ error: "ADMIN_KEY is not configured on the server." });
  }
  if ((req.query.key ?? "") !== adminKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  let rows;
  try {
    rows = await listInquiries();
  } catch (err) {
    console.error("DB query failed:", err);
    return res.status(500).json({ error: "Failed to load inquiries." });
  }

  if (req.query.format === "csv") {
    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader("Content-Disposition", 'attachment; filename="inquiries.csv"');
    return res.status(200).send(toCsv(rows));
  }

  return res.status(200).json({ inquiries: rows });
}
