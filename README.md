# Shree Shyam Infotech Website

Next.js + TypeScript + Tailwind CSS BPO/technology company website based on the supplied specification.

## Run
```bash
npm install
npm run dev
```

## Before production
- Replace the temporary `SS` logo mark in `Navbar.tsx`, `Hero.tsx`, `WhyChooseUs.tsx`, and `Footer.tsx` with the supplied logo asset. Place it at `public/logo.png` and switch those marks to `next/image`.
- Add verified phone, email, address and business hours in `Contact.tsx`.
- Configure the verified map coordinates in `LocationMap.tsx` and replace the placeholder with Leaflet/OpenStreetMap or Google Maps.
- Connect the contact form to the company's email/CRM/API.
- Add real social profile URLs.
- Add a real favicon/OG image if desired.
