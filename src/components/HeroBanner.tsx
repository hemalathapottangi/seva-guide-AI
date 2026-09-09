import React from 'react';
import { 
  Search, 
  X, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  Tractor, 
  HeartPulse, 
  Home, 
  Briefcase, 
  Users, 
  Coins, 
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { Language, Category, TargetGroup, AwarenessNotification } from '../types';
import { translations } from '../data/translations';

interface HeroBannerProps {
  currentLang: Language;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  selectedAudience: TargetGroup | 'all';
  onSelectAudience: (aud: TargetGroup | 'all') => void;
  onOpenAi: () => void;
  latestNotice?: AwarenessNotification;
  onSelectNotice?: (notice: AwarenessNotification) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  currentLang,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  selectedAudience,
  onSelectAudience,
  onOpenAi,
  latestNotice,
  onSelectNotice
}) => {
  const t = translations[currentLang];

  const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: t.allCategories, icon: <Users className="w-4 h-4" /> },
    { id: 'education', label: t.catEducation, icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'agriculture', label: t.catAgriculture, icon: <Tractor className="w-4 h-4" /> },
    { id: 'healthcare', label: t.catHealthcare, icon: <HeartPulse className="w-4 h-4" /> },
    { id: 'housing', label: t.catHousing, icon: <Home className="w-4 h-4" /> },
    { id: 'employment', label: t.catEmployment, icon: <Briefcase className="w-4 h-4" /> },
    { id: 'business', label: t.catBusiness, icon: <Coins className="w-4 h-4" /> },
    { id: 'social_welfare', label: t.catSocialWelfare, icon: <CheckCircle2 className="w-4 h-4" /> },
  ];

  const audiences: { id: TargetGroup | 'all'; label: string }[] = [
    { id: 'all', label: t.allAudiences },
    { id: 'students', label: t.audStudents },
    { id: 'farmers', label: t.audFarmers },
    { id: 'senior_citizens', label: t.audSeniorCitizens },
    { id: 'women', label: t.audWomen },
    { id: 'youth', label: t.audYouth },
    { id: 'low_income', label: t.audLowIncome },
  ];

  return (
    <section id="portal-hero-section" className="relative bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200 pt-8 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Urgent Announcement Alert Strip (Feature 7) */}
        {latestNotice && (
          <div 
            id="hero-alert-banner"
            onClick={() => onSelectNotice && onSelectNotice(latestNotice)}
            className="mb-6 inline-flex w-full items-center justify-between gap-3 p-3 sm:py-2.5 sm:px-4 bg-amber-50/90 border border-amber-300/80 rounded-2xl cursor-pointer hover:bg-amber-100/90 transition-all shadow-xs group"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-xl bg-amber-500 text-white shadow-xs">
                <ShieldAlert className="w-4 h-4" />
              </span>
              <div className="text-xs sm:text-sm text-amber-950 font-medium truncate">
                <span className="font-bold text-amber-900 mr-2 uppercase tracking-wide text-[11px] bg-amber-200/80 px-2 py-0.5 rounded-md">
                  {latestNotice.badgeText?.[currentLang] || 'Important'}
                </span>
                {latestNotice.title[currentLang]}
              </div>
            </div>
            <div className="flex items-center text-xs font-semibold text-amber-900 group-hover:translate-x-0.5 transition-transform shrink-0">
              <span className="hidden sm:inline mr-1">{t.viewRelatedService}</span>
              <ChevronRight className="w-4 h-4 text-amber-800" />
            </div>
          </div>
        )}

        {/* Hero Title & Subheading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-100/80 text-blue-900 rounded-full text-xs font-bold tracking-wide uppercase border border-blue-200">
            <span>{t.heroBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {t.heroHeading}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.heroSubheading}
          </p>
        </div>

        {/* Primary Search Input & AI Trigger */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative flex items-center bg-white rounded-2xl shadow-lg shadow-blue-900/5 border-2 border-blue-500/30 hover:border-blue-500 focus-within:border-blue-600 transition-all p-2 gap-2">
            <div className="pl-3 text-slate-400">
              <Search className="w-5 h-5 text-blue-600" />
            </div>

            <input
              id="citizen-scheme-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-transparent text-slate-900 text-sm sm:text-base placeholder-slate-400 focus:outline-hidden px-2 py-1"
            />

            {searchQuery && (
              <button
                id="search-clear-btn"
                type="button"
                onClick={() => onSearchChange('')}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors mr-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <button
              id="hero-ai-advisor-trigger"
              type="button"
              onClick={onOpenAi}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all shrink-0"
            >
              <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span className="hidden xs:inline">{t.navAiFinder}</span>
              <span className="xs:hidden">AI Assistant</span>
            </button>
          </div>

          {/* Prominent Ask SEVAGUIDE AI Quick-Help Callout */}
          <div 
            id="hero-ask-sevaguide-callout"
            className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-2.5 p-3 sm:px-4 bg-gradient-to-r from-indigo-50/90 via-blue-50/80 to-slate-50 border border-indigo-200/80 rounded-2xl shadow-2xs"
          >
            <div className="flex items-center gap-2.5 text-xs text-indigo-950 font-medium">
              <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              </span>
              <span>
                Not sure which service fits your situation? <strong>Ask SEVAGUIDE AI</strong> in natural words.
              </span>
            </div>
            <button
              id="hero-ask-sevaguide-ai-btn"
              type="button"
              onClick={onOpenAi}
              className="w-full sm:w-auto px-3.5 py-1.5 bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 shrink-0"
            >
              <span>Ask SEVAGUIDE AI</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:justify-center">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-cat-${cat.id}`}
                  type="button"
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 shrink-0 ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-sm shadow-blue-500/20 ring-2 ring-blue-600/30'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <span className={isSelected ? 'text-white' : 'text-blue-600'}>
                    {cat.icon}
                  </span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Citizen Target Group Quick Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[11px] shrink-0 mr-1">
              {t.quickFiltersLabel}
            </span>
            {audiences.map((aud) => {
              const isAudSelected = selectedAudience === aud.id;
              return (
                <button
                  key={aud.id}
                  id={`filter-aud-${aud.id}`}
                  type="button"
                  onClick={() => onSelectAudience(aud.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors shrink-0 whitespace-nowrap ${
                    isAudSelected
                      ? 'bg-indigo-900 text-white font-semibold shadow-xs'
                      : 'bg-slate-200/70 text-slate-700 hover:bg-slate-300/70'
                  }`}
                >
                  {aud.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
