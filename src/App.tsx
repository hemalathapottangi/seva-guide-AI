import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Search, 
  Filter, 
  CheckCircle2, 
  Sparkles, 
  Bell, 
  Bookmark, 
  FileText, 
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';

import { 
  Language, 
  GovernmentService, 
  Category, 
  TargetGroup, 
  AwarenessNotification 
} from './types';
import { servicesData } from './data/servicesData';
import { announcementsData } from './data/announcementsData';
import { translations } from './data/translations';

// Utilities
import { 
  getSavedLanguage, 
  saveLanguage, 
  getSavedServices, 
  toggleSaveService, 
  getCheckedDocs, 
  toggleDocChecked,
  getReadNotices,
  markNoticeRead
} from './utils/storage';

// Components
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ServiceCard } from './components/ServiceCard';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { RedirectNoticeModal } from './components/RedirectNoticeModal';
import { AiServiceAdvisor } from './components/AiServiceAdvisor';
import { AwarenessSection } from './components/AwarenessSection';
import { EligibilityCheckerModal } from './components/EligibilityCheckerModal';
import { SavedServicesDrawer } from './components/SavedServicesDrawer';
import { AboutModal } from './components/AboutModal';
import { Footer } from './components/Footer';

export default function App() {
  // Global Language State (Feature 5)
  const [currentLang, setCurrentLang] = useState<Language>(() => getSavedLanguage('en'));

  // Active Navigation Tab
  const [activeTab, setActiveTab] = useState<'services' | 'eligibility' | 'awareness' | 'ai'>('services');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedAudience, setSelectedAudience] = useState<TargetGroup | 'all'>('all');

  // Modal & Drawer States
  const [selectedService, setSelectedService] = useState<GovernmentService | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  
  // Direct Application Redirect Modal State (Feature 4)
  const [redirectModalState, setRedirectModalState] = useState<{
    isOpen: boolean;
    url: string;
    portalName: string;
  }>({
    isOpen: false,
    url: '',
    portalName: ''
  });

  // Saved / Bookmarked Schemes
  const [savedIds, setSavedIds] = useState<string[]>(() => getSavedServices());
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Checked Documents state for interactive checklists (Feature 2)
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>(() => getCheckedDocs());

  // Awareness Notifications state (Feature 7)
  const [readNoticeIds, setReadNoticeIds] = useState<string[]>(() => getReadNotices());

  // About modal
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Sync Language change
  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    saveLanguage(lang);
  };

  // Sync Saved schemes
  const handleToggleSave = (serviceId: string) => {
    const updated = toggleSaveService(serviceId);
    setSavedIds(updated);
  };

  // Sync Checked Documents
  const handleToggleDoc = (docId: string) => {
    const updated = toggleDocChecked(docId);
    setCheckedDocs(updated);
  };

  // Sync Read notices
  const handleMarkNoticeRead = (noticeId: string) => {
    const updated = markNoticeRead(noticeId);
    setReadNoticeIds(updated);
  };

  // Service Selection
  const handleSelectService = (service: GovernmentService) => {
    setSelectedService(service);
    setIsDetailModalOpen(true);
  };

  // Apply Direct Trigger (Shows authentic redirect modal)
  const handleApplyDirect = (service: GovernmentService) => {
    setRedirectModalState({
      isOpen: true,
      url: service.links.applyUrl,
      portalName: service.links.portalName
    });
  };

  // Handle awareness alert click
  const handleSelectNotice = (notice: AwarenessNotification) => {
    if (notice.relatedServiceId) {
      const found = servicesData.find(s => s.id === notice.relatedServiceId);
      if (found) {
        handleSelectService(found);
        return;
      }
    }
    setActiveTab('awareness');
  };

  const t = translations[currentLang];

  // Urgent unread notices count
  const urgentNoticesCount = announcementsData.filter(
    n => n.isUrgent && !readNoticeIds.includes(n.id)
  ).length;

  const topUrgentNotice = announcementsData.find(n => n.isUrgent);

  // Filter Services Logic
  const filteredServices = servicesData.filter((service) => {
    // 1. Category Filter
    if (selectedCategory !== 'all' && service.category !== selectedCategory) {
      return false;
    }

    // 2. Target Audience Filter
    if (selectedAudience !== 'all' && !service.targetGroups.includes(selectedAudience)) {
      return false;
    }

    // 3. Search Query (matches Title in current lang, English title, tags, department, or purpose)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const nameCurrent = service.name[currentLang]?.toLowerCase() || '';
      const nameEn = service.name.en.toLowerCase();
      const descCurrent = service.shortDescription[currentLang]?.toLowerCase() || '';
      const deptCurrent = service.department[currentLang]?.toLowerCase() || '';
      const tagsMatch = service.tags.some(t => t.toLowerCase().includes(query));

      const matchesSearch = 
        nameCurrent.includes(query) ||
        nameEn.includes(query) ||
        descCurrent.includes(query) ||
        deptCurrent.includes(query) ||
        tagsMatch;

      if (!matchesSearch) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Top Main Navigation (Feature 5 & 6) */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        urgentNoticesCount={urgentNoticesCount}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* TAB 1: Services Directory & Main Portal (Features 1, 2, 3, 4, 6) */}
        {activeTab === 'services' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Hero Banner with Search & Filters */}
            <HeroBanner
              currentLang={currentLang}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              selectedAudience={selectedAudience}
              onSelectAudience={setSelectedAudience}
              onOpenAi={() => setActiveTab('ai')}
              latestNotice={topUrgentNotice}
              onSelectNotice={handleSelectNotice}
            />

            {/* Services Grid Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
                    <Layers className="w-5 h-5 text-blue-700" />
                    <span>Government Services & Schemes</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Showing <span className="font-bold text-slate-800">{filteredServices.length}</span> verified welfare initiatives
                  </p>
                </div>

                {/* Reset filters if active */}
                {(selectedCategory !== 'all' || selectedAudience !== 'all' || searchQuery) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedAudience('all');
                      setSearchQuery('');
                    }}
                    className="text-xs text-blue-700 hover:text-blue-900 font-semibold bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors"
                  >
                    Reset all filters
                  </button>
                )}
              </div>

              {/* Grid of Service Cards */}
              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      currentLang={currentLang}
                      onSelect={handleSelectService}
                      onApplyDirect={handleApplyDirect}
                      isSaved={savedIds.includes(service.id)}
                      onToggleSave={handleToggleSave}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4 shadow-xs">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                    <Search className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">No schemes found</h4>
                  <p className="text-sm text-slate-500 max-w-md mx-auto">
                    We could not find any government schemes matching your current query or category filter. Try clearing your search or explore the AI Scheme Advisor.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                        setSelectedAudience('all');
                      }}
                      className="px-5 py-2.5 bg-blue-700 text-white text-xs font-bold rounded-xl hover:bg-blue-800 transition-colors"
                    >
                      Clear All Filters
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('ai')}
                      className="px-5 py-2.5 bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold rounded-xl hover:bg-indigo-100 transition-colors flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>Use AI Scheme Advisor</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: Interactive Eligibility Checker (Feature 1) */}
        {activeTab === 'eligibility' && (
          <EligibilityCheckerModal
            currentLang={currentLang}
            onSelectService={handleSelectService}
            onApplyDirect={handleApplyDirect}
          />
        )}

        {/* TAB 3: Awareness Notifications & Updates (Feature 7) */}
        {activeTab === 'awareness' && (
          <AwarenessSection
            currentLang={currentLang}
            onSelectService={handleSelectService}
            readNoticeIds={readNoticeIds}
            onMarkRead={handleMarkNoticeRead}
          />
        )}

        {/* TAB 4: AI Intelligent Scheme Advisor */}
        {activeTab === 'ai' && (
          <AiServiceAdvisor
            currentLang={currentLang}
            onSelectService={handleSelectService}
            onApplyDirect={handleApplyDirect}
          />
        )}
      </main>

      {/* Global Modals & Drawers */}

      {/* 1. Service Details Modal (Features 1, 2, 3, 4) */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        currentLang={currentLang}
        onApplyDirect={handleApplyDirect}
        checkedDocs={checkedDocs}
        onToggleDoc={handleToggleDoc}
        isSaved={selectedService ? savedIds.includes(selectedService.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* 2. Official Portal External Redirect Notice (Feature 4 requirement) */}
      <RedirectNoticeModal
        isOpen={redirectModalState.isOpen}
        onClose={() => setRedirectModalState(prev => ({ ...prev, isOpen: false }))}
        url={redirectModalState.url}
        portalName={redirectModalState.portalName}
        lang={currentLang}
      />

      {/* 3. Saved Schemes Drawer */}
      <SavedServicesDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedIds={savedIds}
        onToggleSave={handleToggleSave}
        currentLang={currentLang}
        onSelectService={handleSelectService}
        onApplyDirect={handleApplyDirect}
        checkedDocs={checkedDocs}
      />

      {/* 4. About Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        lang={currentLang}
      />

      {/* Floating Ask SEVAGUIDE AI Quick Button */}
      {activeTab !== 'ai' && (
        <button
          id="floating-ask-sevaguide-btn"
          type="button"
          onClick={() => {
            setActiveTab('ai');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-6 right-6 z-30 px-4 py-3 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 text-xs sm:text-sm border border-white/20"
          aria-label="Ask SEVAGUIDE AI Assistant"
        >
          <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300 animate-pulse" />
          <span className="hidden sm:inline">Ask SEVAGUIDE AI</span>
          <span className="sm:hidden">AI Assistant</span>
        </button>
      )}

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
      />
    </div>
  );
}
