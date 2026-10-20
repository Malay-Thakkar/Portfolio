import { useRef, useState, Component, lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { SOCIAL_PROFILES } from '../data/seo';
import { trackEvent } from '../analytics';

const Turnstile = lazy(() =>
  import('@marsidev/react-turnstile').then(({ Turnstile: TurnstileWidget }) => ({
    default: TurnstileWidget,
  })),
);

// Error boundary so Turnstile failures don't crash the whole form
class TurnstileErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      // On error (e.g. localhost), call onSuccess with a dev bypass token
      this.props.onDevBypass?.();
      return (
        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          CAPTCHA unavailable on this environment.
        </p>
      );
    }
    return this.props.children;
  }
}

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
    href: SOCIAL_PROFILES.linkedin,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    label: 'instagram.com/thakkar_malay',
    href: SOCIAL_PROFILES.instagram,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="0.8" fill="currentColor" stroke="none" />
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

// Rate-limit: one submission every 60 seconds
const RATE_LIMIT_MS = 60_000;

// Cloudflare Turnstile site key
// Set VITE_TURNSTILE_SITE_KEY in your .env file with your real key from:
// https://dash.cloudflare.com/?to=/:account/turnstile
// '1x00000000000000000000AA' is the Cloudflare always-pass test key (dev only)
const TURNSTILE_SITE_KEY =
  import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', email: '', message: '', _gotcha: '' });
  const [status, setStatus] = useState(null);
  const [lastSentAt, setLastSentAt] = useState(null);
  const [cooldown, setCooldown] = useState(0);
  const [captchaToken, setCaptchaToken] = useState(null);
  const turnstileRef = useRef(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const resetCaptcha = () => {
    setCaptchaToken(null);
    if (turnstileRef.current) turnstileRef.current.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot — bots fill this hidden field
    if (form._gotcha) return;

    // CAPTCHA must be passed
    if (!captchaToken) {
      setStatus('no-captcha');
      return;
    }

    // Client-side rate limit
    if (lastSentAt && Date.now() - lastSentAt < RATE_LIMIT_MS) {
      const remaining = Math.ceil((RATE_LIMIT_MS - (Date.now() - lastSentAt)) / 1000);
      setCooldown(remaining);
      setStatus('rate-limited');
      return;
    }

    // Minimum message length
    if (form.message.trim().length < 10) {
      setStatus('short-message');
      return;
    }

    setStatus('sending');
    try {
      const payload = { ...form };
      delete payload._gotcha;
      const res = await fetch('https://formspree.io/f/mjgdjpqg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...payload, 'cf-turnstile-response': captchaToken }),
      });
      if (res.ok) {
        setStatus('success');
        trackEvent('generate_lead', { method: 'contact_form' });
        setLastSentAt(Date.now());
        setForm({ name: '', email: '', message: '', _gotcha: '' });
        resetCaptcha();
      } else {
        setStatus('error');
        resetCaptcha();
      }
    } catch {
      setStatus('error');
      resetCaptcha();
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
          {/* Honeypot — hidden from humans, bots fill it automatically */}
          <input
            type="text"
            name="_gotcha"
            value={form._gotcha}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

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

          {/* Cloudflare Turnstile CAPTCHA widget */}
          {inView ? (
            <TurnstileErrorBoundary onDevBypass={() => setCaptchaToken('dev-bypass')}>
              <Suspense fallback={
                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                  Loading security verification…
                </p>
              }>
                <Turnstile
                  ref={turnstileRef}
                  siteKey={TURNSTILE_SITE_KEY}
                  onSuccess={(token) => {
                    setCaptchaToken(token);
                    if (status === 'no-captcha') setStatus(null);
                  }}
                  onExpire={() => setCaptchaToken(null)}
                  onError={() => setCaptchaToken(null)}
                  options={{ theme: 'auto' }}
                />
              </Suspense>
            </TurnstileErrorBoundary>
          ) : (
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              Security verification loads when you reach the contact form.
            </p>
          )}

          <div className="flex items-center gap-4 flex-wrap">
            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'sending' || !captchaToken}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'success' && (
              <span className="text-sm text-green-500 font-medium">✓ Message sent!</span>
            )}
            {status === 'error' && (
              <span className="text-sm text-red-500">Something went wrong. Try again.</span>
            )}
            {status === 'rate-limited' && (
              <span className="text-sm text-amber-500">
                Please wait {cooldown}s before sending again.
              </span>
            )}
            {status === 'short-message' && (
              <span className="text-sm text-red-500">Message is too short (min 10 chars).</span>
            )}
            {status === 'no-captcha' && (
              <span className="text-sm text-amber-500">Please complete the CAPTCHA first.</span>
            )}
          </div>
        </form>

        {/* Contact info */}
        <div className="flex flex-col gap-5">
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
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (item.id === 'email') {
                      trackEvent('contact_click', { method: 'email' });
                    }
                  }}
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
