# ALANKAR LUXURY — Haute Jewellery & Lifestyle Catalogue

A digital catalogue website for **ALANKAR LUXURY**, showcasing certified 22K hallmarked gold jewellery, pure 24K Jadau & untreated Polki, 92.5 pure sterling silver pooja heirlooms, and luxury bridal accessories.

Designed as an enquiry-driven catalogue with direct WhatsApp boutique concierge integration (no cart, no checkout, no payment gateway).

---

## Tech Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Motion & Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## Deploying to Vercel

The project is fully configured and optimized for zero-config Vercel deployment (`vercel.json`, `next.config.ts`, and `.gitignore` are already configured).

### Option 1: Deploy via GitHub (Recommended)

1. **Create a new repository on GitHub** (e.g., `alankar-luxury`).
2. **Link and push this repository**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/alankar-luxury.git
   git push -u origin main
   ```
3. **Import into Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your `alankar-luxury` GitHub repository.
   - Framework Preset: **Next.js** (auto-detected).
   - Click **Deploy**.

Vercel will build and deploy the website in under a minute with free global CDN and automatic SSL.

---

### Option 2: Deploy via Vercel CLI

In your project terminal, run:

```bash
npx vercel
```

- When asked `Set up and deploy?`, press `y`.
- Accept the default project settings.
- To deploy to production:
  ```bash
  npx vercel --prod
  ```

---

## Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
