import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Download, Sparkles, Terminal, Code, Award, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from './SocialIcons';
import SectionAudioButton from './SectionAudioButton';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ isDark, isReadingSection, onToggleReadSection, onDownloadResume }) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const taglines = personalInfo.taglines;

  // Typewriter effect for animated subtitle
  useEffect(() => {
    const currentTagline = taglines[taglineIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTagline.substring(0, displayText.length + 1));
        setTypingSpeed(75);

        if (displayText.length + 1 === currentTagline.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(currentTagline.substring(0, displayText.length - 1));
        setTypingSpeed(38);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex, taglines, typingSpeed]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Creative Background ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-violet-600/15 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating decorative code badges in background */}
      <div className="hidden lg:block absolute top-36 left-12 opacity-30 pointer-events-none select-none font-mono text-xs text-cyan-400 animate-float">
        &lt;IT_Engineer&gt;
      </div>
      <div className="hidden lg:block absolute bottom-24 left-1/3 opacity-25 pointer-events-none select-none font-mono text-xs text-violet-400 animate-float" style={{ animationDelay: '2s' }}>
        &#123; AI_Machine_Learning &#125;
      </div>
      <div className="hidden lg:block absolute top-48 right-16 opacity-30 pointer-events-none select-none font-mono text-xs text-blue-400 animate-float" style={{ animationDelay: '1s' }}>
        [ React & Node.js ]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headings, Typewriter Subtitle, Intro & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Status Pill & Read Aloud Audio Button */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>B.Tech IT Student • R. C. Patel Institute of Technology</span>
              </div>

              <SectionAudioButton
                sectionId="home"
                isReading={isReadingSection === 'home'}
                onToggleRead={onToggleReadSection}
                isDark={isDark}
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-tight sm:leading-none mb-4">
              <span className={isDark ? 'text-white' : 'text-slate-900'}>
                Hi, I'm{' '}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Monali Khurpade
              </span>
            </h1>

            {/* Animated Subtitle with Typing Effect */}
            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-mono">
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  {displayText}
                </span>
                <span className="inline-block w-[3px] h-6 sm:h-8 ml-1 bg-cyan-400 animate-pulse align-middle" />
              </h2>
            </div>

            {/* Introduction paragraph */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {personalInfo.introduction}
            </p>

            {/* Action Buttons: Explore Projects, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:via-blue-500 hover:to-violet-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Downloadable Resume Button */}
              <button
                onClick={onDownloadResume}
                className={`px-5 py-3.5 rounded-xl text-sm font-semibold border flex items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                  isDark
                    ? 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300 hover:bg-cyan-900/30 hover:border-cyan-400 shadow-sm'
                    : 'border-cyan-300 bg-cyan-50 text-cyan-800 hover:bg-cyan-100 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className={`px-5 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer ${
                  isDark
                    ? 'border-white/20 bg-white/5 hover:bg-white/10 text-white hover:border-cyan-400/50'
                    : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-sm'
                }`}
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Profile Summary Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 pt-6 border-t border-white/10">
              <div className={`p-3 rounded-xl border text-left ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <div className="text-xs text-slate-400 font-medium">Academic Program</div>
                <div className={`text-sm font-semibold truncate ${isDark ? 'text-white' : 'text-slate-800'}`}>B.Tech IT (RCPIT)</div>
              </div>
              <div className={`p-3 rounded-xl border text-left ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <div className="text-xs text-slate-400 font-medium">Diploma Distinction</div>
                <div className="text-sm font-semibold text-cyan-400">90.00% Score</div>
              </div>
              <div className={`p-3 rounded-xl border text-left col-span-2 sm:col-span-1 ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <div className="text-xs text-slate-400 font-medium">Core Focus</div>
                <div className={`text-sm font-semibold truncate ${isDark ? 'text-white' : 'text-slate-800'}`}>AI & Web Dev</div>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Image, Floating Glass Badges & Verified Handles */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 opacity-60 blur-lg animate-pulse-subtle" />
              
              {/* Inner card container */}
              <div className={`relative rounded-2xl overflow-hidden border p-3 ${
                isDark
                  ? 'bg-gradient-to-b from-slate-900/90 to-[#080c14]/90 border-cyan-500/30 backdrop-blur-xl'
                  : 'bg-white border-slate-200 shadow-2xl'
              }`}>
                
                {/* Photo frame */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-800 group">
                  <img
                    src={personalInfo.photoUrl}
                    alt="Monali Khurpade - Information Technology Engineering Student"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle gradient overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-60" />

                  {/* Floating verification badge over photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl backdrop-blur-md bg-black/60 border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold leading-tight">Monali Khurpade</p>
                      <p className="text-[11px] text-cyan-300">RCPIT, Shirpur</p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                      B.Tech IT
                    </span>
                  </div>
                </div>

                {/* Verified Handles beneath photo: LinkedIn, GitHub, LeetCode, CodeChef */}
                <div className="mt-3 flex items-center justify-between px-2 py-1">
                  <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Connect with me:
                  </span>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={personalInfo.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn Profile"
                      className={`p-2 rounded-lg transition-colors ${
                        isDark ? 'text-slate-300 hover:text-cyan-400 hover:bg-white/5' : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
                      }`}
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={personalInfo.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Profile"
                      className={`p-2 rounded-lg transition-colors ${
                        isDark ? 'text-slate-300 hover:text-cyan-400 hover:bg-white/5' : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
                      }`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={personalInfo.contact.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LeetCode Profile"
                      className={`p-2 rounded-lg transition-colors ${
                        isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-white/5' : 'text-slate-600 hover:text-amber-600 hover:bg-slate-100'
                      }`}
                    >
                      <LeetCodeIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={personalInfo.contact.codechef}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="CodeChef Profile"
                      className={`p-2 rounded-lg transition-colors ${
                        isDark ? 'text-slate-300 hover:text-amber-400 hover:bg-white/5' : 'text-slate-600 hover:text-amber-600 hover:bg-slate-100'
                      }`}
                    >
                      <CodeChefIcon className="w-4 h-4 text-amber-500" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
