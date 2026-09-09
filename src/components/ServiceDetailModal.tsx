import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  CheckCircle2, 
  FileCheck2, 
  ExternalLink, 
  Calendar, 
  PhoneCall, 
  AlertCircle, 
  HelpCircle, 
  Printer, 
  Check, 
  Clock, 
  ShieldCheck, 
  Bookmark,
  Share2,
  ChevronRight,
  UserCheck,
  Info
} from 'lucide-react';
import { GovernmentService, Language } from '../types';
import { translations } from '../data/translations';

interface ServiceDetailModalProps {
  service: GovernmentService | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onApplyDirect: (service: GovernmentService) => void;
  checkedDocs: Record<string, boolean>;
  onToggleDoc: (docId: string) => void;
  isSaved: boolean;
  onToggleSave: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  currentLang,
  onApplyDirect,
  checkedDocs,
  onToggleDoc,
  isSaved,
  onToggleSave
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'eligibility' | 'documents' | 'steps' | 'links'>('eligibility');
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  // Quick Eligibility Evaluation State for Feature 1
  const [userAge, setUserAge] = useState<number>(24);
  const [userIncome, setUserIncome] = useState<number>(180000);
  const [hasCheckedStatus, setHasCheckedStatus] = useState<boolean>(false);

  if (!isOpen || !service) return null;

  const t = translations[currentLang];

  // Document preparation calculation
  const totalDocs = service.documents.length;
  const readyDocsCount = service.documents.filter(d => checkedDocs[d.id]).length;
  const docProgressPct = Math.round((readyDocsCount / (totalDocs || 1)) * 100);

  // Eligibility evaluation logic
  const meetsAge = (!service.eligibility.ageRange?.min || userAge >= service.eligibility.ageRange.min) &&
                   (!service.eligibility.ageRange?.max || userAge <= service.eligibility.ageRange.max);
  const meetsIncome = !service.eligibility.maxAnnualIncome || userIncome <= service.eligibility.maxAnnualIncome;
  const isLikelyEligible = meetsAge && meetsIncome;

  const handleCopyChecklist = () => {
    const text = [
      `REQUIRED DOCUMENTS CHECKLIST: ${service.name[currentLang]}`,
      `Department: ${service.department[currentLang]}`,
      `Official Portal: ${service.links.officialPortalUrl}`,
      '----------------------------------------',
      ...service.documents.map((d, i) => 
        `${i + 1}. [${checkedDocs[d.id] ? 'X' : ' '}] ${d.name[currentLang]} (${d.isMandatory ? 'MANDATORY' : 'OPTIONAL'}) - ${d.acceptableFormats}\n   Note: ${d.instructions[currentLang]}`
      ),
      '----------------------------------------',
      `Helpline: ${service.links.helplineNumber}`
    ].join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="service-detail-modal-overlay" 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="service-detail-modal-content" 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-5 sm:p-6 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 text-xs font-bold bg-blue-500/30 text-blue-200 border border-blue-400/30 rounded-md uppercase">
                  {service.code}
                </span>
                <span className="text-xs text-blue-200 font-medium">
                  {service.department[currentLang]}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {service.name[currentLang]}
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => onToggleSave(service.id)}
                className={`p-2 rounded-xl border transition-colors ${
                  isSaved 
                    ? 'bg-blue-600 border-blue-400 text-white' 
                    : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20'
                }`}
                title={isSaved ? t.savedService : t.saveService}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2 text-white/80 hover:text-white rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Meta Ribbon */}
          <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-white/10 text-xs text-blue-100">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>{service.activeDeadline || t.openYearly}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-300" />
              <span>{t.helpline}: {service.links.helplineNumber}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
              <span>{service.links.portalName}</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs for 4 Core Sub-Features */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 sm:px-6 flex items-center space-x-2 overflow-x-auto shrink-0 scrollbar-none">
          <button
            id="tab-detail-eligibility"
            type="button"
            onClick={() => setActiveSubTab('eligibility')}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeSubTab === 'eligibility'
                ? 'border-blue-700 text-blue-800 bg-white shadow-xs rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-4 h-4 text-blue-600" />
            <span>1. {t.eligibility}</span>
          </button>

          <button
            id="tab-detail-documents"
            type="button"
            onClick={() => setActiveSubTab('documents')}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeSubTab === 'documents'
                ? 'border-blue-700 text-blue-800 bg-white shadow-xs rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileCheck2 className="w-4 h-4 text-blue-600" />
            <span>2. {t.requiredDocuments} ({service.documents.length})</span>
          </button>

          <button
            id="tab-detail-steps"
            type="button"
            onClick={() => setActiveSubTab('steps')}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeSubTab === 'steps'
                ? 'border-blue-700 text-blue-800 bg-white shadow-xs rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>3. {t.applicationSteps} ({service.steps.length})</span>
          </button>

          <button
            id="tab-detail-links"
            type="button"
            onClick={() => setActiveSubTab('links')}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeSubTab === 'links'
                ? 'border-blue-700 text-blue-800 bg-white shadow-xs rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <ExternalLink className="w-4 h-4 text-blue-600" />
            <span>4. {t.officialLinks}</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">

          {/* ==================================================== */}
          {/* FEATURE 1: Service Details & Eligibility */}
          {/* ==================================================== */}
          {activeSubTab === 'eligibility' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Purpose & Overview */}
              <div className="p-4 sm:p-5 bg-blue-50/50 border border-blue-200 rounded-2xl space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-blue-700" />
                  <span>{t.purpose}</span>
                </h4>
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                  {service.purpose[currentLang]}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed pt-2 border-t border-blue-200/60">
                  {service.fullDescription[currentLang]}
                </p>
              </div>

              {/* Who Can Apply */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>{t.whoCanApply}</span>
                </h4>
                <div className="grid sm:grid-cols-1 gap-2.5">
                  {service.eligibility.whoCanApply[currentLang]?.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-sm text-slate-800 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Conditions & Disqualifiers */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  <span>{t.keyConditions}</span>
                </h4>
                <div className="space-y-2.5">
                  {service.eligibility.conditions[currentLang]?.map((condition, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-amber-50/60 border border-amber-200 rounded-xl">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold shrink-0 mt-0.5">
                        !
                      </span>
                      <span className="text-sm text-slate-800 leading-snug">{condition}</span>
                    </div>
                  ))}
                  {service.eligibility.notes && (
                    <div className="p-3 text-xs bg-slate-100 text-slate-600 rounded-xl border border-slate-200">
                      <strong>Special Instruction:</strong> {service.eligibility.notes[currentLang]}
                    </div>
                  )}
                </div>
              </div>

              {/* Interactive Eligibility Self-Check Tool (Feature 1 Requirement) */}
              <div className="p-5 bg-gradient-to-br from-indigo-50/80 to-blue-50/80 border border-blue-200 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-indigo-950 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-700" />
                    <span>{t.eligibilityCheckerTab}</span>
                  </h4>
                  <span className="text-[11px] font-semibold text-indigo-700 bg-white px-2.5 py-1 rounded-md border border-indigo-200">
                    Instant Self-Assessment
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.age}: <span className="text-blue-700">{userAge} Years</span>
                    </label>
                    <input 
                      type="range" 
                      min="10" 
                      max="85" 
                      value={userAge}
                      onChange={(e) => {
                        setUserAge(Number(e.target.value));
                        setHasCheckedStatus(true);
                      }}
                      className="w-full accent-blue-700 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>10 yrs</span>
                      <span>Scheme criteria: {service.eligibility.ageRange ? `${service.eligibility.ageRange.min || 0} - ${service.eligibility.ageRange.max || 100} yrs` : 'All ages'}</span>
                      <span>85 yrs</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.annualIncome}: <span className="text-blue-700">₹{userIncome.toLocaleString('en-IN')}</span>
                    </label>
                    <input 
                      type="range" 
                      min="0" 
                      max="1000000" 
                      step="25000"
                      value={userIncome}
                      onChange={(e) => {
                        setUserIncome(Number(e.target.value));
                        setHasCheckedStatus(true);
                      }}
                      className="w-full accent-blue-700 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>₹0</span>
                      <span>Max limit: {service.eligibility.maxAnnualIncome ? `₹${service.eligibility.maxAnnualIncome.toLocaleString('en-IN')}` : 'No limit'}</span>
                      <span>₹10L+</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                    isLikelyEligible 
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950' 
                      : 'bg-rose-50 border-rose-300 text-rose-950'
                  }`}>
                    {isLikelyEligible ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="text-sm font-bold">
                        {isLikelyEligible ? t.likelyEligible : t.notEligible}
                      </div>
                      <p className="text-xs mt-1 leading-relaxed">
                        {isLikelyEligible 
                          ? `Your age (${userAge} yrs) and declared annual income (₹${userIncome.toLocaleString('en-IN')}) fall within the general parameters. Please prepare the required documents in Tab 2 before submitting.`
                          : `The declared income or age does not align with the standard parameters (Max Income: ${service.eligibility.maxAnnualIncome ? `₹${service.eligibility.maxAnnualIncome.toLocaleString('en-IN')}` : 'N/A'}, Age: ${service.eligibility.ageRange ? `${service.eligibility.ageRange.min}-${service.eligibility.ageRange.max}` : 'Any'}).`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* FEATURE 2: Required Documents */}
          {/* ==================================================== */}
          {activeSubTab === 'documents' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Document Progress Header */}
              <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.docsTitle}</h4>
                    <p className="text-xs text-slate-600">{t.docsSubtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={handleCopyChecklist}
                      className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      {copiedSuccess ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Printer className="w-3.5 h-3.5 text-slate-500" />}
                      <span>{copiedSuccess ? 'Copied!' : t.downloadPrintChecklist}</span>
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>{t.docsReadyCounter}: {readyDocsCount} of {totalDocs} prepared</span>
                    <span>{docProgressPct}% Complete</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 rounded-full ${
                        docProgressPct === 100 ? 'bg-emerald-500' : 'bg-blue-600'
                      }`}
                      style={{ width: `${docProgressPct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Checklist Cards */}
              <div className="space-y-3">
                {service.documents.map((doc, idx) => {
                  const isChecked = !!checkedDocs[doc.id];
                  return (
                    <div 
                      key={doc.id}
                      onClick={() => onToggleDoc(doc.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                        isChecked 
                          ? 'bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-300/50' 
                          : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-blue-50/20'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onToggleDoc(doc.id)}
                        className="w-5 h-5 text-blue-600 rounded-md border-slate-300 focus:ring-blue-500 mt-0.5 cursor-pointer shrink-0"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h5 className={`text-sm sm:text-base font-bold ${isChecked ? 'text-emerald-950 line-through' : 'text-slate-900'}`}>
                            {doc.name[currentLang]}
                          </h5>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            doc.isMandatory 
                              ? 'bg-rose-100 text-rose-800 border border-rose-200' 
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}>
                            {doc.isMandatory ? t.mandatory : t.optional}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600">
                          {doc.description[currentLang]}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-500">
                          <span className="font-mono bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                            Format: {doc.acceptableFormats}
                          </span>
                          <span className="text-slate-600">
                            <strong>Note:</strong> {doc.instructions[currentLang]}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 text-xs bg-blue-50 border border-blue-200 text-blue-900 rounded-xl flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-700 shrink-0" />
                <span>
                  Check off documents as you assemble them. Your progress is saved automatically on this device.
                </span>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* FEATURE 3: Step-by-Step Application Guidance */}
          {/* ==================================================== */}
          {activeSubTab === 'steps' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-base font-bold text-slate-900">{t.stepsTitle}</h4>
                <p className="text-xs text-slate-600">{t.stepsSubtitle}</p>
              </div>

              {/* Numbered Steps */}
              <div className="space-y-4 relative before:absolute before:left-4 sm:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
                {service.steps.map((step) => (
                  <div key={step.stepNumber} className="relative flex items-start gap-4 sm:gap-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-700 text-white font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-md ring-4 ring-white z-10">
                      {step.stepNumber}
                    </div>
                    <div className="flex-1 p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h5 className="text-sm sm:text-base font-bold text-slate-900">
                          {step.title[currentLang]}
                        </h5>
                        {step.estimatedTime && (
                          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>{step.estimatedTime}</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {step.description[currentLang]}
                      </p>
                      {step.tips && (
                        <div className="mt-2 p-2.5 text-xs bg-amber-50/70 border border-amber-200/80 rounded-lg text-amber-900 flex items-start gap-2">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>{t.tipsAndAdvice}:</strong> {step.tips[currentLang]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* What to Do After Submitting Application (Feature 3 Requirement) */}
              <div className="mt-8 p-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-400" />
                  <h4 className="text-base font-bold text-white">
                    {t.postSubmissionTitle}
                  </h4>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                    <span className="text-indigo-200 font-semibold uppercase tracking-wider block mb-1">
                      {t.expectedTimeline}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {service.postSubmission.timeline[currentLang]}
                    </span>
                  </div>

                  <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                    <span className="text-indigo-200 font-semibold uppercase tracking-wider block mb-1">
                      {t.trackingMethod}
                    </span>
                    <span className="text-xs text-white">
                      {service.postSubmission.trackingMethod[currentLang]}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">
                    Post-Submission Milestone Stages:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {service.postSubmission.nextSteps[currentLang]?.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-indigo-100 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.grievanceRedressal}:</strong> {service.postSubmission.grievanceContact[currentLang]}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* FEATURE 4: Direct Service/Application Links */}
          {/* ==================================================== */}
          {activeSubTab === 'links' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-5 bg-blue-50 border border-blue-200 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-700 text-white rounded-xl">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-blue-700">
                      Authentic Government Links
                    </span>
                    <h4 className="text-lg font-bold text-slate-950">
                      {service.links.portalName}
                    </h4>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  All citizen registrations, document uploads, and payments are managed securely on the verified Government of India platform. No fee is charged by this portal.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    id="modal-apply-now-btn"
                    type="button"
                    onClick={() => onApplyDirect(service)}
                    className="flex-1 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>{t.applyNow}</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <a
                    id="modal-official-portal-btn"
                    href={service.links.officialPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{t.officialPortal}</span>
                    <ExternalLink className="w-4 h-4 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* Direct Service Verification Details */}
              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-800 uppercase tracking-wide">Direct Online Application URL</div>
                  <div className="font-mono text-blue-700 break-all">{service.links.applyUrl}</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-800 uppercase tracking-wide">Department Helpdesk</div>
                  <div className="text-slate-900 font-semibold">{service.links.helplineNumber} (Toll-Free)</div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold">Official Link Disclaimer:</span>
                  <p className="leading-relaxed">
                    When you click Apply Now, you will be redirected to the genuine national website ({service.links.portalName}). Ensure your browser shows a secure padlock icon and verified .gov.in domain.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Sticky Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 hidden sm:flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Government Scheme Guidance • Free Citizen Service</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => onApplyDirect(service)}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>{t.applyNow}</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
