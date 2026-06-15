import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="max-w-[1100px] mx-auto px-6 pt-36 pb-12">
      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
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
            Backend engineer · AI developer
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
            2 years building production backend systems and AI-powered
            applications — Django, FastAPI, RAG pipelines, and scalable
            infrastructure.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex gap-4 flex-wrap">
            <button className="btn-primary" onClick={scrollToProjects}>
              View projects
            </button>
            <a href="/resume.pdf" download className="btn-outline">
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
          <div className="rounded-full overflow-hidden" style={{ width: 300, height: 300 }}>
            <img
              src="/portfolio_pngfile_2.png"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
