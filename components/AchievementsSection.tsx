"use client";

import React, { useState } from "react";
import { Achievement } from "@/types/portfolio";
import { AchievementModal } from "./modals/AchievementModal";

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  achievements,
}) => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(
    null
  );

  return (
    <section
      className="py-20 bg-brand-yellow border-b-2 border-brand-dark bg-dot-pattern"
      data-purpose="hall-of-fame"
      id="achievements"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-brand-dark text-white border-2 border-brand-dark rounded-lg shadow-brutal-sm font-display font-extrabold text-xs uppercase tracking-widest mb-3">
            SECTION 05 // HALL OF FAME
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-brand-dark uppercase italic">
            OUR HALL OF FAME
          </h2>
          <p className="mt-3 text-base sm:text-lg font-bold text-gray-800">
            Bukti dedikasi, kerja keras, dan karya nyata siswa-siswi Twertwo di kompetisi LKS, Hackathon, dan sertifikasi keahlian.
          </p>
        </div>

        {/* Achievement Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-white border-3 border-brand-dark rounded-2xl p-6 shadow-brutal flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span
                    className={`font-mono-code text-xs font-bold ${item.badgeBg} border border-brand-dark px-2 py-0.5 rounded shadow-brutal-sm`}
                  >
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-display font-black text-xl mb-2 leading-tight text-brand-dark">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 mb-4 font-medium">
                  {item.shortDesc}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono-code font-bold text-gray-500 mb-3">
                  {item.team}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedAchievement(item)}
                  className={`achievement-detail-btn w-full py-2.5 ${item.buttonBg} border-2 border-brand-dark rounded-xl font-display font-bold text-xs shadow-brutal-sm transition-colors cursor-pointer text-center`}
                >
                  SHOW DETAILS →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Detail Modal */}
      <AchievementModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
};
