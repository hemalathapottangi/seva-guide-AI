import React from 'react';
import { 
  X, 
  Building2, 
  ShieldCheck, 
  GraduationCap, 
  CheckCircle2, 
  Cpu, 
  Globe2, 
  FileCheck2,
  HeartHandshake
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;

  const t = translations[lang];

  return (
    <div 
      id="about-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="about-modal-panel"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-blue-200 uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
                <span>Final-Year CSE AI Vibe Coding Project</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">
                SEVAGUIDE AI
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-slate-700 text-sm leading-relaxed">
          {/* Problem & Purpose Statement */}
          <div className="space-y-2">
            <h4 className="text-base font-bold text-slate-900">
              The Mission of SEVAGUIDE AI
            </h4>
            <p className="text-slate-600">
              Millions of citizens across India miss out on transformative welfare, educational, agricultural, and healthcare benefits simply because information is fragmented, eligibility criteria are complex, and application procedures can feel intimidating.
            </p>
            <p className="text-slate-600">
              SEVAGUIDE AI bridges this information divide through an intelligent conversational assistant, multilingual support, and a structured single-stop access roadmap that pairs authentic government directories with transparent guidance.
            </p>
          </div>

          {/* 7 Core Features Checklist */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-blue-800">
              7 Core Architectural Capabilities
            </h5>
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">1. Service Details & Eligibility</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">2. Required Document Checklists</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">3. Step-by-Step Guidance</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">4. Direct Official Service Links</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                <Globe2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">5. Multilingual Support (EN, TE, HI)</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">6. Simple, Accessible UI</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 sm:col-span-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">7. Awareness Notifications & Official Advisories</span>
              </div>
            </div>
          </div>

          {/* AI & Tech Stack Details */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-indigo-600" />
              <span>Technology & SEVAGUIDE AI Architecture</span>
            </h5>
            <p className="text-xs text-slate-600">
              Built using React 18, TypeScript, Tailwind CSS, and Vite. The SEVAGUIDE AI Assistant utilizes a conversational intent-reasoning engine grounded strictly in verified government scheme data (servicesData.ts). It provides contextual follow-up handling, eligibility checklists, and zero-cost offline resilience.
            </p>
          </div>

          {/* Privacy & Safety Disclaimer */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 space-y-1">
            <span className="font-bold block">Safety & Independent Initiative:</span>
            <p>
              This portal is an educational project developed for academic demonstration. While all links direct to genuine .gov.in and .nic.in portals, please always verify the browser address bar before transacting.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors"
          >
            {t.cancel}
          </button>
        </div>
      </div>
    </div>
  );
};
