import React from 'react';
import { ExternalLink, ShieldCheck, AlertCircle, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface RedirectNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  portalName: string;
  lang: Language;
}

export const RedirectNoticeModal: React.FC<RedirectNoticeModalProps> = ({
  isOpen,
  onClose,
  url,
  portalName,
  lang
}) => {
  if (!isOpen) return null;

  const t = translations[lang];

  const handleProceed = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      id="redirect-modal-overlay" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div 
        id="redirect-modal-card" 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
                  {t.verifiedOfficialPortal}
                </span>
                <h3 className="text-lg font-bold leading-snug">
                  {t.externalRedirectTitle}
                </h3>
              </div>
            </div>
            <button
              id="redirect-modal-close-btn"
              onClick={onClose}
              className="p-1 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 space-y-4">
          <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2">
            <div className="text-xs font-semibold text-blue-800 uppercase tracking-wide">
              Destination Government Portal:
            </div>
            <div className="text-base font-bold text-slate-900 break-all flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{portalName}</span>
            </div>
            <div className="text-xs font-mono text-blue-700 bg-white/80 px-2.5 py-1 rounded-md border border-blue-100 break-all">
              {url}
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {t.externalRedirectMessage}
          </p>

          <div className="flex items-start gap-2.5 p-3 text-xs bg-amber-50 border border-amber-200 text-amber-900 rounded-xl">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Security Advice:</strong> Always verify that the web address in your browser bar ends with <strong>.gov.in</strong> or <strong>.nic.in</strong> before entering Aadhaar or bank credentials.
            </span>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-end">
            <button
              id="redirect-cancel-btn"
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
            >
              {t.cancel}
            </button>
            <button
              id="redirect-confirm-btn"
              type="button"
              onClick={handleProceed}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>{t.proceedToOfficialSite}</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
