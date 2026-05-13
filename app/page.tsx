import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tight">Dasuni Nawarathna</h1>
        <p className="text-xl mt-4 text-gray-600">Information Technology Undergraduate</p>
      </section>

      {/* About Segment */}
      <section className="max-w-3xl w-full mb-16 bg-gray-50 p-8 rounded-2xl border border-gray-100">
        <h2 className="text-3xl font-semibold mb-6">About Her</h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
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
            clear communication and professional documentation skills.
          </p>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Technical Proficiency</h2>
        <div className="flex flex-wrap justify-center gap-4">
              {['Java', 'Python', 'Next.js', 'React', 'MongoDB', 'MySQL', 'C', 'Tailwind CSS'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium border border-blue-100">
              {skill}
        </span>
        ))}
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-2">MyBizness App</h3>
            <p className="text-gray-600">A full-stack mobile application built with Next.js and MongoDB Atlas.</p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-2">Tour Management System</h3>
            <p className="text-gray-600">System design and use case architecture for complex operations.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-3xl text-center py-12 border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-8 text-lg">
         Dasuni is currently open to internship opportunities and collaborative projects.
        </p>
        <div className="flex justify-center gap-8">
        <a href="https://github.com/your-username" target="_blank" className="text-blue-600 hover:underline font-bold text-lg">
        GitHub
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" className="text-blue-600 hover:underline font-bold text-lg">
        LinkedIn
        </a>
        <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline font-bold text-lg">
        Email
        </a>
        </div>
      </section>
    </main>

    
  );
}