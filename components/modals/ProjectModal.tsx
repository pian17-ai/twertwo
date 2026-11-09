"use client";

import React, { useEffect } from "react";
import { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white border-3 border-brand-dark rounded-3xl p-6 sm:p-8 shadow-brutal-xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-rose-500 border-2 border-brand-dark flex items-center justify-center text-white font-black shadow-brutal-sm hover:scale-110 transition-transform cursor-pointer z-10"
          title="Close Modal"
        >
          ✕
        </button>

        {/* Project Image */}
        <div className="aspect-video w-full rounded-2xl border-2 border-brand-dark overflow-hidden mb-5 bg-gray-100 shadow-brutal-sm relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={project.title}
            className="w-full h-full object-cover"
            src={project.image}
          />
        </div>

        {/* Badges / Meta */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-mono-code text-xs font-bold text-purple-600 uppercase">
            By {project.team}
          </span>
          <span className="text-gray-300">•</span>
          <span
            className={`font-mono-code text-xs font-bold ${project.categoryBadgeBg} px-2 py-0.5 rounded border border-brand-dark`}
          >
            {project.categoryLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-dark tracking-tight mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          {project.fullDesc}
        </p>

        {/* Tech Stack Chips */}
        <div className="mb-5">
          <span className="block font-mono-code text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Technology Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech.name}
                className={`text-xs font-mono-code font-bold ${tech.bg} border border-brand-dark px-2.5 py-1 rounded-md shadow-brutal-sm`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-brand-cream border-2 border-brand-dark rounded-xl p-4 mb-6 shadow-brutal-sm">
          <h4 className="font-display font-black text-xs uppercase tracking-wider text-gray-600 mb-2">
            Key Architecture &amp; Features:
          </h4>
          <ul className="list-disc list-inside space-y-1 font-mono-code text-xs text-gray-800">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {project.githubUrl && (
            <a
              className="flex-1 py-3 px-4 bg-brand-dark text-white font-display font-bold text-sm rounded-xl border-2 border-brand-dark shadow-brutal hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-center"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>EXPLORE REPOSITORY</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="py-3 px-6 bg-brand-cream border-2 border-brand-dark rounded-xl font-display font-bold text-sm shadow-brutal-sm hover:bg-gray-100 transition-colors cursor-pointer text-center"
          >
            TUTUP
          </button>
        </div>
      </div>
    </div>
  );
};
