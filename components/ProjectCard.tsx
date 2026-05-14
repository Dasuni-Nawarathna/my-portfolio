import React from 'react';

// Define the properties the component will accept
interface ProjectProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  imagePath?: string; // Optional for when you add AI-generated images
}

export default function ProjectCard({ title, category, description, tags, link, imagePath }: ProjectProps) {
  return (
    <div className="group relative bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-yellow-500/50 transition-all duration-500">
      {/* Project Image Section */}
      <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
        {imagePath ? (
          <img 
            src={imagePath} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" 
          />
        ) : (
          <span className="text-gray-600 font-bold tracking-widest uppercase text-xs">Project Preview</span>
        )}
      </div>
      
      <div className="p-8">
        <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">{category}</p>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-tighter border border-gray-700 px-2 py-1 rounded text-gray-400">
              {tag}
            </span>
          ))}
        </div>
        
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
          View Repository <span>→</span>
        </a>
      </div>
    </div>
  );
}