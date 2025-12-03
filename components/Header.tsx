import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="bg-brand-600 p-2 rounded-lg text-white">
            <Heart size={24} fill="currentColor" />
          </div>
          <div className={`font-serif font-bold text-xl leading-tight ${isScrolled ? 'text-brand-900' : 'text-brand-900 lg:text-white'}`}>
            Nashville<br/><span className="text-brand-600 font-sans text-sm tracking-widest uppercase">Mental Health</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Benefits', 'Services', 'Testimonials'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-medium hover:text-brand-500 transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-slate-100'
              }`}
            >
              {item}
            </button>
          ))}
          <a 
            href="tel:6292991459" 
            className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-brand-500/30"
          >
            <Phone size={16} />
            <span>(629) 299‑1459</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-brand-800 bg-white/80 p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4 md:hidden animate-fade-in-down">
          {['Benefits', 'Services', 'Testimonials'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left py-2 text-slate-700 font-medium border-b border-gray-100"
            >
              {item}
            </button>
          ))}
          <button 
             onClick={() => scrollToSection('contact')}
             className="w-full bg-brand-600 text-white py-3 rounded-lg font-medium"
          >
            Contact Us
          </button>
          <a href="tel:6292991459" className="w-full flex justify-center items-center gap-2 text-brand-700 py-2 font-bold">
            <Phone size={18} /> Call 24/7
          </a>
        </div>
      )}
    </header>
  );
};