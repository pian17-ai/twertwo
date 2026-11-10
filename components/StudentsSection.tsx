"use client";

import React, { useState } from "react";
import { Student } from "@/types/portfolio";
import { StudentModal } from "./modals/StudentModal";

interface StudentsSectionProps {
  students: Student[];
}

export const StudentsSection: React.FC<StudentsSectionProps> = ({ students }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.quote.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      className="py-20 bg-white border-b-2 border-brand-dark"
      data-purpose="students-roster"
      id="students"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-block px-5 py-2 bg-brand-yellow border-2 border-brand-dark rounded-xl shadow-brutal font-display font-black text-sm uppercase tracking-widest mb-3">
            STUDENTS
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-brand-dark">
            Meet the Twertwo Squad
          </h2>
          <p className="mt-3 text-gray-600 font-medium max-w-xl">
            Klik salah satu kartu siswa di bawah untuk melihat kutipan personal, role keahlian, dan profil GitHub!
          </p>
        </div>

        {/* Search Toolbar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari siswa berdasarkan nama atau spesialisasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pl-12 bg-brand-cream border-2 border-brand-dark rounded-2xl shadow-brutal-sm font-mono-code text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
            <svg
              className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black font-bold text-xs"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Students Grid */}
        {filteredStudents.length === 0 ? (
          <div className="text-center py-12 bg-brand-cream border-2 border-dashed border-brand-dark rounded-2xl p-8 max-w-md mx-auto">
            <span className="text-4xl">🔍</span>
            <p className="mt-3 font-display font-bold text-lg text-brand-dark">
              Tidak ada siswa yang ditemukan
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Coba gunakan kata kunci pencarian lain.
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            id="student-cards-grid"
          >
            {filteredStudents.map((student) => (
              <article
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className="student-card group bg-white border-3 border-brand-dark rounded-2xl p-4 shadow-brutal hover:-translate-y-1.5 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-square w-full rounded-xl border-2 border-brand-dark overflow-hidden mb-3 bg-rose-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={student.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={student.avatar}
                      loading="lazy"
                    />
                  </div>

                  <h3 className="font-display font-black text-center text-lg text-brand-dark tracking-tight line-clamp-1">
                    {student.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono-code text-center font-bold mt-0.5">
                    {student.classGrade}
                  </p>
                  <p className="text-[11px] text-gray-600 text-center italic mt-1 line-clamp-1">
                    &quot;{student.quote}&quot;
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-3 w-full py-2 bg-brand-cyan text-brand-dark font-display font-black text-xs rounded-xl border-2 border-brand-dark shadow-brutal-sm group-hover:bg-brand-yellow transition-colors"
                >
                  VIEW PROFILE →
                </button>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Student Modal */}
      <StudentModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />
    </section>
  );
};
