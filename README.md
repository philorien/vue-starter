# Lorien Vue Starter

A design-first Vue 3 starter for marketing sites, landing pages, and small SPAs. It ships a full page of sections (hero, testimonials, content, gallery, features, team, FAQ, contact, footer) driven by one content file, with accessibility and performance handled up front.

## Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`, TypeScript)
- **Build tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with tokens in `src/style.css`
- **Typography:** Space Grotesk (brand/logo) and Geist (body/UI), self-hosted via `@fontsource`
- **Icons:** [Lucide Vue](https://lucide.dev/guide/packages/lucide-vue-next)
- **Carousel:** [Embla Carousel Vue](https://www.embla-carousel.com/)
- **Utilities:** [VueUse](https://vueuse.org/)

## Quick Start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
```

## Project Structure

```
src/
  config/site.ts        All copy, links, and sample data (start here)
  components/ui/        One component per page section
  composables/          useReveal: one-shot scroll-reveal animation
  lib/utils.ts          cn() helper (clsx + tailwind-merge)
  style.css             Tailwind import, brand tokens, global rules
  assets/hero.webp      Hero background (replace with your own)
public/favicon.svg      Placeholder favicon
index.html              Title, description, and Open Graph tags
```

## Finishing Setup Checklist

Work through this list when turning the starter into a real site. Items marked **required** will leave placeholder content live if skipped.

### 1. Content (required)

- [ ] Edit `src/config/site.ts`: site name, wordmark, tagline, nav, hero, about, features, FAQ, footer columns.
- [ ] Replace sample testimonials, team members, and gallery images with real ones. Testimonials need the person's permission.
- [ ] Replace the placeholder contact details (`hello@example.com`, `+1 (555) 123-4567`, the sample address) and business hours.
- [ ] Remove sections you do not need from `src/App.vue`. Sections are independent, so deleting one does not affect the others.
- [ ] Footer links to `/privacy` and `/terms` are placeholders. Add real pages or remove those links. This SPA has no router, so those paths will not resolve until you add one or link to external pages.

### 2. Contact form and newsletter (required)

The contact form runs in **demo mode** by default: it shows a success state but sends nothing.

- [ ] Set `contact.formEndpoint` in `src/config/site.ts` to a form service URL (Formspree, Getform, Basin) or your own endpoint. The form POSTs `FormData` and expects a 2xx response.
- [ ] Newsletter is hidden by default. To enable it, set `footer.newsletter.action` to your provider's form action URL (MailerLite, Buttondown, and similar). It submits as a standard HTML form POST.
- [ ] If you add a form service, consider adding spam protection (honeypot field or the provider's built-in option).

### 3. Branding

- [ ] Brand colors live in `src/style.css` under `@theme`. If you change the green, keep it at 4.5:1 contrast or better against white, since it is used for button backgrounds and small text. Check with a contrast tool before shipping.
- [ ] Swap fonts by installing another `@fontsource` package, importing it in `src/main.ts`, and updating `--font-sans` or `--font-space-grotesk` in `src/style.css`.
- [ ] Replace `public/favicon.svg`. Add Apple touch icons and a web manifest if the site needs them.
- [ ] Update `<meta name="theme-color">` in `index.html` to match your brand.

### 4. Images

- [ ] Replace `src/assets/hero.webp`. Keep it around 2400px wide and under about 600 KB (for example `cwebp -q 78 -resize 2400 0 input.png -o src/assets/hero.webp`).
- [ ] Sample images are hotlinked from Unsplash and Pravatar. Download the ones you keep into `src/assets/` or `public/`, or host them on your own CDN. Hotlinking is fine for demos and a risk in production.
- [ ] Every image needs meaningful `alt` text. Decorative images should use `alt=""`.

### 5. SEO and sharing

This is a client-rendered SPA, so crawlers and link previews see only what is in `index.html`.

- [ ] Update `<title>`, `description`, and the `og:*` tags in `index.html`.
- [ ] Add `og:image` (1200x630) and `og:url`, plus `twitter:card` if you want rich link previews.
- [ ] Add `public/robots.txt` and, if relevant, `public/sitemap.xml`.
- [ ] If the site needs per-page titles, structured data, or strong search performance, migrate to Nuxt (see below).

### 6. Quality checks before launch

- [ ] Run `npm run build` and fix any type errors.
- [ ] Keyboard-test the whole page: skip link, nav, mobile menu (Escape closes it), FAQ, carousel, gallery lightbox, form.
- [ ] Test with `prefers-reduced-motion` enabled. Parallax and reveals should calm down.
- [ ] Run Lighthouse on the deployed URL and check the hero image is not the LCP bottleneck.
- [ ] Add analytics and a cookie notice if your jurisdiction or client requires them.

### 7. Deploy

- [ ] See [Deploying to Vercel](#deploying-to-vercel) below.
- [ ] Point your custom domain at the deployment and confirm HTTPS.

## Design System: The 90-8-2 Rule

- **90% Neutrals:** `white` and `neutral-50` alternate to create section rhythm without heavy borders. Uses Tailwind's default neutral scale.
- **8% Brand Green (`#007A5A`):** Primary actions, active states, focus rings, link hovers, and small semantic highlights (kickers, roles). Tuned to pass WCAG AA with white text.
- **2% Brand Orange (`#FF9800`):** Reserved for rare alerts or conversion drivers that must break the green hierarchy. Orange fails contrast as text on white, so use it for fills and icons only.

Decorative gradients, colored shadows, and glow effects are intentionally omitted to keep the look sharp.

## Accessibility Built In

- Skip-to-content link and a `main` landmark
- Focus return and Escape handling on the mobile menu and lightbox, with a focus trap in the lightbox
- `aria-expanded` and `aria-controls` on the FAQ, labelled form fields, and a live region for form status
- 44px minimum touch targets
- Global `prefers-reduced-motion` handling, plus reduced parallax in the hero

## Known Limitations

- **Light theme only.** The page declares `color-scheme: light`. A dark theme means adding variants per component.
- **No router.** Everything is one page with anchor links. Add `vue-router` if you need multiple routes (and configure rewrites on your host).
- **No head management.** Titles and meta tags are static in `index.html`. Add `@unhead/vue` for per-route metadata.
- **No linting or tests.** There is no ESLint, Prettier, or test runner configured yet.
- **Lightbox has no arrow-key navigation.** Escape and Tab trapping work.

## When to use this template

This is an **SPA**. It suits:

- **Landing pages** and single-page marketing sites
- **Portfolios and agency sites** with client-side animation
- **Apps behind a login**, where SEO is irrelevant
- **Rapid prototyping** of polished UI

## When to graduate to Nuxt

Move to Nuxt if the project needs any of these:

1. **SEO automation:** dynamic meta tags, sitemaps, and server-side rendering for content-heavy pages.
2. **Content-heavy architecture:** a blog, docs, or e-commerce with many pages, where file-based routing and Nuxt Content save time.
3. **Server APIs:** a database or secret API keys without a separate backend (Nitro `/server/api`).
4. **Slow-network performance:** server-rendered HTML for better LCP on weak mobile connections.

Most of the section components port over to Nuxt with little change, and `src/config/site.ts` can move as-is.

## Deploying to Vercel

The template builds to static files and needs no extra config. Vercel serves from the root, so Vite's default `base: '/'` is correct.

1. Push the repo to GitHub and import it in [Vercel](https://vercel.com).
2. Keep the defaults: **Framework Preset** Vite, **Build Command** `npm run build`, **Output Directory** `dist`.
3. Deploy. Preview and production URLs work without base-path changes.

If you add `vue-router` with history mode, add a `vercel.json` rewrite so deep links fall back to `index.html`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

For GitHub Pages, set `base` in `vite.config.ts` to your repo path (for example `'/vue-starter/'`).

## License

See [LICENSE](./LICENSE).
