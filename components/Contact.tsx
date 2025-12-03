import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Sparkles, MessageSquare } from 'lucide-react';
import { sendWellnessMessage } from '../services/geminiService';
import { ChatMessage } from '../types';

export const Contact: React.FC = () => {
  // Contact Form State
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  // AI Chat State
  const [chatOpen, setChatOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello. I am your wellness assistant. How are you feeling today? You can ask me about coping strategies or our services.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userText = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      const responseText = await sendWellnessMessage(userText);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please call us.", isError: true }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (chatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, chatOpen]);

  return (
    <section id="contact" className="py-20 bg-warm-100 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Form */}
          <div>
            <div className="mb-10">
              <h2 className="text-brand-700 font-bold uppercase tracking-wider text-sm mb-3">Get In Touch</h2>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-6">Start Your Healing Journey</h3>
              <p className="text-slate-600 text-lg">
                Ready to take the next step? Fill out the form below or call us 24/7. All communications are confidential.
              </p>
            </div>

            <div className="flex flex-col gap-6 mb-10">
              <a href="tel:6292991459" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Call Us 24/7</p>
                  <p className="text-xl font-bold text-slate-800">(629) 299‑1459</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Visit Us</p>
                  <p className="text-lg font-bold text-slate-800">1303 SE Broad St, Murfreesboro, TN</p>
                </div>
              </div>
            </div>

            {formStatus === 'success' ? (
              <div className="bg-green-100 border border-green-200 text-green-800 p-6 rounded-xl text-center animate-fade-in">
                <h4 className="font-bold text-xl mb-2">Message Sent</h4>
                <p>Thank you for reaching out. A compassionate intake specialist will contact you shortly.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-4 text-sm font-semibold underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-warm-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                  <input required type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                </div>
                <input required type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"></textarea>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                   {formStatus === 'submitting' ? 'Sending...' : 'Request Confidential Consultation'}
                </button>
              </form>
            )}
          </div>

          {/* AI Wellness Assistant Widget */}
          <div className="flex flex-col h-full justify-center">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-100 flex flex-col h-[600px] w-full max-w-md mx-auto">
              <div className="bg-brand-600 p-6 flex justify-between items-center text-white">
                <div>
                   <h4 className="font-bold text-lg flex items-center gap-2">
                     <Sparkles size={18} className="text-brand-200" /> 
                     Wellness Assistant
                   </h4>
                   <p className="text-xs text-brand-100 opacity-80">Powered by Gemini AI • Not medical advice</p>
                </div>
                <MessageSquare size={24} className="opacity-50" />
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-brand-600 text-white rounded-br-none' 
                        : 'bg-white border border-slate-100 shadow-sm text-slate-700 rounded-bl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-100 shadow-sm p-3 rounded-2xl rounded-bl-none flex gap-1">
                      <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce delay-75"></span>
                      <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce delay-150"></span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div className="p-4 bg-white border-t border-slate-100">
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask about anxiety, coping, or our center..."
                    className="flex-1 px-4 py-2 border border-slate-200 rounded-full focus:outline-none focus:border-brand-500 text-sm"
                  />
                  <button 
                    type="submit"
                    disabled={!query.trim() || isTyping}
                    className="bg-brand-600 text-white p-2 rounded-full hover:bg-brand-700 disabled:opacity-50 transition-colors"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
            <p className="text-center text-xs text-slate-400 mt-4">
              AI response can be inaccurate. In crisis? Call 988.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};