import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TIMELINE } from '../data/timeline';

const BADGE_CLASS = {
  purple: 'badge-purple',
  teal: 'badge-teal',
  amber: 'badge-amber',
  coral: 'badge-coral',
  gray: 'badge-gray',
};

export default function Timeline() {
  const [newestFirst, setNewestFirst] = useState(true);
  const items = newestFirst ? TIMELINE : [...TIMELINE].reverse();

  return (
    <section
      id="timeline"
      className="max-w-[1100px] mx-auto px-6 py-12"
      style={{ borderTop: '0.5px solid var(--color-border-primary)' }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <p className="section-label" style={{ marginBottom: 0 }}>Timeline</p>
        <button
          onClick={() => setNewestFirst(p => !p)}
          title={newestFirst ? 'Showing newest first — click for oldest first' : 'Showing oldest first — click for newest first'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '6px',
            border: '0.5px solid var(--color-border-primary)',
            background: 'var(--color-bg-secondary)',
            color: 'var(--color-text-secondary)',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--color-accent)';
            e.currentTarget.style.borderColor = 'var(--color-accent)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--color-text-secondary)';
            e.currentTarget.style.borderColor = 'var(--color-border-primary)';
          }}
        >
          <motion.svg
            key={newestFirst ? 'desc' : 'asc'}
            initial={{ rotate: newestFirst ? 180 : 0, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round"
          >
            {newestFirst
              ? <path d="M12 5v14M5 12l7 7 7-7" />   /* arrow down = newest↑ */
              : <path d="M12 19V5M5 12l7-7 7 7" />    /* arrow up   = oldest↑ */
            }
          </motion.svg>
          {newestFirst ? 'Newest first' : 'Oldest first'}
        </button>
      </div>

      <div className="relative pl-7">
        {/* Vertical line */}
        <div
          className="absolute left-[9px] top-1 bottom-1 w-px"
          style={{ background: 'var(--color-border-secondary)' }}
        />

        {items.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="relative mb-4 last:mb-0"
    >
      {/* Dot */}
      <div
        className="absolute -left-7 top-5 w-3 h-3 rounded-full z-10"
        style={{
          background: item.dotColor === 'purple' ? 'var(--color-accent)' : '#888780',
          border: '2px solid var(--color-bg-primary)',
        }}
      />

      {/* Hoverable content card */}
      <div className="timeline-card card p-5">
        <p className="text-xs font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>
          {item.date}
        </p>
        <p className="text-base font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>
          {item.title}
        </p>
        <p className="text-sm leading-relaxed mb-2.5" style={{ color: 'var(--color-text-secondary)' }}>
          {item.description}
        </p>
        <span className={`tag text-xs px-3 py-1 rounded-full ${BADGE_CLASS[item.badgeColor]}`}>
          {item.badge}
        </span>
      </div>
    </motion.div>
  );
}
