import React from 'react';
import { GraduationCap, Cpu, Flame, Target, Sparkles, CheckCircle2, Award } from 'lucide-react';
import SectionAudioButton from './SectionAudioButton';
import { personalInfo } from '../data/portfolioData';

export default function About({ isDark, isReadingSection, onToggleReadSection }) {
  const cards = [
    {
      title: "Education",
      icon: GraduationCap,
      color: "from-cyan-500 to-blue-600",
      accent: "text-cyan-400",
      description: "Pursuing B.Tech in IT at RCPIT Shirpur. Completed Diploma in Computer Engineering at GP Dhule with a 90.00% distinction."
    },
    {
      title: "Technical Interests",
      icon: Cpu,
      color: "from-blue-600 to-violet-600",
      accent: "text-blue-400",
      description: "Keen focus on Artificial Intelligence, Machine Learning models, and modern Full-Stack Web Development."
    },
    {
      title: "Continuous Learning",
      icon: Flame,
      color: "from-violet-600 to-fuchsia-600",
      accent: "text-violet-400",
      description: "Consistently refining programming fundamentals, exploring newer frameworks, and converting conceptual ideas into clean digital solutions."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Audio Narration Button */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-cyan-500/30 bg-cyan-950/20 text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Background & Vision</span>
            </div>
            <SectionAudioButton
              sectionId="about"
              isReading={isReadingSection === 'about'}
              onToggleRead={onToggleReadSection}
              isDark={isDark}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>
              A Little{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        {/* Story & Biography container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 h-full ${
              isDark
                ? 'bg-slate-900/40 border-white/10 hover:border-cyan-500/30'
                : 'bg-white border-slate-200 shadow-xl hover:shadow-cyan-500/5'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className={`text-xl font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  My Journey in Tech
                </h3>
              </div>

              <p className={`text-base sm:text-lg leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {personalInfo.aboutMeText}
              </p>

              {/* Verified Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Strong base in Computer Engineering principles
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Proven 90.00% Diploma academic excellence
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Hands-on with React, Node.js, Python & MongoDB
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Active learner targeting AI & modern web solutions
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Academic Metric Card */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className={`p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col justify-center relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-slate-900/60 to-cyan-950/20 border-cyan-500/20'
                : 'bg-gradient-to-br from-cyan-50/50 to-blue-50/50 border-cyan-100 shadow-lg'
            }`}>
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Award className="w-32 h-32 text-cyan-400" />
              </div>

              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Academic Milestones
                </span>
                <h4 className={`text-2xl font-bold font-heading mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Academic Foundation
                </h4>
              </div>

              <div className="space-y-4 relative z-10">
                <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/80 border-white/5' : 'bg-white border-slate-200'}`}>
                  <div className="text-xs text-slate-400">Undergraduate Degree</div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>B.Tech in Information Technology</div>
                  <div className="text-xs text-cyan-400 mt-0.5">RCPIT, Shirpur • In Progress</div>
                </div>

                <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/80 border-white/5' : 'bg-white border-slate-200'}`}>
                  <div className="text-xs text-slate-400">Diploma in Computer Engineering</div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>Government Polytechnic, Dhule</div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">Scored: 90.00%</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Small Information Cards requested: Education, Technical Interests, Continuous Learning */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group ${
                  isDark
                    ? 'bg-slate-900/40 border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/70 shadow-lg shadow-black/20'
                    : 'bg-white border-slate-200 hover:border-cyan-400 shadow-md hover:shadow-xl'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-bold font-heading mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {card.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
