export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Fullstack"
  | "Mobile"
  | "AI"
  | "UI/UX"
  | "Open Source";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullOverview: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  category: ProjectCategory;
  status: "Completed" | "In Progress" | "Featured";
  date: string;
  featured: boolean;
  image: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
}

export const projectsData: Project[] = [
  {
    slug: "drebook",
    title: "Website D-Rebook (Arsip Mutu Faskes BPJS)",
    shortDescription: "Sistem informasi berbasis web untuk digitalisasi arsip dan pelaporan dokumen mutu pelayanan Fasilitas Kesehatan di BPJS Kesehatan.",
    fullOverview: "Proyek sistem informasi berbasis web yang dikembangkan selama Kerja Praktik di BPJS Kesehatan Kantor Cabang Palembang. Berfungsi untuk mengotomasi proses pelaporan, pengarsipan digital dokumen mutu Faskes (FKTP & FKRTL), serta menyediakan integrasi analitik dengan Looker Studio.",
    problem: "Proses pelaporan dan pengarsipan dokumen mutu pelayanan sebelumnya dilakukan secara manual atau menggunakan penyimpanan terpisah (seperti OneDrive) yang kurang transparan dan menyulitkan pencarian data.",
    solution: "Membangun sistem berbasis web menggunakan Laravel dan MySQL dengan arsitektur MVC, menyediakan manajemen akun faskes terpusat, fitur unduh dokumen resmi, serta integrasi dasbor Looker Studio secara real-time.",
    architecture: "Frontend Blade Templating -> Laravel Framework (MVC) -> Database MySQL -> Integrasi Looker Studio.",
    techStack: ["PHP", "Laravel", "MySQL", "Laragon", "Looker Studio", "MVC Architecture", "Web Development"],
    category: "Fullstack",
    status: "Featured",
    date: "2025",
    featured: true,
    image: "/project/dreebok.png",
    gallery: [
      "/project/dreebok.png"
    ],
    githubUrl: "https://github.com/muhzuhri/Drebook",
    metrics: [
      { label: "Cakupan Instansi", value: "BPJS Kesehatan KCU Palembang" },
      { label: "Sistem", value: "Digitalisasi Arsip Mutu Faskes" }
    ]
  },
  {
    slug: "kopi-shop",
    title: "KopiShop Web Application",
    shortDescription: "Aplikasi web kedai kopi interaktif untuk menampilkan produk menu, pemesanan, dan informasi kedai secara modern.",
    fullOverview: "Aplikasi web KopiShop yang dirancang untuk menghadirkan pengalaman penjelajahan menu kopi secara digital. Dilengkapi dengan katalog produk interaktif, detail informasi menu, serta antarmuka yang bersih dan responsif.",
    problem: "Kedai kopi memerlukan platform digital yang menarik untuk memamerkan menu, varian rasa, dan informasi produk secara langsung kepada pelanggan secara daring.",
    solution: "Membangun antarmuka web modern yang responsif dan terstruktur untuk memudahkan pengguna dalam melihat daftar menu dan detail produk KopiShop.",
    architecture: "Frontend UI Components -> Responsive Layout Styling -> Data Katalog Produk.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Frontend"],
    category: "Frontend",
    status: "Completed",
    date: "2025",
    featured: true,
    image: "/project/kopishop.png",
    gallery: [
      "/project/kopishop.png"
    ],
    githubUrl: "https://github.com/muhzuhri/KopiShop",
    metrics: [
      { label: "Kategori", value: "Katalog & Menu" },
      { label: "Desain", value: "Modern & Responsive" }
    ]
  },
  {
    slug: "monitoring-siswa-magang",
    title: "Aplikasi Monitoring Siswa Magang",
    shortDescription: "Sistem berbasis web untuk mendata serta memantau kegiatan siswa magang secara terstruktur.",
    fullOverview: "Aplikasi web monitoring yang dirancang untuk mengelola dan memantau aktivitas siswa magang. Sistem ini memudahkan pencatatan kehadiran, laporan kegiatan harian, serta rekapitulasi data penempatan secara digital.",
    problem: "Pengelolaan data dan pemantauan aktivitas siswa magang secara manual sering memicu keterlambatan pelaporan dan rekapitulasi data yang kurang akurat.",
    solution: "Mengembangkan platform web terpusat untuk mengotomasi pencatatan kehadiran, pelaporan harian, dan manajemen data siswa magang secara transparan.",
    architecture: "Antarmuka Web -> Logika PHP/Framework -> Database Relasional.",
    techStack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Web Development"],
    category: "Fullstack",
    status: "Completed",
    date: "2026",
    featured: true,
    image: "/project/monitoring-siswa-magang.png",
    gallery: [
      "/project/monitoring-siswa-magang.png"
    ],
    githubUrl: "https://github.com/muhzuhri/monitoringSiswa",
    metrics: [
      { label: "Manajemen Data", value: "Real-time Tracking" },
      { label: "Efisiensi", value: "Otomasi Rekap" }
    ]
  },
  {
    slug: "barang-karung",
    title: "Sistem Manajemen Pengelolaan Barang Karung",
    shortDescription: "Aplikasi berbasis web untuk mencatat, melacak, dan mengelola inventaris serta logistik barang karung.",
    fullOverview: "Solusi manajemen inventaris yang dirancang khusus untuk mengelola keluar-masuk barang atau stok gudang berbasis karung secara terstruktur dan terukur.",
    problem: "Pencatatan inventaris barang gudang secara manual rentan terhadap selisih stok, kesalahan hitung, dan lambatnya proses pelaporan.",
    solution: "Membangun sistem pencatatan inventaris digital yang mencakup fitur input barang masuk, barang keluar, serta rekapitulasi stok secara akurat.",
    architecture: "Frontend UI -> Backend Controller -> Database Manajemen Stok.",
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap / Tailwind"],
    category: "Backend",
    status: "Completed",
    date: "2025",
    featured: false,
    image: "/project/barang-karung.png",
    gallery: [
      "/project/barang-karung.png"
    ],
    githubUrl: "https://github.com/muhzuhri/barangkarung",
  },
  {
    slug: "undangan-pernikahan-digital",
    title: "Website Undangan Pernikahan Digital",
    shortDescription: "Platform undangan pernikahan berbasis web yang interaktif, elegan, dan responsif.",
    fullOverview: "Aplikasi web undangan digital yang menampilkan informasi acara, hitung mundur (countdown timer), peta lokasi, serta fitur buku tamu digital/ucapan selamat bagi para tamu undangan.",
    problem: "Undangan fisik kurang fleksibel, memerlukan biaya cetak tinggi, dan sulit dibagikan secara instan ke banyak tamu.",
    solution: "Merancang undangan digital interaktif dengan desain elegan, navigasi mulus, dan sistem ucapan tamu secara langsung.",
    architecture: "Single Page Application / HTML-CSS-JS -> Responsive UI Layout.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Frontend"],
    category: "Frontend",
    status: "Completed",
    date: "2024",
    featured: false,
    image: "/project/pernikahan.png",
    gallery: [
      "/project/pernikahan.png"
    ],
    githubUrl: "https://github.com/muhzuhri/pernikahan",
  },
  {
    slug: "portfolio-tailwind-css",
    title: "Personal Portfolio Website",
    shortDescription: "Website portofolio profesional pribadi yang dibangun menggunakan Tailwind CSS dan modern web stack.",
    fullOverview: "Website portofolio responsif untuk menampilkan profil akademik, pengalaman magang IT di BPJS Kesehatan, daftar sertifikasi industri (Dicoding, Udemy, Zahir), serta galeri proyek.",
    problem: "Kebutuhan akan media personal branding yang interaktif dan mudah diakses oleh perekrut untuk melihat rekam jejak keterampilan.",
    solution: "Membangun antarmuka portofolio yang bersih, cepat, dan elegan menggunakan Tailwind CSS dengan struktur data TypeScript yang terorganisir.",
    architecture: "React / Vite / HTML -> Tailwind CSS Styling -> Komponen Modular.",
    techStack: ["Tailwind CSS", "TypeScript", "HTML5", "JavaScript", "UI/UX"],
    category: "Frontend",
    status: "Featured",
    date: "2026",
    featured: true,
    image: "/project/portofolio-tailwind.png",
    gallery: [
      "/project/portofolio-tailwind.png"
    ],
    githubUrl: "https://github.com/muhzuhri/portfolio-tailwind-css",
    metrics: [
      { label: "Desain", value: "Fully Responsive" },
      { label: "Framework", value: "Tailwind CSS" }
    ]
  }
];