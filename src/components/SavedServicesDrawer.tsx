import React from 'react';
import { 
  X, 
  Bookmark, 
  Trash2, 
  ExternalLink, 
  FileCheck2, 
  ArrowRight,
  Share2,
  Printer
} from 'lucide-react';
import { GovernmentService, Language } from '../types';
import { servicesData } from '../data/servicesData';
import { translations } from '../data/translations';

interface SavedServicesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  currentLang: Language;
  onSelectService: (service: GovernmentService) => void;
  onApplyDirect: (service: GovernmentService) => void;
  checkedDocs: Record<string, boolean>;
}

export const SavedServicesDrawer: React.FC<SavedServicesDrawerProps> = ({
  isOpen,
  onClose,
  savedIds,
  onToggleSave,
  currentLang,
  onSelectService,
  onApplyDirect,
  checkedDocs
}) => {
  if (!isOpen) return null;

  const t = translations[currentLang];
  const savedServices = servicesData.filter(s => savedIds.includes(s.id));

  const handlePrintAll = () => {
    window.print();
  };

  return (
    <div 
      id="saved-services-overlay"
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="saved-services-drawer-panel"
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <Bookmark className="w-5 h-5 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                {t.savedSchemesTitle}
              </h3>
              <p className="text-xs text-slate-400">
                {savedServices.length} {savedServices.length === 1 ? 'service saved' : 'services saved'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close saved drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Saved List */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4">
          {savedServices.length > 0 ? (
            savedServices.map((service) => {
              const readyCount = service.documents.filter(d => checkedDocs[d.id]).length;
              const totalDocs = service.documents.length;

              return (
                <div 
                  key={service.id}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 hover:border-blue-300 transition-all"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-blue-700 uppercase bg-blue-100/70 px-2 py-0.5 rounded">
                        {service.code}
                      </span>
                      <h4 
                        onClick={() => {
                          onSelectService(service);
                          onClose();
                        }}
                        className="text-sm font-bold text-slate-900 hover:text-blue-700 cursor-pointer mt-1 line-clamp-1"
                      >
                        {service.name[currentLang]}
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => onToggleSave(service.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition-colors"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Document prep progress */}
                  <div className="text-xs text-slate-600 flex items-center justify-between pt-1">
                    <span className="flex items-center gap-1.5">
                      <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Prepared: {readyCount} / {totalDocs} docs</span>
                    </span>
                    <span className="font-semibold text-blue-700">
                      {Math.round((readyCount / totalDocs) * 100)}%
                    </span>
                  </div>

                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${(readyCount / totalDocs) * 100}%` }}
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-2 border-t border-slate-200/60 text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        onSelectService(service);
                        onClose();
                      }}
                      className="flex-1 py-1.5 px-3 bg-white border border-slate-300 text-slate-800 font-semibold rounded-lg hover:bg-slate-100 flex items-center justify-center gap-1"
                    >
                      <span>Checklist</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onApplyDirect(service)}
                      className="py-1.5 px-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 flex items-center justify-center gap-1"
                    >
                      <span>Apply</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Bookmark className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-700">{t.noSavedSchemes}</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                {t.noSavedSubtitle}
              </p>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {savedServices.length > 0 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 shrink-0">
            <button
              type="button"
              onClick={handlePrintAll}
              className="w-full py-2.5 px-4 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Print Saved Schemes Planner</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
