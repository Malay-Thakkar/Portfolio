import { PAGE_METADATA } from './data/seo';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

export function initializeAnalytics() {
  if (!GA_MEASUREMENT_ID) return;

  if (!/^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID)) {
    throw new Error('VITE_GA_MEASUREMENT_ID must be a valid GA4 measurement ID.');
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.append(script);
}

export function trackEvent(eventName, parameters = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
}

export function trackPageView(pathname) {
  trackEvent('page_view', {
    page_title: PAGE_METADATA[pathname]?.title ?? document.title,
    page_path: pathname,
  });
}
