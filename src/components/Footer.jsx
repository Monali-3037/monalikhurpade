import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ isDark }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t py-12 relative transition-colors duration-300 ${
      isDark ? 'bg-[#06090f] border-white/10' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center font-heading font-extrabold text-white text-base shadow-md shadow-cyan-500/20">
              MK
            </div>
            <div>
              <span className={`font-heading font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.name}
              </span>
              <p className="text-xs text-slate-400">
                Information Technology • RCPIT Shirpur
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#home" className="text-slate-400 hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" className="text-slate-400 hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`p-2 rounded-lg border transition-colors ${
                isDark ? 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5' : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`p-2 rounded-lg border transition-colors ${
                isDark ? 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5' : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className={`p-2 rounded-lg border transition-colors ${
                isDark ? 'border-white/10 text-slate-400 hover:text-amber-400 hover:bg-white/5' : 'border-slate-300 text-slate-600 hover:text-amber-600 hover:bg-slate-200'
              }`}
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              aria-label="Send Email"
              className={`p-2 rounded-lg border transition-colors ${
                isDark ? 'border-white/10 text-slate-400 hover:text-cyan-400 hover:bg-white/5' : 'border-slate-300 text-slate-600 hover:text-cyan-600 hover:bg-slate-200'
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.codechef}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodeChef Profile"
              className={`p-2 rounded-lg border transition-colors ${
                isDark ? 'border-white/10 text-slate-400 hover:text-amber-400 hover:bg-white/5' : 'border-slate-300 text-slate-600 hover:text-amber-600 hover:bg-slate-200'
              }`}
            >
              <CodeChefIcon className="w-4 h-4 text-amber-500" />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-400/20 transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {currentYear} Monali Khurpade. Designed for academic and professional showcasing.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
