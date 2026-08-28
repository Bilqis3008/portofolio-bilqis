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
    id: "dicoding-machine-learning-pemula",
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    expirationDate: "27 Agustus 2029",
    credentialId: "NVP7W1D8OZRO",
    credentialUrl: "https://www.dicoding.com/certificates/NVP7W1D8OZRO",
    image: "/certificates/machine-learning.jpg",
    skills: ["Machine Learning", "Python", "Scikit-learn", "Data Modeling", "Supervised Learning"]
  },
  {
    id: "dicoding-aws-cloud",
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding Indonesia",
    expirationDate: "16 Februari 2028",
    credentialId: "1OP82W6M8PQK",
    credentialUrl: "https://www.dicoding.com/certificates/1OP82W6M8PQK",
    image: "/certificates/aws-cloud.jpg",
    skills: ["Cloud Computing", "Amazon Web Services", "EC2", "S3", "IAM", "Cloud Architecture"]
  },
  {
    id: "dicoding-javascript",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    expirationDate: "06 Juni 2027",
    credentialId: "QLZ97VLD9P5D",
    credentialUrl: "https://www.dicoding.com/certificates/QLZ97VLD9P5D",
    image: "/certificates/javascript.jpg",
    skills: ["JavaScript", "Node.js", "OOP", "Functional Programming", "Async Programming"]
  },
  {
    id: "dicoding-project-management",
    title: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding Indonesia",
    expirationDate: "25 Agustus 2029",
    credentialId: "MRZMVK653ZYQ",
    credentialUrl: "https://www.dicoding.com/certificates/MRZMVK653ZYQ",
    image: "/certificates/manajemen-proyek.jpg",
    skills: ["Project Management", "Agile", "Waterfall", "Lean", "Six Sigma", "PMO"]
  },
  {
    id: "dicoding-python",
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    expirationDate: "26 Agustus 2029",
    credentialId: "L4PQW3904P01",
    credentialUrl: "https://www.dicoding.com/certificates/L4PQW3904P01",
    image: "/certificates/python.jpg",
    skills: ["Python", "OOP", "Array", "Matrix", "Unit Testing", "PEP8"]
  },
  {
    id: "dicoding-spec-driven-dev",
    title: "Spec-Driven Development dengan Kiro",
    issuer: "Dicoding Indonesia",
    expirationDate: "26 Agustus 2029",
    credentialId: "JMZVL20MQXN9",
    credentialUrl: "https://www.dicoding.com/certificates/JMZVL20MQXN9",
    image: "/certificates/kiro.jpg",
    skills: ["Spec-Driven Development", "AI-Assisted Coding", "Prompt Engineering", "Software Architecture"]
  },
  {
    id: "dicoding-azure-gen-ai",
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    expirationDate: "26 Agustus 2029",
    credentialId: "2VX3V25Q4PYQ",
    credentialUrl: "https://www.dicoding.com/certificates/2VX3V25Q4PYQ",
    image: "/certificates/azure.jpg",
    skills: ["Microsoft Azure", "Generative AI", "Azure AI Foundry", "LLM", "RAG", "Fine-tuning"]
  },
  {
    id: "dicoding-microsoft-fabric",
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    expirationDate: "25 Agustus 2029",
    credentialId: "JLX1K39MJP72",
    credentialUrl: "https://www.dicoding.com/certificates/JLX1K39MJP72",
    image: "/certificates/fabric.jpg",
    skills: ["Microsoft Fabric", "Data Science", "Machine Learning", "MLflow", "Data Wrangler", "Python Notebooks"]
  },
  {
    id: "udemy-data-analysis",
    title: "Data Analysis | SQL, Tableau, Power BI & Excel | Real Projects",
    issuer: "Udemy",
    credentialId: "UC-dc44acc8-0b7d-4014-b75f-79055a0f64f8",
    credentialUrl: "https://www.udemy.com/certificate/UC-dc44acc8-0b7d-4014-b75f-79055a0f64f8",
    image: "/certificates/data-analysis.jpg",
    skills: ["SQL", "Tableau", "Power BI", "Excel", "Data Analytics", "Real Projects"]
  },
  {
    id: "dicoding-visualisasi-data",
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    expirationDate: "09 Maret 2027",
    credentialId: "10P8NKJ5VXQK",
    credentialUrl: "https://www.dicoding.com/certificates/1OP8NKJ5VXQK",
    image: "/certificates/visualisasi-data.jpg",
    skills: ["Data Visualization", "Google Sheets", "Gestalt Principles", "Storytelling with Data"]
  },
  {
    id: "zahir-accounting",
    title: "Zahir Accounting 6 (Lulus dengan Nilai Sangat Baik)",
    issuer: "PT Zahir Internasional",
    credentialId: "-",
    credentialUrl: "/certificates/zahir.jpeg",
    image: "/certificates/zahir.jpeg",
    skills: ["Zahir Accounting", "Financial Data", "Data Master", "Trading & Service Transactions", "Financial Reporting"]
  }
];