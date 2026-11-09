"use client";

import React, { useEffect } from "react";
import { Achievement } from "@/types/portfolio";

interface AchievementModalProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({
  achievement,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (achievement) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div
      className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-white border-3 border-brand-dark rounded-3xl p-6 sm:p-8 shadow-brutal-xl animate-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-rose-500 border-2 border-brand-dark flex items-center justify-center text-white font-black shadow-brutal-sm hover:scale-110 transition-transform cursor-pointer"
          title="Close Modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl p-2 bg-amber-100 rounded-xl border-2 border-brand-dark shadow-brutal-sm">
            {achievement.icon}
          </span>
          <span
            className={`font-mono-code text-xs font-bold ${achievement.badgeBg} border border-brand-dark px-2.5 py-1 rounded`}
          >
            {achievement.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-black text-2xl text-brand-dark mb-3">
          {achievement.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed font-medium mb-6">
          {achievement.fullDesc}
        </p>

        {/* Meta Grid */}
        <div className="bg-brand-cream border-2 border-brand-dark rounded-xl p-4 space-y-3 font-mono-code text-xs shadow-brutal-sm">
          <div>
            <span className="font-bold text-gray-500">Penerima / Tim:</span>
            <p className="font-bold text-brand-dark mt-0.5">{achievement.team}</p>
          </div>
          <div>
            <span className="font-bold text-gray-500">Keahlian &amp; Tools:</span>
            <p className="font-bold text-brand-dark mt-0.5 bg-gray-100 p-2 rounded border border-gray-300">
              {achievement.stack}
            </p>
          </div>
          <div>
            <span className="font-bold text-gray-500">Period / Batch:</span>
            <span className="block font-bold text-brand-dark">{achievement.year}</span>
          </div>
        </div>

        {/* Close Confirmation Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full py-3 bg-brand-dark text-white font-display font-bold text-sm rounded-xl border-2 border-brand-dark shadow-brutal hover:bg-gray-800 transition-colors cursor-pointer"
        >
          TUTUP INFORMASI
        </button>
      </div>
    </div>
  );
};
