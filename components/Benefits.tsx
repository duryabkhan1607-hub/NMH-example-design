import React from 'react';
import { Leaf, UserCheck, Home, ShieldCheck } from 'lucide-react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    id: 'holistic',
    title: 'Holistic Healing',
    description: 'We combine evidence‑based therapy (CBT, DBT) with holistic support — healing mind, body, and soul.',
    icon: Leaf
  },
  {
    id: 'personalized',
    title: 'Personalized Care',
    description: 'Licensed clinicians design individual treatment plans that respect your story, your pace, and your dignity.',
    icon: UserCheck
  },
  {
    id: 'residential',
    title: 'Flexible Options',
    description: 'Whether you need daily therapy or residential support, we offer care that adapts to your needs.',
    icon: Home
  },
  {
    id: 'safe',
    title: 'Safe Environment',
    description: 'Located in a serene setting in Murfreesboro, offering privacy, comfort, and a peaceful atmosphere.',
    icon: ShieldCheck
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-700 font-bold uppercase tracking-wider text-sm mb-3">Why Choose Nashville Mental Health</h2>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-6">Healing Beyond Symptoms</h3>
          <p className="text-slate-600 text-lg">
            We believe in treating the whole person, not just the diagnosis. Our approach is grounded in compassion and driven by results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-warm-100 group">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                <benefit.icon size={28} />
              </div>
              <h4 className="font-serif text-xl font-bold text-slate-800 mb-3">{benefit.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};