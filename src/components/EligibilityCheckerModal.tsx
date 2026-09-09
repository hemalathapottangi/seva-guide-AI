import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  UserCheck, 
  ArrowRight, 
  ExternalLink, 
  Filter, 
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { GovernmentService, Language } from '../types';
import { servicesData } from '../data/servicesData';
import { translations } from '../data/translations';

interface EligibilityCheckerModalProps {
  currentLang: Language;
  onSelectService: (service: GovernmentService) => void;
  onApplyDirect: (service: GovernmentService) => void;
}

export const EligibilityCheckerModal: React.FC<EligibilityCheckerModalProps> = ({
  currentLang,
  onSelectService,
  onApplyDirect
}) => {
  const [age, setAge] = useState<number>(22);
  const [annualIncome, setAnnualIncome] = useState<number>(180000);
  const [occupation, setOccupation] = useState<string>('student');
  const [hasLand, setHasLand] = useState<boolean>(false);
  const [isEvaluated, setIsEvaluated] = useState<boolean>(true);

  const t = translations[currentLang];

  // Evaluate services based on user parameters
  const evaluateService = (service: GovernmentService) => {
    const ageOk = (!service.eligibility.ageRange?.min || age >= service.eligibility.ageRange.min) &&
                  (!service.eligibility.ageRange?.max || age <= service.eligibility.ageRange.max);

    const incomeOk = !service.eligibility.maxAnnualIncome || annualIncome <= service.eligibility.maxAnnualIncome;

    let roleOk = false;
    if (occupation === 'student' && service.targetGroups.includes('students')) roleOk = true;
    if (occupation === 'farmer' && service.targetGroups.includes('farmers')) roleOk = true;
    if (occupation === 'senior' && (service.targetGroups.includes('senior_citizens') || age >= 60)) roleOk = true;
    if (occupation === 'worker' && (service.id === 'e-shram' || service.category === 'employment')) roleOk = true;
    if (occupation === 'business' && service.category === 'business') roleOk = true;
    if (occupation === 'woman' && service.targetGroups.includes('women')) roleOk = true;
    if (service.targetGroups.includes('all')) roleOk = true;

    if (ageOk && incomeOk && roleOk) {
      return 'eligible';
    } else if (ageOk && incomeOk) {
      return 'partial';
    }
    return 'ineligible';
  };

  const results = servicesData.map(service => ({
    service,
    status: evaluateService(service)
  }));

  const eligibleList = results.filter(r => r.status === 'eligible');
  const partialList = results.filter(r => r.status === 'partial');

  return (
    <div id="eligibility-checker-page" className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Qualification Assessment</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {t.eligibilityTitle}
          </h2>

          <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
            {t.eligibilitySubtitle}
          </p>
        </div>
      </div>

      {/* Interactive Form Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-md space-y-6">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <Filter className="w-5 h-5 text-blue-600" />
          <span>Enter Your Citizen Profile Details</span>
        </h3>

        <div className="grid sm:grid-cols-3 gap-6">
          {/* Occupation / Profile */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
              {t.occupation}
            </label>
            <select
              id="eligibility-occupation-select"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="w-full p-3 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-hidden font-medium text-slate-800"
            >
              <option value="student">Student / Pursuing Higher Education</option>
              <option value="farmer">Farmer / Agricultural Landowner</option>
              <option value="senior">Senior Citizen (60+ Years)</option>
              <option value="worker">Daily Wage / Unorganized Sector Worker</option>
              <option value="business">Self-Employed / Small Business / MSME</option>
              <option value="woman">Woman / Girl Child Guardian</option>
              <option value="general">General Resident / Home Seeker</option>
            </select>
          </div>

          {/* Age Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                {t.age}
              </label>
              <span className="text-sm font-bold text-blue-700 px-2 py-0.5 bg-blue-50 rounded-md">
                {age} Years
              </span>
            </div>
            <input
              id="eligibility-age-slider"
              type="range"
              min="10"
              max="85"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full accent-blue-700 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>10 yrs</span>
              <span>45 yrs</span>
              <span>85 yrs</span>
            </div>
          </div>

          {/* Annual Family Income Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                {t.annualIncome}
              </label>
              <span className="text-sm font-bold text-blue-700 px-2 py-0.5 bg-blue-50 rounded-md">
                ₹{annualIncome.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              id="eligibility-income-slider"
              type="range"
              min="0"
              max="1000000"
              step="25000"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              className="w-full accent-blue-700 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>₹0 (BPL)</span>
              <span>₹5,00,000</span>
              <span>₹10,00,000+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Matches Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>High Probability Matches for Your Profile ({eligibleList.length})</span>
          </h3>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Meets Age, Income & Category
          </span>
        </div>

        {eligibleList.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {eligibleList.map(({ service }) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl border-2 border-emerald-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 uppercase">
                      {service.code}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {service.department[currentLang]}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-2">
                    {service.name[currentLang]}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                    {service.shortDescription[currentLang]}
                  </p>

                  <div className="p-2.5 bg-emerald-50/60 rounded-xl border border-emerald-200/70 text-xs text-emerald-950 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your declared income & age qualify under this scheme.</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="flex-1 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 font-semibold text-xs transition-colors border border-blue-200 flex items-center justify-center gap-1"
                  >
                    <span>View Required Documents</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onApplyDirect(service)}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1"
                  >
                    <span>{t.applyNow}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">No direct matches for the exact filters.</p>
            <p className="text-xs text-slate-500 mt-1">Try adjusting the income bracket or select another occupation.</p>
          </div>
        )}
      </div>

      {/* Conditionally Applicable Schemes */}
      {partialList.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Other Schemes You May Check ({partialList.length})</span>
            </h4>
            <span className="text-xs text-slate-500">Subject to specific land/student credentials</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partialList.map(({ service }) => (
              <div 
                key={service.id}
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="text-xs text-slate-500 font-mono mb-1">{service.code}</div>
                  <h5 className="text-sm font-bold text-slate-900 line-clamp-1">{service.name[currentLang]}</h5>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1">{service.shortDescription[currentLang]}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="w-full text-center py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-lg border border-slate-200"
                >
                  Verify Specific Criteria
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
