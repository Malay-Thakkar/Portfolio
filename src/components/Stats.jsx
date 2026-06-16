import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { num: '2 yrs', label: 'Experience', isText: true },
  { num: 195000, label: 'Users served', suffix: 'K+', divisor: 1000 },
  { num: 5, label: 'Production projects', isText: false },
  { num: 'RAG', label: 'AI pipelines built', isText: true },
];

function CountUp({ target, suffix = '', duration = 1200 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="max-w-[1100px] mx-auto px-6 pb-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="stat-card card-secondary rounded-xl px-5 py-5 text-center"
          >
            <div
              className="text-3xl font-semibold mb-1.5"
              style={{ color: 'var(--color-accent)' }}
            >
              {stat.isText ? (
                stat.num
              ) : stat.divisor ? (
                <CountUp target={stat.num / stat.divisor} suffix={stat.suffix} />
              ) : (
                <CountUp target={stat.num} />
              )}
            </div>
            <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
