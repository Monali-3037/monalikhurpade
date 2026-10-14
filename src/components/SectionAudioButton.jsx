import React from 'react';
import { Volume2, VolumeX, Mic, Square } from 'lucide-react';

export default function SectionAudioButton({
  sectionId,
  isReading,
  onToggleRead,
  isDark,
  label = "Listen to section"
}) {
  return (
    <button
      onClick={() => onToggleRead(sectionId)}
      title={isReading ? "Stop reading this section aloud" : "Click to read this section aloud"}
      aria-label={isReading ? "Stop reading section aloud" : "Read section aloud using voice"}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
        isReading
          ? 'bg-rose-500/20 border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.4)] animate-pulse'
          : isDark
          ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400'
          : 'bg-cyan-50 border-cyan-300 text-cyan-700 hover:bg-cyan-100 hover:border-cyan-500 shadow-sm'
      }`}
    >
      {isReading ? (
        <>
          <Square className="w-3.5 h-3.5 fill-current text-rose-400" />
          <span>Stop Voice</span>
          <span className="flex items-center gap-0.5 ml-1">
            <span className="w-1 h-2.5 bg-rose-400 rounded-full animate-bounce" />
            <span className="w-1 h-3.5 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
            <span className="w-1 h-2 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
          </span>
        </>
      ) : (
        <>
          <Mic className="w-3.5 h-3.5 text-cyan-400" />
          <span>Read Aloud</span>
        </>
      )}
    </button>
  );
}
