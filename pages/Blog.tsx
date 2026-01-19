
import React from 'react';
import { BLOG_POSTS } from '../constants.tsx';

const Blog: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-16 text-center">
        <h2 className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-2">CLOUD, INFRASTRUCTURE, RELIABILITY & BEYOND</h2>
        <h1 className="serif-title text-4xl text-slate-900">Personal Blog & Interests</h1>
        <p className="text-lg text-slate-500">
          Thoughts on reliability, architecture, and the future of platform engineering.
        </p>
      </div>

      <div className="space-y-16">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group border-b border-slate-100 pb-16 last:border-none">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-4 mb-3 text-slate-400 text-sm font-medium">
                <time>{post.date}</time>
                <span className="hidden sm:inline">•</span>
                <span>{post.readTime}</span>
            </div>
            
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <h3 className="serif-title text-3xl text-slate-900 mb-4 group-hover:text-teal-600 transition-colors cursor-pointer italic">
                {post.title}
              </h3>
            </a>
            
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-bold text-teal-500 uppercase tracking-widest">
                    #{tag}
                  </span>
                ))}
              </div>
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-teal-600 font-bold hover:text-teal-700 flex items-center space-x-2 group"
              >
                <span className="text-sm uppercase tracking-widest">Read Entry</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
