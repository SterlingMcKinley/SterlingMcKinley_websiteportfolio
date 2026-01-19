
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}
