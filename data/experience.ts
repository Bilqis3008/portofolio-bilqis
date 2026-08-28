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
    company: "BPJS Kesehatan Kantor Cabang Palembang",
    position: "Web Developer (Kerja Praktik)",
    location: "Palembang, Sumatera Selatan",
    period: "Jun 2025 - Agu 2025",
    type: "Internship",
    description: "Mengembangkan sistem informasi berbasis web D-Rebook untuk digitalisasi arsip dokumen mutu pelayanan Fasilitas Kesehatan (FKTP dan FKRTL) di Bagian Mutu Pelayanan Faskes.",
    achievements: [
      "Mengembangkan website \"D-Rebook\" menggunakan framework Laravel, MySQL, dan Laragon guna mengotomasi proses input, penyimpanan terpusat, dan pencarian arsip dokumen mutu pelayanan Faskes.",
      "Merancang dan membangun arsitektur Back-End dengan pola Model-View-Controller (MVC) untuk manajemen akun faskes yang aman dan terstruktur.",
      "Mengintegrasikan sistem dengan Looker Studio untuk menyajikan laporan dan statistik data pelaporan dalam bentuk grafik interaktif secara real-time guna mendukung monitoring instansi."
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Laragon", "MVC Architecture", "Web Development"]
  },
  {
    company: "Fakultas Ilmu Komputer Universitas Sriwijaya",
    position: "Panitia Pelaksana - Pengabdian kepada Masyarakat",
    location: "SMP Negeri 56 Palembang",
    period: "1 November 2025",
    type: "Contract",
    description: "Berperan sebagai panitia pelaksana dalam kegiatan pengabdian kepada masyarakat yang berfokus pada pelatihan dan peningkatan kompetensi guru dalam mengimplementasikan program pembelajaran coding.",
    achievements: [
      "Mendukung persiapan teknis dan kelancaran rangkaian acara pelatihan program pembelajaran coding bagi para pendidik di SMP Negeri 56 Palembang.",
      "Berpartisipasi aktif dalam suksesnya transfer pengetahuan teknologi dan digital kepada pihak sekolah."
    ],
    technologies: ["Event Management", "Team Collaboration", "Education & Technology"]
  }
];