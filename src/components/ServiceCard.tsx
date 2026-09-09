import React from 'react';
import { 
  Building2, 
  FileCheck2, 
  Calendar, 
  ExternalLink, 
  Bookmark, 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall,
  UserCheck
} from 'lucide-react';
import { GovernmentService, Language } from '../types';
import { translations } from '../data/translations';

interface ServiceCardProps {
  service: GovernmentService;
  currentLang: Language;
  onSelect: (service: GovernmentService) => void;
  onApplyDirect: (service: GovernmentService) => void;
  isSaved: boolean;
  onToggleSave: (serviceId: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  currentLang,
  onSelect,
  onApplyDirect,
  isSaved,
  onToggleSave
}) => {
  const t = translations[currentLang];

  const categoryBadgeColors: Record<string, string> = {
    education: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    agriculture: 'bg-lime-50 text-lime-800 border-lime-200',
    healthcare: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    housing: 'bg-amber-50 text-amber-800 border-amber-200',
    employment: 'bg-blue-50 text-blue-800 border-blue-200',
    business: 'bg-purple-50 text-purple-800 border-purple-200',
    social_welfare: 'bg-rose-50 text-rose-800 border-rose-200',
  };

  return (
    <div 
      id={`service-card-${service.id}`}
      className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 p-5 sm:p-6 overflow-hidden"
    >
      {/* Top Meta info: Department & Save Button */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-md border uppercase tracking-wider ${categoryBadgeColors[service.category] || 'bg-slate-100 text-slate-700'}`}>
              {service.code}
            </span>
            {service.popular && (
              <span className="px-2 py-0.5 text-[10px] font-extrabold tracking-wide uppercase bg-amber-100 text-amber-900 border border-amber-300 rounded-full">
                Popular Scheme
              </span>
            )}
          </div>

          <button
            id={`save-btn-${service.id}`}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(service.id);
            }}
            className={`p-2 rounded-xl border transition-colors ${
              isSaved 
                ? 'bg-blue-50 border-blue-300 text-blue-700' 
                : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100'
            }`}
            title={isSaved ? t.savedService : t.saveService}
            aria-label={isSaved ? t.savedService : t.saveService}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-blue-700' : ''}`} />
          </button>
        </div>

        {/* Department Name */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-2">
          <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">{service.department[currentLang]}</span>
        </div>

        {/* Scheme Name */}
        <h3 
          onClick={() => onSelect(service)}
          className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer leading-snug mb-2 line-clamp-2"
        >
          {service.name[currentLang]}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {service.shortDescription[currentLang]}
        </p>

        {/* Quick Details Pill Grid */}
        <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
          {/* Eligibility highlight */}
          <div className="flex items-start gap-2 text-slate-700">
            <UserCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="line-clamp-1">
              <strong className="text-slate-900">Who: </strong>
              <span>{service.eligibility.whoCanApply[currentLang]?.[0] || 'Eligible Citizens'}</span>
            </div>
          </div>

          {/* Required Documents count */}
          <div className="flex items-center gap-2 text-slate-700">
            <FileCheck2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong className="text-slate-900">{service.documents.length}</strong> {t.requiredDocuments} ({service.documents.filter(d => d.isMandatory).length} Mandatory)
            </span>
          </div>

          {/* Application Deadline */}
          <div className="flex items-center gap-2 text-slate-700">
            <Calendar className="w-4 h-4 text-indigo-600 shrink-0" />
            <span className="font-medium text-slate-800">
              {service.activeDeadline || t.openYearly}
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer Buttons */}
      <div className="pt-4 flex flex-col sm:flex-row gap-2 mt-2">
        <button
          id={`view-details-btn-${service.id}`}
          type="button"
          onClick={() => onSelect(service)}
          className="flex-1 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 border border-blue-200"
        >
          <span>{t.viewDetails}</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          id={`apply-quick-btn-${service.id}`}
          type="button"
          onClick={() => onApplyDirect(service)}
          className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shadow-xs"
          title="Opens official government portal"
        >
          <span>{t.applyNow}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
