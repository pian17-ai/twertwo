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

  const instagramHandle = student.instagram.replace("@", "");

  return (
    <div
      className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md bg-white border-3 border-brand-dark rounded-3xl p-6 sm:p-8 shadow-brutal-xl animate-in zoom-in-95 duration-150">
        {/* Instagram Pill Button */}
        <a
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-rose-400 border-2 border-brand-dark flex items-center justify-center shadow-brutal-sm hover:scale-110 transition-transform"
          href={`https://instagram.com/${instagramHandle}`}
          target="_blank"
          rel="noreferrer"
          title={`Visit Instagram ${student.instagram}`}
        >
          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
