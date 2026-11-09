import { PortfolioData } from "@/types/portfolio";

/**
 * ==============================================================================
 * PORTFOLIO DATA - XII RPL 2 SMKN 64 JAKARTA (TWERTWO)
 * ==============================================================================
 * File ini merupakan satu-satunya sumber data (Single Source of Truth) untuk seluruh
 * portofolio kelas. Anda dapat menambahkan siswa baru, proyek baru, atau prestasi
 * dengan cukup mengubah data di file ini tanpa perlu menyentuh komponen UI.
 */

export const portfolioData: PortfolioData = {
  // Informasi Umum Kelas & Hero Section
  classInfo: {
    name: "TWERTWO",
    fullName: "XII Rekayasa Perangkat Lunak 2",
    school: "SMKN 64 JAKARTA",
    editionBadge: "✨ XII RPL 2 EDITION",
    batchYear: "CLASS OF 2025",
    headline: {
      prefix: "Where",
      badgeText: "Cool",
      suffix: "Kids Hang Out",
    },
    subtitle:
      '"Welcome to Twertwo — The Official Digital Headquarters & Yearbook of XII RPL 2 at SMKN 64 JAKARTA."',
    ctaAboutText: "About Us",
    ctaStudentsText: "Meet The Squad",
    terminal: {
      userHost: "twertwo@smkn64-bash ~",
      branch: "git:(main)",
      command: 'git commit -m "Growing up together, debugging forever."',
      output: "[main a8f9c12] 36 future software engineers loaded with high ambition.",
    },
    identity: {
      badgeTop: "XII",
      badgeBottom: "RPL 2!",
      headline: "Who are Twertwo?",
      highlightWord: "Twertwo",
      description:
        "Twertwo is a gathering place for creative and talented individuals. We share memories, achievements, and grow together as a united community through lines of code, late night coffee, and unforgettable high school bonds.",
      stats: [
        { label: "Engineers", value: "36", color: "text-brand-dark" },
        { label: "Daily Bugs", value: "100+", color: "text-rose-500" },
        { label: "Laughter", value: "∞", color: "text-emerald-600" },
        { label: "Batch Year", value: "24/25", color: "text-purple-600" },
      ],
      moment: {
        tag: "CAPTURED MOMENTS & MEMORIES",
        title: "Classroom Hangout • SMKN 64 Jakarta",
        hashtag: "#TwertwoForever",
        imageUrl:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23bae6fd'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='28' fill='%230f172a'%3EXII RPL 2 SMKN 64 JAKARTA%3C/text%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%23334155'%3ETogether We Code, Together We Shine%3C/text%3E%3C/svg%3E",
        imageAlt: "XII RPL 2 Class photo together at SMKN 64 Jakarta",
      },
    },
    socialLinks: {
      instagram: "https://instagram.com",
      spotify: "https://spotify.com",
      github: "https://github.com",
    },
  },

  // Navigasi Utama Header
  navItems: [
    { label: "Home", href: "#hero", hoverBg: "hover:bg-gray-100" },
    { label: "About RPL", href: "#about-rpl", hoverBg: "hover:bg-brand-yellow" },
    { label: "About Twertwo", href: "#about-twertwo", hoverBg: "hover:bg-brand-cyan" },
    { label: "Students", href: "#students", hoverBg: "hover:bg-brand-green" },
    { label: "Projects", href: "#projects", hoverBg: "hover:bg-brand-purple" },
    { label: "Achievements", href: "#achievements", hoverBg: "hover:bg-brand-pink" },
  ],

  // 4 Pilar Kurikulum Rekayasa Perangkat Lunak (RPL)
  curriculumPillars: [
    {
      id: "frontend",
      icon: "🌐",
      iconBg: "bg-brand-yellow",
      title: "Frontend Sorcery",
      description:
        "Mengubah ide desain menjadi website interaktif, responsif, dan kilat menggunakan React, Tailwind CSS, HTML5, serta JavaScript modern.",
      tags: [
        { label: "React.js", bg: "bg-amber-100" },
        { label: "Tailwind", bg: "bg-sky-100" },
        { label: "Vite", bg: "bg-emerald-100" },
      ],
    },
    {
      id: "backend",
      icon: "⚙️",
      iconBg: "bg-brand-pink",
      title: "Backend & Data",
      description:
        "Membangun fondasi logika kokoh, RESTful API andal, keamanan autentikasi, serta manajemen database terstruktur MySQL & PostgreSQL.",
      tags: [
        { label: "Node.js", bg: "bg-pink-100" },
        { label: "Laravel", bg: "bg-purple-100" },
        { label: "SQL", bg: "bg-orange-100" },
      ],
    },
    {
      id: "mobile",
      icon: "📱",
      iconBg: "bg-brand-cyan",
      title: "Mobile Ecosystem",
      description:
        "Menciptakan aplikasi multi-platform yang mulus dan adaptif untuk Android dan iOS menggunakan Flutter, Kotlin, dan integrasi API mobile.",
      tags: [
        { label: "Flutter", bg: "bg-cyan-100" },
        { label: "Dart", bg: "bg-blue-100" },
        { label: "Firebase", bg: "bg-rose-100" },
      ],
    },
    {
      id: "agile",
      icon: "🤝",
      iconBg: "bg-brand-green",
      title: "Agile & Teamwork",
      description:
        "Memahami alur kerja tim modern dengan Git Version Control, Scrum sprints, standup harian, dan kolaborasi kode antar rekan sejawat.",
      tags: [
        { label: "Gitflow", bg: "bg-green-100" },
        { label: "Scrum", bg: "bg-amber-100" },
        { label: "Figma", bg: "bg-sky-100" },
      ],
    },
  ],

  // Kode Manifest Kelas di Terminal / Editor Mockup
  classManifestCode: {
    filename: "TwertwoClassManifest.js",
    status: "✔ Ready to Build",
    codeLines: [
      { text: 'const twertwoClass = {' },
      { text: 'name: "XII Rekayasa Perangkat Lunak 2",', indent: 1 },
      { text: 'school: "SMKN 64 JAKARTA",', indent: 1 },
      { text: "totalMembers: 36,", indent: 1 },
      { text: 'dailyMood: "Compile error? Santai dulu, solve bareng-bareng!",', indent: 1 },
      { text: "mission: function() {", indent: 1 },
      { text: 'return "To craft impactful digital solutions for Indonesia";', indent: 2 },
      { text: "}", indent: 1 },
      { text: "};" },
      { text: "// Output: Future Tech Leaders from SMKN 64 Jakarta 🚀", isComment: true },
    ],
  },

  // Kategori Siswa untuk Filter
  studentCategories: [
    { id: "all", label: "All Students" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile & Game" },
    { id: "creative", label: "UI/UX & QA" },
  ],

  // Daftar Siswa Twertwo (Data Roster)
  students: [
    {
      id: "farhan-akbar",
      name: "FARHAN AKBAR F.",
      classGrade: "XII RPL 2",
      role: "Fullstack Explorer & LKS Finalist",
      category: "frontend",
      categoryLabel: "Fullstack",
      categoryBadgeBg: "bg-brand-yellow",
      quote: "Belajar dari kesalahan adalah kunci untuk menjadi lebih baik.",
      born: "10 MEI 2000",
      instagram: "@farhanakbr",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBFf0gEmADBrg_wzS_WvOK9_PH1IT9-v5jnEG8J4hMR7KgapBaCxutJq_dsl-ayEdDcD-iZ5j8Ij_O9f_JoGcuWcQ0GtJf1vhArajUSLI9YL949Sk-ZI6muonfwKkYn9bgVFRnnMdgm8kaZAVV3lMQSM7jcdpnFiwNynRVvtg6B5AyFI6ioEh5i3L-hc0Rk84XXS5JNNtIefX7EA5rcHp9tCr8bfSGlU4kLt0Yi4cI",
    },
    {
      id: "yazid-hazami",
      name: "M. YAZID HAZAMI",
      classGrade: "XII RPL 2",
      role: "Frontend Crafter",
      category: "frontend",
      categoryLabel: "Frontend",
      categoryBadgeBg: "bg-brand-green",
      quote: "Coding santai, hasil bantai. Tetap konsisten walau ngantuk.",
      born: "14 APRIL 2007",
      instagram: "@yazidhzm",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAxU-XrD6n9dkPC2I1QX8BdyJW2QSdtkMBeMD6bre45gaygoYIItSy-9G83pI8WPZr-5e_d5_pczzQHVxzZIE8Bnxcw5A4HJGacE2gENqjedLPwKUP5CJAf_Uw-v0__mc1yRPlCWpURe3M9wCIfZWU-kda_ZEPmxEc4DGrDOl0URBIyxQE4B8G8S1ZuaiUQGpT73zPjTGQmrhnXQ8OjjW5V4uFYSDgfNSp14k-UtFk",
    },
    {
      id: "leo-dimas",
      name: "LEO DIMAS PAMUNGKAS",
      classGrade: "XII RPL 2",
      role: "Backend Architect",
      category: "backend",
      categoryLabel: "Backend",
      categoryBadgeBg: "bg-brand-pink text-white",
      quote: "Server boleh down sesaat, semangat pantang tumbang selamanya.",
      born: "22 AGUSTUS 2006",
      instagram: "@leodimas.p",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC_pNDvzGEFyuP-4SEMMo6OgK8S9GyZp06_9f2_t90CHzmRaFLlOLk922SVPcZUjZU-OWtQWh0zVDG2rT4A0VeujgIu7p9I_IEO5DOA8QSFDk76dtoXrmaeq7Nw4EKTzY_dyigobgGsrl5SACyu_b3HadQj7cObIgp6rjYdtfiR1vFPkp03hpq8d-bpkZOqc0gtW05Rahz539vU4hg9pv4pFJzEkEz0vRHC1cu_FG4",
    },
    {
      id: "rayvanes-arrasyid",
      name: "RAYVANES ARRASYID",
      classGrade: "XII RPL 2",
      role: "Mobile Developer (Flutter)",
      category: "mobile",
      categoryLabel: "Mobile",
      categoryBadgeBg: "bg-brand-cyan",
      quote: "Tetap hidup dan terus ngulik walau error bertubi-tubi.",
      born: "05 MARET 2007",
      instagram: "@rayvanes",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEzOUnCRvQ2BAlswUHrAInpYSLDSY-I176n8_nGs5I8uOz1zfvGLQUB3AQv7x13s3BvHVSsJyW1L7b6Y9tnCpsPFnPsJl4EjAkhF5t_l4gzljo87t9bQJFsd2izVvR09cF-ah9DNgql_4sUod-F4JYoU97NrW-BH7egKZAqtKPrNR4N5AVYJE7p1_okd8pLkjhUHSR3LNalHUbRKoQh5wivFEkAL2KngNCASMuXOw",
    },
    {
      id: "anaz-ramadhan",
      name: "ANAZ RAMADHAN LUBERTO",
      classGrade: "XII RPL 2",
      role: "Creative UI/UX Engineer",
      category: "creative",
      categoryLabel: "UI/UX",
      categoryBadgeBg: "bg-brand-yellow",
      quote: "Desain adalah seni menyelesaikan masalah tanpa membuat pengguna pusing.",
      born: "18 OKTOBER 2006",
      instagram: "@anazluberto",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZeXdob1ZNrWL4JzsrXwUKpXD4MvvnXb9Gx2R0ie-FLHdjqT0HE5jaGV6DxyuS0GsLghQXEYGts5vEDp4t7OqLKVvrnlWntSlkS_jJ-lIcmKYnWCtgomHAl64027P2_-o_q-NRN6DeJ2gYOfM-agaHHLKCgsRNcb53wrxO6dIJxYj6jiNDldbOmy52B8MgLfnIRR8zKLg1Z-i7h7IuiZ6mJSU7fLrPDmy6kk6MkT4",
    },
    {
      id: "akhtar-abdillah",
      name: "M. AKHTAR ABDILLAH",
      classGrade: "XII RPL 2",
      role: "DevOps & Cloud Enthusiast",
      category: "backend",
      categoryLabel: "DevOps",
      categoryBadgeBg: "bg-brand-purple text-white",
      quote: "Automate everything, sleep peacefully while the CI/CD pipeline works.",
      born: "02 JULI 2006",
      instagram: "@akhtar.abdillah",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA5T_RCVOhnwKGUi25Cc3308sJqV5AWxkROQzdG5BiMeAf-qUyf9prrjHvKlz4tXq2oy6vLNYWFzVgQiVu2GTgrZ2IN7RhAuZoEg2dEP8L8Zja-Fmm6SWXRQ89EoIaRBNPytOImh4s1ccUFZahkqZDfD4LoOb9fSYqYUeh_gEVchoDhjtdNK-Q74uXM4na8CBv8ofpPcnrPihyUUK8PXXHFfsj8NyFHbKBemWGrYh4",
    },
    {
      id: "ramadhan-pw",
      name: "M. RAMADHAN P.W.",
      classGrade: "XII RPL 2",
      role: "Quality Assurance & Logic",
      category: "creative",
      categoryLabel: "QA Tester",
      categoryBadgeBg: "bg-brand-green",
      quote: "Jangan biarkan bug sekecil apapun lolos ke production!",
      born: "12 NOVEMBER 2006",
      instagram: "@ramadhan.pw",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBDoUwfOwWxFlNUwv6YsVtJheklfB6ShAn236-MWuSW71BMGpQSQp5L4NR8xV_fokGnN_RTQm3X2xHSa86KjpfzTasZAPHLr2T0zL2JwHxQvZkhBsB-pzmbiAfkq4kbcJwXWnHQDtT8JwdAwNaTpLJdroPW2A369w5IGS4clY64N3pW5jh2ngnW9jncCBT882vwk1Ks3rBi9DXZ-2ei9fzhyBb2mOyOKabb6_h-fb4",
    },
    {
      id: "farrel-reno",
      name: "FARREL RENO P.P.",
      classGrade: "XII RPL 2",
      role: "Game Logic & Creative Dev",
      category: "mobile",
      categoryLabel: "Game Dev",
      categoryBadgeBg: "bg-brand-peach text-black",
      quote: "Pixels and logic make dreams come true.",
      born: "30 JANUARI 2007",
      instagram: "@farrelreno",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCxc0i5pdYEUN5upjz_w9ABzKUgFfENevM3aASLq6HfH27Rm3r0uyeeDtH5YbIjkRlMj01AvFEu3S797-mFl-n7yDE3Ber5yubPU7nw-iAMJCCAU0coQ_gLInK0Tuf7I4ESF-DVcBHTlCM2tzjm-wB_jlpcWSVyYYWYIXlZrTesNZJjKyRhiZyMdrtga7Hg2ChmxmSvxrdl92hm8NJPEfodi4-C1wZWhQAJKgrqjvM",
    },
  ],

  // Kategori Proyek untuk Filter
  projectCategories: [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "games", label: "Games & Tools" },
  ],

  // Daftar Karya / Portofolio Proyek Kelas
  projects: [
    {
      id: "edupintar-lms",
      title: "EduPintar - LMS Platform",
      category: "web",
      categoryLabel: "Web App",
      categoryBadgeBg: "bg-brand-yellow",
      team: "Farhan Akbar & Yazid Hazami",
      teamColor: "text-purple-600",
      shortDesc:
        "Platform Learning Management System cerdas dengan submission tugas instan, kuis adaptif, dan dashboard analitik nilai siswa terpadu.",
      fullDesc:
        "EduPintar adalah platform Learning Management System modern yang dirancang untuk sekolah kejuruan, dilengkapi modul kuis interaktif real-time, submission tugas otomatis, dan grading transparan.",
      features: [
        "Realtime Quiz with WebSockets",
        "Automatic Code Evaluator",
        "Student Performance Analytics",
        "Responsive Multi-device UI",
      ],
      techStack: [
        { name: "React.js", bg: "bg-amber-100" },
        { name: "Laravel", bg: "bg-purple-100" },
        { name: "Tailwind", bg: "bg-sky-100" },
      ],
      githubUrl: "https://github.com/smkn64-twertwo/edupintar-lms",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'%3E%3Crect width='600' height='350' fill='%23FDE047'/%3E%3Crect x='30' y='30' width='540' height='290' rx='16' fill='%23121212'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='26' fill='%23ffffff'%3E🎓 EDUPINTAR LMS%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%2338BDF8'%3ESchool Management &amp; Interactive Learning%3C/text%3E%3C/svg%3E",
      cardPreviewBg: "bg-amber-100",
    },
    {
      id: "yukrecycle-app",
      title: "YukRecycle - Smart Waste",
      category: "mobile",
      categoryLabel: "Mobile App",
      categoryBadgeBg: "bg-brand-green",
      team: "Rayvanes Arrasyid & Anaz Ramadhan",
      teamColor: "text-emerald-600",
      shortDesc:
        "Solusi mobile ramah lingkungan untuk penjemputan daur ulang sampah dengan penukaran poin reward dan rute driver real-time.",
      fullDesc:
        "Aplikasi mobile untuk penjemputan sampah anorganik sekolah & perumahan. Menggunakan pemetaan GPS, reward token daur ulang, serta sistem tracking driver secara live.",
      features: [
        "Live GPS Waste Pickup",
        "QR Code Verification",
        "Eco-Points & Rewards",
        "Offline Support",
      ],
      techStack: [
        { name: "Flutter", bg: "bg-cyan-100" },
        { name: "Firebase", bg: "bg-rose-100" },
        { name: "Maps API", bg: "bg-emerald-100" },
      ],
      githubUrl: "https://github.com/smkn64-twertwo/yukrecycle-app",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'%3E%3Crect width='600' height='350' fill='%234ADE80'/%3E%3Crect x='30' y='30' width='540' height='290' rx='16' fill='%23121212'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='26' fill='%23ffffff'%3E♻️ YUKRECYCLE APP%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%234ADE80'%3ESmart Waste Pickup &amp; Eco-Token%3C/text%3E%3C/svg%3E",
      cardPreviewBg: "bg-green-100",
    },
    {
      id: "kasirku-pos",
      title: "KasirKu POS System",
      category: "web",
      categoryLabel: "Web App",
      categoryBadgeBg: "bg-brand-cyan",
      team: "Leo Dimas & M. Ramadhan P.W.",
      teamColor: "text-sky-600",
      shortDesc:
        "Aplikasi kasir kilat dengan analitik stok, barcode scanner responsif, dan pelaporan keuangan laba rugi otomatis.",
      fullDesc:
        "Sistem Point of Sale modern dan super ringan untuk kantin sekolah serta UMKM binaan SMKN 64 Jakarta dengan pencatatan inventori otomatis & struk digital via Bluetooth.",
      features: [
        "Fast Barcode Scanner",
        "Bluetooth Thermal Printer integration",
        "Daily Profit/Loss Reports",
        "Multi-cashier roles",
      ],
      techStack: [
        { name: "Next.js", bg: "bg-sky-100" },
        { name: "Postgres", bg: "bg-orange-100" },
        { name: "Prisma", bg: "bg-amber-100" },
      ],
      githubUrl: "https://github.com/smkn64-twertwo/kasirku-pos",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'%3E%3Crect width='600' height='350' fill='%2338BDF8'/%3E%3Crect x='30' y='30' width='540' height='290' rx='16' fill='%23121212'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='26' fill='%23ffffff'%3E🛒 KASIRKU POS%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23FDE047'%3EPoint of Sale &amp; Inventory Manager%3C/text%3E%3C/svg%3E",
      cardPreviewBg: "bg-sky-100",
    },
    {
      id: "pixelquest-rpg",
      title: "PixelQuest 2D RPG",
      category: "games",
      categoryLabel: "Game",
      categoryBadgeBg: "bg-brand-peach text-black",
      team: "Farrel Reno & M. Yazid",
      teamColor: "text-orange-600",
      shortDesc:
        "Petualangan retro 16-bit dengan pertarungan berbasis turn-based logic untuk mengalahkan monster syntax error.",
      fullDesc:
        "Game 2D berbasis peramban (browser) bergenre retro turn-based RPG yang menceritakan petualangan programmer SMK menaklukkan monster 'Bug', 'NullPointer', dan 'SyntaxError'.",
      features: [
        "Custom Pixel Art Sprites",
        "Dynamic Turn-based Battle Engine",
        "Save/Load LocalStorage System",
        "Chiptune Music Synth",
      ],
      techStack: [
        { name: "Canvas", bg: "bg-amber-100" },
        { name: "JavaScript", bg: "bg-yellow-100" },
        { name: "WebAudio", bg: "bg-purple-100" },
      ],
      githubUrl: "https://github.com/smkn64-twertwo/pixelquest-rpg",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'%3E%3Crect width='600' height='350' fill='%23FB923C'/%3E%3Crect x='30' y='30' width='540' height='290' rx='16' fill='%23121212'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='26' fill='%23ffffff'%3E👾 PIXELQUEST RPG%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23FB923C'%3E2D Retro Browser Game &amp; Logic%3C/text%3E%3C/svg%3E",
      cardPreviewBg: "bg-orange-100",
    },
    {
      id: "smkn64-library",
      title: "SMKN 64 Library Hub",
      category: "web",
      categoryLabel: "Web App",
      categoryBadgeBg: "bg-brand-purple text-white",
      team: "M. Akhtar Abdillah & Leo Dimas",
      teamColor: "text-purple-600",
      shortDesc:
        "Platform otomasi perpustakaan sekolah dengan peminjaman mandiri via QR, denda otomatis, dan notifikasi buku.",
      fullDesc:
        "Katalog buku perpustakaan digital SMKN 64 dengan fitur self-borrowing menggunakan scanner kartu pelajar RFID/NFC & notifikasi pengembalian via bot Telegram.",
      features: [
        "Student ID Card RFID Scan",
        "Telegram Notification Webhook",
        "Fine Penalty Calculator",
        "Comprehensive ISBN Catalog",
      ],
      techStack: [
        { name: "Vue.js", bg: "bg-emerald-100" },
        { name: "Express", bg: "bg-pink-100" },
        { name: "Telegram", bg: "bg-sky-100" },
      ],
      githubUrl: "https://github.com/smkn64-twertwo/smkn64-library",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'%3E%3Crect width='600' height='350' fill='%23A855F7'/%3E%3Crect x='30' y='30' width='540' height='290' rx='16' fill='%23121212'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='26' fill='%23ffffff'%3E📚 SMKN 64 LIBRARY HUB%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23F472B6'%3EDigital Catalog &amp; RFID Borrowing%3C/text%3E%3C/svg%3E",
      cardPreviewBg: "bg-purple-100",
    },
    {
      id: "twertwo-discord-bot",
      title: "Twertwo Discord Bot",
      category: "games",
      categoryLabel: "Tools",
      categoryBadgeBg: "bg-brand-pink text-white",
      team: "Akhtar Abdillah & Farrel Reno",
      teamColor: "text-rose-600",
      shortDesc:
        "Bot otomasi server Discord kelas dengan fitur pengingat tugas, reminder piket harian, dan musik server 24/7.",
      fullDesc:
        "Asisten bot Discord resmi komunitas kelas XII RPL 2 untuk jadwal piket otomatis, reminder deadline tugas coding, reminder countdown ujian, dan pemutar musik voice channel.",
      features: [
        "Class Schedule & Homework Reminder",
        "AI Code Explainer (/ask)",
        "Voice Channel High-Fi Music",
        "Custom Mini Mini-Games",
      ],
      techStack: [
        { name: "Node.js", bg: "bg-pink-100" },
        { name: "Discord.js", bg: "bg-indigo-100" },
        { name: "Docker", bg: "bg-rose-100" },
      ],
      githubUrl: "https://github.com/smkn64-twertwo/twertwo-discord-bot",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'%3E%3Crect width='600' height='350' fill='%23F472B6'/%3E%3Crect x='30' y='30' width='540' height='290' rx='16' fill='%23121212'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='26' fill='%23ffffff'%3E🤖 TWERTWO BOT%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23F472B6'%3EDiscord Assistant &amp; Automation Tool%3C/text%3E%3C/svg%3E",
      cardPreviewBg: "bg-rose-100",
    },
  ],

  // Prestasi & Hall of Fame
  achievements: [
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
  ],

  // Playlist Lagu Pengiring (Music Player Widget)
  playlist: [
    { id: "1", title: "TUJUH BELAS", artist: "TULUS" },
    { id: "2", title: "KITA BIKIN ROMANTIS", artist: "MALIQ & D'ESSENTIALS" },
    { id: "3", title: "MONOKROM", artist: "TULUS" },
  ],

  // Footer Informasi
  footer: {
    title: "TWERTWO • XII RPL 2",
    subtitle: "Rekayasa Perangkat Lunak SMKN 64 JAKARTA",
    dedication: "Twertwo Class 2024/2025",
    copyright: "© 2025 SMKN 64 Jakarta. All rights reserved.",
  },
};
