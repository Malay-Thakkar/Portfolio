import { trackEvent } from '../analytics';

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-12 w-full"
      style={{
        borderTop: '0.5px solid var(--color-border-primary)',
        background: 'var(--color-bg-secondary)',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between mb-5">
        <p className="section-label mb-0">My Resume</p>
        <a
          href="/resume.pdf"
          download
          className="btn-outline"
          onClick={() => trackEvent('resume_download', { location: 'resume_section' })}
        >
          Download PDF
        </a>
      </div>

      <div className="w-full px-6 md:px-12">
        <iframe
          src="/resume.pdf"
          title="Malay Thakkar Resume"
          className="w-full rounded-xl"
          style={{
            height: 'clamp(400px, 85vh, 1000px)',
            border: '0.5px solid var(--color-border-primary)',
          }}
        />
      </div>

      <div className="flex justify-center mt-6">
        <a
          href="/resume.pdf"
          download
          className="btn-primary"
          onClick={() => trackEvent('resume_download', { location: 'resume_section' })}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
