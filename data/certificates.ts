export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  expirationDate?: string;
  credentialId: string;
  credentialUrl: string;
  image: string;
  skills: string[];
}

export const certificatesData: Certificate[] = [
  {
    id: "dicoding-cloud-gen-ai-aws",
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    expirationDate: "27 Agustus 2029",
    credentialId: "JMZVL27QRXN9",
    credentialUrl: "https://www.dicoding.com/certificates/JMZVL27QRXN9",
    image: "/certificates/cloud1.jpg",
    skills: ["Cloud Computing", "Generative AI", "AWS", "Cloud Architecture"]
  },
  {
    id: "dicoding-python",
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    expirationDate: "27 Agustus 2029",
    credentialId: "81P2K2RLYXOΥ",
    credentialUrl: "https://www.dicoding.com/certificates/81P2K2RLYXOY",
    image: "/certificates/python1.jpg",
    skills: ["Python", "Programming", "Data Processing"]
  },
  {
    id: "dicoding-microsoft-fabric",
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    expirationDate: "27 Agustus 2029",
    credentialId: "OLZ0J3E0NX65",
    credentialUrl: "https://www.dicoding.com/certificates/0LZ0J3E0NX65",
    image: "/certificates/fabric1.jpg",
    skills: ["Microsoft Fabric", "Data Science", "Machine Learning", "Data Analysis"]
  },
  {
    id: "dicoding-azure-gen-ai",
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    expirationDate: "27 Agustus 2029",
    credentialId: "JLX1K3Y05P72",
    credentialUrl: "https://www.dicoding.com/certificates/JLX1K3Y05P72",
    image: "/certificates/azure1.jpg",
    skills: ["Microsoft Azure", "Generative AI", "LLM", "AI Applications"]
  },
  {
    id: "udemy-data-analysis",
    title: "Data Analysis | SQL, Tableau, Power BI & Excel | Real Projects",
    issuer: "Udemy",
    expirationDate: "27 Agustus 2029",
    credentialId: "UC-9c59d9ec-5863-4672-9457-a8a4605ee6ce",
    credentialUrl: "https://www.udemy.com/certificate/UC-9c59d9ec-58b3-4672-9457-a8a4605ee5ce/",
    image: "/certificates/udemy1.jpg",
    skills: ["SQL", "Tableau", "Power BI", "Excel", "Data Analytics"]
  },
  {
    id: "dicoding-spec-driven-dev",
    title: "Spec-Driven Development dengan Kiro",
    issuer: "Dicoding Indonesia",
    expirationDate: "27 Agustus 2029",
    credentialId: "1RXYDYW3MXVM",
    credentialUrl: "https://www.dicoding.com/certificates/1RXYDYW3MXVM",
    image: "/certificates/kiro1.jpg",
    skills: ["Spec-Driven Development", "AI-Assisted Coding", "Software Architecture"]
  },
  {
    id: "lkp-zakiyah-komputer",
    title: "Pendidikan Komputer Microsoft Office (Predikat: Baik / B)",
    issuer: "LKP/LPK Zakiyah Muara Enim",
    expirationDate: "Agustus 2023",
    credentialId: "MS-OFFICE-2023",
    credentialUrl: "#",
    image: "/certificates/komputer.jpeg",
    skills: ["Microsoft Office", "Word", "Excel", "PowerPoint", "Administrasi Perkantoran"]
  },
  {
    id: "pospeda-lampung-2022",
    title: "Juara I - Kategori Regu Putri (POSPEDA Lampung IX)",
    issuer: "Kanwil Kemenag Prov Lampung",
    expirationDate: "Oktober 2022",
    credentialId: "POSPEDA-2022",
    credentialUrl: "#",
    image: "/certificates/juara-1-pospeda.jpeg",
    skills: ["Pencak Silat", "Teamwork", "Sportsmanship"]
  },
  {
    id: "pencak-silat-popnas",
    title: "Juara III - Regu Putri (Seleksi Pra-POPNAS XVI)",
    issuer: "Dinas Pemuda dan Olahraga Provinsi Lampung",
    expirationDate: "November 2021",
    credentialId: "POPNAS-2021",
    credentialUrl: "#",
    image: "/certificates/juara-3-regu-putri.jpeg",
    skills: ["Pencak Silat", "Competitive Sports", "Discipline"]
  },
  {
    id: "tapak-suci-virtual",
    title: "Juara I - Kategori Tunggal Tangan Kosong Putri",
    issuer: "Pimpinan Pusat Tapak Suci Putera Muhammadiyah",
    expirationDate: "November 2020",
    credentialId: "TAPAK-SUCI-2020",
    credentialUrl: "#",
    image: "/certificates/juara-1-tunggal.jpeg",
    skills: ["Seni Bela Diri", "Tunggal Tangan Kosong", "Focus"]
  },
  {
    id: "sriwijaya-islamic-festival",
    title: "Juara II - Lomba Da'i (Sriwijaya Islamic Festival)",
    issuer: "UKM LDK Nadwah Unsri",
    expirationDate: "November 2023",
    credentialId: "SIF-2023",
    credentialUrl: "#",
    image: "/certificates/juara-2-lomba-dai.jpeg",
    skills: ["Public Speaking", "Communication", "Islamic Studies"]
  }
];