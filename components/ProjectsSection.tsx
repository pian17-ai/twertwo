"use client";

import React, { useState, useMemo } from "react";
import { Project } from "@/types/portfolio";
import { ProjectModal } from "./modals/ProjectModal";

interface ProjectsSectionProps {
  projects: Project[];
  categories: { id: string; label: string }[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section
      className="py-20 bg-brand-cream border-b-2 border-brand-dark relative"
      data-purpose="projects-showcase"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-brand-purple text-white border-2 border-brand-dark rounded-lg shadow-brutal-sm font-display font-extrabold text-xs uppercase tracking-widest mb-3">
            SECTION 04 // FEATURED PROJECTS
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-brand-dark uppercase">
            Built by Twertwo Minds
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-700 font-medium max-w-2xl">
            Kumpulan karya inovatif dan produk digital nyata yang dirancang serta dikembangkan oleh siswa-siswi XII RPL 2 SMKN 64 Jakarta.
          </p>
        </div>

        {/* Projects Filter Tabs */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          id="project-filter-container"
        >
          {categories.map((cat) => {
            const count =
              cat.id === "all"
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`filter-btn px-4 py-2 font-display font-bold text-xs uppercase rounded-lg border-2 border-brand-dark shadow-brutal-sm transition-colors cursor-pointer ${
                  isActive
                    ? "bg-brand-dark text-white"
                    : "bg-white hover:bg-brand-yellow text-brand-dark"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="project-cards-grid"
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card group bg-white border-3 border-brand-dark rounded-3xl p-5 shadow-brutal-lg flex flex-col justify-between hover:-translate-y-1.5 transition-all"
            >
              <div>
                <div
                  className={`aspect-video w-full rounded-2xl border-2 border-brand-dark overflow-hidden mb-4 relative ${
                    project.cardPreviewBg || "bg-amber-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={project.image}
                    loading="lazy"
                  />
                  <span
                    className={`absolute top-3 right-3 ${project.categoryBadgeBg} font-mono-code font-bold text-[10px] px-2.5 py-1 rounded-md border border-brand-dark shadow-brutal-sm uppercase`}
                  >
                    {project.categoryLabel}
                  </span>
                </div>

                <div
                  className={`text-[11px] font-mono-code font-bold ${
                    project.teamColor || "text-purple-600"
                  } mb-1`}
                >
                  By {project.team}
                </div>

                <h3 className="font-display font-black text-xl text-brand-dark mb-2 leading-tight">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className={`text-[10px] font-mono-code font-bold ${tech.bg} border border-brand-dark px-2 py-0.5 rounded`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t-2 border-gray-100">
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="project-detail-btn py-2 px-3 bg-brand-cyan text-brand-dark font-display font-black text-xs rounded-xl border-2 border-brand-dark shadow-brutal-sm hover:bg-brand-yellow transition-colors cursor-pointer text-center"
                >
                  DETAILS →
                </button>
                {project.githubUrl && (
                  <a
                    className="py-2 px-3 bg-brand-dark text-white font-display font-bold text-xs rounded-xl border-2 border-brand-dark shadow-brutal-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-1.5 text-center"
                    href={project.githubUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>REPO</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
