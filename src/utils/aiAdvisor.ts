import { GovernmentService, Language, AiRecommendation } from '../types';
import { servicesData } from '../data/servicesData';

interface IntentKeywords {
  persona?: string;
  category?: string;
  keywords: string[];
}

export function analyzeCitizenQuery(
  rawQuery: string,
  lang: Language = 'en'
): AiRecommendation[] {
  const query = rawQuery.toLowerCase().trim();

  if (!query) {
    return [];
  }

  // Domain & Persona intent mapping for EN, TE, HI
  const scores: { service: GovernmentService; score: number; reasons: Record<Language, string> }[] = [];

  for (const service of servicesData) {
    let score = 0;
    let matchAspects: string[] = [];

    const serviceNameEn = service.name.en.toLowerCase();
    const serviceNameTe = service.name.te.toLowerCase();
    const serviceNameHi = service.name.hi.toLowerCase();
    const descEn = service.fullDescription.en.toLowerCase();
    const purposeEn = service.purpose.en.toLowerCase();
    const tags = service.tags.map(t => t.toLowerCase());

    // 1. Target persona matches
    if (
      (query.includes('student') || query.includes('college') || query.includes('study') || query.includes('school') || query.includes('చదువు') || query.includes('విద్యార్థి') || query.includes('छात्र') || query.includes('विद्यार्थी')) &&
      service.targetGroups.includes('students')
    ) {
      score += 35;
      matchAspects.push('Identified Student / Education Requirement');
    }

    if (
      (query.includes('farmer') || query.includes('agriculture') || query.includes('crop') || query.includes('kisan') || query.includes('రైతు') || query.includes('వ్యవసాయం') || query.includes('किसान') || query.includes('खेती')) &&
      service.targetGroups.includes('farmers')
    ) {
      score += 35;
      matchAspects.push('Identified Farmer / Agricultural Need');
    }

    if (
      (query.includes('senior') || query.includes('elderly') || query.includes('old age') || query.includes('pension') || query.includes('వృద్ధు') || query.includes('పెన్షన్') || query.includes('बुजुर्ग') || query.includes('वृद्धावस्था') || query.includes('पेंशन')) &&
      service.targetGroups.includes('senior_citizens')
    ) {
      score += 35;
      matchAspects.push('Identified Senior Citizen / Pension Need');
    }

    if (
      (query.includes('woman') || query.includes('girl') || query.includes('daughter') || query.includes('female') || query.includes('మహిళ') || query.includes('ఆడపిల్ల') || query.includes('బాలిక') || query.includes('महिला') || query.includes('बेटी') || query.includes('बालिका')) &&
      service.targetGroups.includes('women')
    ) {
      score += 35;
      matchAspects.push('Identified Women / Girl Child Beneficiary');
    }

    if (
      (query.includes('worker') || query.includes('labour') || query.includes('labor') || query.includes('driver') || query.includes('unorganized') || query.includes('కూలీ') || query.includes('కార్మిక') || query.includes('मजदूर') || query.includes('श्रमिक')) &&
      (service.id === 'e-shram' || service.category === 'employment')
    ) {
      score += 35;
      matchAspects.push('Identified Unorganized Worker / Livelihood Need');
    }

    if (
      (query.includes('business') || query.includes('loan') || query.includes('startup') || query.includes('shop') || query.includes('వ్యాపారం') || query.includes('రుణం') || query.includes('వ్యాపార') || query.includes('व्यापार') || query.includes('ऋण') || query.includes('लोन')) &&
      (service.id === 'pm-mudra' || service.category === 'business')
    ) {
      score += 35;
      matchAspects.push('Identified Business Finance / MSME Need');
    }

    if (
      (query.includes('health') || query.includes('hospital') || query.includes('medical') || query.includes('insurance') || query.includes('ఆరోగ్య') || query.includes('ఆసుపత్రి') || query.includes('వైద్య') || query.includes('स्वास्थ्य') || query.includes('अस्पताल') || query.includes('बीमा') || query.includes('इलाज')) &&
      (service.id === 'ayushman-bharat' || service.category === 'healthcare')
    ) {
      score += 35;
      matchAspects.push('Identified Healthcare & Hospitalization Assurance');
    }

    if (
      (query.includes('house') || query.includes('housing') || query.includes('home') || query.includes('shelter') || query.includes('ఇల్లు') || query.includes('గృహ') || query.includes('నివాసం') || query.includes('मकान') || query.includes('आवास') || query.includes('घर')) &&
      (service.id === 'pm-awas' || service.category === 'housing')
    ) {
      score += 35;
      matchAspects.push('Identified Housing & Pucca Shelter Need');
    }

    // 2. Keyword & Token overlap
    const tokens = query.split(/\s+/).filter(t => t.length > 2);
    for (const token of tokens) {
      if (serviceNameEn.includes(token) || serviceNameTe.includes(token) || serviceNameHi.includes(token)) {
        score += 20;
      }
      if (tags.some(t => t.includes(token))) {
        score += 15;
      }
      if (descEn.includes(token) || purposeEn.includes(token)) {
        score += 8;
      }
    }

    // 3. Category match bonus
    if (
      (query.includes('education') || query.includes('scholarship')) && service.category === 'education' ||
      (query.includes('agri') || query.includes('farm')) && service.category === 'agriculture' ||
      (query.includes('health') || query.includes('hospital')) && service.category === 'healthcare' ||
      (query.includes('welfare') || query.includes('pension')) && service.category === 'social_welfare' ||
      (query.includes('house') || query.includes('home')) && service.category === 'housing'
    ) {
      score += 25;
    }

    // If score has meaningful match
    if (score > 15) {
      const matchScorePct = Math.min(99, Math.max(50, Math.round(55 + score * 0.7)));

      scores.push({
        service,
        score: matchScorePct,
        reasons: {
          en: `Matched based on your requirement for ${matchAspects.join(' and ') || service.category}. This scheme provides direct support under ${service.department.en}.`,
          te: `మీ అవసరమైన ${matchAspects.join(' మరియు ') || service.category} ఆధారంగా ఈ పథకం సరిపోలింది. ఇది ${service.department.te} ద్వారా అందించబడుతుంది.`,
          hi: `आपकी आवश्यकता (${matchAspects.join(' एवं ') || service.category}) के आधार पर अनुशंसित। यह योजना ${service.department.hi} के अंतर्गत सीधे लाभ प्रदान करती है।`
        }
      });
    }
  }

  // Sort by score descending
  scores.sort((a, b) => b.score - a.score);

  // Fallback: If no high-confidence match found, return the most popular public schemes with helpful guidance
  if (scores.length === 0) {
    const popularServices = servicesData.filter(s => s.popular).slice(0, 3);
    return popularServices.map(service => ({
      service,
      matchScore: 65,
      matchReason: {
        en: `General recommendation: Based on common citizen queries, this flagship initiative provides substantial public benefits.`,
        te: `సాధారణ సిఫార్సు: పౌరుల సాధారణ అవసరాల ఆధారంగా, ఈ ప్రధాన పథకం అత్యధిక ప్రయోజనాలను అందిస్తుంది.`,
        hi: `सामान्य अनुशंसा: आम नागरिकों के लिए सबसे उपयोगी एवं लोकप्रिय योजनाओं में से एक।`
      },
      personalizedSummary: service.shortDescription,
      keyDocumentsHighlight: service.documents.slice(0, 3).map(d => d.name[lang]),
      quickApplyAdvice: {
        en: `Review your eligibility criteria and prepare documents before visiting ${service.links.portalName}.`,
        te: `అర్హత నిబంధనలను సరిచూసుకుని, పత్రాలను సిద్ధం చేసుకున్న తర్వాత ${service.links.portalName} లో దరఖాస్తు చేయండి.`,
        hi: `पात्रता शर्तों की जांच करें और दस्तावेज तैयार कर ${service.links.portalName} पर आवेदन करें।`
      }
    }));
  }

  return scores.slice(0, 4).map(item => ({
    service: item.service,
    matchScore: item.score,
    matchReason: item.reasons,
    personalizedSummary: item.service.shortDescription,
    keyDocumentsHighlight: item.service.documents.slice(0, 3).map(d => d.name[lang]),
    quickApplyAdvice: {
      en: `Step 1 is ${item.service.steps[0]?.title.en}. Prepare ${item.service.documents[0]?.name.en} and submit directly on ${item.service.links.portalName}.`,
      te: `మొదటి దశ: ${item.service.steps[0]?.title.te}. పత్రాలు సిద్ధం చేసుకుని ${item.service.links.portalName} లో దరఖాస్తు చేయండి.`,
      hi: `पहला चरण: ${item.service.steps[0]?.title.hi}। दस्तावेज तैयार रखें और ${item.service.links.portalName} पर आवेदन करें।`
    }
  }));
}

export const presetSampleQueries: { label: Record<Language, string>; query: string }[] = [
  {
    label: {
      en: 'College Student seeking educational scholarship',
      te: 'కాలేజీ విద్యార్థి స్కాలర్‌షిప్ కోసం చూస్తున్నారు',
      hi: 'कॉलेज छात्र उच्च शिक्षा छात्रवृत्ति चाहते हैं'
    },
    query: 'I am a college student from a low income family looking for educational scholarship and fee assistance.'
  },
  {
    label: {
      en: 'Small farmer needing income & crop financial aid',
      te: 'చిన్న రైతు పెట్టుబడి మరియు పంట సహాయం కోసం',
      hi: 'छोटे किसान फसल एवं आर्थिक सहायता चाहते हैं'
    },
    query: 'I am a small landholding farmer needing financial assistance for agricultural inputs and seeds.'
  },
  {
    label: {
      en: 'Free health insurance for family & elderly parents',
      te: 'కుటుంబం మరియు వృద్ధ తల్లిదండ్రులకు ఉచిత ఆరోగ్య బీమా',
      hi: 'परिवार एवं बुजुर्ग माता-पिता हेतु मुफ्त स्वास्थ्य बीमा'
    },
    query: 'I need free cashless medical treatment and health insurance for my family and 70+ year old parents.'
  },
  {
    label: {
      en: 'Unorganized daily worker seeking insurance & pension',
      te: 'అసంఘటిత దినసరి కార్మికుడు బీమా మరియు సంక్షేమం కోసం',
      hi: 'दैनिक मजदूर सामाजिक सुरक्षा और बीमा कार्ड चाहते हैं'
    },
    query: 'I work as an auto driver / daily wage worker and want government accident insurance and social security card.'
  },
  {
    label: {
      en: 'New entrepreneur seeking collateral-free business loan',
      te: 'కొత్త వ్యాపారం ప్రారంభించడానికి పూచీకత్తు లేని ముద్రా రుణం',
      hi: 'नया व्यवसाय शुरू करने हेतु बिना गारंटी मुद्रा लोन'
    },
    query: 'I want to start a small retail shop / micro business and need a loan without collateral or property guarantee.'
  },
  {
    label: {
      en: 'Savings and high interest for daughter’s future',
      te: 'ఆడపిల్ల ఉన్నత చదువుల కోసం ప్రభుత్వ పొదుపు పథకం',
      hi: 'बेटी के भविष्य एवं पढ़ाई हेतु सरकारी बचत योजना'
    },
    query: 'I have a 6 year old daughter and want to invest in a government guaranteed high interest tax-free savings scheme.'
  },
  {
    label: {
      en: 'Elderly destitute citizen needing monthly pension',
      te: 'ఆధారము లేని వృద్ధులకు నెలవారీ పింఛను పథకం',
      hi: 'असहाय बुजुर्ग व्यक्ति हेतु मासिक वृद्धावस्था पेंशन'
    },
    query: 'I am 64 years old with low income and looking for a monthly old age pension scheme.'
  }
];
