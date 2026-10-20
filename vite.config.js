import { cwd } from 'node:process';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { renderMetaTags, renderStructuredData } from './src/data/seo.js';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd(), 'VITE_');
  const googleSiteVerification = env.VITE_GOOGLE_SITE_VERIFICATION?.trim();

  return {
    plugins: [
      react(),
      {
        name: 'portfolio-seo-head',
        transformIndexHtml(html) {
          const verificationContent = googleSiteVerification
            ?.replaceAll('&', '&amp;')
            .replaceAll('"', '&quot;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;');
          const verificationTag = googleSiteVerification
            ? `<meta name="google-site-verification" content="${verificationContent}" />`
            : '';
          const seoHead = [
            '<!-- SEO_META_START -->',
            renderMetaTags('/'),
            '<!-- SEO_META_END -->',
            '<!-- SEO_SCHEMA_START -->',
            renderStructuredData(),
            '<!-- SEO_SCHEMA_END -->',
            verificationTag,
          ].join('\n');

          return html.replace('<!-- SEO_HEAD -->', seoHead);
        },
      },
    ],
  };
});
