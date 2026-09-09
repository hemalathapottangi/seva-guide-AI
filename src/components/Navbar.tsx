import React, { useState } from 'react';
import { 
  Building2, 
  Languages, 
  Bookmark, 
  Sparkles, 
  Bell, 
  CheckCircle2, 
  HelpCircle, 
  Menu, 
  X,
  FileText
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: 'services' | 'eligibility' | 'awareness' | 'ai';
  onTabChange: (tab: 'services' | 'eligibility' | 'awareness' | 'ai') => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenAbout: () => void;
  urgentNoticesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onTabChange,
  savedCount,
  onOpenSaved,
  onOpenAbout,
  urgentNoticesCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const handleTabClick = (tab: 'services' | 'eligibility' | 'awareness' | 'ai') => {
    onTabChange(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header id="main-portal-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top micro-bar for national service helplines & language indication */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-200">{t.nationalHelpline}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="hidden sm:inline">Citizen Service Guidance Initiative</span>
            <span className="text-slate-500">|</span>
            <span>Toll-Free 24x7</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Portal Identity */}
          <div 
            id="portal-brand-logo" 
            onClick={() => handleTabClick('services')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-900 via-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {t.portalTitle}
                </h1>
                <span className="hidden md:inline-flex px-2 py-0.5 text-[10px] font-semibold tracking-wide bg-blue-100 text-blue-800 rounded-full border border-blue-200">
                  Gov MVP
                </span>
              </div>
              <p className="text-xs text-slate-500 line-clamp-1 max-w-md hidden sm:block">
                {t.portalSubtitle}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            <button
              id="nav-tab-services"
              type="button"
              onClick={() => handleTabClick('services')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'services'
                  ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{t.navServices}</span>
            </button>

            <button
              id="nav-tab-eligibility"
              type="button"
              onClick={() => handleTabClick('eligibility')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'eligibility'
                  ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{t.navEligibility}</span>
            </button>

            <button
              id="nav-tab-awareness"
              type="button"
              onClick={() => handleTabClick('awareness')}
              className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'awareness'
                  ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Bell className="w-4 h-4" />
              <span>{t.navAwareness}</span>
              {urgentNoticesCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold text-white bg-rose-600 rounded-full animate-pulse">
                  {urgentNoticesCount}
                </span>
              )}
            </button>

            <button
              id="nav-tab-ai"
              type="button"
              onClick={() => handleTabClick('ai')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-sm'
                  : 'text-indigo-700 bg-indigo-50/70 hover:bg-indigo-100 border border-indigo-200'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>{t.navAiFinder}</span>
            </button>
          </nav>

          {/* Right Action Tools: Language Selector + Saved Drawer + About */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Switcher (Feature 5) */}
            <div id="language-switcher-container" className="relative flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <Languages className="w-4 h-4 text-slate-500 ml-1.5 mr-1 shrink-0 hidden sm:inline" />
              <button
                id="lang-btn-en"
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  currentLang === 'en'
                    ? 'bg-white text-blue-800 shadow-xs border border-slate-200 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                id="lang-btn-te"
                type="button"
                onClick={() => onLanguageChange('te')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  currentLang === 'te'
                    ? 'bg-white text-blue-800 shadow-xs border border-slate-200 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="తెలుగు (Telugu)"
              >
                తెలుగు
              </button>
              <button
                id="lang-btn-hi"
                type="button"
                onClick={() => onLanguageChange('hi')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  currentLang === 'hi'
                    ? 'bg-white text-blue-800 shadow-xs border border-slate-200 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="हिंदी (Hindi)"
              >
                हिंदी
              </button>
            </div>

            {/* Saved Schemes Bookmark trigger */}
            <button
              id="saved-schemes-btn"
              type="button"
              onClick={onOpenSaved}
              className="relative p-2.5 text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
              title={t.navSaved}
              aria-label={t.navSaved}
            >
              <Bookmark className="w-4 h-4 text-slate-700" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-xs">
                  {savedCount}
                </span>
              )}
            </button>

            {/* About Modal trigger */}
            <button
              id="about-portal-btn"
              type="button"
              onClick={onOpenAbout}
              className="p-2.5 text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors hidden sm:inline-flex"
              title={t.navAbout}
              aria-label={t.navAbout}
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-700 rounded-xl border border-slate-200 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu" 
          className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg"
        >
          <button
            type="button"
            onClick={() => handleTabClick('services')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
              activeTab === 'services' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>{t.navServices}</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleTabClick('eligibility')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
              activeTab === 'eligibility' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.navEligibility}</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleTabClick('awareness')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
              activeTab === 'awareness' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <Bell className="w-4 h-4 text-amber-600" />
              <span>{t.navAwareness}</span>
            </div>
            {urgentNoticesCount > 0 && (
              <span className="px-2 py-0.5 text-xs font-bold text-white bg-rose-600 rounded-full">
                {urgentNoticesCount} new
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => handleTabClick('ai')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
              activeTab === 'ai' ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t.navAiFinder}</span>
            </div>
            <span className="text-[10px] bg-indigo-700 text-indigo-100 px-2 py-0.5 rounded-md">
              Instant
            </span>
          </button>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                onOpenAbout();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-slate-600 font-medium hover:text-blue-700 flex items-center gap-1.5 py-1"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{t.navAbout}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onOpenSaved();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-blue-700 font-semibold flex items-center gap-1.5 py-1"
            >
              <Bookmark className="w-4 h-4" />
              <span>{t.navSaved} ({savedCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
