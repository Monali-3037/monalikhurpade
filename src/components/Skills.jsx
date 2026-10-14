import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Globe,
  Palette,
  Cpu,
  Atom,
  Server,
  Database,
  GitBranch,
  Laptop,
  Send,
  Brain,
  Sparkles,
  Layers,
  Layout,
  CheckCircle,
  Clock,
  Compass,
  Coffee,
  BarChart3,
  LayoutGrid
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import SectionAudioButton from './SectionAudioButton';
import { skillsData } from '../data/portfolioData';

// Map icon strings to components
const iconMap = {
  Code2,
  Coffee,
  Terminal,
  Globe,
  Palette,
  Cpu,
  Atom,
  Server,
  Database,
  GitBranch,
  Github: GithubIcon,
  Laptop,
  Send,
  Brain,
  Sparkles,
  Layers,
  Layout
};

// Skill bar competency metrics
const skillBarData = [
  { name: 'HTML & CSS', category: 'Frontend', level: 92, tag: 'Advanced' },
  { name: 'JavaScript', category: 'Frontend / Core', level: 88, tag: 'Proficient' },
  { name: 'React', category: 'Frontend Framework', level: 85, tag: 'Proficient' },
  { name: 'Python', category: 'Programming / Logic', level: 86, tag: 'Proficient' },
  { name: 'C Language', category: 'Computer Engineering', level: 82, tag: 'Strong Foundation' },
  { name: 'Java', category: 'Programming', level: 80, tag: 'Strong Foundation' },
  { name: 'Node.js', category: 'Backend Runtime', level: 78, tag: 'Practical Experience' },
  { name: 'MongoDB', category: 'Database', level: 80, tag: 'Practical Experience' },
  { name: 'Git & GitHub', category: 'Version Control', level: 85, tag: 'Proficient' },
  { name: 'VS Code & Postman', category: 'Development Tools', level: 88, tag: 'Proficient' },
  { name: 'Artificial Intelligence', category: 'Area of Interest', level: 72, tag: 'Currently Exploring' },
  { name: 'Machine Learning', category: 'Area of Interest', level: 70, tag: 'Currently Exploring' },
  { name: 'Django', category: 'Backend Framework', level: 68, tag: 'Currently Learning' },
];

export default function Skills({ isDark, isReadingSection, onToggleReadSection }) {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('bars'); // 'bars' or 'grid'

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'programming', label: 'Programming & Development' },
    { id: 'tools', label: 'Database & Tools' },
    { id: 'interests', label: 'Currently Learning & Interests' },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Audio Narration Button */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-cyan-500/30 bg-cyan-950/20 text-cyan-300">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technical Capabilities</span>
            </div>
            <SectionAudioButton
              sectionId="skills"
              isReading={isReadingSection === 'skills'}
              onToggleRead={onToggleReadSection}
              isDark={isDark}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>
              Skills &{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Technologies I have built projects with, paired with emerging areas of active interest and exploration.
          </p>

          {/* View Mode Toggle: Animated Bars vs Cards Grid */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className={`p-1 rounded-xl border flex items-center gap-1 ${isDark ? 'bg-slate-900/60 border-white/10' : 'bg-slate-100 border-slate-300'}`}>
              <button
                onClick={() => setViewMode('bars')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'bars'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Animated Skill Bars</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Cards Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Animated Skill Bars */}
        {viewMode === 'bars' && (
          <div className="max-w-4xl mx-auto space-y-5 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {skillBarData.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-5 rounded-2xl border transition-all duration-300 hover:border-cyan-500/50 group ${
                    isDark
                      ? 'bg-slate-900/40 border-white/5 hover:bg-slate-900/70 shadow-lg shadow-black/20'
                      : 'bg-white border-slate-200 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className={`text-sm font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {skill.name}
                      </h4>
                      <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {skill.category}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {skill.level}%
                      </span>
                      <span className="block text-[10px] text-slate-400">
                        {skill.tag}
                      </span>
                    </div>
                  </div>

                  {/* Animated Progress Track */}
                  <div className={`w-full h-2 rounded-full overflow-hidden ${
                    isDark ? 'bg-slate-800' : 'bg-slate-100'
                  }`}>
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View Mode 2: Interactive Cards Grid */}
        {viewMode === 'grid' && (
          <div className="animate-fadeIn">
            {/* Tab Filter */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                      : isDark
                      ? 'bg-slate-900/40 text-slate-300 hover:text-white hover:bg-slate-800/60 border border-white/5'
                      : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Category 1: Programming & Development */}
            {(activeTab === 'all' || activeTab === 'programming') && (
              <div className="mb-12">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <h3 className={`text-lg font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Programming & Development
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skillsData.programmingAndDev.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-1 group ${
                          isDark
                            ? 'bg-slate-900/40 border-white/5 hover:border-cyan-500/40 hover:bg-slate-900/80 shadow-md shadow-black/20'
                            : 'bg-white border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                              {skill.name}
                            </h4>
                            <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              {skill.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Category 2: Database & Tools */}
            {(activeTab === 'all' || activeTab === 'tools') && (
              <div className="mb-12">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <h3 className={`text-lg font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Database & Developer Tools
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {skillsData.databaseAndTools.map((tool) => {
                    const IconComponent = iconMap[tool.icon] || Database;
                    return (
                      <div
                        key={tool.name}
                        className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-1 group ${
                          isDark
                            ? 'bg-slate-900/40 border-white/5 hover:border-blue-500/40 hover:bg-slate-900/80 shadow-md shadow-black/20'
                            : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                              {tool.name}
                            </h4>
                            <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              {tool.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Category 3: Technology Interests & Currently Learning */}
            {(activeTab === 'all' || activeTab === 'interests') && (
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
                  <h3 className={`text-lg font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Currently Learning & Areas of Interest
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {skillsData.interestsAndLearning.map((item) => {
                    const IconComponent = iconMap[item.icon] || Brain;
                    return (
                      <div
                        key={item.name}
                        className={`p-5 rounded-xl border transition-all duration-200 hover:-translate-y-1 group ${
                          isDark
                            ? 'bg-slate-900/40 border-violet-500/20 hover:border-violet-500/50 hover:bg-slate-900/80'
                            : 'bg-white border-violet-200 hover:border-violet-400 shadow-sm hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
                            {item.status}
                          </span>
                        </div>
                        <h4 className={`text-base font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {item.name}
                        </h4>
                        <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          Actively studying principles and implementing practical exercises.
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
