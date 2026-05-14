import React from 'react';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500 selection:text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter">DASUNI.</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="#" className="text-white">Home</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        <a href="#contact" className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all">
          Get In Touch
        </a>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-12">
          <p className="text-yellow-500 uppercase tracking-[0.3em] mb-4 font-semibold">IT Undergraduate & Developer</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-8">
            DASUNI <br /> NAWARATHNA
          </h1>
          <p className="italic text-xl md:text-2xl text-gray-400 mb-12 max-w-lg">
            Software Developer & Creative Professional specializing in Next.js, Python, and AI multimedia.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform">
              Explore Work ↗
            </a>
            <a href="#about" className="border border-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              About Me
            </a>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10" />
          <img 
            src="/dasuni.JPG" 
            alt="Dasuni Nawarathna" 
            className="w-full h-full object-cover grayscale contrast-125 opacity-80"
          />
        </div>
      </div>

      {/* About Segment */}
<section id="about" className="max-w-3xl w-full mb-16 bg-[#111] p-8 rounded-2xl border border-gray-800 scroll-mt-24">
  <h2 className="text-3xl font-semibold mb-6 text-yellow-500">About Her</h2>
  <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
    <p>
      Dasuni is a dedicated second-year Information Technology student at the 
      <strong> Sri Lanka Institute of Information Technology (SLIIT)</strong>. 
      She specializes in building robust web applications and exploring the 
      intersection of Data Science and Software Engineering.
    </p>
    <p>
      With a strong foundation in <strong>Java, Python, and Next.js</strong>, 
      she focuses on creating user-centric digital experiences. Her academic 
      and project history includes full-stack development with MongoDB, 
      low-level systems programming in C, and data analysis using Machine 
      Learning frameworks.
    </p>
    <p>
      Beyond coding, she is an alumna of Sri Sangamitta Girls National School 
      and holds a Diploma in English, combining technical proficiency with 
      clear communication skills.
    </p>
  </div>
</section>

      {/* Projects Section */}
      <section id="work" className="max-w-7xl mx-auto px-8 py-24 scroll-mt-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <p className="text-yellow-500 uppercase tracking-widest font-bold mb-2">Selected Work</p>
            <h2 className="text-5xl font-black uppercase">Featured Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 2. Use the component with specific data for Dasuni's projects */}
          <ProjectCard 
            title="MyBizness App"
            category="Full-Stack Development"
            description="A business management platform featuring a Next.js frontend and MongoDB Atlas integration for real-time data handling."
            tags={['Next.js', 'MongoDB', 'Tailwind']}
            link="https://github.com/Ravindu-Hettiarachchi/mybiznezz.git"
            imagePath="/mybizness-preview.jpg" // Add this image to your public folder
          />
          
          <ProjectCard 
            title="Tour Ops System"
            category="System Design"
            description="A comprehensive management system for tour operations, showcasing structured use case modeling for tourism logistics."
            tags={['Java', 'MySQL', 'System Design']}
            link="https://github.com/Dasuni-Nawarathna/YataraCeylon.git" 
          />
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="max-w-7xl mx-auto px-8 py-24 border-t border-gray-900">
  <div className="flex flex-col md:flex-row justify-between items-start gap-12">
    <div className="flex-1">
      <p className="text-yellow-500 uppercase tracking-widest font-bold mb-2">Contact</p>
      <h2 className="text-5xl font-black uppercase mb-8">Get In Touch</h2>
      <p className="text-gray-400 text-lg max-w-md leading-relaxed">
        Dasuni is currently open to internship opportunities and collaborative software projects. 
        Feel free to reach out via any of the platforms below.
      </p>
    </div>

    <div className="flex-1 w-full space-y-8">
      {/* Contact Links */}
      <div className="grid grid-cols-1 gap-6">
        <a href="mailto:dasuni@example.com" className="group flex items-center justify-between p-6 bg-[#111] border border-gray-800 rounded-2xl hover:border-yellow-500/50 transition-all">
          <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">Email</span>
          <span className="text-xl font-bold group-hover:text-yellow-500 transition-colors">imalshanawa@gmail.com</span>
        </a>

        <a href="https://linkedin.com/in/dasuninarawathna" target="_blank" className="group flex items-center justify-between p-6 bg-[#111] border border-gray-800 rounded-2xl hover:border-yellow-500/50 transition-all">
          <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">LinkedIn</span>
          <span className="text-xl font-bold group-hover:text-yellow-500 transition-colors">Dasuni Nawarathna</span>
        </a>

        <a href="https://github.com/dasuninarawathna" target="_blank" className="group flex items-center justify-between p-6 bg-[#111] border border-gray-800 rounded-2xl hover:border-yellow-500/50 transition-all">
          <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">GitHub</span>
          <span className="text-xl font-bold group-hover:text-yellow-500 transition-colors">Dasuni-Nawarathna</span>
        </a>

        <div className="flex items-center justify-between p-6 bg-[#0a0a0a] border border-gray-900 rounded-2xl">
          <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">Contact Number</span>
          <span className="text-xl font-bold text-gray-300">+94 70 315 9996</span>
        </div>
      </div>
    </div>
  </div>
  
  <footer className="mt-24 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
    © 2026 Dasuni Nawarathna.
  </footer>
</section>
    </main>
  );
}