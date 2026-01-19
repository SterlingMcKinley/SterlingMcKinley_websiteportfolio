
import React from 'react';
import { EXPERIENCES } from '../constants.tsx';

const Resume: React.FC = () => {
  const startYear = 2007;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex justify-between items-end mb-12 border-b border-slate-100 pb-8">
        <div className="space-y-1">
          <h2 className="serif-title text-4xl font-bold text-slate-900">Experience</h2>
          <p className="text-teal-600 font-bold uppercase tracking-widest text-xs">
            Professional Journey — {yearsOfExperience}+ Years of Experience
          </p>
        </div>
        <a 
          href="sterlingmckinley_sre.pdf" 
          download="sterlingmckinley_sre.pdf" 
          className="text-teal-600 font-bold hover:text-teal-700 flex items-center space-x-2 transition-colors"
        >
          <i className="fa-solid fa-download"></i>
          <span className="text-xs uppercase tracking-widest">PDF Resume</span>
        </a>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot with Teal accent */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-100 bg-white group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-500 transition-all duration-300 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <i className="fa-solid fa-briefcase text-xs"></i>
            </div>
            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-slate-50/80 border border-slate-100 hover:border-teal-300 hover:bg-white hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{exp.role}</h3>
                  <p className="text-teal-600 font-bold text-sm uppercase tracking-wider">{exp.company}</p>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-100 text-slate-400 text-[10px] font-bold mt-2 sm:mt-0 shadow-sm">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 mb-6 text-slate-600 text-sm leading-relaxed list-disc ml-4">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white text-slate-500 text-[10px] font-bold uppercase tracking-wider border border-slate-100 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
