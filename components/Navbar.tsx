"use client";

import React, { useState } from "react";
import { ClassInfo, NavItem } from "@/types/portfolio";

interface NavbarProps {
  classInfo: ClassInfo;
  navItems: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ classInfo, navItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-brand-dark transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          className="flex items-center gap-3 group"
          href="#hero"
          title={`${classInfo.name} - ${classInfo.fullName}`}
        >
          <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-dark rounded-xl flex items-center justify-center font-display font-extrabold text-2xl shadow-brutal-sm group-hover:rotate-6 transition-transform">
            T2
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-xl tracking-tight">
                {classInfo.name}
              </span>
              <span className="font-mono-code text-[11px] bg-brand-purple text-white px-1.5 py-0.5 rounded font-bold border border-brand-dark">
                &lt;/&gt;
              </span>
            </div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
              XII RPL 2 • {classInfo.school.replace("JAKARTA", "JKT")}
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 font-display font-bold text-sm"
          data-purpose="nav-links"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className={`px-3 py-2 rounded-lg ${item.hoverBg} hover:text-black border-2 border-transparent hover:border-brand-dark transition-all`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Social Media & Status Badge */}
        <div className="hidden lg:flex items-center gap-3">
          {classInfo.socialLinks.spotify && (
            <a
              className="w-9 h-9 rounded-full bg-emerald-400 border-2 border-brand-dark flex items-center justify-center shadow-brutal-sm hover:scale-110 transition-transform"
              href={classInfo.socialLinks.spotify}
              rel="noreferrer"
              target="_blank"
              title="Spotify Playlist"
            >
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>
          )}
          {classInfo.socialLinks.instagram && (
            <a
              className="w-9 h-9 rounded-full bg-rose-400 border-2 border-brand-dark flex items-center justify-center shadow-brutal-sm hover:scale-110 transition-transform"
              href={classInfo.socialLinks.instagram}
              rel="noreferrer"
              target="_blank"
              title="Instagram"
            >
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          )}
          {classInfo.socialLinks.github && (
            <a
              className="w-9 h-9 rounded-full bg-amber-300 border-2 border-brand-dark flex items-center justify-center shadow-brutal-sm hover:scale-110 transition-transform"
              href={classInfo.socialLinks.github}
              rel="noreferrer"
              target="_blank"
              title="Class GitHub"
            >
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          <span className="inline-flex items-center gap-1.5 font-mono-code text-xs font-bold px-3 py-1.5 bg-brand-green/30 border-2 border-brand-dark rounded-full shadow-brutal-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            SMKN 64 JKT
          </span>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <span className="inline-flex items-center gap-1 font-mono-code text-[10px] font-bold px-2 py-1 bg-brand-green/30 border border-brand-dark rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            SMKN 64
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 bg-brand-yellow border-2 border-brand-dark rounded-xl flex items-center justify-center shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <span className="font-display font-black text-lg">✕</span>
            ) : (
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-cream border-b-2 border-brand-dark px-4 py-5 shadow-brutal transition-all animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2 font-display font-bold text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 bg-white rounded-xl border-2 border-brand-dark shadow-brutal-sm ${item.hoverBg} transition-colors flex items-center justify-between`}
              >
                <span>{item.label}</span>
                <span className="text-gray-400">➔</span>
              </a>
            ))}
          </nav>

          {/* Mobile Socials */}
          <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t-2 border-brand-dark">
            {classInfo.socialLinks.spotify && (
              <a
                href={classInfo.socialLinks.spotify}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-400 border-2 border-brand-dark flex items-center justify-center shadow-brutal-sm"
              >
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>
            )}
            {classInfo.socialLinks.instagram && (
              <a
                href={classInfo.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-rose-400 border-2 border-brand-dark flex items-center justify-center shadow-brutal-sm"
              >
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            )}
            {classInfo.socialLinks.github && (
              <a
                href={classInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-amber-300 border-2 border-brand-dark flex items-center justify-center shadow-brutal-sm"
              >
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
