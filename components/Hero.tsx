import React from 'react';
import { ChevronRight, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/10/1920/1080" 
          alt="Serene nature landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block bg-brand-500/20 backdrop-blur-md border border-brand-400/30 px-4 py-1.5 rounded-full text-brand-100 text-sm font-medium mb-6">
             Murfreesboro, TN • Licensed Treatment Center
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            A Safe Place to Heal. <br/>
            <span className="text-brand-300">A Path Forward to Hope.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
            Compassionate, personalized residential & outpatient mental health care. 
            You’re not alone — we walk the journey with you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-brand-500 hover:bg-brand-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-brand-500/40 flex items-center justify-center gap-2 group"
            >
              Start Your Journey
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="tel:6292991459"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call 24/7: (629) 299‑1459
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-slate-300">
             <div className="flex -space-x-3">
               {[1,2,3].map(i => (
                 <img key={i} src={`https://picsum.photos/id/${60+i}/50/50`} className="w-10 h-10 rounded-full border-2 border-slate-800" alt="Reviewer" />
               ))}
             </div>
             <div>
               <p className="font-semibold text-white">Rated 5 Stars</p>
               <p>Trusted by families in Tennessee</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};