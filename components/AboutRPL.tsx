import React from "react";
import { CurriculumPillar, PortfolioData } from "@/types/portfolio";

interface AboutRPLProps {
  curriculumPillars: CurriculumPillar[];
  classManifestCode: PortfolioData["classManifestCode"];
}

export const AboutRPL: React.FC<AboutRPLProps> = ({
  curriculumPillars,
  classManifestCode,
}) => {
  return (
    <section
      className="py-20 bg-brand-cream border-b-2 border-brand-dark"
      data-purpose="curriculum-overview"
      id="about-rpl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-brand-cyan border-2 border-brand-dark rounded-lg shadow-brutal-sm font-display font-extrabold text-xs uppercase tracking-widest mb-4">
            SECTION 02 // CURRICULUM &amp; PASSION
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-brand-dark">
            What is Rekayasa Perangkat Lunak (RPL)?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 font-medium">
            RPL (Software Engineering) di SMKN 64 Jakarta bukan sekadar menulis baris kode. Kami dilatih merancang arsitektur sistem, memecahkan permasalahan nyata, dan membangun produk digital kelas industri.
          </p>
        </div>

        {/* 4 Pillars Neo-Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculumPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white border-2 border-brand-dark rounded-2xl p-6 shadow-brutal flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl ${pillar.iconBg} border-2 border-brand-dark flex items-center justify-center font-display font-black text-xl shadow-brutal-sm mb-4`}
                >
                  {pillar.icon}
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-brand-dark">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-4 border-t-2 border-gray-100 flex flex-wrap gap-1.5">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`text-[11px] font-mono-code font-bold ${tag.bg} border border-brand-dark px-2 py-0.5 rounded`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Code Snippet Mockup */}
        <div className="mt-12 bg-gray-900 border-2 border-brand-dark rounded-2xl shadow-brutal-lg overflow-hidden max-w-4xl mx-auto">
          <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b-2 border-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="font-mono-code text-xs text-gray-400 ml-2">
                {classManifestCode.filename}
              </span>
            </div>
            <span className="font-mono-code text-xs font-bold text-emerald-400">
              {classManifestCode.status}
            </span>
          </div>
          <div className="p-6 font-mono-code text-xs sm:text-sm text-gray-200 overflow-x-auto leading-relaxed">
            {classManifestCode.codeLines.map((line, idx) => (
              <p
                key={idx}
                className={`${line.indent === 1 ? "pl-4" : line.indent === 2 ? "pl-8" : ""} ${
                  line.isComment ? "text-gray-500 mt-2" : ""
                }`}
              >
                {line.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
