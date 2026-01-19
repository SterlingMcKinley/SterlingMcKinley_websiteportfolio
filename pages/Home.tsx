
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const key = 'sterling_portfolio_visitor_count';
    const stored = localStorage.getItem(key);
    // Start with a high number for aesthetic/simulated traffic volume
    const val = stored ? parseInt(stored) + 1 : 124856;
    setCount(val);
    localStorage.setItem(key, val.toString());
  }, []);

  return (
    <div className="mt-12 mb-2 flex justify-center opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
      <div className="group flex items-center bg-white border border-slate-100 rounded-full px-5 py-2 shadow-sm hover:shadow-md hover:border-teal-200 transition-all cursor-default">
        {/* Animated Status Indicator */}
        <div className="mr-3 flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500 shadow-[0_0_8px_rgba(45,212,191,0.4)]"></span>
        </div>
        
        <div className="flex items-center space-x-3">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mono group-hover:text-teal-600 transition-colors">
            Current Visitors
          </span>
          <div className="h-3 w-px bg-slate-100 group-hover:bg-teal-100 transition-colors"></div>
          <span className="text-slate-900 font-bold mono text-xs tracking-tight tabular-nums">
            {count.toLocaleString()}
          </span>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const Home: React.FC = () => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect Associate",
      date: "Q1/2026 (Loading...)",
      issuer: "Amazon Web Services",
      icon: "fa-brands fa-aws"
    },
    {
      name: "Google IT Automation with Python",
      date: "???/2026 (Loading...)",
      issuer: "Google",
      icon: "fa-brands fa-google"
    },
    {
      name: "Fundamentals of Red Hat Enterprise Linux",
      date: "07/2025",
      issuer: "Red Hat",
      icon: "fa-brands fa-linux",
      link: "https://www.coursera.org/account/accomplishments/certificate/7LBTUDB9ZZPW"
    },
    {
      name: "Site Reliability Engineering: Measuring and Managing Reliability",
      date: "05/2025",
      issuer: "Google",
      icon: "fa-brands fa-google",
      link: "https://www.coursera.org/account/accomplishments/certificate/EYRXE2W5DLMF"
    },
    {
      name: "Google AI Essentials",
      date: "04/2025",
      issuer: "Google",
      icon: "fa-solid fa-brain",
      link: "https://www.coursera.org/account/accomplishments/certificate/NZOZS0R56VO1"
    },
    {
      name: "KCNA: Kubernetes and Cloud Native Associate",
      date: "01/2022",
      issuer: "The Linux Foundation",
      icon: "fa-solid fa-dharmachakra",
      link: "https://www.credly.com/badges/343b2e0b-33e6-4c2e-aa11-d3a3d8d21e2f/public_url"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      date: "01/2022",
      issuer: "Amazon Web Services",
      icon: "fa-brands fa-aws",
      link: "https://www.credly.com/badges/20e09a18-69e3-46fe-808c-953b896d130e/public_url"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-20 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-full md:w-2/5 flex-shrink-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-slate-100">
            <img 
              alt="Sterling McKinley" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="./smckinley_pic.png" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.endsWith('.jpg')) {
                  target.src = './smckinley_pic.jpg';
                }
              }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
            {/* SRE Overlay Element */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-teal-400 mono font-bold tracking-tighter uppercase">Identity Verified</span>
                <i className="fa-solid fa-shield-check text-teal-400 text-xs"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5">
          {/* System Status Indicator */}
          <div className="mb-8 inline-flex items-center space-x-4 bg-slate-50 border border-slate-100 rounded-full px-4 py-2">
            <div className="relative flex h-3 w-3">
              <span className="animate-status-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </div>
            <div className="flex items-center space-x-3 divide-x divide-slate-200">
              <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest mono">System Operational</span>
              <span className="pl-3 text-[10px] font-medium text-slate-400 mono">Uptime: 99.999%</span>
              <span className="pl-3 text-[10px] font-medium text-slate-400 mono">Lat: 14ms</span>
            </div>
          </div>

          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 mb-4">Site Reliability | Platform | Cloud | Infrastructure</h2>
          <h1 className="serif-title text-3xl md:text-5xl lg:text-[3.5rem] mb-6 text-slate-900 leading-[1.1] tracking-tight">
            Engineering Resilience <br />
            <span className="italic font-medium text-teal-500">behind the systems.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            I build fault-tolerant cloud ecosystems and internal platforms that translate infrastructure complexity into seamless developer workflows. By automating the intersection of reliability and developer experience, I ensure enterprise systems remain scalable, observable, and performant—empowering teams to move fast without compromising on stability
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="mailto:mckinleyvsterling@gmail.com" 
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all active:scale-95 whitespace-nowrap shadow-sm"
            >
              Contact Me
            </a>
            <a 
              href="https://www.linkedin.com/in/sterling-mckinley/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-teal-200 text-teal-600 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-teal-50 hover:border-teal-400 transition-all flex items-center whitespace-nowrap shadow-sm"
            >
              <i className="fa-brands fa-linkedin text-base mr-2"></i>
              LinkedIn
            </a>
            <a 
              href="https://github.com/SterlingMcKinley" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-slate-900 text-white border border-slate-800 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-sm active:scale-95 whitespace-nowrap"
            >
              <i className="fa-brands fa-github mr-2"></i>
              GitHub
            </a>
            <a 
              href="sterlingmckinley_sre.pdf" 
              download="sterlingmckinley_sre.pdf" 
              className="flex items-center border border-teal-200 text-teal-600 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-teal-50 hover:border-teal-400 transition-all shadow-sm whitespace-nowrap transition-all active:scale-95"
            >
              <i className="fa-solid fa-download mr-2"></i>
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills & Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-100 pt-16">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-6 flex items-center">
            <span className="w-8 h-px bg-teal-200 mr-3"></span>
            Expertise
          </h3>
          <ul className="space-y-4 text-slate-700 text-sm">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2 font-bold shrink-0">01.</span>
              <span><strong>Reliability & Observability (SRE):</strong> SLO/SLI Design, Error Budgeting, Distributed Tracing, Blameless Postmortems, Prometheus, Grafana, Datadog, Dynatrace</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2 font-bold shrink-0">02.</span>
              <span><strong>Platform & Orchestration (Platform Engineering):</strong> Kubernetes, Docker</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2 font-bold shrink-0">03.</span>
              <span><strong>Infrastructure as Code & Cloud (Cloud/Infra):</strong> AWS, Terraform, Ansible, CloudFormation</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2 font-bold shrink-0">04.</span>
              <span><strong>Automation (DevOps):</strong> Python, BASH, CI/CD pipelines, Jenkins, GitHub Actions</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-6 flex items-center">
            <span className="w-8 h-px bg-teal-200 mr-3"></span>
            Education
          </h3>
          <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 mb-4">
            <h4 className="font-bold text-slate-900 text-lg">Eastern Illinois University</h4>
            <p className="text-sm text-slate-600 italic mb-1">Bachelor of Science, Management Information Systems</p>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <section className="mt-24 border-t border-slate-100 pt-16">
        <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-8 text-center">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const cardContent = (
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-teal-500 shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <i className={cert.icon}></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight mb-1 group-hover:text-teal-600 transition-colors">{cert.name}</h4>
                  <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{cert.issuer}</p>
                  <p className={`text-[10px] font-bold mt-2 mono ${cert.date.includes('Loading') ? 'text-teal-500 animate-pulse' : 'text-teal-600'}`}>
                    {cert.date}
                  </p>
                  {cert.link && (
                    <div className="mt-2 flex items-center text-[10px] text-teal-600 font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                      Verify Credential <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-[8px]"></i>
                    </div>
                  )}
                </div>
              </div>
            );

            const cardClasses = "bg-slate-50/50 border border-slate-100 p-6 rounded-2xl hover:border-teal-200 hover:bg-white transition-all group block h-full relative overflow-hidden";

            if (cert.link) {
              return (
                <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                  {cardContent}
                </a>
              );
            }

            return (
              <div key={idx} className={cardClasses}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>

      {/* Explore More Links */}
      <section className="mt-16 mb-4 border-t border-slate-100 pt-16">
        <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-8 text-center">Explore More</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/about" className="group bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 rounded-2xl p-6 transition-all">
            <h4 className="font-bold text-slate-900 group-hover:text-teal-600 mb-2 transition-colors">About</h4>
            <p className="text-sm text-slate-500">Learn more about my background, journey, and fun facts</p>
            <span className="inline-block mt-4 text-teal-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
              Learn More &rarr;
            </span>
          </Link>
          <Link to="/experience" className="group bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 rounded-2xl p-6 transition-all">
            <h4 className="font-bold text-slate-900 group-hover:text-teal-600 mb-2 transition-colors">Experience</h4>
            <p className="text-sm text-slate-500">Explore my professional journey and roles</p>
            <span className="inline-block mt-4 text-teal-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
              View Experience &rarr;
            </span>
          </Link>
          <Link to="/projects" className="group bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 rounded-2xl p-6 transition-all">
            <h4 className="font-bold text-slate-900 group-hover:text-teal-600 mb-2 transition-colors">Projects</h4>
            <p className="text-sm text-slate-500">View my infrastructure-as-code, cloud, and AI engineering projects</p>
            <span className="inline-block mt-4 text-teal-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
              View Projects &rarr;
            </span>
          </Link>
          <Link to="/blog" className="group bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 rounded-2xl p-6 transition-all">
            <h4 className="font-bold text-slate-900 group-hover:text-teal-600 mb-2 transition-colors">My Blog</h4>
            <p className="text-sm text-slate-500">Read my thoughts on various topics and personal stories.</p>
            <span className="inline-block mt-4 text-teal-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
              Blog page &rarr;
            </span>
          </Link>
        </div>
      </section>

      {/* Modern Compact Visitor Counter */}
      <VisitorCounter />
    </div>
  );
};

export default Home;
