import React from 'react';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  imagePath?: string;
}

export default function ProjectCard({ title, category, description, tags, link, imagePath }: ProjectProps) {
  return (
    <div
      className="group relative overflow-hidden"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        transition: 'transform 0.28s cubic-bezier(.4,0,.2,1), box-shadow 0.28s ease, border-color 0.28s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 24px 60px rgba(0,0,0,0.45)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,145,58,0.3)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
      }}
    >
      {/* Image / Placeholder */}
      <div
        className="relative overflow-hidden"
        style={{ height: 220 }}
      >
        {imagePath ? (
          <img
            src={imagePath}
            alt={title}
            className="w-full h-full object-cover"
            style={{
              filter: 'grayscale(20%) contrast(1.08)',
              opacity: 0.75,
              transition: 'transform 0.5s ease, opacity 0.4s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)';
              (e.currentTarget as HTMLImageElement).style.opacity = '1';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLImageElement).style.opacity = '0.75';
            }}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%)',
            }}
          >
            {/* Code icon placeholder */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              style={{ color: 'var(--text-muted)' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <span
              className="absolute bottom-4 text-xs font-bold uppercase tracking-widest"
              style={{ color: 'var(--text-muted)', letterSpacing: '0.2em' }}
            >
              Project Preview
            </span>
          </div>
        )}
        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: 80, background: 'linear-gradient(to top, var(--bg-card), transparent)' }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '2rem 2rem 2.25rem' }}>
        {/* Category */}
        <p
          className="label-tag"
          style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}
        >
          {category}
        </p>

        {/* Title */}
        <h3
          className="heading-tight font-black uppercase"
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            color: 'var(--text-primary)',
            marginBottom: '0.85rem',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            fontSize: '0.9rem',
            marginBottom: '1.5rem',
          }}
        >
          {description}
        </p>

        {/* Tags */}
        <div
          className="flex flex-wrap"
          style={{ gap: '0.5rem', marginBottom: '1.75rem' }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.3rem 0.75rem',
                borderRadius: 999,
                border: '1px solid rgba(200,145,58,0.28)',
                color: 'var(--gold)',
                background: 'rgba(200,145,58,0.08)',
                whiteSpace: 'nowrap',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 no-underline"
          style={{
            color: 'var(--text-primary)',
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            transition: 'color 0.2s, gap 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)'; }}
        >
          View Repository
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}