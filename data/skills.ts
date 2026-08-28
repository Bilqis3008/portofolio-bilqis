export type SkillCategory = 
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud"
  | "DevOps"
  | "Tools"
  | "AI"
  | "Languages";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // percentage or scale 1-100
  experience: string;
  iconName: string;
  featured?: boolean;
}

export const skillsData: Skill[] = [
  // Backend & Web Development (Fokus Utama: PHP, Laravel, MVC)
  { name: "PHP & Laravel Framework", category: "Backend", level: 95, experience: "2 yrs", iconName: "Server", featured: true },
  { name: "MVC Architecture", category: "Backend", level: 92, experience: "2 yrs", iconName: "Layers", featured: true },
  { name: "JavaScript / TypeScript", category: "Languages", level: 88, experience: "2 yrs", iconName: "Code2", featured: true },
  { name: "HTML5 & Tailwind CSS", category: "Frontend", level: 92, experience: "2 yrs", iconName: "Palette", featured: true },

  // Database & Digital Archiving
  { name: "MySQL & Relational Databases", category: "Database", level: 94, experience: "3 yrs", iconName: "Database", featured: true },
  { name: "Zahir Accounting (Financial Data)", category: "Database", level: 88, experience: "1 yr", iconName: "HardDrive", featured: false },
  { name: "Digital Archiving & E-Gov Systems", category: "Backend", level: 90, experience: "1 yr", iconName: "FileTerminal", featured: true },

  // Data Analytics & BI
  { name: "Data Visualization", category: "AI", level: 90, experience: "1 yr", iconName: "Palette", featured: true },
  { name: "Python (Data Science & ML)", category: "AI", level: 86, experience: "1 yr", iconName: "BrainCircuit", featured: true },
  { name: "Microsoft Fabric & Data Science", category: "AI", level: 85, experience: "1 yr", iconName: "Bot", featured: false },

  // Cloud, Tools & DevOps
  { name: "Laragon (Local Development)", category: "Tools", level: 95, experience: "2 yrs", iconName: "Terminal", featured: false },
  { name: "AWS Cloud Practitioner", category: "Cloud", level: 85, experience: "1 yr", iconName: "Server", featured: true },
  { name: "Microsoft Azure (Gen AI Fundamentals)", category: "Cloud", level: 85, experience: "1 yr", iconName: "Zap", featured: false },
  { name: "Git & GitHub Version Control", category: "Tools", level: 92, experience: "3 yrs", iconName: "GitBranch", featured: true }
];