import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { CERTIFICATIONS } from '../data/certifications';
import { CertIcon } from './CertIcon';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  // Show only first 3 on home page
  const featured = CERTIFICATIONS.slice(0, 3);

  return (
    <section
      className="max-w-[1100px] mx-auto px-6 py-12"
      style={{ borderTop: '0.5px solid var(--color-border-primary)' }}
    >
      <div className="flex items-center justify-between mb-6">
        <p className="section-label mb-0">Certifications</p>
      </div>

      <motion.div
        ref={ref}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {featured.map((cert) => (
          <motion.div
            key={cert.id}
            variants={cardVariants}
            transition={{ duration: 0.45 }}
            className="cert-card card-secondary rounded-xl p-6 text-center flex flex-col items-center gap-3"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
            >
              <CertIcon name={cert.icon} size={22} />
            </div>
            <p
              className="text-sm font-semibold leading-snug"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {cert.name}
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {cert.issuer}
            </p>
            {cert.credentialUrl && cert.credentialUrl !== '#' ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium transition-opacity hover:opacity-70 mt-auto"
                style={{ color: 'var(--color-accent)' }}
              >
                View credential ↗
              </a>
            ) : (
              <span className="text-sm mt-auto" style={{ color: 'var(--color-text-secondary)' }}>
                Completed ✓
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-end my-6">
        <Link
          to="/certifications"
          className="text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: 'var(--color-accent)' }}
        >
          View all {CERTIFICATIONS.length} certificates →
        </Link>
      </div>
    </section>
  );
}
