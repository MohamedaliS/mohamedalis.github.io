# Flair Marketing Intelligence (FlairMI) — Complete Plan

## Brand and scope
- Public name: **Flair Marketing Intelligence** (short: **FlairMI**)
- Domain: **flairmi.com**
- Suites: **FlairMI Survey**, **FlairMI Stats**, **FlairMI Writer**

## Hosting
- Static site on GitHub Pages (₹0). Optional VPS later (₹440/month).

## Economics (INR)
- Domain: ₹1,320/year
- AdSense RPM: ₹176 per 1,000 pageviews
- Affiliate example commission: ₹440
- “FlairMI Starter Pack” micro-product: ₹790
- Micro-sponsor example: ₹8,800
- 30-minute consult example: ₹4,400

## Editorial style (must follow)
See **FlairMI_Style_Guide.md** for full rules. Highlights:
- Avoid AI-specific terms and hype.
- No em dashes, semicolons, or ellipses.
- Use clear, specific language; quantify claims.
- Add citations to official docs or reputable sources when needed.

## 12-week ramp
- **Weeks 1–4**: Home + pillar + 3 webR posts; 12 Shorts + 1 long video; target 400 PV/month + 1 affiliate sale
- **Weeks 5–8**: +2 posts + 1 long video; 12 Shorts; soft-launch ₹790 pack; target 1,000 PV/month + 1–2 sales/month
- **Weeks 9–12**: Add one sponsor slot or consult CTA; domain fully covered

## Site map
```
flairmi.com
├─ /blog
├─ /survey
├─ /stats
├─ /writer
└─ /assets
```

## Canonical synthetic datasets
- Schema A — store_weekly (weekly D2C marketing) — Rows: 52; Columns: week, promo_week, spend_search, spend_social, email_freq, avg_order_value, sessions, from_email, time_sec, revenue, conversions
- Schema B — session_log (session-level behaviour) — Rows: 10000; Columns: session_id, user_id, pages, from_email, time_sec, device, source, purchase, revenue_per_session, country, day
- Schema C — experiment_ab (A/B test) — Rows: 20000; Columns: session_id, user_id, variant, assigned_at, converted, order_value, device, source
- Schema D — panel_store (stores × weeks) — Rows: 1040; Columns: store_id, week, treated, spend_search, spend_social, promo_flag, revenue, traffic
- Schema E — path_attribution (multi-touch paths) — Rows: 50000; Columns: user_id, path, path_len, converted
- Schema F — timeseries_daily (daily traffic & sales) — Rows: 730; Columns: date, traffic, sales, price_index, promo_flag, ad_spend
- Schema G — survey_likert (marketing survey) — Rows: 1200; Columns: resp_id, segment, Q1..Q10, intent
- Schema H — choice_tasks (conjoint/choice) — Rows: 8000; Columns: resp_id, task, alt, price, attr1, attr2, attr3, chosen
- Schema I — baskets (market basket data) — Rows: 100000; Columns: transaction_id, user_id, item_id, dept, qty, price
- Schema J — pricing_panel (SKU × week) — Rows: 5200; Columns: sku, week, price, units, promo_flag, category
- Schema K — geo_regions (regions × weeks) — Rows: 3120; Columns: region, week, spend, sales, treated, neighbours_id_list
- Schema L — churn_cohort (survival/retention) — Rows: 10000; Columns: user_id, signup_date, last_active, churned, revenue_total, cohort
- Schema M — text_reviews (NLP) — Rows: 10000; Columns: review_id, product_id, stars, text, date
- Schema N — ad_images (image features) — Rows: 500; Columns: image_id, avg_brightness, colorfulness, text_ratio, faces_detected, clicks

## Schema map used to assign datasets
1–4 → A; 5–20 → C; 21–33 → A; 34–41 → B; 42–45 → C; 46 → D; 47 → D; 48 → F; 49 → D; 50–51 → A; 52–54 → D; 55 → A; 56 → B; 57 → D; 58–59 → A; 60–67 → C; 68–71 → E; 72–76 → A; 77–85 → F; 86–87 → A; 88–89 → F; 90 → A; 91 → F; 92–95 → D; 96–98 → A; 99–104 → B; 105–108 → G; 109–111 → A; 112–117 → H; 118–121 → J; 122–124 → I; 125–134 → L; 135 → C; 136–139 → B; 140–145 → B; 146 → F; 147 → A; 148 → B; 149 → A; 150–153 → B; 154–155 → C; 156–159 → B; 160–165 → B; 166–169 → M; 170 → N; 171–175 → K; 176–180 → F; 181–182 → A; 183–184 → B; 185–187 → C; 188 → A; 189–191 → G; 192 → K; 193 → A; 194 → C; 195–198 → A; 199–200 → A.

## Survey Statistics Series
- 12 Shorts: design to inference (sampling, margin of error, weighting, raking, proportions, Likert, alpha, chi-square, ordinal/logistic)
- 3 standard videos bundling those Shorts
- Blog/webR: synthetic samples from Schema G; target-margins CSV for weighting
- CTAs: “Open in FlairMI Survey” and “Open in FlairMI Writer”

## KPIs (first quarter)
- Month 1: 400 PV, 50 waitlist sign-ups, 1 affiliate sale
- Month 2: 1,000 PV, 150 sign-ups, 2 × ₹790 sales
- Month 3: 1,500 PV, 300 sign-ups, ≥₹1,600/month combined

## Alignment guardrails
- Map content to near-term features in Survey, Stats, or Writer
- Each page/video links to a live tool/template on flairmi.com
- Prefer webR/static hosting; defer heavy server features to later

## Episodes table (CSV)
See **flairmi_200_episodes.csv**
