import { GovernmentService, Language, ChatMessage, StructuredAiServiceMatch, ChatMatchConfidence } from '../types';
import { servicesData } from '../data/servicesData';

interface IntentRule {
  serviceId: string;
  intents: string[];
  keywords: string[];
  category: string;
  targetGroups: string[];
  whyExplanation: Record<Language, string>;
  importantNote: Record<Language, string>;
}

const SERVICE_INTENT_RULES: IntentRule[] = [
  {
    serviceId: 'nsp-scholarship',
    category: 'education',
    targetGroups: ['students', 'youth', 'low_income'],
    intents: [
      'student financial assistance',
      'financial assistance for education',
      'education scholarship',
      'scholarship for college',
      'tuition fee aid',
      'higher education support',
      'degree college assistance',
      'merit scholarship',
      'post matric scholarship',
      'central sector scholarship',
      'financial aid for study',
      'fee reimbursement',
      'student funding'
    ],
    keywords: [
      'student', 'college', 'university', 'study', 'studies', 'degree', 'scholarship', 'education', 'school',
      'tuition', 'fee', 'marksheet', 'bonafide', 'merit', 'engineering', 'medical student',
      'విద్యార్థి', 'చదువు', 'స్కాలర్‌షిప్', 'కాలేజీ', 'ఫీజు', 'విద్యా',
      'छात्र', 'छात्रवृत्ति', 'पढ़ाई', 'कॉलेज', 'शिक्षा', 'फीस'
    ],
    whyExplanation: {
      en: 'You requested educational financial assistance. The National Scholarship Portal (NSP) is the Government of India’s official central platform that directly transfers DBT scholarship funds into student bank accounts for college, university, and professional courses.',
      te: 'మీరు విద్య కోసం ఆర్థిక సహాయాన్ని కోరారు. నేషనల్ స్కాలర్‌షిప్ పోర్టల్ (NSP) అనేది కళాశాల మరియు విశ్వవిద్యాలయ విద్యను అభ్యసించే విద్యార్థుల బ్యాంక్ ఖాతాల్లోకి నేరుగా DBT ద్వారా స్కాలర్‌షిప్ నిధులను జమ చేసే అధికారిక ప్రభుత్వ వేదిక.',
      hi: 'आपने शिक्षा हेतु वित्तीय सहायता का अनुरोध किया है। राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) भारत सरकार का आधिकारिक मंच है जो कॉलेज एवं विश्वविद्यालय के छात्रों के बैंक खातों में सीधे DBT द्वारा छात्रवृत्ति राशि प्रदान करता है।'
    },
    importantNote: {
      en: 'Aadhaar-linked bank account is mandatory for Direct Benefit Transfer (DBT). Ensure your college scholarship nodal officer verifies your form within 7 days of online submission.',
      te: 'డైరెక్ట్ బెనిఫిట్ ట్రాన్స్‌ఫర్ (DBT) కోసం ఆధార్‌తో లింక్ అయిన బ్యాంక్ ఖాతా తప్పనిసరి. దరఖాస్తు చేసిన 7 రోజులలోపు కళాశాల నోడల్ అధికారి ధృవీకరణ పొందాలి.',
      hi: 'DBT भुगतान हेतु बैंक खाते का आधार से लिंक होना अनिवार्य है। ऑनलाइन आवेदन के 7 दिनों के भीतर अपने कॉलेज नोडल अधिकारी से सत्यापन कराएं।'
    }
  },
  {
    serviceId: 'pm-kisan',
    category: 'agriculture',
    targetGroups: ['farmers'],
    intents: [
      'farmer financial assistance',
      'farmer government assistance',
      'agricultural assistance',
      'crop support',
      'kisan samman nidhi',
      'money for seeds and fertilizers',
      'seasonal farming income',
      '6000 rupees for farmers',
      'farmer direct cash transfer'
    ],
    keywords: [
      'farmer', 'farming', 'agriculture', 'kisan', 'land', 'crop', 'paddy', 'cultivation', 'seeds', 'fertilizer', '6000', 'khatauni', 'rythu',
      'రైతు', 'వ్యవసాయం', 'కిసాన్', 'భూమి', 'పంట', 'విత్తనాలు', 'ఎరువులు',
      'किसान', 'खेती', 'कृषि', 'फसल', 'भूमि', 'सम्मान निधि', 'बीज', 'खाद'
    ],
    whyExplanation: {
      en: 'You indicated being a farmer needing government assistance. PM-Kisan Samman Nidhi provides an assured supplementary annual income of ₹6,000 (in 3 equal quarterly installments of ₹2,000) directly into farmer bank accounts to cover agricultural inputs and domestic needs.',
      te: 'మీరు ప్రభుత్వ సహాయం అవసరమైన రైతు అని తెలిపారు. పీఎం కిసాన్ సమ్మాన్ నిధి ద్వారా సాగు ఖర్చులు మరియు విత్తనాల కోసం రైతుల బ్యాంక్ ఖాతాల్లోకి ఏటా ₹6,000 (3 విడతల్లో ₹2,000 చొప్పున) నేరుగా జమ చేయబడుతుంది.',
      hi: 'आपने किसान सहायता का अनुरोध किया है। पीएम-किसान सम्मान निधि के तहत किसान परिवारों को कृषि खर्चों हेतु प्रति वर्ष ₹6,000 की वित्तीय सहायता (₹2,000 की 3 समान किस्तों में) सीधे बैंक खाते में प्रदान की जाती है।'
    },
    importantNote: {
      en: 'Ensure mandatory e-KYC (via PM-Kisan portal or OTP) and land seeding with your Aadhaar are active before installment disbursement dates.',
      te: 'వాయిదా చెల్లింపుల కోసం పీఎం కిసాన్ పోర్టల్ ద్వారా e-KYC మరియు ఆధార్-భూమి రికార్డుల సీడింగ్ తప్పనిసరి.',
      hi: 'किस्त प्राप्ति हेतु पीएम-किसान पोर्टल पर e-KYC और भू-अभिलेख (लैंड सीडिंग) का आधार से लिंक होना अनिवार्य है।'
    }
  },
  {
    serviceId: 'ayushman-bharat',
    category: 'healthcare',
    targetGroups: ['low_income', 'senior_citizens', 'women'],
    intents: [
      'health related government scheme',
      'medical treatment assistance',
      'hospital bill coverage',
      'free health insurance',
      'ayushman card',
      'free surgery assistance',
      'cashless medical treatment',
      'golden card for hospital'
    ],
    keywords: [
      'health', 'medical', 'hospital', 'doctor', 'treatment', 'surgery', 'ayushman', 'pmjay', 'medicine', 'illness', 'disease', 'cashless', '5 lakh',
      'ఆరోగ్యం', 'వైద్యం', 'ఆసుపత్రి', 'చికిత్స', 'ఆయుష్మాన్', 'బీమా', 'ఉచిత వైద్యం',
      'स्वास्थ्य', 'इलाज', 'अस्पताल', 'आयुष्मान', 'बीमारी', 'दवा', 'मुफ्त इलाज', 'बीमा'
    ],
    whyExplanation: {
      en: 'You asked about health-related government support. Ayushman Bharat (PM-JAY) offers comprehensive cashless health cover of up to ₹5,00,000 per family per year for secondary and tertiary care hospitalization across thousands of empaneled public and private hospitals.',
      te: 'మీరు ఆరోగ్య సంబంధిత ప్రభుత్వ పథకం గురించి అడిగారు. ఆయుష్మాన్ భారత్ (PM-JAY) కింద అర్హులైన కుటుంబానికి ఏడాదికి ₹5,00,000 వరకు నగదు రహిత (క్యాష్‌లెస్) ఉచిత ఆసుపత్రి చికిత్స లభిస్తుంది.',
      hi: 'आपने स्वास्थ्य संबंधी सरकारी सहायता की जानकारी मांगी है। आयुष्मान भारत (PM-JAY) के तहत पात्र परिवारों को प्रति वर्ष ₹5 लाख तक का कैशलेस एवं मुफ्त अस्पताल इलाज प्रदान किया जाता है।'
    },
    importantNote: {
      en: 'Ayushman Bharat is 100% cashless at the point of care in all empaneled hospitals. Approach the "Ayushman Mitra" desk at any network hospital with your Aadhaar or Ration Card for instant e-card generation.',
      te: 'ఎంపానెల్ చేయబడిన ఆసుపత్రులలో ఉచిత నగదు రహిత చికిత్స లభిస్తుంది. ఆసుపత్రిలోని "ఆయుష్మాన్ మిత్ర" కౌంటర్‌లో ఆధార్ కార్డు చూపించి కార్డు పొందవచ్చు.',
      hi: 'सूचीबद्ध अस्पतालों में इलाज पूर्णतः कैशलेस है। तत्काल ई-कार्ड बनवाने के लिए अस्पताल के "आयुष्मान मित्र" डेस्क पर अपना आधार या राशन कार्ड दिखाएं।'
    }
  },
  {
    serviceId: 'pm-awas',
    category: 'housing',
    targetGroups: ['low_income', 'women'],
    intents: [
      'housing assistance scheme',
      'house construction subsidy',
      'home loan interest subsidy',
      'government house scheme',
      'pucca house financial aid',
      'pradhan mantri awas yojana',
      'free house scheme'
    ],
    keywords: [
      'house', 'housing', 'home', 'pucca', 'awas', 'shelter', 'roof', 'construction', 'plot', 'flat', 'subsidy',
      'ఇల్లు', 'గృహ', 'ఆవాస్', 'నివాసం', 'సొంత ఇల్లు', 'సబ్సిడీ',
      'मकान', 'आवास', 'घर', 'पक्का मकान', 'सब्सिडी', 'छत'
    ],
    whyExplanation: {
      en: 'You inquired about housing assistance. Pradhan Mantri Awas Yojana (PMAY) provides direct financial subsidies and interest concessions up to ₹2.67 Lakhs to enable homeless and kutcha-house dwelling families to build or purchase a permanent pucca house.',
      te: 'మీరు గృహ నిర్మాణ సహాయం గురించి అడిగారు. ప్రధాన మంత్రి ఆవాస్ యోజన (PMAY) ద్వారా శాశ్వత పక్కా ఇల్లు నిర్మించుకోవడానికి పేద కుటుంబాలకు నేరుగా ఆర్థిక సబ్సిడీ అందించబడుతుంది.',
      hi: 'आपने आवास सहायता के संबंध में पूछा है। प्रधानमंत्री आवास योजना (PMAY) के तहत बेघर और कच्चे मकानों में रहने वाले परिवारों को पक्का मकान बनाने हेतु आर्थिक सब्सिडी प्रदान की जाती है।'
    },
    importantNote: {
      en: 'The house ownership must mandatorily be registered in the name of the female head of the family or jointly with her spouse.',
      te: 'ఇంటి యాజమాన్య హక్కులు తప్పనిసరిగా కుటుంబంలోని మహిళ పేరు మీద లేదా భార్యాభర్తల ఉమ్మడి పేరు మీద నమోదు చేయాలి.',
      hi: 'मकान का स्वामित्व परिवार की महिला मुखिया के नाम पर या संयुक्त रूप से पंजीकृत होना अनिवार्य है।'
    }
  },
  {
    serviceId: 'e-shram',
    category: 'employment',
    targetGroups: ['youth', 'low_income'],
    intents: [
      'unorganized worker registration',
      'government service related to employment',
      'daily wage worker assistance',
      'labor card benefits',
      'e shram card registration',
      'worker accidental insurance',
      'gig worker social security'
    ],
    keywords: [
      'employment', 'worker', 'labor', 'unorganized', 'shram', 'driver', 'carpenter', 'mason', 'daily wager', 'job', 'gig worker', 'uan', 'delivery',
      'ఉపాధి', 'కార్మికుడు', 'కూలీ', 'శ్రామికుడు', 'ఈ శ్రమ్', 'కార్డు',
      'रोजगार', 'मजदूर', 'श्रमिक', 'कामगार', 'ई-श्रम', 'योजना'
    ],
    whyExplanation: {
      en: 'You asked about government services related to employment and labor welfare. The e-Shram Portal issues a Universal Account Number (UAN) card for unorganized workers, offering free ₹2,00,000 accidental insurance coverage and direct linkage to central welfare assistance.',
      te: 'మీరు ఉపాధి మరియు కార్మిక సంక్షేమ సేవ గురించి అడిగారు. ఈ-శ్రమ్ పోర్టల్ అసంఘటిత రంగ కార్మికులకు UAN కార్డును అందిస్తుంది, ₹2 లక్షల ప్రమాద బీమా మరియు ప్రభుత్వ సంక్షేమ పథకాల ప్రాప్యతను కల్పిస్తుంది.',
      hi: 'आपने रोजगार एवं श्रमिक कल्याण सेवा के संबंध में पूछा है। ई-श्रम पोर्टल असंगठित क्षेत्र के कामगारों को 12 अंकों का UAN कार्ड, ₹2 लाख का मुफ्त दुर्घटना बीमा और सरकारी कल्याणकारी योजनाओं से सीधा जोड़ता है।'
    },
    importantNote: {
      en: 'Applicants must be aged between 16 and 59 years and must NOT be an income tax payer or covered under EPFO/ESIC schemes.',
      te: 'దరఖాస్తుదారుల వయస్సు 16 నుండి 59 సంవత్సరాల మధ్య ఉండాలి మరియు ఆదాయపు పన్ను చెల్లింపుదారు లేదా EPFO/ESIC సభ్యులు అయి ఉండకూడదు.',
      hi: 'आवेदक की आयु 16 से 59 वर्ष के बीच होनी चाहिए तथा वह आयकर दाता या EPFO/ESIC का सदस्य नहीं होना चाहिए।'
    }
  },
  {
    serviceId: 'pm-mudra',
    category: 'business',
    targetGroups: ['youth', 'women', 'low_income'],
    intents: [
      'small business loan',
      'collateral free loan for shop',
      'startup micro loan',
      'pm mudra yojana',
      'loan for small enterprise',
      'business financial assistance',
      'vendor business loan'
    ],
    keywords: [
      'business', 'loan', 'mudra', 'shop', 'startup', 'store', 'enterprise', 'micro finance', 'shishu', 'kishore', 'tarun', 'collateral free',
      'వ్యాపారం', 'రుణం', 'ముద్ర', 'షాప్', 'చిన్న వ్యాపారం',
      'व्यापार', 'ऋण', 'मुद्रा', 'दुकान', 'स्वरोजगार', 'बिना गारंटी'
    ],
    whyExplanation: {
      en: 'You asked about financial support for business. Pradhan Mantri MUDRA Yojana provides collateral-free institutional loans up to ₹10 Lakhs (Shishu up to ₹50K, Kishore ₹50K-₹5L, Tarun ₹5L-₹10L) to micro-enterprises and small retail shops.',
      te: 'మీరు వ్యాపార ఆర్థిక సహాయం గురించి అడిగారు. ప్రధాన మంత్రి ముద్ర యోజన ద్వారా చిన్న వ్యాపారాలు మరియు దుకాణాల కోసం ఎటువంటి హామీ (కొలేటరల్) లేకుండా ₹10 లక్షల వరకు బ్యాంక్ రుణాలు లభిస్తాయి.',
      hi: 'आपने व्यापार हेतु वित्तीय सहायता के बारे में पूछा है। प्रधानमंत्री मुद्रा योजना सूक्ष्म और छोटे व्यवसायों को बिना किसी गारंटी (कोलैटरल-फ्री) के ₹10 लाख तक का ऋण प्रदान करती है।'
    },
    importantNote: {
      en: 'No collateral security or processing fee is required for loans under the Shishu category (up to ₹50,000). Apply through any commercial or rural bank.',
      te: 'శిశు కేటగిరీ (₹50,000 వరకు) రుణాలకు ఎటువంటి హామీ లేదా ప్రాసెసింగ్ ఫీజు అవసరం లేదు.',
      hi: 'शिशु श्रेणी (₹50,000 तक) के ऋणों के लिए किसी गारंटी या प्रोसेसिंग फीस की आवश्यकता नहीं होती है।'
    }
  },
  {
    serviceId: 'atal-pension',
    category: 'social_welfare',
    targetGroups: ['senior_citizens', 'low_income'],
    intents: [
      'old age pension scheme',
      'retirement monthly pension',
      'guaranteed monthly income after 60',
      'atal pension yojana',
      'senior citizen monthly security',
      'unorganized sector pension'
    ],
    keywords: [
      'pension', 'old age', 'retirement', 'atal pension', 'apy', 'monthly pension', 'after 60', 'senior citizen',
      'పెన్షన్', 'వృద్ధాప్య', 'రిటైర్మెంట్', 'నెలవారీ పెన్షన్',
      'पेंशन', 'वृद्धावस्था', 'रिटायरमेंट', 'अटल पेंशन', 'बुढ़ापा'
    ],
    whyExplanation: {
      en: 'You inquired about pension and retirement security. Atal Pension Yojana (APY) provides a guaranteed lifetime monthly pension between ₹1,000 and ₹5,000 to citizens from age 60 onwards based on affordable monthly contributions.',
      te: 'మీరు పెన్షన్ మరియు వృద్ధాప్య భరోసా గురించి అడిగారు. అటల్ పెన్షన్ యోజన (APY) ద్వారా 60 ఏళ్లు నిండిన తర్వాత నెలకు ₹1,000 నుండి ₹5,000 వరకు జీవితాంతం గ్యారెంటీ పెన్షన్ లభిస్తుంది.',
      hi: 'आपने पेंशन और सेवानिवृत्ति सुरक्षा के संबंध में पूछा है। अटल पेंशन योजना (APY) 60 वर्ष की आयु के बाद ₹1,000 से ₹5,000 प्रतिमाह की आजीवन गारंटीशुदा पेंशन प्रदान करती है।'
    },
    importantNote: {
      en: 'Applicants must be between 18 and 40 years of age. Monthly contributions are auto-debited from your bank account.',
      te: 'దరఖాస్తుదారుల వయస్సు 18 నుండి 40 సంవత్సరాల మధ్య ఉండాలి. నెలవారీ ప్రీమియం బ్యాంక్ ఖాతా నుండి ఆటో డెబిట్ అవుతుంది.',
      hi: 'आवेदक की आयु 18 से 40 वर्ष के बीच होनी चाहिए। मासिक अंशदान बैंक खाते से स्वतः काटा जाता है।'
    }
  },
  {
    serviceId: 'sukanya-samriddhi',
    category: 'education',
    targetGroups: ['women', 'youth'],
    intents: [
      'girl child savings scheme',
      'daughter education fund',
      'high interest savings for daughter',
      'sukanya samriddhi yojana',
      'female child government investment',
      'marriage fund for daughter'
    ],
    keywords: [
      'girl child', 'daughter', 'female', 'girl', 'sukanya', 'ssy', 'child', 'tax free savings', 'high interest',
      'ఆడపిల్ల', 'కుమార్తె', 'సుకన్య సమృద్ధి', 'సేవింగ్స్',
      'सुकन्या', 'बेटी', 'बालिका', 'बचत योजना'
    ],
    whyExplanation: {
      en: 'You asked about welfare savings for a girl child. Sukanya Samriddhi Yojana (SSY) provides a government-backed, tax-exempt savings deposit scheme offering industry-leading 8.2% annual interest to secure higher education and marriage expenses of daughters.',
      te: 'మీరు ఆడపిల్లల సంక్షేమ పొదుపు పథకం గురించి అడిగారు. సుకన్య సమృద్ధి యోజన (SSY) ద్వారా కుమార్తెల ఉన్నత చదువుల కోసం అత్యధిక వడ్డీ రేటు (8.2%) మరియు పన్ను మినహాయింపులతో కూడిన పొదుపు పథకం లభిస్తుంది.',
      hi: 'आपने बालिका कल्याण और बचत योजना के बारे में पूछा है। सुकन्या समृद्धि योजना (SSY) बेटियों की उच्च शिक्षा और भविष्य को सुरक्षित करने के लिए 8.2% की उच्च ब्याज दर और कर-मुक्त रिटर्न प्रदान करती है।'
    },
    importantNote: {
      en: 'Can be opened for a girl child from birth up to the age of 10 years at any post office or participating bank with a minimum deposit of just ₹250.',
      te: 'ఆడపిల్ల పుట్టినప్పటి నుండి 10 సంవత్సరాల వయస్సు వరకు ఏదైనా పోస్టాఫీస్ లేదా బ్యాంకులో కేవలం ₹250 తో ఖాతా తెరవవచ్చు.',
      hi: 'बालिका के जन्म से लेकर 10 वर्ष की आयु तक किसी भी डाकघर या बैंक में मात्र ₹250 की न्यूनतम राशि से खाता खोला जा सकता है।'
    }
  }
];

export interface ProcessedQueryResult {
  replyText: string;
  serviceMatch?: StructuredAiServiceMatch;
  confidence: ChatMatchConfidence;
  closestServices?: GovernmentService[];
  quickFollowUps?: string[];
  activeServiceId?: string;
}

export function buildStructuredServiceMatch(service: GovernmentService, rule?: IntentRule): StructuredAiServiceMatch {
  const whyExplanation = rule ? rule.whyExplanation : {
    en: `This verified public scheme aligns with your identified criteria under ${service.department.en}.`,
    te: `ఈ ధృవీకరించబడిన ప్రభుత్వ పథకం మీ అవసరాలకు అనుగుణంగా ఉంది.`,
    hi: `यह सत्यापित सरकारी योजना आपकी आवश्यकताओं के अनुकूल है।`
  };

  const importantNote = rule ? rule.importantNote : {
    en: service.eligibility.notes.en,
    te: service.eligibility.notes.te,
    hi: service.eligibility.notes.hi
  };

  const requiredDocuments = service.documents.map(d => `${d.name.en} (${d.isMandatory ? 'Mandatory' : 'Optional'}) - ${d.acceptableFormats}`);

  const applicationSteps = service.steps.map(s => ({
    stepNumber: s.stepNumber,
    title: s.title,
    description: s.description
  }));

  const eligibilitySummary: Record<Language, string> = {
    en: `${service.eligibility.whoCanApply.en.join(' • ')}. Income condition: ${service.eligibility.conditions.en.join(' • ')}`,
    te: `${service.eligibility.whoCanApply.te.join(' • ')}. ఆదాయ నిబంధన: ${service.eligibility.conditions.te.join(' • ')}`,
    hi: `${service.eligibility.whoCanApply.hi.join(' • ')}. आय सीमा: ${service.eligibility.conditions.hi.join(' • ')}`
  };

  return {
    service,
    whyExplanation,
    eligibilitySummary,
    requiredDocuments,
    applicationSteps,
    officialLink: service.links.applyUrl,
    portalName: service.links.portalName,
    importantNote
  };
}

/**
 * Checks if the user message is a follow-up about an already selected service.
 */
function handleFollowUpQuery(query: string, activeService: GovernmentService, lang: Language): ProcessedQueryResult | null {
  const q = query.toLowerCase().trim();

  const isDocQuery = /\b(document|documents|papers|proof|id|certificate|marksheet|bonafide|aadhaar|checklist)\b/i.test(q) ||
                     q.includes('పత్రాలు') || q.includes('దస్తావేజు') || q.includes('दस्तावेज') || q.includes('कागजात');

  const isStepsQuery = /\b(how to apply|how can i apply|how do i apply|apply steps|procedure|step|steps|process|roadmap)\b/i.test(q) ||
                       q.includes('దరఖాస్తు విధానం') || q.includes('ఎలా దరఖాస్తు') || q.includes('आवेदन कैसे') || q.includes('प्रक्रिया');

  const isEligQuery = /\b(eligibility|eligible|qualify|age limit|income limit|who can apply|criteria|am i eligible)\b/i.test(q) ||
                      q.includes('అర్హత') || q.includes('ఎవరు దరఖాస్తు') || q.includes('पात्रता') || q.includes('योग्यता');

  const isLinkQuery = /\b(apply now|link|official portal|website|url|portal link|where to apply)\b/i.test(q) ||
                      q.includes('లింక్') || q.includes('వెబ్‌సైట్') || q.includes('आधिकारिक लिंक') || q.includes('वेबसाइट');

  const isMoreQuery = /\b(tell me more|details|benefit|benefits|what is this|overview|department)\b/i.test(q) ||
                      q.includes('మరిన్ని వివరాలు') || q.includes('వివరాలు') || q.includes('और जानकारी') || q.includes('विवरण');

  const rule = SERVICE_INTENT_RULES.find(r => r.serviceId === activeService.id);
  const structured = buildStructuredServiceMatch(activeService, rule);

  if (isDocQuery) {
    const docList = activeService.documents.map((d, i) =>
      `${i + 1}. **${d.name[lang]}** (${d.isMandatory ? 'Mandatory' : 'Optional'})\n   - Format: ${d.acceptableFormats}\n   - Guidance: ${d.instructions[lang]}`
    ).join('\n');

    let reply = '';
    if (lang === 'en') {
      reply = `Here is the verified required document checklist for **${activeService.name.en}**:\n\n${docList}\n\n💡 *Tip: Ensure all photocopies are clear, legible, and match your Aadhaar name exactly.*`;
    } else if (lang === 'te') {
      reply = `**${activeService.name.te}** కోసం అవసరమైన ధృవీకరించబడిన పత్రాల జాబితా ఇక్కడ ఉంది:\n\n${docList}\n\n💡 *సలహా: అన్ని పత్రాల జిరాక్స్ కాపీలు స్పష్టంగా ఉండాలి మరియు పేరు ఆధార్ కార్డుతో సరిపోలాలి.*`;
    } else {
      reply = `**${activeService.name.hi}** हेतु आवश्यक सत्यापित दस्तावेजों की चेकलिस्ट:\n\n${docList}\n\n💡 *सुझाव: सभी दस्तावेजों की स्पष्ट प्रतियां तैयार रखें और नाम आधार कार्ड से मेल खाना चाहिए।*`;
    }

    return {
      replyText: reply,
      serviceMatch: structured,
      confidence: 'followup',
      quickFollowUps: ['Check Eligibility', 'How to Apply?', 'Apply Now', 'Show Overview'],
      activeServiceId: activeService.id
    };
  }

  if (isStepsQuery) {
    const stepsList = activeService.steps.map(s =>
      `**Step ${s.stepNumber}: ${s.title[lang]}**\n${s.description[lang]}${s.tips ? `\n*Pro-Tip: ${s.tips[lang]}*` : ''}`
    ).join('\n\n');

    let reply = '';
    if (lang === 'en') {
      reply = `Here is the official step-by-step application guidance for **${activeService.name.en}**:\n\n${stepsList}\n\n🔗 Apply directly at: **[${activeService.links.portalName}](${activeService.links.applyUrl})**`;
    } else if (lang === 'te') {
      reply = `**${activeService.name.te}** కోసం అధికారిక దశలవారీ దరఖాస్తు ప్రక్రియ:\n\n${stepsList}\n\n🔗 అధికారిక లింక్: **[${activeService.links.portalName}](${activeService.links.applyUrl})**`;
    } else {
      reply = `**${activeService.name.hi}** के लिए आधिकारिक चरण-दर-चरण आवेदन प्रक्रिया:\n\n${stepsList}\n\n🔗 आधिकारिक लिंक: **[${activeService.links.portalName}](${activeService.links.applyUrl})**`;
    }

    return {
      replyText: reply,
      serviceMatch: structured,
      confidence: 'followup',
      quickFollowUps: ['Show Documents', 'Check Eligibility', 'Apply Now'],
      activeServiceId: activeService.id
    };
  }

  if (isEligQuery) {
    const who = activeService.eligibility.whoCanApply[lang].map(w => `• ${w}`).join('\n');
    const cond = activeService.eligibility.conditions[lang].map(c => `• ${c}`).join('\n');

    let reply = '';
    if (lang === 'en') {
      reply = `**Eligibility Criteria for ${activeService.name.en}:**\n\n**Who Qualifies:**\n${who}\n\n**Important Conditions:**\n${cond}\n\n• Age Criteria: ${activeService.eligibility.ageRange.min} to ${activeService.eligibility.ageRange.max} years\n• Income Limit: ${activeService.eligibility.maxAnnualIncome ? `Up to ₹${activeService.eligibility.maxAnnualIncome.toLocaleString('en-IN')}/year` : 'No strict income ceiling'}`;
    } else if (lang === 'te') {
      reply = `**${activeService.name.te} కోసం అర్హత నిబంధనలు:**\n\n**ఎవరు దరఖాస్తు చేసుకోవచ్చు:**\n${who}\n\n**ముఖ్య నిబంధనలు:**\n${cond}\n\n• వయోపరిమితి: ${activeService.eligibility.ageRange.min} నుండి ${activeService.eligibility.ageRange.max} సంవత్సరాలు`;
    } else {
      reply = `**${activeService.name.hi} हेतु पात्रता मानदंड:**\n\n**पात्र नागरिक:**\n${who}\n\n**महत्वपूर्ण शर्तें:**\n${cond}\n\n• आयु सीमा: ${activeService.eligibility.ageRange.min} से ${activeService.eligibility.ageRange.max} वर्ष`;
    }

    return {
      replyText: reply,
      serviceMatch: structured,
      confidence: 'followup',
      quickFollowUps: ['Show Documents', 'How to Apply?', 'Apply Now'],
      activeServiceId: activeService.id
    };
  }

  if (isLinkQuery) {
    let reply = '';
    if (lang === 'en') {
      reply = `You can apply directly through the official Government portal for **${activeService.name.en}**:\n\n🌐 **Portal Name:** ${activeService.links.portalName}\n🔗 **Verified URL:** ${activeService.links.applyUrl}\n📞 **National Helpline:** ${activeService.links.helplineNumber}`;
    } else if (lang === 'te') {
      reply = `మీరు **${activeService.name.te}** కోసం అధికారిక ప్రభుత్వ పోర్టల్ ద్వారా నేరుగా దరఖాస్తు చేసుకోవచ్చు:\n\n🌐 **పోర్టల్:** ${activeService.links.portalName}\n🔗 **అధికారిక లింక్:** ${activeService.links.applyUrl}\n📞 **హెల్ప్‌లైన్:** ${activeService.links.helplineNumber}`;
    } else {
      reply = `आप **${activeService.name.hi}** के लिए सीधे आधिकारिक सरकारी पोर्टल पर आवेदन कर सकते हैं:\n\n🌐 **पोर्टल:** ${activeService.links.portalName}\n🔗 **सत्यापित लिंक:** ${activeService.links.applyUrl}\n📞 **हेल्पलाइन:** ${activeService.links.helplineNumber}`;
    }

    return {
      replyText: reply,
      serviceMatch: structured,
      confidence: 'followup',
      quickFollowUps: ['Show Documents', 'How to Apply?', 'Check Eligibility'],
      activeServiceId: activeService.id
    };
  }

  if (isMoreQuery) {
    let reply = '';
    if (lang === 'en') {
      reply = `**Overview of ${activeService.name.en}:**\n\n${activeService.fullDescription.en}\n\n**Core Purpose:**\n${activeService.purpose.en}\n\n**Governing Department:**\n${activeService.department.en}\n\n**Post-Submission Timeline:**\n${activeService.postSubmission.timeline.en}`;
    } else if (lang === 'te') {
      reply = `**${activeService.name.te} యొక్క పూర్తి వివరాలు:**\n\n${activeService.fullDescription.te}\n\n**ప్రధాన ప్రయోజనం:**\n${activeService.purpose.te}\n\n**విభాగం:**\n${activeService.department.te}`;
    } else {
      reply = `**${activeService.name.hi} का संपूर्ण विवरण:**\n\n${activeService.fullDescription.hi}\n\n**मुख्य उद्देश्य:**\n${activeService.purpose.hi}\n\n**मंत्रालय / विभाग:**\n${activeService.department.hi}`;
    }

    return {
      replyText: reply,
      serviceMatch: structured,
      confidence: 'followup',
      quickFollowUps: ['Check Eligibility', 'Show Documents', 'How to Apply?', 'Apply Now'],
      activeServiceId: activeService.id
    };
  }

  return null;
}

/**
 * Intelligent service search evaluating user intent according to strict priority:
 * USER INTENT > SERVICE PURPOSE > ELIGIBILITY > SERVICE DESCRIPTION > KEYWORDS
 */
export function evaluateCitizenQuery(query: string, lang: Language = 'en', activeServiceId?: string): ProcessedQueryResult {
  const cleanQ = query.trim();

  // 1. Check if user is asking a follow-up about the active service
  if (activeServiceId) {
    const activeService = servicesData.find(s => s.id === activeServiceId);
    if (activeService) {
      const followUp = handleFollowUpQuery(cleanQ, activeService, lang);
      if (followUp) {
        return followUp;
      }
    }
  }

  // 2. Handle general greetings or questions about what the assistant is
  const isGreeting = /^(hi|hello|hey|namaste|vanakkam|good morning|good afternoon|good evening|who are you|help|how to use)\b/i.test(cleanQ);
  if (isGreeting && cleanQ.split(' ').length <= 4) {
    const greetings: Record<Language, string> = {
      en: `Hello! I am **SEVAGUIDE AI Assistant**, your conversational citizen welfare advisor.\n\nI can help you:\n1. Identify the exact government scheme for your requirement\n2. Verify detailed eligibility criteria\n3. Prepare required document checklists\n4. Guide you with official step-by-step application procedures\n5. Connect you to direct official government portals (.gov.in)\n\nTry asking me a question or select one of the example prompts below!`,
      te: `నమస్కారం! నేను **SEVAGUIDE AI అసిస్టెంట్**, మీ పౌర సంక్షేమ పథకాల మార్గదర్శిని.\n\nనేను మీకు:\n1. మీ అవసరానికి తగిన ఖచ్చితమైన ప్రభుత్వ పథకాన్ని గుర్తించడంలో\n2. అర్హత నిబంధనలను ధృవీకరించడంలో\n3. అవసరమైన పత్రాల చెక్‌లిస్ట్‌ను సిద్ధం చేయడంలో\n4. అధికారిక దరఖాస్తు దశలను వివరించడంలో సహాయపడతాను.\n\nమీ ప్రశ్నను అడగండి లేదా క్రింది ఉదాహరణలను ఎంచుకోండి!`,
      hi: `नमस्ते! मैं **SEVAGUIDE AI सहायक** हूं, आपका नागरिक कल्याण योजना सलाहकार।\n\nमैं आपकी सहायता कर सकता हूं:\n1. आपकी आवश्यकता के अनुसार सटीक सरकारी योजना खोजने में\n2. पात्रता मानदंडों की जांच करने में\n3. आवश्यक दस्तावेजों की सूची तैयार करने में\n4. चरण-दर-चरण आवेदन प्रक्रिया का मार्गदर्शन करने में।\n\nकृपया अपना प्रश्न पूछें या नीचे दिए गए उदाहरणों में से चुनें!`
    };

    return {
      replyText: greetings[lang],
      confidence: 'clarification',
      quickFollowUps: [
        'I need financial assistance for education',
        'I am a farmer and need government assistance',
        'I need help with a health-related government scheme',
        'I want to apply for an employment service'
      ]
    };
  }

  // 3. Priority-based matching algorithm
  const qLower = cleanQ.toLowerCase();

  interface ScoredMatch {
    service: GovernmentService;
    rule?: IntentRule;
    intentScore: number;
    purposeScore: number;
    eligibilityScore: number;
    descriptionScore: number;
    keywordScore: number;
    totalScore: number;
  }

  const scoredList: ScoredMatch[] = servicesData.map(service => {
    const rule = SERVICE_INTENT_RULES.find(r => r.serviceId === service.id);
    let intentScore = 0;
    let purposeScore = 0;
    let eligibilityScore = 0;
    let descriptionScore = 0;
    let keywordScore = 0;

    // PRIORITY 1: USER INTENT (Weight: 100 max)
    if (rule) {
      for (const intent of rule.intents) {
        if (qLower.includes(intent.toLowerCase())) {
          intentScore = Math.max(intentScore, 100);
          break;
        }
        // Substring token match
        const tokens = intent.toLowerCase().split(' ');
        const matchedTokens = tokens.filter(t => qLower.includes(t));
        if (tokens.length > 0 && matchedTokens.length >= 2) {
          intentScore = Math.max(intentScore, Math.round((matchedTokens.length / tokens.length) * 85));
        }
      }
    }

    // Direct domain triggers for Priority 1
    if ((qLower.includes('student') || qLower.includes('education') || qLower.includes('college') || qLower.includes('scholarship') || qLower.includes('study')) && service.id === 'nsp-scholarship') {
      intentScore = Math.max(intentScore, 95);
    }
    if ((qLower.includes('farmer') || qLower.includes('farming') || qLower.includes('agriculture') || qLower.includes('kisan') || qLower.includes('crop')) && service.id === 'pm-kisan') {
      intentScore = Math.max(intentScore, 95);
    }
    if ((qLower.includes('health') || qLower.includes('medical') || qLower.includes('hospital') || qLower.includes('ayushman') || qLower.includes('treatment')) && service.id === 'ayushman-bharat') {
      intentScore = Math.max(intentScore, 95);
    }
    if ((qLower.includes('house') || qLower.includes('housing') || qLower.includes('home') || qLower.includes('pucca') || qLower.includes('awas')) && service.id === 'pm-awas') {
      intentScore = Math.max(intentScore, 95);
    }
    if ((qLower.includes('employment') || qLower.includes('unorganized') || qLower.includes('labor') || qLower.includes('worker') || qLower.includes('shram')) && service.id === 'e-shram') {
      intentScore = Math.max(intentScore, 95);
    }
    if ((qLower.includes('business') || qLower.includes('mudra') || qLower.includes('shop') || qLower.includes('startup loan') || qLower.includes('enterprise')) && service.id === 'pm-mudra') {
      intentScore = Math.max(intentScore, 95);
    }
    if ((qLower.includes('pension') || qLower.includes('retirement') || qLower.includes('old age') || qLower.includes('monthly pension')) && service.id === 'atal-pension') {
      intentScore = Math.max(intentScore, 95);
    }
    if ((qLower.includes('girl child') || qLower.includes('daughter') || qLower.includes('sukanya') || qLower.includes('girl education')) && service.id === 'sukanya-samriddhi') {
      intentScore = Math.max(intentScore, 95);
    }

    // PRIORITY 2: SERVICE PURPOSE (Weight: 60 max)
    const purposeText = `${service.purpose.en} ${service.purpose.te} ${service.purpose.hi}`.toLowerCase();
    const qWords = qLower.split(/\s+/).filter(w => w.length > 3);
    let purposeMatches = 0;
    qWords.forEach(w => {
      if (purposeText.includes(w)) purposeMatches++;
    });
    purposeScore = Math.min(60, purposeMatches * 15);

    // PRIORITY 3: ELIGIBILITY & TARGET GROUPS (Weight: 40 max)
    let eligMatches = 0;
    service.targetGroups.forEach(tg => {
      if (qLower.includes(tg)) eligMatches += 20;
    });
    if (qLower.includes('student') && service.targetGroups.includes('students')) eligMatches += 20;
    if (qLower.includes('farmer') && service.targetGroups.includes('farmers')) eligMatches += 20;
    if ((qLower.includes('elderly') || qLower.includes('senior')) && service.targetGroups.includes('senior_citizens')) eligMatches += 20;
    if ((qLower.includes('woman') || qLower.includes('girl')) && service.targetGroups.includes('women')) eligMatches += 20;
    if ((qLower.includes('poor') || qLower.includes('low income') || qLower.includes('financial assistance')) && service.targetGroups.includes('low_income')) eligMatches += 20;
    eligibilityScore = Math.min(40, eligMatches);

    // PRIORITY 4: SERVICE DESCRIPTION (Weight: 25 max)
    const descText = `${service.shortDescription.en} ${service.fullDescription.en}`.toLowerCase();
    let descMatches = 0;
    qWords.forEach(w => {
      if (descText.includes(w)) descMatches++;
    });
    descriptionScore = Math.min(25, descMatches * 8);

    // PRIORITY 5: KEYWORDS & SYNONYMS (Weight: 15 max)
    if (rule) {
      let kwMatches = 0;
      rule.keywords.forEach(kw => {
        if (qLower.includes(kw.toLowerCase())) kwMatches += 5;
      });
      keywordScore = Math.min(15, kwMatches);
    }

    // Strict priority weighted combination
    const totalScore = intentScore * 1.5 + purposeScore + eligibilityScore + descriptionScore + keywordScore;

    return {
      service,
      rule,
      intentScore,
      purposeScore,
      eligibilityScore,
      descriptionScore,
      keywordScore,
      totalScore
    };
  });

  // Sort descending by totalScore
  scoredList.sort((a, b) => b.totalScore - a.totalScore);
  const best = scoredList[0];
  const second = scoredList[1];

  // Exact Match threshold:
  // Must have a confident score (>= 60) AND (best is significantly higher than second or intent is strong)
  const isConfidentExactMatch = best && best.totalScore >= 60 && (best.intentScore >= 70 || best.totalScore - (second?.totalScore || 0) >= 30);

  if (isConfidentExactMatch) {
    const s = best.service;
    const rule = best.rule;
    const structured = buildStructuredServiceMatch(s, rule);

    let introText = '';
    if (lang === 'en') {
      introText = `Based on your requirement, the most relevant government service is **${s.name.en}**.\n\nHere are the complete official details, eligibility criteria, required documents, and application steps:`;
    } else if (lang === 'te') {
      introText = `మీ అభ్యర్థన ఆధారంగా, మీకు అత్యంత అనువైన అధికారిక ప్రభుత్వ సేవ **${s.name.te}**.\n\nపూర్తి వివరాలు, అర్హత, అవసరమైన పత్రాలు మరియు దరఖాస్తు విధానం క్రింద ఇవ్వబడ్డాయి:`;
    } else {
      introText = `आपकी आवश्यकता के आधार पर सर्वाधिक उपयुक्त सरकारी सेवा **${s.name.hi}** है।\n\nइसके पूर्ण विवरण, पात्रता, आवश्यक दस्तावेज एवं आवेदन प्रक्रिया नीचे दी गई है:`;
    }

    return {
      replyText: introText,
      serviceMatch: structured,
      confidence: 'exact',
      quickFollowUps: ['Check Eligibility', 'Show Documents', 'How to Apply?', 'Apply Now', 'Tell me more'],
      activeServiceId: s.id
    };
  }

  // If no confident exact match found:
  // Clearly notify citizen according to the user mandate:
  // "I couldn't identify an exact service for your request. Here are the closest relevant services."
  const closest = scoredList.slice(0, 3).map(item => item.service);

  const fallbackNotices: Record<Language, string> = {
    en: `I couldn't identify an exact service for your request. Here are the closest relevant services available in our verified government directory:`,
    te: `మీ అభ్యర్థనకు సరిగ్గా సరిపోయే ఖచ్చితమైన సేవను గుర్తించలేకపోయాను. మా ధృవీకరించబడిన డైరెక్టరీ నుండి అత్యంత సన్నిహితమైన సంబంధిత సేవలు ఇక్కడ ఉన్నాయి:`,
    hi: `मैं आपके अनुरोध के लिए किसी सटीक सेवा की पहचान नहीं कर सका। हमारी सत्यापित सरकारी निर्देशिका से सर्वाधिक प्रासंगिक निकटतम सेवाएं ये हैं:`
  };

  return {
    replyText: fallbackNotices[lang],
    confidence: 'closest',
    closestServices: closest,
    quickFollowUps: closest.map(c => `Tell me about ${c.name[lang]}`),
    activeServiceId: closest[0]?.id
  };
}
