# Sitemap: BY THE WAY - BURGER & GRILLHAUS
Generated: 2025-11-28
Template Source: sitemap-pages + shadcn-ui-blocks (MCP)

---

## 1. Homepage (/)
**Template:** sitemap-pages/pages/homepage.md
**Priority:** critical
**SEO Focus:** Burger Steinmaur, Grillhaus Steinmaur

### Sections

**Header (Navbar)**
- Block: @shadcnblocks/navbar22
- Reason: Restaurant-specific navbar with location/time info on left, logo center, navigation links right. Perfect for displaying opening hours and contact info prominently.
- Command: `pnpm dlx shadcn add @shadcnblocks/navbar22`

**Hero Section**
- Block: @shadcnblocks/hero174
- Reason: Full-screen hero with dark background image showcasing food. Centered heading/body text with CTA button. Includes location label at bottom left - ideal for restaurant hero with address display.
- Command: `pnpm dlx shadcn add @shadcnblocks/hero174`

**Stats Section**
- Block: @shadcnblocks/stats1
- Reason: Three key metrics horizontally arranged (e.g., "500+ Happy Customers", "9 Menu Categories", "5 Years Experience"). Clean, centered design for social proof.
- Command: `pnpm dlx shadcn add @shadcnblocks/stats1`

**Menu Preview Feature**
- Block: @shadcnblocks/hero85
- Reason: Two-column layout with text/CTA on left, 2x2 grid of food images on right. Perfect for showcasing 4 signature dishes with heading "Unsere Spezialitäten" and link to menu page.
- Command: `pnpm dlx shadcn add @shadcnblocks/hero85`

**Values/USPs Feature**
- Block: @shadcnblocks/feature137
- Reason: Four value cards in 2x2 grid, each with image, heading, body text. Displays: "Frische Zutaten", "Regionale Produkte", "Hausgemachte Saucen", "Authentische Rezepte" with food prep images.
- Command: `pnpm dlx shadcn add @shadcnblocks/feature137`

**Food Gallery**
- Block: @shadcnblocks/gallery25
- Reason: Asymmetric masonry-style gallery with varied image sizes. Dynamic layout perfect for showcasing multiple burger and grill dishes in visually interesting arrangement.
- Command: `pnpm dlx shadcn add @shadcnblocks/gallery25`

**Testimonials**
- Block: @shadcnblocks/testimonial11
- Reason: Three-column testimonial grid with avatars, names, company info. Includes platform badges with star ratings in upper right - excellent for Google/TripAdvisor reviews display.
- Command: `pnpm dlx shadcn add @shadcnblocks/testimonial11`

**Banner Promotion**
- Block: @shadcnblocks/banner4
- Reason: Top banner for promotional offers (e.g., "Gratis Lieferung ab 15 CHF"). Centered text with close button - non-intrusive announcement.
- Command: `pnpm dlx shadcn add @shadcnblocks/banner4`

**Contact/Location CTA**
- Block: @shadcnblocks/contact4
- Reason: Three columns with heading/body/button (phone, address, hours), plus full-width image with text box overlay. Perfect for location display with embedded map image and contact CTAs.
- Command: `pnpm dlx shadcn add @shadcnblocks/contact4`

**Instagram Feed**
- Block: @shadcnblocks/community7
- Reason: 3x2 grid of social platform cards showing platform icon, name, URL, follower count. Adapted to display Instagram feed preview with follower count and link to @BYTHEWAY.CH.
- Command: `pnpm dlx shadcn add @shadcnblocks/community7`

**Footer**
- Block: @shadcnblocks/footer24
- Reason: Large centered heading, three-column layout (email left, social links center, phone right), navigation menu bottom left. Perfect for restaurant contact info and social media prominence.
- Command: `pnpm dlx shadcn add @shadcnblocks/footer24`

---

## 2. Menu (/speisekarte)
**Template:** Custom (Food Menu)
**Priority:** critical
**SEO Focus:** Burger Steinmaur, Smash Burger, Cevapcici, Balkan Grill

### Sections

**Header (Navbar)**
- Block: @shadcnblocks/navbar22
- Reason: Consistent navbar across all pages for brand continuity.
- Command: `pnpm dlx shadcn add @shadcnblocks/navbar22`

**Hero Section**
- Block: @shadcnblocks/hero217
- Reason: Dark background hero with vertically stacked text (label, heading, CTA button) at top, large full-width food image below. Perfect for menu page hero showcasing signature burger.
- Command: `pnpm dlx shadcn add @shadcnblocks/hero217`

**Food Menu Component (CUSTOM)**
- Block: **Custom FoodMenu Component** (no shadcnblocks exist for restaurant menus)
- Reason: No pre-built shadcnblocks for food menus. sitemap-executor will create custom component using base shadcn UI primitives (Tabs for 9 categories, Card for items, Badge for prices/labels).
- Implementation: Tabs component (Smash Burgers, Chicken, Premium, Veggie, Balkan, Grill, Boxes, Kinder, Dessert), Card per menu item with image, name, description, price in CHF.
- Command: Custom implementation - base shadcn UI: `pnpm dlx shadcn add tabs card badge`

**Stats Section**
- Block: @shadcnblocks/stats1
- Reason: Three metrics: "38 Gerichte", "9 Kategorien", "Vegetarische Optionen". Reinforces menu variety.
- Command: `pnpm dlx shadcn add @shadcnblocks/stats1`

**Feature Section (Delivery Info)**
- Block: @shadcnblocks/feature60
- Reason: Two-column layout with image left (delivery driver/food), text right explaining "Gratis Lieferung ab 15 CHF" and take-away options.
- Command: `pnpm dlx shadcn add @shadcnblocks/feature60`

**Allergen/Dietary Info**
- Block: @shadcnblocks/faq5
- Reason: FAQ-style accordion for allergen information, dietary restrictions, ingredient sourcing. Numbered Q&A format with bold questions and explanatory text.
- Command: `pnpm dlx shadcn add @shadcnblocks/faq5`

**CTA Section (Order Now)**
- Block: @shadcnblocks/hero87
- Reason: Two-column layout with heading/body/CTA button left ("Jetzt bestellen: 077 290 52 31"), large food image right. Strong conversion driver.
- Command: `pnpm dlx shadcn add @shadcnblocks/hero87`

**Testimonials (Food Quality)**
- Block: @shadcnblocks/feature32
- Reason: One large testimonial left, two smaller stacked right. "Loved by clients" style focusing on food quality reviews.
- Command: `pnpm dlx shadcn add @shadcnblocks/feature32`

**Footer**
- Block: @shadcnblocks/footer24
- Reason: Consistent footer across all pages.
- Command: `pnpm dlx shadcn add @shadcnblocks/footer24`

---

## 3. About Us (/ueber-uns)
**Template:** sitemap-pages/pages/about.md
**Priority:** high
**SEO Focus:** Burger Steinmaur, Grillhaus Steinmaur, Authentische Balkan Küche

### Sections

**Header (Navbar)**
- Block: @shadcnblocks/navbar22
- Reason: Consistent navbar across all pages.
- Command: `pnpm dlx shadcn add @shadcnblocks/navbar22`

**Hero Section**
- Block: @shadcnblocks/hero166
- Reason: Two-column hero with heading/body/CTA left, three images in staggered asymmetrical grid right. Perfect for "Unsere Geschichte" hero with restaurant atmosphere photos.
- Command: `pnpm dlx shadcn add @shadcnblocks/hero166`

**Restaurant Story**
- Block: @shadcnblocks/feature60
- Reason: Two-column layout with centered image left (restaurant interior/team), heading and body text right. Tells origin story, passion for quality burgers and Balkan cuisine.
- Command: `pnpm dlx shadcn add @shadcnblocks/feature60`

**Values & Philosophy**
- Block: @shadcnblocks/feature42
- Reason: Two-column layout with large "Unsere Werte" heading left, 2x2 grid of values right (Qualität, Frische, Regionalität, Authentizität). Clean, text-focused design.
- Command: `pnpm dlx shadcn add @shadcnblocks/feature42`

**Sourcing/Ingredients Story**
- Block: @shadcnblocks/feature102
- Reason: Three-step vertical timeline left (Auswahl, Zubereitung, Servierung), three images stacked right aligned with timeline steps. Shows ingredient journey from farm to plate.
- Command: `pnpm dlx shadcn add @shadcnblocks/feature102`

**Gallery (Restaurant Atmosphere)**
- Block: @shadcnblocks/gallery26
- Reason: Asymmetrical gallery with two small images top, large horizontal image middle, two small images bottom. Showcases dining area, kitchen, outdoor seating.
- Command: `pnpm dlx shadcn add @shadcnblocks/gallery26`

**Milestones**
- Block: @shadcnblocks/stats19
- Reason: Two-column milestone list with large headings left (dates/achievements), body text right. Shows restaurant journey: opening, expansion, awards, etc.
- Command: `pnpm dlx shadcn add @shadcnblocks/stats19`

**Testimonials**
- Block: @shadcnblocks/testimonial7
- Reason: Centered heading/body/CTA button top, grid of testimonial cards below with avatars, names, job titles, quoted text. Customer validation for About page.
- Command: `pnpm dlx shadcn add @shadcnblocks/testimonial7`

**Contact CTA**
- Block: @shadcnblocks/hero123
- Reason: Two-column layout with label/heading/body/button left, tall image right. "Besuchen Sie uns" CTA with location details.
- Command: `pnpm dlx shadcn add @shadcnblocks/hero123`

**Footer**
- Block: @shadcnblocks/footer24
- Reason: Consistent footer across all pages.
- Command: `pnpm dlx shadcn add @shadcnblocks/footer24`

---

## 4. Impressum (/impressum)
**Template:** Legal page (simple)
**Priority:** low
**SEO Focus:** noindex, nofollow

### Sections

**Header (Navbar)**
- Block: @shadcnblocks/navbar22
- Reason: Consistent navbar for navigation back to main site.
- Command: `pnpm dlx shadcn add @shadcnblocks/navbar22`

**Legal Content**
- Block: @shadcnblocks/service1
- Reason: Vertically stacked content with centered heading, subheading, multiple paragraphs. Perfect for legal text display with clear typography hierarchy.
- Command: `pnpm dlx shadcn add @shadcnblocks/service1`

**Footer**
- Block: @shadcnblocks/footer6
- Reason: Simplified footer with logo/tagline left, two navigation columns center (Company, Support), copyright/legal links bottom. Appropriate for legal pages.
- Command: `pnpm dlx shadcn add @shadcnblocks/footer6`

---

## 5. Datenschutz (/datenschutz)
**Template:** Legal page (simple)
**Priority:** low
**SEO Focus:** noindex, nofollow

### Sections

**Header (Navbar)**
- Block: @shadcnblocks/navbar22
- Reason: Consistent navbar for navigation.
- Command: `pnpm dlx shadcn add @shadcnblocks/navbar22`

**Privacy Policy Content**
- Block: @shadcnblocks/service1
- Reason: Vertically stacked paragraphs with heading hierarchy. Clean layout for GDPR compliance text, cookie policy, data processing information.
- Command: `pnpm dlx shadcn add @shadcnblocks/service1`

**Footer**
- Block: @shadcnblocks/footer6
- Reason: Simplified footer consistent with Impressum page.
- Command: `pnpm dlx shadcn add @shadcnblocks/footer6`

---

## Internal Linking Strategy

**Strategy:** Hub-and-spoke with Homepage as central hub

**Key Hubs:**
1. Homepage (/) - Links to all major pages
2. Menu (/speisekarte) - Links to Homepage, About, Contact section

**Primary Link Flows:**
- Homepage → Menu (prominent "Speisekarte ansehen" CTA)
- Homepage → About ("Unsere Geschichte")
- Menu → Homepage (logo + breadcrumb)
- About → Menu ("Entdecken Sie unsere Gerichte" CTA)
- All pages → Contact info (phone in navbar/footer)

**Footer Navigation:**
- All pages link to: Homepage, Menu, About, Impressum, Datenschutz
- Consistent footer ensures max 2 clicks to any page

**SEO Internal Linking:**
- Anchor text optimization: "Burger Steinmaur" links to Menu, "Grillhaus" to About
- Related content links in body text (e.g., Menu → "Über unsere Zutaten" → About)

---

## User Journeys

**Journey 1: Local Diner Discovery**
- Entry: Google search "Burger Steinmaur" → Homepage
- Path: Homepage (hero + menu preview) → Menu page (browse categories) → Phone CTA (order)
- Goal: Place phone order or visit restaurant

**Journey 2: Menu Browser**
- Entry: Google Maps "restaurants near me" → Homepage
- Path: Homepage → Menu (explore 9 categories) → About (trust building) → Phone order
- Goal: First-time order conversion

**Journey 3: Repeat Customer**
- Entry: Direct URL or bookmark → Menu page
- Path: Menu (quick browse) → Phone CTA
- Goal: Repeat order with minimal friction

**Journey 4: Social Media Referral**
- Entry: Instagram @BYTHEWAY.CH → Homepage
- Path: Homepage (gallery/testimonials) → Menu → Location/hours → Visit
- Goal: Dine-in or take-away visit

**Journey 5: Brand Research**
- Entry: Google search "Balkan Grill Steinmaur" → About page
- Path: About (story/values) → Menu (product validation) → Testimonials → Order
- Goal: First-time customer conversion after trust building

---

## Growth Recommendations

**Phase 1 (Current):** 5-page informational site with phone order CTA
- Focus: Local SEO, Google Maps optimization, social proof

**Phase 2 (6-12 months):** Enhanced features
- Online reservation system (OpenTable integration or custom booking)
- Gallery expansion with customer photo submissions
- Blog section for recipes, ingredient stories, chef interviews
- Seasonal menu updates workflow

**Phase 3 (12-24 months):** E-commerce expansion
- Online ordering system with checkout
- Loyalty program integration
- Multi-language support (English for tourists)
- Catering services page

**Technical Considerations:**
- Current: Static content, manual menu updates
- Future: CMS integration (Sanity/Contentful) for menu management
- Analytics: Track phone CTA clicks, menu category engagement, top exit pages

---

## Competitor Insights

**Local Market Analysis (Steinmaur/Dielsdorf):**
- Primary competitors: Local burger joints, pizza places, generic restaurants
- Gap: Specialized burger + Balkan fusion concept is unique in area
- Opportunity: Own "Burger Steinmaur" and "Balkan Grill Steinmaur" keyword space

**Architecture Advantages:**
- Image-rich design (competitors often text-heavy)
- Clear menu organization (9 categories vs competitors' unstructured lists)
- Prominent social proof (testimonials + Instagram integration)
- Mobile-first design (many local competitors have poor mobile UX)

**SEO Opportunities:**
- Local schema markup (Restaurant, Menu, OpeningHours) - most competitors lack
- High-quality food photography (competitors use stock photos)
- Customer testimonial content (E-E-A-T signals)
- Fast Core Web Vitals (Next.js optimization advantage)

---

## Notes

**Image Requirements:**
- All selected blocks are IMAGE-RICH per user request
- Required photography: Hero backgrounds (3-5 high-res burger/grill shots), Menu item photos (38 items minimum), Gallery images (15-20 variety shots), Testimonial avatars (6-12 customers), Restaurant interior/exterior (5-8 photos), Team/kitchen action shots (4-6 photos)

**Custom Development:**
- FoodMenu component is CUSTOM (no shadcnblocks equivalent)
- Will use base shadcn UI: Tabs (category navigation), Card (menu item display), Badge (price tags, dietary labels)
- Structure: 9 tabs for categories, responsive grid of cards per category, filterable/searchable

**Design Consistency:**
- Navbar (navbar22) + Footer (footer24 or footer6) used across ALL pages
- Brand colors from brand.json: Primary #CD7F32 (Bronze) for CTAs, Secondary #420D09 (Ember Red) for accents, Background #000000 (Black), Foreground #FFFFFF (White)
- Typography: Inter for headings and body

**i18n Note:**
- German-only site (single language per requirements.md)
- No next-intl setup needed
- All component text will be in German

**SEO Metadata:**
- Homepage: "Burger Steinmaur | BY THE WAY - BURGER & GRILLHAUS | Authentische Smash Burgers & Balkan Grill"
- Menu: "Speisekarte | Smash Burger, Balkan Grill, Cevapcici | BY THE WAY Steinmaur"
- About: "Über uns | Frische Zutaten & Authentische Rezepte | BY THE WAY Steinmaur"
- Impressum/Datenschutz: noindex, nofollow per requirements
