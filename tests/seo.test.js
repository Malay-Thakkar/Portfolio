import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import test from 'node:test';
import { PAGE_METADATA, SITE_STRUCTURED_DATA, SITE_URL } from '../src/data/seo.js';

const distDirectory = resolve('dist');

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;');
}

function htmlPath(pathname) {
  return pathname === '/'
    ? join(distDirectory, 'index.html')
    : join(distDirectory, pathname.slice(1), 'index.html');
}

for (const [pathname, page] of Object.entries(PAGE_METADATA)) {
  test(`${pathname} has unique crawl metadata and canonical URL`, async () => {
    const html = await readFile(htmlPath(pathname), 'utf8');
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    assert.ok(html.includes(`<title>${escapeHtml(page.title)}</title>`));
    assert.ok(html.includes(`<meta name="description" content="${page.description}" />`));
    assert.ok(html.includes(`<link rel="canonical" href="${canonicalUrl}" />`));
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1);
    assert.match(html, /property="og:image"/);
    assert.doesNotMatch(html, /name="keywords"/);
    const rootStart = html.indexOf('<div id="root"');
    const rootEnd = html.indexOf('</body>', rootStart);
    const rootMarkup = rootStart >= 0 && rootEnd >= 0
      ? html.slice(rootStart, rootEnd)
      : '';
    assert.ok(rootMarkup.length > 1000, 'Route content should be rendered in the HTML');
    assert.ok(rootMarkup.startsWith(`<div id="root" data-static-route="${pathname}">`));

    if (pathname === '/') {
      assert.match(rootMarkup, /Building production backend systems/);
      assert.match(rootMarkup, /project-thumbnails\/webwhisper\.webp/);
      assert.doesNotMatch(rootMarkup, /Visit Malay Thakkar on (GitHub|LinkedIn|Instagram)/);
    } else if (pathname === '/projects') {
      assert.match(rootMarkup, /WebWhisper/);
      assert.match(rootMarkup, /project-thumbnails\/webwhisper\.webp/);
      assert.match(rootMarkup, /loading="lazy"/);
    } else {
      assert.match(rootMarkup, /Certifications/);
    }
  });
}

test('site favicon uses the public logo image', async () => {
  const html = await readFile(htmlPath('/'), 'utf8');

  assert.match(html, /<link rel="icon" type="image\/png" href="\/logo\.png"/);
  await readFile(join(distDirectory, 'logo.png'));
});

test('JSON-LD describes the site and verified social profiles', async () => {
  const html = await readFile(htmlPath('/'), 'utf8');
  const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);

  assert.ok(schemaMatch, 'Structured data script should be present');
  const schema = JSON.parse(schemaMatch[1]);
  const person = schema['@graph'].find((entry) => entry['@type'] === 'Person');
  const website = schema['@graph'].find((entry) => entry['@type'] === 'WebSite');

  assert.deepEqual(person.sameAs, SITE_STRUCTURED_DATA['@graph'][0].sameAs);
  assert.equal(person.name, 'Malay Thakkar');
  assert.equal(website.url, SITE_URL);
});

test('robots and sitemap contain only public canonical routes', async () => {
  const robots = await readFile(join(distDirectory, 'robots.txt'), 'utf8');
  const sitemap = await readFile(join(distDirectory, 'sitemap.xml'), 'utf8');
  const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  const expectedUrls = Object.keys(PAGE_METADATA)
    .map((pathname) => `${SITE_URL}${pathname === '/' ? '/' : pathname}`);

  assert.match(robots, /User-agent: \*/);
  assert.match(robots, new RegExp(`Sitemap: ${SITE_URL.replaceAll('.', '\\.')}/sitemap\\.xml`));
  assert.match(sitemap, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
  assert.deepEqual(sitemapUrls, expectedUrls);
});
