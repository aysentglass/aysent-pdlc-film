// Database helper for AYSENT SMART FILM inquiry backend.
// Works with Vercel Postgres (preferred) or Supabase as fallback.
//
// Required table (run once):
//   CREATE TABLE IF NOT EXISTS inquiries (
//     id SERIAL PRIMARY KEY,
//     name TEXT NOT NULL,
//     company TEXT NOT NULL,
//     email TEXT NOT NULL,
//     country TEXT DEFAULT '',
//     requirements TEXT NOT NULL,
//     created_at TIMESTAMPTZ DEFAULT NOW()
//   );

let pgPool = null;

async function getDb() {
  const connStr =
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL;

  if (connStr) {
    // Vercel Postgres — uses the lightweight `pg` driver (pure JS, no native builds)
    if (!pgPool) {
      const { default: pg } = await import("pg");
      pgPool = new pg.Pool({
        connectionString: connStr,
        ssl: { rejectUnauthorized: false },
        max: 1, // serverless: keep the pool tiny
      });
    }
    return {
      type: "postgres",
      async query(text, params = []) {
        const res = await pgPool.query(text, params);
        return res.rows;
      },
    };
  }

  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY) {
    // Supabase via REST (no extra deps)
    const base = `${process.env.SUPABASE_URL}/rest/v1`;
    const headers = {
      apikey: process.env.SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    };
    return {
      type: "supabase",
      async insert(row) {
        const res = await fetch(`${base}/inquiries`, {
          method: "POST",
          headers,
          body: JSON.stringify(row),
        });
        if (!res.ok) throw new Error(`Supabase insert failed: ${res.status} ${await res.text()}`);
        return res.json();
      },
      async select() {
        const res = await fetch(`${base}/inquiries?select=*&order=created_at.desc`, { headers });
        if (!res.ok) throw new Error(`Supabase select failed: ${res.status} ${await res.text()}`);
        return res.json();
      },
    };
  }

  throw new Error(
    "No database configured. Set POSTGRES_URL (Vercel Postgres) or SUPABASE_URL + SUPABASE_SERVICE_KEY."
  );
}

export async function insertInquiry(row) {
  const db = await getDb();
  if (db.type === "postgres") {
    await db.query(
      "INSERT INTO inquiries (name, company, email, country, requirements) VALUES ($1,$2,$3,$4,$5)",
      [row.name, row.company, row.email, row.country ?? "", row.requirements]
    );
    return;
  }
  await db.insert(row);
}

export async function listInquiries() {
  const db = await getDb();
  if (db.type === "postgres") {
    return db.query("SELECT * FROM inquiries ORDER BY created_at DESC");
  }
  return db.select();
}
