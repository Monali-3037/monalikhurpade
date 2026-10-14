import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Sparkles, Mic, FileText, Send, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ isDark, toggleTheme, onOpenVoiceModal, onDownloadResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#080c14]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-200/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center font-heading font-extrabold text-white text-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              MK
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg leading-tight tracking-tight ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-cyan-400 transition-colors`}>
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
                IT Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? isDark
                        ? 'text-cyan-400 font-semibold'
                        : 'text-cyan-600 font-semibold'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action buttons: Voice command quick trigger & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Voice Command Quick Button in Header */}
            <button
              onClick={onOpenVoiceModal}
              title="Voice Assistant Commands"
              className={`p-2.5 rounded-xl transition-all duration-200 flex items-center gap-1.5 text-xs font-medium border ${
                isDark
                  ? 'border-cyan-500/30 bg-cyan-950/20 text-cyan-300 hover:bg-cyan-900/30 hover:border-cyan-400/50'
                  : 'border-cyan-200 bg-cyan-50 text-cyan-700 hover:bg-cyan-100'
              }`}
            >
              <Mic className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="hidden xl:inline">Voice Control</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark and Light mode"
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                isDark
                  ? 'border-white/10 bg-slate-800/60 text-amber-300 hover:bg-slate-700/60 hover:border-amber-400/30'
                  : 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-800" />}
            </button>

            {/* Download Resume Quick CTA */}
            <button
              onClick={onDownloadResume}
              title="Download Resume Summary"
              className={`p-2.5 px-3 rounded-xl transition-all duration-200 flex items-center gap-1.5 text-xs font-medium border cursor-pointer ${
                isDark
                  ? 'border-white/10 bg-slate-800/60 text-slate-200 hover:bg-slate-700/60 hover:text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 shadow-sm'
              }`}
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden xl:inline">Resume</span>
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark and Light mode"
              className={`p-2 rounded-lg border ${
                isDark
                  ? 'border-white/10 bg-slate-800 text-amber-300'
                  : 'border-slate-200 bg-slate-100 text-slate-700'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-lg border ${
                isDark
                  ? 'border-white/10 bg-slate-800 text-slate-200'
                  : 'border-slate-200 bg-slate-100 text-slate-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`sm:hidden border-b px-4 pt-2 pb-6 space-y-1 backdrop-blur-xl ${
            isDark
              ? 'bg-[#080c14]/95 border-white/10'
              : 'bg-white/95 border-slate-200 shadow-xl'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? isDark
                    ? 'text-cyan-400 bg-cyan-950/30 font-semibold'
                    : 'text-cyan-600 bg-cyan-50 font-semibold'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-white/5'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVoiceModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border border-cyan-500/40 text-cyan-400 bg-cyan-950/20"
            >
              <Mic className="w-4 h-4" />
              <span>Voice Assistant Commands</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
