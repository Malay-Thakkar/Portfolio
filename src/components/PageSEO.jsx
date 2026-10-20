import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_METADATA, SITE_URL, SOCIAL_IMAGE_URL } from '../data/seo';

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.setAttribute('content', content);
}

export default function PageSEO() {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';

  useEffect(() => {
    const page = PAGE_METADATA[normalizedPath] ?? PAGE_METADATA['/'];
    const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`;

    document.title = page.title;
    setMeta('name', 'description', page.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Malay Thakkar');
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', SOCIAL_IMAGE_URL);
    setMeta('property', 'og:image:alt', 'Malay Thakkar, Python backend engineer');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setMeta('name', 'twitter:image', SOCIAL_IMAGE_URL);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;
  }, [normalizedPath]);

  return null;
}
