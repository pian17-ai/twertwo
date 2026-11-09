"use client";

import React, { useState } from "react";
import { PlaylistItem } from "@/types/portfolio";

interface MusicPlayerProps {
  playlist: PlaylistItem[];
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ playlist }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  if (playlist.length === 0) return null;

  const currentTrack = playlist[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  if (isMinimized) {
    return (
      <aside className="fixed bottom-5 left-5 z-40 transition-transform animate-in fade-in">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-brand-yellow border-3 border-brand-dark rounded-2xl p-3 shadow-brutal flex items-center gap-2 hover:scale-105 transition-transform"
          title="Buka Pemutar Musik"
        >
          <span className="text-xl">🎵</span>
          <span className="font-display font-black text-xs uppercase hidden sm:inline">
            Music
          </span>
        </button>
      </aside>
    );
  }

  return (
    <aside
      className="fixed bottom-5 left-5 z-40 bg-white border-3 border-brand-dark rounded-2xl p-3 shadow-brutal-lg max-w-[280px] w-full flex items-center gap-3 transition-all animate-in slide-in-from-bottom duration-200"
      id="music-player-widget"
    >
      {/* Vinyl / Disc icon spinning if playing */}
      <div
        className={`w-10 h-10 rounded-xl bg-brand-yellow border-2 border-brand-dark flex items-center justify-center font-black text-xs shadow-brutal-sm flex-shrink-0 select-none ${
          isPlaying ? "animate-spin" : ""
        }`}
        style={{ animationDuration: "4s" }}
      >
        📻
      </div>

      {/* Track Info & Controls */}
      <div className="flex-1 min-w-0">
        <h4
          className="font-display font-black text-xs tracking-tight truncate text-brand-dark uppercase"
          id="track-title"
          title={currentTrack.title}
        >
          {currentTrack.title}
        </h4>
        <p className="text-[10px] font-mono-code font-bold text-gray-500 truncate">
          {currentTrack.artist}
        </p>

        <div className="flex items-center gap-2 mt-1">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="text-brand-dark hover:scale-110 transition-transform cursor-pointer"
            id="btn-prev"
            title="Previous Track"
            type="button"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>

          {/* Play / Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-6 h-6 rounded-full bg-rose-500 border border-brand-dark text-white flex items-center justify-center shadow-brutal-sm hover:scale-110 transition-transform cursor-pointer"
            id="btn-play-pause"
            title={isPlaying ? "Pause" : "Play"}
            type="button"
          >
            {isPlaying ? (
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="text-brand-dark hover:scale-110 transition-transform cursor-pointer"
            id="btn-next"
            title="Next Track"
            type="button"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Minimize / Close Button */}
      <button
        onClick={() => setIsMinimized(true)}
        className="text-xs text-gray-400 hover:text-black self-start cursor-pointer p-0.5"
        id="minimize-player"
        title="Minimize Player"
        type="button"
      >
        ✕
      </button>
    </aside>
  );
};
