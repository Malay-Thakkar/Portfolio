import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

const TAG_CLASS = {
  purple: 'tag-purple',
  teal: 'tag-teal',
  amber: 'tag-amber',
  coral: 'tag-coral',
  gray: 'tag-gray',
};

export default function ProjectModal({ project, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape' && lightboxIndex === null) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, lightboxIndex]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-5"
          style={{ background: 'rgba(0,0,0,0.55)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.22, type: 'spring', bounce: 0.12 }}
            className="card w-full max-w-2xl max-h-[88vh] overflow-y-auto"
            style={{ background: 'var(--color-bg-primary)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-7">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2
                    className="text-xl font-semibold"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {project.name}
                  </h2>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                    {project.subtitle}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 border-0 cursor-pointer text-sm transition-opacity hover:opacity-70"
                  style={{
                    background: 'var(--color-bg-secondary)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((t) => (
                  <span key={t.label} className={`tag ${TAG_CLASS[t.color]}`}>
                    {t.label}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && (
                <>
                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    Key highlights
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {project.highlights.map((point, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                        <span className="flex-shrink-0 font-semibold" style={{ color: 'var(--color-accent)' }}>→</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Gallery thumbnails */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                    Screenshots
                  </p>
                  <div className="flex gap-2.5 flex-wrap">
                    {project.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setLightboxIndex(i)}
                        className="relative group rounded-lg overflow-hidden border-0 cursor-pointer p-0 transition-transform hover:scale-105"
                        style={{
                          width: 100,
                          height: 66,
                          border: '0.5px solid var(--color-border-primary)',
                          flexShrink: 0,
                        }}
                        title={img.label}
                      >
                        <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                        <div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: 'rgba(0,0,0,0.45)' }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                          </svg>
                        </div>
                        <p
                          className="absolute bottom-0 left-0 right-0 text-[10px] text-center py-0.5 truncate"
                          style={{ background: 'rgba(0,0,0,0.55)', color: '#fff' }}
                        >
                          {img.label}
                        </p>
                      </button>
                    ))}
                  </div>
                  <p className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                    Click any image to view full screen
                  </p>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                    GitHub ↗
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
                    Live demo ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={project.gallery}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
