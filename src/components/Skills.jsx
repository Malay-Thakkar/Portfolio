import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '../data/skills';

const TAG_CLASS = {
  purple: 'tag-purple',
  teal: 'tag-teal',
  amber: 'tag-amber',
  coral: 'tag-coral',
  gray: 'tag-gray',
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="skills"
      className="max-w-[1100px] mx-auto px-6 py-12"
      style={{ borderTop: '0.5px solid var(--color-border-primary)' }}
    >
      <p className="section-label">Technical skills</p>

      <motion.div
        ref={ref}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {SKILLS.map((group) => (
          <motion.div
            key={group.id}
            variants={cardVariants}
            transition={{ duration: 0.45 }}
            className="card-secondary rounded-xl p-5"
          >
            <p
              className="text-sm font-semibold mb-3"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {group.title}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.tags.map((tag) => (
                <span key={tag} className={`tag ${TAG_CLASS[group.color]}`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
