import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Sparkles, X, Compass, CheckCircle2, AlertCircle, HelpCircle, Bot, ArrowRight, Square } from 'lucide-react';
import { voiceCommandsHelp, personalInfo } from '../data/portfolioData';

export default function VoiceAssistant({
  isDark,
  isOpen,
  onClose,
  onOpen,
  toggleTheme,
  onOpenChatbot,
  onReadSection,
  onStopReading
}) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [statusMessage, setStatusMessage] = useState('Click "Start Listening" or tap any question to speak.');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [ttsEnabled, setTtsEnabled] = useState(true);

  const recognitionRef = useRef(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSupported(false);
      setStatusMessage('Speech recognition API is not supported in this browser. You can still click questions to hear spoken answers.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false; // Turn-based conversation
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setStatusMessage('Listening to your question... Speak now.');
      };

      recognition.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }

        const cleaned = currentTranscript.trim();
        setTranscript(cleaned);

        if (event.results[0].isFinal) {
          handleConversationalQuery(cleaned);
        }
      };

      recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        if (event.error === 'not-allowed') {
          setStatusMessage('Microphone access was denied. Please allow microphone permissions in browser settings.');
        } else if (event.error === 'no-speech') {
          setStatusMessage('No speech detected. Tap "Start Listening" to try again.');
        } else {
          setStatusMessage(`Status: ${event.error}. You can also click the quick prompt chips below.`);
        }
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    } catch (e) {
      console.error('Failed to initialize speech recognition:', e);
      setIsSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
    };
  }, []);

  // Text-To-Speech helper: Speaks answers aloud
  const speakVoice = (message) => {
    if (!ttsEnabled || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('TTS error:', err);
      setIsSpeaking(false);
    }
  };

  const stopVoice = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    if (onStopReading) onStopReading();
  };

  // Conversational AI Question & Answering Engine
  const handleConversationalQuery = (rawText) => {
    const text = rawText.toLowerCase();

    // 1. Who is Monali / Profile & Introduction
    if (text.includes('who is') || text.includes('about monali') || text.includes('tell me about yourself') || text.includes('introduce')) {
      const answer = "Monali Khurpade is an Information Technology engineering student at R. C. Patel Institute of Technology, Shirpur. She completed her Diploma in Computer Engineering from Government Polytechnic, Dhule, with a 90% distinction score. Her interests include AI, Machine Learning, and Web Development.";
      setAiAnswer(answer);
      setStatusMessage('Answering: Profile & Background');
      speakVoice(answer);
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 2. Skills & Technologies
    if (text.includes('skill') || text.includes('technologies') || text.includes('tech stack') || text.includes('what do you know')) {
      const answer = "Monali's programming skills include Python, Java, C, HTML, CSS, JavaScript, React, and Node.js. For databases and developer tools, she works with MongoDB, Git, GitHub, VS Code, and Postman. She is also actively exploring AI, Machine Learning, and Django.";
      setAiAnswer(answer);
      setStatusMessage('Answering: Skills & Technologies');
      speakVoice(answer);
      const el = document.getElementById('skills');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 3. Education & College
    if (text.includes('education') || text.includes('college') || text.includes('diploma') || text.includes('percentage') || text.includes('marks') || text.includes('degree')) {
      const answer = "Monali is currently pursuing B.Tech in Information Technology at R. C. Patel Institute of Technology, Shirpur. Previously, she completed her Diploma in Computer Engineering at Government Polytechnic, Dhule, graduating with an aggregate score of 90.00% distinction.";
      setAiAnswer(answer);
      setStatusMessage('Answering: Academic Timeline');
      speakVoice(answer);
      const el = document.getElementById('education');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 4. Projects
    if (text.includes('project') || text.includes('healthcare') || text.includes('yoga') || text.includes('what have you built')) {
      const answer = "Monali has developed two key projects: the Smart Healthcare Appointment and Prediction System, built using React, Node.js, Express, and MongoDB with role-based access for patients and doctors; and a Yoga Recommendation System built with Python to suggest tailored yoga practices.";
      setAiAnswer(answer);
      setStatusMessage('Answering: Featured Projects');
      speakVoice(answer);
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 5. Coding Profiles (LeetCode, GitHub, CodeChef)
    if (text.includes('leetcode') || text.includes('codechef') || text.includes('github') || text.includes('coding')) {
      const answer = "Monali is active on competitive programming platforms! She has profiles on LeetCode, CodeChef, and GitHub. You can find her direct links in the contact section.";
      setAiAnswer(answer);
      setStatusMessage('Answering: Coding Profiles');
      speakVoice(answer);
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 6. Contact & Hiring
    if (text.includes('contact') || text.includes('hire') || text.includes('reach') || text.includes('email') || text.includes('connect')) {
      const answer = "You can contact Monali using the message form at the bottom of the page, or connect with her on LinkedIn and GitHub.";
      setAiAnswer(answer);
      setStatusMessage('Answering: Contact Details');
      speakVoice(answer);
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 7. Navigation Commands
    if (text.includes('home') || text.includes('top')) {
      const answer = "Navigating to home.";
      setAiAnswer(answer);
      speakVoice(answer);
      const el = document.getElementById('home');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (text.includes('theme') || text.includes('dark mode') || text.includes('light mode')) {
      const answer = "Toggling visual theme.";
      setAiAnswer(answer);
      speakVoice(answer);
      if (toggleTheme) toggleTheme();
      return;
    }

    // 8. General fallback query
    const fallbackAnswer = "I am Monali's portfolio AI voice assistant. You can ask me about her skills, education, projects, or how to contact her.";
    setAiAnswer(fallbackAnswer);
    setStatusMessage('Query recognized');
    speakVoice(fallbackAnswer);
  };

  const startListening = () => {
    stopVoice();
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.start();
      setIsListening(true);
      setStatusMessage('Listening... Ask a question about Monali.');
    } catch (err) {
      console.warn('Error starting speech recognition:', err);
    }
  };

  const stopListening = () => {
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.stop();
      setIsListening(false);
      setStatusMessage('Listening paused.');
    } catch (err) {
      console.warn('Error stopping speech recognition:', err);
    }
  };

  const handlePromptClick = (questionPhrase) => {
    setTranscript(questionPhrase);
    handleConversationalQuery(questionPhrase);
  };

  const quickVoicePrompts = [
    "Who is Monali?",
    "What are your skills?",
    "Tell me about your education",
    "What projects have you built?",
    "Tell me about your coding profiles",
    "How can I contact you?",
  ];

  return (
    <>
      {/* Floating Microphone Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={onOpen}
          aria-label="Open AI Voice Assistant"
          className="relative group p-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center"
        >
          {/* Subtle glowing ring */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 opacity-60 blur-md group-hover:opacity-100 transition-opacity animate-pulse-subtle" />
          
          <Mic className="relative z-10 w-6 h-6" />

          {/* Tooltip hint */}
          <span className="absolute left-16 px-3 py-1.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            AI Voice Assistant (Talk to me)
          </span>
        </button>
      </div>

      {/* Voice Assistant Modal / Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className={`relative w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 ${
            isDark ? 'bg-slate-900 border-cyan-500/30 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
          }`}>
            
            {/* Header */}
            <div className={`p-4 px-6 border-b flex items-center justify-between ${
              isDark ? 'border-white/10 bg-slate-950/70' : 'border-slate-200 bg-slate-50'
            }`}>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base flex items-center gap-1.5">
                    <span>AI Voice Assistant</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-xs text-cyan-400">
                    Speaks & answers questions about Monali
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Voice speech toggle */}
                <button
                  onClick={() => {
                    if (isSpeaking) stopVoice();
                    setTtsEnabled(!ttsEnabled);
                  }}
                  title={ttsEnabled ? 'Mute AI voice output' : 'Enable AI voice output'}
                  className={`p-2 rounded-xl border text-xs transition-colors cursor-pointer ${
                    ttsEnabled
                      ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                      : 'border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {ttsEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => {
                    stopListening();
                    stopVoice();
                    onClose();
                  }}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${
                    isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Listening & Visualizer Area */}
            <div className="p-6 text-center space-y-4">
              
              {/* Mic Status Circle */}
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={isListening ? stopListening : startListening}
                  className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    isListening
                      ? 'bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 text-white shadow-[0_0_35px_rgba(6,182,212,0.6)] scale-105'
                      : isSpeaking
                      ? 'bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.6)] animate-pulse'
                      : isDark
                      ? 'bg-slate-800 text-slate-300 border border-white/10 hover:border-cyan-400'
                      : 'bg-slate-100 text-slate-700 border border-slate-300 hover:border-cyan-500'
                  }`}
                >
                  {isListening && (
                    <span className="absolute -inset-2 rounded-full border-2 border-cyan-400 animate-ping opacity-60" />
                  )}
                  {isListening ? (
                    <Mic className="w-10 h-10 animate-bounce" />
                  ) : isSpeaking ? (
                    <Volume2 className="w-10 h-10 animate-pulse" />
                  ) : (
                    <Mic className="w-10 h-10 text-cyan-400" />
                  )}
                </button>

                {/* Animated Sound Wave Bars when Speaking or Listening */}
                {(isListening || isSpeaking) && (
                  <div className="flex items-center gap-1.5 mt-3 h-6">
                    <span className="w-1 bg-cyan-400 rounded-full h-3 animate-pulse" />
                    <span className="w-1 bg-blue-400 rounded-full h-6 animate-pulse" style={{ animationDelay: '100ms' }} />
                    <span className="w-1 bg-violet-400 rounded-full h-4 animate-pulse" style={{ animationDelay: '200ms' }} />
                    <span className="w-1 bg-cyan-400 rounded-full h-6 animate-pulse" style={{ animationDelay: '150ms' }} />
                    <span className="w-1 bg-blue-400 rounded-full h-3 animate-pulse" style={{ animationDelay: '50ms' }} />
                  </div>
                )}
              </div>

              {/* Status Message */}
              <div className="min-h-[28px] flex items-center justify-center">
                <p className={`text-xs font-semibold ${
                  isListening
                    ? 'text-cyan-400 animate-pulse'
                    : isSpeaking
                    ? 'text-violet-400 animate-pulse'
                    : isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {statusMessage}
                </p>
              </div>

              {/* Spoken Query Box */}
              {transcript && (
                <div className={`p-3 rounded-xl border text-left text-xs ${
                  isDark ? 'bg-slate-950/60 border-white/5' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-0.5">
                    You asked:
                  </span>
                  <p className="font-semibold text-cyan-300">
                    “{transcript}”
                  </p>
                </div>
              )}

              {/* AI Spoken Answer Box */}
              {aiAnswer && (
                <div className={`p-4 rounded-xl border text-left text-xs space-y-2 ${
                  isDark ? 'bg-slate-950/80 border-cyan-500/20 text-slate-200' : 'bg-cyan-50/50 border-cyan-200 text-slate-800'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono text-cyan-400 font-bold flex items-center gap-1">
                      <Bot className="w-3 h-3" />
                      <span>AI Spoken Answer:</span>
                    </span>
                    {isSpeaking && (
                      <button
                        onClick={stopVoice}
                        className="text-[10px] text-rose-400 flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <Square className="w-2.5 h-2.5 fill-current" />
                        <span>Stop Voice</span>
                      </button>
                    )}
                  </div>
                  <p className="leading-relaxed">
                    {aiAnswer}
                  </p>
                </div>
              )}

              {/* Control Buttons: Start Listening / Stop */}
              <div className="flex items-center justify-center gap-2.5 pt-1">
                {!isListening ? (
                  <button
                    onClick={startListening}
                    disabled={!isSupported}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 flex items-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                  >
                    <Mic className="w-3.5 h-3.5" />
                    <span>Start Listening</span>
                  </button>
                ) : (
                  <button
                    onClick={stopListening}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 shadow-md shadow-rose-600/20 flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <MicOff className="w-3.5 h-3.5" />
                    <span>Stop Listening</span>
                  </button>
                )}

                {isSpeaking && (
                  <button
                    onClick={stopVoice}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold border border-rose-500/40 text-rose-300 hover:bg-rose-500/10 cursor-pointer"
                  >
                    Mute Speech
                  </button>
                )}
              </div>

              {/* Quick Spoken Question Prompts */}
              <div className="pt-3 border-t border-white/10 text-left">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 block mb-2">
                  Sample Questions (Tap to speak & ask):
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                  {quickVoicePrompts.map((q) => (
                    <button
                      key={q}
                      onClick={() => handlePromptClick(q)}
                      className={`p-2 rounded-lg border text-left transition-colors flex items-center justify-between group cursor-pointer ${
                        isDark
                          ? 'border-white/5 bg-slate-950/40 hover:bg-cyan-950/30 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300'
                          : 'border-slate-200 bg-slate-50 hover:bg-cyan-50 hover:border-cyan-400 text-slate-700 hover:text-cyan-700'
                      }`}
                    >
                      <span>🎙️ {q}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Privacy notice banner */}
            <div className={`p-2.5 px-6 text-[10px] border-t flex items-center justify-between ${
              isDark ? 'bg-slate-950 text-slate-400 border-white/5' : 'bg-slate-100 text-slate-500 border-slate-200'
            }`}>
              <span>🔒 100% Client-side speech. Zero audio recordings saved.</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
