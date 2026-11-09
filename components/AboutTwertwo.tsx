import React from "react";
import { ClassInfo } from "@/types/portfolio";

interface AboutTwertwoProps {
  classInfo: ClassInfo;
}

export const AboutTwertwo: React.FC<AboutTwertwoProps> = ({ classInfo }) => {
  const { identity } = classInfo;

  return (
    <section
      className="py-20 bg-sky-100 border-b-2 border-brand-dark bg-grid-soft"
      data-purpose="class-identity"
      id="about-twertwo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Badge */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-brand-peach border-2 border-brand-dark rounded-lg shadow-brutal-sm font-display font-extrabold text-xs uppercase tracking-widest mb-3">
            SECTION 03 // OUR IDENTITY
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-brand-dark">
            {identity.headline}
          </h2>
        </div>

        {/* Identity Card Box with Neo-brutalist circle badge */}
        <div className="relative max-w-4xl mx-auto bg-white border-3 border-brand-dark rounded-3xl p-8 sm:p-12 shadow-brutal-lg">
          {/* Floating Class Badge on Top Right */}
          <div className="absolute -top-6 -right-4 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-green border-3 border-brand-dark flex flex-col items-center justify-center shadow-brutal rotate-12 hover:rotate-0 transition-transform select-none">
            <span className="font-display font-black text-xs sm:text-sm leading-tight text-black">
              {identity.badgeTop}
            </span>
            <span className="font-display font-black text-xs sm:text-sm leading-tight text-black">
              {identity.badgeBottom}
            </span>
          </div>

          <p className="text-lg sm:text-2xl font-display font-bold text-center leading-relaxed text-gray-900">
            <span className="underline decoration-wavy decoration-rose-500">
              {identity.highlightWord}
            </span>{" "}
            is the proud nickname of{" "}
            <span className="text-rose-600 font-extrabold underline">
              {classInfo.fullName} at {classInfo.school}
            </span>
            .
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-700 text-center font-medium leading-relaxed max-w-2xl mx-auto">
            {identity.description}
          </p>

          {/* Fun Stats Grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-t-2 border-brand-dark pt-8">
            {identity.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-3 bg-brand-cream border-2 border-brand-dark rounded-xl shadow-brutal-sm"
              >
                <span
                  className={`block font-display font-black text-3xl ${
                    stat.color || "text-brand-dark"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-gray-600 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Captured Moments Preview Strip */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-2.5 bg-rose-500 text-white font-display font-extrabold text-sm uppercase tracking-wider rounded-xl border-2 border-brand-dark shadow-brutal mb-8">
            {identity.moment.tag}
          </div>

          {/* Polaroid / Collage Visual Mockup */}
          <div className="relative max-w-4xl mx-auto flex items-center justify-center p-4">
            <div className="relative bg-white border-3 border-brand-dark rounded-2xl p-3 shadow-brutal-lg max-w-2xl transform hover:scale-[1.01] transition-transform w-full">
              <div className="overflow-hidden rounded-xl border-2 border-brand-dark aspect-video bg-gray-100 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={identity.moment.imageAlt}
                  className="w-full h-full object-cover"
                  src={identity.moment.imageUrl}
                />
              </div>
              <div className="pt-3 pb-1 px-2 flex flex-col sm:flex-row justify-between items-center font-display font-bold text-sm gap-2">
                <span>{identity.moment.title}</span>
                <span className="text-rose-500 font-mono-code font-bold">
                  {identity.moment.hashtag}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
