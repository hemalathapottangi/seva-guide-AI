import React, { useState } from 'react';
import { 
  Bell, 
  AlertTriangle, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink, 
  Search, 
  ChevronRight,
  Filter,
  CheckCheck
} from 'lucide-react';
import { AwarenessNotification, Language, GovernmentService } from '../types';
import { announcementsData } from '../data/announcementsData';
import { servicesData } from '../data/servicesData';
import { translations } from '../data/translations';

interface AwarenessSectionProps {
  currentLang: Language;
  onSelectService: (service: GovernmentService) => void;
  readNoticeIds: string[];
  onMarkRead: (id: string) => void;
}

export const AwarenessSection: React.FC<AwarenessSectionProps> = ({
  currentLang,
  onSelectService,
  readNoticeIds,
  onMarkRead
}) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const t = translations[currentLang];

  const typeConfig: Record<string, { label: string; icon: React.ReactNode; bg: string; border: string; badge: string }> = {
    deadline: {
      label: t.filterDeadlines,
      icon: <Clock className="w-4 h-4 text-rose-600" />,
      bg: 'bg-rose-50/50',
      border: 'border-rose-200',
      badge: 'bg-rose-100 text-rose-800 border-rose-300'
    },
    new_scheme: {
      label: t.filterNewSchemes,
      icon: <Sparkles className="w-4 h-4 text-emerald-600" />,
      bg: 'bg-emerald-50/50',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    },
    advisory: {
      label: t.filterAdvisories,
      icon: <AlertTriangle className="w-4 h-4 text-amber-600" />,
      bg: 'bg-amber-50/50',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800 border-amber-300'
    },
    update: {
      label: t.filterUpdates,
      icon: <ShieldCheck className="w-4 h-4 text-blue-600" />,
      bg: 'bg-blue-50/50',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-800 border-blue-300'
    }
  };

  const filteredNotices = announcementsData.filter(notice => {
    const matchesType = filterType === 'all' || notice.type === filterType;
    const matchesSearch = !searchTerm || 
      notice.title[currentLang].toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.message[currentLang].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div id="awareness-section-container" className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-300">
      {/* Awareness Section Header */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider">
            <Bell className="w-3.5 h-3.5 text-amber-200 animate-bounce" />
            <span>Public Information Broadcast</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {t.awarenessTitle}
          </h2>

          <p className="text-sm sm:text-base text-amber-100 leading-relaxed">
            {t.awarenessSubtitle}
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Type Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => setFilterType('all')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
              filterType === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {t.filterAll} ({announcementsData.length})
          </button>

          {Object.entries(typeConfig).map(([key, config]) => {
            const count = announcementsData.filter(n => n.type === key).length;
            const isSelected = filterType === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFilterType(key)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{config.icon}</span>
                <span>{config.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search inside notices */}
        <div className="relative w-full md:w-64 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search updates..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Announcements Cards Grid */}
      {filteredNotices.length > 0 ? (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {filteredNotices.map((notice) => {
            const config = typeConfig[notice.type] || typeConfig.update;
            const isRead = readNoticeIds.includes(notice.id);
            const relatedService = notice.relatedServiceId 
              ? servicesData.find(s => s.id === notice.relatedServiceId) 
              : null;

            return (
              <div
                key={notice.id}
                id={`awareness-card-${notice.id}`}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-4 ${
                  config.bg
                } ${config.border} ${isRead ? 'opacity-85' : 'shadow-xs hover:shadow-md'}`}
              >
                <div className="space-y-3">
                  {/* Badge & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-0.5 text-xs font-bold rounded-md border uppercase tracking-wider flex items-center gap-1.5 ${config.badge}`}>
                      {config.icon}
                      <span>{notice.badgeText?.[currentLang] || config.label}</span>
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {notice.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {notice.title[currentLang]}
                  </h3>

                  {/* Message */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {notice.message[currentLang]}
                  </p>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between gap-3 text-xs">
                  {relatedService ? (
                    <button
                      type="button"
                      onClick={() => onSelectService(relatedService)}
                      className="text-blue-800 font-bold hover:text-blue-950 flex items-center gap-1 bg-white/80 px-3 py-1.5 rounded-lg border border-blue-200 hover:bg-white transition-colors"
                    >
                      <span>{t.viewRelatedService}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <span className="text-slate-500 text-[11px] font-medium">
                      National Citizen Advisory
                    </span>
                  )}

                  {!isRead && (
                    <button
                      type="button"
                      onClick={() => onMarkRead(notice.id)}
                      className="text-slate-500 hover:text-slate-800 font-medium flex items-center gap-1 transition-colors"
                      title="Mark as read"
                    >
                      <CheckCheck className="w-3.5 h-3.5" />
                      <span>Mark Read</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
          <Bell className="w-8 h-8 text-slate-400 mx-auto" />
          <h4 className="text-base font-bold text-slate-800">No updates matching your filter</h4>
          <p className="text-xs text-slate-500">Try selecting "All Updates" or clearing your search term.</p>
        </div>
      )}
    </div>
  );
};
