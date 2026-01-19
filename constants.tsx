
import { Project, Experience, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI IDEA GENERATOR',
    description: 'Integrate artificial intelligence into an application',
    tags: ['Python', 'Streamlit', 'OPENAI'],
    link: 'https://github.com/SterlingMcKinley/ai-idea-generator',
    icon: 'fa-brain'    
  },
  {
    id: '2',
    title: 'CI/CD (Continuous Integration/Continuous Delivery)',
    description: 'CI/CD pipeline to deploy a Flask application',
    tags: ['Git', 'GitHub', 'Jenkins', 'AWS EC2', 'AWS Elastic Beanstalk', 'Python'],
    link: 'https://github.com/SterlingMcKinley/KuraLabs/blob/main/Deployments/Deployment1/Deployment_1.md',
    icon: 'fa-infinity'
  },
  {
    id: '3',
    title: 'Redis-Challenge',
    description: 'Created a local Kubernetes environment using K3d to deploy an application (which consists of a MongoExpress frontend & MongoDB backend)',
    tags: ['Linux', 'Redis', 'Docker', 'Kubernetes', 'Minikube', 'Python'],
    link: 'https://github.com/SterlingMcKinley/KuraLabs/tree/main/Kubernetes/MongoDB_App',
    icon: 'fa-database'
  },
  {
    id: '4',
    title: 'Notifications / Alerts System',
    description: 'Send real-time notifications to subscribed users via SMS/Email.',
    tags: ['Amazon SNS', 'AWS Lambda', 'Amazon EventBridge', 'AWS CLI', 'Python', 'External API'],
    link: 'https://github.com/SterlingMcKinley/game-day-notifications',
    icon: 'fa-bell'
  },
  {
    id: '5',
    title: 'MongoDB App',
    description: 'Created a local Kubernetes environment using K3d to deploy an application (which consists of a MongoExpress frontend & MongoDB backend)',
    tags: ['K3D', 'Kubernetes', 'MongoDB', 'MongoExpress', 'Docker'],
    link: 'https://github.com/SterlingMcKinley/KuraLabs/tree/main/Kubernetes/MongoDB_App',
    icon: 'fa-database'
  },

];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Capital One',
    role: 'Platform Engineer / Site Reliability Engineer',
    period: '01/2023 - Present',
    description: [
      'Served as the key liaison between a major line of business (IFX) and the executive office, ensuring seamless information flow and project prioritization.',
      'Managed a portfolio of 500+ applications within the Intelligent Foundations & Experiences line of business, ensuring high resiliency and compliance.',
      'Spearheaded the definition and implementation of comprehensive SLOs/SLIs across critical AWS services for 8 applications, resulting in 93% SLO attainment and a 40% reduction in critical incidents.',
      'Managed Error Budget consumption via proactive burn-rate alerting and hosted Post-Mortem meetings for blameless root cause analysis.',
      'Engineered and provisioned scalable AWS cloud infrastructure including EC2, VPC, IAM, S3, and RDS.',
      'Diagnosed and resolved AWS service issues, achieving a 30% reduction in downtime within 4 months.',
      'Identify and remediate CI/CD pipeline issues, bottlenecks, and service disruptions.',
      'Led infrastructure evacuation (disaster recovery), reducing failover duration by 30-50% utilizing failover runbooks.'
    ],
    skills: ['Linux', 'Amazon Web Services (AWS)', 'Observability', 'New Relic', 'Observe', 'SLO/SLI', 'Error Budget', 'Git', 'Github', 'Terraform', 'Jenkins', 'Disaster Recovery', 'Incident Response', 'IAM', 'Troubleshooting', 'Post-Mortem', 'RCA']
  },
  {
    company: 'PNC Bank',
    role: 'Infrastructure Configuration Consultant',
    period: '07/2019 - 01/2023',
    description: [
      'Provided 3rd shift/overnight and on-call support for critical financial infrastructure.',
      'Diagnosed and resolved complex failures within the CI/CD pipeline leveraging specialized knowledge of Jenkins and IBM UrbanCode Deploy.',
      'Maintained and optimized middleware platforms including OpenShift, WebSphere Application Server, JBoss, and Tomcat on RHEL and Windows environments.',
      'Reduced Production incidents by 20% by investigating application heap dumps to identify root causes.',
      'Partnered with diverse engineering groups to perform deep-dive root cause analysis (RCA) and implemented permanent architectural fixes.'
    ],
    skills: ['OpenShift', 'IBM WebSphere Application Server', 'JBoss Application Server', 'Apache', 'IBM UrbanCode Deploy (uDeploy)', 'WebLogic', 'Tomcat', 'Bash', 'Jenkins', 'Windows Server', 'Linux', 'Troubleshooting', 'Python', 'DevOps']
  },
  {
    company: 'Kura Labs',
    role: 'Site Reliability Engineer (Apprenticeship)',
    period: '07/2022 - 12/2022',
    description: [
      'Completed 500+ hours of live interactive instruction building automated deployment pipelines for enterprise software applications.',
      'Automated core processes involving resource provisioning, monitoring, and scaling using Bash and Python in Linux environments.',
      'Built and scaled automated CI/CD pipelines using Git, GitHub, Jenkins, Docker (ECS), and Kubernetes (EKS).',
      'Monitored and remediated infrastructure issues using DataDog, CloudWatch, and Splunk.',
      'Deployed N-tier micro-service infrastructure using Terraform, CloudFormation, and Ansible.'
    ],
    skills: ['Terraform', 'Kubernetes', 'Ansible', 'Python', 'Docker', 'Git', 'AWS', 'Jenkins', 'Datadog', 'Linux', 'GitHub', 'DevOps', 'Troubleshooting']
  },
  {
    company: 'Peraton (formerly Perspecta)',
    role: 'Application Integrator',
    period: '07/2018 - 08/2019',
    description: [
      'Served as primary technical support resource for Federal Reserve Bank of New York - Auction Reporting (TAAPS) application.',
      'Integrated several software products and systems into the Auction Reporting application environment.',
      'Installed, managed, and monitored applications hosted on IBM WebSphere Application Server NDv8.5.5.x & IBM HTTP platform.'
    ],
    skills: ['IBM WebSphere Application Server', 'IBM HTTP Server', 'Bash', 'Integration', 'Technical Support', 'Troubleshooting']
  },
  {
    company: 'Hyatt',
    role: 'Operations Analyst',
    period: '11/2017 - 07/2018',
    description: [
      'Primary point of contact for inquiries related to Hyatt’s global World of Hyatt Loyalty Management System (LMS).',
      'Provided support for third-party vendor software and LMS code deployments, acting as a liaison between global locations and dev teams.',
      'Developed comprehensive documentation including solution requirements, use cases, and training materials.'
    ],
    skills: ['SQL Server', 'Operations', 'Documentation', 'Triage', 'Troubleshooting']
  },
  {
    company: 'Sigma Systems',
    role: 'Technical Account Manager / Analyst',
    period: '03/2017 - 11/2017',
    description: [
      'Primary technical contact for clients in Caribbean markets including Miami, Barbados, and Jamaica.',
      'Managed and supported Sigma Systems’ proprietary SaaS software.',
      'Installed and configured Java applications hosted on Linux utilizing WebLogic and JBoss middleware technology.'
    ],
    skills: ['SaaS', 'Linux', 'JBoss', 'WebLogic', 'Account Management', 'SQL', 'Troubleshooting']
  },
  {
    company: 'Blue Cross Blue Shield (HCSC)',
    role: 'Sr. Software Systems Programming Specialist',
    period: '07/2011 - 03/2017',
    description: [
      'Provided on-call middleware support for a portfolio of 400+ distributed applications.',
      'Installed and configured IBM WebSphere Application Server in both vertical and horizontal clustered environments.',
      'Migrated applications hosted on Linux from legacy WebSphere versions (6.x/7.x) to 8.5.x.',
      'Managed deployments, administration, configuration, and troubleshooting of J2EE applications using JAR and EAR formats.'
    ],
    skills: ['IBM WebSphere', 'Dynatrace', 'Windows Server', 'J2EE', 'Linux', 'MQ', 'JDBC', 'Troubleshooting', 'RCA', 'System Administration']
  },
  {
    company: 'Eastern Illinois University',
    role: 'Help Desk Technician',
    period: '06/2010 - 07/2011',
    description: [
      'Provided technical support and troubleshooting for university-wide hardware, software, and network connectivity issues.',
      'Managed incident tickets and assisted staff and students with day-to-day computing requirements.',
      'Maintained and optimized computer lab environments and peripheral equipment.'
    ],
    skills: ['Technical Support', 'Troubleshooting', 'Customer Service', 'Hardware Support', 'Software Support']
  },
  {
    company: 'Blue Cross Blue Shield (HCSC)',
    role: 'Summer Intern',
    period: '06/2007 - 09/2007',
    description: [
      'Supported senior system administrators with infrastructure maintenance and documentation of technical processes.',
      'Gained foundational knowledge of enterprise middleware and software deployment lifecycles.',
      'Collaborated with cross-functional technical teams on system health check initiatives.'
    ],
    skills: ['IT Operations', 'Documentation', 'Professional Development', 'Enterprise Systems', 'Troubleshooting']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Site Reliability Engineering: Measuring and Managing Reliability',
    excerpt: 'Afterthoughts of completing Google SRE course',
    date: 'Dec 15, 2025',
    readTime: '5 min read',
    tags: ['SRE', 'SLO', 'Reliability', 'Google'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7328485725757157377/'
  },
];
