export const SITE_URL = 'https://malaythakkar.dev';
export const SOCIAL_IMAGE_URL = `${SITE_URL}/portfolio_pngfile_2.png`;

export const SOCIAL_PROFILES = {
  github: 'https://github.com/Malay-Thakkar',
  linkedin: 'https://www.linkedin.com/in/malay-thakkar/',
  instagram: 'https://www.instagram.com/thakkar_malay/',
};

export const PAGE_METADATA = {
  '/': {
    title: 'Malay Thakkar | Python Backend Engineer & AI Developer',
    description:
      'Malay Thakkar is a Python backend engineer building production systems and AI applications with Django, FastAPI, RAG pipelines, and scalable infrastructure.',
  },
  '/projects': {
    title: 'Backend & AI Projects | Malay Thakkar',
    description:
      'Explore backend and AI projects by Malay Thakkar, including WebWhisper, a RAG platform built with FastAPI, LangChain, pgvector, and Next.js.',
  },
  '/certifications': {
    title: 'Certifications | Malay Thakkar',
    description:
      'View software engineering, Python, backend development, and AI learning credentials completed by Malay Thakkar.',
  },
};

export const SITE_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Malay Thakkar',
      url: SITE_URL,
      image: SOCIAL_IMAGE_URL,
      jobTitle: 'Python Backend Engineer',
      description:
        'Python backend engineer building production systems and AI applications with Django, FastAPI, and RAG pipelines.',
      sameAs: Object.values(SOCIAL_PROFILES),
      knowsAbout: [
        'Python',
        'Backend engineering',
        'Django',
        'Django REST Framework',
        'FastAPI',
        'Retrieval-augmented generation',
        'AI applications',
        'LangChain',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Malay Thakkar',
      url: SITE_URL,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
  ],
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

export function renderMetaTags(pathname) {
  const page = PAGE_METADATA[pathname] ?? PAGE_METADATA['/'];
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

  return [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="Malay Thakkar" />',
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:image" content="${SOCIAL_IMAGE_URL}" />`,
    '<meta property="og:image:alt" content="Malay Thakkar, Python backend engineer" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${SOCIAL_IMAGE_URL}" />`,
  ].join('\n    ');
}

export function renderStructuredData() {
  const json = JSON.stringify(SITE_STRUCTURED_DATA).replaceAll('<', '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}
