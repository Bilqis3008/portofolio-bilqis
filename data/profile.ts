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
  name: "Bilqis Nabila Ummami",
  role: "Data Analyst & Web Developer",
  title: "Spesialis Analisis Data dan Pengembangan Aplikasi Web serta Digitalisasi Sistem Informasi Berbasis Web.",
  avatar: "/foto/bil.png", // Sesuaikan path foto jika ada
  bio: "Lulusan Manajemen Informatika Universitas Sriwijaya (IPK 3.94/4.00) dengan spesialisasi Analisis Data (SQL, Power BI, Excel) serta berpengalaman mengembangkan aplikasi web menggunakan PHP, MySQL, dan Tailwind CSS. Berpengalaman magang di Dinas Komunikasi dan Informatika (Kominfo) Muara Enim.",
  shortBio: "Lulusan D3 Manajemen Informatika UNSRI (IPK 3.94) berfokus pada Data Analysis, Web Development, dan Digitalisasi Sistem Informasi.",
  location: "Muara Enim / Palembang, Sumatra Selatan, Indonesia (Open to Remote / On-site)",
  email: "bilaboknamanya@gmail.com",
  whatsapp: "+62 852-6650-1830",
  discord: "bilqisnabila",
  availability: "Tersedia untuk Peran Entry-Level, Magang & Proyek Freelance",
  stats: {
    projectsCompleted: 10,
    yearsExperience: 1,
    technologiesMastered: 8,
    contributions: 12,
  },
  resumeUrl: "/resume.pdf",
  about: {
    biography: [
      "Saya adalah lulusan Diploma III Manajemen Informatika dari Universitas Sriwijaya dengan IPK 3.94/4.00 yang memiliki spesialisasi di bidang Analisis Data (SQL, Power BI, Excel) serta pengembangan aplikasi web.",
      "Memiliki pengalaman kerja praktik (magang) di Dinas Komunikasi dan Informatika (Kominfo) Kabupaten Muara Enim bidang E-Government dalam mengembangkan Aplikasi Pelaporan Sinyal berbasis digital.",
      "Aktif meningkatkan kompetensi melalui berbagai sertifikasi profesional di bidang Cloud, Gen AI, Python, Data Science, dan pemodelan data dari platform terkemuka seperti Dicoding dan Udemy."
    ],
    journey: [
      {
        year: "2023 - 2026",
        title: "Informatics Management Student",
        description: "Menempuh pendidikan D3 Manajemen Informatika di Universitas Sriwijaya dengan fokus pada Sistem Informasi dan Analisis Data (IPK: 3.94/4.00)."
      },
      {
        year: "2025",
        title: "IT Intern at Dinas Kominfo Muara Enim",
        description: "Mengembangkan Aplikasi Pelaporan Sinyal berbasis web untuk memantau kualitas jaringan telekomunikasi di berbagai wilayah pada bidang E-Government."
      },
      {
        year: "2026",
        title: "Professional Certifications & Tech Stack",
        description: "Meraih berbagai sertifikasi kompetensi industri dari Dicoding dan Udemy meliputi AWS Cloud, Python, Data Science dengan Microsoft Fabric, Gen AI dengan Microsoft Azure, dan Visualisasi Data."
      }
    ],
    careerGoals: [
      "Mengembangkan karier sebagai Data Analyst / Web Developer yang memberikan kontribusi berbasis data bagi perusahaan.",
      "Membangun solusi sistem informasi dan digitalisasi arsip/layanan publik yang terstruktur, efisien, dan andal.",
      "Terus memperdalam keahlian di bidang Business Intelligence, Cloud, dan Integrasi AI."
    ],
    education: [
      {
        degree: "D3 Manajemen Informatika (Ahli Madya)",
        institution: "Universitas Sriwijaya",
        year: "2023 - 2026",
        gpa: "3.94 / 4.00",
        details: "Fokus pada Pengembangan Aplikasi Web, Sistem Basis Data, Pemrograman Berorientasi Objek (OOP), UI/UX, dan Rekayasa Perangkat Lunak. Menyelesaikan skripsi rancang bangun aplikasi manajemen surat masuk."
      }
    ],
    interests: [
      "Data Analytics & Business Intelligence (SQL, Power BI, Excel)",
      "Web Development (PHP, Laravel, HTML, CSS, Tailwind)",
      "Cloud Computing & Gen AI (AWS & Azure)",
      "Database Design & Management",
      "Digital Government & Public Service Systems"
    ]
  }
};