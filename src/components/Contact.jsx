import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CONTACT_INFO = [
  {
    id: 'email',
    label: 'its.malaythakkar@gmail.com',
    href: 'mailto:its.malaythakkar@gmail.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: 'location',
    label: 'Ahmedabad, Gujarat, India',
    href: null,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 4.418-8 12-8 12S4 14.418 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'linkedin.com/in/malay-thakkar',
    href: 'https://linkedin.com/in/malay-thakkar',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: 'github',
    label: 'github.com/Malay-Thakkar',
    href: 'https://github.com/Malay-Thakkar',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mjgdjpqg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="max-w-[1100px] mx-auto px-6 py-12"
      style={{ borderTop: '0.5px solid var(--color-border-primary)' }}
    >
      <p className="section-label">Contact me</p>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            id="contact-name"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            id="contact-email"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            rows={5}
            id="contact-message"
          />

          <div className="flex items-center gap-4 flex-wrap">
            <button type="submit" className="btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'success' && (
              <span className="text-sm text-green-500 font-medium">✓ Message sent!</span>
            )}
            {status === 'error' && (
              <span className="text-sm text-red-500">Something went wrong. Try again.</span>
            )}
          </div>
        </form>

        {/* Contact info */}
        <div className="flex flex-col gap-5 justify-center">
          {CONTACT_INFO.map((item) => (
            <div key={item.id} className="flex items-center gap-3.5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
              >
                {item.icon}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
