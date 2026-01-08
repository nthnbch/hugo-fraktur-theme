# Hugo Fraktur Theme

A clean, modern Hugo theme featuring mixed Fraktur/Inter typography. Built for readability, elegance, and performance with no pagination or taxonomy bloat.

![Hugo Fraktur Theme](https://raw.githubusercontent.com/nthnbch/hugo-fraktur-theme/master/images/screenshot.png)

## Features

- **Mixed Typography**: UnifrakturCook Fraktur combined with Inter for selective emphasis
- **No Pagination**: Clean, simple post listings without pagination complexity
- **No Taxonomies**: Streamlined without tags/categories overhead  
- **Minimalist Layout**: Pure focus on content
- **Responsive Design**: Optimized for all screen sizes
- **Fast Loading**: Lightweight and optimized assets
- **SEO Optimized**: Comprehensive meta tags, Schema.org markup, and Open Graph
- **Accessible**: WCAG compliant color contrasts and navigation

## Demo

Live demo: [nathan.swiss](https://nathan.swiss)

## Installation

### Method 1: Git Submodule (Recommended)

```bash
cd your-hugo-site
git submodule add https://github.com/nthnbch/hugo-fraktur-theme themes/hugo-fraktur-theme
```

### Method 2: Clone

```bash
cd your-hugo-site
git clone https://github.com/nthnbch/hugo-fraktur-theme themes/hugo-fraktur-theme
```

### Method 3: Download

Download the theme from GitHub and extract it to `themes/hugo-fraktur-theme`

## Configuration

Update your `config.toml`:

```toml
theme = "hugo-fraktur-theme"
title = "Your Site Name"

# Disable pagination and taxonomies for clean simplicity
disableKinds = ["taxonomy", "term"]

[params]
  # Display options
  showIntroContentOnHomepage = true
  showPostsOnHomepage = false
  
  # Fonts
  enableGoogleFonts = true 
  googleFontsUrl = "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=UnifrakturCook:wght@700&display=swap"
  
  # Analytics (optional)
  google_analytics_id = "G-XXXXXXXXXX"
  # plausible_analytics_domain = "yourdomain.com"
```

## Typography Features

- **Fraktur Headings**: H1 headings use UnifrakturCook font
- **Inter Body Text**: H2, H3, and body text use Inter font for readability
- **Bold Post Titles**: Post titles in listings are automatically styled in bold for better hierarchy

## Customization

### Colors

The theme uses CSS custom properties based on Material Design. To customize colors, create `assets/css/extended/custom.css` and override the variables:

```css
:root {
  --primary: #000000;
  --on-primary: #ffffff;
  --surface: #fef7ff;
  --on-surface: #1d1b20;
  --on-surface-variant: #49454f;
  /* Override other variables as needed */
}
```

### Fonts

To use different fonts, update the `googleFontsUrl` parameter in your `config.toml` and override the font family variables in `assets/css/extended/custom.css`:

```css
:root {
  --font-family-heading: 'Your Heading Font', serif;
  --font-family-paragraph: 'Your Body Font', sans-serif;
  --font-family-monospace: 'Your Code Font', monospace;
}
```

## Social Links

Add social links in `data/social.json`:

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
    }
  ]
}
```

## License

MIT License - See [LICENSE](LICENSE) file for details

## Credits

Created by [Nathan Buache](https://nathan.swiss) - [GitHub](https://github.com/nthnbch)
