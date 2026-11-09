import React from "react";
import { ClassInfo } from "@/types/portfolio";

interface HeroProps {
  classInfo: ClassInfo;
  studentCount: number;
}

export const Hero: React.FC<HeroProps> = ({ classInfo, studentCount }) => {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-24 border-b-2 border-brand-dark bg-dot-pattern"
      data-purpose="hero-section"
      id="hero"
    >
      {/* Decorative Floating Stickers */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-yellow/30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 -left-10 w-40 h-40 bg-brand-pink/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Upper Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-brand-dark rounded-full shadow-brutal-sm mb-8 transform -rotate-1">
          <span className="font-mono-code text-xs font-bold text-rose-500">
            {classInfo.editionBadge}
          </span>
          <span className="text-xs text-gray-400">•</span>
          <span className="font-mono-code text-xs font-bold text-gray-800">
            {classInfo.batchYear}
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-brand-dark leading-none">
            {classInfo.headline.prefix}{" "}
            <span className="inline-block px-3 py-1 bg-rose-400 text-white border-3 border-brand-dark rounded-xl shadow-brutal -rotate-2 transform hover:rotate-0 transition-transform">
              {classInfo.headline.badgeText}
            </span>
          </h1>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight">
              {classInfo.headline.suffix}
            </span>
            <div className="inline-flex items-center justify-center p-3 bg-brand-yellow border-2 border-brand-dark rounded-2xl shadow-brutal rotate-3 hover:rotate-6 transition-transform">
              <svg
                className="w-8 h-8 sm:w-11 sm:h-11 text-brand-dark"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-xl font-medium text-gray-700 max-w-2xl text-center italic">
          {classInfo.subtitle}
        </p>

        {/* Neo-Brutalist Main CTA Pills */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            className="btn-brutal inline-flex items-center gap-3 px-8 py-3.5 bg-brand-purple text-white font-display font-extrabold text-lg rounded-full border-2 border-brand-dark shadow-brutal"
            href="#about-twertwo"
          >
            <span>{classInfo.ctaAboutText.split(" ")[0]}</span>
            <span className="inline-flex items-center px-2 py-0.5 bg-brand-cyan text-black border border-brand-dark rounded text-sm font-black">
              {classInfo.ctaAboutText.split(" ")[1] || "Us"}
            </span>
            <span className="w-7 h-7 bg-brand-peach border border-brand-dark rounded-full flex items-center justify-center text-black">
              ➔
            </span>
          </a>
          <a
            className="btn-brutal inline-flex items-center gap-2 px-7 py-3.5 bg-brand-yellow text-brand-dark font-display font-extrabold text-lg rounded-full border-2 border-brand-dark shadow-brutal"
            href="#students"
          >
            <span>{classInfo.ctaStudentsText}</span>
            <span className="w-6 h-6 rounded-full bg-brand-dark text-white text-xs flex items-center justify-center">
              {studentCount}
            </span>
          </a>
        </div>

        {/* Terminal / Tech Badge Strip */}
        <div className="mt-12 w-full max-w-2xl bg-white border-2 border-brand-dark rounded-2xl p-4 shadow-brutal text-left">
          <div className="flex items-center justify-between pb-3 border-b-2 border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400 border border-brand-dark" />
              <span className="w-3 h-3 rounded-full bg-amber-400 border border-brand-dark" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 border border-brand-dark" />
              <span className="ml-2 font-mono-code text-xs font-bold text-gray-500">
                {classInfo.terminal.userHost}
              </span>
            </div>
            <span className="font-mono-code text-xs text-purple-600 font-bold">
              {classInfo.terminal.branch}
            </span>
          </div>
          <div className="pt-3 font-mono-code text-xs sm:text-sm text-gray-800 space-y-1">
            <p>
              <span className="text-emerald-600 font-bold">$</span>{" "}
              {classInfo.terminal.command}
            </p>
            <p className="text-gray-500">{classInfo.terminal.output}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
