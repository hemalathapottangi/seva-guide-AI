import { Language } from '../types';

export interface Translations {
  portalTitle: string;
  portalSubtitle: string;
  navHome: string;
  navServices: string;
  navEligibility: string;
  navAwareness: string;
  navAiFinder: string;
  navSaved: string;
  navAbout: string;

  // Hero
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  searchPlaceholder: string;
  searchButton: string;
  quickFiltersLabel: string;
  allCategories: string;
  allAudiences: string;
  filterByAudience: string;
  filterByCategory: string;
  clearFilters: string;
  resultsFound: string;
  noServicesFound: string;
  noServicesSubtitle: string;

  // Categories
  catEducation: string;
  catAgriculture: string;
  catHealthcare: string;
  catSocialWelfare: string;
  catHousing: string;
  catEmployment: string;
  catBusiness: string;

  // Audiences
  audStudents: string;
  audFarmers: string;
  audSeniorCitizens: string;
  audWomen: string;
  audYouth: string;
  audLowIncome: string;

  // Card & Details
  department: string;
  purpose: string;
  eligibility: string;
  requiredDocuments: string;
  applicationSteps: string;
  officialLinks: string;
  viewDetails: string;
  applyNow: string;
  officialPortal: string;
  activeDeadline: string;
  openYearly: string;
  helpline: string;
  saveService: string;
  savedService: string;

  // Eligibility Section
  eligibilityTitle: string;
  eligibilitySubtitle: string;
  whoCanApply: string;
  keyConditions: string;
  eligibilityCheckerTab: string;
  checkYourEligibility: string;
  age: string;
  annualIncome: string;
  occupation: string;
  checkStatusBtn: string;
  likelyEligible: string;
  conditionsApply: string;
  notEligible: string;

  // Documents Section
  docsTitle: string;
  docsSubtitle: string;
  mandatory: string;
  optional: string;
  acceptableFormats: string;
  specialInstructions: string;
  docsReadyCounter: string;
  markAsReady: string;
  downloadPrintChecklist: string;

  // Steps Section
  stepsTitle: string;
  stepsSubtitle: string;
  stepNumberPrefix: string;
  tipsAndAdvice: string;
  postSubmissionTitle: string;
  trackingMethod: string;
  expectedTimeline: string;
  grievanceRedressal: string;

  // Direct Links & Modal
  externalRedirectTitle: string;
  externalRedirectMessage: string;
  proceedToOfficialSite: string;
  cancel: string;
  verifiedOfficialPortal: string;

  // Awareness Section
  awarenessTitle: string;
  awarenessSubtitle: string;
  filterAll: string;
  filterDeadlines: string;
  filterNewSchemes: string;
  filterAdvisories: string;
  filterUpdates: string;
  importantNotice: string;
  viewRelatedService: string;

  // AI Finder & Chatbot Assistant
  aiFinderTitle: string;
  aiFinderSubtitle: string;
  aiPromptPlaceholder: string;
  askAiBtn: string;
  aiAnalyzing: string;
  aiSuggestedServices: string;
  aiWhyMatch: string;
  aiGuidance: string;
  aiQuickPromptsTitle: string;
  aiOfflineNote: string;
  chatInputPlaceholder: string;
  chatSendBtn: string;
  chatClearBtn: string;
  chatTypingIndicator: string;
  recommendedServiceBadge: string;
  whyServiceMatches: string;
  howToApplySection: string;
  officialApplyLink: string;
  importantInfoSection: string;
  quickFollowUpsLabel: string;
  noExactMatchNotice: string;
  closestServicesLabel: string;
  samplePromptsTitle: string;
  floatingChatTrigger: string;

  // Footer & General
  footerDisclaimer: string;
  nationalHelpline: string;
  citizenAssistance: string;
  developedFor: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    portalTitle: 'SEVAGUIDE AI',
    portalSubtitle: 'Official Public Scheme Directory, Eligibility Verification & Citizen Guidance',
    navHome: 'Home',
    navServices: 'Services & Schemes',
    navEligibility: 'Eligibility Checker',
    navAwareness: 'Awareness & Updates',
    navAiFinder: 'SEVAGUIDE AI Assistant',
    navSaved: 'Saved Schemes',
    navAbout: 'About SEVAGUIDE AI',

    heroBadge: 'Government of India & State Initiatives Guidance',
    heroHeading: 'Discover Government Schemes & Services Made Simple',
    heroSubheading: 'Check your eligibility, prepare required documents with interactive checklists, follow step-by-step guidance, and apply directly via authentic portals.',
    searchPlaceholder: 'Search scheme name, department, benefit (e.g. Scholarship, Kisan, Health card)...',
    searchButton: 'Search',
    quickFiltersLabel: 'Target Citizen Groups:',
    allCategories: 'All Categories',
    allAudiences: 'All Citizens',
    filterByAudience: 'Filter by Beneficiary',
    filterByCategory: 'Filter by Department',
    clearFilters: 'Reset Filters',
    resultsFound: 'schemes available',
    noServicesFound: 'No matching government services found.',
    noServicesSubtitle: 'Try adjusting your search terms, removing filters, or asking our AI Scheme Advisor.',

    catEducation: 'Education & Scholarships',
    catAgriculture: 'Agriculture & Farmers',
    catHealthcare: 'Healthcare & Wellness',
    catSocialWelfare: 'Social Welfare & Pensions',
    catHousing: 'Housing & Urban Development',
    catEmployment: 'Employment & Skill Training',
    catBusiness: 'MSME & Business Finance',

    audStudents: 'Students & Youth',
    audFarmers: 'Farmers & Agri-workers',
    audSeniorCitizens: 'Senior Citizens',
    audWomen: 'Women & Child',
    audYouth: 'Job Seekers',
    audLowIncome: 'Low Income Families',

    department: 'Department',
    purpose: 'Core Benefit / Purpose',
    eligibility: 'Eligibility Criteria',
    requiredDocuments: 'Required Documents',
    applicationSteps: 'Step-by-Step Guidance',
    officialLinks: 'Official Application Links',
    viewDetails: 'View Details & Apply',
    applyNow: 'Apply Now (Official)',
    officialPortal: 'Official Portal',
    activeDeadline: 'Application Deadline',
    openYearly: 'Open Throughout Year',
    helpline: 'Toll-Free Helpline',
    saveService: 'Save Scheme',
    savedService: 'Saved',

    eligibilityTitle: 'Eligibility Criteria & Qualification Rules',
    eligibilitySubtitle: 'Review who qualifies and verify your specific category requirements.',
    whoCanApply: 'Who Can Apply',
    keyConditions: 'Important Conditions & Disqualifiers',
    eligibilityCheckerTab: 'Interactive Eligibility Assessment',
    checkYourEligibility: 'Check If You Qualify',
    age: 'Citizen Age (Years)',
    annualIncome: 'Annual Family Income (₹)',
    occupation: 'Current Occupation / Status',
    checkStatusBtn: 'Evaluate My Eligibility',
    likelyEligible: 'You Appear Likely Eligible!',
    conditionsApply: 'Partially Matches - Subject to Document Verification',
    notEligible: 'Income or Age Criteria Not Met',

    docsTitle: 'Required Documents Checklist',
    docsSubtitle: 'Ensure you have valid originals and clear self-attested photocopies before applying.',
    mandatory: 'Mandatory Document',
    optional: 'Optional / If Applicable',
    acceptableFormats: 'Acceptable Formats',
    specialInstructions: 'Preparation Guidance',
    docsReadyCounter: 'Documents Prepared',
    markAsReady: 'Mark as Ready',
    downloadPrintChecklist: 'Print / Copy Document Checklist',

    stepsTitle: 'Step-by-Step Application Procedure',
    stepsSubtitle: 'Follow the official verified process to ensure zero rejection of your application.',
    stepNumberPrefix: 'Step',
    tipsAndAdvice: 'Pro Tip for Smooth Processing',
    postSubmissionTitle: 'What to Do After Submitting',
    trackingMethod: 'Application Status Tracking',
    expectedTimeline: 'Standard Processing Time',
    grievanceRedressal: 'Grievance / Helpline Escalation',

    externalRedirectTitle: 'Redirecting to Official Government Portal',
    externalRedirectMessage: 'You are now being safely redirected to the official verified government portal. Please ensure all your personal details are entered only on authentic .gov.in or .nic.in websites.',
    proceedToOfficialSite: 'Continue to Official Website',
    cancel: 'Return to Portal',
    verifiedOfficialPortal: 'Verified Government Link',

    awarenessTitle: 'Awareness Notifications & Scheme Updates',
    awarenessSubtitle: 'Stay informed about critical deadlines, new citizen schemes, and official public advisories.',
    filterAll: 'All Updates',
    filterDeadlines: 'Application Deadlines',
    filterNewSchemes: 'New Schemes',
    filterAdvisories: 'Citizen Advisories',
    filterUpdates: 'Portal Updates',
    importantNotice: 'Important Notice',
    viewRelatedService: 'View Associated Scheme',

    aiFinderTitle: 'SEVAGUIDE AI Assistant',
    aiFinderSubtitle: 'Conversational government service advisor that understands your natural language questions, identifies the exact matching service, explains eligibility, required documents, application steps, and verified links.',
    aiPromptPlaceholder: 'e.g., "I am a student from Andhra Pradesh and I need financial assistance for my education. Which government service should I apply for?"',
    askAiBtn: 'Ask SEVAGUIDE AI',
    aiAnalyzing: 'SEVAGUIDE AI is analyzing citizen intent against verified government services...',
    aiSuggestedServices: 'Verified Service Recommendation',
    aiWhyMatch: 'Why this service matches your requirement:',
    aiGuidance: 'Application Roadmap & Next Steps:',
    aiQuickPromptsTitle: 'Example citizen queries:',
    aiOfflineNote: 'Grounded in authentic government data • Free & instant offline-first intelligence',
    chatInputPlaceholder: 'Ask about any scheme, education, farming, health, documents, or how to apply...',
    chatSendBtn: 'Send',
    chatClearBtn: 'Clear Chat',
    chatTypingIndicator: 'SEVAGUIDE AI is evaluating your requirement...',
    recommendedServiceBadge: 'Recommended Service',
    whyServiceMatches: 'Why this service matches your requirement',
    howToApplySection: 'How to Apply (Official Procedure)',
    officialApplyLink: 'Apply through the official service',
    importantInfoSection: 'Important Information & Pro-Tips',
    quickFollowUpsLabel: 'Quick Follow-Up Actions:',
    noExactMatchNotice: "I couldn't identify an exact service for your request. Here are the closest relevant services.",
    closestServicesLabel: 'Closest Relevant Services',
    samplePromptsTitle: 'Example Prompts for Demonstration:',
    floatingChatTrigger: 'Ask SEVAGUIDE AI',

    footerDisclaimer: 'Disclaimer: SEVAGUIDE AI is an awareness initiative designed to simplify public scheme discovery. Application links route directly to official Government of India (.gov.in) platforms.',
    nationalHelpline: 'National Citizen Service Helpline: 1800-11-0031 / 1912',
    citizenAssistance: 'SEVAGUIDE AI - Citizen Awareness & Guidance Portal',
    developedFor: 'SEVAGUIDE AI • Free, Accessible & Transparent Citizen Services'
  },
  te: {
    portalTitle: 'SEVAGUIDE AI',
    portalSubtitle: 'ప్రభుత్వ పథకాల డైరెక్టరీ, అర్హత ధృవీకరణ మరియు పౌర మార్గదర్శనం',
    navHome: 'హోమ్',
    navServices: 'సేవలు & పథకాలు',
    navEligibility: 'అర్హత తనిఖీ',
    navAwareness: 'అవగాహన & నవీకరణలు',
    navAiFinder: 'SEVAGUIDE AI అసిస్టెంట్',
    navSaved: 'భద్రపరచిన పథకాలు',
    navAbout: 'SEVAGUIDE AI గురించి',

    heroBadge: 'భారత ప్రభుత్వం & రాష్ట్ర సంక్షేమ పథకాల మార్గదర్శి',
    heroHeading: 'ప్రభుత్వ పథకాలు & సేవలను సులభంగా తెలుసుకోండి',
    heroSubheading: 'మీ అర్హతను తనిఖీ చేయండి, అవసరమైన పత్రాల చెక్‌లిస్ట్‌ను సిద్ధం చేసుకోండి, దశలవారీ మార్గదర్శకాలను పాటించండి మరియు అధికారిక పోర్టల్స్ ద్వారా దరఖాస్తు చేసుకోండి.',
    searchPlaceholder: 'పథకం పేరు, శాఖ, ప్రయోజనం కోసం వెతకండి (ఉదా: స్కాలర్‌షిప్, కిసాన్, ఆరోగ్య కార్డు)...',
    searchButton: 'శోధించండి',
    quickFiltersLabel: 'లక్ష్య పౌర వర్గాలు:',
    allCategories: 'అన్ని విభాగాలు',
    allAudiences: 'అందరు పౌరులు',
    filterByAudience: 'వర్గం ద్వారా వడపోత',
    filterByCategory: 'శాఖ ద్వారా వడపోత',
    clearFilters: 'ఫిల్టర్లు రీసెట్ చేయండి',
    resultsFound: 'పథకాలు అందుబాటులో ఉన్నాయి',
    noServicesFound: 'సరిపోలే ప్రభుత్వ సేవలు కనుగొనబడలేదు.',
    noServicesSubtitle: 'శోధన పదాలను మార్చండి లేదా AI సలహాదారుని సహాయం తీసుకోండి.',

    catEducation: 'విద్య & స్కాలర్‌షిప్‌లు',
    catAgriculture: 'వ్యవసాయం & రైతులు',
    catHealthcare: 'ఆరోగ్యం & సంరక్షణ',
    catSocialWelfare: 'సామాజిక సంక్షేమం & పెన్షన్లు',
    catHousing: 'గృహనిర్మాణం & పట్టణాభివృద్ధి',
    catEmployment: 'ఉపాధి & నైపుణ్య శిక్షణ',
    catBusiness: 'MSME & వ్యాపార ఆర్థిక సహాయం',

    audStudents: 'విద్యార్థులు & యువత',
    audFarmers: 'రైతులు & వ్యవసాయ కూలీలు',
    audSeniorCitizens: 'వయోవృద్ధులు',
    audWomen: 'మహిళలు & శిశువులు',
    audYouth: 'ఉద్యోగార్థులు',
    audLowIncome: 'తక్కువ ఆదాయ కుటుంబాలు',

    department: 'ప్రభుత్వ శాఖ',
    purpose: 'ముఖ్య ప్రయోజనం / ఉద్దేశ్యం',
    eligibility: 'అర్హత ప్రమాణాలు',
    requiredDocuments: 'అవసరమైన పత్రాలు',
    applicationSteps: 'దరఖాస్తు విధానం (దశలవారీగా)',
    officialLinks: 'అధికారిక దరఖాస్తు లింకులు',
    viewDetails: 'వివరాలు చూడండి & దరఖాస్తు',
    applyNow: 'ఇప్పుడే దరఖాస్తు చేసుకోండి',
    officialPortal: 'అధికారిక పోర్టల్',
    activeDeadline: 'చివరి గడువు తేదీ',
    openYearly: 'సంవత్సరం పొడవునా అందుబాటులో ఉంది',
    helpline: 'టోల్-ఫ్రీ హెల్ప్‌లైన్',
    saveService: 'సేవ్ చేసుకోండి',
    savedService: 'సేవ్ చేయబడింది',

    eligibilityTitle: 'అర్హత నిబంధనలు & మార్గదర్శకాలు',
    eligibilitySubtitle: 'ఎవరు దరఖాస్తు చేసుకోవచ్చో మరియు ముఖ్యమైన షరతులను క్షుణ్ణంగా పరిశీలించండి.',
    whoCanApply: 'ఎవరు దరఖాస్తు చేసుకోవచ్చు',
    keyConditions: 'ముఖ్యమైన షరతులు & మినహాయింపులు',
    eligibilityCheckerTab: 'ఇంటరాక్టివ్ అర్హత మూల్యాంకనం',
    checkYourEligibility: 'మీ అర్హతను పరిశీలించండి',
    age: 'పౌరుడి వయస్సు (సంవత్సరాలు)',
    annualIncome: 'వార్షిక కుటుంబ ఆదాయం (₹)',
    occupation: 'ప్రస్తుత వృత్తి / స్థితి',
    checkStatusBtn: 'అర్హతను అంచనా వేయండి',
    likelyEligible: 'మీరు అర్హత సాధించే అవకాశం ఉంది!',
    conditionsApply: 'పాక్షిక అర్హత - పత్రాల ధృవీకరణ అవసరం',
    notEligible: 'ఆదాయం లేదా వయస్సు ప్రమాణాలు సరిపోలలేదు',

    docsTitle: 'కావలసిన పత్రాల చెక్‌లిస్ట్',
    docsSubtitle: 'దరఖాస్తు చేయడానికి ముందు అసలు పత్రాలు మరియు స్వయం ధృవీకరించిన కాపీలను సిద్ధంగా ఉంచుకోండి.',
    mandatory: 'తప్పనిసరి పత్రం',
    optional: 'ఐచ్ఛికం / వర్తించే పక్షంలో',
    acceptableFormats: 'అంగీకరించబడే ఫార్మాట్‌లు',
    specialInstructions: 'తయారీ సూచనలు',
    docsReadyCounter: 'సిద్ధంగా ఉన్న పత్రాలు',
    markAsReady: 'సిద్ధంగా ఉందిగా గుర్తించండి',
    downloadPrintChecklist: 'పత్రాల జాబితాను ప్రింట్ / కాపీ చేయండి',

    stepsTitle: 'దశలవారీ దరఖాస్తు మార్గదర్శనం',
    stepsSubtitle: 'మీ దరఖాస్తు తిరస్కరణకు గురికాకుండా ఉండటానికి అధికారిక ప్రక్రియను అనుసరించండి.',
    stepNumberPrefix: 'దశ',
    tipsAndAdvice: 'సులభమైన దరఖాస్తుకు చిట్కా',
    postSubmissionTitle: 'సమర్పించిన తర్వాత ఏమి చేయాలి',
    trackingMethod: 'దరఖాస్తు స్థితి పరిశీలన',
    expectedTimeline: 'ప్రాసెసింగ్ వ్యవధి',
    grievanceRedressal: 'ఫిర్యాదులు / హెల్ప్‌లైన్ సంప్రదింపులు',

    externalRedirectTitle: 'అధికారిక ప్రభుత్వ పోర్టల్‌కు వెళ్తున్నారు',
    externalRedirectMessage: 'మీరు ఇప్పుడు సురక్షితంగా అధికారిక ప్రభుత్వ వెబ్‌సైట్‌కు మళ్లించబడుతున్నారు. దయచేసి మీ వ్యక్తిగత వివరాలను అధికారిక .gov.in లేదా .nic.in సైట్‌లలో మాత్రమే నమోదు చేయండి.',
    proceedToOfficialSite: 'అధికారిక వెబ్‌సైట్‌కు కొనసాగండి',
    cancel: 'వెనక్కి వెళ్ళండి',
    verifiedOfficialPortal: 'ధృవీకరించబడిన ప్రభుత్వ లింక్',

    awarenessTitle: 'అవగాహన నోటిఫికేషన్లు & పథక నవీకరణలు',
    awarenessSubtitle: 'దరఖాస్తు గడువులు, కొత్త పథకాలు మరియు పౌర హెచ్చరికలపై ఎప్పటికప్పుడు సమాచారం పొందండి.',
    filterAll: 'అన్ని నవీకరణలు',
    filterDeadlines: 'దరఖాస్తు గడువులు',
    filterNewSchemes: 'కొత్త పథకాలు',
    filterAdvisories: 'పౌర సలహాలు',
    filterUpdates: 'పోర్టల్ నవీకరణలు',
    importantNotice: 'ముఖ్య గమనిక',
    viewRelatedService: 'సంబంధిత పథకాన్ని చూడండి',

    aiFinderTitle: 'SEVAGUIDE AI అసిస్టెంట్',
    aiFinderSubtitle: 'మీ సహజ భాషా ప్రశ్నలను అర్థం చేసుకునే పౌర సంక్షేమ సహాయకుడు. ఖచ్చితమైన పథకాన్ని గుర్తించి, అర్హత, పత్రాలు మరియు దరఖాస్తు దశలను వివరిస్తుంది.',
    aiPromptPlaceholder: 'ఉదాహరణ: "నేను ఆంధ్రప్రదేశ్ విద్యార్థిని, కాలేజీ ఫీజుకు ఆర్థిక సహాయం పథకం కావాలి" లేదా "నేను ఒక చిన్న రైతును, విత్తనాల కోసం సహాయం కావాలి"...',
    askAiBtn: 'SEVAGUIDE AI ని అడగండి',
    aiAnalyzing: 'SEVAGUIDE AI మీ అవసరాన్ని పరిశీలిస్తోంది...',
    aiSuggestedServices: 'ధృవీకరించబడిన సేవా సిఫార్సు',
    aiWhyMatch: 'ఈ సేవ మీకు ఎందుకు సరిపోతుంది:',
    aiGuidance: 'దరఖాస్తు రోడ్‌మ్యాప్ & తదుపరి దశలు:',
    aiQuickPromptsTitle: 'ఉదాహరణ పౌర ప్రశ్నలు:',
    aiOfflineNote: 'అధికారిక ప్రభుత్వ సమాచారంతో ఆధారపడినది • 100% ఉచితం & సురక్షితం',
    chatInputPlaceholder: 'పథకం, చదువు, వ్యవసాయం, ఆరోగ్యం, పత్రాలు లేదా దరఖాస్తు గురించి అడగండి...',
    chatSendBtn: 'పంపు',
    chatClearBtn: 'చాట్ క్లియర్ చేయండి',
    chatTypingIndicator: 'SEVAGUIDE AI సమాధానం రూపొందిస్తోంది...',
    recommendedServiceBadge: 'సిఫార్సు చేయబడిన సేవ',
    whyServiceMatches: 'ఈ సేవ మీ అవసరానికి ఎందుకు సరిపోతుంది',
    howToApplySection: 'దరఖాస్తు విధానం (అధికారిక ప్రక్రియ)',
    officialApplyLink: 'అధికారిక సేవ ద్వారా దరఖాస్తు చేయండి',
    importantInfoSection: 'ముఖ్యమైన సమాచారం & సలహాలు',
    quickFollowUpsLabel: 'త్వరిత తదుపరి చర్యలు:',
    noExactMatchNotice: 'మీ అభ్యర్థనకు సరిగ్గా సరిపోయే ఖచ్చితమైన సేవను గుర్తించలేకపోయాను. ఇక్కడ అత్యంత సన్నిహితమైన సేవలు ఉన్నాయి.',
    closestServicesLabel: 'సన్నిహిత సంబంధిత సేవలు',
    samplePromptsTitle: 'ప్రదర్శన కోసం ఉదాహరణ ప్రశ్నలు:',
    floatingChatTrigger: 'SEVAGUIDE AI ని అడగండి',

    footerDisclaimer: 'గమనిక: SEVAGUIDE AI అనేది పౌరులకు ప్రభుత్వ పథకాలపై అవగాహన కల్పించేందుకు రూపొందించబడిన పోర్టల్. దరఖాస్తు లింకులు నేరుగా అధికారిక .gov.in పోర్టల్స్‌కు మళ్లిస్తాయి.',
    nationalHelpline: 'జాతీయ పౌర సేవా హెల్ప్‌లైన్: 1800-11-0031 / 1912',
    citizenAssistance: 'SEVAGUIDE AI - ఉచిత పౌర అవగాహన & సహాయ పోర్టల్',
    developedFor: 'SEVAGUIDE AI • ఉచితం మరియు సులభతరమైన పౌర సేవలు'
  },
  hi: {
    portalTitle: 'SEVAGUIDE AI',
    portalSubtitle: 'सरकारी योजनाओं की निर्देशिका, पात्रता सत्यापन एवं नागरिक मार्गदर्शन',
    navHome: 'होम',
    navServices: 'सेवाएं एवं योजनाएं',
    navEligibility: 'पात्रता जांच',
    navAwareness: 'जागरूकता एवं सूचनाएं',
    navAiFinder: 'SEVAGUIDE AI सहायक',
    navSaved: 'सहेजी गई योजनाएं',
    navAbout: 'SEVAGUIDE AI के बारे में',

    heroBadge: 'भारत सरकार एवं राज्य कल्याणकारी योजनाओं की मार्गदर्शिका',
    heroHeading: 'सरकारी योजनाओं और सेवाओं की जानकारी अब आसान',
    heroSubheading: 'अपनी पात्रता जांचें, आवश्यक दस्तावेजों की सूची तैयार करें, चरण-दर-चरण प्रक्रिया का पालन करें और आधिकारिक पोर्टल्स के माध्यम से आवेदन करें।',
    searchPlaceholder: 'योजना का नाम, विभाग या लाभ खोजें (उदा. छात्रवृत्ति, किसान सम्मान, स्वास्थ्य कार्ड)...',
    searchButton: 'खोजें',
    quickFiltersLabel: 'लाभार्थी वर्ग:',
    allCategories: 'सभी श्रेणियां',
    allAudiences: 'सभी नागरिक',
    filterByAudience: 'लाभार्थी के अनुसार छांटें',
    filterByCategory: 'विभाग के अनुसार छांटें',
    clearFilters: 'फ़िल्टर हटाएं',
    resultsFound: 'योजनाएं उपलब्ध हैं',
    noServicesFound: 'कोई मेल खाती सरकारी सेवा नहीं मिली।',
    noServicesSubtitle: 'कृपया खोज शब्द बदलें या हमारे AI योजना सलाहकार से पूछें।',

    catEducation: 'शिक्षा एवं छात्रवृत्तियां',
    catAgriculture: 'कृषि एवं किसान कल्याण',
    catHealthcare: 'स्वास्थ्य एवं परिवार कल्याण',
    catSocialWelfare: 'सामाजिक कल्याण एवं पेंशन',
    catHousing: 'आवास एवं शहरी विकास',
    catEmployment: 'रोजगार एवं कौशल विकास',
    catBusiness: 'MSME एवं व्यावसायिक ऋण',

    audStudents: 'विद्यार्थी एवं युवा',
    audFarmers: 'किसान एवं कृषि श्रमिक',
    audSeniorCitizens: 'वरिष्ठ नागरिक',
    audWomen: 'महिला एवं बाल विकास',
    audYouth: 'रोजगार चाहने वाले',
    audLowIncome: 'कम आय वाले परिवार',

    department: 'संबंधित विभाग',
    purpose: 'मुख्य लाभ / उद्देश्य',
    eligibility: 'पात्रता के नियम',
    requiredDocuments: 'आवश्यक दस्तावेज',
    applicationSteps: 'चरण-दर-चरण आवेदन प्रक्रिया',
    officialLinks: 'आधिकारिक आवेदन लिंक',
    viewDetails: 'विवरण देखें एवं आवेदन करें',
    applyNow: 'अभी आवेदन करें (आधिकारिक)',
    officialPortal: 'आधिकारिक पोर्टल',
    activeDeadline: 'आवेदन की अंतिम तिथि',
    openYearly: 'वर्ष भर खुला है',
    helpline: 'टोल-फ्री हेल्पलाइन',
    saveService: 'योजना सहेजें',
    savedService: 'सहेजा गया',

    eligibilityTitle: 'पात्रता मानदंड एवं नियम',
    eligibilitySubtitle: 'जानें कि कौन आवेदन कर सकता है तथा महत्वपूर्ण शर्तों की जांच करें।',
    whoCanApply: 'कौन आवेदन कर सकता है',
    keyConditions: 'महत्वपूर्ण शर्तें एवं अयोग्यताएं',
    eligibilityCheckerTab: 'इंटरैक्टिव पात्रता मूल्यांकन',
    checkYourEligibility: 'अपनी पात्रता की जांच करें',
    age: 'नागरिक की आयु (वर्ष)',
    annualIncome: 'वार्षिक पारिवारिक आय (₹)',
    occupation: 'वर्तमान व्यवसाय / स्थिति',
    checkStatusBtn: 'पात्रता का मूल्यांकन करें',
    likelyEligible: 'आप पात्र प्रतीत होते हैं!',
    conditionsApply: 'आंशिक रूप से पात्र - दस्तावेज सत्यापन आवश्यक',
    notEligible: 'आय या आयु मानदंड पूरा नहीं हुआ',

    docsTitle: 'आवश्यक दस्तावेजों की चेकलिस्ट',
    docsSubtitle: 'आवेदन करने से पहले अपने मूल दस्तावेज और सत्यापित प्रतियां तैयार रखें।',
    mandatory: 'अनिवार्य दस्तावेज',
    optional: 'वैकल्पिक / यदि लागू हो',
    acceptableFormats: 'स्वीकार्य प्रारूप',
    specialInstructions: 'दस्तावेज तैयारी निर्देश',
    docsReadyCounter: 'तैयार दस्तावेज',
    markAsReady: 'तैयार के रूप में चिह्नित करें',
    downloadPrintChecklist: 'दस्तावेज चेकलिस्ट प्रिंट / कॉपी करें',

    stepsTitle: 'चरण-दर-चरण आवेदन प्रक्रिया',
    stepsSubtitle: 'आवेदन अस्वीकृत होने से बचाने के लिए आधिकारिक प्रक्रिया का पालन करें।',
    stepNumberPrefix: 'चरण',
    tipsAndAdvice: 'आसान आवेदन के लिए उपयोगी सुझाव',
    postSubmissionTitle: 'आवेदन जमा करने के बाद क्या करें',
    trackingMethod: 'आवेदन की स्थिति की जांच',
    expectedTimeline: 'अनुमानित समय सीमा',
    grievanceRedressal: 'शिकायत निवारण एवं सहायता',

    externalRedirectTitle: 'आधिकारिक सरकारी पोर्टल पर पुनर्निर्देशित किया जा रहा है',
    externalRedirectMessage: 'अब आपको सुरक्षित रूप से आधिकारिक सरकारी पोर्टल पर भेजा जा रहा है। कृपया अपना व्यक्तिगत विवरण केवल आधिकारिक .gov.in या .nic.in वेबसाइटों पर ही दर्ज करें।',
    proceedToOfficialSite: 'आधिकारिक वेबसाइट पर जाएं',
    cancel: 'पोर्टल पर लौटें',
    verifiedOfficialPortal: 'सत्यापित सरकारी लिंक',

    awarenessTitle: 'जागरूकता सूचनाएं एवं योजना अपडेट',
    awarenessSubtitle: 'महत्वपूर्ण अंतिम तिथियों, नई योजनाओं और जनहित चेतावनियों से अपडेट रहें।',
    filterAll: 'सभी अपडेट',
    filterDeadlines: 'आवेदन की अंतिम तिथियां',
    filterNewSchemes: 'नई योजनाएं',
    filterAdvisories: 'नागरिक सलाह',
    filterUpdates: 'पोर्टल अपडेट',
    importantNotice: 'महत्वपूर्ण सूचना',
    viewRelatedService: 'संबंधित योजना देखें',

    aiFinderTitle: 'SEVAGUIDE AI सहायक',
    aiFinderSubtitle: 'प्राकृतिक भाषा समझने वाला संवादात्मक सरकारी योजना सहायक। आपकी आवश्यकता के अनुसार सटीक योजना, पात्रता, दस्तावेज, आवेदन के चरण और आधिकारिक लिंक प्रदान करता है।',
    aiPromptPlaceholder: 'उदा. "मैं आंध्र प्रदेश का छात्र हूं और मुझे शिक्षा के लिए वित्तीय सहायता चाहिए। मुझे किस सरकारी योजना में आवेदन करना चाहिए?"',
    askAiBtn: 'SEVAGUIDE AI से पूछें',
    aiAnalyzing: 'SEVAGUIDE AI आपकी आवश्यकता का सत्यापन कर रहा है...',
    aiSuggestedServices: 'सत्यापित योजना अनुशंसा',
    aiWhyMatch: 'यह योजना आपकी आवश्यकता से क्यों मेल खाती है:',
    aiGuidance: 'आवेदन प्रक्रिया एवं अगले कदम:',
    aiQuickPromptsTitle: 'उदाहरण नागरिक प्रश्न:',
    aiOfflineNote: 'आधिकारिक सरकारी डेटा पर आधारित • 100% निःशुल्क एवं सुरक्षित',
    chatInputPlaceholder: 'योजना, शिक्षा, कृषि, स्वास्थ्य, दस्तावेज या आवेदन प्रक्रिया के बारे में पूछें...',
    chatSendBtn: 'भेजें',
    chatClearBtn: 'चैट साफ़ करें',
    chatTypingIndicator: 'SEVAGUIDE AI उत्तर तैयार कर रहा है...',
    recommendedServiceBadge: 'अनुशंसित सेवा',
    whyServiceMatches: 'यह सेवा आपकी आवश्यकता से क्यों मेल खाती है',
    howToApplySection: 'आवेदन कैसे करें (आधिकारिक प्रक्रिया)',
    officialApplyLink: 'आधिकारिक सेवा के माध्यम से आवेदन करें',
    importantInfoSection: 'महत्वपूर्ण जानकारी एवं सुझाव',
    quickFollowUpsLabel: 'त्वरित अगले कदम:',
    noExactMatchNotice: 'मैं आपके अनुरोध के लिए किसी सटीक सेवा की पुष्टि नहीं कर सका। यहाँ सर्वाधिक प्रासंगिक निकटतम सेवाएं दी गई हैं।',
    closestServicesLabel: 'निकटतम प्रासंगिक सेवाएं',
    samplePromptsTitle: 'प्रदर्शन हेतु उदाहरण प्रश्न:',
    floatingChatTrigger: 'SEVAGUIDE AI से पूछें',

    footerDisclaimer: 'अस्वीकरण: SEVAGUIDE AI नागरिकों की सुविधा के लिए विकसित एक जागरूकता पोर्टल है। आवेदन लिंक सीधे आधिकारिक .gov.in पोर्टलों पर भेजते हैं।',
    nationalHelpline: 'राष्ट्रीय नागरिक सेवा हेल्पलाइन: 1800-11-0031 / 1912',
    citizenAssistance: 'SEVAGUIDE AI - निःशुल्क नागरिक जागरूकता एवं मार्गदर्शन पोर्टल',
    developedFor: 'SEVAGUIDE AI • पारदर्शी, सुलभ एवं निःशुल्क नागरिक सेवाएं'
  }
};
