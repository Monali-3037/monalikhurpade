import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VoiceAssistant from './components/VoiceAssistant';
import Chatbot from './components/Chatbot';
import ScrollProgress from './components/ScrollProgress';
import InteractiveBackground from './components/InteractiveBackground';
import { sectionNarrations, personalInfo } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark theme as requested
  });

  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [readingSection, setReadingSection] = useState(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Section Audio Narration Handler (SpeechSynthesis)
  const handleToggleReadSection = (sectionId) => {
    if (!window.speechSynthesis) return;

    if (readingSection === sectionId) {
      window.speechSynthesis.cancel();
      setReadingSection(null);
    } else {
      window.speechSynthesis.cancel();
      const textToRead = sectionNarrations[sectionId];
      if (textToRead) {
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.onend = () => setReadingSection(null);
        utterance.onerror = () => setReadingSection(null);
        setReadingSection(sectionId);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  // Triggered by voice assistant to read section and scroll into view
  const handleReadSectionFromVoice = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const textToRead = sectionNarrations[sectionId];
    if (textToRead) {
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.onend = () => setReadingSection(null);
      utterance.onerror = () => setReadingSection(null);
      setReadingSection(sectionId);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStopReading = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setReadingSection(null);
  };

  // Download Resume Summary
  const handleDownloadResume = () => {
    const resumeText = `================================================
MONALI KHURPADE — RESUME
Information Technology Engineering Student
Email: ${personalInfo.contact.email}
LinkedIn: ${personalInfo.contact.linkedin}
GitHub: ${personalInfo.contact.github}
LeetCode: ${personalInfo.contact.leetcode}
CodeChef: ${personalInfo.contact.codechef}
Location: ${personalInfo.contact.location}
================================================

ACADEMIC QUALIFICATIONS:
1. B.Tech in Information Technology (IT)
   R. C. Patel Institute of Technology, Shirpur
   Status: Currently Pursuing

2. Diploma in Computer Engineering
   Government Polytechnic, Dhule
   Aggregate Score: 90.00% (Distinction)

TECHNICAL SKILLS:
- Languages & Development: Python, Java, C, HTML, CSS, JavaScript, React, Node.js
- Databases & Developer Tools: MongoDB, Git, GitHub, VS Code, Postman
- Focus Areas & Continuous Learning: Artificial Intelligence, Machine Learning, Django, Full-Stack Web Development

PROJECTS:
1. Smart Healthcare Appointment and Prediction System
   - Technologies: React, Node.js, Express.js, MongoDB
   - Description: Role-based appointment scheduling for admins, doctors, and patients. (Prediction component planned in development).

2. Yoga Recommendation System
   - Technologies: Python, Recommendation Logic, Machine Learning Concepts
   - Description: Personalized yoga practices based on user health parameters.

================================================
(Verified student credentials of Monali Khurpade)
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Monali_Khurpade_Resume_Summary.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 relative selection:bg-cyan-500/30 selection:text-cyan-200 ${
      isDark ? 'bg-[#080c14] text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Creative Interactive Constellation Background */}
      <InteractiveBackground isDark={isDark} />

      {/* Navigation Bar with Theme Toggle & Resume Download */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenVoiceModal={() => setIsVoiceOpen(true)}
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          isDark={isDark}
          isReadingSection={readingSection}
          onToggleReadSection={handleToggleReadSection}
          onDownloadResume={handleDownloadResume}
        />
        <About
          isDark={isDark}
          isReadingSection={readingSection}
          onToggleReadSection={handleToggleReadSection}
        />
        <Skills
          isDark={isDark}
          isReadingSection={readingSection}
          onToggleReadSection={handleToggleReadSection}
        />
        <Projects
          isDark={isDark}
          isReadingSection={readingSection}
          onToggleReadSection={handleToggleReadSection}
        />
        <Education
          isDark={isDark}
          isReadingSection={readingSection}
          onToggleReadSection={handleToggleReadSection}
        />
        <Contact
          isDark={isDark}
          isReadingSection={readingSection}
          onToggleReadSection={handleToggleReadSection}
        />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Conversational AI Voice Assistant Module (Floating Button + Voice Panel + Spoken Answers) */}
      <VoiceAssistant
        isDark={isDark}
        isOpen={isVoiceOpen}
        onClose={() => setIsVoiceOpen(false)}
        onOpen={() => setIsVoiceOpen(true)}
        toggleTheme={toggleTheme}
        onOpenChatbot={() => setIsChatbotOpen(true)}
        onReadSection={handleReadSectionFromVoice}
        onStopReading={handleStopReading}
      />

      {/* Chatbot Module (Floating Button + Interactive AI Chat) */}
      <Chatbot
        isDark={isDark}
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        onOpen={() => setIsChatbotOpen(true)}
      />
    </div>
  );
}
