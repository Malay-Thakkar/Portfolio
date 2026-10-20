import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import ProjectModal from './ProjectModal';

const TAG_CLASS = {
  purple: 'tag-purple',
  teal: 'tag-teal',
  amber: 'tag-amber',
  coral: 'tag-coral',
  gray: 'tag-gray',
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 12 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="projects"
      className="max-w-[1100px] mx-auto px-6 py-12"
      style={{ borderTop: '0.5px solid var(--color-border-primary)' }}
    >
      <p className="section-label">Projects</p>

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial={false}
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            transition={{ duration: 0.45 }}
            className={`card p-6 flex flex-col cursor-pointer ${project.fullWidth ? 'md:col-span-2' : ''}`}
            style={project.featured ? { border: '1.5px solid var(--color-accent)' } : {}}
            onClick={() => setActiveProject(project)}
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
            <div className="flex items-start justify-between mb-2">
              <h3
                className="text-base font-semibold"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {project.name}
              </h3>
              {project.featured && (
                <span className="tag tag-purple ml-3 flex-shrink-0">Featured</span>
              )}
            </div>

            <p
              className="text-sm leading-relaxed mb-4 flex-1"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {project.shortDesc}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 3).map((t) => (
                  <span key={t.label} className={`tag ${TAG_CLASS[t.color]}`}>
                    {t.label}
                  </span>
                ))}
              </div>
              <span
                className="text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--color-accent)' }}
              >
                Details →
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 flex justify-end">
        <Link
          to="/projects"
          className="text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: 'var(--color-accent)' }}
        >
          View all projects →
        </Link>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
