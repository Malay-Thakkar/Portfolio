import { useRef } from 'react';
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
  return (
    <section
      id="timeline"
      className="max-w-[1100px] mx-auto px-6 py-12"
      style={{ borderTop: '0.5px solid var(--color-border-primary)' }}
    >
      <p className="section-label">Timeline — latest first</p>

      <div className="relative pl-7">
        {/* Vertical line */}
        <div
          className="absolute left-[9px] top-1 bottom-1 w-px"
          style={{ background: 'var(--color-border-secondary)' }}
        />

        {TIMELINE.map((item, index) => (
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
      className="relative mb-9 last:mb-0"
    >
      {/* Dot */}
      <div
        className="absolute -left-7 top-1.5 w-3 h-3 rounded-full"
        style={{
          background: item.dotColor === 'purple' ? 'var(--color-accent)' : '#888780',
          border: '2px solid var(--color-bg-primary)',
        }}
      />

      {/* Content */}
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
    </motion.div>
  );
}
