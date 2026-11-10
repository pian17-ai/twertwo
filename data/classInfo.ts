import { ClassInfo, NavItem, CurriculumPillar } from "@/types/portfolio";

// ==============================================================================
// DATA SECTION: CLASS INFO, NAVBAR & KURIKULUM
// Edit file ini untuk mengubah informasi umum kelas, navigasi, dan 4 pilar RPL.
// ==============================================================================

export const classInfo: ClassInfo = {
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
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero", hoverBg: "hover:bg-gray-100" },
  { label: "About RPL", href: "#about-rpl", hoverBg: "hover:bg-brand-yellow" },
  { label: "About Twertwo", href: "#about-twertwo", hoverBg: "hover:bg-brand-cyan" },
  { label: "Students", href: "#students", hoverBg: "hover:bg-brand-green" },
  { label: "Projects", href: "#projects", hoverBg: "hover:bg-brand-purple" },
  { label: "Achievements", href: "#achievements", hoverBg: "hover:bg-brand-pink" },
];

export const curriculumPillars: CurriculumPillar[] = [
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
];

export const classManifestCode = {
  filename: "TwertwoClassManifest.js",
  status: "✔ Ready to Build",
  codeLines: [
    { text: "const twertwoClass = {" },
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
};
