export interface Project {
  title: string;
  image: string;
  imageAlt?: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubRepoUrl: string;
}

export interface Experience {
  title: string;
  description: string;
  startYear: number;
  endYear?: number | "Present";
}
