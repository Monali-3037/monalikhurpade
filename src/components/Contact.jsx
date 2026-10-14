import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, MapPin, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from './SocialIcons';
import SectionAudioButton from './SectionAudioButton';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ isDark, isReadingSection, onToggleReadSection }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 7000);
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Audio Narration Button */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-cyan-500/30 bg-cyan-950/20 text-cyan-300">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Get in Touch</span>
            </div>
            <SectionAudioButton
              sectionId="contact"
              isReading={isReadingSection === 'contact'}
              onToggleRead={onToggleReadSection}
              isDark={isDark}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>
              Let's{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            I am always interested in learning, collaborating on projects, and connecting with people who share an interest in technology. Feel free to reach out to me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards, Logo & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Branding Card with Logo */}
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              isDark
                ? 'bg-slate-900/40 border-white/10'
                : 'bg-white border-slate-200 shadow-lg'
            }`}>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center font-heading font-extrabold text-white text-xl shadow-lg shadow-cyan-500/25">
                  MK
                </div>
                <div>
                  <h3 className={`text-lg font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Monali Khurpade
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    IT Student • RCPIT Shirpur
                  </p>
                </div>
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Whether you're looking for an enthusiastic engineering intern, an AI/ML enthusiast, or a collaborative peer, I'd love to talk!
              </p>

              {/* Email direct copy */}
              <div className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                isDark ? 'bg-slate-950/60 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="flex items-center gap-2.5 overflow-hidden group hover:opacity-80 transition-opacity"
                  title="Send direct email"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className={`text-xs font-mono truncate group-hover:text-cyan-400 transition-colors ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {personalInfo.contact.email}
                  </span>
                </a>
                <button
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-400/20 flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social & Coding Profiles */}
            <div className={`p-6 sm:p-8 rounded-2xl border space-y-4 ${
              isDark
                ? 'bg-slate-900/40 border-white/10'
                : 'bg-white border-slate-200 shadow-lg'
            }`}>
              <h4 className={`text-sm font-bold uppercase tracking-wider font-heading ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Professional Links & Handles
              </h4>

              <div className="space-y-3">
                {/* LinkedIn */}
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 group ${
                    isDark
                      ? 'bg-slate-950/40 border-white/5 hover:border-cyan-400/40 hover:bg-slate-900'
                      : 'bg-slate-50 border-slate-200 hover:border-cyan-500 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        LinkedIn Profile
                      </p>
                      <p className="text-[11px] text-slate-400 truncate max-w-[200px]">
                        monali-khurpade-6b6a8a430
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 group ${
                    isDark
                      ? 'bg-slate-950/40 border-white/5 hover:border-cyan-400/40 hover:bg-slate-900'
                      : 'bg-slate-50 border-slate-200 hover:border-cyan-500 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-500/10 text-slate-300 flex items-center justify-center">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        GitHub Profile
                      </p>
                      <p className="text-[11px] text-slate-400 truncate max-w-[200px]">
                        github.com/Monali-3037
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* LeetCode */}
                <a
                  href={personalInfo.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 group ${
                    isDark
                      ? 'bg-slate-950/40 border-white/5 hover:border-amber-400/40 hover:bg-slate-900'
                      : 'bg-slate-50 border-slate-200 hover:border-amber-500 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                      <LeetCodeIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        LeetCode Profile
                      </p>
                      <p className="text-[11px] text-slate-400 truncate max-w-[200px]">
                        leetcode.com/u/WVZ45AdG3u/
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
                </a>

                {/* CodeChef */}
                <a
                  href={personalInfo.contact.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 group ${
                    isDark
                      ? 'bg-slate-950/40 border-white/5 hover:border-cyan-400/40 hover:bg-slate-900'
                      : 'bg-slate-50 border-slate-200 hover:border-cyan-500 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs font-mono">
                      <CodeChefIcon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        CodeChef Account
                      </p>
                      <p className="text-[11px] text-slate-400 truncate max-w-[200px]">
                        rcp_cc_763
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 ${
              isDark
                ? 'bg-slate-900/40 border-white/10 shadow-2xl shadow-black/30'
                : 'bg-white border-slate-200 shadow-xl'
            }`}>
              
              <h3 className={`text-2xl font-bold font-heading mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Send a Direct Message
              </h3>
              <p className={`text-sm mb-8 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Fill out the form below and I will get back to you shortly.
              </p>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 text-sm flex items-center gap-3 animate-fadeIn">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Message Sent Successfully!</p>
                    <p className="text-xs text-emerald-200/80 mt-0.5">Thank you for reaching out. I'll review your note and respond promptly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-colors outline-none focus:ring-2 focus:ring-cyan-500/40 ${
                        errors.name
                          ? 'border-rose-500 bg-rose-500/5'
                          : isDark
                          ? 'border-white/10 bg-slate-950/50 text-white placeholder-slate-500 focus:border-cyan-400'
                          : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-cyan-600'
                      }`}
                    />
                    {errors.name && <p className="text-rose-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-colors outline-none focus:ring-2 focus:ring-cyan-500/40 ${
                        errors.email
                          ? 'border-rose-500 bg-rose-500/5'
                          : isDark
                          ? 'border-white/10 bg-slate-950/50 text-white placeholder-slate-500 focus:border-cyan-400'
                          : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-cyan-600'
                      }`}
                    />
                    {errors.email && <p className="text-rose-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className={`block text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Inquiry / Project Discussion"
                    className={`w-full px-4 py-3 rounded-xl text-sm border transition-colors outline-none focus:ring-2 focus:ring-cyan-500/40 ${
                      errors.subject
                        ? 'border-rose-500 bg-rose-500/5'
                        : isDark
                        ? 'border-white/10 bg-slate-950/50 text-white placeholder-slate-500 focus:border-cyan-400'
                        : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-cyan-600'
                    }`}
                  />
                  {errors.subject && <p className="text-rose-400 text-xs mt-1.5">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note or question here..."
                    className={`w-full px-4 py-3 rounded-xl text-sm border transition-colors outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none ${
                      errors.message
                        ? 'border-rose-500 bg-rose-500/5'
                        : isDark
                        ? 'border-white/10 bg-slate-950/50 text-white placeholder-slate-500 focus:border-cyan-400'
                        : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-cyan-600'
                    }`}
                  />
                  {errors.message && <p className="text-rose-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:via-blue-500 hover:to-violet-500 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
