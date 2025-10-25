# Giscus Comments Setup Instructions

Giscus is now integrated into all 6 blog posts but requires configuration to work.

## Setup Steps

1. **Enable GitHub Discussions** in your repository:
   - Go to https://github.com/MohamedaliS/flairmi/settings
   - Scroll to "Features" section
   - Check "Discussions"

2. **Install Giscus App**:
   - Visit https://github.com/apps/giscus
   - Click "Install"
   - Select the `flairmi` repository

3. **Get Repository IDs**:
   - Visit https://giscus.app/
   - Enter your repo: `MohamedaliS/flairmi`
   - Select category: "Blog Comments" (or create this category in Discussions first)
   - Copy the generated values:
     - `data-repo-id="YOUR_REPO_ID"`
     - `data-category-id="YOUR_CATEGORY_ID"`

4. **Update Blog Posts**:
   - Replace empty `data-repo-id=""` with your actual repo ID
   - Replace empty `data-category-id=""` with your actual category ID
   - Update all 6 files:
     - blog/posts/01-margin-of-error.qmd
     - blog/posts/02-two-proportion-test.qmd
     - blog/posts/03-t-test.qmd
     - blog/posts/04-welch-t.qmd
     - blog/posts/05-simple-regression.qmd
     - blog/posts/06-logistic-basics.qmd

5. **Rebuild Site**:
   - Run `quarto render`
   - Push to GitHub
   - Comments will appear at the bottom of each blog post

## Features Enabled

- ✅ GitHub authentication (prevents spam)
- ✅ Reactions enabled
- ✅ Comment input at top
- ✅ Light theme (matches site design)
- ✅ Lazy loading (better performance)

## Security

- All comments stored in GitHub Discussions
- Only GitHub users can comment
- You moderate via GitHub Discussions interface
- No third-party tracking or ads
