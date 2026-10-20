import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS, ADDITIONAL_PROJECTS } from '../data/projects';
import ProjectModal from '../components/ProjectModal';
import PageSEO from '../components/PageSEO';
import { trackEvent } from '../analytics';

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
      className={`card p-6 flex flex-col h-full ${project.hasModal && onOpen ? 'cursor-pointer' : ''}`}
      style={project.featured ? { border: '1.5px solid var(--color-accent)' } : {}}
      onClick={() => {
        if (project.hasModal && onOpen) {
          trackEvent('view_project_details', { project_id: project.id });
          onOpen(project);
        }
      }}
    >
      <div className="-mx-6 -mt-6 mb-4 aspect-video overflow-hidden rounded-t-[15px] bg-[var(--color-bg-secondary)]">
        <img
          src={project.coverImage}
          alt={project.coverAlt}
          className="h-full w-full object-cover"
          width="720"
          height="405"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          decoding="async"
        />
      </div>
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
          <span
            className="text-sm font-medium transition-opacity hover:opacity-70 flex-shrink-0"
            style={{ color: 'var(--color-accent)' }}
          >
            Details →
          </span>
        )}
      </div>
    </div>
  );
}

function Section({ title, projects, onOpen }) {
  return (
    <div className="mb-12">
      <p className="section-label">{title}</p>
      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        initial={false}
        animate="show"
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
      <PageSEO />
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
        <Section title="Other projects" projects={ADDITIONAL_PROJECTS} onOpen={setActiveProject} />
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
}
