const SOCIAL = [
  {
    id: 'github',
    href: 'https://github.com/Malay-Thakkar',
    label: 'GitHub',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/malay-thakkar',
    label: 'LinkedIn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    id: 'portfolio',
    href: '#',
    label: 'Portfolio',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="max-w-[1100px] mx-auto px-6 py-6 flex items-center justify-between"
      style={{ borderTop: '0.5px solid var(--color-border-primary)' }}
    >
      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        Built with React · Malay Thakkar © 2026
      </span>
      <div className="flex items-center gap-5">
        {SOCIAL.map((s) => (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="transition-opacity hover:opacity-60"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
