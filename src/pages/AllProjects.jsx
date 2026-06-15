import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { PROJECTS, ADDITIONAL_PROJECTS } from '../data/projects';
import ProjectModal from '../components/ProjectModal';

const TAG_CLASS = {
  purple: 'tag-purple',
  teal: 'tag-teal',
  amber: 'tag-amber',
  coral: 'tag-coral',
  gray: 'tag-gray',
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="card p-6 flex flex-col h-full"
      style={project.featured ? { border: '1.5px solid var(--color-accent)' } : {}}
    >
      <div className="flex items-start justify-between mb-2.5">
        <h3 className="text-base font-semibold leading-snug" style={{ color: 'var(--color-text-primary)' }}>
          {project.name}
        </h3>
        {project.featured && (
          <span className="tag tag-purple ml-3 flex-shrink-0">Featured</span>
        )}
      </div>

      <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--color-text-secondary)' }}>
        {project.shortDesc}
      </p>

      <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t.label} className={`tag ${TAG_CLASS[t.color]}`}>
              {t.label}
            </span>
          ))}
        </div>
        {project.hasModal && onOpen && (
          <button
            onClick={() => onOpen(project)}
            className="text-sm font-medium bg-transparent border-0 cursor-pointer transition-opacity hover:opacity-70 flex-shrink-0"
            style={{ color: 'var(--color-accent)' }}
          >
            Details →
          </button>
        )}
      </div>
    </div>
  );
}

function Section({ title, projects, onOpen }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div className="mb-12">
      <p className="section-label">{title}</p>
      <motion.div
        ref={ref}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch"
      >
        {projects.map((p) => (
          <motion.div key={p.id} variants={cardVariants} transition={{ duration: 0.4 }} className="flex">
            <div className="w-full">
              <ProjectCard project={p} onOpen={onOpen} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function AllProjects() {
  const [activeProject, setActiveProject] = useState(null);

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
            All Projects
          </h1>
          <p className="text-base" style={{ color: 'var(--color-text-secondary)' }}>
            A complete list of things I&apos;ve built
          </p>
        </div>

        <Section title="Featured projects" projects={PROJECTS} onOpen={setActiveProject} />
        <Section title="Other projects" projects={ADDITIONAL_PROJECTS} onOpen={null} />
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
}
