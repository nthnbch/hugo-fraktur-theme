# Hugo Fraktur Theme

A clean, ultra-minimalist Hugo theme featuring distinctive Fraktur headings combined with modern Inter typography. Strictly Black & White, zero external dependencies, self-hosted variable fonts, native dark/light mode with toggle, and frictionless typography.

![Hugo Fraktur Theme](https://raw.githubusercontent.com/nthnbch/hugo-fraktur-theme/master/images/screenshot.png)

## Highlights & Features (v1.2)

- **Strictly Black & White**: Pure monochrome palette with semantic CSS variables (`--bg`, `--text`, `--border`, `--code-bg`, `--link`).
- **Dark & Light Modes**: 
  - Automatically respects user's OS preference (`prefers-color-scheme`).
  - Interactive header toggle with persistent `localStorage` storage and 0 FOUC (no flash of wrong theme).
- **100% Self-Hosted Fonts**:
  - **UnifrakturCook** for headings, brand logo, and title elements.
  - **Inter Variable** (`InterVariable.woff2`, `InterVariable-Italic.woff2`) for crisp, readable body text.
  - Zero external calls (no Google Fonts tracking, GDPR/FADP compliant, works fully offline).
- **Frictionless Link Hover**: Subtle animated text underline offset on hover for an ultra-clean feel.
- **Configurable Footer**: Customizable theme attribution (`themeName`, `themeRepo`) and optional build metadata.
- **No Pagination / No Taxonomies Bloat**: Designed for focused, long-form reading and clear chronological lists.
- **SEO & Structured Data**: Built-in Open Graph, Twitter Cards, Schema.org Person metadata, and semantic HTML5.
- **Performance & Privacy**: Zero tracking, minimal CSS/JS footprint (<15 KB total assets).

## Demo

- Live demo: [nathan.swiss](https://nathan.swiss)

---

## Installation

### Method 1: Git Submodule (Recommended)

From your Hugo site root:

```bash
git submodule add https://github.com/nthnbch/hugo-fraktur-theme themes/hugo-fraktur-theme
```

### Method 2: Hugo Module

```bash
hugo mod init my-site
```

Add the theme to your configuration:

```toml
theme = ["github.com/nthnbch/hugo-fraktur-theme"]
```

### Method 3: Clone

```bash
git clone https://github.com/nthnbch/hugo-fraktur-theme themes/hugo-fraktur-theme
```

---

## Configuration

Add the theme settings to your `config.toml` (or `hugo.toml`):

```toml
baseURL = "https://example.com/"
languageCode = "en"
title = "My Fraktur Blog"
theme = "hugo-fraktur-theme"

# Disable taxonomies for minimalist simplicity
disableKinds = ["taxonomy", "term"]

[params]
  # Homepage display options
  showIntroContentOnHomepage = true
  showPostsOnHomepage = true

  # Theme toggle button in header (default: true)
  enableThemeToggle = true

  # Frame border around the site (optional)
  addFrame = false

  # Configurable footer theme attribution
  themeName = "Fraktur"
  themeRepo = "https://github.com/nthnbch/hugo-fraktur-theme"
  
  # Optional build info in footer (e.g. "100/100 Lighthouse")
  # buildTime = "100/100 Lighthouse"

  # Analytics (optional)
  # google_analytics_id = "G-XXXXXXXXXX"
  # plausible_analytics_domain = "example.com"

[menu]
  [[menu.main]]
    identifier = "home"
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    identifier = "posts"
    name = "Blog"
    url = "/posts/"
    weight = 2
  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 3
  [[menu.main]]
    identifier = "contact"
    name = "Contact"
    url = "/pages/contact/"
    weight = 4
```

---

## Social Links

Define your social links in `data/social.json`:

```json
{
  "links": [
    {
      "name": "GitHub",
      "url": "https://github.com/yourusername"
    },
    {
      "name": "LinkedIn",
      "url": "https://linkedin.com/in/yourusername"
    },
    {
      "name": "X / Twitter",
      "url": "https://x.com/yourusername"
    }
  ]
}
```

---

## Customization & Overrides

### CSS Variables

To tweak colors or spacing, create `assets/css/extended/custom.css` in your site:

```css
:root,
[data-theme="light"] {
  --bg: #ffffff;
  --text: #111111;
  --text-muted: #555555;
  --border: #d4d4d4;
  --code-bg: #f5f5f5;
  --link: #111111;
}

[data-theme="dark"] {
  --bg: #0f0f0f;
  --text: #eeeeee;
  --text-muted: #999999;
  --border: #333333;
  --code-bg: #1a1a1a;
  --link: #eeeeee;
}
```

---

## Example Site

An `exampleSite` directory is included in the repository. You can preview it locally:

```bash
cd exampleSite
hugo server --themesDir=../.. --theme=hugo-fraktur-theme
```

---

## License

MIT License — see [LICENSE](LICENSE) for details.

## Author

Created with care by [Nathan Buache](https://nathan.swiss) ([@nthnbch](https://github.com/nthnbch)).
