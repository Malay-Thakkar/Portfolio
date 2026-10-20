import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from 'vite';
import { PAGE_METADATA, renderMetaTags } from '../src/data/seo.js';

const distDirectory = resolve('dist');
const template = await readFile(join(distDirectory, 'index.html'), 'utf8');
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

function renderPage(pathname, source) {
  const start = '<!-- SEO_META_START -->';
  const end = '<!-- SEO_META_END -->';
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(`Unable to find SEO metadata markers for ${pathname}.`);
  }

  return [
    source.slice(0, startIndex + start.length),
    '\n    ',
    renderMetaTags(pathname),
    '\n    ',
    source.slice(endIndex),
  ].join('');
}

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx');

  for (const pathname of Object.keys(PAGE_METADATA)) {
    const appMarkup = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: [pathname] },
        React.createElement(App),
      ),
    );
    const rootMarkup = `<div id="root" data-static-route="${pathname}">${appMarkup}</div>`;
    const renderedTemplate = template.replace('<div id="root"></div>', rootMarkup);

    if (renderedTemplate === template) {
      throw new Error(`Unable to find the application root for ${pathname}.`);
    }

    const outputPath = pathname === '/'
      ? join(distDirectory, 'index.html')
      : join(distDirectory, pathname.slice(1), 'index.html');

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, renderPage(pathname, renderedTemplate));
  }
} finally {
  await vite.close();
}
