import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Bot, Send, X, Sparkles, User, ArrowRight, CornerDownLeft, RefreshCw, ExternalLink } from 'lucide-react';
import { personalInfo, educationTimeline, skillsData, projectsData } from '../data/portfolioData';

export default function Chatbot({ isDark, isOpen, onClose, onOpen }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I am Monali's AI Portfolio Assistant. How can I help you today? You can ask about her education, projects, technical skills, LeetCode profile, or contact info.",
      actions: ['🎓 Education', '💻 Tech Stack', '🚀 Projects', '⚡ Coding Profiles', '📬 Contact']
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickQuestions = [
    { label: '🎓 Education', query: 'Tell me about Monali education and college' },
    { label: '💻 Tech Stack', query: 'What skills and technologies does Monali know?' },
    { label: '🚀 Projects', query: 'What projects has Monali worked on?' },
    { label: '⚡ Coding Profiles', query: 'Tell me about her LeetCode and CodeChef profiles' },
    { label: '📬 Contact', query: 'How can I get in touch with Monali?' },
  ];

  const generateAnswer = (userQuery) => {
    const q = userQuery.toLowerCase();

    // 1. Education
    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('diploma') || q.includes('percentage') || q.includes('score')) {
      return {
        text: `Monali is currently pursuing B.Tech in Information Technology at R. C. Patel Institute of Technology, Shirpur. Previously, she completed her Diploma in Computer Engineering at Government Polytechnic, Dhule, achieving a 90.00% distinction score.`,
        actionLink: '#education',
        actionLabel: 'View Education Timeline'
      };
    }

    // 2. Skills & Tech Stack
    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('python') || q.includes('react')) {
      return {
        text: `Monali's verified programming & development skills include Python, Java, C, HTML, CSS, JavaScript, React, and Node.js. For databases and developer tools, she works with MongoDB, Git, GitHub, VS Code, and Postman. She is also actively exploring Artificial Intelligence, Machine Learning, and Django.`,
        actionLink: '#skills',
        actionLabel: 'Explore Verified Skills'
      };
    }

    // 3. Projects
    if (q.includes('project') || q.includes('healthcare') || q.includes('yoga') || q.includes('work') || q.includes('build')) {
      return {
        text: `Monali has two key academic projects:\n1. Smart Healthcare Appointment and Prediction System (React, Node.js, Express, MongoDB) for doctor discovery and role-based booking (disease prediction is currently planned in development).\n2. Yoga Recommendation System (Python) for recommending tailored yoga practices based on user wellness parameters.`,
        actionLink: '#projects',
        actionLabel: 'Jump to Projects Gallery'
      };
    }

    // 4. Coding Profiles (LeetCode & CodeChef)
    if (q.includes('leetcode') || q.includes('codechef') || q.includes('coding') || q.includes('problem')) {
      return {
        text: `Monali is active on competitive coding platforms!\n• LeetCode: leetcode.com/u/WVZ45AdG3u/\n• CodeChef: codechef.com/users/rcp_cc_763\n• GitHub: github.com/Monali-3037`,
        actionLink: '#contact',
        actionLabel: 'View Coding Profiles'
      };
    }

    // 5. Contact & Hiring / Internship
    if (q.includes('contact') || q.includes('hire') || q.includes('internship') || q.includes('email') || q.includes('reach') || q.includes('linkedin')) {
      return {
        text: `You can reach out to Monali directly via the contact form or email at ${personalInfo.contact.email}. She is also reachable on LinkedIn (linkedin.com/in/monali-khurpade-6b6a8a430), GitHub, LeetCode, and CodeChef!`,
        actionLink: '#contact',
        actionLabel: 'Open Contact Form'
      };
    }

    // 6. Resume Query
    if (q.includes('resume') || q.includes('cv')) {
      return {
        text: `All of Monali's verified credentials, 90.00% Diploma distinction, B.Tech IT education, verified skills, and projects are presented transparently across this portfolio! You can also connect with her directly via the contact form.`,
        actionLink: '#contact',
        actionLabel: 'Go to Contact'
      };
    }

    // 6. About Monali / Who is she
    if (q.includes('who') || q.includes('about') || q.includes('monali') || q.includes('interests')) {
      return {
        text: `Monali Khurpade is an Information Technology engineering student with a strong computer engineering foundation. She enjoys exploring new technologies, solving problems, and building practical projects in AI, Machine Learning, and Web Development.`,
        actionLink: '#about',
        actionLabel: 'Read Full Biography'
      };
    }

    // Default polite response
    return {
      text: `I'd love to help! You can ask me about Monali's education (RCPIT & GP Dhule), core skills (React, Python, Node, MongoDB), projects (Healthcare Appointment & Yoga Recommendation systems), or how to contact her for opportunities.`,
      actionLink: '#about',
      actionLabel: 'Explore Portfolio'
    };
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query.trim()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAnswer(query);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.text,
        actionLink: response.actionLink,
        actionLabel: response.actionLabel,
        customAction: response.customAction
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (msg) => {
    if (msg.customAction === 'resumeModal' && onOpenResumeModal) {
      onOpenResumeModal();
      return;
    }
    if (msg.actionLink) {
      const target = document.querySelector(msg.actionLink);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: "Conversation reset. What would you like to know about Monali Khurpade?",
        actions: ['🎓 Education', '💻 Tech Stack', '🚀 Projects', '📬 Contact']
      }
    ]);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onOpen}
          aria-label="Open Monali Portfolio Chatbot"
          className="relative group p-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center"
        >
          {/* Subtle glowing ring */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 opacity-60 blur-md group-hover:opacity-100 transition-opacity animate-pulse-subtle" />
          
          <Bot className="relative z-10 w-6 h-6" />

          {/* Badge indicator */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#080c14] animate-pulse" />

          {/* Hover Tooltip */}
          <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900 border border-violet-500/30 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Chat with AI Assistant
          </span>
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-fadeIn transition-all duration-300">
          
          {/* Header */}
          <div className={`p-4 px-5 border-b flex items-center justify-between ${
            isDark ? 'bg-slate-950/90 border-white/10 text-white' : 'bg-slate-50/95 border-slate-200 text-slate-900'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white shadow-md shadow-violet-500/20">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm leading-tight flex items-center gap-1.5">
                  <span>Monali's AI Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h3>
                <p className="text-[11px] text-cyan-400 font-mono">
                  Online • Ask anything about Monali
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={resetChat}
                title="Restart Chat"
                className={`p-1.5 rounded-lg transition-colors ${
                  isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200'
                }`}
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className={`p-1.5 rounded-lg transition-colors ${
                  isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className={`flex-1 p-4 overflow-y-auto space-y-3.5 text-xs ${
            isDark ? 'bg-slate-900/90' : 'bg-white/95'
          }`}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[80%] rounded-2xl p-3.5 leading-relaxed space-y-2 ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-none shadow-md'
                    : isDark
                    ? 'bg-slate-800/80 border border-white/5 text-slate-200 rounded-bl-none'
                    : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-bl-none'
                }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Navigation CTA within message */}
                  {(msg.actionLabel || msg.customAction) && (
                    <button
                      onClick={() => handleActionClick(msg)}
                      className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-400/30 transition-colors cursor-pointer"
                    >
                      <span>{msg.actionLabel}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className={`p-3 rounded-2xl rounded-bl-none ${isDark ? 'bg-slate-800/80' : 'bg-slate-100'} flex items-center gap-1.5`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className={`p-2.5 px-3 border-t overflow-x-auto flex gap-1.5 no-scrollbar ${
            isDark ? 'bg-slate-950/70 border-white/10' : 'bg-slate-50 border-slate-200'
          }`}>
            {quickQuestions.map((chip) => (
              <button
                key={chip.label}
                onClick={() => handleSendMessage(chip.query)}
                className={`shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors cursor-pointer ${
                  isDark
                    ? 'border-white/10 bg-slate-800/60 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-500 hover:text-cyan-700'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className={`p-3 border-t flex items-center gap-2 ${
              isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'
            }`}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about education, skills, projects..."
              className={`flex-1 px-3.5 py-2.5 rounded-xl text-xs border outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                isDark
                  ? 'bg-slate-900 border-white/10 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 disabled:opacity-40 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
