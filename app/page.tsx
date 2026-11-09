import { portfolioData } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutRPL } from "@/components/AboutRPL";
import { AboutTwertwo } from "@/components/AboutTwertwo";
import { StudentsSection } from "@/components/StudentsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { Footer } from "@/components/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";

export default function Home() {
  const {
    classInfo,
    navItems,
    curriculumPillars,
    classManifestCode,
    students,
    studentCategories,
    projects,
    projectCategories,
    achievements,
    playlist,
    footer,
  } = portfolioData;

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#121212]">
      {/* Top Navigation Bar with Mobile Drawer */}
      <Navbar classInfo={classInfo} navItems={navItems} />

      {/* Main Portfolio Content */}
      <main className="flex-1">
        {/* Section 1: Hero Banner */}
        <Hero classInfo={classInfo} studentCount={students.length} />

        {/* Section 2: About RPL Curriculum */}
        <AboutRPL
          curriculumPillars={curriculumPillars}
          classManifestCode={classManifestCode}
        />

        {/* Section 3: About Twertwo (Class Identity) */}
        <AboutTwertwo classInfo={classInfo} />

        {/* Section 4: Students Roster (Interactive & Filterable) */}
        <StudentsSection
          students={students}
          categories={studentCategories}
        />

        {/* Section 5: Featured Projects Showcase */}
        <ProjectsSection
          projects={projects}
          categories={projectCategories}
        />

        {/* Section 6: Hall of Fame (Achievements) */}
        <AchievementsSection achievements={achievements} />
      </main>

      {/* Footer */}
      <Footer footer={footer} />

      {/* Interactive Music Player Widget */}
      <MusicPlayer playlist={playlist} />
    </div>
  );
}
