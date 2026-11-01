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
    slug: "manajemen-surat-masuk",
    title: "Website Arsip Digital Manajemen Surat Masuk",
    shortDescription: "Sistem informasi berbasis web untuk pelacakan status, posisi surat, dan digitalisasi arsip surat masuk di Dinas Pendidikan dan Kebudayaan.",
    fullOverview: "Aplikasi arsip digital berbasis web yang dikembangkan sebagai proyek Tugas Akhir/Skripsi. Sistem ini dirancang untuk memudahkan instansi dalam melacak status dan posisi surat, melihat progress tindak lanjut secara real-time, serta mengelola arsip surat masuk secara terstruktur.",
    problem: "Pengelolaan dan pencatatan surat masuk secara konvensional menyulitkan pegawai dalam melacak posisi dokumen serta memantau riwayat disposisi dan tindak lanjut surat secara cepat.",
    solution: "Membangun platform arsip digital interaktif yang dilengkapi fitur pencarian nomor surat atau nomor agenda instansi, manajemen akun login, serta monitoring alur surat secara transparan.",
    architecture: "Frontend UI -> Controller & Business Logic -> Database Relasional Arsip Surat.",
    techStack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Web Development"],
    category: "Fullstack",
    status: "Featured",
    date: "2026",
    featured: true,
    image: "/project/arsip-digital.png",
    gallery: [
      "/project/arsip-digital.png"
    ],
    githubUrl: "https://github.com/Bilqis3008/Arsip",
    metrics: [
      { label: "Instansi", value: "Dinas Pendidikan & Kebudayaan" },
      { label: "Sistem", value: "Pelacakan Surat Real-time" }
    ]
  },
  {
    slug: "lapor-sinyal-muara-enim",
    title: "Aplikasi Pelaporan Sinyal Muara Enim",
    shortDescription: "Sistem web digital untuk mendata serta memantau kualitas jaringan telekomunikasi dan titik lokasi sinyal di berbagai wilayah.",
    fullOverview: "Aplikasi berbasis web yang dikembangkan selama masa magang di Dinas Komunikasi dan Informatika (Kominfo) Kabupaten Muara Enim. Berfungsi untuk mendata, memantau, dan menyederhanakan alur pengumpulan laporan terkait kualitas jaringan telekomunikasi dari masyarakat maupun petugas lapangan.",
    problem: "Proses pengumpulan laporan jaringan telekomunikasi yang kurang terstruktur menyulitkan instansi dalam memonitor titik lokasi sinyal yang bermasalah secara cepat.",
    solution: "Mengembangkan platform web terpusat yang dilengkapi fitur manajemen autentikasi, pemetaan titik lokasi sinyal, serta rekapitulasi data laporan untuk mendukung efisiensi evaluasi infrastruktur telekomunikasi.",
    architecture: "Web UI / Authentication -> Backend Routing -> Database Manajemen Pelaporan.",
    techStack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "E-Government"],
    category: "Fullstack",
    status: "Featured",
    date: "2025",
    featured: true,
    image: "/project/signal-report.png",
    gallery: [
      "/project/signal-report.png"
    ],
    githubUrl: "https://github.com/Bilqis3008/signal-report",
    metrics: [
      { label: "Cakupan Instansi", value: "Diskominfo Kab. Muara Enim" },
      { label: "Fitur Utama", value: "Monitoring Titik Sinyal" }
    ]
  },
  {
    slug: "yayasan-green-invite-sembilan",
    title: "Platform Web Yayasan Green Invite Sembilan (GIS)",
    shortDescription: "Platform profil kelembagaan dan sistem informasi publikasi program lingkungan terpadu berbasis Laravel untuk Yayasan Green Invite Sembilan di Kabupaten Muara Enim.",
    fullOverview: "Platform web terpadu yang dibangun untuk Yayasan Green Invite Sembilan (GIS), sebuah lembaga swadaya masyarakat dan yayasan pelestarian lingkungan hidup berbasis kolaborasi di Kabupaten Muara Enim, Sumatera Selatan. Sistem ini menghadirkan profil lembaga, visualisasi 8 pilar program konservasi (Agroforestri, Perubahan Iklim & ProKlim, Pertanian Organik, Perkebunan Berkelanjutan, Advokasi Kebijakan, Biodiversity Warriors, Investasi Hijau, Karbon Trading), portal transparansi dampak lingkungan, modul publikasi berita dan galeri kegiatan, serta integrasi formulir kemitraan multipihak (CSR Korporasi, Pemerintah, Lembaga Riset/Kampus, dan Komunitas) yang dikelola melalui panel CMS Filament.",
    problem: "Kurangnya platform digital representatif dan transparan untuk mendokumentasikan serta mempublikasikan inisiatif aksi konservasi lingkungan, pilar program berkelanjutan, serta memfasilitasi penjajakan kemitraan CSR lintas pemangku kepentingan secara efisien.",
    solution: "Mengembangkan platform web responsif berbasis Laravel 11 dan Tailwind CSS yang terstruktur secara modular dengan integrasi Filament CMS untuk pembaruan konten dinamis, sistem pelaporan transparansi dampak ekologis, katalog program lingkungan interaktif, dan formulir kemitraan terverifikasi.",
    architecture: "Frontend Blade UI & Tailwind CSS -> Laravel Routing & Controller Logic -> Filament Admin CMS -> Database Relasional MySQL.",
    techStack: ["PHP", "Laravel", "Tailwind CSS", "MySQL", "JavaScript", "Filament", "Vite"],
    category: "Fullstack",
    status: "Featured",
    date: "2026",
    featured: true,
    image: "/project/gis-platform.png",
    gallery: [
      "/project/gis-platform.png",
      "/project/gis-logo.png"
    ],
    githubUrl: "https://github.com/Bilqis3008/GIS",
    metrics: [
      { label: "Klien / Lembaga", value: "Yayasan Green Invite Sembilan" },
      { label: "Cakupan Program", value: "8 Pilar Aksi Berkelanjutan" },
      { label: "Basis Wilayah", value: "Kabupaten Muara Enim" }
    ]
  },
  {
    slug: "sistem-manajemen-ppat",
    title: "Sistem Informasi Manajemen Akta & Dokumen PPAT",
    shortDescription: "Sistem informasi dan portal digital layanan pertanahan, manajemen akta, serta pengarsipan berkas digital terintegrasi cloud drive untuk Kantor PPAT Iwan Kurniawan, SH., MH., M.Kn.",
    fullOverview: "Sistem informasi dan platform digital komprehensif yang dirancang untuk Kantor Pejabat Pembuat Akta Tanah (PPAT) Iwan Kurniawan, SH., MH., M.Kn di Kabupaten Muara Enim (SK Menteri ATR/BPN RI No: 37/SK-HR.03.04.PPAT/III/2023). Aplikasi ini menyediakan landing page publik interaktif untuk panduan permohonan akta tanah (AJB, Hibah, Waris, APHB, APHT) serta portal edukasi materi hukum. Di sisi internal, sistem dilengkapi kontrol akses berbasis peran (RBAC) dengan dashboard Admin untuk tata kelola dokumen akta, drive berkas digital berbasis hierarki folder (Google Drive style) lengkap dengan fitur preview, multi-file upload, dan kompresi ZIP otomatis, serta modul monitoring real-time khusus pimpinan untuk memantau status penyelesaian berkas klien dan integrasi notifikasi WhatsApp Gateway.",
    problem: "Pencatatan administrasi akta pertanahan konvensional, penyimpanan fisik berkas sertifikat yang rentan hilang atau tercecer, serta lambatnya pelacakan status tindak lanjut akta tanah bagi pimpinan dan klien.",
    solution: "Membangun platform berbasis web dengan Laravel dan Tailwind CSS yang mengotomatisasi penomoran dan tanggal acara akta, modul virtual drive berkas tanah digital terenkripsi dengan pengunduhan arsip massal (ZIP), monitoring dashboard pimpinan, serta panduan layanan publik yang informatif.",
    architecture: "Frontend Blade UI & Tailwind CSS -> Laravel Controller & RBAC Middleware -> Storage & File Compression Service (ZIP) -> Database Relasional MySQL.",
    techStack: ["PHP", "Laravel", "Tailwind CSS", "MySQL", "JavaScript", "Docker", "Vite"],
    category: "Fullstack",
    status: "Featured",
    date: "2026",
    featured: true,
    image: "/project/ppat.png",
    gallery: [
      "/project/ppat.png"
    ],
    githubUrl: "https://github.com/Bilqis30/PPAT",
    metrics: [
      { label: "Instansi / Pejabat", value: "PPAT Iwan Kurniawan, SH., MH., M.Kn" },
      { label: "Fitur Unggulan", value: "Virtual Drive & Monitoring Akta" },
      { label: "Wilayah Kerja", value: "Kabupaten Muara Enim" }
    ]
  }
];