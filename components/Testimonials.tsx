import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: 't1',
    quote: "When I felt like giving up, Nashville Mental Health gave me hope again. The therapists genuinely care and made me feel human again.",
    author: "Sarah L.",
    role: "Former Resident"
  },
  {
    id: 't2',
    quote: "The residential program was my safe space. I finally had the time and support to heal, not just survive day to day.",
    author: "Mark T.",
  },
  {
    id: 't3',
    quote: "Therapy here isn’t rushed. They listened to my story and built a plan that actually worked for my life.",
    author: "Jessica R.",
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-300 font-bold uppercase tracking-wider text-sm mb-3">Success Stories</h2>
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">Real Recovery, Real Stories</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-brand-900/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-700/50">
              <Quote className="text-brand-400 mb-6 opacity-50" size={32} />
              <p className="text-lg text-brand-50 italic mb-6 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-bold text-white">{t.author}</p>
                {t.role && <p className="text-brand-400 text-sm">{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
             {/* Mock Trust Badges */}
             <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-xl">Psychology Today</span>
                <span className="bg-green-500 text-[10px] px-1 rounded text-black font-bold">VERIFIED</span>
             </div>
        </div>
      </div>
    </section>
  );
};