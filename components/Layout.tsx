
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 uppercase">
          Sterling <span className="text-teal-600">McKinley</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                location.pathname === item.path ? 'text-teal-600 underline underline-offset-8' : 'text-slate-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-100 py-12 mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-slate-400 text-sm mb-4">
          &copy; {new Date().getFullYear()} Sterling McKinley, Site Reliability & Platform Engineering
        </p>
        <div className="flex justify-center space-x-6 text-slate-400 text-xs font-medium uppercase tracking-wider">
          <a href="https://www.linkedin.com/in/sterling-mckinley/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">LinkedIn</a>
          <a href="https://github.com/SterlingMcKinley" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">GitHub</a>
          <a href="mailto:mckinleyvsterling@gmail.com" className="hover:text-teal-600 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
