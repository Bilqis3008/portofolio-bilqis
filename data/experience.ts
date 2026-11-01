export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  type: "Full-time" | "Contract" | "Lead / Consulting" | "Internship" | "Organisasi Mahasiswa";
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    company: "Dinas Komunikasi dan Informatika (Kominfo) Kabupaten Muara Enim",
    position: "IT Intern / Web Developer (E-Government)",
    location: "Muara Enim, Sumatera Selatan",
    period: "Jun 2025 - Agu 2025",
    type: "Internship",
    description: "Berkolaborasi dalam tim untuk merancang dan mengembangkan Aplikasi Pelaporan Sinyal berbasis web guna mendata serta memantau kualitas jaringan telekomunikasi di berbagai wilayah.",
    achievements: [
      "Mengembangkan Aplikasi Pelaporan Sinyal berbasis web/digital yang berhasil menyederhanakan alur pengumpulan laporan dari masyarakat atau petugas lapangan.",
      "Merancang fitur pemetaan dan pengelolaan data pelaporan secara terstruktur untuk menyediakan informasi real-time mengenai status titik lokasi sinyal bermasalah dan rekapitulasi data guna mendukung efisiensi evaluasi infrastruktur telekomunikasi bagi instansi."
    ],
    technologies: ["PHP", "MySQL", "Tailwind CSS", "HTML", "CSS", "Web Development", "E-Government"]
  }
];