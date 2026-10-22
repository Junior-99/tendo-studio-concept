# Tendo Studio — independent React website concept

Uncommissioned technology-content concept for the Nairobi studio. Not endorsed or operated by the studio. No purchases, confirmed commissions or residency bookings.

## Run and deploy

Node 22+: npm ci; npm run dev. Production: npm run build. Deploy dist to free static hosting. Relative asset paths and six HTML entrypoints support direct navigation on GitHub Pages and Vercel.

## Pages

- index.html: original scroll-driven Three.js gallery using real business-published images, moving perspective and drag interaction; photographic selected works.
- archive.html: image-heavy paginated public feed archive, search, editorial category filters and saved references.
- work.html?id=art-001: individual image, source excerpt, collaborator credit, original post link and reference-saving control.
- commission.html: reference shortlist (maximum 12), project type, material, width/height, deadline, destination and notes; validated local brief saving.
- studio.html: source-grounded background and links to the real studio and artisan profile.
- dashboard.html: local brief counts, status editing, exports, optional creator-inbox submission and protected shared administration.

## Media and provenance

All archive images come from the public Tendo Studio Instagram feed and include credited collaborations. src/gallery.json preserves original post links, image dimensions and artist handles. Source captions are limited to short excerpts; original posts provide full context. Images are references, not live stock or an assertion that every image depicts a purchasable product. No AI-generated business photographs are used. Media rights remain with their respective owners; reuse permission is not established.

DESIGN.md records composition and motion references. No paid template, generation API, asset pack or hosting upgrade.

## Backend and practical limits

Local references and briefs persist in localStorage on the current device and can be exported. Optional submissions go to the website creator’s demonstration inbox after explicit consent, not to the real studio. Supabase enforces verified-email and per-site membership rules for private record access, status/notes editing, search, pagination and export. The browser contains only a publishable key.

The approved creator must register with their own password, verify email and sign in. Registration does not itself grant administrator access. That onboarding has not been performed by the agent. Before official use, obtain business approval and image rights, confirm operating details and catalogue, onboard the business and configure privacy, retention and operational notifications.

## Validation

Production-build and browser results are recorded in the series document. Counts use actual saved data. No invented sales, customer reviews, production capacity or availability. Reduced-motion support, image fallback, lazy loading and offscreen rendering suspension are implemented.


## Imported archive

336 public post-preview images were collected and downloaded successfully from the studio feed on 22 October 2026, including previews for posts/reels and credited collaborations. All 336 are included across 14 archive pages. This is not a claim that every carousel slide or full video has been imported. Images are optimised as WebP; gallery cards load lazily. Only 12 images are loaded into the 3D scene. No generated photography was needed.
