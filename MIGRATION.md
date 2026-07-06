# Wix → Vercel Domain Cutover Runbook

**Goal:** Make `www.xiangyueculturearts.com` serve this Next.js site (on Vercel) instead of the old Wix site, without losing Google rankings.

**Chosen approach:** Keep the domain **registered at Wix**, and only repoint its DNS (A + CNAME) at Vercel. No registrar transfer. Fully reversible in minutes. Brief propagation delay is acceptable (downtime is not a hard constraint).

---

## Situation summary

| Item | Status |
|---|---|
| Domain | `xiangyueculturearts.com`, **registered at Wix** (Wix = registrar + current host) |
| Canonical host | **`www`** — already set in `SITE_URL`, `sitemap.ts`, `robots.ts`, `metadataBase` |
| Domain change? | **No** — same domain, only hosting moves → this is a *hosting* migration, not a domain change |
| Email / MX on domain | **None** (contact is a plain `@gmail.com`) → no MX records to preserve |
| 301 redirects for old Wix URLs | **Already live** in `next.config.ts`; verified to run on the Vercel deploy |
| Google "Change of Address" tool | **Not needed** (domain unchanged) — 301 redirects + sitemap resubmission is the correct mechanism |

> **Key Wix constraint:** you **cannot change name servers** on a Wix-registered domain. The only supported way to point it at Vercel is to **edit the A and CNAME records inside Wix** → *Domains → (three-dot) Domain Actions → Manage DNS Records*. Generic "point your nameservers to Vercel" advice does not apply.

---

## Phase 0 — Pre-flight (do before touching DNS)

1. **Confirm the Vercel deploy is healthy.** Open the site on its `*.vercel.app` URL and click through every page (`/`, `/about`, `/courses`, `/instructors`, `/schedule`, `/performances`, `/faq`, `/voices`, `/contact`). Fix anything broken *before* cutover.
2. **Confirm redirects work on Vercel.** Visit `https://<project>.vercel.app/en/classes` — it must 301 to `/courses`. (These come from `next.config.ts` and only run on Vercel, not the GitHub Pages build.)
3. **Get Google Search Console access** for the property that currently covers the Wix site. You'll need it post-cutover.
4. **Inventory the old Wix URLs** so no high-traffic page is left without a 301:
   - Pull `https://www.xiangyueculturearts.com/sitemap.xml` (currently the Wix sitemap) and save it.
   - In Search Console → **Pages** (and Performance → Pages), export the list of currently-indexed URLs.
   - Compare against the redirect table in `next.config.ts`. Add any missing high-traffic old slugs (see "Redirect coverage" below).
5. **Note the current DNS records at Wix** (screenshot *Manage DNS Records*) so you have an exact rollback target.
6. **Lower the DNS TTL** on the existing A/CNAME records to **300s** in Wix's *Manage DNS Records*, ~24h before cutover. (Lowering TTL *at* cutover does nothing — resolvers keep serving the old record under its old TTL until it expires. Lower it early so rollback is fast.)

---

## Phase 1 — Add the domain in Vercel (get the exact DNS values)

In the Vercel project → **Settings → Domains**:

1. Add **`www.xiangyueculturearts.com`** → keep it as the **primary** (serving) domain.
2. Add **`xiangyueculturearts.com`** (apex) → set it to **Redirect → `www.xiangyueculturearts.com`** (this preserves the www-canonical setup the whole codebase assumes; Vercel also best-effort auto-redirects, but set it explicitly).
3. Vercel will now show **the exact DNS records to create**. **Copy these verbatim** — they are per-project:

| Host | Type | Value | Notes |
|---|---|---|---|
| `www` | **CNAME** | *the per-project value Vercel shows*, e.g. `xxxx.vercel-dns-017.com` | Copy exactly, **including any trailing dot**. Generic fallback: `cname.vercel-dns-0.com` (note the `-0`). |
| `@` (apex/root) | **A** | *the per-project IP Vercel shows*, e.g. `216.198.79.1` | Generic fallback: `76.76.21.21`. **Do not** add an `AAAA`/IPv6 record — Vercel apex doesn't support it. |

> The literal values above are examples. **Always use what your project's Domains page shows.** Vercel now issues project-specific values and no longer publishes a single fixed IP/CNAME.

---

## Phase 2 — Repoint DNS at Wix

In Wix → *Domains → Domain Actions (⋯) → Manage DNS Records* for `xiangyueculturearts.com`:

1. **`www` CNAME** → change/replace its value to the Vercel CNAME target from Phase 1.
2. **`@` (root) A record** → change/replace its value to the Vercel A-record IP from Phase 1.
3. **Remove the old Wix-pointing A/CNAME records** for `@` and `www` (the ones aiming at Wix's IPs) so they don't conflict.
4. **Leave all other records untouched.** (No MX to worry about here, but don't delete unrelated TXT/verification records.)
5. **Clean up cert blockers if present:**
   - Delete any stale **`_acme-challenge` TXT** record left by Wix — it can block Vercel's SSL issuance.
   - If a **CAA** record exists, ensure it allows Let's Encrypt: `0 issue "letsencrypt.org"` (add it if CAA is present but doesn't list letsencrypt).

> You must update **both** the A and the CNAME. Updating only one causes a "Not secure" SSL warning for visitors. Propagation can take up to ~48h but is usually much faster with the lowered TTL.

---

## Phase 3 — Verify

1. **SSL:** Vercel auto-issues a Let's Encrypt cert via HTTP-01 **after** DNS resolves to Vercel (it can't fully pre-issue before cutover). In *Settings → Domains*, wait for status to flip from "Invalid Configuration" to valid, and confirm the padlock loads on `https://www.xiangyueculturearts.com`.
2. **Propagation:** check with `dig www.xiangyueculturearts.com` / `dig xiangyueculturearts.com` and a global tool like dnschecker.org.
3. **Redirects:** confirm the apex → www redirect (`http://xiangyueculturearts.com` → `https://www.xiangyueculturearts.com`) and the old-Wix-URL 301s (e.g. `/en/classes` → `/courses`, `/about-us` → `/about`, `/team-4` → `/instructors`).
4. **Spot-check every page** on the real domain, plus mobile.

Optional pre-flight test (before flipping DNS): point your own machine at Vercel via `curl --resolve` or an OS `hosts` entry to preview the real domain served by Vercel. (Local only; not a substitute for post-cutover global checks.)

---

## Phase 4 — Search Console & SEO

1. **Do NOT use the Change of Address tool** — the domain is unchanged; it doesn't apply.
2. **(Re)verify the property** in Search Console if needed (domain property, or URL-prefix for `https://www.…`).
3. **Submit the new sitemap:** `https://www.xiangyueculturearts.com/sitemap.xml`.
4. **Monitor** the Pages/Coverage report for a few weeks. Watch for 404s / "not found" on old Wix URLs and **add a 301 for any that slipped through** the inventory in Phase 0.5.
5. **Keep the 301 redirects in place at least 1 year** (Google's guidance) — indefinitely is fine.
6. Confirm analytics still fire on the live domain (check the analytics wiring in `src/app/layout.tsx`).

---

## Phase 5 — Decommission Wix

- After the site is verified stable on Vercel for a buffer period (e.g. through the end of the current Wix billing cycle, as a live rollback target):
  - **Cancel the Wix site Premium plan** to stop site-hosting fees. This does **not** move or release the domain.
- **The domain stays registered at Wix**, so you keep paying Wix the **annual domain-registration fee**. To eliminate that fee later, **transfer the domain out** to another registrar (e.g. Cloudflare/Porkbun/Namecheap):
  - Requires: unlock domain, disable WHOIS privacy, get the **EPP/auth code** Wix emails to the registrant contact.
  - Blocked by the **ICANN 60-day lock** after registration, a registrant-contact-info change, or any prior transfer. Don't edit registrant contact info right before transferring (it restarts the 60-day clock). Outbound transfer takes up to ~7 days.
  - This is optional and independent of the cutover — do it whenever convenient after the lock clears.

---

## Rollback

If anything breaks after cutover: in Wix *Manage DNS Records*, **revert the `@` A record and `www` CNAME to the original Wix values** (from your Phase 0.5 screenshot). With TTL at 300s, recovery is ~5 minutes. Keep the Wix site alive until you're confident, so there's always something to roll back to.

---

## Redirect coverage (code side)

Current 301s in `next.config.ts` cover: `/en/classes`, `/home-1`, `/en/home-1`, `/homepage`, `/about-us`, `/en/contact`, `/en/team-4`, `/team-4`, `/en/schedule`.

New routes with **no** old-Wix redirect yet (verify whether the old Wix site had equivalents worth mapping): `/performances`, `/faq`, `/voices`, and bare `/schedule`, `/courses`, `/instructors`, `/about` if the Wix slugs differed. After pulling the Wix sitemap in Phase 0.4, add any missing high-traffic mappings to the `redirects()` array — 1:1 old-slug → new-route, `statusCode: 301`, no chains, and **never** blanket-redirect everything to `/` (that creates soft-404s and loses rankings).
