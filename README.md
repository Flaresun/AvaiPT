# AVAI PT

Marketing site for AVAI PT — Elevating Home Health Physical Therapy.

A Next.js (App Router) static landing site. The only server-side piece is
`/api/contact`, which relays the consultation form through [Resend](https://resend.com).

## Getting started

```bash
cd client
npm install
npm run dev     # http://localhost:3000
```

## Scripts

Run from `client/`:

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server             |
| `npm run build` | Production build                 |
| `npm start`     | Serve the production build       |
| `npm run lint`  | ESLint                           |

## Environment

The contact form needs these set (e.g. in `client/.env.local`). The site builds
and runs without them; only form submission will fail.

| Variable         | Description                                  |
| ---------------- | -------------------------------------------- |
| `RESEND_API_KEY` | Resend API key                               |
| `EMAIL_FROM`     | Verified sender address                      |
| `EMAIL_TO`       | Inbox that receives consultation requests    |

## Layout

```
client/src/
  app/
    layout.tsx          Navbar, Footer, Google Tag Manager, shared metadata
    page.tsx            Homepage
    components/         Hero, Services, Pros, Carousel, Testimonials, Location, Navbar, Footer
    contact/ privacy/   Standalone pages
    services*/          One folder per service page
    api/contact/        Resend handler for the consultation form
  components/ui/        shadcn/ui primitives
  lib/
    site.ts             Business details, used by pages and metadata
    services.ts         The six services — drives the nav menus, homepage grid and footer
```

Analytics runs through Google Tag Manager (container `GTM-WKCRL72N`), loaded
once in `app/layout.tsx`.
