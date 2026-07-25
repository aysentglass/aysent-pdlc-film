# Deployment Guide — AYSENT SMART FILM Website

This site is a React (Vite) frontend plus two serverless API routes (`/api/inquiry`, `/api/admin`).
It is designed to deploy on **Vercel** directly from a **GitHub** repository.

---

## 1. Push to GitHub

```bash
git init
git add .
git commit -m "AYSENT SMART FILM website"
git branch -M main
git remote add origin https://github.com/<your-account>/<your-repo>.git
git push -u origin main
```

## 2. Import into Vercel

1. Go to https://vercel.com → **Add New → Project** → import the GitHub repo.
2. Vercel auto-detects **Vite**. Keep the defaults (`Build Command: npm run build`, `Output: dist`).
3. Don't deploy yet — first set the environment variables below (Settings → Environment Variables), or deploy once and add them right after (then **Redeploy**).

## 3. Environment Variables

| Variable | Required | What it does |
|---|---|---|
| `POSTGRES_URL` | Yes* | Connection string of Vercel Postgres (Storage → Create Database → Postgres). |
| `SUPABASE_URL` + `SUPABASE_SERVICE_KEY` | Yes* | Alternative to Postgres: use a free Supabase project instead. |
| `Ast147852` | Yes | Password for the `/admin` page and admin API. Choose a strong random string. |
| `RESEND_API_KEY` | Recommended | API key from https://resend.com for email notifications. |
| `NOTIFY_EMAIL` | Recommended | Where inquiry notification emails are sent, e.g. `sales@aysentsmartfilm.com`. |
| `FROM_EMAIL` | Optional | Sender address. Default: `AYSENT Website <onboarding@resend.dev>` (Resend test domain — works immediately). For a custom sender like `noreply@yourdomain.com`, verify the domain in Resend first. |

\* Exactly one of the two database options is required.

## 4. Create the Database Table

Run this SQL once (Vercel Postgres: Storage → your DB → Query; Supabase: SQL Editor):

```sql
CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT DEFAULT '',
  requirements TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 5. Done — How It Works

- A visitor submits any inquiry form → `POST /api/inquiry` → saved to the `inquiries` table → notification email sent via Resend (email failures never block the visitor).
- You open **https://your-domain.com/admin**, enter your `Ast147852`, and see every inquiry with name, company, email, country, requirements and submission time.
- **Export CSV** button downloads all inquiries (Excel-friendly UTF-8).

## 6. Local Development (optional)

```bash
npm install
npm run dev          # frontend only (forms will fail without the API)
npm i -g vercel
vercel dev           # frontend + API routes together, uses .env.local
```

Copy the variables into `.env.local` for local API testing.
