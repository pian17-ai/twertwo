export interface StatItem {
  label: string;
  value: string;
  color?: string;
}

export interface ClassInfo {
  name: string;
  fullName: string;
  school: string;
  editionBadge: string;
  batchYear: string;
  headline: {
    prefix: string;
    badgeText: string;
    suffix: string;
  };
  subtitle: string;
  ctaAboutText: string;
  ctaStudentsText: string;
  terminal: {
    userHost: string;
    branch: string;
    command: string;
    output: string;
  };
  identity: {
    badgeTop: string;
    badgeBottom: string;
    headline: string;
    highlightWord: string;
    description: string;
    stats: StatItem[];
    moment: {
      tag: string;
      title: string;
      hashtag: string;
      imageUrl: string;
      imageAlt: string;
    };
  };
  socialLinks: {
    instagram?: string;
    spotify?: string;
    github?: string;
  };
}

export interface CurriculumPillar {
  id: string;
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  tags: {
    label: string;
    bg: string;
  }[];
}

export interface Student {
  id: string;
  name: string;
  classGrade: string;
  role: string;
  quote: string;
  born: string;
  github: string;
  avatar: string;
}

export interface Project {
  id: string;
  title: string;
  category: "web" | "mobile" | "games" | string;
  categoryLabel: string;
  categoryBadgeBg: string;
  team: string;
  teamColor?: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  techStack: {
    name: string;
    bg: string;
  }[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  cardPreviewBg?: string;
}

export interface Achievement {
  id: string;
  icon: string;
  badge: string;
  badgeBg: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  team: string;
  stack: string;
  year: string;
  buttonBg: string;
}

export interface PlaylistItem {
  id: string;
  title: string;
  artist: string;
}

export interface NavItem {
  label: string;
  href: string;
  hoverBg: string;
}

export interface PortfolioData {
  classInfo: ClassInfo;
  navItems: NavItem[];
  curriculumPillars: CurriculumPillar[];
  classManifestCode: {
    filename: string;
    status: string;
    codeLines: {
      text: string;
      indent?: number;
      isComment?: boolean;
    }[];
  };
  students: Student[];
  projects: Project[];
  projectCategories: {
    id: string;
    label: string;
  }[];
  achievements: Achievement[];
  playlist: PlaylistItem[];
  footer: {
    title: string;
    subtitle: string;
    copyright: string;
    dedication: string;
  };
}
