import { motion } from 'framer-motion';
import { trackEvent } from '../analytics';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const scrollToProjects = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';
    document.getElementById('projects')?.scrollIntoView({ behavior });
  };

  return (
    <section id="about" className="max-w-[1100px] mx-auto px-6 pt-36 pb-12">
      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        initial={false}
        animate="show"
        className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center"
      >
        {/* Left — text */}
        <div>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold mb-5 tracking-wide"
            style={{ color: 'var(--color-accent)' }}
          >
            Python backend engineer · AI developer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold leading-tight mb-5"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Hi, I&apos;m Malay Thakkar
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-lg leading-relaxed mb-8 max-w-[540px]"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Building production backend systems and AI-powered applications with
            Django, FastAPI, RAG pipelines, and scalable infrastructure.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-4 flex-wrap">
            <button
              className="btn-primary"
              onClick={() => {
                trackEvent('view_projects_click', { location: 'hero' });
                scrollToProjects();
              }}
            >
              View projects
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-outline"
              onClick={() => trackEvent('resume_download', { location: 'hero' })}
            >
              Download resume
            </a>
          </motion.div>
        </div>

        {/* Right — avatar */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3 order-first md:order-last"
        >
          <div className="rounded-full overflow-hidden" style={{ width: 367, height: 370 }}>
            <img
              src="/portfolio_pngfile_2.png"
              alt="Malay Thakkar, Python backend engineer"
              className="w-full h-full object-cover"
              width="367"
              height="370"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
