import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import SectionAudioButton from './SectionAudioButton';
import { educationTimeline } from '../data/portfolioData';

export default function Education({ isDark, isReadingSection, onToggleReadSection }) {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Audio Narration Button */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-cyan-500/30 bg-cyan-950/20 text-cyan-300">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Academic Background</span>
            </div>
            <SectionAudioButton
              sectionId="education"
              isReading={isReadingSection === 'education'}
              onToggleRead={onToggleReadSection}
              isDark={isDark}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>
              Education{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            My formal engineering education and foundational milestones in Computer Engineering.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-32 space-y-12">
          {educationTimeline.map((item, index) => (
            <div key={item.degree} className="relative pl-8 md:pl-10 group">
              
              {/* Timeline Node Point */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#080c14] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.6)] group-hover:scale-125 transition-transform duration-300">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 absolute" />
              </div>

              {/* Timestamp label on left for desktop */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                <span className="text-xs font-mono font-semibold text-cyan-400">
                  {item.period.includes('Currently') ? 'Present' : 'Completed'}
                </span>
              </div>

              {/* Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-900/40 border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/80 shadow-lg shadow-black/20'
                    : 'bg-white border-slate-200 hover:border-cyan-400 shadow-md hover:shadow-xl'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.type}
                  </span>
                  
                  {item.score && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <Award className="w-3.5 h-3.5" />
                      <span>Distinction: {item.score}</span>
                    </div>
                  )}

                  {!item.score && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      {item.period}
                    </span>
                  )}
                </div>

                <h3 className={`text-xl sm:text-2xl font-bold font-heading mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {item.degree}
                </h3>

                <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium mb-4">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{item.institution}</span>
                </div>

                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>

                {item.score && (
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Graduated in the top tier with an exceptional 90.00% aggregate score</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
