import RutePreview from "../assets/images/rute.webp";
import Jnt1 from "../assets/images/jnt1.webp";
import Jnt2 from "../assets/images/jnt2.webp";
import LaundryPreview from "../assets/images/laundry.webp";
import PortfolioPreview from "../assets/images/portfolio.webp";

//skripsi project gambar
import ObservasiImg from "../assets/images/imageProject/skripsi1.webp";
import DesainImg from "../assets/images/imageProject/skripsi2.webp";
import CodingImg from "../assets/images/imageProject/skripsi4.webp";
import DeployImg from "../assets/images/imageProject/skripsi5.webp";
import testingImg from "../assets/images/imageProject/skripsi3.webp";

//gerceplaundry foto
import gercepLaundry from "../assets/images/imageProject/gerceplaundry.webp";
import gercepLaundry1 from "../assets/images/imageProject/gerceplaundry1.webp";

//portfolio image
import portfolio1 from "../assets/images/imageProject/portfolio1.webp";
import portfolio2 from "../assets/images/imageProject/portfolio2.webp";

export const projectsData = [
  {
    slug: "courier-route",
    number: "01",
    title: "Courier Route Optimization",
    tag: "Thesis Project",
    gallery: [Jnt1, Jnt2],
    tech: ["React", "TypeScript", "Node.js", "Leaflet", "OSRM", "mysql", "API"],
    problem:
      "Kurir JNT Express Gajahmada Pontianak rata-rata mengantar 50–70 paket per hari dengan jarak tempuh 28–35 km dan waktu total pengantaran 6–7 jam. Urutan rute masih ditentukan manual berdasarkan pengalaman pribadi, memakan waktu 15–25 menit setiap hari sebelum kurir mulai bekerja, sehingga rute yang dihasilkan sering kali tidak efisien dan berdampak pada pemborosan jarak tempuh, waktu, serta bahan bakar.",
    process: [
      {
        title: "observasi",
        image: ObservasiImg,
        desc: "Melakukan wawancara dan observasi langsung terhadap kurir JNT Express Gajahmada Pontianak untuk mengumpulkan data operasional harian, kemudian menyusun kebutuhan fungsional dan non-fungsional sistem berdasarkan permasalahan nyata yang ditemukan di lapangan.",
      },
      {
        title: "Design System",
        image: DesainImg,
        desc: "Merancang arsitektur sistem client-server, alur data antar komponen (frontend, backend, database), serta desain algoritma Nearest Neighbor untuk optimasi urutan pengantaran berdasarkan data jarak.",
      },
      {
        title: "Algoritma & Development",
        image: CodingImg,
        desc: "Membangun sistem menggunakan React JS untuk frontend dan Express JS untuk backend, dengan MySQL sebagai basis data. Sistem dilengkapi fitur OCR berbasis Tesseract.js untuk ekstraksi alamat dari foto resi, Geoapify API untuk geocoding, serta OSRM dan Leaflet untuk perhitungan jarak dan visualisasi rute pada peta digital.",
      },
      {
        title: "Testing & Evaluasi",
        image: testingImg,
        desc: "Pengujian dilakukan menggunakan White Box Testing dan Black Box Testing dengan tingkat keberhasilan 94,1%. Hasil pengujian terhadap 10 skenario optimasi rute menunjukkan penghematan jarak tempuh rata-rata 22,6% dibanding rute manual, dengan waktu komputasi kurang dari 0,2 detik, sementara pengujian OCR pada 30 sampel resi mencapai akurasi karakter rata-rata 83,5%.",
      },
      {
        title: "Deployment",
        image: DeployImg,
        desc: "Membangun sistem menggunakan React JS untuk frontend dan Express JS untuk backend, dengan MySQL sebagai basis data. Dilengkapi OCR berbasis Tesseract.js untuk ekstraksi alamat dari foto resi, Geoapify API untuk geocoding, serta OSRM dan Leaflet untuk perhitungan jarak dan visualisasi rute.",
      }
    ],
    liveUrl: "https://rute-kurir-frontend-psi.vercel.app/",
    githubUrl: "https://github.com/RicardoCandra23214/rute-kurir",
    demoUrl: "https://youtu.be/FZeG8lW6t48?si=3CJm7m88GjXzLP5G",
  },
  {
    slug: "laundry-management",
    number: "02",
    title: "Laundry Management",
    tag: "CRUD Web Application",
    gallery: [LaundryPreview],
    tech: ["React", "Express.js", "MySQL", "Tailwind CSS"],
    problem:
      "Gercep Laundry, usaha jasa laundry di Pontianak, masih mencatat pesanan secara manual lewat WhatsApp atau kunjungan langsung pelanggan, sehingga riwayat pesanan sulit dikelola. Data pelanggan dan stok barang seperti deterjen dan pewangi juga tidak terdokumentasi secara sistematis, membuat pemilik usaha kesulitan memperoleh laporan pemasukan dan pengeluaran secara cepat untuk mendukung pengambilan keputusan bisnis.",
    process: [
      {
        title: "Observasi",
        image: gercepLaundry1,
        desc: "Tahap ini dimulai dari observasi langsung dan wawancara dengan pihak pengelola Gercep Laundry untuk memahami permasalahan utama dalam operasional, seperti pencatatan pesanan manual dan data stok yang tidak terpantau. Dari sini disusun user stories dan kebutuhan fitur utama: manajemen pesanan, pendataan pelanggan, manajemen stok barang, dan laporan keuangan..",
      },
      {
        title: "Design System",
        image: gercepLaundry,
        desc: "Perancangan dilakukan dengan memodelkan sistem menggunakan pendekatan berorientasi objek (UML), mulai dari pemodelan arsitektur hingga basis data. Desain antarmuka dirancang agar pelanggan dapat memesan layanan laundry dan melihat informasi harga dengan mudah, sementara sisi admin fokus pada kemudahan mengelola data pesanan dan keuangan.",
      },
      {
        title: "Coding",
        image: CodingImg,
        desc: "Implementasi dibangun menggunakan React.js di sisi frontend dan Node.js (Express.js) di sisi backend, dengan API sebagai penghubung antar keduanya. Kedua teknologi ini dipilih karena sama-sama menggunakan JavaScript, sehingga konsistensi antara frontend dan backend lebih terjaga dan proses integrasi data pesanan, pelanggan, serta stok barang menjadi lebih efisien.",
      },
      {
        title: "Testing & Evaluasi",
        image: gercepLaundry,
        desc: "Pengujian dilakukan menggunakan metode black box testing, yang berfokus pada kebutuhan fungsional sistem tanpa perlu memeriksa struktur kode secara internal. Setiap fitur diuji untuk memastikan alur pemesanan, pencatatan stok, dan laporan keuangan berjalan sesuai harapan sebelum sistem digunakan oleh pihak Gercep Laundry.",
      },
    ],
    liveUrl: "https://rute-kurir-frontend-psi.vercel.app/",
    githubUrl: "https://github.com/RicardoCandra23214/rute-kurir",
    demoUrl: "",
  },
  {
    slug: "personal-portfolio",
    number: "03",
    title: "Personal Portfolio",
    tag: "Personal Project",
    gallery: [PortfolioPreview],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    problem:
      "Sebagai fresh graduate, saya membutuhkan portofolio pribadi yang dapat menunjukkan project dan kemampuan teknis secara profesional kepada recruiter. Kebanyakan template portofolio yang tersedia secara online terasa generik dan kurang mencerminkan identitas personal, sehingga saya memutuskan membangun portofolio dari nol dengan desain custom yang lebih menonjolkan karakter dan cara kerja saya sebagai developer.",
    process: [
      {
        title: "Design System",
        image: portfolio1,
        desc: "Merancang tampilan custom di Figma dengan fokus pada hierarki visual yang jelas, mulai dari hero section yang langsung menonjolkan skill utama hingga struktur project yang mudah dipindai dalam beberapa detik pertama.",
      },
      {
        title: "Development",
        image: portfolio2,
        desc: "Diimplementasikan dengan React dan Tailwind CSS agar styling konsisten dan cepat dikembangkan, dilengkapi Framer Motion untuk animasi scroll-reveal. Setiap project memiliki halaman detail tersendiri menggunakan React Router, dijelaskan layaknya studi kasus, bukan sekadar daftar singkat.",
      },
    ],
    liveUrl: "blank",
    githubUrl: "blank",
    demoUrl: "",
  },
];