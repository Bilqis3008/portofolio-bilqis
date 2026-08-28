export interface Profile {
  name: string;
  role: string;
  title: string;
  avatar: string;
  bio: string;
  shortBio: string;
  location: string;
  email: string;
  whatsapp: string;
  discord: string;
  availability: string;
  stats: {
    projectsCompleted: number;
    yearsExperience: number;
    technologiesMastered: number;
    contributions: number;
  };
  resumeUrl: string;
  about: {
    biography: string[];
    journey: { year: string; title: string; description: string }[];
    careerGoals: string[];
    education: { degree: string; institution: string; year: string; gpa: string; details: string }[];
    interests: string[];
  };
}

export const profileData: Profile = {
  name: "Muh. Zuhri Mubarak",
  role: "Data Analyst & Web Developer",
  title: "Membangun solusi sistem informasi berbasis web, digitalisasi arsip, analisis data, serta pengembangan aplikasi fungsional.",
  avatar: "/foto/zuh.png",
  bio: "Lulusan Manajemen Informatika Universitas Sriwijaya (IPK 3.92/4.00) dengan keahlian dalam pengembangan aplikasi web (Laravel, PHP, JavaScript) serta analisis data dan cloud. Berpengalaman melalui magang IT di BPJS Kesehatan Cabang Palembang dan berbagai sertifikasi kompetensi industri.",
  shortBio: "Lulusan D3 Manajemen Informatika UNSRI (IPK 3.92) berfokus pada Web Development, Data Analytics, dan Digitalisasi Arsip Sistem.",
  location: "Palembang, Sumatra Selatan, Indonesia (Open to Remote / On-site)",
  email: "muhzhrii@gmail.com",
  whatsapp: "+62 821-6010-7638",
  discord: "muhzhrii",
  availability: "Tersedia untuk Peran Entry-Level, Magang & Proyek Freelance",
  stats: {
    projectsCompleted: 12,
    yearsExperience: 1,
    technologiesMastered: 10,
    contributions: 17,
  },
  resumeUrl: "/resume.pdf",
  about: {
    biography: [
      "Saya adalah lulusan Diploma III Manajemen Informatika dari Universitas Sriwijaya dengan IPK 3.92/4.00 yang memiliki keahlian dalam pengembangan aplikasi web, analisis data, dan manajemen sistem informasi.",
      "Melalui pembelajaran mandiri dan sertifikasi intensif seperti Dicoding dan Udemy, saya menguasai pemrosesan data, visualisasi data, manajemen basis data, serta pengembangan Back-End menggunakan PHP, Laravel, Python, dan JavaScript.",
      "Memiliki pengalaman kerja praktik (magang) di BPJS Kesehatan Cabang Palembang dalam membangun sistem digitalisasi arsip D-Rebook serta aktif dalam pengabdian kepada masyarakat."
    ],
    journey: [
      {
        year: "2023 - 2026",
        title: "Informatics Management Student",
        description: "Menempuh pendidikan D3 Manajemen Informatika di Universitas Sriwijaya dengan fokus pada Sistem Informasi, Pemrograman Web, dan Basis Data (IPK: 3.92/4.00)."
      },
      {
        year: "2023",
        title: "Zahir Accounting 6 Certification",
        description: "Menyelesaikan ujian laboratorium akuntansi dan memperoleh sertifikasi kompetensi pengolahan data keuangan dengan predikat Sangat Baik (Nilai 90)."
      },
      {
        year: "2024 - 2026",
        title: "Professional Tech Certifications",
        description: "Meraih berbagai sertifikasi kompetensi industri dari Dicoding dan Udemy meliputi JavaScript, Python, AWS Cloud, Data Science dengan Microsoft Fabric, Gen AI dengan Microsoft Azure, dan Visualisasi Data."
      },
      {
        year: "2025",
        title: "IT Intern at BPJS Kesehatan KC Palembang",
        description: "Mengembangkan website D-Rebook untuk digitalisasi arsip dokumen mutu pelayanan Faskes menggunakan Laravel, MySQL, serta integrasi Looker Studio."
      },
      {
        year: "2025",
        title: "Community Service Committee (PKM)",
        description: "Berperan sebagai panitia pelaksana kegiatan pengabdian kepada masyarakat untuk pelatihan program pembelajaran coding bagi guru di SMP Negeri 56 Palembang."
      }
    ],
    careerGoals: [
      "Mengembangkan karier sebagai Web Developer / Data Analyst yang mampu memberikan kontribusi nyata bagi instansi atau perusahaan.",
      "Membangun solusi sistem informasi berbasis web yang aman, terstruktur, efisien, dan berorientasi pada kemudahan pengguna.",
      "Terus memperdalam keahlian di bidang integrasi data, cloud computing, dan tata kelola sistem berbasis digital."
    ],
    education: [
      {
        degree: "D3 Manajemen Informatika (Ahli Madya)",
        institution: "Universitas Sriwijaya",
        year: "2023 - 2026",
        gpa: "3.92 / 4.00",
        details: "Fokus pada pengembangan aplikasi web, manajemen basis data relasional, dan digitalisasi sistem administrasi publik."
      }
    ],
    interests: [
      "Web & Back-End Development (Laravel & PHP)",
      "Data Analytics & Business Intelligence (Power BI & Tableau)",
      "Cloud Computing & AI Integration (AWS & Azure)",
      "SQL & Database Management (MySQL)",
      "Digital Archiving & E-Government Systems",
      "Project Management & Software Testing"
    ]
  }
};