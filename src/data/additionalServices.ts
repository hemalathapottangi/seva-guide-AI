import { GovernmentService } from '../types';

export const additionalServices: GovernmentService[] = [
  // 1. AICTE Pragati Scholarship for Girl Students (Education & Women)
  {
    id: 'aicte-pragati',
    code: 'EDU-PRAGATI-02',
    name: {
      en: 'AICTE Pragati Scholarship Scheme for Girls',
      te: 'ఏఐసీటీఈ ప్రగతి బాలికల స్కాలర్‌షిప్ పథకం',
      hi: 'एआईसीटीई प्रगति बालिका छात्रवृत्ति योजना'
    },
    shortDescription: {
      en: '₹50,000 per annum financial grant for meritorious girl students pursuing Degree or Diploma technical courses.',
      te: 'టెక్నికల్ డిగ్రీ లేదా డిప్లొమా చదువుతున్న ప్రతిభావంతులైన బాలికలకు ఏటా ₹50,000 ఆర్థిక ప్రోత్సాహకం.',
      hi: 'तकनीकी डिग्री या डिप्लोमा पाठ्यक्रमों में अध्ययनरत मेधावी बालिकाओं हेतु ₹50,000 वार्षिक सहायता।'
    },
    fullDescription: {
      en: 'The AICTE Pragati Scholarship Scheme is an initiative implemented by the All India Council for Technical Education (AICTE) to empower young women with technical education. It grants ₹50,000 per annum to cover college tuition fees, books, computer equipment, and study aids throughout the duration of study.',
      te: 'ఏఐసీటీఈ ప్రగతి స్కాలర్‌షిప్ అనేది బాలికల్లో సాంకేతిక విద్యను ప్రోత్సహించడానికి ప్రారంభించిన కేంద్ర పథకం. కళాశాల ఫీజులు, పుస్తకాలు మరియు కంప్యూటర్ పరికరాల కోసం చదువు పూర్తయ్యే వరకు ఏటా ₹50,000 ఆర్థిక సహాయాన్ని నేరుగా బ్యాంక్ ఖాతాలో జమ చేస్తారు.',
      hi: 'एआईसीटीई प्रगति छात्रवृत्ति योजना बालिकाओं को तकनीकी शिक्षा में आगे बढ़ाने हेतु प्रतिवर्ष ₹50,000 की वित्तीय सहायता प्रदान करती है ताकि वे कॉलेज फीस, पुस्तकें और लैपटॉप आदि खरीद सकें।'
    },
    purpose: {
      en: 'To provide financial assistance to meritorious girl students entering technical degree and diploma courses without financial hurdles.',
      te: 'ఆర్థిక ఇబ్బందులు లేకుండా ప్రతిభావంతులైన బాలికలు ఇంజనీరింగ్ మరియు పాలిటెక్నిక్ డిప్లొమా పూర్తి చేయడానికి ఆర్థిక అండగా నిలవడం.',
      hi: 'मेधावी बालिकाओं को तकनीकी डिग्री और डिप्लोमा में वित्तीय सहायता प्रदान कर आत्मनिर्भर बनाना।'
    },
    department: {
      en: 'All India Council for Technical Education (AICTE) / Ministry of Education',
      te: 'అఖిల భారత సాంకేతిక విద్యా మండలి (AICTE) / విద్యా మంత్రిత్వ శాఖ',
      hi: 'अखिल भारतीय तकनीकी शिक्षा परिषद (AICTE) / शिक्षा मंत्रालय'
    },
    category: 'education',
    targetGroups: ['students', 'women', 'youth'],
    keywords: ['aicte', 'pragati', 'girl scholarship', 'btech scholarship', 'diploma scholarship', 'engineering girl aid', 'technical education'],
    synonyms: ['women engineering aid', 'girls college grant', 'polytechnic scholarship for girls'],
    location: 'All India / Central Scheme',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'Girl student admitted to 1st year of Degree or Diploma level program or 2nd year via lateral entry in AICTE approved institution',
          'Maximum two girls per family are eligible'
        ],
        te: [
          'AICTE గుర్తింపు పొందిన సంస్థలో డిగ్రీ లేదా డిప్లొమా 1వ సంవత్సరం లేదా లేటరల్ ఎంట్రీ ద్వారా చేరిన బాలికలు',
          'ఒక కుటుంబం నుండి గరిష్టంగా ఇద్దరు బాలికలు అర్హులు'
        ],
        hi: [
          'AICTE अनुमोदित संस्थान में डिग्री या डिप्लोमा प्रथम वर्ष या लेटरल एंट्री में नामांकित छात्राएं',
          'एक परिवार से अधिकतम दो बेटियां पात्र'
        ]
      },
      conditions: {
        en: [
          'Total family annual income from all sources must not exceed ₹8,00,000 per annum',
          'Admission must be through centralized admission process (counseling)'
        ],
        te: [
          'కుటుంబ వార్షిక ఆదాయం ₹8,00,000 మించకూడదు',
          'ప్రభుత్వ కౌన్సెలింగ్ ప్రక్రియ ద్వారా సీటు పొంది ఉండాలి'
        ],
        hi: [
          'पारिवारिक वार्षिक आय ₹8,00,000 से अधिक नहीं होनी चाहिए',
          'प्रवेश राज्य या केंद्रीय काउंसलिंग प्रक्रिया के माध्यम से होना चाहिए'
        ]
      },
      ageRange: { min: 16, max: 28 },
      maxAnnualIncome: 800000,
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'pragati-bonafide',
        name: { en: 'Institution Bonafide & Fee Receipt', te: 'కళాశాల బోనఫైడ్ & ఫీజు రసీదు', hi: 'कॉलेज बोनाफाइड एवं फीस रसीद' },
        description: { en: 'Attested certificate from Principal proving enrollment in AICTE college', te: 'ప్రిన్సిపాల్ సంతకం చేసిన బోనఫైడ్ మరియు ఫీజు రసీదు', hi: 'प्राचार्य द्वारा सत्यापित प्रवेश प्रमाण पत्र' },
        isMandatory: true,
        acceptableFormats: 'PDF (Max 2MB)',
        instructions: { en: 'Ensure college AICTE approval code is clearly visible.', te: 'కళాశాల AICTE కోడ్ స్పష్టంగా ఉండాలి.', hi: 'कॉलेज का AICTE कोड अंकित होना चाहिए।' }
      },
      {
        id: 'pragati-income',
        name: { en: 'Income Certificate (< ₹8 Lakhs)', te: 'ఆదాయ ధృవీకరణ పత్రం', hi: 'आय प्रमाण पत्र' },
        description: { en: 'Issued by competent Revenue Authority (Tahsildar / SDO)', te: 'తహశీల్దార్ లేదా రెవెన్యూ అధికారి జారీ చేసిన పత్రం', hi: 'सक्षम राजस्व अधिकारी द्वारा जारी आय प्रमाण पत्र' },
        isMandatory: true,
        acceptableFormats: 'PDF / JPEG',
        instructions: { en: 'Must be current financial year certificate.', te: 'ప్రస్తుత ఆర్థిక సంవత్సరానికి చెందినదై ఉండాలి.', hi: 'चालू वित्तीय वर्ष का होना अनिवार्य है।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Register on National Scholarship Portal', te: 'NSP పోర్టల్‌లో రిజిస్టర్ అవ్వండి', hi: 'NSP पोर्टल पर पंजीकरण' },
        description: { en: 'Visit scholarships.gov.in and complete Aadhaar-based Student Registration.', te: 'scholarships.gov.in లో విద్యార్థి ఖాతా సృష్టించండి.', hi: 'scholarships.gov.in पर जाकर आधार आधारित पंजीकरण करें।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Select AICTE Pragati Scheme', te: 'AICTE ప్రగతి స్కీమ్‌ను ఎంచుకోండి', hi: 'प्रगति योजना का चयन' },
        description: { en: 'Fill academic scores, counseling roll number, and upload bank account details.', te: 'కౌన్సెలింగ్ వివరాలు మరియు బ్యాంక్ వివరాలు నింపండి.', hi: 'शैक्षणिक विवरण और बैंक खाता विवरण भरें।' }
      }
    ],
    postSubmission: {
      timeline: { en: '3 to 6 weeks verification by College Nodal Officer', te: '3 నుండి 6 వారాలలో కళాశాల మరియు AICTE ధృవీకరణ', hi: '3 से 6 सप्ताह' },
      trackingMethod: { en: 'Check status using NSP Application ID', te: 'NSP పోర్టల్‌లో దరఖాస్తు నంబర్‌తో ట్రాక్ చేయండి', hi: 'NSP पोर्टल पर आवेदन आईडी से स्थिति देखें' },
      grievanceContact: { en: 'AICTE Helpdesk: 011-29581333 / pragati@aicte-india.org', te: 'AICTE హెల్ప్‌డెస్క్: 011-29581333', hi: 'AICTE हेल्पलाइन: 011-29581333' },
      nextSteps: {
        en: ['College nodal officer physical verification', 'AICTE central merit list generation', 'DBT direct bank credit'],
        te: ['కళాశాల నోడల్ అధికారి ధృవీకరణ', 'మెరిట్ జాబితా విడుదల', 'బ్యాంక్ ఖాతాలో DBT జమ'],
        hi: ['कॉलेज स्तर पर भौतिक सत्यापन', 'मेरिट सूची में नाम आना', 'बैंक खाते में DBT हस्तांतरण']
      }
    },
    links: {
      applyUrl: 'https://scholarships.gov.in',
      officialPortalUrl: 'https://www.aicte-india.org/schemes/students-development-schemes/Pragati',
      portalName: 'National Scholarship Portal (AICTE Section)',
      helplineNumber: '011-29581333'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Scholarship', 'Girls Education', 'AICTE', 'Engineering', 'Degree', 'Technical', 'Women']
  },

  // 2. Pradhan Mantri Fasal Bima Yojana (Agriculture / Crop Insurance)
  {
    id: 'pm-fby',
    code: 'AGRI-PMFBY-02',
    name: {
      en: 'Pradhan Mantri Fasal Bima Yojana (PMFBY - Crop Insurance)',
      te: 'ప్రధాన మంత్రి ఫసల్ బీమా యోజన (పంట బీమా పథకం)',
      hi: 'प्रधानमंत्री फसल बीमा योजना (PMFBY - फसल बीमा)'
    },
    shortDescription: {
      en: 'Comprehensive low-premium crop insurance shielding farmers against crop losses from drought, floods, pests, and natural disasters.',
      te: 'కరువు, వరదలు, తెగుళ్ళు మరియు ప్రకృతి వైపరీత్యాల వల్ల కలిగే పంట నష్టాల నుండి రైతులకు పూర్తి పంట బీమా రక్షణ.',
      hi: 'सूखा, बाढ़, ओलावृष्टि और कीट प्रकोप से फसल क्षति की स्थिति में किसानों को व्यापक वित्तीय बीमा सुरक्षा।'
    },
    fullDescription: {
      en: 'Pradhan Mantri Fasal Bima Yojana (PMFBY) provides comprehensive insurance coverage against non-preventable natural risks from pre-sowing to post-harvest stages. Farmers pay a nominal premium rate: only 2% for Kharif crops, 1.5% for Rabi crops, and 5% for annual commercial/horticultural crops, with remaining premium heavily subsidized by Government.',
      te: 'పీఎం ఫసల్ బీమా యోజన ప్రకృతి వైపరీత్యాల వల్ల రైతులు నష్టపోకుండా రక్షిస్తుంది. రైతులు ఖరీఫ్ పంటలకు కేవలం 2%, రబీ పంటలకు 1.5%, వాణిజ్య పంటలకు 5% మాత్రమే నామమాత్రపు ప్రీమియం చెల్లిస్తారు. మిగిలిన మొత్తం సబ్సిడీని కేంద్ర, రాష్ట్ర ప్రభుత్వాలు భరిస్తాయి.',
      hi: 'प्रधानमंत्री फसल बीमा योजना के तहत किसानों को न्यूनतम प्रीमियम (खरीफ 2%, रबी 1.5%, वाणिज्यिक फसलें 5%) पर फसल बुवाई से लेकर कटाई के बाद तक के नुकसान पर पूर्ण क्लेम मिलता है।'
    },
    purpose: {
      en: 'To stabilize farmer income in calamity years and encourage modern agricultural production practices.',
      te: 'ప్రకృతి విపత్తుల సమయాల్లో రైతులకు ఆర్థిక భరోసా కల్పించి వ్యవసాయ ఆదాయాన్ని స్థిరీకరించడం.',
      hi: 'प्राकृतिक आपदाओं के समय किसानों की आय को स्थिर रखना एवं ऋण जोखिम कम करना।'
    },
    department: {
      en: 'Ministry of Agriculture and Farmers Welfare',
      te: 'వ్యవసాయ మరియు రైతు సంక్షేమ మంత్రిత్వ శాఖ',
      hi: 'कृषि एवं किसान कल्याण मंत्रालय'
    },
    category: 'agriculture',
    targetGroups: ['farmers', 'low_income'],
    keywords: ['crop insurance', 'fasal bima', 'pmfby', 'farmer compensation', 'drought compensation', 'flood crop loss', 'kisan bima', 'paddy insurance'],
    synonyms: ['agricultural risk cover', 'farm harvest insurance', 'crop damage claim'],
    location: 'All India / Central & Participating States',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'All farmers growing notified crops in notified areas including sharecroppers and tenant farmers',
          'Both loanee farmers (via KCC/Bank) and non-loanee individual farmers'
        ],
        te: [
          'నోటిఫైడ్ ప్రాంతాలలో పంటలు సాగుచేసే రైతులు, కౌలు రైతులు మరియు భాగస్వాములు',
          'బ్యాంక్ రుణం తీసుకున్న రైతులు మరియు వ్యక్తిగత రైతులు'
        ],
        hi: [
          'अधिसूचित क्षेत्रों में अधिसूचित फसल उगाने वाले सभी किसान एवं बटाईदार/पट्टेदार किसान',
          'ऋणी एवं गैर-ऋणी दोनों प्रकार के किसान'
        ]
      },
      conditions: {
        en: [
          'Must possess valid land record (RoR/Khatauni) or registered tenancy certificate',
          'Insurance enrollment cut-off dates must be met (typically July 31 for Kharif and Dec 31 for Rabi)'
        ],
        te: [
          'పట్టాదారు పాస్‌బుక్ లేదా కౌలు ఒప్పంద పత్రం కలిగి ఉండాలి',
          'గడువు తేదీలలోపు ప్రీమియం చెల్లించాలి'
        ],
        hi: [
          'खसरा-खतौनी या वैध बटाईदार प्रमाण पत्र होना अनिवार्य है',
          'निर्धारित अंतिम तिथि से पूर्व प्रीमियम जमा होना आवश्यक है'
        ]
      },
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'pmfby-land',
        name: { en: 'Land Record / Khatauni / RoR', te: 'పట్టాదారు పాస్‌బుక్ / భూమి రికార్డు', hi: 'भू-अभिलेख / खतौनी' },
        description: { en: 'Latest land title record showing survey number and acreage', te: 'సర్వే నంబరు మరియు విస్తీర్ణం చూపే రికార్డు', hi: 'खसरा/खतौनी नकल जिसमें खसरा संख्या दर्ज हो' },
        isMandatory: true,
        acceptableFormats: 'PDF / JPEG',
        instructions: { en: 'Tenant farmers can submit Patwari/Revenue verified sowing certificate.', te: 'కౌలుదారులు వీఆర్వో ధృవీకరణ పత్రం సమర్పించవచ్చు.', hi: 'बटाईदार पटवारी से सत्यापित बुवाई प्रमाण पत्र दें।' }
      },
      {
        id: 'pmfby-sowing',
        name: { en: 'Crop Sowing Certificate', te: 'పంట సాగు ధృవీకరణ పత్రం', hi: 'फसल बुवाई प्रमाण पत्र' },
        description: { en: 'Self-declaration or certificate from Village Agriculture Officer', te: 'గ్రామ వ్యవసాయ అధికారి ఇచ్చిన పంట సాగు పత్రం', hi: 'कृषि अधिकारी या पटवारी द्वारा सत्यापित प्रमाण' },
        isMandatory: true,
        acceptableFormats: 'PDF',
        instructions: { en: 'Clearly mention the crop variety and sown acreage.', te: 'పంట రకం మరియు విస్తీర్ణం స్పష్టంగా ఉండాలి.', hi: 'फसल का नाम और रकबा स्पष्ट होना चाहिए।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Visit PMFBY Portal or Local CSC', te: 'PMFBY పోర్టల్ లేదా CSC కేంద్రం సందర్శించండి', hi: 'PMFBY पोर्टल या सीएससी केंद्र जाएं' },
        description: { en: 'Navigate to pmfby.gov.in and select Farmer Corner or apply via your local Bank/CSC.', te: 'pmfby.gov.in లో ఫార్మర్ కార్నర్‌కు వెళ్ళండి.', hi: 'pmfby.gov.in पर जाकर किसान अनुभाग चुनें या बैंक शाखा जाएं।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Submit Crop Details & Pay Premium', te: 'పంట వివరాలు నమోదు చేసి నామమాత్రపు ప్రీమియం చెల్లించండి', hi: 'फसल विवरण भरें और 2% प्रीमियम जमा करें' },
        description: { en: 'Enter survey number, crop type, and pay nominal 1.5%-2% premium online or at bank.', te: 'సర్వే నంబరు ఇచ్చి నామమాత్రపు ప్రీమియం చెల్లించండి.', hi: 'खसरा नंबर दर्ज कर ऑनलाइन या बैंक काउंटर पर प्रीमियम जमा करें।' }
      }
    ],
    postSubmission: {
      timeline: { en: 'Policy receipt issued instantly; claim assessment within 3 weeks of loss survey', te: 'రసీదు వెంటనే లభిస్తుంది; నష్టం సర్వే జరిగిన 3 వారాలలో క్లెయిమ్ విడుదల', hi: 'रसीद तत्काल; नुकसान सर्वे के 21 दिनों में भुगतान' },
      trackingMethod: { en: 'Track application on pmfby.gov.in using Application Reference Number', te: 'దరఖాస్తు సంఖ్యతో pmfby.gov.in లో ట్రాక్ చేయండి', hi: 'pmfby.gov.in पर आवेदन संख्या से स्थिति जांचें' },
      grievanceContact: { en: 'PMFBY Toll Free: 1800-180-1551 / Kisan Call Centre: 1800-180-1551', te: 'కిసాన్ కాల్ సెంటర్: 1800-180-1551', hi: 'किसान कॉल सेंटर: 1800-180-1551' },
      nextSteps: {
        en: ['Download Crop Insurance Receipt with policy number', 'In case of localized loss, notify within 72 hours via Crop Insurance App', 'Claim deposited directly into bank via DBT'],
        te: ['ఇన్సూరెన్స్ పాలసీ రసీదు డౌన్‌లోడ్ చేసుకోండి', 'పంట నష్టం జరిగితే 72 గంటలలోపు యాప్ ద్వారా నివేదించండి', 'క్లెయిమ్ మొత్తం నేరుగా బ్యాంక్ ఖాతాలో జమవుతుంది'],
        hi: ['बीमा पॉलिसी रसीद डाउनलोड करें', 'फसल क्षति होने पर 72 घंटे के भीतर ऐप पर सूचना दें', 'दावा राशि सीधे बैंक खाते में पहुंचेगी']
      }
    },
    links: {
      applyUrl: 'https://pmfby.gov.in',
      officialPortalUrl: 'https://pmfby.gov.in',
      portalName: 'Pradhan Mantri Fasal Bima Portal (pmfby.gov.in)',
      helplineNumber: '1800-180-1551'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Crop Insurance', 'PMFBY', 'Agriculture', 'Farmers', 'Kisan', 'Relief', 'Drought']
  },

  // 3. Pradhan Mantri Bhartiya Janaushadhi Pariyojana (Healthcare / Affordable Medicines)
  {
    id: 'pm-jan-aushadhi',
    code: 'HLTH-PMBJP-02',
    name: {
      en: 'Pradhan Mantri Bhartiya Janaushadhi Pariyojana (Affordable Medicines)',
      te: 'ప్రధాన మంత్రి భారతీయ జన్ ఔషధి పరియోజన (చౌక ఔషధాల కేంద్రాలు)',
      hi: 'प्रधानमंत्री भारतीय जनऔषधि परियोजना (सस्ती एवं गुणवत्तापूर्ण दवाएं)'
    },
    shortDescription: {
      en: 'Access high-quality generic medicines, surgical items, and health essentials at 50% to 90% lesser price than branded equivalents.',
      te: 'బ్రాండెడ్ మందులతో సమానమైన నాణ్యత గల జెనరిక్ మందులు మరియు వైద్య సామాగ్రి 50% నుండి 90% తక్కువ ధరకే లభిస్తాయి.',
      hi: 'ब्रांडेड दवाओं की तुलना में 50% से 90% कम कीमत पर उच्च गुणवत्ता वाली जेनेरिक दवाएं और स्वास्थ्य उत्पाद उपलब्ध कराना।'
    },
    fullDescription: {
      en: 'The PM Bhartiya Janaushadhi Pariyojana (PMBJP) is an initiative by the Department of Pharmaceuticals to make quality healthcare affordable to all citizens. Through over 10,000+ Janaushadhi Kendras across India, more than 1,900+ certified generic medicines and 300+ surgical consumables (including diabetes, cardiac, antibiotic, and oncology medications) are provided at a fraction of market cost.',
      te: 'ప్రధాన మంత్రి భారతీయ జన్ ఔషధి పరియోజన (PMBJP) ద్వారా దేశవ్యాప్తంగా 10,000కు పైగా కేంద్రాలలో బీపీ, షుగర్, గుండె జబ్బులు మరియు యాంటీబయాటిక్స్ వంటి 1,900 రకాల నాణ్యమైన జెనరిక్ మందులను మార్కెట్ ధర కంటే 50% నుండి 90% తక్కువ ధరకే అందిస్తున్నారు.',
      hi: 'जनऔषधि परियोजना के माध्यम से देश भर में 10,000+ से अधिक केंद्रों पर 1,900+ जेनेरिक दवाएं (मधुमेह, हृदय रोग, कैंसर, एंटीबायोटिक्स) बाजार मूल्य से 50% से 90% कम कीमत पर उपलब्ध कराई जाती हैं।'
    },
    purpose: {
      en: 'To dramatically reduce out-of-pocket medical expenditures for families requiring ongoing prescription medicines.',
      te: 'నిత్యం మందులు వాడే కుటుంబాల నెలవారీ వైద్య ఖర్చులను గణనీయంగా తగ్గించడం.',
      hi: 'दीर्घकालिक बीमारी से ग्रसित नागरिकों के मासिक दवा खर्च को कम कर राहत पहुंचाना।'
    },
    department: {
      en: 'Department of Pharmaceuticals / Ministry of Chemicals and Fertilizers',
      te: 'ఫార్మాస్యూటికల్స్ విభాగం / రసాయనాలు మరియు ఎరువుల మంత్రిత్వ శాఖ',
      hi: 'औषध विभाग / रसायन एवं उर्वरक मंत्रालय'
    },
    category: 'healthcare',
    targetGroups: ['all', 'senior_citizens', 'low_income'],
    keywords: ['medicine', 'cheap medicines', 'generic drugs', 'janaushadhi', 'pharmacy', 'bp medicine', 'diabetes insulin cheap', 'medical store', 'health'],
    synonyms: ['generic medicine shop', 'discount medical store', 'government pharmacy counter'],
    location: 'All India / Available in Every District',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'Open to ALL Indian citizens without any income restrictions or card requirements',
          'Anyone with a valid doctor prescription can purchase directly from Kendra'
        ],
        te: [
          'ఎటువంటి ఆదాయ పరిమితులు లేదా ప్రత్యేక కార్డులు అవసరం లేకుండా పౌరులందరికీ అందుబాటులో ఉంటుంది',
          'వైద్యుల ప్రిస్క్రిప్షన్ ఉన్న ఎవరైనా కేంద్రాల నుండి కొనుగోలు చేయవచ్చు'
        ],
        hi: [
          'सभी भारतीय नागरिकों के लिए खुली है; किसी आय प्रमाण पत्र की आवश्यकता नहीं',
          'डॉक्टर के वैध पर्चे के साथ कोई भी नागरिक दवाएं ले सकता है'
        ]
      },
      conditions: {
        en: [
          'Requires valid prescription for schedule H and X medicines',
          'No advance registration needed'
        ],
        te: [
          'షెడ్యూల్ ఔషధాల కొనుగోలుకు డాక్టర్ ప్రిస్క్రిప్షన్ తప్పనిసరి',
          'ముందస్తు రిజిస్ట్రేషన్ అవసరం లేదు'
        ],
        hi: [
          'दवाओं के लिए डॉक्टर का पर्चा आवश्यक है',
          'किसी पूर्व पंजीकरण की आवश्यकता नहीं'
        ]
      },
      citizenshipRequired: false
    },
    documents: [
      {
        id: 'jan-rx',
        name: { en: 'Doctor Prescription (Rx)', te: 'డాక్టర్ ప్రిస్క్రిప్షన్', hi: 'डॉक्टर का पर्चा' },
        description: { en: 'Valid prescription from any registered medical practitioner (MBBS/MD/AYUSH)', te: 'రిజిస్టర్డ్ వైద్యుడు రాసిన ప్రిస్క్రిప్షన్', hi: 'पंजीकृत डॉक्टर द्वारा लिखी गई दवा की पर्ची' },
        isMandatory: true,
        acceptableFormats: 'Physical Paper or Digital e-Prescription',
        instructions: { en: 'Check for generic salt name or ask pharmacist for equivalent salt.', te: 'మందులలోని సాల్ట్ పేరు ఆధారంగా జన్ ఔషధి మందులు లభిస్తాయి.', hi: 'दवा के साल्ट नाम के आधार पर जेनेरिक विकल्प प्राप्त करें।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Locate Nearest Kendra via Janaushadhi Sugam App / Web', te: 'సమీప కేంద్రాన్ని యాప్ లేదా వెబ్‌సైట్ ద్వారా కనుగొనండి', hi: 'नजदीकी केंद्र खोजें' },
        description: { en: 'Open janaushadhi.gov.in or Janaushadhi Sugam App to search nearest store and medicine availability.', te: 'janaushadhi.gov.in లో సమీప కేంద్రాన్ని వెతకండి.', hi: 'janaushadhi.gov.in या ऐप पर नजदीकी दुकान और दवा की उपलब्धता देखें।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Visit Counter & Collect Medicines with Bill', te: 'కేంద్రానికి వెళ్లి మందులు కొనుగోలు చేయండి', hi: 'दुकान पर जाएं और दवाएं लें' },
        description: { en: 'Show prescription, pharmacist will match exact generic salt and dispense at 50%-90% discount with computerized bill.', te: 'ప్రిస్క్రిప్షన్ చూపించి రసీదుతో మందులు పొందండి.', hi: 'पर्चा दिखाकर उचित जेनेरिक दवाएं 50-90% छूट पर प्राप्त करें।' }
      }
    ],
    postSubmission: {
      timeline: { en: 'Immediate OTC purchase across counter', te: 'తక్షణ కొనుగోలు కౌంటర్ వద్ద లభిస్తుంది', hi: 'काउंटर पर तुरंत दवा उपलब्ध' },
      trackingMethod: { en: 'Check medicine price comparisons on Janaushadhi Sugam Mobile App', te: 'సుగమ్ మొబైల్ యాప్‌లో మందుల ధరల పోలిక చూడవచ్చు', hi: 'जनऔषधि सुगम ऐप पर कीमतों की तुलना करें' },
      grievanceContact: { en: 'PMBJP National Toll Free: 1800-180-8080', te: 'టోల్ ఫ్రీ: 1800-180-8080', hi: 'टोल फ्री: 1800-180-8080' },
      nextSteps: {
        en: ['Request generic substitute from your doctor for regular monthly treatments', 'Download Janaushadhi Sugam App for regular medicine refill reminders'],
        te: ['నెలవారీ మందుల కోసం మీ వైద్యుడిని జెనరిక్ పేర్లు రాయమని కోరండి', 'సుగమ్ యాప్ డౌన్‌లోడ్ చేసుకోండి'],
        hi: ['डॉक्टर से जेनेरिक नाम लिखने का अनुरोध करें', 'सुगम ऐप डाउनलोड कर नियमित दवा मंगवाएं']
      }
    },
    links: {
      applyUrl: 'https://janaushadhi.gov.in',
      officialPortalUrl: 'https://janaushadhi.gov.in',
      portalName: 'PM Bhartiya Janaushadhi Portal (janaushadhi.gov.in)',
      helplineNumber: '1800-180-8080'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Healthcare', 'Medicine', 'Generic Drugs', 'Janaushadhi', 'Affordable Health', 'Surgicals']
  },

  // 4. Pradhan Mantri Kaushal Vikas Yojana (PMKVY - Skill Development / Employment)
  {
    id: 'pmkvy-skill',
    code: 'EMP-PMKVY-02',
    name: {
      en: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0 - Free Skill Training)',
      te: 'ప్రధాన మంత్రి కౌశల్ వికాస్ యోజన (ఉచిత నైపుణ్య శిక్షణ)',
      hi: 'प्रधानमंत्री कौशल विकास योजना (PMKVY 4.0 - निःशुल्क कौशल प्रशिक्षण)'
    },
    shortDescription: {
      en: 'Free industry-aligned skill certification courses, monetary reward upon certification, and job placement assistance for unemployed youth.',
      te: 'నిరుద్యోగ యువతకు ఉచిత నైపుణ్య శిక్షణ, ప్రభుత్వ ధృవీకరణ పత్రం, మరియు ఉద్యోగ అవకాశాలు.',
      hi: 'बेरोजगार युवाओं हेतु निःशुल्क कौशल विकास प्रशिक्षण, सरकारी प्रमाण पत्र और रोजगार सहायता।'
    },
    fullDescription: {
      en: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY) is the flagship initiative of the Ministry of Skill Development and Entrepreneurship (MSDE). It enables youth to take up industry-relevant skill training in high-growth sectors including AI/IT, Electronics, Healthcare, Automotive, Logistics, and Renewable Energy. Training and assessment fees are 100% sponsored by the Government.',
      te: 'పీఎం కౌశల్ వికాస్ యోజన (PMKVY) యువతకు ఐటీ, ఎలక్ట్రానిక్స్, ఆటోమొబైల్, ఆరోగ్య సంరక్షణ మరియు సౌర శక్తి వంటి ఆధునిక రంగాలలో ఉచిత వృత్తి శిక్షణను అందిస్తుంది. శిక్షణ మరియు పరీక్షా ఫీజులను ప్రభుత్వమే పూర్తిగా భరిస్తుంది.',
      hi: 'कौशल विकास मंत्रालय की इस प्रमुख योजना के तहत युवाओं को इलेक्ट्रॉनिक्स, आईटी, स्वास्थ्य, ऑटोमोबाइल और सौर ऊर्जा जैसे क्षेत्रों में मुफ्त प्रशिक्षण और राष्ट्रीय प्रमाण पत्र दिया जाता है।'
    },
    purpose: {
      en: 'To provide marketable vocational skills to school/college dropouts and unemployed youth, boosting their employability and livelihood.',
      te: 'నిరుద్యోగ యువతకు ఉద్యోగ నైపుణ్యాలను నేర్పించి స్వయం ఉపాధి లేదా ప్రైవేట్ ఉద్యోగావకాశాలు కల్పించడం.',
      hi: 'युवाओं को उद्योग-अनुकूल कौशल प्रदान कर रोजगार और स्वरोजगार के अवसरों से जोड़ना।'
    },
    department: {
      en: 'Ministry of Skill Development and Entrepreneurship (MSDE) / NSDC',
      te: 'నైపుణ్యాభివృద్ధి మరియు వ్యవస్థాపకత మంత్రిత్వ శాఖ / NSDC',
      hi: 'कौशल विकास एवं उद्यमशीलता मंत्रालय / NSDC'
    },
    category: 'employment',
    targetGroups: ['youth', 'students', 'low_income'],
    keywords: ['skill training', 'pmkvy', 'job courses', 'free certification', 'vocational training', 'nsdc course', 'employment youth', 'iti alternative'],
    synonyms: ['job training programme', 'free vocational course', 'career skill development'],
    location: 'All India / Skill Development Centres',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'Indian national aged between 15 and 45 years',
          'School or college dropouts, or unemployed candidates looking for career upskilling'
        ],
        te: [
          '15 నుండి 45 సంవత్సరాల మధ్య వయస్సు గల భారతీయ పౌరులు',
          'చదువు మధ్యలో ఆపేసిన వారు లేదా ఉద్యోగావకాశాల కోసం నైపుణ్యం కోరుకునే నిరుద్యోగులు'
        ],
        hi: [
          '15 से 45 वर्ष की आयु के भारतीय नागरिक',
          'स्कूल/कॉलेज छोड़ चुके या बेरोजगार युवा जो कौशल उन्नयन चाहते हैं'
        ]
      },
      conditions: {
        en: [
          'Valid Aadhaar card and active mobile number',
          'Minimum 70% attendance required during training to sit for National Skill Assessment'
        ],
        te: [
          'ఆధార్ కార్డు మరియు మొబైల్ నంబర్ తప్పనిసరి',
          'శిక్షణలో కనీసం 70% హాజరు ఉండాలి'
        ],
        hi: [
          'आधार कार्ड और सक्रिय मोबाइल नंबर अनिवार्य',
          'प्रशिक्षण में 70% न्यूनतम उपस्थिति अनिवार्य'
        ]
      },
      ageRange: { min: 15, max: 45 },
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'pmkvy-aadhaar',
        name: { en: 'Aadhaar Card', te: 'ఆధార్ కార్డు', hi: 'आधार कार्ड' },
        description: { en: 'Valid government identity proof with updated photo and mobile link', te: 'మొబైల్ లింక్ అయిన ఆధార్ కార్డు', hi: 'मोबाइल से लिंक आधार कार्ड' },
        isMandatory: true,
        acceptableFormats: 'Original verification + Xerox',
        instructions: { en: 'Used for biometric attendance at training centre.', te: 'బయోమెట్రిక్ హాజరు కోసం ఉపయోగించబడుతుంది.', hi: 'केंद्र पर बायोमेट्रिक उपस्थिति हेतु आवश्यक।' }
      },
      {
        id: 'pmkvy-edu',
        name: { en: 'Highest Educational Certificate', te: 'విద్యార్హత ధృవీకరణ పత్రం (10వ/ఇంటర్/డిగ్రీ)', hi: 'शैक्षणिक योग्यता प्रमाण पत्र (10वीं/12वीं)' },
        description: { en: 'Marksheet or transfer certificate of highest completed grade', te: 'చివరి చదువుకు సంబంధించిన మార్కుల జాబితా', hi: 'अंतिम उत्तीर्ण कक्षा की अंकतालिका' },
        isMandatory: true,
        acceptableFormats: 'PDF / Physical copy',
        instructions: { en: 'Candidates with 8th/10th pass are eligible for multiple trades.', te: '8వ లేదా 10వ తరగతి ఉత్తీర్ణులైన వారు కూడా అర్హులు.', hi: '8वीं या 10वीं पास के लिए भी कई कोर्स उपलब्ध हैं।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Find Skill Center & Register on Skill India Digital', te: 'స్కిల్ ఇండియా డిజిటల్ పోర్టల్‌లో రిజిస్టర్ అవ్వండి', hi: 'स्किल इंडिया पोर्टल पर पंजीकरण' },
        description: { en: 'Visit skillindiadigital.gov.in or nearest Pradhan Mantri Kaushal Kendra (PMKK).', te: 'skillindiadigital.gov.in లో సమీప కేంద్రాన్ని ఎంచుకోండి.', hi: 'skillindiadigital.gov.in पर जाकर नजदीकी केंद्र चुनें।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Enroll in Free Course & Complete Training', te: 'ఉచిత కోర్సులో చేరి సర్టిఫికేషన్ పొందండి', hi: 'निःशुल्क कोर्स पूरा कर परीक्षा दें' },
        description: { en: 'Attend practical lab training, pass government assessment, and receive NSDC certificate with placement assistance.', te: 'శిక్షణ పూర్తి చేసి పరీక్ష రాసి సర్టిఫికెట్ పొందండి.', hi: 'प्रशिक्षण पूरा कर परीक्षा पास करें और राष्ट्रीय प्रमाण पत्र पाएं।' }
      }
    ],
    postSubmission: {
      timeline: { en: 'Courses range from 1 to 6 months depending on job role', te: 'కోర్సు వ్యవధి 1 నుండి 6 నెలలు', hi: 'कोर्स की अवधि 1 से 6 माह' },
      trackingMethod: { en: 'Candidate dashboard on skillindiadigital.gov.in', te: 'స్కిల్ ఇండియా పోర్టల్ డాష్‌బోర్డ్ ద్వారా ట్రాక్ చేయవచ్చు', hi: 'पोर्टल पर अपने डैशबोर्ड से प्रगति देखें' },
      grievanceContact: { en: 'PMKVY Helpline: 088000-55555 / support@nsdcindia.org', te: 'హెల్ప్‌లైన్: 088000-55555', hi: 'हेल्पलाइन: 088000-55555' },
      nextSteps: {
        en: ['Appear for certified Sector Skill Council assessment', 'Receive Government of India Skill Certificate', 'Attend Rozgar Mela (Job Fairs) organised at center'],
        te: ['పరీక్షకు హాజరై భారత ప్రభుత్వ సర్టిఫికెట్ పొందండి', 'ఉద్యోగ మేళాలకు హాజరవ్వండి'],
        hi: ['कौशल प्रमाण पत्र प्राप्त करें', 'केंद्र पर आयोजित रोजगार मेलों में भाग लें']
      }
    },
    links: {
      applyUrl: 'https://www.skillindiadigital.gov.in',
      officialPortalUrl: 'https://www.pmkvyofficial.org',
      portalName: 'Skill India Digital / PMKVY Portal',
      helplineNumber: '088000-55555'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Skill Training', 'Employment', 'PMKVY', 'Youth', 'Jobs', 'Vocational', 'Certification']
  },

  // 5. PM SVANidhi (Street Vendors Microcredit / Financial Assistance)
  {
    id: 'pm-svanidhi',
    code: 'FIN-SVANIDHI-01',
    name: {
      en: "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi)",
      te: 'పీఎం వీధి వ్యాపారుల ఆత్మనిర్భర్ నిధి (పీఎం స్వనిధి)',
      hi: 'पीएम स्ट्रीट वेंडर्स आत्मनिर्भर निधि (पीएम स्वनिधि)'
    },
    shortDescription: {
      en: 'Collateral-free working capital loan up to ₹50,000 with 7% interest subsidy and cashback incentives for street vendors.',
      te: 'వీధి వ్యాపారులకు ఎటువంటి పూచీకత్తు లేకుండా ₹50,000 వరకు తక్కువ వడ్డీతో బ్యాంక్ రుణం మరియు క్యాష్‌బ్యాక్.',
      hi: 'रेहड़ी-पटरी एवं ठेला विक्रेताओं को बिना किसी गारंटी के ₹50,000 तक का कार्यशील पूंजी ऋण एवं 7% ब्याज सब्सिडी।'
    },
    fullDescription: {
      en: "PM SVANidhi is a special micro-credit facility launched by the Ministry of Housing and Urban Affairs to help urban and peri-urban street vendors restart their livelihood. Vendors can avail an initial working capital loan of ₹10,000, progressing to ₹20,000 (2nd tranche) and ₹50,000 (3rd tranche) upon timely repayment, along with 7% annual interest subsidy deposited via DBT.",
      te: 'పీఎం స్వనిధి పథకం ద్వారా వీధి వ్యాపారులు మొదట ₹10,000 రుణం పొందవచ్చు. సకాలంలో చెల్లిస్తే ₹20,000 మరియు ₹50,000 వరకు తదుపరి రుణాలు లభిస్తాయి. సకాలంలో చెల్లించే వారికి 7% వడ్డీ సబ్సిడీ నేరుగా బ్యాంక్ ఖాతాలో జమ అవుతుంది.',
      hi: 'पीएम स्वनिधि योजना रेहड़ी-पटरी विक्रेताओं को ₹10,000 से लेकर ₹50,000 तक का सस्ता बैंक ऋण प्रदान करती है। समय पर भुगतान करने पर 7% ब्याज सब्सिडी सीधे खाते में भेजी जाती है।'
    },
    purpose: {
      en: 'To provide working capital credit to micro vendors and emancipate them from high-interest informal moneylenders.',
      te: 'చిరు వ్యాపారులకు ప్రైవేట్ వడ్డీ వ్యాపారుల భారం నుండి విముక్తి కల్పించి బ్యాంక్ రుణాలు అందించడం.',
      hi: 'छोटे फेरीवालों को सस्ते संस्थागत ऋण से जोड़कर आर्थिक रूप से सशक्त बनाना।'
    },
    department: {
      en: 'Ministry of Housing and Urban Affairs (MoHUA)',
      te: 'గృహనిర్మాణ మరియు పట్టణ వ్యవహారాల మంత్రిత్వ శాఖ',
      hi: 'आवासन और शहरी कार्य मंत्रालय'
    },
    category: 'financial_assistance',
    targetGroups: ['entrepreneurs', 'low_income', 'workers'],
    keywords: ['vendor loan', 'street vendor', 'svanidhi', 'thela loan', 'vegetable vendor loan', 'working capital', 'micro loan 10000', 'pushcart loan'],
    synonyms: ['hawker microloan', 'small vendor assistance', 'urban street vendor credit'],
    location: 'Urban & Peri-Urban Areas Across India',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'Street vendors engaged in vending in urban areas (vegetables, fruits, street food, tea stalls, apparel, artisan crafts)',
          'Vendors holding Certificate of Vending (CoV) / Identity Card issued by Urban Local Bodies (ULBs) or Recommendation Letter (LoR)'
        ],
        te: [
          'పట్టణ ప్రాంతాల్లో కూరగాయలు, పండ్లు, ఆహార పదార్థాలు, టీ దుకాణాలు నడిపే వీధి వ్యాపారులు',
          'మున్సిపాలిటీ జారీ చేసిన వెండింగ్ సర్టిఫికెట్ లేదా ఐడీ కార్డు లేదా సిఫార్సు లేఖ కలిగిన వారు'
        ],
        hi: [
          'शहरी क्षेत्रों में फल, सब्जी, चाय, खान-पान या फुटपाथ पर दुकान लगाने वाले विक्रेता',
          'नगर निगम द्वारा जारी वेंडिंग प्रमाण पत्र (CoV) या सिफारिश पत्र धारक'
        ]
      },
      conditions: {
        en: [
          'Must possess Aadhaar-linked active savings bank account',
          'No previous default with participating lending institutions'
        ],
        te: [
          'ఆధార్ లింక్ అయిన బ్యాంక్ ఖాతా ఉండాలి',
          'మునుపటి బ్యాంక్ డిఫాల్ట్‌లు ఉండకూడదు'
        ],
        hi: [
          'आधार से जुड़ा बैंक खाता होना आवश्यक है',
          'बैंक में कोई डिफ़ॉल्ट नहीं होना चाहिए'
        ]
      },
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'sva-cov',
        name: { en: 'Certificate of Vending (CoV) / LoR', te: 'మున్సిపల్ వెండింగ్ గుర్తింపు కార్డు లేదా సిఫార్సు లేఖ', hi: 'वेंडिंग प्रमाण पत्र या नगर पालिका सिफारिश पत्र' },
        description: { en: 'Document issued by Municipality confirming active vending location', te: 'మున్సిపాలిటీ జారీ చేసిన వీధి వ్యాపారి గుర్తింపు పత్రం', hi: 'नगर पालिका/नगर निगम द्वारा जारी वेंडिंग आईडी' },
        isMandatory: true,
        acceptableFormats: 'PDF / JPEG',
        instructions: { en: 'If CoV is missing, obtain Letter of Recommendation (LoR) from Town Vending Committee.', te: 'కార్డు లేకపోతే టౌన్ వెండింగ్ కమిటీ నుండి లేఖ పొందవచ్చు.', hi: 'आईडी न होने पर नगर पालिका से LoR प्राप्त करें।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Apply on PM SVANidhi Portal or via Bank Mitra', te: 'పీఎం స్వనిధి పోర్టల్ ద్వారా దరఖాస్తు చేయండి', hi: 'पोर्टल पर आवेदन करें' },
        description: { en: 'Visit pmsvanidhi.mohua.gov.in, verify mobile with OTP, and enter CoV / LoR application number.', te: 'pmsvanidhi.mohua.gov.in లో మొబైల్ నంబరుతో లాగిన్ అవ్వండి.', hi: 'pmsvanidhi.mohua.gov.in पर मोबाइल ओटीपी से लॉगिन करें।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Select Lending Bank & Disbursement', te: 'రుణం ఇచ్చే బ్యాంకును ఎంచుకోండి', hi: 'बैंक का चयन और ऋण प्राप्ति' },
        description: { en: 'Select preferred bank/NBFC. Loan is disbursed directly to your account within 7 days.', te: 'మీ బ్యాంకును ఎంచుకుంటే 7 రోజుల్లో నిధులు జమ అవుతాయి.', hi: 'पसंदीदा बैंक चुनें, 7 दिनों में ऋण खाते में ट्रांसफर होगा।' }
      }
    ],
    postSubmission: {
      timeline: { en: 'Loan sanctioned and disbursed within 7 to 10 working days', te: '7 నుండి 10 పనిదినాలలో రుణం మంజూరు', hi: '7 से 10 कार्य दिवसों में ऋण वितरण' },
      trackingMethod: { en: 'Track status on pmsvanidhi.mohua.gov.in using application number', te: 'దరఖాస్తు సంఖ్యతో పోర్టల్‌లో ట్రాక్ చేయండి', hi: 'पोर्टल पर आवेदन नंबर से स्थिति जांचें' },
      grievanceContact: { en: 'PM SVANidhi Toll Free: 1800-11-1979 / svanidhi-mohua@gov.in', te: 'టోల్ ఫ్రీ: 1800-11-1979', hi: 'टोल फ्री: 1800-11-1979' },
      nextSteps: {
        en: ['Repay monthly installment via UPI to receive digital cashback up to ₹100/month', 'Qualify for enhanced loan of ₹20,000 after 12 timely EMI repayments'],
        te: ['నెలవారీ వాయిదాలు సమయానికి చెల్లించి తదుపరి పెద్ద రుణానికి అర్హత పొందండి', 'డిజిటల్ క్యాష్‌బ్యాక్ పొందండి'],
        hi: ['समय पर किस्त चुकाने पर ₹20,000 के अगले बड़े ऋण के लिए पात्र बनें', 'मासिक कैशबैक प्राप्त करें']
      }
    },
    links: {
      applyUrl: 'https://pmsvanidhi.mohua.gov.in',
      officialPortalUrl: 'https://pmsvanidhi.mohua.gov.in',
      portalName: "PM SVANidhi Official Portal (MoHUA)",
      helplineNumber: '1800-11-1979'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Microcredit', 'Loan', 'Street Vendors', 'PM SVANidhi', 'Working Capital', 'Business Aid']
  },

  // 6. Pradhan Mantri Matru Vandana Yojana (PMMVY - Women & Child Welfare)
  {
    id: 'pm-matru-vandana',
    code: 'WCH-PMMVY-02',
    name: {
      en: 'Pradhan Mantri Matru Vandana Yojana (PMMVY Maternity Benefit)',
      te: 'ప్రధాన మంత్రి మాతృ వందన యోజన (గర్భిణీలకు ఆర్థిక సహాయం)',
      hi: 'प्रधानमंत्री मातृ वंदना योजना (PMMVY मातृत्व लाभ)'
    },
    shortDescription: {
      en: 'Direct cash transfer of ₹5,000 for 1st child and ₹6,000 for 2nd girl child to pregnant women and lactating mothers.',
      te: 'గర్భిణులు మరియు బాలింతల పోషకాహారం కోసం ₹5,000 నుండి ₹6,000 వరకు నేరుగా బ్యాంక్ ఖాతాలో జమ అయ్యే నగదు ప్రోత్సాహకం.',
      hi: 'गर्भवती महिलाओं और स्तनपान कराने वाली माताओं को पोषण एवं स्वास्थ्य हेतु ₹5,000 से ₹6,000 की नकद सहायता।'
    },
    fullDescription: {
      en: 'Pradhan Mantri Matru Vandana Yojana (PMMVY) is a flagship conditional cash transfer scheme implemented by the Ministry of Women and Child Development. It provides wage-loss compensation and nutritional support in installments directly credited to women’s Aadhaar-seeded bank accounts following early registration of pregnancy, antenatal check-ups, and child immunization.',
      te: 'పీఎం మాతృ వందన యోజన గర్భిణీ స్త్రీలకు ఆర్థిక సహాయాన్ని అందిస్తుంది. గర్భధారణ సమయంలో సరైన పోషకాహారం, ఆసుపత్రి కాన్పులు మరియు పిల్లల టీకాల కోసం విడతల వారీగా ₹5,000 (రెండవ కాన్పులో ఆడపిల్ల పుడితే ₹6,000) నిధులు లభిస్తాయి.',
      hi: 'प्रधानमंत्री मातृ वंदना योजना के तहत गर्भवती और धात्री माताओं को पहले बच्चे पर ₹5,000 तथा दूसरी संतान बालिका होने पर ₹6,000 की राशि सीधे बैंक खाते में दी जाती है।'
    },
    purpose: {
      en: 'To provide cash incentives for pregnant mothers to improve maternal and child health outcomes and meet nutritional needs.',
      te: 'తల్లి మరియు బిడ్డ ఆరోగ్యాన్ని కాపాడటానికి, పౌష్టికాహార లోపాన్ని నివారించడానికి ఆర్థిక సహాయం అందించడం.',
      hi: 'गर्भवती महिलाओं को पोषण सुधारने और प्रसव पूर्व देखभाल को बढ़ावा देने हेतु वित्तीय सहायता।'
    },
    department: {
      en: 'Ministry of Women and Child Development (MWCD)',
      te: 'మహిళా మరియు శిశు అభివృద్ధి మంత్రిత్వ శాఖ',
      hi: 'महिला एवं बाल विकास मंत्रालय'
    },
    category: 'women_child',
    targetGroups: ['women', 'low_income'],
    keywords: ['maternity benefit', 'pregnant women money', 'pmmvy', 'pregnancy assistance', 'delivery aid', 'matru vandana', 'lactating mother', 'mother 5000'],
    synonyms: ['maternity cash incentive', 'mother pregnancy allowance', 'childbirth financial grant'],
    location: 'All India / Central Scheme',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'Pregnant women and lactating mothers who conceive on or after scheme guidelines',
          'Women belonging to SC/ST, EWS, BPL, E-Shram cardholders, or income below ₹8 Lakhs'
        ],
        te: [
          'గర్భం దాల్చిన మహిళలు మరియు బాలింతలు',
          'SC, ST, BPL, లేదా ఈ-శ్రమ్ కార్డు కలిగిన మహిళలు'
        ],
        hi: [
          'गर्भवती महिलाएं एवं स्तनपान कराने वाली माताएं',
          'एससी/एसटी, ईडब्ल्यूएस, बीपीएल या ई-श्रम कार्ड धारक महिलाएं'
        ]
      },
      conditions: {
        en: [
          'Must not be in regular employment with Central/State Government or PSUs',
          'Early pregnancy registration at Anganwadi Centre or Government Health Facility'
        ],
        te: [
          'ప్రభుత్వ ఉద్యోగులు అయి ఉండకూడదు',
          'అంగన్‌వాడీ కేంద్రంలో లేదా ప్రభుత్వ ఆసుపత్రిలో నమోదు చేయించుకోవాలి'
        ],
        hi: [
          'सरकारी या सार्वजनिक उपक्रमों में सेवारत महिलाएं पात्र नहीं हैं',
          'आंगनवाड़ी केंद्र या सरकारी अस्पताल में प्रारंभिक पंजीकरण आवश्यक'
        ]
      },
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'pmmvy-mcp',
        name: { en: 'Mother and Child Protection (MCP) Card', te: 'తల్లి-పిల్లల సంరక్షణ కార్డు (MCP కార్డు)', hi: 'मातृ एवं शिशु सुरक्षा (MCP) कार्ड' },
        description: { en: 'Issued by Anganwadi / PHC showing LMP date and ANC check-ups', te: 'ప్రాథమిక ఆరోగ్య కేంద్రం జారీ చేసిన కార్డు', hi: 'सरकारी अस्पताल/आंगनवाड़ी द्वारा जारी कार्ड' },
        isMandatory: true,
        acceptableFormats: 'PDF / Photocopy',
        instructions: { en: 'Ensure immunization and ANC dates are stamped.', te: 'వైద్య పరీక్షల వివరాలు స్పష్టంగా ఉండాలి.', hi: 'जांच एवं टीकाकरण तिथियां दर्ज होनी चाहिए।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Register Online on PMMVY Portal or at Anganwadi', te: 'పోర్టల్ లేదా అంగన్‌వాడీ కేంద్రంలో దరఖాస్తు చేయండి', hi: 'PMMVY पोर्टल पर पंजीकरण' },
        description: { en: 'Visit pmmvy.wcd.gov.in or contact your local Anganwadi worker / ASHA.', te: 'pmmvy.wcd.gov.in లో దరఖాస్తు చేసుకోవచ్చు.', hi: 'pmmvy.wcd.gov.in पर ऑनलाइन या आंगनवाड़ी कार्यकर्ता के माध्यम से आवेदन करें।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Direct Cash Transfer Disbursement', te: 'నగదు నేరుగా బ్యాంక్ ఖాతాలో జమ', hi: 'सीधे बैंक खाते में DBT' },
        description: { en: 'Funds are transferred via DBT in installments upon completing ANC checkups and child vaccination.', te: 'టీకాలు పూర్తయిన తర్వాత విడతల వారీగా నిధులు జమ అవుతాయి.', hi: 'टीकाकरण और जांच पूरी होने पर किस्तें बैंक खाते में आएंगी।' }
      }
    ],
    postSubmission: {
      timeline: { en: 'Installments credited within 30 days of stage verification', te: 'ధృవీకరణ పూర్తయిన 30 రోజులలో జమ', hi: 'सत्यापन के 30 दिनों के भीतर किस्त भुगतान' },
      trackingMethod: { en: 'Check beneficiary status on pmmvy.wcd.gov.in using Aadhaar number', te: 'ఆధార్ నంబరుతో pmmvy.wcd.gov.in లో చూడండి', hi: 'pmmvy.wcd.gov.in पर आधार संख्या से स्थिति जांचें' },
      grievanceContact: { en: 'PMMVY Helpdesk: 011-23382393 / pmmvy-cas-mwcd@gov.in', te: 'హెల్ప్‌లైన్: 011-23382393', hi: 'हेल्पलाइन: 011-23382393' },
      nextSteps: {
        en: ['Undergo institutional delivery in government or accredited hospital', 'Complete 1st cycle of immunization for baby', 'Receive full financial grant directly into bank'],
        te: ['ప్రభుత్వ ఆసుపత్రిలో కాన్పు చేయించుకోండి', 'పిల్లలకు టీకాలు వేయించండి'],
        hi: ['संस्थागत प्रसव कराएं', 'शिशु का प्रथम टीकाकरण चक्र पूर्ण करें']
      }
    },
    links: {
      applyUrl: 'https://pmmvy.wcd.gov.in',
      officialPortalUrl: 'https://pmmvy.wcd.gov.in',
      portalName: 'PMMVY Citizen Portal (Ministry of WCD)',
      helplineNumber: '011-23382393'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Maternity', 'Women', 'Child Welfare', 'PMMVY', 'Health', 'Nutrition', 'Pregnancy']
  },

  // 7. Unique Disability ID (UDID - Disability Services)
  {
    id: 'udid-disability',
    code: 'DIS-UDID-01',
    name: {
      en: 'Unique Disability ID (UDID - Swavlamban Card for Divyangjan)',
      te: 'యూనిక్ డిసేబిలిటీ ఐడీ (UDID స్వావలంబన్ కార్డు - దివ్యాంగుల సేవలు)',
      hi: 'विशिष्ट दिव्यांगता पहचान पत्र (UDID - स्वावलंबन कार्ड)'
    },
    shortDescription: {
      en: 'Pan-India verified single disability card ensuring seamless access to pensions, aids/appliances, scholarships, and travel concessions.',
      te: 'దివ్యాంగులకు దేశవ్యాప్తంగా గుర్తింపు కలిగిన ఒకే కార్డు - పెన్షన్లు, బస్సు/రైలు రాయితీలు మరియు ప్రభుత్వ సహాయక పరికరాలు లభిస్తాయి.',
      hi: 'दिव्यांगजनों हेतु एकल राष्ट्रीय पहचान पत्र जिसके माध्यम से पेंशन, कृत्रिम अंग/उपकरण और यात्रा छूट मिलती है।'
    },
    fullDescription: {
      en: 'The UDID Project initiated by the Department of Empowerment of Persons with Disabilities creates a national database for PwDs and issues a Smart Swavlamban Card. The UDID card captures disability percentage, eliminates the need to carry multiple physical medical certificates, and unlocks targeted central and state welfare benefits, reservations, and assistive devices (ADIP scheme).',
      te: 'దివ్యాంగుల సాధికారత విభాగం జారీ చేసే UDID స్మార్ట్ కార్డు ద్వారా దేశవ్యాప్తంగా ప్రభుత్వ సదుపాయాలు లభిస్తాయి. ప్రతిసారీ మెడికల్ సర్టిఫికెట్లను మోయాల్సిన అవసరం లేకుండా రైల్వే పాసులు, ఉపకరణాలు మరియు పెన్షన్ల కోసం ఈ ఒక్క కార్డు సరిపోతుంది.',
      hi: 'स्वावलंबन कार्ड (UDID) दिव्यांगजनों को देशव्यापी एकल पहचान देता है। इसके माध्यम से रेलवे रियायत, मासिक पेंशन, छात्रवृत्ति और कृत्रिम अंग/सहायक उपकरण बिना किसी परेशानी के प्राप्त होते हैं।'
    },
    purpose: {
      en: 'To provide a transparent, tamper-proof national identification card for persons with disabilities, simplifying welfare delivery.',
      te: 'దివ్యాంగులకు ఎటువంటి ఇబ్బందులు లేకుండా ప్రభుత్వ సంక్షేమ పథకాలు, రాయితీలు మరియు సహాయాలు అందించడం.',
      hi: 'दिव्यांगजनों के लिए सरकारी लाभों, पेंशन और उपकरणों की प्राप्ति को पारदर्शी एवं सुगम बनाना।'
    },
    department: {
      en: 'Department of Empowerment of Persons with Disabilities (DEPwD) / Ministry of Social Justice',
      te: 'దివ్యాంగుల సాధికారత విభాగం / సామాజిక న్యాయ మంత్రిత్వ శాఖ',
      hi: 'दिव्यांगजन सशक्तिकरण विभाग / सामाजिक न्याय और अधिकारिता मंत्रालय'
    },
    category: 'disability',
    targetGroups: ['disabled', 'all'],
    keywords: ['disability card', 'udid', 'swavlamban card', 'divyangjan', 'handicapped certificate', 'wheelchair aid', 'disability pension', 'railway concession disability'],
    synonyms: ['pwds identity card', 'disability pension card', 'divyang welfare identification'],
    location: 'All India / National Recognition',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'Any Indian citizen with 40% or more benchmark disability specified under the Rights of Persons with Disabilities (RPwD) Act 2016',
          'Persons with locomotive, visual, hearing, intellectual, neurological, or multiple disabilities'
        ],
        te: [
          '40% లేదా అంతకంటే ఎక్కువ వైకల్యం కలిగిన ప్రతి భారతీయ పౌరుడు',
          'శారీరక, దృష్టి, వినికిడి లేదా ఇతర వైకల్యాలు ఉన్న వ్యక్తులు'
        ],
        hi: [
          '40% या उससे अधिक बेंचमार्क दिव्यांगता वाले सभी भारतीय नागरिक',
          'शारीरिक, दृष्टिबाधित, श्रवणबाधित या अन्य दिव्यांगता धारक'
        ]
      },
      conditions: {
        en: [
          'Medical assessment by authorized District Medical Board / Civil Surgeon',
          'Aadhaar card or voter ID for identity verification'
        ],
        te: [
          'జిల్లా మెడికల్ బోర్డు ద్వారా ధృవీకరించబడాలి',
          'ఆధార్ కార్డు తప్పనిసరి'
        ],
        hi: [
          'जिला मेडिकल बोर्ड/सिविल सर्जन द्वारा मूल्यांकन आवश्यक',
          'पहचान हेतु आधार कार्ड आवश्यक'
        ]
      },
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'udid-photo',
        name: { en: 'Passport Size Photo showing Disability', te: 'వైకల్యాన్ని చూపే పాస్‌పోర్ట్ సైజు ఫోటో', hi: 'दिव्यांगता दर्शाती पासपोर्ट फोटो' },
        description: { en: 'Recent color photograph clearly showing disability condition', te: 'వైకల్యం కనిపించే విధంగా ఉన్న ఫోటో', hi: 'हाल ही में खींची गई स्पष्ट रंगीन फोटो' },
        isMandatory: true,
        acceptableFormats: 'JPEG / PNG (< 100KB)',
        instructions: { en: 'For invisible disabilities, standard passport photo is acceptable.', te: 'కనిపించని వైకల్యాలకు సాధారణ ఫోటో సరిపోతుంది.', hi: 'मानक पासपोर्ट साइज फोटो मान्य है।' }
      },
      {
        id: 'udid-cert',
        name: { en: 'Existing Disability Certificate (if available)', te: 'ఇప్పటికే ఉన్న డిసేబిలిటీ సర్టిఫికెట్', hi: 'पूर्व में जारी दिव्यांगता प्रमाण पत्र (यदि हो)' },
        description: { en: 'Earlier medical certificate issued by hospital/board', te: 'ఆసుపత్రి జారీ చేసిన పాత సర్టిఫికెట్', hi: 'अस्पताल द्वारा जारी पूर्व प्रमाण पत्र' },
        isMandatory: false,
        acceptableFormats: 'PDF (< 2MB)',
        instructions: { en: 'If applying fresh, appointment at District Hospital will be generated.', te: 'కొత్త దరఖాస్తుదారులకు జిల్లా ఆసుపత్రి అపాయింట్‌మెంట్ వస్తుంది.', hi: 'नए आवेदकों को जिला अस्पताल का समय दिया जाएगा।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Submit Online Application on Swavlamban Portal', te: 'స్వావలంబన్ పోర్టల్‌లో దరఖాస్తు చేయండి', hi: 'स्वावलंबन पोर्टल पर ऑनलाइन आवेदन' },
        description: { en: 'Go to swavlambancard.gov.in, select Apply for Disability Certificate & UDID Card.', te: 'swavlambancard.gov.in లో దరఖాస్తు ఫారమ్ నింపండి.', hi: 'swavlambancard.gov.in पर जाकर फॉर्म भरें।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Medical Board Assessment & Smart Card Delivery', te: 'మెడికల్ బోర్డు పరీక్ష మరియు కార్డు డెలివరీ', hi: 'मेडिकल बोर्ड द्वारा जांच और कार्ड प्रेषण' },
        description: { en: 'Visit District Hospital on assigned date; physical UDID Smart Card is speed-posted to your home address free of cost.', te: 'జిల్లా ఆసుపత్రిలో పరీక్ష తర్వాత స్మార్ట్ కార్డు ఇంటికి పోస్ట్ ద్వారా వస్తుంది.', hi: 'अस्पताल में जांच के बाद स्मार्ट कार्ड स्पीड पोस्ट से घर भेजा जाता है।' }
      }
    ],
    postSubmission: {
      timeline: { en: 'Medical assessment within 2 weeks; Card printed and dispatched within 30 days', te: '2 వారాలలో పరీక్ష; 30 రోజులలో కార్డు పోస్ట్ ద్వారా అందుతుంది', hi: '2 सप्ताह में जांच, 30 दिनों में कार्ड प्राप्त' },
      trackingMethod: { en: 'Track status on swavlambancard.gov.in using Enrollment ID', te: 'ఎన్‌రోల్‌మెంట్ నంబరుతో పోర్టల్‌లో ట్రాక్ చేయండి', hi: 'नामांकन संख्या से पोर्टल पर स्थिति जांचें' },
      grievanceContact: { en: 'UDID National Helpline: 011-2436-5019 / disability-cards@gov.in', te: 'హెల్ప్‌లైన్: 011-2436-5019', hi: 'हेल्पलाइन: 011-2436-5019' },
      nextSteps: {
        en: ['Download e-UDID digital card instantly once approved', 'Use card to apply for free bus pass, train concessions, and Divyangjan pension', 'Apply for free motorized tricycle/hearing aid under ADIP scheme'],
        te: ['ఆమోదం పొందిన వెంటనే డిజిటల్ కార్డు డౌన్‌లోడ్ చేసుకోండి', 'ఉచిత బస్సు పాస్, పెన్షన్ మరియు సహాయక పరికరాల కోసం దరఖాస్తు చేసుకోండి'],
        hi: ['डिजिटल ई-यूडीआईडी तुरंत डाउनलोड करें', 'बस पास, रेलवे छूट और दिव्यांग पेंशन का लाभ लें']
      }
    },
    links: {
      applyUrl: 'https://www.swavlambancard.gov.in',
      officialPortalUrl: 'https://www.swavlambancard.gov.in',
      portalName: 'Swavlamban Card Portal (DEPwD)',
      helplineNumber: '011-24365019'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Disability', 'Divyangjan', 'UDID', 'Swavlamban', 'Handicapped', 'Assistive Devices', 'Social Welfare']
  },

  // 8. State Integrated Certificates (Certificates & Civil Registration)
  {
    id: 'state-certificates',
    code: 'CERT-REVENUE-01',
    name: {
      en: 'State Integrated Caste, Income & Residence Certificates (e-Seva / MeeSeva)',
      te: 'కుల, ఆదాయ మరియు నివాస ధృవీకరణ పత్రాలు (మీసేవ / e-సేవ సేవలు)',
      hi: 'जाति, आय एवं निवास प्रमाण पत्र सेवाएं (ई-डिस्ट्रिक्ट / सेवा केंद्र)'
    },
    shortDescription: {
      en: 'Official digital certificates issued by State Revenue Departments required for school admissions, scholarships, jobs, and welfare schemes.',
      te: 'పాఠశాల, కళాశాల అడ్మిషన్లు, స్కాలర్‌షిప్‌లు మరియు ఉద్యోగాల కోసం రెవెన్యూ శాఖ జారీ చేసే అధికారిక డిజిటల్ పత్రాలు.',
      hi: 'स्कूल/कॉलेज दाखिले, छात्रवृत्ति और सरकारी नौकरियों हेतु राजस्व विभाग द्वारा जारी डिजिटल प्रमाण पत्र।'
    },
    fullDescription: {
      en: 'Official government certificates (Caste Certificate, Income Certificate, and Domicile/Residence Certificate) are mandatory baseline documents for claiming constitutional reservations, fee concessions, and government welfare subsidies. Issued digitally with QR-code and cryptographic signature by the Tahsildar/Sub-Divisional Magistrate through State e-District/MeeSeva/e-Seva portals.',
      te: 'కుల, ఆదాయ మరియు నివాస ధృవీకరణ పత్రాలు ప్రభుత్వ రాయితీలు, విద్య మరియు ఉద్యోగ రిజర్వేషన్ల కోసం ప్రాథమిక పత్రాలు. తహశీల్దార్ లేదా రెవెన్యూ అధికారి డిజిటల్ సంతకంతో క్యూఆర్ కోడ్ కలిగిన పత్రాలు మీసేవ లేదా గ్రామ సచివాలయాల ద్వారా జారీ చేయబడతాయి.',
      hi: 'जाति, आय एवं निवास प्रमाण पत्र सभी सरकारी योजनाओं, प्रवेश एवं नौकरियों हेतु अनिवार्य आधारभूत दस्तावेज हैं। ये प्रमाण पत्र तहसीलदार/एसडीएम द्वारा डिजिटल हस्ताक्षर एवं क्यूआर कोड युक्त जारी किए जाते हैं।'
    },
    purpose: {
      en: 'To provide verified legal proof of social category, annual family earnings, and domicile status for citizen welfare eligibility.',
      te: 'సామాజిక వర్గం, కుటుంబ ఆదాయం మరియు స్థానికతకు సంబంధించిన అధికారిక చట్టబద్ధమైన రుజువును పౌరులకు అందించడం.',
      hi: 'नागरिकों को सामाजिक वर्ग, पारिवारिक आय और निवास का अधिकृत प्रमाण पत्र प्रदान करना।'
    },
    department: {
      en: 'Department of Revenue & Land Administration (State Governments)',
      te: 'రెవెన్యూ శాఖ / రాష్ట్ర ప్రభుత్వాలు',
      hi: 'राजस्व विभाग / राज्य सरकारें'
    },
    category: 'certificates',
    targetGroups: ['all', 'students', 'youth', 'low_income'],
    keywords: ['caste certificate', 'income certificate', 'residence certificate', 'meeseva', 'edistrict', 'domicile', 'obc certificate', 'sc st certificate', 'ews certificate', 'revenue certificate'],
    synonyms: ['community certificate', 'family income proof', 'native residence proof'],
    location: 'All States / Union Territories',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'Any resident citizen of the respective State / Union Territory',
          'Students applying for admissions, job seekers, and applicants for welfare subsidies'
        ],
        te: [
          'సంబంధిత రాష్ట్రంలో నివసిస్తున్న పౌరులందరూ',
          'విద్యార్థులు, నిరుద్యోగ యువత మరియు పథకాల కోసం దరఖాస్తుదారులు'
        ],
        hi: [
          'संबंधित राज्य या केंद्र शासित प्रदेश के मूल निवासी',
          'प्रवेश या सरकारी योजना का लाभ लेने वाले नागरिक'
        ]
      },
      conditions: {
        en: [
          'Must provide supporting family background or previous generation caste document',
          'Income declarations are subject to field verification by Revenue Inspector (RI) / VRO'
        ],
        te: [
          'కుటుంబ పాత రికార్డులు లేదా పెద్దల సర్టిఫికెట్ సమర్పించాలి',
          'క్షేత్రస్థాయిలో వీఆర్వో/రెవెన్యూ ఇన్‌స్పెక్టర్ విచారణ ఉంటుంది'
        ],
        hi: [
          'पारिवारिक जाति रिकॉर्ड या पुराने प्रमाण पत्र प्रस्तुत करना आवश्यक',
          'आय घोषणा की पटवारी/लेखपाल द्वारा जांच की जाती है'
        ]
      },
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'cert-aadhaar',
        name: { en: 'Aadhaar Card of Applicant & Head of Family', te: 'దరఖాస్తుదారు మరియు కుటుంబ పెద్ద ఆధార్ కార్డు', hi: 'आवेदक एवं परिवार के मुखिया का आधार कार्ड' },
        description: { en: 'Proof of identity and address', te: 'గుర్తింపు మరియు చిరునామా రుజువు', hi: 'पहचान एवं निवास प्रमाण' },
        isMandatory: true,
        acceptableFormats: 'PDF / JPEG',
        instructions: { en: 'Keep both applicant and parent Aadhaar ready.', te: 'తల్లిదండ్రుల ఆధార్ కూడా అవసరం.', hi: 'माता-पिता का आधार भी संलग्न करें।' }
      },
      {
        id: 'cert-ration',
        name: { en: 'Ration Card / Food Security Card', te: 'రేషన్ కార్డు లేదా ఆహార భద్రతా కార్డు', hi: 'राशन कार्ड या परिवार पहचान पत्र' },
        description: { en: 'Proves family composition and economic status', te: 'కుటుంబ సభ్యుల వివరాలను చూపే కార్డు', hi: 'परिवार के सदस्यों का विवरण' },
        isMandatory: false,
        acceptableFormats: 'PDF',
        instructions: { en: 'Accelerates income verification.', te: 'ఆదాయ ధృవీకరణ వేగంగా జరుగుతుంది.', hi: 'आय सत्यापन में सहायक।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Submit Application Online on State e-District Portal or MeeSeva', te: 'రాష్ట్ర ఈ-డిస్ట్రిక్ట్ లేదా మీసేవ పోర్టల్‌లో దరఖాస్తు చేయండి', hi: 'ई-डिस्ट्रिक्ट पोर्टल पर आवेदन' },
        description: { en: 'Login to state portal (e.g. MeeSeva / e-District), choose required certificate, and upload proofs.', te: 'మీసేవ పోర్టల్‌లో లాగిన్ అయి పత్రాలు అప్‌లోడ్ చేయండి.', hi: 'राज्य के ई-डिस्ट्रिक्ट पोर्टल पर प्रमाण पत्र का प्रकार चुनकर आवेदन करें।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Field Verification & Digitally Signed Download', te: 'క్షేత్రస్థాయి విచారణ మరియు డిజిటల్ సర్టిఫికెట్ డౌన్‌లోడ్', hi: 'सत्यापन उपरांत डिजिटल डाउनलोड' },
        description: { en: 'After VRO/Patwari verification, Tahsildar issues digitally signed certificate with QR code for direct download.', te: 'తహశీల్దార్ ఆమోదం పొందిన తర్వాత క్యూఆర్ కోడ్ ఉన్న సర్టిఫికెట్ డౌన్‌లోడ్ చేసుకోండి.', hi: 'तहसीलदार की स्वीकृति के बाद क्यूआर कोड युक्त प्रमाण पत्र डाउनलोड करें।' }
      }
    ],
    postSubmission: {
      timeline: { en: 'Standard service guarantee: 7 to 15 working days', te: '7 నుండి 15 పనిదినాలలో జారీ చేయబడుతుంది', hi: '7 से 15 कार्य दिवसों में प्रमाण पत्र जारी' },
      trackingMethod: { en: 'Check Application Status using Transaction ID / Application Number on State portal', te: 'దరఖాస్తు నంబరుతో పోర్టల్‌లో స్థితిని తనిఖీ చేయండి', hi: 'आवेदन संख्या से पोर्टल पर स्थिति देखें' },
      grievanceContact: { en: 'District Collectorate Helpline / e-District State Grievance Portal', te: 'కలెక్టరేట్ లేదా మీసేవ హెల్ప్‌లైన్', hi: 'जिला कलेक्ट्रेट या सीएम हेल्पलाइन' },
      nextSteps: {
        en: ['Download digitally signed PDF directly from portal', 'Store in DigiLocker for permanent legal verification without paper copies'],
        te: ['డిజిటల్ పత్రాన్ని డౌన్‌లోడ్ చేసుకోండి లేదా డిజిలాకర్‌లో భద్రపరచుకోండి', 'అన్ని ప్రయోజనాలకు ఇది చెల్లుబాటు అవుతుంది'],
        hi: ['डिजिटल पीडीएफ डाउनलोड करें और डिजिलॉकर में सहेजें']
      }
    },
    links: {
      applyUrl: 'https://edistrict.gov.in',
      officialPortalUrl: 'https://edistrict.gov.in',
      portalName: 'State e-District / Citizen Services Gateway',
      helplineNumber: '1800-425-4440'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Certificates', 'Caste Certificate', 'Income Certificate', 'MeeSeva', 'e-District', 'Residence', 'OBC', 'SC', 'ST']
  },

  // 9. Civil Registration System (Birth & Death Certificates)
  {
    id: 'crs-birth-death',
    code: 'CERT-CRS-02',
    name: {
      en: 'Civil Registration System (Official Birth & Death Certificates - CRS)',
      te: 'పౌర రిజిస్ట్రేషన్ వ్యవస్థ (జనన మరియు మరణ ధృవీకరణ పత్రాలు - CRS)',
      hi: 'नागरिक पंजीकरण प्रणाली (जन्म एवं मृत्यु प्रमाण पत्र - CRS)'
    },
    shortDescription: {
      en: 'Official statutory registration and issuance of QR-coded Birth and Death certificates under the Registration of Births and Deaths Act.',
      te: 'జనన మరణాల చట్టం కింద అధికారిక క్యూఆర్ కోడ్ కలిగిన జనన మరియు మరణ ధృవీకరణ పత్రాల జారీ.',
      hi: 'जन्म और मृत्यु पंजीकरण अधिनियम के तहत आधिकारिक क्यूआर कोड युक्त जन्म एवं मृत्यु प्रमाण पत्र।'
    },
    fullDescription: {
      en: 'The Civil Registration System (CRS) operated under the Office of the Registrar General of India enables online registration and certified issuance of Birth and Death records. A Birth Certificate is the fundamental foundational document establishing date of birth, parentage, identity, and citizenship for passports, school admissions, and Aadhaar.',
      te: 'భారత రిజిస్ట్రార్ జనరల్ కార్యాలయం ఆధ్వర్యంలో నడిచే పౌర రిజిస్ట్రేషన్ వ్యవస్థ ద్వారా జనన, మరణ ధృవీకరణ పత్రాలు ఆన్‌లైన్‌లో జారీ చేయబడతాయి. పాఠశాల ప్రవేశాలు, పాస్‌పోర్ట్ మరియు ఆధార్ కార్డు కోసం జనన ధృవీకరణ పత్రం అత్యంత కీలకమైన ప్రాథమిక పత్రం.',
      hi: 'भारत के महारजिस्ट्रार कार्यालय द्वारा संचालित नागरिक पंजीकरण प्रणाली (CRS) जन्म एवं मृत्यु का अधिकृत प्रमाण पत्र जारी करती है जो पासपोर्ट, स्कूल और आधार हेतु आवश्यक है।'
    },
    purpose: {
      en: 'To provide statutory, universally accepted legal record of birth or demise for legal rights, inheritance, and identity.',
      te: 'పౌరుల హక్కులు, వారసత్వం మరియు గుర్తింపు కోసం చట్టబద్ధమైన జనన లేదా మరణ రుజువును అందించడం.',
      hi: 'नागरिकों को जन्म या मृत्यु का कानूनी एवं सार्वभौमिक रूप से मान्य प्रमाण पत्र प्रदान करना।'
    },
    department: {
      en: 'Office of the Registrar General of India / Ministry of Home Affairs',
      te: 'రిజిస్ట్రార్ జనరల్ కార్యాలయం / హోం మంత్రిత్వ శాఖ',
      hi: 'भारत के महारजिस्ट्रार का कार्यालय / गृह मंत्रालय'
    },
    category: 'certificates',
    targetGroups: ['all', 'general'],
    keywords: ['birth certificate', 'death certificate', 'crsorgi', 'newborn registration', 'lost birth certificate', 'nagar nigam birth certificate', 'panchayat birth record'],
    synonyms: ['natal registration', 'official date of birth proof', 'vital statistics record'],
    location: 'All India / Municipalities & Panchayats',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'Parents or legal guardians of newborn child (reporting within 21 days is completely free)',
          'Immediate family members / legal heirs in case of death certificate'
        ],
        te: [
          'నవజాత శిశువు తల్లిదండ్రులు లేదా సంరక్షకులు (21 రోజులలోపు నమోదు ఉచితం)',
          'కుటుంబ సభ్యులు లేదా చట్టబద్ధమైన వారసులు'
        ],
        hi: [
          'नवजात शिशु के माता-पिता (21 दिनों के भीतर पंजीकरण पूर्णतः निःशुल्क)',
          'मृत्यु प्रमाण पत्र हेतु परिवार के निकटतम सदस्य या कानूनी वारिस'
        ]
      },
      conditions: {
        en: [
          'Must be reported within 21 days of occurrence at the place of birth/death',
          'Delayed registration beyond 21 days requires permission from Revenue Authority / Magistrate'
        ],
        te: [
          'జరిగిన 21 రోజులలోపు సమాచారం ఇవ్వాలి',
          '21 రోజుల తర్వాత అయితే ఆలస్య రుసుము మరియు అధికారి అనుమతి అవసరం'
        ],
        hi: [
          'घटना के 21 दिनों के भीतर संबंधित नगर पालिका या पंचायत में सूचना देना आवश्यक',
          '21 दिन के बाद पंजीकरण हेतु सक्षम प्राधिकारी की अनुमति आवश्यक'
        ]
      },
      citizenshipRequired: false
    },
    documents: [
      {
        id: 'crs-hospital',
        name: { en: 'Hospital Discharge Summary / Birth Slip', te: 'ఆసుపత్రి డిశ్చార్జ్ సమ్మరీ లేదా పుట్టిన రశీదు', hi: 'अस्पताल से प्राप्त जन्म/डिस्चार्ज पर्ची' },
        description: { en: 'Form 2 (Birth report) provided by Hospital / Maternity Home', te: 'ఆసుపత్రి జారీ చేసిన ఫారమ్ 2 నివేదిక', hi: 'अस्पताल द्वारा जारी जन्म रिपोर्ट' },
        isMandatory: true,
        acceptableFormats: 'PDF / JPEG',
        instructions: { en: 'Must contain child gender, date & exact time of birth.', te: 'తేదీ మరియు సమయం స్పష్టంగా ఉండాలి.', hi: 'जन्म की तारीख और समय स्पष्ट होना चाहिए।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Submit Details on CRS Portal or Municipality / Panchayat', te: 'CRS పోర్టల్ లేదా మున్సిపాలిటీలో నమోదు చేయండి', hi: 'CRS पोर्टल पर पंजीकरण' },
        description: { en: 'Visit crsorgi.gov.in or municipal citizen service counter and input institutional birth event ID.', te: 'crsorgi.gov.in లో వివరాలు నమోదు చేయండి.', hi: 'crsorgi.gov.in पर अस्पताल द्वारा दी गई रसीद संख्या दर्ज करें।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Download Certified Certificate with QR Code', te: 'క్యూఆర్ కోడ్ ఉన్న సర్టిఫికెట్ డౌన్‌లోడ్ చేసుకోండి', hi: 'क्यूआर कोड युक्त प्रमाण पत्र प्राप्त करें' },
        description: { en: 'Registrar verifies hospital notification and issues digital certificate downloadable anytime.', te: 'రిజిస్ట్రార్ ఆమోదం తర్వాత ఆన్‌లైన్‌లో ఎప్పుడైనా డౌన్‌లోడ్ చేసుకోవచ్చు.', hi: 'पंजीयक के सत्यापन के बाद डिजिटल प्रमाण पत्र तुरंत डाउनलोड करें।' }
      }
    ],
    postSubmission: {
      timeline: { en: 'Issued within 3 to 7 working days', te: '3 నుండి 7 పనిదినాలలో లభిస్తుంది', hi: '3 से 7 कार्य दिवस' },
      trackingMethod: { en: 'Check status using Application Ref No on crsorgi.gov.in', te: 'crsorgi.gov.in లో దరఖాస్తు సంఖ్యతో చూడండి', hi: 'crsorgi.gov.in पर स्थिति जांचें' },
      grievanceContact: { en: 'Local Municipal Registrar of Births & Deaths / CRS Support', te: 'స్థానిక మున్సిపల్ రిజిస్ట్రార్ కార్యాలయం', hi: 'स्थानीय नगर निगम जन्म-मृत्यु शाखा' },
      nextSteps: {
        en: ['Download watermarked PDF containing official seal and QR verification code', 'Add newborn name if not already registered before certificate printing'],
        te: ['క్యూఆర్ కోడ్ ఉన్న పత్రాన్ని డౌన్‌లోడ్ చేసుకోండి', 'పిల్లల పేరు నమోదు చేయించుకోండి'],
        hi: ['आधिकारिक क्यूआर कोड युक्त पीडीएफ डाउनलोड करें']
      }
    },
    links: {
      applyUrl: 'https://crsorgi.gov.in',
      officialPortalUrl: 'https://crsorgi.gov.in',
      portalName: 'Civil Registration System (Office of Registrar General)',
      helplineNumber: '011-23438100'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Birth Certificate', 'Death Certificate', 'CRS', 'Identity', 'Civil Registration', 'Hospital Birth']
  },

  // 10. UIDAI Aadhaar Services (Identity & Public Utilities)
  {
    id: 'uidai-aadhaar',
    code: 'ID-UIDAI-01',
    name: {
      en: 'UIDAI Aadhaar Services (Online Update, Address Change & e-Aadhaar)',
      te: 'UIDAI ఆధార్ సేవలు (ఆన్‌లైన్ నవీకరణ, చిరునామా మార్పు & ఈ-ఆధార్)',
      hi: 'UIDAI आधार सेवाएं (ऑनलाइन अपडेट, पता परिवर्तन एवं ई-आधार)'
    },
    shortDescription: {
      en: 'Official Unique Identification portal to update address, link mobile numbers, download digital e-Aadhaar, and verify authentication records.',
      te: 'ఆధార్‌లో చిరునామా మార్పు, మొబైల్ నంబర్ సీడింగ్, బయోమెట్రిక్ లాక్ మరియు డిజిటల్ ఈ-ఆధార్ డౌన్‌లోడ్ సేవలు.',
      hi: 'आधार कार्ड में पता बदलना, मोबाइल लिंक करना, बायोमेट्रिक लॉक/अनलॉक और डिजिटल ई-आधार डाउनलोड करने की आधिकारिक सुविधा।'
    },
    fullDescription: {
      en: 'The Unique Identification Authority of India (UIDAI) manages the world’s largest biometric identity system. Through the myAadhaar portal, citizens can update their demographic details (name, address, date of birth with valid documents), order PVC Aadhaar cards, lock/unlock biometrics for fraud protection, and generate secure virtual IDs (VID) for banking and government welfare onboarding.',
      te: 'భారత విశిష్ట గుర్తింపు ప్రాధికార సంస్థ (UIDAI) మై-ఆధార్ పోర్టల్ ద్వారా పౌరులు తమ చిరునామాను ఆన్‌లైన్‌లో మార్చుకోవచ్చు, పీవీసీ ఆధార్ కార్డును ఆర్డర్ చేయవచ్చు, మోసాల నుండి రక్షణ కోసం బయోమెట్రిక్‌ను లాక్ చేయవచ్చు మరియు ఈ-ఆధార్‌ను క్షణాల్లో డౌన్‌లోడ్ చేసుకోవచ్చు.',
      hi: 'UIDAI के myAadhaar पोर्टल के जरिए नागरिक घर बैठे अपने आधार में पता बदल सकते हैं, पीवीसी कार्ड ऑर्डर कर सकते हैं, बायोमेट्रिक्स लॉक/अनसॉक कर सकते हैं और तुरंत डिजिटल ई-आधार डाउनलोड कर सकते हैं।'
    },
    purpose: {
      en: 'To maintain an updated, accurate universal identity document necessary for government DBT, banking, SIM, and welfare services.',
      te: 'ప్రభుత్వ సంక్షేమ పథకాలు, బ్యాంకింగ్ మరియు సేవలకు అవసరమైన ప్రాథమిక గుర్తింపును పౌరులకు అందించడం.',
      hi: 'सभी सरकारी योजनाओं, बैंकिंग एवं कल्याणकारी लाभों हेतु आधार पहचान को अद्यतन बनाए रखना।'
    },
    department: {
      en: 'Unique Identification Authority of India (UIDAI) / Ministry of Electronics & IT',
      te: 'భారత విశిష్ట గుర్తింపు ప్రాధికార సంస్థ (UIDAI) / MeitY',
      hi: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI) / इलेक्ट्रॉनिकी एवं आईटी मंत्रालय'
    },
    category: 'identity',
    targetGroups: ['all', 'general'],
    keywords: ['aadhaar update', 'address change aadhaar', 'eaadhaar download', 'uidai', 'mobile link aadhaar', 'pvc aadhaar', 'biometric lock', 'myaadhaar', 'lost aadhaar'],
    synonyms: ['unique identity card update', 'digital national id', 'aadhaar correction portal'],
    location: 'All India / National Identification',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'Any resident of India who possesses a 12-digit Aadhaar number',
          'Parents of children below 5 years for Baal Aadhaar'
        ],
        te: [
          '12 అంకెల ఆధార్ నంబర్ కలిగిన భారతీయ పౌరులందరూ',
          '5 సంవత్సరాల లోపు పిల్లల కోసం బాల్ ఆధార్'
        ],
        hi: [
          '12 अंकों का आधार नंबर धारक कोई भी भारतीय निवासी',
          '5 वर्ष से कम आयु के बच्चों हेतु बाल आधार'
        ]
      },
      conditions: {
        en: [
          'Mobile number must be registered with Aadhaar for receiving OTP for online demographic update',
          'Biometric updates (fingerprints/iris/photo) require in-person visit to Aadhaar Seva Kendra'
        ],
        te: [
          'ఆన్‌లైన్ నవీకరణల కోసం మొబైల్ నంబర్ ఆధార్‌తో లింక్ అయి ఉండాలి',
          'బయోమెట్రిక్ నవీకరణల కోసం ఆధార్ కేంద్రానికి వెళ్లాలి'
        ],
        hi: [
          'ऑनलाइन अपडेट हेतु मोबाइल नंबर आधार से जुड़ा होना अनिवार्य है',
          'बायोमेट्रिक अपडेट के लिए आधार सेवा केंद्र जाना होगा'
        ]
      },
      citizenshipRequired: false
    },
    documents: [
      {
        id: 'uid-doc',
        name: { en: 'Valid Proof of Address (PoA) / Proof of Identity (PoI)', te: 'చిరునామా లేదా గుర్తింపు రుజువు పత్రం', hi: 'मान्य पता प्रमाण (PoA) / पहचान प्रमाण (PoI)' },
        description: { en: 'Electricity bill, water bill, bank passbook, rent agreement, or voter ID', te: 'కరెంట్ బిల్లు, బ్యాంక్ పాస్‌బుక్ లేదా ఓటరు కార్డు', hi: 'बिजली बिल, बैंक पासबुक या मतदाता पहचान पत्र' },
        isMandatory: true,
        acceptableFormats: 'PDF / JPEG (< 2MB)',
        instructions: { en: 'Name on document must match Aadhaar records.', te: 'పేరు స్పష్టంగా సరిపోవాలి.', hi: 'दस्तावेज पर नाम आधार रिकॉर्ड से मेल खाना चाहिए।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Login to myAadhaar Portal with OTP', te: 'మై-ఆధార్ పోర్టల్‌లో ఓటీపీతో లాగిన్ అవ్వండి', hi: 'myAadhaar पर ओटीपी से लॉगिन' },
        description: { en: 'Visit myaadhaar.uidai.gov.in, enter 12-digit Aadhaar, and authenticate via SMS OTP.', te: 'myaadhaar.uidai.gov.in లో ఆధార్ నంబరు మరియు ఓటీపీతో ప్రవేశించండి.', hi: 'myaadhaar.uidai.gov.in पर जाकर आधार नंबर और ओटीपी से लॉगिन करें।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Select Service & Upload Supporting Proof', te: 'సేవను ఎంచుకుని పత్రాన్ని అప్‌లోడ్ చేయండి', hi: 'सेवा चुनें और दस्तावेज अपलोड करें' },
        description: { en: 'Choose Address Update, enter new address details, upload PoA, and pay nominal fee (₹50).', te: 'చిరునామా మార్పును ఎంచుకుని ₹50 చెల్లించండి.', hi: 'पता अपडेट विकल्प चुनें, दस्तावेज अपलोड करें और ₹50 शुल्क जमा करें।' }
      }
    ],
    postSubmission: {
      timeline: { en: 'Updates processed within 3 to 7 working days', te: '3 నుండి 7 రోజులలో నవీకరించబడుతుంది', hi: '3 से 7 कार्य दिवस' },
      trackingMethod: { en: 'Track status using Service Request Number (SRN) on myaadhaar portal', te: 'SRN సంఖ్యతో పోర్టల్‌లో స్థితిని తనిఖీ చేయండి', hi: 'SRN नंबर से पोर्टल पर स्थिति देखें' },
      grievanceContact: { en: 'UIDAI National Toll Free: 1947 / help@uidai.gov.in', te: 'టోల్ ఫ్రీ: 1947', hi: 'टोल फ्री: 1947' },
      nextSteps: {
        en: ['Download updated password-protected e-Aadhaar PDF (password is first 4 letters of name in capital + birth year)', 'Check Bank-Aadhaar seeding status for DBT payments'],
        te: ['నవీకరించబడిన ఈ-ఆధార్ పీడీఎఫ్ డౌన్‌లోడ్ చేసుకోండి', 'బ్యాంక్ సీడింగ్ స్థితిని సరిచూసుకోండి'],
        hi: ['पासवर्ड संरक्षित ई-आधार पीडीएफ डाउनलोड करें (नाम के पहले 4 अक्षर + जन्म वर्ष)', 'DBT बैंक सीडिंग स्थिति जांचें']
      }
    },
    links: {
      applyUrl: 'https://myaadhaar.uidai.gov.in',
      officialPortalUrl: 'https://uidai.gov.in',
      portalName: 'myAadhaar Portal (UIDAI Official)',
      helplineNumber: '1947'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Aadhaar', 'UIDAI', 'Identity', 'Address Update', 'e-Aadhaar', 'Biometrics', 'Citizen ID']
  },

  // 11. PM Surya Ghar Muft Bijli Yojana (Public Utilities & Green Energy)
  {
    id: 'pm-surya-ghar',
    code: 'UTIL-SURYA-01',
    name: {
      en: 'PM Surya Ghar: Muft Bijli Yojana (Rooftop Solar Subsidy up to 300 Units Free Power)',
      te: 'పీఎం సూర్య ఘర్: ముఫ్త్ బిజిలీ యోజన (రూఫ్‌టాప్ సోలార్ సబ్సిడీ - 300 యూనిట్ల ఉచిత విద్యుత్)',
      hi: 'पीएम सूर्य घर: मुफ्त बिजली योजना (रूफटॉप सोलर सब्सिडी - 300 यूनिट मुफ्त बिजली)'
    },
    shortDescription: {
      en: 'Get up to ₹78,000 central government direct subsidy for installing rooftop solar panels and save 100% on monthly electricity bills.',
      te: 'ఇంటి పైకప్పుపై సోలార్ ప్యానెళ్ల ఏర్పాటుకు ₹78,000 వరకు కేంద్ర ప్రభుత్వ సబ్సిడీ మరియు నెలకు 300 యూనిట్ల వరకు ఉచిత విద్యుత్.',
      hi: 'छत पर सोलर पैनल लगाने हेतु सरकार से ₹78,000 तक की सीधी सब्सिडी और हर महीने 300 यूनिट तक मुफ्त बिजली का लाभ।'
    },
    fullDescription: {
      en: 'PM Surya Ghar: Muft Bijli Yojana is a visionary national initiative by the Ministry of New and Renewable Energy (MNRE) aiming to light up 1 crore households. The government provides direct bank subsidy: ₹30,000 for 1 kW system, ₹60,000 for 2 kW system, and ₹78,000 for 3 kW and higher systems. Surplus electricity generated can be fed back into the grid for revenue via net metering.',
      te: 'పీఎం సూర్య ఘర్ ముఫ్త్ బిజిలీ యోజన ద్వారా 1 కోటి కుటుంబాల ఇళ్లపై సోలార్ ప్యానెల్స్ ఏర్పాటు చేయాలని లక్ష్యంగా పెట్టుకున్నారు. 1 కిలోవాట్ సిస్టమ్‌కు ₹30,000, 2 కిలోవాట్‌కు ₹60,000, మరియు 3 కిలోవాట్ లేదా అంతకంటే ఎక్కువకు ₹78,000 సబ్సిడీ నేరుగా బ్యాంక్ ఖాతాలో జమ చేస్తారు. మిగిలిన విద్యుత్‌ను గ్రిడ్‌కు అమ్మి ఆదాయం కూడా పొందవచ్చు.',
      hi: 'पीएम सूर्य घर योजना के तहत छत पर सोलर सिस्टम लगाने के लिए सरकार ₹30,000 (1kW), ₹60,000 (2kW) और ₹78,000 (3kW+) की सब्सिडी सीधे बैंक खाते में देती है। अतिरिक्त बिजली ग्रिड को बेचकर कमाई भी की जा सकती है।'
    },
    purpose: {
      en: 'To eliminate household electricity bills, promote clean renewable solar energy, and reduce strain on the power grid.',
      te: 'ప్రజల విద్యుత్ బిల్లులను తగ్గించడం, సౌర శక్తి వినియోగాన్ని పెంచడం మరియు పర్యావరణ పరిరక్షణ.',
      hi: 'घरेलू बिजली बिलों को शून्य करना और स्वच्छ सौर ऊर्जा को बढ़ावा देना।'
    },
    department: {
      en: 'Ministry of New and Renewable Energy (MNRE)',
      te: 'నూతన మరియు పునరుత్పాదక ఇంధన మంత్రిత్వ శాఖ (MNRE)',
      hi: 'नवीन और नवीकरणीय ऊर्जा मंत्रालय (MNRE)'
    },
    category: 'utilities',
    targetGroups: ['all', 'low_income', 'general'],
    keywords: ['solar subsidy', 'rooftop solar', 'pm surya ghar', 'free electricity', '300 units free power', 'solar panel government', 'electricity bill zero', 'mnre solar scheme'],
    synonyms: ['home solar grant', 'clean green electricity subsidy', 'solar roof installation rebate'],
    location: 'All India / All Discoms Supported',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'Any household owning a residential property with roof suitable for solar installation',
          'Valid residential electricity connection (Discom consumer number)'
        ],
        te: [
          'సొంత ఇల్లు మరియు సోలార్ ప్యానెల్స్ అమర్చడానికి తగిన స్థలం ఉన్న పౌరులు',
          'చెల్లుబాటు అయ్యే గృహ విద్యుత్ కనెక్షన్ ఉన్నవారు'
        ],
        hi: [
          'छत वाले पक्के मकान के मालिक निवासी नागरिक',
          'वैध घरेलू बिजली कनेक्शन (उपभोक्ता संख्या) धारक'
        ]
      },
      conditions: {
        en: [
          'Must purchase and install solar modules from empaneled DISCOM vendors',
          'Must have paid all outstanding electricity bills before installation'
        ],
        te: [
          'డిస్కం గుర్తింపు పొందిన వెండర్ ద్వారా మాత్రమే ఏర్పాటు చేయించాలి',
          'విద్యుత్ బిల్లు బకాయిలు ఉండకూడదు'
        ],
        hi: [
          'डिस्कॉम से पंजीकृत वेंडर के माध्यम से ही स्थापना करानी होगी',
          'बिजली बिल का कोई पुराना बकाया नहीं होना चाहिए'
        ]
      },
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'surya-bill',
        name: { en: 'Latest Electricity Bill', te: 'ఇటీవలి విద్యుత్ బిల్లు', hi: 'हाल का बिजली बिल' },
        description: { en: 'Shows consumer number, sanctioned load, and address', te: 'కన్స్యూమర్ నంబరు మరియు చిరునామా చూపే బిల్లు', hi: 'जिसमें उपभोक्ता संख्या एवं स्वीकृत लोड अंकित हो' },
        isMandatory: true,
        acceptableFormats: 'PDF / JPEG',
        instructions: { en: 'Ensure consumer name matches property owner.', te: 'పేరు సరిపోవాలి.', hi: 'नाम बिजली रिकॉर्ड से मेल खाना चाहिए।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Register on PM Surya Ghar Portal', te: 'పీఎం సూర్య ఘర్ పోర్టల్‌లో రిజిస్టర్ అవ్వండి', hi: 'राष्ट्रीय पोर्टल पर पंजीकरण' },
        description: { en: 'Visit pmsuryaghar.gov.in, select State and Electricity Distribution Company (DISCOM), and enter Consumer Account Number.', te: 'pmsuryaghar.gov.in లో మీ డిస్కం మరియు కరెంట్ బిల్లు నంబర్ నమోదు చేయండి.', hi: 'pmsuryaghar.gov.in पर जाकर राज्य, बिजली कंपनी और कंज्यूमर नंबर दर्ज करें।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Vendor Installation, Net Metering & Subsidy Credit', te: 'వెండర్ ఏర్పాటు, నెట్ మీటరింగ్ మరియు సబ్సిడీ జమ', hi: 'स्थापना, नेट मीटरिंग और सब्सिडी' },
        description: { en: 'Empaneled vendor installs system; Discom inspects and installs Net Meter. ₹78,000 subsidy credited to bank within 30 days.', te: 'ప్యానెల్స్ అమర్చిన తర్వాత నెట్ మీటర్ బిగిస్తారు; సబ్సిడీ నేరుగా బ్యాంక్ ఖాతాలో జమ అవుతుంది.', hi: 'वेंडर द्वारा पैनल लगाने व नेट मीटर लगने के 30 दिनों में सब्सिडी बैंक खाते में क्रेडिट होती है।' }
      }
    ],
    postSubmission: {
      timeline: { en: 'Installation in 15 days; Subsidy credited within 30 days of Discom commissioning report', te: '15 రోజుల్లో ప్యానెల్స్ ఏర్పాటు; 30 రోజుల్లో సబ్సిడీ జమ', hi: '15 दिन में स्थापना; 30 दिनों में सीधी सब्सिडी' },
      trackingMethod: { en: 'Track application on pmsuryaghar.gov.in with Consumer ID', te: 'పోర్టల్‌లో కన్స్యూమర్ నంబర్‌తో ట్రాక్ చేయండి', hi: 'पोर्टल पर कंज्यूमर नंबर से स्थिति देखें' },
      grievanceContact: { en: 'PM Surya Ghar National Helpline: 15555 / National Solar Toll Free: 1800-180-3333', te: 'హెల్ప్‌లైన్: 15555', hi: 'हेल्पलाइन: 15555' },
      nextSteps: {
        en: ['Sign Net Metering agreement with local Discom line inspector', 'Enjoy 300 units free solar power and earn bill credits for surplus units fed into the grid'],
        te: ['నెట్ మీటరింగ్ ఒప్పందం పూర్తి చేయండి', 'నెలకు 300 యూనిట్ల ఉచిత విద్యుత్‌ను పొందండి'],
        hi: ['नेट मीटरिंग समझौता पूरा करें', 'हर महीने 300 यूनिट मुफ्त बिजली पाएं']
      }
    },
    links: {
      applyUrl: 'https://pmsuryaghar.gov.in',
      officialPortalUrl: 'https://pmsuryaghar.gov.in',
      portalName: 'PM Surya Ghar National Portal (MNRE)',
      helplineNumber: '15555'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Solar Subsidy', 'PM Surya Ghar', 'Free Electricity', 'Clean Energy', 'Green Power', 'Public Utility']
  },

  // 12. Sarathi Driving Licence Services (Transport & Licensing)
  {
    id: 'parivahan-driving-license',
    code: 'TRN-SARATHI-01',
    name: {
      en: 'Sarathi Driving Licence Services (Learner Licence, Permanent DL & Renewal)',
      te: 'సారథి డ్రైవింగ్ లైసెన్స్ సేవలు (లెర్నర్ లైసెన్స్, పర్మనెంట్ DL & పునరుద్ధరణ)',
      hi: 'सारथी ड्राइविंग लाइसेंस सेवाएं (लर्नर लाइसेंस, स्थायी DL एवं नवीनीकरण)'
    },
    shortDescription: {
      en: 'Apply for Learner Licence from home with online test, book driving test slots, and renew or replace lost Driving Licences via Parivahan Sewa.',
      te: 'ఇంటి నుండే ఆన్‌లైన్ పరీక్ష ద్వారా లెర్నర్ లైసెన్స్ పొందడం, పర్మనెంట్ DL స్లాట్ బుకింగ్ మరియు డ్రైవింగ్ లైసెన్స్ పునరుద్ధరణ సేవలు.',
      hi: 'घर बैठे ऑनलाइन टेस्ट देकर लर्नर लाइसेंस प्राप्त करें, स्थायी ड्राइविंग लाइसेंस हेतु स्लॉट बुक करें और लाइसेंस नवीनीकरण कराएं।'
    },
    fullDescription: {
      en: 'Sarathi (Parivahan Sewa) managed by the Ministry of Road Transport and Highways (MoRTH) simplifies driving licence issuance. Citizens can take the contactless Aadhaar-authenticated Learner Licence test from their own home without visiting the RTO, book practical driving track slots for permanent licences, update addresses, and apply for international driving permits.',
      te: 'రవాణా మరియు రహదారుల మంత్రిత్వ శాఖ (MoRTH) సారథి పోర్టల్ ద్వారా డ్రైవింగ్ లైసెన్స్ సేవలను సులభతరం చేసింది. ఆధార్ ధృవీకరణ ద్వారా ఇంట్లోనే ఆన్‌లైన్ పరీక్ష రాసి లెర్నర్ లైసెన్స్ (LLR) పొందవచ్చు, పర్మనెంట్ డ్రైవింగ్ లైసెన్స్ కోసం స్లాట్ బుక్ చేసుకోవచ్చు.',
      hi: 'सड़क परिवहन एवं राजमार्ग मंत्रालय के सारथी पोर्टल के माध्यम से नागरिक घर बैठे ऑनलाइन टेस्ट देकर तुरंत लर्नर लाइसेंस प्राप्त कर सकते हैं तथा आरटीओ टेस्ट स्लॉट बुक कर सकते हैं।'
    },
    purpose: {
      en: 'To provide transparent, faceless, and digital transport licensing services eliminating touts and middlemen.',
      te: 'దళారులు లేకుండా పారదర్శకంగా మరియు సులభంగా డ్రైవింగ్ లైసెన్స్ సేవలను పౌరులకు అందించడం.',
      hi: 'दलालों से मुक्त, पारदर्शी एवं डिजिटल माध्यम से ड्राइविंग लाइसेंस सेवाएं उपलब्ध कराना।'
    },
    department: {
      en: 'Ministry of Road Transport and Highways (MoRTH) / State Transport Departments',
      te: 'రహదారి రవాణా మరియు రహదారుల మంత్రిత్వ శాఖ / రవాణా శాఖ',
      hi: 'सड़क परिवहन एवं राजमार्ग मंत्रालय (MoRTH) / परिवहन विभाग'
    },
    category: 'transport',
    targetGroups: ['youth', 'all', 'general'],
    keywords: ['driving license', 'learner license', 'llr test online', 'parivahan', 'sarathi', 'dl renewal', 'driving test slot', 'transport rto service', 'lost dl'],
    synonyms: ['drivers licence application', 'two wheeler four wheeler license', 'motor vehicle driving permit'],
    location: 'All India / All State RTOs',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'Age 16+ for gearless motorcycles (up to 50cc)',
          'Age 18+ for light motor vehicles (cars, motorcycles with gear)',
          'Age 20+ for commercial transport vehicles with minimum 1-year LMV holding'
        ],
        te: [
          'గేర్ లేని ద్విచక్ర వాహనాలకు 16 సంవత్సరాలు పైబడిన వారు',
          'కార్లు మరియు బైక్‌ల కోసం 18 సంవత్సరాలు పైబడిన వారు',
          'కమర్షియల్ వాహనాలకు 20 సంవత్సరాలు'
        ],
        hi: [
          'गियर रहित दोपहिया हेतु न्यूनतम 16 वर्ष',
          'कार एवं सामान्य दोपहिया (LMV) हेतु न्यूनतम 18 वर्ष',
          'वाणिज्यिक वाहनों हेतु न्यूनतम 20 वर्ष'
        ]
      },
      conditions: {
        en: [
          'Pass computer-based traffic rules test (min 60% score)',
          'Possess valid medical fitness self-declaration (Form 1 / Form 1A)'
        ],
        te: [
          'ఆన్‌లైన్ ట్రాఫిక్ నిబంధనల పరీక్షలో ఉత్తీర్ణత సాధించాలి',
          'వైద్య ధృవీకరణ పత్రం సమర్పించాలి'
        ],
        hi: [
          'ट्रैफिक नियमों की ऑनलाइन परीक्षा पास करना अनिवार्य',
          'चिकित्सा फिटनेस घोषणा (फॉर्म 1/1A)'
        ]
      },
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'dl-proof-age',
        name: { en: 'Proof of Age & Address', te: 'వయస్సు మరియు చిరునామా రుజువు', hi: 'आयु एवं निवास प्रमाण' },
        description: { en: 'Aadhaar Card, 10th Marksheet, or Passport', te: 'ఆధార్ కార్డు లేదా 10వ తరగతి సర్టిఫికెట్', hi: 'आधार कार्ड या 10वीं की अंकतालिका' },
        isMandatory: true,
        acceptableFormats: 'PDF / Direct Aadhaar eKYC',
        instructions: { en: 'Aadhaar eKYC eliminates need to upload physical files.', te: 'ఆధార్ e-KYC ద్వారా పత్రాలు అప్‌లోడ్ చేయకుండానే పూర్తవుతుంది.', hi: 'आधार eKYC से दस्तावेज अपलोड करने की आवश्यकता नहीं रहती।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Apply on Sarathi Parivahan & Take Online LLR Exam', te: 'సారథి పోర్టల్‌లో దరఖాస్తు చేసి ఆన్‌లైన్ పరీక్ష రాయండి', hi: 'सारथी पोर्टल पर ऑनलाइन परीक्षा' },
        description: { en: 'Visit sarathi.parivahan.gov.in, select State, click Apply for Learner Licence with Aadhaar, and take webcam proctored exam.', te: 'sarathi.parivahan.gov.in లో ఆధార్‌తో లాగిన్ అయి వెబ్‌క్యామ్ పరీక్ష రాయండి.', hi: 'sarathi.parivahan.gov.in पर राज्य चुनकर आधार से घर बैठे ऑनलाइन टेस्ट दें।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Instant LLR Download & Book Permanent DL Track Test', te: 'లెర్నర్ లైసెన్స్ డౌన్‌లోడ్ & పర్మనెంట్ DL స్లాట్ బుకింగ్', hi: 'लर्नर लाइसेंस डाउनलोड और RTO ड्राइविंग टेस्ट' },
        description: { en: 'Download digital Learner Licence instantly. After 30 days, book driving track test slot at RTO for Smart DL card.', te: 'పరీక్ష పాస్ కాగానే LLR డౌన్‌లోడ్ చేసుకోండి; 30 రోజుల తర్వాత RTO డ్రైవింగ్ టెస్ట్ కోసం స్లాట్ బుక్ చేసుకోండి.', hi: 'पास होते ही तुरंत LLR डाउनलोड करें; 30 दिन बाद RTO में ड्राइविंग टेस्ट देकर स्थायी कार्ड पाएं।' }
      }
    ],
    postSubmission: {
      timeline: { en: 'Learner Licence: Instant online; Permanent DL: 7 days after driving track test', te: 'లెర్నర్ లైసెన్స్: తక్షణం; పర్మనెంట్ లైసెన్స్: డ్రైవింగ్ పరీక్ష జరిగిన 7 రోజుల్లో', hi: 'लर्नर लाइसेंस: तुरंत; स्थायी लाइसेंस: टेस्ट के 7 दिनों में' },
      trackingMethod: { en: 'Track application on sarathi.parivahan.gov.in with Application Number', te: 'దరఖాస్తు సంఖ్యతో పోర్టల్‌లో ట్రాక్ చేయండి', hi: 'आवेदन संख्या से पोर्टल पर स्थिति देखें' },
      grievanceContact: { en: 'Parivahan Helpdesk: 0120-4925555 / helpdesk-morth@gov.in', te: 'హెల్ప్‌లైన్: 0120-4925555', hi: 'हेल्पलाइन: 0120-4925555' },
      nextSteps: {
        en: ['Add digital Driving Licence directly into mParivahan or DigiLocker app for legally recognized phone presentation', 'Smart chip DL delivered via Speed Post'],
        te: ['డిజిలాకర్ లేదా m-పరివాహన్ యాప్‌లో లైసెన్స్‌ను డౌన్‌లోడ్ చేసుకోండి', 'స్మార్ట్ కార్డు స్పీడ్ పోస్ట్ ద్వారా ఇంటికి చేరుతుంది'],
        hi: ['mParivahan या डिजिलॉकर में डिजिटल लाइसेंस जोड़ें']
      }
    },
    links: {
      applyUrl: 'https://sarathi.parivahan.gov.in',
      officialPortalUrl: 'https://parivahan.gov.in',
      portalName: 'Sarathi Citizen Portal (MoRTH)',
      helplineNumber: '0120-4925555'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Driving Licence', 'Sarathi', 'Parivahan', 'Transport', 'LLR', 'Road Safety', 'Motor Vehicle']
  },

  // 13. Mahatma Gandhi NREGA (Rural Development & Employment)
  {
    id: 'mgnrega-job-card',
    code: 'RUR-NREGA-01',
    name: {
      en: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA Job Card)',
      te: 'మహాత్మా గాంధీ జాతీయ గ్రామీణ ఉపాధి హామీ పథకం (ఉపాధి జాబ్ కార్డు)',
      hi: 'महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम (मनरेगा जॉब कार्ड)'
    },
    shortDescription: {
      en: 'Legal statutory guarantee of 100 days of unskilled wage employment per financial year to adult members of rural households.',
      te: 'గ్రామీణ ప్రాంతాల్లోని ప్రతి కుటుంబానికి ఆర్థిక సంవత్సరంలో కనీసం 100 రోజుల వేతన ఉపాధికి చట్టబద్ధమైన హామీ.',
      hi: 'ग्रामीण परिवारों के वयस्क सदस्यों को वित्तीय वर्ष में कम से कम 100 दिनों के अकुशल रोजगार की कानूनी गारंटी।'
    },
    fullDescription: {
      en: 'MGNREGA is one of the world’s largest social security employment programs implemented by the Ministry of Rural Development. Every rural household has a statutory right to obtain a Job Card. Upon demanding work, the Gram Panchayat must provide wage employment within 15 days within a 5 km radius, with wages credited directly into the worker’s bank account via DBT.',
      te: 'మహాత్మా గాంధీ గ్రామీణ ఉపాధి హామీ పథకం గ్రామీణ ప్రాంత పేదలకు జీవనోపాధిని కల్పిస్తుంది. దరఖాస్తు చేసిన 15 రోజుల్లో గ్రామ పంచాయతీ పని కల్పించాలి. కూలీల వేతనాలు నేరుగా వారి బ్యాంక్ లేదా పోస్టాఫీస్ ఖాతాల్లోకి జమ అవుతాయి.',
      hi: 'मनरेगा के तहत ग्रामीण परिवारों को 100 दिन के काम का कानूनी अधिकार है। आवेदन करने के 15 दिनों के भीतर काम उपलब्ध कराया जाता है और मजदूरी सीधे बैंक/डाकघर खाते में अंतरित की जाती है।'
    },
    purpose: {
      en: 'To enhance livelihood security in rural areas by guaranteeing 100 days of wage work and creating durable community infrastructure.',
      te: 'గ్రామీణ ప్రాంతాలలో పేదరికాన్ని నిర్మూలించి ఆర్థిక భరోసా మరియు కనీస జీవన ప్రమాణాలను కల్పించడం.',
      hi: 'ग्रामीण क्षेत्रों में आजीविका सुरक्षा बढ़ाना और सामुदायिक संपत्तियों का निर्माण करना।'
    },
    department: {
      en: 'Ministry of Rural Development (MoRD) / Panchayati Raj',
      te: 'గ్రామీణాభివృద్ధి మంత్రిత్వ శాఖ / పంచాయతీ రాజ్',
      hi: 'ग्रामीण विकास मंत्रालय / पंचायती राज'
    },
    category: 'rural_development',
    targetGroups: ['workers', 'low_income', 'general'],
    keywords: ['nrega', 'mgnrega', 'job card', 'rural employment', '100 days work', 'wage payment', 'gram panchayat job', 'village worker money', 'rozgar guarantee'],
    synonyms: ['rural livelihood employment', 'village guaranteed wages', '100 days labour scheme'],
    location: 'All Rural Gram Panchayats in India',
    lastUpdated: '2026-03-01',
    isDemo: false,
    eligibility: {
      whoCanApply: {
        en: [
          'Adult members of any rural household aged 18 years and above',
          'Willing to do unskilled manual work in local development projects (water conservation, roads, canal desilting)'
        ],
        te: [
          'గ్రామీణ ప్రాంతాల్లో నివసిస్తున్న 18 సంవత్సరాలు పైబడిన వారు',
          'అసంఘటిత శారీరక శ్రమ చేయడానికి సిద్ధంగా ఉన్నవారు'
        ],
        hi: [
          'ग्रामीण परिवार के 18 वर्ष या उससे अधिक आयु के वयस्क सदस्य',
          'अकुशल शारीरिक श्रम करने के इच्छुक नागरिक'
        ]
      },
      conditions: {
        en: [
          'Must be local resident of the Gram Panchayat area',
          'Must possess individual or joint bank/post office savings account seeded with Aadhaar'
        ],
        te: [
          'గ్రామ పంచాయతీ స్థానిక నివాసి అయి ఉండాలి',
          'ఆధార్ సీడెడ్ బ్యాంక్ లేదా పోస్టాఫీస్ ఖాతా ఉండాలి'
        ],
        hi: [
          'संबंधित ग्राम पंचायत का मूल निवासी होना अनिवार्य',
          'आधार से जुड़ा बैंक या डाकघर बचत खाता होना आवश्यक'
        ]
      },
      ageRange: { min: 18, max: 75 },
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'nrega-ration',
        name: { en: 'Ration Card / Proof of Rural Residence', te: 'రేషన్ కార్డు లేదా గ్రామీణ నివాస రుజువు', hi: 'राशन कार्ड या निवास प्रमाण पत्र' },
        description: { en: 'Shows family composition in the Gram Panchayat', te: 'గ్రామంలో నివాసం ఉంటున్నట్లు రుజువు', hi: 'ग्राम पंचायत में निवास का प्रमाण' },
        isMandatory: true,
        acceptableFormats: 'Photocopy',
        instructions: { en: 'All adult members wanting to work must be listed.', te: 'పని చేయదలచిన పెద్దల పేర్లు ఉండాలి.', hi: 'काम करने के इच्छुक सभी वयस्कों के नाम दर्ज हों।' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Apply for Job Card at Gram Panchayat Office', te: 'గ్రామ పంచాయతీ కార్యాలయంలో దరఖాస్తు చేయండి', hi: 'ग्राम पंचायत में आवेदन' },
        description: { en: 'Submit plain paper application or Form 1 to Gram Rozgar Sahayak (GRS) or Panchayat Secretary.', te: 'పంచాయతీ కార్యదర్శికి ఫారమ్ సమర్పించండి.', hi: 'ग्राम रोजगार सहायक या पंचायत सचिव को आवेदन दें।' }
      },
      {
        stepNumber: 2,
        title: { en: 'Job Card Issuance & Demand for Work', te: 'జాబ్ కార్డు జారీ మరియు పని కోరడం', hi: 'जॉब कार्ड प्राप्ति एवं कार्य की मांग' },
        description: { en: 'Free Job Card issued within 15 days. Submit written demand for work and receive dated receipt.', te: '15 రోజుల్లో ఉచితంగా జాబ్ కార్డు లభిస్తుంది; పని కోసం దరఖాస్తు చేయండి.', hi: '15 दिनों में निःशुल्क जॉब कार्ड जारी होता है; काम की मांग करने पर 15 दिन में रोजगार मिलता है।' }
      }
    ],
    postSubmission: {
      timeline: { en: 'Job Card issued within 15 days; Work allocated within 15 days of demand', te: '15 రోజుల్లో జాబ్ కార్డు; దరఖాస్తు చేసిన 15 రోజుల్లో పని', hi: '15 दिन में जॉब कार्ड, 15 दिन में काम' },
      trackingMethod: { en: 'Check muster roll and wage disbursement on nrega.nic.in', te: 'nrega.nic.in లో వేతన వివరాలు చూడండి', hi: 'nrega.nic.in पर मस्टर रोल और भुगतान स्थिति देखें' },
      grievanceContact: { en: 'MGNREGA National Ombudsman / District Programme Coordinator / Toll Free: 1800-345-6770', te: 'టోల్ ఫ్రీ: 1800-345-6770', hi: 'टोल फ्री: 1800-345-6770' },
      nextSteps: {
        en: ['If work is not provided within 15 days, statutory Unemployment Allowance is payable', 'Wages credited weekly or fortnightly directly into bank account via DBT'],
        te: ['15 రోజుల్లో పని కల్పించకపోతే నిరుద్యోగ భృతి పొందే హక్కు ఉంది', 'వేతనాలు నేరుగా బ్యాంక్ ఖాతాలో జమవుతాయి'],
        hi: ['15 दिन में काम न मिलने पर बेरोजगारी भत्ता देय होता है', 'साप्ताहिक मजदूरी सीधे बैंक खाते में आती है']
      }
    },
    links: {
      applyUrl: 'https://nrega.nic.in',
      officialPortalUrl: 'https://nrega.nic.in',
      portalName: 'MGNREGA Public Portal (Ministry of Rural Development)',
      helplineNumber: '1800-345-6770'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['MGNREGA', 'NREGA', 'Job Card', 'Rural Employment', '100 Days Work', 'Livelihood', 'Wages']
  }
];
