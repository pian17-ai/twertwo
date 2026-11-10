"use client";

import React, { useEffect } from "react";
import { Student } from "@/types/portfolio";

interface StudentModalProps {
  student: Student | null;
  onClose: () => void;
}

export const StudentModal: React.FC<StudentModalProps> = ({ student, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (student) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [student, onClose]);

  if (!student) return null;

  return (
    <div
      className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md bg-white border-3 border-brand-dark rounded-3xl p-6 sm:p-8 shadow-brutal-xl animate-in zoom-in-95 duration-150">
        {/* GitHub Button */}
        <a
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-gray-900 border-2 border-brand-dark flex items-center justify-center shadow-brutal-sm hover:scale-110 transition-transform"
          href={student.github}
          target="_blank"
          rel="noreferrer"
          title={`Visit GitHub ${student.name}`}
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-rose-500 border-2 border-brand-dark flex items-center justify-center text-white font-black shadow-brutal-sm hover:scale-110 transition-transform cursor-pointer"
          title="Close Modal"
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center text-center mt-6">
          <div className="w-32 h-32 rounded-2xl border-3 border-brand-dark overflow-hidden mb-4 shadow-brutal bg-rose-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={student.name}
              className="w-full h-full object-cover"
              src={student.avatar}
            />
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-dark uppercase tracking-tight">
            {student.name}
          </h3>
          <p className="text-xs font-mono-code font-bold text-gray-500 mt-1">
            {student.role} • {student.classGrade}
          </p>

          <div className="w-full border-t-2 border-dashed border-gray-300 my-4" />

          {/* Quote Card */}
          <div className="bg-brand-cream border-2 border-brand-dark rounded-xl p-4 w-full shadow-brutal-sm">
            <p className="font-body text-sm sm:text-base italic font-semibold text-gray-800">
              &quot;{student.quote}&quot;
            </p>
          </div>

          {/* Birthday Badge */}
          <div className="mt-4 font-mono-code text-xs font-bold text-gray-500">
            BORN ON <span className="text-gray-700">{student.born}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
