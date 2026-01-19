
import React from 'react';
import { PROJECTS } from '../constants.tsx';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto px-6 py-20">
      <div className="mb-20">
        <h2 className="serif-title text-4xl md:text-5xl text-slate-900">Portfolio</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project) => (
          <a 
            key={project.id} 
            href={project.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col bg-white border border-slate-100 rounded-3xl p-10 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/5 transition-all outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-4"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform duration-500">
                <i className={`fa-solid ${project.icon} text-2xl`}></i>
              </div>
              <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-teal-600 group-hover:border-teal-600 transition-all">
                <i className="fa-brands fa-github text-xl"></i>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors italic">
              {project.title}
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-10 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-md uppercase tracking-wider group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
