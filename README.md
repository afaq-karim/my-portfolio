# Afaq Karim — Portfolio

Personal portfolio of Afaq Karim, senior full-stack engineer. Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Editing content

All copy (bio, stats, services, projects, experience, stack, FAQ, contact links) lives in `src/data/site.ts`. Update `site.url` there after attaching a custom domain so canonical URLs, sitemap and Open Graph tags are correct.

## Deploy

Deploys to Vercel with zero config (`vercel --prod`, or import the repo in the Vercel dashboard).
