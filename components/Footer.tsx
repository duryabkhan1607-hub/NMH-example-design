import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
               <Heart size={20} className="text-brand-500" fill="currentColor" />
               <span className="font-serif font-bold text-lg">Nashville Mental Health</span>
            </div>
            <p className="mb-6 max-w-sm">
              Compassionate, evidence-based residential and outpatient mental health treatment. 
              Restoring hope and healing lives in Middle Tennessee.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors cursor-pointer"></div>
               <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors cursor-pointer"></div>
               <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors cursor-pointer"></div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Residential Treatment</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Outpatient Therapy (IOP)</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Anxiety & Depression</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Trauma Recovery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white font-medium">(629) 299‑1459</li>
              <li>1303 SE Broad St</li>
              <li>Murfreesboro, TN 37130</li>
              <li className="mt-4"><a href="#contact" className="text-brand-400 underline">Get Directions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Nashville Mental Health. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
        
        <div className="mt-8 bg-red-900/20 border border-red-900/30 p-4 rounded text-center text-red-200 text-xs">
           <strong>Crisis Disclaimer:</strong> If you or a loved one are experiencing a medical emergency or mental health crisis, please call 911 or the Suicide & Crisis Lifeline at 988 immediately. This website is for informational purposes only.
        </div>
      </div>
    </footer>
  );
};