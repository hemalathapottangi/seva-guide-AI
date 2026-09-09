import React from 'react';
import { 
  Building2, 
  PhoneCall, 
  ShieldCheck, 
  ExternalLink, 
  HeartHandshake, 
  HelpCircle,
  FileCheck2,
  Globe2
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAbout: () => void;
  onOpenSaved: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onOpenAbout,
  onOpenSaved
}) => {
  const t = translations[currentLang];

  const helplines = [
    { name: 'Kisan Call Centre (Farmers)', number: '1800-180-1551' },
    { name: 'Ayushman Bharat (Health)', number: '14555' },
    { name: 'National Scholarship Portal', number: '0120-6619540' },
    { name: 'Elderline (Senior Citizens)', number: '14567' },
    { name: 'Cyber Crime Helpline', number: '1930' },
    { name: 'Women Helpline', number: '1091' },
  ];

  return (
    <footer id="portal-global-footer" className="bg-slate-900 text-slate-300 text-xs border-t border-slate-800 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Portal Overview */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-sm tracking-tight">{t.portalTitle}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {t.portalSubtitle}
            </p>
            <div className="pt-2 flex items-center gap-2 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verified .gov.in Directories</span>
            </div>
          </div>

          {/* Col 2: Important National Helplines */}
          <div className="space-y-3 md:col-span-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              <span>National Citizen Emergency & Welfare Helplines (24x7)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {helplines.map((item, index) => (
                <div key={index} className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                  <span className="text-slate-300 font-medium truncate mr-2">{item.name}</span>
                  <a 
                    href={`tel:${item.number.replace(/[^0-9]/g, '')}`}
                    className="text-blue-400 hover:text-blue-300 font-mono font-bold shrink-0"
                  >
                    {item.number}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Language & Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.language} Preferences</span>
            </h4>
            <div className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`text-left px-3 py-1.5 rounded-lg text-xs transition-colors ${currentLang === 'en' ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-800 text-slate-400'}`}
              >
                English (Default)
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('te')}
                className={`text-left px-3 py-1.5 rounded-lg text-xs transition-colors ${currentLang === 'te' ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-800 text-slate-400'}`}
              >
                తెలుగు (Telugu)
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('hi')}
                className={`text-left px-3 py-1.5 rounded-lg text-xs transition-colors ${currentLang === 'hi' ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-800 text-slate-400'}`}
              >
                हिंदी (Hindi)
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Academic Project Attribution */}
        <div className="pt-8 border-t border-slate-800 text-slate-500 text-xs space-y-2">
          <p className="leading-relaxed">
            <strong>Public Information Notice:</strong> All scheme details, eligibility guidelines, and document requirements are curated from official Government of India gazettes and web portals (such as NSP, PM-JAY, PM-Kisan, PMAY, e-Shram, and Mudra). This portal does not collect processing fees or confidential banking credentials.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-400">
            <span>
              SEVAGUIDE AI • Final-Year CSE AI Vibe Coding Project • Citizen Service Access & Awareness
            </span>
            <div className="flex items-center gap-4">
              <button onClick={onOpenAbout} className="hover:text-white transition-colors">
                About SEVAGUIDE AI
              </button>
              <button onClick={onOpenSaved} className="hover:text-white transition-colors">
                Saved Schemes
              </button>
              <a 
                href="https://india.gov.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>india.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
