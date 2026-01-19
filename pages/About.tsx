
import React from 'react';

const About: React.FC = () => {
  const skillCategories = [
    {
      title: "Site Reliability",
      skills: ["Disaster Recovery", "Error Budget", "Incident Management", "Monitoring Systems", "MTTA", "MTTD", "MTTR", "Observability", "On-call Experience", "SLIs", "SLOs"]
    },
    {
      title: "Cloud Platforms",
      skills: ["Amazon Web Services"]
    },
    {
      title: "Automation & Orchestration",
      skills: ["Docker", "GitHub Actions", "IBM UrbanCode Deploy", "Jenkins", "Kubernetes"]
    },
    {
      title: "IaC",
      skills: ["Ansible", "CloudFormation", "Terraform"]
    },
    {
      title: "Programming & Scripting",
      skills: ["Bash", "Python"]
    },
    {
      title: "Monitoring & Logging",
      skills: ["Datadog", "DynaTrace", "New Relic", "Prometheus", "Grafana", "Splunk"]
    },
    {
      title: "Operating Systems",
      skills: ["IBM AIX", "Linux (RHEL, Ubuntu, Amazon, OpenSuse)", "Windows (IIS)"]
    },
    {
      title: "Version Control",
      skills: ["BitBucket", "Git", "GitHub", "GitLab"]
    },
    {
      title: "Middleware Technologies",
      skills: ["IBM WebSphere", "JBoss", "Tomcat", "WebLogic"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="mono text-3xl md:text-4xl text-slate-900 mb-12 flex items-center">
        <span className="text-teal-600 mr-3 animate-pulse">linux@user:~ $</span> whoami
      </h2>
      
      <div className="grid md:grid-cols-3 gap-12 mb-20">
        <div className="md:col-span-2 space-y-6 text-slate-600 leading-relaxed text-lg">
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-teal-600/20 rounded-full"></div>
            <div className="pl-6 space-y-6">
              <p>
                I'm Sterling McKinley. My interest in Site Reliability, Cloud, Infrastructure, and systems engineering is rooted in a strong background of system administration, infrastructure provisioning, and monitoring, which developed a practical need to understand how applications/systems function under the surface.
              </p>
              <p>
                From supporting help desk requests to managing large-scale enterprise environments, I prioritize building solutions that are both technically sound and operationally sustainable, ensuring resilience and reliability through observability. I have gained my expertise through experience in several industries – healthcare, SaaS, hospitality, telecommunications & financial services/FinTech.
              </p>
              <p>
                I am committed to continuous learning and professional growth. I consider myself a <span className="text-teal-600 font-bold italic">lifelong learner</span>. I do not believe there’s anything that I am incapable of learning.
              </p>
              
              <div className="pt-6 space-y-3">
                <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Some fun facts about me:</p>
                <ul className="space-y-2 text-base">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(45,212,191,0.5)]"></span>
                    I LOVE JESUS CHRIST
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(45,212,191,0.5)]"></span>
                    Baseball is my favorite sport
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(45,212,191,0.5)]"></span>
                    I was in a movie [ ;) hint: its a baseball movie]
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-xl">
            <img 
              src="./smckinley_pic.png" 
              alt="Sterling McKinley" 
              className="rounded-2xl w-full aspect-[4/5] object-cover mb-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.endsWith('.jpg')) {
                  target.src = './smckinley_pic.jpg';
                }
              }}
            />
            <div className="px-2 pb-2">
                <p className="text-slate-900 font-bold">Sterling McKinley</p>
                <p className="text-slate-400 text-[10px] mono tracking-tight leading-snug">Site Reliability Engineer / Platform Engineer / DevOps Engineer / Cloud Engineer</p>
            </div>
          </div>
          
          <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100 text-slate-900 italic text-center">
            <p className="text-sm leading-relaxed font-medium">
              "The challenge you accept today is the strength you possess tomorrow."
            </p>
          </div>
        </div>
      </div>

      <div className="pt-16 border-t border-slate-100">
        <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-12 flex items-center">
          <span className="w-12 h-px bg-teal-200 mr-4"></span>
          Technical Skillset
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="group bg-slate-50/50 border border-slate-100 p-6 rounded-2xl hover:border-teal-200 hover:bg-white transition-all shadow-sm">
              <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-tight flex items-center group-hover:text-teal-600 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2 opacity-60"></span>
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-2.5 py-1 bg-white text-slate-500 text-[11px] font-medium rounded-md border border-slate-200 hover:border-teal-200 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
