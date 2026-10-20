# Malay Thakkar — Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, and React Router.

## Local development

```sh
npm install
npm run dev
```

## Build and checks

```sh
npm run build
npm run test:seo
npm run lint
```

The production build writes route-specific HTML for `/`, `/projects`, and
`/certifications`, plus the public sitemap, robots file, and 404 page. Keep
`src/data/seo.js` and `public/sitemap.xml` in sync when adding public routes.

## Google setup

### Google Analytics 4

Create a GA4 web data stream and set its measurement ID (`G-...`) as
`VITE_GA_MEASUREMENT_ID` in the local environment or Netlify build environment.
Copy `.env.example` as a starting point for local configuration. The application
does not load the Google tag when this value is empty. The tag sends page views
and portfolio events for project details, social profile clicks, resume
downloads, and successful contact submissions; form contents and other
personally identifying data are not included.

Update the site's privacy notice and consent behavior to meet the requirements
that apply to your visitors before enabling analytics in production.

### Google Search Console

Verify the `malaythakkar.dev` property in Search Console. DNS verification is
preferred for a Domain property. If using the HTML tag method, set the
verification token as `VITE_GOOGLE_SITE_VERIFICATION` during the production
build. Submit `https://malaythakkar.dev/sitemap.xml` in the Sitemaps report
after deployment. Search Console indexing and performance reports may take
time to populate after property verification.

## Deployment

Netlify builds with `npm run build` and publishes `dist/`. Set any Vite
environment variables in Netlify's build settings; values prefixed with
`VITE_` are embedded in client assets and must not contain secrets.
