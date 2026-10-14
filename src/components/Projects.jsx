import React, { useState } from 'react';
import { FolderGit2, ExternalLink, AlertCircle, Sparkles, CheckCircle, Info, Layers, Code, Eye, X, UserCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import SectionAudioButton from './SectionAudioButton';
import { projectsData } from '../data/portfolioData';

export default function Projects({ isDark, isReadingSection, onToggleReadSection }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [placeholderToast, setPlaceholderToast] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const handlePlaceholderClick = (type, projectTitle) => {
    setPlaceholderToast(`${type} link for "${projectTitle}" is a placeholder and will be linked to your repository.`);
    setTimeout(() => {
      setPlaceholderToast('');
    }, 4000);
  };

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase().includes(activeCategory));

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Audio Narration Button */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-cyan-500/30 bg-cyan-950/20 text-cyan-300">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Featured Portfolio Work</span>
            </div>
            <SectionAudioButton
              sectionId="projects"
              isReading={isReadingSection === 'projects'}
              onToggleRead={onToggleReadSection}
              isDark={isDark}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>
              Featured{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Practical applications built to address real-world needs in healthcare accessibility and wellness recommendation.
          </p>

          {/* Interactive Category Filter */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm'
                  : isDark ? 'bg-slate-900/60 border border-white/5 text-slate-300 hover:text-white' : 'bg-slate-100 border border-slate-200 text-slate-700'
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setActiveCategory('healthcare')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === 'healthcare'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm'
                  : isDark ? 'bg-slate-900/60 border border-white/5 text-slate-300 hover:text-white' : 'bg-slate-100 border border-slate-200 text-slate-700'
              }`}
            >
              Healthcare System
            </button>
            <button
              onClick={() => setActiveCategory('yoga')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === 'yoga'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm'
                  : isDark ? 'bg-slate-900/60 border border-white/5 text-slate-300 hover:text-white' : 'bg-slate-100 border border-slate-200 text-slate-700'
              }`}
            >
              Yoga Recommendation
            </button>
          </div>
        </div>

        {/* Notification Toast for Placeholder Links */}
        {placeholderToast && (
          <div className="fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl shadow-2xl backdrop-blur-md border bg-slate-900/95 border-cyan-500/40 text-slate-100 flex items-start gap-3 animate-bounce">
            <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-cyan-300">Repository Notice</p>
              <p className="text-xs text-slate-200 mt-0.5">{placeholderToast}</p>
            </div>
          </div>
        )}

        {/* Interactive Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                isDark
                  ? 'bg-slate-900/40 border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/80 shadow-xl shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-cyan-400 shadow-lg hover:shadow-2xl'
              }`}
            >
              {/* Card Header & Status */}
              <div className="p-7 pb-4">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                    {project.category}
                  </span>
                  
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border flex items-center gap-1.5 ${
                    project.id === 'healthcare-system'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {project.status}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold font-heading mb-3 group-hover:text-cyan-400 transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-sm sm:text-base leading-relaxed mb-5 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.fullDescription}
                </p>

                {/* Specific Transparency Notice for Prediction Feature */}
                {project.id === 'healthcare-system' && (
                  <div className={`p-3.5 rounded-xl border mb-5 text-xs flex items-start gap-2.5 ${
                    isDark
                      ? 'bg-amber-950/20 border-amber-500/30 text-amber-200'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}>
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Development Transparency: </span>
                      {project.plannedFeatures}
                    </div>
                  </div>
                )}

                {/* Role-based features / Highlights */}
                <div className="mb-6 space-y-2">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    System Highlights & Scope:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5 pt-1">
                    {project.roleAccess.map((role) => (
                      <div key={role} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2.5 py-1 rounded-md font-mono font-medium ${
                        isDark
                          ? 'bg-slate-800 text-cyan-300 border border-cyan-500/20'
                          : 'bg-slate-100 text-slate-800 border border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer with Interactive Details & Link Triggers */}
              <div className={`p-5 px-7 border-t flex flex-wrap items-center justify-between gap-3 ${
                isDark ? 'bg-slate-900/60 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>

                  <button
                    onClick={() => handlePlaceholderClick('GitHub Repository', project.title)}
                    className={`flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isDark
                        ? 'border-white/20 bg-slate-800 hover:bg-slate-700 text-slate-200'
                        : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </button>

                  <button
                    onClick={() => handlePlaceholderClick('Live Demo', project.title)}
                    className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </button>
                </div>

                <span className={`text-[11px] italic ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Placeholder ready
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Architecture Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <div className={`relative w-full max-w-2xl rounded-2xl border p-6 sm:p-8 shadow-2xl overflow-hidden ${
              isDark ? 'bg-slate-900 border-cyan-500/30 text-white' : 'bg-white border-slate-300 text-slate-900'
            }`}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 font-medium">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold font-heading mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`p-1.5 rounded-lg ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 my-6 text-sm">
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-cyan-400 mb-1">
                    System Description:
                  </h4>
                  <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {selectedProject.plannedFeatures && (
                  <div className={`p-3.5 rounded-xl border text-xs ${
                    isDark ? 'bg-amber-950/20 border-amber-500/30 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}>
                    <strong>Planned/In-Development Notice:</strong> {selectedProject.plannedFeatures}
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-cyan-400 mb-1.5">
                    Technologies Applied:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium ${
                        isDark ? 'bg-slate-800 text-cyan-300 border border-cyan-500/20' : 'bg-slate-100 text-slate-800'
                      }`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-cyan-400 mb-1.5">
                    User Roles & Modules:
                  </h4>
                  <div className="space-y-1.5">
                    {selectedProject.roleAccess.map((r) => (
                      <div key={r} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
                >
                  Close Architecture
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
