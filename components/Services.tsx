import React from 'react';
import { Moon, Sun, HeartPulse, BrainCircuit } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Treatment',
    description: '24/7 support in a safe and structured setting. immersive healing away from daily stressors.',
    icon: Moon
  },
  {
    id: 'outpatient',
    title: 'Outpatient Therapy',
    description: 'Flexible care for daily life. Maintains continuity of care while you live at home.',
    icon: Sun
  },
  {
    id: 'trauma',
    title: 'Trauma & Mood Disorders',
    description: 'Specialized care for Anxiety, Depression, PTSD, Bipolar, OCD, and ADHD.',
    icon: BrainCircuit
  },
  {
    id: 'wellness',
    title: 'Holistic Wellness',
    description: 'Therapy plus coping skills, lifestyle coaching, and robust after‑care planning.',
    icon: HeartPulse
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-brand-700 font-bold uppercase tracking-wider text-sm mb-3">Our Services</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-800">Comprehensive Care Pathways</h3>
          </div>
          <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
             className="hidden md:inline-flex items-center text-brand-600 font-semibold hover:text-brand-800 transition-colors"
          >
            Schedule an Assessment &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div key={service.id} className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 hover:bg-brand-700 transition-colors duration-500">
              <div className="p-8 md:p-10 relative z-10">
                <service.icon size={40} className="text-brand-600 mb-6 group-hover:text-brand-300 transition-colors" />
                <h4 className="font-serif text-2xl font-bold text-slate-800 mb-3 group-hover:text-white transition-colors">{service.title}</h4>
                <p className="text-slate-600 text-lg group-hover:text-brand-50 transition-colors">
                  {service.description}
                </p>
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-200/20 rounded-full group-hover:bg-white/10 transition-colors"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
             className="text-brand-600 font-semibold hover:text-brand-800 transition-colors"
          >
            Schedule an Assessment &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};