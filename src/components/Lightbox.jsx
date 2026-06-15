import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(null);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  // Touch swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  const variants = {
    enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.93)' }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-sm border-0 cursor-pointer transition-opacity hover:opacity-70"
        style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}
      >
        ✕
      </button>

      {/* Counter */}
      <p className="absolute top-5 left-1/2 -translate-x-1/2 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
        {index + 1} / {images.length}
      </p>

      {/* Image area */}
      <div
        className="relative w-full max-w-4xl px-16 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-4"
          >
            <img
              src={images[index].src}
              alt={images[index].label}
              className="w-full rounded-xl object-cover"
              style={{ maxHeight: '70vh' }}
              draggable={false}
            />
            <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {images[index].label}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border-0 cursor-pointer transition-opacity hover:opacity-80"
            style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border-0 cursor-pointer transition-opacity hover:opacity-80"
            style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setDirection(i > index ? 1 : -1); setIndex(i); }}
              className="w-1.5 h-1.5 rounded-full border-0 cursor-pointer transition-all"
              style={{
                background: i === index ? '#fff' : 'rgba(255,255,255,0.3)',
                transform: i === index ? 'scale(1.3)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
