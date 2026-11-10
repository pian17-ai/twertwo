import { Achievement } from "@/types/portfolio";

// ==============================================================================
// DATA SECTION: ACHIEVEMENTS / HALL OF FAME
// Tambah atau edit prestasi kelas di sini.
// ==============================================================================

export const achievements: Achievement[] = [
  {
    id: "lks-web-tech",
    icon: "🏆",
    badge: "JUARA 1",
    badgeBg: "bg-amber-200",
    title: "LKS Web Technologies SMK Kota",
    shortDesc:
      "Representasi SMKN 64 dalam perancangan fullstack platform modern dengan arsitektur REST API dan UI neo-modern.",
    fullDesc:
      "Kompetisi Lomba Keterampilan Siswa (LKS) tingkat wilayah. Siswa Twertwo berhasil menyelesaikan modul Frontend, API integration, dan database management dalam waktu terbatas 6 jam berturut-turut.",
    team: "Farhan Akbar & Squad",
    stack: "PHP, Laravel, Tailwind CSS, MySQL",
    year: "2024",
    buttonBg: "bg-brand-green hover:bg-emerald-300",
  },
  {
    id: "hackathon-nasional",
    icon: "🥉",
    badge: "TOP 3",
    badgeBg: "bg-rose-200",
    title: "Hackathon Pelajar Nasional",
    shortDesc:
      "Inovasi aplikasi mobile edukasi inklusif berbasis gamifikasi untuk anak sekolah dasar di wilayah 3T.",
    fullDesc:
      "Kompetisi coding 48 jam non-stop merancang prototipe mobile app berdaya guna tinggi bernama 'BelajarKuy'. Diikuti oleh lebih dari 120 tim pelajar SMK/SMA se-Indonesia.",
    team: "Twertwo Dev Alpha",
    stack: "Flutter, Node.js, Express, MongoDB",
    year: "2024",
    buttonBg: "bg-brand-cyan hover:bg-sky-300",
  },
  {
    id: "vocational-ui-ux",
    icon: "🎨",
    badge: "BEST UI/UX",
    badgeBg: "bg-purple-200",
    title: "Vocational Tech Showcase",
    shortDesc:
      "Penghargaan desain pengalaman antarmuka digital paling intuitif dan berorientasi pada kepuasan pengguna.",
    fullDesc:
      "Karya desain platform sekolah digital terintegrasi dengan riset user persona, design system komprehensif di Figma, dan usability testing skor 92/100.",
    team: "Anaz Ramadhan & Creative",
    stack: "Figma, Adobe Illustrator, Protopie",
    year: "2024",
    buttonBg: "bg-brand-pink text-white hover:bg-rose-400",
  },
  {
    id: "bnsp-certification",
    icon: "📜",
    badge: "100% PASS",
    badgeBg: "bg-green-200",
    title: "Sertifikasi BNSP Junior Web Dev",
    shortDesc:
      "Seluruh siswa XII RPL 2 sukses tersertifikasi secara nasional oleh Badan Nasional Sertifikasi Profesi (BNSP).",
    fullDesc:
      "Uji kompetensi resmi mencakup penguasaan algoritma, pembuatan basis data relasional, pengkodean terstruktur, dan dokumentasi perangkat lunak standar industri.",
    team: "Semua Siswa (36 Orang)",
    stack: "Standar Kompetensi Kerja Nasional Indonesia (SKKNI)",
    year: "2024 - 2025",
    buttonBg: "bg-brand-peach hover:bg-amber-400",
  },
];
