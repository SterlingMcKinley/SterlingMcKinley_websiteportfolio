
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Handshake complete. I'm Sterling's SRE-Bot. How can I assist with your infrastructure or platform inquiry?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are a helpful portfolio assistant for Sterling McKinley, a Senior Site Reliability and Platform Engineer. Style: Professional, data-driven, teal/slate themed. Your knowledge: Sterling's experience at Capital One, PNC, and his expertise in K8s, Terraform, and AWS. Respond with logic and clarity. Keep answers concise."
        }
      });
      setMessages(prev => [...prev, { role: 'assistant', text: response.text || "No data received." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Critical: Connection lost." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl w-80 md:w-96 h-[500px] flex flex-col mb-4 overflow-hidden border border-slate-100 ring-1 ring-black/5">
          <div className="bg-slate-900 px-5 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.5)]"></div>
              <span className="text-[10px] font-bold text-slate-300 mono uppercase tracking-widest">SRE_AGENT_v3.0</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 space-y-6 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/10' 
                    : 'bg-slate-50 text-slate-700 border border-slate-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-50 text-slate-400 border border-slate-100 rounded-2xl px-4 py-2 text-xs italic mono">
                  Querying systems...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-white flex items-center space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="System prompt..."
              className="flex-grow bg-slate-50 border-none rounded-xl px-4 py-3 text-xs outline-none text-slate-900 placeholder-slate-400 font-medium focus:ring-1 focus:ring-teal-100"
            />
            <button 
              onClick={handleSend}
              className="bg-slate-900 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-teal-600 transition-all active:scale-95"
            >
              <i className="fa-solid fa-arrow-up text-xs"></i>
            </button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-2xl bg-slate-900 shadow-2xl flex items-center justify-center transition-all duration-300 active:scale-90 hover:scale-105 group relative"
      >
        <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-robot'} text-white text-xl relative z-10`}></i>
      </button>
    </div>
  );
};

export default Assistant;
