import { classInfo, navItems, curriculumPillars, classManifestCode } from "@/data/classInfo";
import { students } from "@/data/students";
import { projects, projectCategories } from "@/data/projects";
import { achievements } from "@/data/achievements";
import { footer, playlist } from "@/data/footer";
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

        {/* Section 4: Students Roster */}
        <StudentsSection students={students} />

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
