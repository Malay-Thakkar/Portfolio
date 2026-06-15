import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { CERTIFICATIONS } from '../data/certifications';
import { CertIcon } from '../components/CertIcon';

const BADGE_CLASS = {
  purple: 'badge-purple',
  teal: 'badge-teal',
  amber: 'badge-amber',
  coral: 'badge-coral',
  gray: 'badge-gray',
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function CertCard({ cert }) {
  return (
    <div className="card p-6 flex flex-col h-full gap-5">
      <div className="flex items-start justify-between">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
        >
          <CertIcon name={cert.icon} size={26} />
        </div>
        <span className={`tag ${BADGE_CLASS[cert.badgeColor]}`}>
          {cert.category}
        </span>
      </div>

      <div className="flex-1">
        <h3
          className="text-base font-semibold leading-snug mb-2"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {cert.name}
        </h3>
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          {cert.issuer}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          {cert.year}
        </span>
        {cert.credentialUrl && cert.credentialUrl !== '#' ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-accent)' }}
          >
            View credential ↗
          </a>
        ) : (
          <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Completed ✓
          </span>
        )}
      </div>
    </div>
  );
}

function Section({ certs }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch"
    >
      {certs.map((cert) => (
        <motion.div
          key={cert.id}
          variants={cardVariants}
          transition={{ duration: 0.42 }}
          className="flex"
        >
          <div className="w-full">
            <CertCard cert={cert} />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function AllCertifications() {
  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh' }}>
      <div className="max-w-[1100px] mx-auto px-6 pt-12 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm mb-10 transition-opacity hover:opacity-70"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          ← Portfolio
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
            Certifications
          </h1>
          <p className="text-base" style={{ color: 'var(--color-text-secondary)' }}>
            Courses and certifications I&apos;ve completed
          </p>
        </div>

        <Section certs={CERTIFICATIONS} />
      </div>
    </div>
  );
}
