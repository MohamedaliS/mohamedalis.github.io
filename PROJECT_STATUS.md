# Project Status — Flair Marketing Intelligence (FlairMI)

**Phase:** 1 · Public site launch  
**Date:** 2025-10-25  
**Repo:** https://github.com/MohamedaliS/flairmi  
**Live URL:** https://mohamedalis.github.io/flairmi

## Snapshot
- Platform: Quarto on GitHub Pages, mobile first
- Suites in scope: Stats, Writer, Survey
- Currency: INR on public pages
- Style: see /plans/FlairMI_Style_Guide.md

## Completed
- Quarto scaffold with navbar, footer, and Actions workflow
- Six starter blog posts fully expanded with comprehensive templates (01-06)
  - All posts follow standardized structure: TL;DR, Case, Dataset, Method, Calculation, Results, Visualization, Sample Size Planning, Assumptions, Limitations
  - WebR-compatible tables using html_table() function
  - Multiple WebR chunks for calculations, results tables, and interactive visualizations
  - Business decision frameworks with actionable insights
  - Custom citation format (APA + BibTeX) with copy buttons
  - JSON-LD structured data for SEO optimization
  - No icons, no em dashes, academic style throughout
  - Mobile-responsive CSS styling
  - All posts render successfully without errors
- Downloads page with policies, kits, rate card, invoices, and CSV attachments
- Starter Pack checkout mock under /shop
- JSON-LD Organization include and Answer card template
- Plans bundled under /plans for maintainers
- Helper functions in _helpers.qmd: apa_p, cohen_h, cohen_d, apa_t_line, apa_lm_line, or_ci

## In progress
- Mobile smoke testing on actual device

## Next milestones
1) Phase 1 acceptance checks pass and site goes live  
2) End-to-end demo: Survey → Stats → Writer published as one long video  
3) Starter Pack first sale and one sponsor inquiry

## Acceptance checks for Phase 1
- Site builds without errors and deploys on GitHub Pages
- Navbar and footer links work
- At least one post runs a webR chunk on mobile
- Each post has an Answer card, meta description, and alt text
- JSON-LD Organization appears site-wide and Article appears on posts
- /shop mock flow shows a download link and logs a mock_purchase event
- All plan files are reachable from /downloads
- Text follows the Style Guide and uses INR

## Risks and controls
- webR speed on older phones: keep code short and precompute heavy fits
- Sponsor conflicts: one sponsor per video
- Scope creep: do not add new suites before stage gates are met
- Compliance: keep Privacy, Terms, Refunds, Disclosure in the footer

## Files to use as sources of truth
- Root prompts: /CODEX_README.md, /chatgpt_codex_prompt.txt  
- Plans: /plans/FlairMI_Plan.md, /plans/FlairMI_Roadmap_16w.md, /plans/FlairMI_Style_Guide.md  
- SEO includes: /assets/seo/site_schema.html, /assets/seo/answer_card_template.md

---

## Embedded Codex task list (read first)
Follow this list step by step. Keep changes small and commit after each group.

1) Build
- Run `quarto render` from /flairmi  
- Fix build errors if any

2) Blog
- For each post in /blog/posts  
  - Insert an Answer card near the top using /assets/seo/answer_card_template.md  
  - Add a 140–160 character description in front matter  
  - Add alt text to figures if present  
  - Add a JSON-LD Article block with title, date, canonical URL

3) Footer and feedback
- Ensure footer links to Privacy, Terms, Refunds, Disclosure  
- Add `mailto:contact@flairmi.com?subject=FlairMI%20Feedback` to footer and to the end of each post

4) Analytics
- Add a commented placeholder snippet block in _quarto.yml with a note on where to paste the site ID later  
- Document planned goals: downloads, checkout clicks, bookings, sponsor kit opens

5) Downloads
- Confirm that all plan files under /plans are linked from /downloads/index.qmd

6) Publish
- Commit changes with clear messages  
- Push to main  
- Ensure .github/workflows/publish.yml runs and Pages deploys  
- Record the live URL below

7) Record outcomes in Changelog

---

## Changelog
- 2025-10-20: Initial scaffold committed. Actions workflow added.  
- 2025-10-22: Posts created. Downloads and policies added.  
- 2025-10-24: Starter Pack checkout mock added.  
- 2025-10-25: Posts upgraded with helpers, bibliography, refreshed downloads, local build verified.  
- 2025-10-25: All starter posts aligned to the margin-of-error template and human review complete.  
- 2025-10-25: Posts 01-03 fully expanded with comprehensive templates (TL;DR, Case, Dataset, Method, Calculation, Results, Visualization, Sample Size Planning, Assumptions, Limitations, Custom Citations, JSON-LD).
- 2025-10-25: Posts 04-06 expanded using same comprehensive template structure. All six blog posts now follow standardized academic format with WebR interactivity, business decision frameworks, and mobile-responsive design. All posts render successfully.
- 2025-10-25: **Soft launch preparation completed:**
  - Added SEO-optimized Answer Cards to all 6 blog posts (01-06)
  - Integrated Giscus comment system (GitHub authentication) at end of all blog posts
  - Added analytics placeholder with documented goal events to _quarto.yml
  - Created about.qmd page with placeholder content
  - Fixed Welch1947 citation in references.bib (no more warnings)
  - Verified all downloads files exist (Starter Pack zip, PDFs, DOCX)
  - Added About link to navbar
  - Site builds cleanly with zero errors/warnings
- 2025-10-25: Deployment ready; push to trigger GitHub Pages workflow. URL:

---

## KPI log (quarter 1)
- Month 1: pageviews, sign-ups, affiliate sales  
- Month 2: pageviews, sign-ups, Starter Pack sales  
- Month 3: pageviews, sign-ups, total monthly revenue

---

## Beginner Codex prompt
Use this when setting up the project for the first time.

```
You are working in the flairmi project. Read CODEX_README.md, then follow chatgpt_codex_prompt.txt.

Tasks:
1) Build locally with “quarto render” and fix errors.
2) Verify navbar and footer links.
3) Ensure one blog post runs a webR chunk on mobile.
4) Publish with the GitHub Actions workflow and confirm Pages.

Acceptance:
- Build succeeds with no errors.
- Links work.
- One post runs webR in a browser.
- Pages URL is recorded in PROJECT_STATUS.md under “Changelog”.
```

## Continuity Codex prompt
Use this to resume work from the current status.

```
Open PROJECT_STATUS.md and follow the “Embedded Codex task list”. Do items in order. After each step, append a dated entry to the Changelog and update the KPI log if relevant.

If a task mentions a file, open the exact path stated. Do not reorganize folders.

Stop when all “Acceptance checks for Phase 1” are satisfied. Record the live site URL in PROJECT_STATUS.md.
```

## Hand-off notes
- Keep /plans as the only location for plan and style files  
- Keep /downloads for public assets and business files  
- Keep chatgpt_codex_prompt.txt at the project root only

End of file.
