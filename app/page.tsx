'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ProjectCard from '@/components/ProjectCard';

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false,
  loading: () => <div className="w-8 h-8" />,
});

/* ── Star rating ───────────────────────── */
function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 3, marginTop: 5 }}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.floor(rating);
        const half = !filled && i - 0.5 <= rating;
        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{
              width: 14,
              height: 14,
              color: filled || half ? 'var(--gold)' : 'var(--text-muted)',
              opacity: half ? 0.55 : 1,
            }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      })}
    </div>
  );
}

/* ── Data ──────────────────────────────── */
const skills = [
  { name: 'HTML5', rating: 4.5 },
  { name: 'CSS3', rating: 4.5 },
  { name: 'JavaScript', rating: 4.0 },
  { name: 'TypeScript', rating: 3.5 },
  { name: 'React', rating: 4.0 },
  { name: 'Next.js', rating: 4.0 },
  { name: 'Node.js', rating: 3.5 },
  { name: 'MongoDB', rating: 3.5 },
  { name: 'Java', rating: 4.0 },
  { name: 'MySQL', rating: 3.5 },
  { name: 'Python', rating: 3.5 },
  { name: 'Figma', rating: 3.0 },
];

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
];

const contacts = [
  {
    label: 'GitHub', detail: 'Dasuni-Nawarathna',
    href: 'https://github.com/Dasuni-Nawarathna',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style={{ width: 20, height: 20, flexShrink: 0 }}><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.547 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.565 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .269.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>,
  },
  {
    label: 'LinkedIn', detail: 'Dasuni-Nawarathna',
    href: 'https://www.linkedin.com/in/dasuni-nawarathna-7243372b2/',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" /></svg>,
  },
  {
    label: 'Email', detail: 'imalshanawa@gmail.com',
    href: 'mailto:imalshanawa@gmail.com',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.964 1.874l-7.5 5.25a2.25 2.25 0 01-2.572 0l-7.5-5.25A2.25 2.25 0 012.25 6.993V6.75" /></svg>,
  },
  {
    label: 'Phone', detail: '+94 70 315 9996',
    href: 'tel:+94703159996',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h0a2.25 2.25 0 002.25-2.25v-2.25a.75.75 0 00-.75-.75h-2.25a.75.75 0 00-.75.75v.188a12.003 12.003 0 01-8.438-8.438h.188a.75.75 0 00.75-.75V4.5a.75.75 0 00-.75-.75H4.5A2.25 2.25 0 002.25 6.75v0z" /></svg>,
  },
];

/* ── Reusable section label ────────────── */
function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
      <span style={{ display: 'block', width: 30, height: 2, background: 'var(--gold)', borderRadius: 2, flexShrink: 0 }} />
      <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
        {text}
      </span>
    </div>
  );
}

const projectsData = [
  {
    title: "MyBizness App",
    category: "Full-Stack Development",
    description: "A business management platform featuring a Next.js frontend and MongoDB Atlas integration for real-time data handling. Dasuni led the UI/UX and integration efforts.",
    tags: ['Next.js', 'MongoDB', 'Tailwind'],
    link: "https://github.com/Ravindu-Hettiarachchi/mybiznezz.git",
    imagePath: "/MyBiznezz.png",
    filterType: "Next.js"
  },
  {
    title: "Tour Ops System",
    category: "System Design",
    description: "A comprehensive management system for tour operations, showcasing structured use case modeling for tourism logistics. Dasuni contributed to the backend and system architecture.",
    tags: ['Java', 'MySQL', 'System Design'],
    link: "https://github.com/Dasuni-Nawarathna/YataraCeylon.git",
    imagePath: "/YataraCeylon.png",
    filterType: "Java"
  },
  {
    title: "SplitDay App",
    category: "PWA & Full-Stack",
    description: "A Progressive Web Application (PWA) group expense splitter. Allows users to create/join trips via invite codes, manage participants, and calculate split balances and payouts in real-time.",
    tags: ['Next.js', 'MongoDB', 'PWA', 'Mongoose'],
    link: "https://github.com/Dasuni-Nawarathna/SplitDay.git",
    imagePath: "/SplitDay.png",
    filterType: "PWA"
  },
  {
    title: "Memory Space",
    category: "PWA & Security",
    description: "A creative digital scrapbooking journal featuring WebAuthn biometric security, client-side encryption (CryptoJS), dynamic Framer Motion sticker canvas, Google Maps, and ambient music player.",
    tags: ['Next.js', 'Supabase', 'Framer Motion', 'PWA'],
    link: "https://github.com/Dasuni-Nawarathna/Journal-Web",
    imagePath: "/MemorySpace.png",
    filterType: "PWA"
  }
];

/* ── Page ──────────────────────────────── */
export default function Home() {
  const [active, setActive] = useState('Home');
  const [projectFilter, setProjectFilter] = useState('All');

  useEffect(() => {
    const handler = () => {
      const sections: Record<string, string> = { about: 'About', work: 'Work', contact: 'Contact' };
      let found = 'Home';
      for (const [id, label] of Object.entries(sections)) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) found = label;
      }
      setActive(found);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <main style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'var(--font-main)', minHeight: '100vh' }}>

      {/* ════════════════════════════════════
          NAV
      ════════════════════════════════════ */}
      <nav className="liquid-glass-nav" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

          {/* Logo */}
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>
            Dasuni<span style={{ color: 'var(--gold)' }}>.</span>
          </div>

          {/* Nav pills */}
          <div style={{ display: 'flex', gap: 8 }}>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                id={`nav-${label.toLowerCase()}`}
                onClick={() => setActive(label)}
                className="glass-btn"
                style={{
                  padding: '0.5rem 1.3rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  textDecoration: 'none',
                  color: active === label ? 'var(--gold)' : 'var(--text-secondary)',
                  borderColor: active === label ? 'var(--gold)' : undefined,
                  background: active === label ? 'rgba(200,145,58,0.12)' : undefined,
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ThemeToggle />
            <a href="#contact" id="nav-cta" className="gold-btn" style={{ padding: '0.55rem 1.4rem', fontSize: '0.85rem', textDecoration: 'none' }}>
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section style={{ display: 'flex', minHeight: '100vh', paddingTop: 68 }}>

        {/* Left */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 3rem 4rem 5rem', maxWidth: 640 }}>
          <SectionLabel text="IT Undergraduate & Developer" />

          <h1
            className="heading-tight"
            style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.0 }}
          >
            DASUNI<br />
            <span style={{ color: 'var(--gold)' }}>NAWARATHNA</span>
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 460 }}>
            A creative full-stack developer specialising in Next.js, Python, and AI multimedia —
            passionate about building premium digital experiences.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#work" id="hero-explore" className="gold-btn" style={{ padding: '0.85rem 2.2rem', fontSize: '0.85rem', textDecoration: 'none' }}>
              Explore Work
            </a>
            <a href="#about" id="hero-about" className="glass-btn" style={{ padding: '0.85rem 2.2rem', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', color: 'var(--text-primary)' }}>
              About Me
            </a>
          </div>
        </div>

        {/* Right — contained portrait */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 5rem 4rem 2rem' }}>
          <img
            src="/dasuni.JPG"
            alt="Dasuni Nawarathna"
            style={{
              width: 360,
              height: 440,
              objectFit: 'cover',
              objectPosition: 'top',
              borderRadius: 14,
              display: 'block',
              border: '1.5px solid rgba(255,255,255,0.12)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.45)',
            }}
          />
        </div>
      </section>

      {/* ════════════════════════════════════
          ABOUT
      ════════════════════════════════════ */}
      <section id="about" style={{ background: 'var(--bg-secondary)', scrollMarginTop: 68 }}>

        {/* Top divider */}
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '6rem 2.5rem 7rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '5rem', alignItems: 'start' }}>

            {/* Photo */}
            <div className="about-photo-wrap" style={{ maxWidth: 420 }}>
              <img
                src="/dasuni.JPG"
                alt="Dasuni Nawarathna"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'top', display: 'block', borderRadius: 10, filter: 'grayscale(10%) contrast(1.05)' }}
              />
              {/* Corner accents */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: 52, height: 52, borderLeft: '2.5px solid var(--gold)', borderBottom: '2.5px solid var(--gold)', borderRadius: '0 0 0 10px', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: 52, height: 52, borderRight: '2.5px solid var(--gold)', borderTop: '2.5px solid var(--gold)', borderRadius: '0 10px 0 0', pointerEvents: 'none' }} />
            </div>

            {/* Content */}
            <div>
              <SectionLabel text="About Me" />

              <h2
                className="heading-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1.75rem' }}
              >
                Who Am I
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2.75rem', color: 'var(--text-secondary)', lineHeight: 1.82, fontSize: '0.95rem' }}>
                <p>
                  My name is <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Dasuni Nawarathna</strong>. I&apos;m an Information Technology undergraduate at the{' '}
                  <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Sri Lanka Institute of Information Technology (SLIIT)</strong>, currently in my second year.
                  I&apos;m passionate about building scalable web solutions, modern UI/UX, and AI-powered applications.
                </p>
                <p>
                  With experience spanning full-stack development, system architecture, and creative design, I combine technical rigor with an eye for detail.
                  I also hold a Diploma in English from the IBA Campus — enabling clear professional communication across every project.
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--border)', marginBottom: '2rem' }} />

              {/* Skills */}
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Technical Skills
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.4rem 2rem', marginBottom: '2.75rem' }}>
                {skills.map(({ name, rating }) => (
                  <div key={name}>
                    <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>{name}</p>
                    <Stars rating={rating} />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="/resume.pdf"
                id="about-cv"
                download
                className="gold-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.85rem 2rem', fontSize: '0.85rem', textDecoration: 'none' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
                Download CV
              </a>
            </div>

          </div>
        </div>

        {/* Bottom divider */}
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)' }} />
      </section>

      {/* ════════════════════════════════════
          PROJECTS
      ════════════════════════════════════ */}
      <section id="work" style={{ background: 'var(--bg-primary)', scrollMarginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '6rem 2.5rem 7rem' }}>

          <div style={{ marginBottom: '3.5rem' }}>
            <SectionLabel text="Selected Work" />
            <h2
              className="heading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-primary)' }}
            >
              Featured Projects
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            <ProjectCard
              title="MyBizness App"
              category="Full-Stack Development"
              description="A business management platform featuring a Next.js frontend and MongoDB Atlas integration for real-time data handling. Dasuni led the UI/UX and integration efforts."
              tags={['Next.js', 'MongoDB', 'Tailwind']}
              link="https://github.com/Ravindu-Hettiarachchi/mybiznezz.git"
              imagePath="/MyBiznezz.png"
            />
            <ProjectCard
              title="Tour Ops System"
              category="System Design"
              description="A comprehensive management system for tour operations, showcasing structured use case modeling for tourism logistics. Dasuni contributed to the backend and system architecture."
              tags={['Java', 'MySQL', 'System Design']}
              link="https://github.com/Dasuni-Nawarathna/YataraCeylon.git"
              imagePath="/YataraCeylon.png"
            />
            <ProjectCard
              title="SplitDay App"
              category="PWA & Full-Stack"
              description="A Progressive Web Application (PWA) group expense splitter. Allows users to create/join trips via invite codes, manage participants, and calculate split balances and payouts in real-time."
              tags={['Next.js', 'MongoDB', 'PWA', 'Mongoose']}
              link="https://github.com/Dasuni-Nawarathna/SplitDay.git"
              imagePath="/SplitDay.png"
            />
            <ProjectCard
              title="Memory Space"
              category="PWA & Security"
              description="A creative digital scrapbooking journal featuring WebAuthn biometric security, client-side encryption (CryptoJS), dynamic Framer Motion sticker canvas, Google Maps, and ambient music player."
              tags={['Next.js', 'Supabase', 'Framer Motion', 'PWA']}
              link="https://github.com/Dasuni-Nawarathna/Journal-Web"
              imagePath="/MemorySpace.png"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          CONTACT
      ════════════════════════════════════ */}
      <section id="contact" style={{ background: 'var(--bg-secondary)', scrollMarginTop: 68 }}>

        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '6rem 2.5rem 5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

            {/* Left */}
            <div>
              <SectionLabel text="Contact" />
              <h2
                className="heading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '1.5rem' }}
              >
                Get In Touch
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.82, fontSize: '0.95rem', maxWidth: 380 }}>
                I am currently open to internship opportunities and collaborative software projects.
                I welcome professional inquiries via any of the platforms below.
              </p>
            </div>

            {/* Right — links */}
            <div>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>
                Elsewhere
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {contacts.map(({ label, detail, href, icon }) => (
                  <li key={label} style={{ borderBottom: '1px solid var(--border)' }}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '1.1rem 0', textDecoration: 'none', transition: 'opacity 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      <span style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center' }}>{icon}</span>
                      <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{label}</span>
                      <span style={{ marginLeft: 'auto', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{detail}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Footer */}
          <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © 2026 Dasuni Nawarathna — Crafted with passion.
          </div>
        </div>
      </section>

    </main>
  );
}