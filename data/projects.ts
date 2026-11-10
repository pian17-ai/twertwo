import { Project } from "@/types/portfolio";

// ==============================================================================
// DATA SECTION: PROJECTS / KARYA KELAS
// Tambah atau edit proyek kelas di sini. Setiap proyek akan tampil di section Projects.
// ==============================================================================

export const projects: Project[] = [
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
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'%3E%3Crect width='600' height='350' fill='%23FDE047'/%3E%3Crect x='30' y='30' width='540' height='290' rx='16' fill='%23121212'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='26' fill='%23ffffff'%3E🎓 EDUPINTAR LMS%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%2338BDF8'%3ESchool Management %26amp; Interactive Learning%3C/text%3E%3C/svg%3E",
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
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'%3E%3Crect width='600' height='350' fill='%234ADE80'/%3E%3Crect x='30' y='30' width='540' height='290' rx='16' fill='%23121212'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='26' fill='%23ffffff'%3E♻️ YUKRECYCLE APP%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%234ADE80'%3ESmart Waste Pickup %26amp; Eco-Token%3C/text%3E%3C/svg%3E",
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
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'%3E%3Crect width='600' height='350' fill='%2338BDF8'/%3E%3Crect x='30' y='30' width='540' height='290' rx='16' fill='%23121212'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='26' fill='%23ffffff'%3E🛒 KASIRKU POS%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23FDE047'%3EPoint of Sale %26amp; Inventory Manager%3C/text%3E%3C/svg%3E",
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
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'%3E%3Crect width='600' height='350' fill='%23FB923C'/%3E%3Crect x='30' y='30' width='540' height='290' rx='16' fill='%23121212'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='26' fill='%23ffffff'%3E👾 PIXELQUEST RPG%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23FB923C'%3E2D Retro Browser Game %26amp; Logic%3C/text%3E%3C/svg%3E",
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
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'%3E%3Crect width='600' height='350' fill='%23A855F7'/%3E%3Crect x='30' y='30' width='540' height='290' rx='16' fill='%23121212'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='26' fill='%23ffffff'%3E📚 SMKN 64 LIBRARY HUB%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23F472B6'%3EDigital Catalog %26amp; RFID Borrowing%3C/text%3E%3C/svg%3E",
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
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'%3E%3Crect width='600' height='350' fill='%23F472B6'/%3E%3Crect x='30' y='30' width='540' height='290' rx='16' fill='%23121212'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='26' fill='%23ffffff'%3E🤖 TWERTWO BOT%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23F472B6'%3EDiscord Assistant %26amp; Automation Tool%3C/text%3E%3C/svg%3E",
    cardPreviewBg: "bg-rose-100",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "games", label: "Games & Tools" },
];
