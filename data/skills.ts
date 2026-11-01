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
  // Data Analytics & BI (Spesialisasi Utama)
  { name: "Data Analysis (SQL, Power BI, Excel)", category: "AI", level: 95, experience: "2 yrs", iconName: "BrainCircuit", featured: true },
  { name: "Tableau & Visualisasi Data", category: "AI", level: 90, experience: "1 yr", iconName: "Palette", featured: true },
  { name: "Data Science & Microsoft Fabric", category: "AI", level: 88, experience: "1 yr", iconName: "Bot", featured: true },

  // Web Development & Frontend
  { name: "PHP & Laravel Framework", category: "Backend", level: 92, experience: "2 yrs", iconName: "Server", featured: true },
  { name: "HTML5, CSS & Tailwind CSS", category: "Frontend", level: 94, experience: "2 yrs", iconName: "Code2", featured: true },
  { name: "Database Design & MySQL", category: "Database", level: 92, experience: "3 yrs", iconName: "Database", featured: true },

  // Cloud & AI
  { name: "AWS Cloud & Gen AI Fundamentals", category: "Cloud", level: 86, experience: "1 yr", iconName: "Server", featured: true },
  { name: "Python Programming", category: "Languages", level: 88, experience: "1 yr", iconName: "Terminal", featured: true },
  { name: "Microsoft Azure Gen AI", category: "Cloud", level: 85, experience: "1 yr", iconName: "Zap", featured: false },

  // Tools & Version Control
  { name: "Git & GitHub Version Control", category: "Tools", level: 90, experience: "2 yrs", iconName: "GitBranch", featured: true },
  { name: "Spec-Driven Development (Kiro)", category: "Tools", level: 85, experience: "1 yr", iconName: "Layers", featured: false }
];