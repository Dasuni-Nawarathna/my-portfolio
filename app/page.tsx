import React from 'react';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-8 px-8 container-max">
        <div className="text-3xl md:text-4xl font-black tracking-tighter heading-tight uppercase">DASUNI</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="#" className="text-white">Home</a>
          <a href="#work" className="hover:gold transition-colors">Work</a>
          <a href="#about" className="hover:gold transition-colors">About</a>
        </div>
        <a href="#contact" className="bg-gold text-black px-8 py-3 rounded-full font-extrabold uppercase tracking-widest hover-scale shadow-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all">
          Get In Touch
        </a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row min-h-[80vh] container-max gap-0 md:gap-8 py-12 md:py-24">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center px-0 md:px-12 py-8 md:py-0">
          <p className="gold uppercase tracking-[0.3em] mb-4 font-semibold text-base md:text-lg">IT Undergraduate & Developer</p>
          <h1 className="text-5xl md:text-8xl font-black heading-tight uppercase mb-8" style={{fontFamily: 'Oswald, Inter, Arial, sans-serif'}}>
            DASUNI <br /> NAWARATHNA
          </h1>
          <p className="italic text-xl md:text-2xl text-gray-300 mb-12 max-w-lg">
            Dasuni is a software developer and creative professional specializing in Next.js, Python, and AI multimedia. She is passionate about building premium digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="bg-gold text-black px-8 py-4 rounded-full font-black uppercase tracking-widest hover-scale shadow-lg transition-all">
              Explore Work
            </a>

            <a href="#about" className="border border-gold px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-gold hover:bg-gold hover:text-black hover-scale transition-all">
              About Dasuni
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative overflow-hidden flex items-center justify-center min-h-80">
          <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-transparent to-transparent z-10" />
          <img 
            src="/dasuni.JPG" 
            alt="Dasuni Nawarathna" 
            className="w-full h-full object-cover grayscale contrast-125 opacity-80"
            style={{maxHeight: '600px', objectPosition: 'top'}}
          />
        </div>
      </section>

      {/* About Segment */}
      <section id="about" className="container-max mb-16 glass p-10 md:p-16 rounded-3xl scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gold uppercase heading-tight">About Her</h2>
        <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
          <p>
            Dasuni is a dedicated second-year Information Technology student at the <strong>Sri Lanka Institute of Information Technology (SLIIT)</strong>. She specializes in building robust web applications and exploring the intersection of Data Science and Software Engineering.
          </p>
          <p>
            With a strong foundation in <strong>Java, Python, and Next.js</strong>, she focuses on creating user-centric digital experiences. Her academic and project history includes full-stack development with MongoDB, low-level systems programming in C, and data analysis using Machine Learning frameworks.
          </p>
          <p>
            Beyond coding, Dasuni is an alumna of Sri Sangamitta Girls National School and holds a Diploma in English, combining technical proficiency with clear communication skills.
          </p>
        </div>
      </section>


      {/* Projects Section */}
      <section id="work" className="container-max py-24 scroll-mt-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <p className="gold uppercase tracking-widest font-bold mb-2">Selected Work</p>
            <h2 className="text-5xl font-black uppercase heading-tight">Featured Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Boutique Project Cards with glassmorphism */}
          <ProjectCard 
            title="MyBizness App"
            category="Full-Stack Development"
            description="A business management platform featuring a Next.js frontend and MongoDB Atlas integration for real-time data handling. Dasuni led the UI/UX and integration efforts."
            tags={['Next.js', 'MongoDB', 'Tailwind']}
            link="https://github.com/Ravindu-Hettiarachchi/mybiznezz.git"
            imagePath="/mybizness-preview.jpg"
          />
          
          <ProjectCard 
            title="Tour Ops System"
            category="System Design"
            description="A comprehensive management system for tour operations, showcasing structured use case modeling for tourism logistics. Dasuni contributed to the backend and system architecture."
            tags={['Java', 'MySQL', 'System Design']}
            link="https://github.com/Dasuni-Nawarathna/YataraCeylon.git" 
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container-max py-24 border-t border-gray-900 scroll-mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex-1">
            <p className="gold uppercase tracking-widest font-bold mb-2">Contact</p>
            <h2 className="text-5xl font-black uppercase mb-8 heading-tight">Get In Touch</h2>
            <p className="text-gray-300 text-lg max-w-md leading-relaxed">
              Dasuni is currently open to internship opportunities and collaborative software projects. She welcomes professional inquiries via any of the platforms below.
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="mb-4 gold text-xs font-bold tracking-widest uppercase">Elsewhere</div>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/dasuninarawathna" target="_blank" className="flex items-center gap-4 py-2 group hover:opacity-100 opacity-90 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gold shrink-0"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.547 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.565 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .269.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
                  <span className="font-semibold text-gold">GitHub</span>
                  <span className="ml-auto text-gray-400 font-normal text-sm group-hover:text-gold transition">@Dasuni-Nawarathna</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/dasuninarawathna" target="_blank" className="flex items-center gap-4 py-2 group hover:opacity-100 opacity-90 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gold shrink-0"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" /></svg>
                  <span className="font-semibold text-gold">LinkedIn</span>
                  <span className="ml-auto text-gray-400 font-normal text-sm group-hover:text-gold transition">@dasuni-nawarathna</span>
                </a>
              </li>
              <li>
                <a href="mailto:imalshanawa@gmail.com" className="flex items-center gap-4 py-2 group hover:opacity-100 opacity-90 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gold shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.964 1.874l-7.5 5.25a2.25 2.25 0 01-2.572 0l-7.5-5.25A2.25 2.25 0 012.25 6.993V6.75" /></svg>
                  <span className="font-semibold text-gold">Email</span>
                  <span className="ml-auto text-gray-400 font-normal text-sm group-hover:text-gold transition">imalshanawa@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+94703159996" className="flex items-center gap-4 py-2 group hover:opacity-100 opacity-90 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gold shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h0a2.25 2.25 0 002.25-2.25v-2.25a.75.75 0 00-.75-.75h-2.25a.75.75 0 00-.75.75v.188a12.003 12.003 0 01-8.438-8.438h.188a.75.75 0 00.75-.75V4.5a.75.75 0 00-.75-.75H4.5A2.25 2.25 0 002.25 6.75v0z" /></svg>
                  <span className="font-semibold text-gold">Phone</span>
                  <span className="ml-auto text-gray-400 font-normal text-sm group-hover:text-gold transition">+94 70 315 9996</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
          © 2026 Dasuni Nawarathna.
        </footer>
      </section>
    </main>
  );
}