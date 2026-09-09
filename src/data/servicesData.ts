import { GovernmentService } from '../types';
import { additionalServices } from './additionalServices';

const baseServicesData: GovernmentService[] = [
  {
    id: 'nsp-scholarship',
    code: 'EDU-NSP-01',
    name: {
      en: 'National Scholarship Portal (Central Sector & Post-Matric)',
      te: 'నేషనల్ స్కాలర్‌షిప్ పోర్టల్ (సెంట్రల్ సెక్టార్ & పోస్ట్-మెట్రిక్)',
      hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (केंद्रीय क्षेत्र एवं मैट्रिकोत्तर)'
    },
    shortDescription: {
      en: 'Financial assistance and scholarship for meritorious students from low-income families pursuing college and university education.',
      te: 'కళాశాల మరియు విశ్వవిద్యాలయ విద్యను అభ్యసిస్తున్న పేద మరియు ప్రతిభావంతులైన విద్యార్థులకు ప్రభుత్వ ఆర్థిక సహాయం మరియు స్కాలర్‌షిప్.',
      hi: 'कॉलेज और विश्वविद्यालय स्तर पर पढ़ाई कर रहे कम आय वाले परिवारों के मेधावी विद्यार्थियों हेतु वित्तीय सहायता और छात्रवृत्ति।'
    },
    fullDescription: {
      en: 'The National Scholarship Portal (NSP) is a one-stop electronic platform created by the Government of India to streamline scholarship applications. It ensures direct benefit transfer (DBT) of funds into verified student bank accounts for tuition, books, and living allowances without any middlemen.',
      te: 'నేషనల్ స్కాలర్‌షిప్ పోర్టల్ (NSP) అనేది కేంద్ర ప్రభుత్వం ప్రారంభించిన ఒకే వేదిక. ఇది కళాశాల ఫీజులు, పుస్తకాలు మరియు జీవన భత్యాల కోసం విద్యార్థుల ధృవీకరించిన బ్యాంక్ ఖాతాలలోకి నేరుగా (DBT) నిధులను జమ చేస్తుంది.',
      hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) भारत सरकार का एक मंच है जो विभिन्न मंत्रालयों की छात्रवृत्ति योजनाओं को एकीकृत करता है। यह ट्यूशन फीस, पुस्तकों और भत्ते की राशि सीधे छात्रों के बैंक खातों (DBT) में पहुंचाता है।'
    },
    purpose: {
      en: 'To support economically disadvantaged students in completing graduation, post-graduation, and professional technical degrees.',
      te: 'ఆర్థికంగా వెనుకబడిన విద్యార్థులు డిగ్రీ, పీజీ మరియు ఇంజనీరింగ్/వైద్య విద్యను పూర్తి చేయడానికి ఆర్థిక అండగా నిలవడం.',
      hi: 'आर्थिक रूप से कमजोर विद्यार्थियों को स्नातक, परास्नातक एवं व्यावसायिक पाठ्यक्रम पूरे करने में वित्तीय सहयोग प्रदान करना।'
    },
    department: {
      en: 'Ministry of Education & Ministry of Social Justice',
      te: 'విద్యా మంత్రిత్వ శాఖ & సామాజిక న్యాయ మంత్రిత్వ శాఖ',
      hi: 'शिक्षा मंत्रालय एवं सामाजिक न्याय और अधिकारिता मंत्रालय'
    },
    category: 'education',
    targetGroups: ['students', 'youth', 'low_income'],
    eligibility: {
      whoCanApply: {
        en: [
          'Regular full-time students enrolled in recognized schools, colleges, or universities',
          'Students securing 50% or above marks in previous qualifying board/semester examinations',
          'Candidates with valid domicile certificate and active student bonafide certificate'
        ],
        te: [
          'గుర్తింపు పొందిన కళాశాలలు లేదా విశ్వవిద్యాలయాలలో రెగ్యులర్ కోర్సులు చదువుతున్న విద్యార్థులు',
          'మునుపటి పరీక్షలలో కనీసం 50% లేదా అంతకంటే ఎక్కువ మార్కులు సాధించిన విద్యార్థులు',
          'చెల్లుబాటు అయ్యే స్థానికత మరియు బోనఫైడ్ సర్టిఫికెట్ కలిగి ఉన్న అభ్యర్థులు'
        ],
        hi: [
          'मान्यता प्राप्त स्कूलों, कॉलेजों या विश्वविद्यालयों में नियमित अध्ययनरत छात्र',
          'पिछली कक्षा या बोर्ड परीक्षा में कम से कम 50% अंक प्राप्त करने वाले विद्यार्थी',
          'सत्यापित मूल निवास प्रमाण पत्र और कॉलेज बोनाफाइड धारक उम्मीदवार'
        ]
      },
      conditions: {
        en: [
          'Total annual family income from all sources must not exceed ₹2,50,000 to ₹8,00,000 (depending on sub-scheme)',
          'Applicant must not be receiving any duplicate central scholarship simultaneously',
          'Bank account must be Aadhaar-seeded for DBT transaction'
        ],
        te: [
          'కుటుంబ వార్షిక ఆదాయం అన్ని మార్గాల ద్వారా ₹2,50,000 నుండి ₹8,00,000 మించరాదు (పథకాన్ని బట్టి)',
          'అభ్యర్థి ఒకేసారి ఇతర కేంద్ర ప్రభుత్వ స్కాలర్‌షిప్‌లను పొందకూడదు',
          'బ్యాంక్ ఖాతా తప్పనిసరిగా ఆధార్‌తో సీడ్ (లింక్) అయి ఉండాలి'
        ],
        hi: [
          'सभी स्रोतों से वार्षिक पारिवारिक आय ₹2,50,000 से ₹8,00,000 से अधिक नहीं होनी चाहिए (योजनानुसार)',
          'एक ही समय में दोहरी केंद्रीय छात्रवृत्ति का लाभ नहीं लिया जा सकता',
          'बैंक खाता आधार से अनिवार्य रूप से लिंक और DBT सक्षम होना चाहिए'
        ]
      },
      ageRange: { min: 14, max: 30 },
      maxAnnualIncome: 250000,
      citizenshipRequired: true,
      notes: {
        en: 'Renewal candidates must apply every year using their previous NSP Application ID.',
        te: 'రెన్యూవల్ విద్యార్థులు మునుపటి NSP అప్లికేషన్ IDని ఉపయోగించి ప్రతి సంవత్సరం దరఖాస్తు చేసుకోవాలి.',
        hi: 'नवीनीकरण (रिन्यूअल) वाले छात्र अपने पुराने एप्लिकेशन आईडी से हर वर्ष आवेदन करें।'
      }
    },
    documents: [
      {
        id: 'nsp-aadhaar',
        name: { en: 'Aadhaar Card of Student', te: 'విద్యార్థి ఆధార్ కార్డు', hi: 'विद्यार्थी का आधार कार्ड' },
        description: { en: 'Primary identity and age verification', te: 'ప్రాథమిక గుర్తింపు మరియు వయస్సు ధృవీకరణ', hi: 'प्राथमिक पहचान एवं आयु प्रमाण' },
        isMandatory: true,
        acceptableFormats: 'PDF / JPEG (Max 200 KB)',
        instructions: {
          en: 'Ensure name and date of birth match your 10th standard certificate and mobile number is linked.',
          te: 'పేరు, పుట్టిన తేదీ మీ 10వ తరగతి సర్టిఫికెట్‌తో సరిపోలాలి మరియు మొబైల్ లింక్ అయి ఉండాలి.',
          hi: 'नाम और जन्म तिथि 10वीं के प्रमाणपत्र से मेल खानी चाहिए, मोबाइल नंबर लिंक होना आवश्यक है।'
        }
      },
      {
        id: 'nsp-income',
        name: { en: 'Income Certificate (Current Financial Year)', te: 'ఆదాయ ధృవీకరణ పత్రం (ప్రస్తుత ఆర్థిక సంవత్సరం)', hi: 'आय प्रमाण पत्र (वर्तमान वित्तीय वर्ष)' },
        description: { en: 'Issued by competent Tehsildar / Revenue Authority', te: 'తహశీల్దార్ లేదా రెవెన్యూ అధికారి జారీ చేసిన పత్రం', hi: 'सक्षम तहसीलदार / राजस्व अधिकारी द्वारा जारी' },
        isMandatory: true,
        acceptableFormats: 'PDF (Max 200 KB)',
        instructions: {
          en: 'Must have digital signature or barcode verification and must not be expired.',
          te: 'డిజిటల్ సంతకం లేదా బార్‌కోడ్ కలిగి ఉండాలి మరియు చెల్లుబాటు వ్యవధిలో ఉండాలి.',
          hi: 'डिजिटल हस्ताक्षर या बारकोड युक्त और वैध समयावधि का होना चाहिए।'
        }
      },
      {
        id: 'nsp-bonafide',
        name: { en: 'Bonafide Student Certificate', te: 'బోనఫైడ్ విద్యార్థి ధృవీకరణ పత్రం', hi: 'बोनाफाइड छात्र प्रमाण पत्र' },
        description: { en: 'Issued by Head of the Institute / College Principal', te: 'కళాశాల ప్రిన్సిపాల్ సంతకం చేసిన పత్రం', hi: 'कॉलेज प्राचार्य / संस्थान प्रमुख द्वारा हस्ताक्षरित' },
        isMandatory: true,
        acceptableFormats: 'PDF (Max 200 KB)',
        instructions: {
          en: 'Download NSP bonafide template, get signature & stamp from your institute, and upload.',
          te: 'NSP పోర్టల్ నుండి ఫార్మాట్‌ను డౌన్‌లోడ్ చేసి, ప్రిన్సిపాల్ సంతకం మరియు స్టాంప్ వేయించి అప్‌లోడ్ చేయండి.',
          hi: 'पोर्टल से प्रारूप डाउनलोड करें, संस्थान प्रमुख की मुहर व हस्ताक्षर कराकर अपलोड करें।'
        }
      },
      {
        id: 'nsp-marksheet',
        name: { en: 'Previous Academic Marksheet', te: 'మునుపటి పరీక్ష మార్కుల జాబితా', hi: 'पिछली परीक्षा की अंकतालिका' },
        description: { en: 'Last qualifying exam marksheet (10th/12th/Semester)', te: 'చివరి పరీక్ష మార్కుల జాబితా', hi: 'अंतिम उत्तीर्ण परीक्षा की मार्कशीट' },
        isMandatory: true,
        acceptableFormats: 'PDF (Max 200 KB)',
        instructions: {
          en: 'Clear color scan showing roll number, pass status, and percentage/CGPA.',
          te: 'రోల్ నంబర్ మరియు శాతం స్పష్టంగా కనిపించే కలర్ స్కాన్ కాపీ.',
          hi: 'रोल नंबर और प्राप्तांक प्रतिशत स्पष्ट रूप से दिखने वाली प्रति।'
        }
      },
      {
        id: 'nsp-bank',
        name: { en: 'Student Bank Passbook Copy', te: 'బ్యాంక్ పాస్‌బుక్ కాపీ', hi: 'बैंक पासबुक की प्रति' },
        description: { en: 'Active individual savings account in student name', te: 'విద్యార్థి పేరు మీద ఉన్న సేవింగ్స్ బ్యాంక్ ఖాతా', hi: 'छात्र के नाम से सक्रिय बचत बैंक खाता' },
        isMandatory: true,
        acceptableFormats: 'PDF / JPEG (Max 200 KB)',
        instructions: {
          en: 'First page showing account number, IFSC code, and photo. Must not be a joint account.',
          te: 'ఖాతా సంఖ్య మరియు IFSC కోడ్ స్పష్టంగా ఉండాలి. జాయింట్ అకౌంట్ అనుమతించబడదు.',
          hi: 'खाता संख्या और IFSC कोड स्पष्ट दिखना चाहिए। संयुक्त खाता मान्य नहीं है।'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'New Registration on National Scholarship Portal',
          te: 'NSP పోర్టల్‌లో కొత్త రిజిస్ట్రేషన్ చేసుకోండి',
          hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल पर नया पंजीकरण करें'
        },
        description: {
          en: 'Visit scholarships.gov.in and click "New Student Registration". Enter your Aadhaar number, verified mobile number, and receive One-Time Password (OTP) to create your NSP OTR (One Time Registration) ID.',
          te: 'scholarships.gov.in వెబ్‌సైట్ సందర్శించి "New Student Registration" పై క్లిక్ చేయండి. ఆధార్ నంబర్, మొబైల్ OTP ద్వారా NSP OTR IDని సృష్టించండి.',
          hi: 'scholarships.gov.in पर जाएं और "New Student Registration" पर क्लिक करें। अपने आधार और मोबाइल ओटीपी से OTR आईडी प्राप्त करें।'
        },
        tips: {
          en: 'Save your Application ID and Password safely in your notes or email.',
          te: 'మీ అప్లికేషన్ ID మరియు పాస్‌వర్డ్‌ను సురక్షితంగా నోట్ చేసుకోండి.',
          hi: 'अपना एप्लिकेशन आईडी और पासवर्ड सुरक्षित स्थान पर नोट कर लें।'
        },
        estimatedTime: '15-20 Mins'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Fill Academic & Personal Profile Details',
          te: 'విద్యా మరియు వ్యక్తిగత వివరాలను నమోదు చేయండి',
          hi: 'शैक्षणिक एवं व्यक्तिगत विवरण दर्ज करें'
        },
        description: {
          en: 'Log in with your Application ID. Fill in your college name, course code, annual income, domicile state, and academic percentage accurately.',
          te: 'మీ IDతో లాగిన్ అయి కళాశాల పేరు, కోర్సు, వార్షిక ఆదాయం, మార్కులు సరిగ్గా పూరించండి.',
          hi: 'लॉगिन करें और अपने कॉलेज का नाम, पाठ्यक्रम, पारिवारिक आय और प्राप्तांक ध्यानपूर्वक भरें।'
        },
        estimatedTime: '20 Mins'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Upload Required Documents & Verify Preview',
          te: 'పత్రాలను అప్‌లోడ్ చేసి ప్రివ్యూ సరిచూసుకోండి',
          hi: 'दस्तावेज अपलोड करें और पूर्वावलोकन जांचें'
        },
        description: {
          en: 'Upload clear scans of your income certificate, bonafide certificate, marksheet, and bank passbook (below 200KB each). Review the preview carefully.',
          te: 'ఆదాయ సర్టిఫికెట్, బోనఫైడ్, మార్కుల లిస్ట్ మరియు బ్యాంక్ కాపీలను అప్‌లోడ్ చేసి ప్రివ్యూ తనిఖీ చేయండి.',
          hi: 'आय, बोनाफाइड, मार्कशीट व पासबुक की साफ प्रतियां (200KB से कम) अपलोड कर जांचें।'
        },
        estimatedTime: '15 Mins'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Final Submit & Download Acknowledgment Receipt',
          te: 'ఫైనల్ సబ్మిట్ చేసి రసీదు డౌన్‌లోడ్ చేయండి',
          hi: 'अंतिम सबमिट करें और पावती रसीद डाउनलोड करें'
        },
        description: {
          en: 'Click Final Submit. Take two printouts of the submitted application form and the system acknowledgement slip for institute verification.',
          te: 'ఫైనల్ సబ్మిట్ బటన్ నొక్కి, దరఖాస్తు కాపీని ప్రింట్ తీసుకోండి.',
          hi: 'फाइनल सबमिट बटन दबाएं और भरे हुए फॉर्म की दो प्रतियां प्रिंट निकालें।'
        },
        tips: {
          en: 'Submit one physical copy along with document photocopies to your college scholarship nodal officer within 7 days.',
          te: '7 రోజులలోపు మీ కళాశాల స్కాలర్‌షిప్ అధికారికి ఒక హార్డ్ కాపీని సమర్పించండి.',
          hi: 'फॉर्म की एक प्रति सभी दस्तावेजों के साथ अपने कॉलेज के नोडल अधिकारी को 7 दिनों में जमा करें।'
        },
        estimatedTime: '5 Mins'
      }
    ],
    postSubmission: {
      timeline: {
        en: '45-90 Days after institute and state nodal verification',
        te: 'కళాశాల మరియు రాష్ట్ర నోడల్ ధృవీకరణ తర్వాత 45-90 రోజులు',
        hi: 'संस्थान और राज्य नोडल सत्यापन के 45-90 दिन बाद'
      },
      trackingMethod: {
        en: 'Track status via NSP Portal > "Check Your Status" using Application ID and Date of Birth.',
        te: 'NSP పోర్టల్ లో "Check Your Status" ద్వారా మీ అప్లికేషన్ IDతో ట్రాక్ చేయవచ్చు.',
        hi: 'NSP पोर्टल पर "Check Your Status" लिंक पर एप्लिकेशन आईडी दर्ज कर स्थिति देखें।'
      },
      grievanceContact: {
        en: 'Toll-Free National Helpdesk: 0120-6619540 | Email: helpdesk@nsp.gov.in',
        te: 'టోల్-ఫ్రీ జాతీయ హెల్ప్‌డెస్క్: 0120-6619540 | ఈమెయిల్: helpdesk@nsp.gov.in',
        hi: 'टोल-फ्री हेल्पलाइन: 0120-6619540 | ईमेल: helpdesk@nsp.gov.in'
      },
      nextSteps: {
        en: [
          'Institute Verification: Your college verifies your admission on their portal',
          'District/State Nodal Officer verification of income and marks',
          'Ministry Merit List generation and sanction order release',
          'Direct Benefit Transfer (DBT) credit directly into your bank account'
        ],
        te: [
          'కళాశాల ధృవీకరణ: మీ కాలేజీ వారు మీ అడ్మిషన్‌ను ధృవీకరిస్తారు',
          'జిల్లా మరియు రాష్ట్ర నోడల్ అధికారుల మార్కులు మరియు ఆదాయ పరిశీలన',
          'మెరిట్ జాబితా మరియు నిధుల మంజూరు',
          'బ్యాంక్ ఖాతాలో నేరుగా నిధుల జమ'
        ],
        hi: [
          'संस्थान सत्यापन: कॉलेज द्वारा आपके प्रवेश का ऑनलाइन सत्यापन',
          'जिला एवं राज्य नोडल अधिकारी द्वारा आय और अंकों की जांच',
          'मंत्रालय द्वारा मेरिट सूची और स्वीकृति आदेश जारी करना',
          'बैंक खाते में सीधे DBT द्वारा छात्रवृत्ति राशि का भुगतान'
        ]
      }
    },
    links: {
      applyUrl: 'https://scholarships.gov.in',
      officialPortalUrl: 'https://scholarships.gov.in',
      portalName: 'National Scholarship Portal (scholarships.gov.in)',
      helplineNumber: '0120-6619540'
    },
    activeDeadline: '31 October 2026',
    status: 'active',
    popular: true,
    tags: ['Scholarship', 'College', 'Education', 'DBT', 'Students']
  },
  {
    id: 'pm-kisan',
    code: 'AGRI-PMKISAN-02',
    name: {
      en: 'PM-Kisan Samman Nidhi Yojana',
      te: 'పీఎం-కిసాన్ సమ్మాన్ నిధి యోజన',
      hi: 'प्रधानमंत्री किसान सम्मान निधि योजना'
    },
    shortDescription: {
      en: 'Annual financial benefit of ₹6,000 in three equal installments of ₹2,000 directly to landholding farmer families.',
      te: 'భూమి ఉన్న రైతు కుటుంబాలకు సంవత్సరానికి ₹6,000 చొప్పున మూడు విడతల్లో ₹2,000 నేరుగా అందించే ఆర్థిక పథకం.',
      hi: 'भूमिधारक किसान परिवारों को प्रति वर्ष ₹6,000 की वित्तीय सहायता तीन समान किस्तों (₹2,000) में सीधे बैंक खाते में।'
    },
    fullDescription: {
      en: 'PM-Kisan Samman Nidhi is a Central Sector Scheme providing income support to all landholding farmers families across the country to supplement their financial needs for procuring agricultural inputs and domestic needs.',
      te: 'పీఎం-కిసాన్ అనేది వ్యవసాయ అవసరాలు, విత్తనాలు, ఎరువుల కొనుగోలుకు రైతులకు అండగా ఉండేందుకు కేంద్ర ప్రభుత్వం అందిస్తున్న ప్రత్యక్ష ఆర్థిక సహాయ పథకం.',
      hi: 'प्रधानमंत्री किसान सम्मान निधि एक केंद्रीय क्षेत्र योजना है जिसका उद्देश्य किसानों को कृषि इनपुट जैसे बीज, खाद आदि खरीदने हेतु नियमित वित्तीय सहायता देना है।'
    },
    purpose: {
      en: 'To provide assured financial assistance to farmers before crop cycles, reducing dependence on non-institutional moneylenders.',
      te: 'పంట కాలంలో రైతులకు పెట్టుబడి సహాయం అందించడం మరియు రుణాల భారాన్ని తగ్గించడం.',
      hi: 'फसल चक्र से पहले किसानों को पूंजीगत सहायता प्रदान कर साहूकारों पर निर्भरता समाप्त करना।'
    },
    department: {
      en: 'Department of Agriculture & Farmers Welfare',
      te: 'వ్యవసాయం మరియు రైతు సంక్షేమ శాఖ',
      hi: 'कृषि एवं किसान कल्याण विभाग'
    },
    category: 'agriculture',
    targetGroups: ['farmers', 'low_income'],
    eligibility: {
      whoCanApply: {
        en: [
          'All cultivable landholding farmer families with land records registered in their name',
          'Small and marginal farmers holding agricultural land in rural/urban records',
          'Valid Aadhaar card holder with land Pattadar passbook'
        ],
        te: [
          'తమ పేరు మీద సాగుభూమి పట్టాదారు పాస్‌బుక్ ఉన్న రైతు కుటుంబాలు',
          'గ్రామీణ మరియు పట్టణ రెవెన్యూ రికార్డుల్లో భూమి నమోదైన సన్నకారు రైతులు',
          'చెల్లుబాటు అయ్యే ఆధార్ కార్డు మరియు పట్టాదారు పాస్‌బుక్ ఉన్న రైతులు'
        ],
        hi: [
          'वे सभी किसान परिवार जिनके नाम पर खेती योग्य भूमि के अभिलेख दर्ज हैं',
          'छोटे एवं सीमांत किसान जिनके नाम राजस्व रिकॉर्ड में जमीन है',
          'वैध आधार कार्ड और भू-अभिलेख (खसरा-खतौनी) धारक किसान'
        ]
      },
      conditions: {
        en: [
          'Institutional landholders and serving/retired government employees are not eligible',
          'Persons paying income tax in the last assessment year are excluded',
          'Mandatory biometric or OTP-based e-KYC must be completed'
        ],
        te: [
          'సంస్థాగత భూ యజమానులు మరియు ప్రభుత్వ ఉద్యోగులు అర్హులు కారు',
          'గత సంవత్సరంలో ఆదాయపు పన్ను (Income Tax) చెల్లించిన వారు అర్హులు కారు',
          'తప్పనిసరిగా బయోమెట్రిక్ లేదా OTP ఆధారిత e-KYC పూర్తి చేయాలి'
        ],
        hi: [
          'संस्थागत भूमिधारक और सेवारत/सेवानिवृत्त सरकारी कर्मचारी पात्र नहीं हैं',
          'पिछले वर्ष में आयकर भरने वाले व्यक्ति योजना से बाहर हैं',
          'अनिवार्य आधार आधारित e-KYC पूरा होना आवश्यक है'
        ]
      },
      ageRange: { min: 18, max: 99 },
      citizenshipRequired: true,
      notes: {
        en: 'Ensure your land record (ROR 1B / Khatauni) is updated in the state revenue portal.',
        te: 'మీ భూమి రికార్డులు (ROR 1B / ఖతౌని) రెవెన్యూ పోర్టల్‌లో అప్‌డేట్ అయి ఉన్నాయో లేదో చూసుకోండి.',
        hi: 'सुनिश्चित करें कि आपकी खतौनी राज्य के भू-अभिलेख पोर्टल पर डिजिटल रूप से प्रमाणित है।'
      }
    },
    documents: [
      {
        id: 'pmk-aadhaar',
        name: { en: 'Aadhaar Card of Landowner', te: 'రైతు ఆధార్ కార్డు', hi: 'भूमिधारक का आधार कार्ड' },
        description: { en: 'Aadhaar linked to active mobile number for e-KYC', te: 'e-KYC కోసం మొబైల్‌తో లింక్ అయిన ఆధార్', hi: 'e-KYC हेतु मोबाइल से जुड़ा आधार कार्ड' },
        isMandatory: true,
        acceptableFormats: 'PDF / Image (Max 200 KB)',
        instructions: {
          en: 'Name on Aadhaar must match the name recorded in the land deed/passbook.',
          te: 'ఆధార్‌లోని పేరు పట్టాదారు పాస్‌బుక్‌లోని పేరుతో సరిపోలాలి.',
          hi: 'आधार पर नाम और जमीन के कागजात पर नाम बिल्कुल समान होना चाहिए।'
        }
      },
      {
        id: 'pmk-land',
        name: { en: 'Land Ownership Document / Khatauni / Pattadar Passbook', te: 'పట్టాదారు పాస్‌బుక్ / భూమి హక్కు పత్రం', hi: 'भू-अभिलेख / खतौनी / पट्टा पासबुक' },
        description: { en: 'Certified copy of land record showing survey numbers', te: 'సర్వే నంబర్లు కనిపించే ధృవీకరించిన భూమి రికార్డు', hi: 'खसरा/खतौनी की सत्यापित नकल' },
        isMandatory: true,
        acceptableFormats: 'PDF (Max 500 KB)',
        instructions: {
          en: 'Upload clear document displaying survey number, acreage, and village code.',
          te: 'సర్వే నంబర్, విస్తీర్ణం మరియు గ్రామ కోడ్ స్పష్టంగా కనిపించాలి.',
          hi: 'सर्वे नंबर, रकबा और ग्राम कोड स्पष्ट रूप से दिखने वाली प्रति।'
        }
      },
      {
        id: 'pmk-bank',
        name: { en: 'Bank Account Details (Aadhaar Seeded)', te: 'బ్యాంక్ ఖాతా వివరాలు (ఆధార్ లింక్)', hi: 'बैंक खाता विवरण (आधार सीडेड)' },
        description: { en: 'Savings bank account linked to NPCI mapper', te: 'NPCI తో లింక్ అయిన సేవింగ్స్ ఖాతా', hi: 'NPCI मैपर से जुड़ा बैंक खाता' },
        isMandatory: true,
        acceptableFormats: 'PDF / Image',
        instructions: {
          en: 'Ensure your bank account is active with NPCI DBT mapper to avoid payment return.',
          te: 'డబ్బులు తిరిగి వెళ్లకుండా మీ ఖాతా NPCIతో లింక్ అయి ఉండాలి.',
          hi: 'सुनिश्चित करें कि खाता NPCI DBT मैपर पर सक्रिय है।'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Visit PM-Kisan Portal and Open Farmers Corner',
          te: 'PM-Kisan పోర్టల్ సందర్శించి ఫార్మర్స్ కార్నర్‌కు వెళ్ళండి',
          hi: 'पीएम-किसान पोर्टल पर जाएं और "फार्मर्स कॉर्नर" खोलें'
        },
        description: {
          en: 'Go to pmkisan.gov.in. Under the "Farmers Corner" section, click on "New Farmer Registration".',
          te: 'pmkisan.gov.in లో "Farmers Corner" విభాగంలో "New Farmer Registration" ఎంచుకోండి.',
          hi: 'pmkisan.gov.in पर जाएं और "Farmers Corner" में "New Farmer Registration" चुनें।'
        },
        estimatedTime: '5 Mins'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Select Rural/Urban Farmer & Enter Aadhaar Details',
          te: 'గ్రామీణ/పట్టణ రైతును ఎంచుకుని ఆధార్ వివరాలు ఇవ్వండి',
          hi: 'ग्रामीण/शहरी किसान चुनें और आधार संख्या दर्ज करें'
        },
        description: {
          en: 'Choose "Rural Farmer Registration" or "Urban Farmer Registration", enter your Aadhaar number, state, and mobile number to receive OTP.',
          te: 'గ్రామీణ లేదా పట్టణ రైతును ఎంచుకుని, ఆధార్ మరియు మొబైల్ నంబర్ ఇచ్చి OTP పొందండి.',
          hi: 'ग्रामीण या शहरी विकल्प चुनें, आधार व मोबाइल नंबर डालकर OTP सत्यापित करें।'
        },
        estimatedTime: '10 Mins'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Input Land Survey & Ownership Details',
          te: 'భూమి సర్వే నంబర్ మరియు యాజమాన్య వివరాలు ఇవ్వండి',
          hi: 'भूमि सर्वे एवं खसरा-खतौनी विवरण दर्ज करें'
        },
        description: {
          en: 'Enter district, sub-district, block, village, land Khata number, survey number, and area in hectares.',
          te: 'జిల్లా, మండలం, గ్రామం, ఖాతా నంబర్, సర్వే నంబర్ మరియు విస్తీర్ణం వివరాలను పూరించండి.',
          hi: 'जिला, ब्लॉक, गांव, खाता संख्या, खसरा नंबर और क्षेत्रफल (हेक्टेयर) भरें।'
        },
        estimatedTime: '15 Mins'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Complete e-KYC & Submit Application',
          te: 'e-KYC పూర్తి చేసి దరఖాస్తు సమర్పించండి',
          hi: 'e-KYC पूरा करें और आवेदन जमा करें'
        },
        description: {
          en: 'Verify biometrics or Aadhaar OTP to finalize submission. Note down your Farmer Registration ID.',
          te: 'ఆధార్ OTP ద్వారా e-KYC పూర్తి చేసి ఫార్మర్ రిజిస్ట్రేషన్ IDని భద్రపరుచుకోండి.',
          hi: 'आधार ओटीपी से e-KYC पूर्ण करें और पंजीकरण संख्या सुरक्षित रख लें।'
        },
        estimatedTime: '5 Mins'
      }
    ],
    postSubmission: {
      timeline: {
        en: 'Next scheduled installment cycle (April-July, August-November, December-March)',
        te: 'తదుపరి కిస్తీ విడుదల సమయంలో (ఏప్రిల్-జూలై, ఆగస్టు-నవంబర్, డిసెంబర్-మార్చి)',
        hi: 'आगामी किस्त चक्र (अप्रैल-जुलाई, अगस्त-नवंबर, दिसंबर-मार्च) में'
      },
      trackingMethod: {
        en: 'Check "Know Your Status" on pmkisan.gov.in using Registration Number or Aadhaar.',
        te: 'pmkisan.gov.in లో "Know Your Status" లింక్ ద్వారా స్థితిని చూడవచ్చు.',
        hi: 'pmkisan.gov.in पर "Know Your Status" पर रजिस्ट्रेशन नंबर दर्ज कर स्थिति देखें।'
      },
      grievanceContact: {
        en: 'PM-Kisan Helpline Numbers: 155261 / 011-24300606 / Toll Free: 1800-115-526',
        te: 'పీఎం-కిసాన్ హెల్ప్‌లైన్: 155261 / 011-24300606 / టోల్-ఫ్రీ: 1800-115-526',
        hi: 'पीएम-किसान हेल्पलाइन: 155261 / 011-24300606 / टोल-फ्री: 1800-115-526'
      },
      nextSteps: {
        en: [
          'State revenue authority verifies land records against digitized land registry',
          'Aadhaar e-KYC and bank NPCI mapping verification',
          'Beneficiary list displayed in Village Panchayat office and portal',
          'Direct installment credit of ₹2,000 every 4 months'
        ],
        te: [
          'రాష్ట్ర రెవెన్యూ శాఖ ద్వారా మీ భూమి రికార్డుల పరిశీలన',
          'ఆధార్ e-KYC మరియు బ్యాంక్ లింక్ ధృవీకరణ',
          'గ్రామ పంచాయతీ మరియు పోర్టల్‌లో లబ్ధిదారుల జాబితా ప్రదర్శన',
          'ప్రతి 4 నెలలకు ఒకసారి ₹2,000 ఖాతాలో జమ'
        ],
        hi: [
          'राज्य राजस्व विभाग द्वारा भू-अभिलेखों का डिजिटल सत्यापन',
          'आधार e-KYC और बैंक खाते के NPCI मैपिंग की जांच',
          'ग्राम पंचायत और पोर्टल पर लाभार्थी सूची में नाम जुड़ना',
          'प्रत्येक 4 माह में ₹2,000 की किस्त सीधे खाते में'
        ]
      }
    },
    links: {
      applyUrl: 'https://pmkisan.gov.in',
      officialPortalUrl: 'https://pmkisan.gov.in',
      portalName: 'PM-Kisan Official Portal (pmkisan.gov.in)',
      helplineNumber: '155261'
    },
    activeDeadline: 'Open Year Round (e-KYC Mandatory)',
    status: 'open_yearly',
    popular: true,
    tags: ['Agriculture', 'Farmers', 'Kisan', 'Income Support', 'DBT']
  },
  {
    id: 'ayushman-bharat',
    code: 'HLT-PMJAY-03',
    name: {
      en: 'Ayushman Bharat PM-JAY (Golden Card)',
      te: 'ఆయుష్మాన్ భారత్ పీఎం-జేఏవై (గోల్డెన్ హెల్త్ కార్డు)',
      hi: 'आयुष्मान भारत पीएम-जय (गोल्डन कार्ड)'
    },
    shortDescription: {
      en: 'Free cashless health insurance cover up to ₹5,00,000 per family per year for secondary and tertiary care hospitalization.',
      te: 'ద్వితీయ మరియు తృతీయ స్థాయి ఆసుపత్రి చికిత్సల కోసం కుటుంబానికి సంవత్సరానికి ₹5,00,000 వరకు ఉచిత నగదు రహిత ఆరోగ్య బీమా.',
      hi: 'द्वितीयक एवं तृतीयक अस्पताल में भर्ती के लिए प्रति परिवार प्रति वर्ष ₹5,00,000 तक का निःशुल्क कैशलेस स्वास्थ्य कवर।'
    },
    fullDescription: {
      en: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the world’s largest government-funded healthcare assurance scheme. It provides free medical treatment across empaneled public and private hospitals across India covering 1,900+ procedures including cardiac surgery, oncology, and joint replacements.',
      te: 'ఆయుష్మాన్ భారత్ (PM-JAY) అనేది ప్రపంచంలోనే అతిపెద్ద ప్రభుత్వ ఆరోగ్య పథకం. ఇది భారతదేశవ్యాప్తంగా ప్రభుత్వ మరియు ప్రైవేట్ ఆసుపత్రులలో ఉచిత శస్త్రచికిత్సలు, క్యాన్సర్ మరియు గుండె జబ్బుల చికిత్సలను అందిస్తుంది.',
      hi: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (PM-JAY) विश्व की सबसे बड़ी सरकारी स्वास्थ्य योजना है। यह देश भर के सूचीबद्ध सरकारी एवं निजी अस्पतालों में 1,900 से अधिक उपचारों हेतु कैशलेस सुविधा देती है।'
    },
    purpose: {
      en: 'To eliminate catastrophic out-of-pocket health expenditures and provide quality medical care to vulnerable citizens.',
      te: 'పేద ప్రజలకు నాణ్యమైన వైద్యాన్ని ఉచితంగా అందించడం మరియు వైద్య ఖర్చుల భారాన్ని నివారించడం.',
      hi: 'गरीब और मध्यमवर्गीय परिवारों को गंभीर बीमारियों के इलाज में आने वाले भारी खर्च से सुरक्षा प्रदान करना।'
    },
    department: {
      en: 'National Health Authority (Ministry of Health & Family Welfare)',
      te: 'జాతీయ ఆరోగ్య సంస్థ (ఆరోగ్య మరియు కుటుంబ సంక్షేమ శాఖ)',
      hi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण (स्वास्थ्य एवं परिवार कल्याण मंत्रालय)'
    },
    category: 'healthcare',
    targetGroups: ['all', 'low_income', 'senior_citizens', 'women'],
    eligibility: {
      whoCanApply: {
        en: [
          'Families identified in Socio-Economic Caste Census (SECC 2011) database',
          'Active Ration Card / Food Security Card holding families',
          'All senior citizens aged 70 years and above (irrespective of income under PM-JAY Vaya Vandana expansion)'
        ],
        te: [
          'సామాజిక ఆర్థిక సర్వే (SECC) జాబితాలో పేరున్న కుటుంబాలు',
          'రేషన్ కార్డు / ఆహార భద్రతా కార్డు కలిగిన కుటుంబాలు',
          '70 ఏళ్లు మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న వృద్ధులు (ఆదాయంతో సంబంధం లేకుండా)'
        ],
        hi: [
          'सामाजिक-आर्थिक जाति जनगणना (SECC 2011) में सूचीबद्ध परिवार',
          'सक्रिय राशन कार्ड / खाद्य सुरक्षा कार्ड धारक परिवार',
          '70 वर्ष या उससे अधिक आयु के सभी वरिष्ठ नागरिक (आय सीमा की बाध्यता नहीं)'
        ]
      },
      conditions: {
        en: [
          'No restriction on family size, age, or gender',
          'Pre-existing conditions are covered from Day 1 of card issuance',
          'Beneficiary must undergo e-KYC verification at an empaneled hospital or CSC'
        ],
        te: [
          'కుటుంబ సభ్యుల సంఖ్యపై లేదా వయస్సుపై ఎలాంటి పరిమితి లేదు',
          'కార్డు జారీ అయిన మొదటి రోజు నుంచే మునుపటి వ్యాధులకు కూడా చికిత్స లభిస్తుంది',
          'ఆసుపత్రి లేదా CSC కేంద్రంలో e-KYC పూర్తి చేసుకోవాలి'
        ],
        hi: [
          'परिवार के सदस्यों की संख्या या आयु पर कोई प्रतिबंध नहीं',
          'कार्ड बनने के पहले दिन से ही सभी पुरानी बीमारियां कवर',
          'अस्पताल के आयुष्मान मित्र या CSC केंद्र पर e-KYC आवश्यक'
        ]
      },
      ageRange: { min: 0, max: 100 },
      citizenshipRequired: true,
      notes: {
        en: 'Senior citizens aged 70+ receive a dedicated distinct card with ₹5 Lakh separate top-up coverage.',
        te: '70 ఏళ్లు పైబడిన వయోవృద్ధులకు ప్రత్యేకంగా ₹5 లక్షల అదనపు కవరేజ్ లభిస్తుంది.',
        hi: '70+ आयु के वरिष्ठ नागरिकों हेतु अलग से ₹5 लाख का विशेष टॉप-अप कार्ड उपलब्ध है।'
      }
    },
    documents: [
      {
        id: 'ab-aadhaar',
        name: { en: 'Aadhaar Card of Family Members', te: 'కుటుంబ సభ్యుల ఆధార్ కార్డులు', hi: 'परिवार के सदस्यों का आधार कार्ड' },
        description: { en: 'Mandatory identity and biometric proof', te: 'తప్పనిసరి బయోమెట్రిక్ మరియు గుర్తింపు పత్రం', hi: 'अनिवार्य पहचान और बायोमेट्रिक प्रमाण' },
        isMandatory: true,
        acceptableFormats: 'Original physical card or digital copy',
        instructions: {
          en: 'Ensure Aadhaar details have correct demographic data and active photo.',
          te: 'ఆధార్‌లో సరైన వివరాలు మరియు ఫోటో ఉన్నట్లు నిర్ధారించుకోండి.',
          hi: 'आधार पर नाम, पता व फोटो अद्यतन होने चाहिए।'
        }
      },
      {
        id: 'ab-ration',
        name: { en: 'Ration Card / Food Security Card', te: 'రేషన్ కార్డు / ఆహార భద్రతా కార్డు', hi: 'राशन कार्ड / खाद्य सुरक्षा कार्ड' },
        description: { en: 'Family linkage and composition certificate', te: 'కుటుంబ సభ్యుల సంబంధాన్ని ధృవీకరించే పత్రం', hi: 'परिवार के सदस्यों का संबंध प्रमाण' },
        isMandatory: true,
        acceptableFormats: 'Smart Ration Card or certified copy',
        instructions: {
          en: 'Must clearly list all beneficiary family members who require health coverage.',
          te: 'ఆరోగ్య కవరేజ్ కావలసిన కుటుంబ సభ్యుల పేర్లు అన్ని కార్డులో ఉండాలి.',
          hi: 'कवर चाहने वाले सभी पारिवारिक सदस्यों के नाम राशन कार्ड में दर्ज होने चाहिए।'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Check Name in Beneficiary Portal (beneficiary.nha.gov.in)',
          te: 'బెనిఫిషియరీ పోర్టల్‌లో మీ పేరును సరిచూసుకోండి',
          hi: 'लाभार्थी पोर्टल (beneficiary.nha.gov.in) पर पात्रता जांचें'
        },
        description: {
          en: 'Open beneficiary.nha.gov.in on mobile or desktop. Log in using your mobile number and OTP.',
          te: 'beneficiary.nha.gov.in సైట్ తెరిచి, మొబైల్ నంబర్ మరియు OTP ద్వారా లాగిన్ అవ్వండి.',
          hi: 'beneficiary.nha.gov.in खोलें और मोबाइल नंबर व OTP दर्ज कर लॉगिन करें।'
        },
        estimatedTime: '5 Mins'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Search by Aadhaar, Ration Card Number or Family ID',
          te: 'ఆధార్ లేదా రేషన్ కార్డు నంబర్ ద్వారా శోధించండి',
          hi: 'आधार, राशन कार्ड या फैमिली आईडी द्वारा खोजें'
        },
        description: {
          en: 'Select your state, scheme (PMJAY), and search using your Ration Card number or Aadhaar. Your family member list will appear.',
          te: 'రాష్ట్రం, పథకం ఎంచుకుని ఆధార్ లేదా రేషన్ కార్డు ద్వారా సెర్చ్ చేయండి. కుటుంబ సభ్యుల జాబితా కనిపిస్తుంది.',
          hi: 'राज्य और योजना चुनें। राशन कार्ड या आधार दर्ज कर अपने परिवार का विवरण खोजें।'
        },
        estimatedTime: '5 Mins'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Complete Aadhaar Face / OTP e-KYC',
          te: 'ఆధార్ ఫేస్ లేదా OTP e-KYC పూర్తి చేయండి',
          hi: 'आधार फेस ऑथेंटिकेशन या OTP द्वारा e-KYC करें'
        },
        description: {
          en: 'Click on the "e-KYC" button beside each member. Authenticate via OTP, facial scan using mobile camera, or visit nearest Ayushman Mitra at hospital.',
          te: '"e-KYC" బటన్ నొక్కి మొబైల్ కెమెరా ఫేస్ స్కాన్ లేదా OTP ద్వారా ధృవీకరణ చేయండి.',
          hi: 'e-KYC बटन दबाएं और मोबाइल कैमरा फेस स्कैन या ओटीपी से सत्यापन पूरा करें।'
        },
        estimatedTime: '10 Mins'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Instant Golden Card Approval & Download',
          te: 'తక్షణమే గోల్డెన్ కార్డు ఆమోదం & డౌన్‌లోడ్',
          hi: 'गोल्डन कार्ड की त्वरित स्वीकृति एवं डाउनलोड'
        },
        description: {
          en: 'Once e-KYC matches, download the PVC Ayushman Golden Card directly in PDF format with QR code.',
          te: 'e-KYC విజయవంతమైన వెంటనే ఆయుష్మాన్ గోల్డెన్ కార్డును PDF రూపంలో డౌన్‌లోడ్ చేసుకోండి.',
          hi: 'e-KYC सफल होते ही क्यूआर कोड युक्त आयुष्मान गोल्डन कार्ड तुरंत डाउनलोड करें।'
        },
        tips: {
          en: 'Keep this card saved on your mobile or print it. Present it at the "Ayushman Mitra" desk in any empaneled hospital for free treatment.',
          te: 'ఈ కార్డును మొబైల్‌లో దాచుకోండి లేదా ప్రింట్ తీసుకోండి. ఆసుపత్రిలోని ఆయుష్మాన్ మిత్ర వద్ద చూపిస్తే ఉచిత చికిత్స లభిస్తుంది.',
          hi: 'कार्ड को फोन में रखें या प्रिंट निकालें। अस्पताल में "आयुष्मान मित्र" को दिखाकर कैशलेस इलाज पाएं।'
        },
        estimatedTime: '2 Mins'
      }
    ],
    postSubmission: {
      timeline: {
        en: 'Instant card generation upon successful Aadhaar e-KYC match',
        te: 'ఆధార్ e-KYC విజయవంతమైన వెంటనే కార్డు జారీ అవుతుంది',
        hi: 'आधार e-KYC सत्यापन होते ही तुरंत कार्ड तैयार'
      },
      trackingMethod: {
        en: 'Use Ayushman App or visit beneficiary.nha.gov.in using Aadhaar number.',
        te: 'ఆయుష్మాన్ యాప్ లేదా beneficiary.nha.gov.in లో ఆధార్‌తో తనిఖీ చేయవచ్చు.',
        hi: 'आयुष्मान ऐप या पोर्टल पर आधार नंबर डालकर कभी भी स्थिति जांच सकते हैं।'
      },
      grievanceContact: {
        en: 'National Health Authority 24x7 Toll-Free Helpline: 14555 / 1800-111-565',
        te: 'జాతీయ ఆరోగ్య సంస్థ 24 గంటల టోల్-ఫ్రీ హెల్ప్‌లైన్: 14555 / 1800-111-565',
        hi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण 24x7 टोल-फ्री हेल्पलाइन: 14555 / 1800-111-565'
      },
      nextSteps: {
        en: [
          'Locate empaneled public or private hospitals in your district via portal',
          'Visit hospital emergency or OPD, show Ayushman Card at registration',
          'Pre-authorization processed automatically without paying cash deposits',
          'Post-discharge medications for up to 15 days provided free of charge'
        ],
        te: [
          'మీ జిల్లాలో నెట్‌వర్క్ ఆసుపత్రుల వివరాలను పోర్టల్‌లో తెలుసుకోండి',
          'ఆసుపత్రికి వెళ్ళినప్పుడు రిజిస్ట్రేషన్ వద్ద ఆయుష్మాన్ కార్డు చూపించండి',
          'ఎలాంటి డిపాజిట్ నగదు చెల్లించాల్సిన అవసరం లేకుండా అనుమతి లభిస్తుంది',
          'డిశ్చార్జ్ అయిన తర్వాత 15 రోజుల వరకు ఉచిత మందులు అందించబడతాయి'
        ],
        hi: [
          'पोर्टल पर अपने जिले के सूचीबद्ध सरकारी या निजी अस्पतालों की सूची देखें',
          'अस्पताल के काउंटर पर आयुष्मान कार्ड दिखाएं, कोई अग्रिम राशि नहीं देनी होगी',
          'इलाज और सर्जरी की पूर्व-स्वीकृति ऑनलाइन अस्पताल द्वारा ली जाती है',
          'अस्पताल से छुट्टी के बाद 15 दिनों तक की दवाएं निःशुल्क मिलती हैं'
        ]
      }
    },
    links: {
      applyUrl: 'https://beneficiary.nha.gov.in',
      officialPortalUrl: 'https://pmjay.gov.in',
      portalName: 'NHA PM-JAY Official Portal (beneficiary.nha.gov.in)',
      helplineNumber: '14555'
    },
    activeDeadline: 'Open Year Round (365 Days)',
    status: 'open_yearly',
    popular: true,
    tags: ['Health', 'Insurance', 'Hospital', 'Cashless', 'Senior Citizens', 'PMJAY']
  },
  {
    id: 'pm-mudra',
    code: 'BIZ-PMMY-04',
    name: {
      en: 'Pradhan Mantri MUDRA Yojana (PMMY Loan)',
      te: 'ప్రధాన మంత్రి ముద్రా యోజన (PMMY వ్యాపార రుణాలు)',
      hi: 'प्रधानमंत्री मुद्रा योजना (PMMY ऋण)'
    },
    shortDescription: {
      en: 'Collateral-free business loans up to ₹10,00,000 (Shishu, Kishore, and Tarun categories) for small businesses and self-employed entrepreneurs.',
      te: 'చిన్న వ్యాపారులు మరియు స్వయం ఉపాధి కల్పించే వారి కోసం ఎటువంటి పూచీకత్తు లేకుండా ₹10,00,000 వరకు వ్యాపార రుణాలు.',
      hi: 'छोटे व्यापारियों और नए उद्यमियों हेतु बिना किसी गारंटी (कोलैटरल-फ्री) ₹10 लाख तक का व्यवसाय ऋण (शिशु, किशोर व तरुण)।'
    },
    fullDescription: {
      en: 'Pradhan Mantri MUDRA Yojana (PMMY) facilitates institutional credit up to ₹10 Lakhs to micro and small business enterprises engaged in manufacturing, processing, trading, or services. Loans are classified into Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakhs), and Tarun (₹5 Lakhs to ₹10 Lakhs).',
      te: 'చిరు వ్యాపారులు, కిరాణా దుకాణాలు, తయారీ రంగాలు మరియు సేవా రంగాల వారికి బ్యాంకుల ద్వారా ఎటువంటి ఆస్తి తాకట్టు లేకుండా రుణాలు అందించే ప్రభుత్వ పథకం ముద్రా యోజన.',
      hi: 'प्रधानमंत्री मुद्रा योजना सूक्ष्म और लघु इकाइयों (विनिर्माण, व्यापार एवं सेवा) को ₹10 लाख तक का संस्थागत ऋण बिना किसी जमानत के सुलभ कराती है।'
    },
    purpose: {
      en: 'To foster grassroots entrepreneurship, job creation, and financial inclusion for non-corporate micro units.',
      te: 'చిన్న వ్యాపారాలను ప్రోత్సహించడం మరియు నిరుద్యోగ యువతకు స్వయం ఉపాధి కల్పించడం.',
      hi: 'जमीनी स्तर पर स्वरोजगार को बढ़ावा देना और छोटे उद्यमियों को आसान ऋण मुहैया कराना।'
    },
    department: {
      en: 'Department of Financial Services (Ministry of Finance)',
      te: 'ఆర్థిక సేవల శాఖ (ఆర్థిక మంత్రిత్వ శాఖ)',
      hi: 'वित्तीय सेवा विभाग (वित्त मंत्रालय)'
    },
    category: 'business',
    targetGroups: ['youth', 'women', 'all'],
    eligibility: {
      whoCanApply: {
        en: [
          'Any Indian citizen with a viable business plan for a non-farm revenue-generating activity',
          'Artisans, traders, shopkeepers, service providers, transport operators, food processors',
          'Startups and existing micro-enterprises wanting expansion'
        ],
        te: [
          'లాభదాయకమైన వ్యాపార ప్రతిపాదన కలిగిన ఏ భారతీయ పౌరుడైనా',
          'చిరు వ్యాపారులు, దుకాణదారులు, చేతివృత్తుల వారు మరియు రవాణా రంగానికి చెందినవారు',
          'కొత్తగా వ్యాపారం ప్రారంభించేవారు లేదా ఉన్న వ్యాపారాన్ని విస్తరించేవారు'
        ],
        hi: [
          'व्यवसाय योजना रखने वाला कोई भी भारतीय नागरिक (गैर-कृषि क्षेत्र)',
          'दुकानदार, कारीगर, फल-सब्जी विक्रेता, मरम्मत कार्यशालाएं, सेवा प्रदाता',
          'नए उद्यमी या मौजूदा छोटे व्यवसाय का विस्तार करने वाले व्यक्ति'
        ]
      },
      conditions: {
        en: [
          'Borrower must not be a defaulter with any bank or financial institution',
          'No collateral security or third-party guarantee required up to ₹10 Lakhs',
          'Loan must be utilized strictly for declared commercial/business purpose'
        ],
        te: [
          'గతంలో ఏ బ్యాంకులోనూ డిఫాల్టర్ (ఎగవేతదారు) అయి ఉండకూడదు',
          '₹10 లక్షల వరకు ఎలాంటి ఆస్తి తాకట్టు లేదా హామీదారు అవసరం లేదు',
          'రుణాన్ని కేవలం వ్యాపార అవసరాలకే ఉపయోగించాలి'
        ],
        hi: [
          'आवेदक किसी भी बैंक या वित्तीय संस्था का डिफॉल्टर न हो',
          '₹10 लाख तक किसी भी संपत्ति को गिरवी रखने या गारंटर की आवश्यकता नहीं',
          'ऋण का उपयोग घोषित व्यावसायिक गतिविधि हेतु ही किया जाना चाहिए'
        ]
      },
      ageRange: { min: 18, max: 65 },
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'mudra-kyc',
        name: { en: 'Identity & Address Proof (Aadhaar / Voter ID)', te: 'గుర్తింపు మరియు చిరునామా రుజువు (ఆధార్ / ఓటర్ ఐడీ)', hi: 'पहचान एवं निवास प्रमाण (आधार / मतदाता पहचान पत्र)' },
        description: { en: 'Self-attested identity proof', te: 'స్వయం ధృవీకరించిన గుర్తింపు పత్రం', hi: 'स्व-प्रमाणित पहचान पत्र' },
        isMandatory: true,
        acceptableFormats: 'PDF / Photocopy',
        instructions: {
          en: 'Current residential address must be valid.',
          te: 'ప్రస్తుత నివాస చిరునామా సరిగ్గా ఉండాలి.',
          hi: 'वर्तमान आवासीय पता स्पष्ट रूप से दर्ज होना चाहिए।'
        }
      },
      {
        id: 'mudra-business-proof',
        name: { en: 'Business Registration / Udyam Certificate', te: 'వ్యాపార రిజిస్ట్రేషన్ / ఉద్యమ్ సర్టిఫికెట్', hi: 'व्यवसाय पंजीकरण / उद्यम प्रमाण पत्र' },
        description: { en: 'Free Udyam Registration number or Trade License', te: 'ఉచిత ఉద్యమ్ రిజిస్ట్రేషన్ లేదా మున్సిపల్ లైసెన్స్', hi: 'निःशुल्क उद्यम पंजीकरण या स्थानीय व्यापार लाइसेंस' },
        isMandatory: false,
        acceptableFormats: 'PDF',
        instructions: {
          en: 'Can be generated for free in 5 minutes at udyamregistration.gov.in.',
          te: 'udyamregistration.gov.in లో 5 నిమిషాల్లో ఉచితంగా పొందవచ్చు.',
          hi: 'udyamregistration.gov.in से 5 मिनट में निःशुल्क प्राप्त किया जा सकता है।'
        }
      },
      {
        id: 'mudra-quotation',
        name: { en: 'Machinery / Stock Quotation or Project Plan', te: 'యంత్రాలు లేదా సరుకుల కొటేషన్ / ప్రాజెక్ట్ నివేదిక', hi: 'मशीनरी/सामान का कोटेशन या संक्षिप्त प्रोजेक्ट रिपोर्ट' },
        description: { en: 'Cost estimates of equipment/goods to be purchased', te: 'కొనుగోలు చేయబోయే యంత్రాలు లేదా సామాగ్రి ధరల పట్టిక', hi: 'खरीदे जाने वाले उपकरणों या माल का अनुमानित खर्च' },
        isMandatory: true,
        acceptableFormats: 'PDF / Physical copy',
        instructions: {
          en: 'Required for Kishore and Tarun category loans to justify the loan amount requested.',
          te: 'కిషోర్ మరియు తరుణ్ రుణాల కోసం కొనుగోలు కొటేషన్ తప్పనిసరి.',
          hi: 'किशोर और तरुण श्रेणी के ऋण हेतु आवश्यक।'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Select Category (Shishu, Kishore, or Tarun)',
          te: 'మీ రుణ కేటగిరీని ఎంచుకోండి (శిశు, కిషోర్ లేదా తరుణ్)',
          hi: 'ऋण श्रेणी चुनें (शिशु, किशोर अथवा तरुण)'
        },
        description: {
          en: 'Determine required amount: Shishu (Up to ₹50k for new setups), Kishore (₹50k-5L for machinery/stock), or Tarun (₹5L-10L for full expansion).',
          te: 'మీకు అవసరమైన మొత్తం ఆధారంగా కేటగిరీని నిర్ణయించుకోండి.',
          hi: 'अपनी जरूरत के अनुसार श्रेणी का चयन करें।'
        },
        estimatedTime: '10 Mins'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Apply Online via UdyamiMitra Portal (udyamimitra.in)',
          te: 'ఉద్యమిమిత్ర పోర్టల్‌లో ఆన్‌లైన్ దరఖాస్తు చేసుకోండి',
          hi: 'उद्यमी मित्र पोर्टल (udyamimitra.in) पर ऑनलाइन आवेदन करें'
        },
        description: {
          en: 'Visit udyamimitra.in. Register as a Borrower and submit your business application to your preferred nearby bank branch.',
          te: 'udyamimitra.in పోర్టల్ లో రిజిస్టర్ అయి మీ సమీప బ్యాంక్ శాఖను ఎంచుకోండి.',
          hi: 'udyamimitra.in पर पंजीकरण करें और अपनी पसंदीदा बैंक शाखा को आवेदन भेजें।'
        },
        estimatedTime: '20 Mins'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Branch Verification & Sanction Letter',
          te: 'బ్యాంక్ శాఖ పరిశీలన & రుణ మంజూరు పత్రం',
          hi: 'बैंक शाखा सत्यापन एवं ऋण स्वीकृति पत्र'
        },
        description: {
          en: 'Bank evaluates the business viability. Upon approval, loan sanction letter and MUDRA debit card are issued.',
          te: 'బ్యాంక్ మేనేజర్ మీ వ్యాపార ప్రతిపాదనను పరిశీలించి ముద్రా లోన్ మరియు రూపే కార్డ్ మంజూరు చేస్తారు.',
          hi: 'बैंक द्वारा परियोजना का मूल्यांकन होने पर स्वीकृति पत्र और मुद्रा कार्ड जारी किया जाता है।'
        },
        estimatedTime: '7-14 Days'
      }
    ],
    postSubmission: {
      timeline: {
        en: '10 to 15 business days for sanction and disbursement',
        te: 'రుణ మంజూరు మరియు చెల్లింపుకు 10 నుండి 15 పనిదినాలు',
        hi: 'स्वीकृति और राशि जारी होने में 10 से 15 कार्यदिवस'
      },
      trackingMethod: {
        en: 'Track application reference status via udyamimitra.in dashboard or branch officer.',
        te: 'udyamimitra.in డాష్‌బోర్డ్ ద్వారా మీ అప్లికేషన్ రిఫరెన్స్ నంబర్‌తో ట్రాక్ చేయండి.',
        hi: 'udyamimitra.in पर एप्लिकेशन संदर्भ संख्या से स्थिति जांचें।'
      },
      grievanceContact: {
        en: 'National MUDRA Toll-Free Helpline: 1800-180-1111 / State PMMY Cell',
        te: 'జాతీయ ముద్రా టోల్-ఫ్రీ హెల్ప్‌లైన్: 1800-180-1111',
        hi: 'राष्ट्रीय मुद्रा टोल-फ्री हेल्पलाइन: 1800-180-1111'
      },
      nextSteps: {
        en: [
          'Bank conducts brief premises inspection or interview with applicant',
          'Loan sanctioned under Credit Guarantee Fund for Micro Units (CGFMU)',
          'Loan disbursed directly to supplier for machinery or loaded on Mudra RuPay card for working capital',
          'Repayment tenure varies between 3 to 5 years at competitive bank interest rates'
        ],
        te: [
          'బ్యాంక్ అధికారులు మీ వ్యాపార స్థలాన్ని పరిశీలిస్తారు',
          'ప్రభుత్వ గ్యారంటీ కింద రుణం మంజూరు అవుతుంది',
          'ముద్రా రూపే కార్డు ద్వారా లేదా సప్లయర్‌కు నేరుగా నిధులు విడుదలవుతాయి',
          '3 నుండి 5 సంవత్సరాల కాలపరిమితిలో సులభ వాయిదాలలో తిరిగి చెల్లించవచ్చు'
        ],
        hi: [
          'बैंक द्वारा व्यावसायिक स्थल का संक्षिप्त निरीक्षण',
          'सूक्ष्म इकाई क्रेडिट गारंटी फंड (CGFMU) के तहत बिना गारंटी लोन मंजूर',
          'सामान विक्रेता को सीधे भुगतान या मुद्रा रुपे कार्ड द्वारा कार्यशील पूंजी जारी',
          '3 से 5 वर्षों की आसान मासिक किस्तों (EMI) में पुनर्भुगतान'
        ]
      }
    },
    links: {
      applyUrl: 'https://udyamimitra.in',
      officialPortalUrl: 'https://www.mudra.org.in',
      portalName: 'UdyamiMitra & MUDRA Official Portal (mudra.org.in)',
      helplineNumber: '1800-180-1111'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Business', 'Loan', 'Startup', 'Mudra', 'Self-Employment', 'MSME']
  },
  {
    id: 'e-shram',
    code: 'EMP-ESHRAM-05',
    name: {
      en: 'e-Shram National Card (Unorganized Workers)',
      te: 'ఈ-శ్రమ్ జాతీయ కార్డు (అసంఘటిత కార్మికులు)',
      hi: 'ई-श्रम राष्ट्रीय कार्ड (असंगठित श्रमिक)'
    },
    shortDescription: {
      en: 'Universal National Database card with 12-digit UAN number, ₹2,00,000 accidental insurance cover, and direct social security benefits.',
      te: '12 అంకెల UAN నంబర్‌తో కూడిన జాతీయ గుర్తింపు కార్డు, ₹2,00,000 ప్రమాద బీమా మరియు ప్రభుత్వ సంక్షేమ పథకాల ప్రయోజనాలు.',
      hi: '12 अंकों वाला UAN कार्ड, ₹2,00,000 का दुर्घटना बीमा कवर और सरकार की सभी सामाजिक सुरक्षा योजनाओं का सीधा लाभ।'
    },
    fullDescription: {
      en: 'e-Shram is a comprehensive portal created by the Ministry of Labour & Employment to build a verified database of all unorganized workers including construction workers, migrant labor, street vendors, domestic workers, gig workers, and agricultural laborers.',
      te: 'నిర్మాణ కార్మికులు, వలస కూలీలు, వీధి వ్యాపారులు, గృహ కార్మికులు, ఆటో డ్రైవర్లు మరియు వ్యవసాయ కూలీల సమాచారాన్ని నమోదు చేసి సంక్షేమ ఫలాలు అందించే కేంద్ర ప్రభుత్వ పథకం.',
      hi: 'श्रम एवं रोजगार मंत्रालय द्वारा असंगठित क्षेत्र के कामगारों (निर्माण श्रमिक, रेहड़ी-पटरी वाले, प्रवासी मजदूर, घरेलू कामगार, ऑटो चालक) हेतु राष्ट्रीय डेटाबेस।'
    },
    purpose: {
      en: 'To ensure seamless portability of social security welfare benefits, pensions, and disaster relief during crises.',
      te: 'అసంఘటిత రంగ కార్మికులకు ప్రమాద బీమా, పింఛను మరియు సంక్షేమ పథకాలను సులభంగా అందించడం.',
      hi: 'आपदा के समय सीधी आर्थिक मदद, दुर्घटना बीमा और सामाजिक सुरक्षा योजनाओं की पोर्टेबिलिटी सुनिश्चित करना।'
    },
    department: {
      en: 'Ministry of Labour & Employment',
      te: 'కార్మిక మరియు ఉపాధి మంత్రిత్వ శాఖ',
      hi: 'श्रम एवं रोजगार मंत्रालय'
    },
    category: 'employment',
    targetGroups: ['youth', 'low_income', 'all'],
    eligibility: {
      whoCanApply: {
        en: [
          'Any worker in the unorganized sector aged between 16 and 59 years',
          'Daily wage laborers, auto/cab drivers, tailors, domestic helpers, gig delivery partners, farmers without large landholdings',
          'Not a member of EPFO (Provident Fund) or ESIC (Employee State Insurance)'
        ],
        te: [
          '16 నుండి 59 సంవత్సరాల మధ్య వయస్సు గల అసంఘటిత రంగ కార్మికులు',
          'దినసరి కూలీలు, ఆటో/క్యాబ్ డ్రైవర్లు, టైలర్లు, డెలివరీ బాయ్స్, భవన నిర్మాణ కార్మికులు',
          'EPFO (పీఎఫ్) లేదా ESIC (ఈఎస్ఐ) లో సభ్యులు కానివారు'
        ],
        hi: [
          '16 से 59 वर्ष की आयु के असंगठित क्षेत्र के कामगार',
          'दैनिक मजदूर, बढ़ई, दर्जी, ड्राइवर, गिग डिलीवरी वर्कर, स्ट्रीट वेंडर',
          'जो ईपीएफओ (EPFO) या ईएसआईसी (ESIC) के सदस्य नहीं हैं और आयकर नहीं भरते'
        ]
      },
      conditions: {
        en: [
          'Must not be an income taxpayer',
          'Must have an active bank account linked to Aadhaar'
        ],
        te: [
          'ఆదాయపు పన్ను చెల్లించేవారు కాకూడదు',
          'ఆధార్‌తో లింక్ అయిన బ్యాంక్ ఖాతా ఉండాలి'
        ],
        hi: [
          'आयकर दाता नहीं होना चाहिए',
          'आधार से जुड़ा बैंक खाता होना चाहिए'
        ]
      },
      ageRange: { min: 16, max: 59 },
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'es-aadhaar',
        name: { en: 'Aadhaar Card with Mobile Linked', te: 'మొబైల్ లింక్ అయిన ఆధార్ కార్డు', hi: 'मोबाइल से जुड़ा आधार कार्ड' },
        description: { en: 'For instant OTP-based self-registration', te: 'OTP కోసం ఆధార్ వివరాలు', hi: 'ओटीपी सत्यापन हेतु' },
        isMandatory: true,
        acceptableFormats: 'Digital / Physical',
        instructions: {
          en: 'Keep your linked mobile nearby for OTP verification.',
          te: 'OTP కోసం మీ లింక్ అయిన మొబైల్ దగ్గర ఉంచుకోండి.',
          hi: 'ओटीपी सत्यापन के लिए रजिस्टर्ड मोबाइल पास रखें।'
        }
      },
      {
        id: 'es-bank',
        name: { en: 'Bank Savings Account Passbook', te: 'సేవింగ్స్ బ్యాంక్ ఖాతా వివరాలు', hi: 'बैंक बचत खाता संख्या एवं IFSC' },
        description: { en: 'For DBT benefit credits', te: 'ప్రభుత్వ పథకాల నిధుల బదిలీ కోసం', hi: 'सीधे बैंक खाते में सहायता राशि हेतु' },
        isMandatory: true,
        acceptableFormats: 'Account Number & IFSC Code',
        instructions: {
          en: 'Enter account number and IFSC code carefully. No upload needed for self-registration.',
          te: 'ఖాతా సంఖ్య మరియు IFSC కోడ్ స్పష్టంగా నమోదు చేయండి.',
          hi: 'खाता संख्या और IFSC कोड ध्यानपूर्वक दर्ज करें।'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Self-Enrollment on eshram.gov.in',
          te: 'eshram.gov.in లో సెల్ఫ్ రిజిస్ట్రేషన్ చేసుకోండి',
          hi: 'eshram.gov.in पर "Self Registration" चुनें'
        },
        description: {
          en: 'Open eshram.gov.in and click "Register on e-Shram". Enter your Aadhaar-linked mobile number and captcha to receive OTP.',
          te: 'eshram.gov.in లోకి వెళ్లి ఆధార్ లింక్ అయిన మొబైల్ నంబర్ మరియు OTP ఎంటర్ చేయండి.',
          hi: 'पोर्टल पर "Register on e-Shram" दबाएं और मोबाइल नंबर पर आया ओटीपी डालें।'
        },
        estimatedTime: '5 Mins'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Verify Personal Profile & Occupation Code',
          te: 'వ్యక్తిగత వివరాలు & వృత్తి కోడ్ ఎంచుకోండి',
          hi: 'व्यक्तिगत जानकारी एवं व्यवसाय कोड का चयन'
        },
        description: {
          en: 'Your demographic details fetch automatically from Aadhaar. Select your primary occupation (e.g. Mason, Driver, Cook, Tailor) and skill level.',
          te: 'ఆధార్ నుండి వివరాలు స్వయంచాలకంగా వస్తాయి. మీ ప్రధాన వృత్తిని జాబితా నుండి ఎంచుకోండి.',
          hi: 'आधार से विवरण स्वतः भर जाएगा। अपनी प्राथमिक कार्य श्रेणी (व्यवसाय) चुनें।'
        },
        estimatedTime: '10 Mins'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Enter Bank Account & Download UAN Card',
          te: 'బ్యాంక్ వివరాలు ఇచ్చి UAN కార్డు డౌన్‌లోడ్ చేసుకోండి',
          hi: 'बैंक विवरण भरें और UAN कार्ड डाउनलोड करें'
        },
        description: {
          en: 'Enter your bank details. Submit and instantly download your laminated e-Shram Card featuring your unique 12-digit UAN number.',
          te: 'బ్యాంక్ వివరాలు ఇచ్చి వెంటనే మీ 12 అంకెల UAN ఈ-శ్రమ్ కార్డును డౌన్‌లోడ్ చేసుకోండి.',
          hi: 'बैंक विवरण दर्ज कर सबमिट करें और तुरंत 12 अंकों वाला UAN कार्ड डाउनलोड करें।'
        },
        estimatedTime: '5 Mins'
      }
    ],
    postSubmission: {
      timeline: {
        en: 'Instant issuance upon OTP verification (Zero waiting period)',
        te: 'OTP ధృవీకరణ పూర్తయిన వెంటనే కార్డు జారీ అవుతుంది',
        hi: 'ओटीपी सत्यापन के तुरंत बाद कार्ड जारी'
      },
      trackingMethod: {
        en: 'Log in anytime using your UAN or mobile number to update address, skills, or bank accounts.',
        te: 'మీ UAN నంబర్‌తో ఎప్పుడైనా లాగిన్ అయి వివరాలను నవీకరించుకోవచ్చు.',
        hi: 'अपने UAN नंबर या मोबाइल से कभी भी प्रोफाइल अपडेट कर सकते हैं।'
      },
      grievanceContact: {
        en: 'National Labour Helpdesk Toll-Free: 14434',
        te: 'జాతీయ కార్మిక హెల్ప్‌డెస్క్ టోల్-ఫ్రీ: 14434',
        hi: 'राष्ट्रीय श्रम हेल्पडेस्क टोल-फ्री: 14434'
      },
      nextSteps: {
        en: [
          'Automatic accidental death or permanent disability cover of ₹2 Lakh under PMSBY',
          'Automatic eligibility for upcoming social security and pension initiatives',
          'Priority job matching and skill development training via National Career Service (NCS)'
        ],
        te: [
          'ప్రమాదంలో మరణం లేదా శాశ్వత అంగవైకల్యం సంభవిస్తే ₹2 లక్షల వరకు ప్రమాద బీమా',
          'భవిష్యత్తు సంక్షేమ పథకాలలో ప్రాధాన్యత',
          'నేషనల్ కెరీర్ సర్వీస్ ద్వారా ఉద్యోగ మరియు నైపుణ్య శిక్షణ అవకాశాలు'
        ],
        hi: [
          'दुर्घटना में मृत्यु या पूर्ण दिव्यांगता पर ₹2 लाख का निःशुल्क बीमा कवर',
          'भविष्य की पेंशन और सामाजिक सुरक्षा योजनाओं के लिए स्वतः पात्रता',
          'नेशनल करियर सर्विस (NCS) पोर्टल के माध्यम से रोजगार के अवसर'
        ]
      }
    },
    links: {
      applyUrl: 'https://eshram.gov.in',
      officialPortalUrl: 'https://eshram.gov.in',
      portalName: 'e-Shram National Portal (eshram.gov.in)',
      helplineNumber: '14434'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Workers', 'Labour', 'Insurance', 'e-Shram', 'Social Security', 'Unorganized']
  },
  {
    id: 'pm-awas',
    code: 'HOU-PMAY-06',
    name: {
      en: 'Pradhan Mantri Awas Yojana (PMAY Housing Scheme)',
      te: 'ప్రధాన మంత్రి ఆవాస్ యోజన (PMAY పక్కా ఇళ్ల పథకం)',
      hi: 'प्रधानमंत्री आवास योजना (PMAY पक्के मकान की योजना)'
    },
    shortDescription: {
      en: 'Financial subsidy up to ₹2,67,000 for constructing or purchasing an all-weather pucca house with water, sanitation, and electricity.',
      te: 'నీరు, విద్యుత్ మరియు మరుగుదొడ్డి సౌకర్యాలతో పక్కా గృహాన్ని నిర్మించుకోవడానికి లేదా కొనుగోలు చేయడానికి ₹2,67,000 వరకు ఆర్థిక రాయితీ.',
      hi: 'पानी, बिजली व शौचालय की सुविधा युक्त पक्का मकान बनाने या खरीदने हेतु ₹2.67 लाख तक की सरकारी सब्सिडी।'
    },
    fullDescription: {
      en: 'Pradhan Mantri Awas Yojana (Urban 2.0 & Gramin) aims to provide pucca houses with basic amenities to all eligible homeless families and those living in kutcha or dilapidated houses across rural and urban India.',
      te: 'గ్రామీణ మరియు పట్టణ ప్రాంతాల్లో నివాసయోగ్యమైన పక్కా ఇల్లు లేని నిరుపేద కుటుంబాలకు ఇళ్ల నిర్మాణం కోసం ఆర్థిక సహాయం అందించే ప్రతిష్టాత్మక పథకం.',
      hi: 'प्रधानमंत्री आवास योजना (शहरी एवं ग्रामीण) का लक्ष्य देश के सभी बेघर और कच्चे या जर्जर मकानों में रहने वाले पात्र परिवारों को बुनियादी सुविधाओं से युक्त पक्का मकान उपलब्ध कराना है।'
    },
    purpose: {
      en: 'Housing for All — ensuring every underprivileged family owns a safe, climate-resilient home registered in the name of the female head of the family.',
      te: 'అందరికీ పక్కా గృహ వసతి కల్పించడం మరియు మహిళా సాధికారతకు తోడ్పడటం.',
      hi: 'सभी जरूरतमंद परिवारों को सुरक्षित आवास प्रदान करना एवं महिला सशक्तिकरण को बढ़ावा देना।'
    },
    department: {
      en: 'Ministry of Housing & Urban Affairs / Rural Development',
      te: 'గృహనిర్మాణ మరియు పట్టణ వ్యవహారాల మంత్రిత్వ శాఖ',
      hi: 'आवास एवं शहरी कार्य मंत्रालय / ग्रामीण विकास मंत्रालय'
    },
    category: 'housing',
    targetGroups: ['low_income', 'women', 'all'],
    eligibility: {
      whoCanApply: {
        en: [
          'Beneficiary family must not own a pucca house anywhere in India',
          'Economically Weaker Section (EWS) annual income up to ₹3,00,000 or Low Income Group (LIG) up to ₹6,00,000',
          'House ownership must include the adult female member of the household'
        ],
        te: [
          'భారతదేశంలో ఎక్కడా లబ్ధిదారు కుటుంబానికి సొంత పక్కా ఇల్లు ఉండకూడదు',
          'వార్షిక ఆదాయం EWS వర్గానికి ₹3,00,000 లేదా LIG వర్గానికి ₹6,00,000 లోపు ఉండాలి',
          'ఇంటి యాజమాన్యం తప్పనిసరిగా కుటుంబ మహిళ పేరు మీద లేదా సంయుక్తంగా ఉండాలి'
        ],
        hi: [
          'परिवार के किसी भी सदस्य के नाम पर देश में कहीं भी पक्का मकान न हो',
          'EWS (आर्थिक रूप से कमजोर) आय ₹3 लाख तक, LIG (निम्न आय) ₹6 लाख तक',
          'मकान का स्वामित्व परिवार की महिला सदस्य के नाम या संयुक्त रूप से होना आवश्यक'
        ]
      },
      conditions: {
        en: [
          'Applicant has not availed central assistance under any prior housing scheme',
          'Land possession or municipal ward allotment letter must be valid'
        ],
        te: [
          'గతంలో ఎలాంటి ప్రభుత్వ గృహ నిర్మాణ సహాయం పొంది ఉండకూడదు',
          'స్థల పట్టా లేదా మున్సిపల్ అలాట్‌మెంట్ లెటర్ కలిగి ఉండాలి'
        ],
        hi: [
          'पूर्व में किसी भी सरकारी आवास योजना का लाभ न लिया हो',
          'जमीन का पट्टा या नगर निकाय आवंटन पत्र वैध होना चाहिए'
        ]
      },
      ageRange: { min: 21, max: 70 },
      maxAnnualIncome: 600000,
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'pmay-aadhaar',
        name: { en: 'Aadhaar Cards of All Family Members', te: 'కుటుంబ సభ్యులందరి ఆధార్ కార్డులు', hi: 'परिवार के सभी सदस्यों का आधार कार्ड' },
        description: { en: 'Biometric and de-duplication verification', te: 'కుటుంబ గుర్తింపు ధృవీకరణ', hi: 'पहचान और दोहराव जांच हेतु' },
        isMandatory: true,
        acceptableFormats: 'PDF / Photocopies',
        instructions: {
          en: 'Aadhaar is mandatory for spouse and dependent children.',
          te: 'భార్యాభర్తలు మరియు పిల్లల ఆధార్ తప్పనిసరి.',
          hi: 'पति-पत्नी और आश्रित बच्चों का आधार अनिवार्य है।'
        }
      },
      {
        id: 'pmay-income',
        name: { en: 'Income Certificate / Salary Slip / Affidavit', te: 'ఆదాయ ధృవీకరణ పత్రం / అఫిడవిట్', hi: 'आय प्रमाण पत्र / वेतन पर्ची / शपथ पत्र' },
        description: { en: 'Proof of falling under EWS/LIG bracket', te: 'ఆదాయ పరిమితిని ధృవీకరించే పత్రం', hi: 'EWS/LIG वर्ग का प्रमाण' },
        isMandatory: true,
        acceptableFormats: 'PDF',
        instructions: {
          en: 'Certified by Revenue Inspector or Self-Affidavit as per municipal guidelines.',
          te: 'రెవెన్యూ అధికారి జారీ చేసిన పత్రం లేదా అఫిడవిట్.',
          hi: 'तहसीलदार या सक्षम प्राधिकारी द्वारा प्रमाणित।'
        }
      },
      {
        id: 'pmay-land',
        name: { en: 'Land Title Deed / Allotment Order', te: 'స్థల పట్టా / అలాట్‌మెంట్ ఆర్డర్', hi: 'जमीन का पट्टा / रजिस्ट्री / आवंटन पत्र' },
        description: { en: 'Proof of land where house will be constructed', te: 'ఇల్లు నిర్మించే స్థలం యొక్క హక్కు పత్రం', hi: 'मकान निर्माण हेतु भूमि का स्वामित्व प्रमाण' },
        isMandatory: true,
        acceptableFormats: 'PDF / Clear Scan',
        instructions: {
          en: 'Must show clear survey boundary and registered rights.',
          te: 'స్పష్టమైన హద్దులు మరియు సర్వే నంబర్ ఉండాలి.',
          hi: 'स्पष्ट सीमांकन एवं खसरा संख्या दर्ज होनी चाहिए।'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Check PMAY-Urban / Gramin Portal or Visit Ward/CSC',
          te: 'PMAY పోర్టల్ లేదా మున్సిపల్ వార్డ్ సచివాలయాన్ని సంప్రదించండి',
          hi: 'PMAY पोर्टल अथवा नगर निगम / ग्राम पंचायत में जाएं'
        },
        description: {
          en: 'Visit pmaymis.gov.in (for urban) or pmayg.nic.in (for rural) or apply through your Ward Sachivalayam / Common Service Centre (CSC).',
          te: 'pmaymis.gov.in సైట్ ద్వారా లేదా గ్రామ/వార్డు సచివాలయంలో దరఖాస్తు చేసుకోవచ్చు.',
          hi: 'pmaymis.gov.in या नजदीकी CSC केंद्र / वार्ड कार्यालय में जाएं।'
        },
        estimatedTime: '15 Mins'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Fill Beneficiary & Family Member Details',
          te: 'లబ్ధిదారు మరియు కుటుంబ సభ్యుల వివరాలు నమోదు చేయండి',
          hi: 'लाभार्थी एवं पारिवारिक सदस्यों का विवरण दर्ज करें'
        },
        description: {
          en: 'Enter applicant details with Aadhaar, ensure female ownership name is primary/co-owner, and provide bank account information.',
          te: 'ఆధార్ నంబర్లతో వివరాలను పూరించండి. మహిళ పేరును యజమానిగా నమోదు చేయండి.',
          hi: 'आधार के साथ सभी सदस्यों का नाम दर्ज करें। महिला सदस्य को प्राथमिकता दें।'
        },
        estimatedTime: '20 Mins'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Physical Geo-tagging Verification & Sanction',
          te: 'జియో-ట్యాగింగ్ ద్వారా స్థల పరిశీలన & మంజూరు',
          hi: 'जियो-टैगिंग (Geo-tagging) निरीक्षण एवं स्वीकृति'
        },
        description: {
          en: 'Municipal/Gram Panchayat engineers inspect the plot, click geo-tagged photographs, and upload to the central PMAY app for sanction.',
          te: 'ఇంజనీర్లు స్థలాన్ని సందర్శించి జియో-ట్యాగింగ్ ఫోటోలు తీసి అనుమతి ఇస్తారు.',
          hi: 'अधिकारी स्थल का निरीक्षण कर फोटो ऐप पर अपलोड करते हैं और स्वीकृति आदेश जारी होता है।'
        },
        estimatedTime: '30 Days'
      }
    ],
    postSubmission: {
      timeline: {
        en: 'Phased DBT payments credited directly across foundation, lintel, roof, and completion stages',
        te: 'పునాది, గోడలు, శ్లాబ్ మరియు నిర్మాణం పూర్తయ్యే దశల్లో విడతలవారీగా నిధుల జమ',
        hi: 'नींव, दीवार, छत और पूर्णता के आधार पर 4 चरणों में DBT भुगतान'
      },
      trackingMethod: {
        en: 'Track using Assessment ID or Aadhaar at pmaymis.gov.in > Citizen Assessment.',
        te: 'pmaymis.gov.in లో మీ అస్సెస్మెంట్ ID లేదా ఆధార్‌తో ట్రాక్ చేయండి.',
        hi: 'pmaymis.gov.in पर "Track Your Assessment Status" द्वारा देखें।'
      },
      grievanceContact: {
        en: 'Toll-Free PMAY Helpline: 1800-11-6163 / 1800-11-3377',
        te: 'టోల్-ఫ్రీ PMAY హెల్ప్‌లైన్: 1800-11-6163 / 1800-11-3377',
        hi: 'टोल-फ्री हेल्पलाइन: 1800-11-6163 / 1800-11-3377'
      },
      nextSteps: {
        en: [
          'Geo-tagged photo verification at 4 stages: Plinth, Lintel, Roof, and Finishing',
          'DBT installment transferred directly after each photo validation',
          'Additional ₹12,000 assistance under Swachh Bharat for toilet construction',
          'Free gas connection under Ujjwala and electricity under Saubhagya mapped automatically'
        ],
        te: [
          '4 దశల్లో జియో ట్యాగింగ్ పరిశీలన: పునాది, కిటికీ మట్టం, శ్లాబ్ మరియు పూర్తి స్థాయి',
          'ప్రతి దశ పూర్తయిన వెంటనే ఖాతాలోకి నేరుగా నగదు బదిలీ',
          'మరుగుదొడ్డి నిర్మాణానికి స్వచ్ఛ భారత్ కింద అదనంగా ₹12,000 సహాయం',
          'ఉచిత గ్యాస్ మరియు విద్యుత్ కనెక్షన్ అనుసంధానం'
        ],
        hi: [
          'चार स्तरों पर जियो-टैग फोटो सत्यापन (नींव, दीवार, छत व अंतिम रूप)',
          'प्रत्येक चरण का कार्य पूरा होने पर सीधे बैंक खाते में किस्त का ट्रांसफर',
          'शौचालय निर्माण हेतु स्वच्छ भारत योजना के तहत अतिरिक्त ₹12,000',
          'उज्ज्वला योजना के तहत निःशुल्क गैस और बिजली कनेक्शन की सुविधा'
        ]
      }
    },
    links: {
      applyUrl: 'https://pmaymis.gov.in',
      officialPortalUrl: 'https://pmaymis.gov.in',
      portalName: 'PMAY Official Housing Portal (pmaymis.gov.in)',
      helplineNumber: '1800-11-6163'
    },
    status: 'open_yearly',
    tags: ['Housing', 'Home', 'PMAY', 'Subsidy', 'Pucca House', 'EWS']
  },
  {
    id: 'sukanya-samriddhi',
    code: 'WOM-SSY-07',
    name: {
      en: 'Sukanya Samriddhi Yojana (Girl Child Savings Scheme)',
      te: 'సుకన్య సమృద్ధి యోజన (బాలికల భవిష్యత్ సంరక్షణ పథకం)',
      hi: 'सुकन्या समृद्धि योजना (बालिका बचत योजना)'
    },
    shortDescription: {
      en: 'High-interest government-backed small savings scheme (8.2% p.a.) with triple tax exemption (EEE) for the education and marriage of the girl child.',
      te: 'బాలికల ఉన్నత చదువు మరియు వివాహ ఖర్చుల కోసం అత్యధిక వడ్డీ (8.2%) మరియు పూర్తి పన్ను మినహాయింపునిచ్చే ప్రభుత్వ చిన్న పొదుపు పథకం.',
      hi: 'बालिकाओं की उच्च शिक्षा एवं विवाह हेतु 8.2% की उच्चतम ब्याज दर एवं पूर्ण कर-मुक्त (EEE) सरकारी बचत योजना।'
    },
    fullDescription: {
      en: 'Launched under the "Beti Bachao, Beti Padhao" mission, Sukanya Samriddhi Yojana (SSY) allows parents to open an account for a girl child below 10 years of age in any Post Office or commercial bank. Deposits can range from ₹250 to ₹1.5 Lakh per fiscal year.',
      te: 'బేటీ బచావో - బేటీ పఢావో మిషన్ కింద ప్రారంభించబడిన ఈ పథకంలో 10 సంవత్సరాల లోపు వయస్సు ఉన్న ఆడపిల్లల పేరు మీద పోస్ట్ ఆఫీస్ లేదా బ్యాంకుల్లో ఖాతా తెరవవచ్చు. సంవత్సరానికి కనీసం ₹250 నుండి ₹1.5 లక్షల వరకు డిపాజిట్ చేయవచ్చు.',
      hi: 'बेटी बचाओ बेटी पढ़ाओ अभियान के तहत 10 वर्ष से कम उम्र की बालिकाओं के नाम पर डाकघर या बैंक में खाता खोला जा सकता है। इसमें न्यूनतम ₹250 से ₹1.5 लाख प्रतिवर्ष जमा किया जा सकता है।'
    },
    purpose: {
      en: 'To secure the financial future, higher education, and marriage milestones of daughters while granting full tax exemption under Section 80C.',
      te: 'ఆడపిల్లల ఉన్నత విద్య మరియు వివాహానికి తగిన ఆర్థిక నిధిని సమకూర్చడం.',
      hi: 'बेटियों की उच्च शिक्षा एवं आत्मनिर्भरता के लिए दीर्घकालिक वित्तीय सुरक्षा सुनिश्चित करना।'
    },
    department: {
      en: 'Ministry of Finance & Department of Posts',
      te: 'ఆర్థిక మంత్రిత్వ శాఖ & తపాలా శాఖ',
      hi: 'वित्त मंत्रालय एवं डाक विभाग'
    },
    category: 'social_welfare',
    targetGroups: ['women', 'youth', 'all'],
    eligibility: {
      whoCanApply: {
        en: [
          'Natural or legal guardian of a girl child resident in India',
          'Girl child must be below 10 years of age at the time of account opening',
          'Maximum of two girl children per family (exception permitted for twins/triplets)'
        ],
        te: [
          'భారతదేశంలో నివసించే బాలిక యొక్క తల్లిదండ్రులు లేదా సంరక్షకులు',
          'ఖాతా తెరిచే సమయానికి బాలిక వయస్సు 10 సంవత్సరాల లోపు ఉండాలి',
          'ఒక కుటుంబంలో గరిష్టంగా ఇద్దరు ఆడపిల్లల పేరు మీద మాత్రమే తెరవవచ్చు'
        ],
        hi: [
          'बालिका के माता-पिता या कानूनी अभिभावक',
          'खाता खुलवाते समय बालिका की आयु 10 वर्ष से कम होनी चाहिए',
          'एक परिवार में अधिकतम दो बालिकाओं के लिए खाता खोला जा सकता है'
        ]
      },
      conditions: {
        en: [
          'Minimum annual deposit of ₹250 to keep the account active',
          'Deposits allowed up to 15 years from date of opening; matures at 21 years',
          'Partial withdrawal up to 50% allowed after girl child turns 18 for higher education'
        ],
        te: [
          'ఖాతా యాక్టివ్‌గా ఉండటానికి ప్రతి సంవత్సరం కనీసం ₹250 జమ చేయాలి',
          '15 సంవత్సరాల వరకు డిపాజిట్ చేయవచ్చు; 21 సంవత్సరాలకు పథకం మెచ్యూర్ అవుతుంది',
          'బాలికకు 18 ఏళ్లు నిండిన తర్వాత ఉన్నత చదువుల కోసం 50% వరకు విత్‌డ్రా చేసుకోవచ్చు'
        ],
        hi: [
          'खाता सक्रिय रखने हेतु प्रतिवर्ष न्यूनतम ₹250 जमा करना अनिवार्य',
          'खाता खुलने से 15 वर्ष तक जमा करने की सुविधा, 21 वर्ष पर परिपक्वता (मैच्योरिटी)',
          '18 वर्ष की आयु होने पर उच्च शिक्षा हेतु 50% तक निकासी की अनुमति'
        ]
      },
      ageRange: { min: 0, max: 10 },
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'ssy-birth',
        name: { en: 'Birth Certificate of Girl Child', te: 'బాలిక పుట్టిన తేదీ ధృవీకరణ పత్రం (బర్త్ సర్టిఫికెట్)', hi: 'बालिका का जन्म प्रमाण पत्र' },
        description: { en: 'Issued by Municipality / Gram Panchayat Registrar', te: 'మున్సిపాలిటీ లేదా గ్రామ పంచాయతీ జారీ చేసిన పత్రం', hi: 'नगर निगम / पंचायत द्वारा जारी जन्म प्रमाण पत्र' },
        isMandatory: true,
        acceptableFormats: 'Original & Photocopy',
        instructions: {
          en: 'Must clearly state girl child’s name and exact date of birth.',
          te: 'పాప పేరు మరియు పుట్టిన తేదీ స్పష్టంగా ఉండాలి.',
          hi: 'बालिका का नाम और जन्म तिथि स्पष्ट होनी चाहिए।'
        }
      },
      {
        id: 'ssy-guardian-id',
        name: { en: 'Guardian Aadhaar & PAN Card', te: 'తల్లిదండ్రుల ఆధార్ మరియు పాన్ కార్డు', hi: 'अभिभावक का आधार कार्ड एवं पैन कार्ड' },
        description: { en: 'Identity and address proof of the depositor parent', te: 'తల్లిదండ్రుల గుర్తింపు పత్రాలు', hi: 'अभिभावक का पहचान एवं पता प्रमाण' },
        isMandatory: true,
        acceptableFormats: 'Physical Photocopy',
        instructions: {
          en: 'PAN is required for tax deduction certification under Section 80C.',
          te: 'పన్ను మినహాయింపు కోసం పాన్ కార్డు అవసరం.',
          hi: 'धारा 80C के तहत कर छूट प्रमाण हेतु पैन कार्ड आवश्यक।'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Download SSY Account Opening Form (Form-1)',
          te: 'SSY దరఖాస్తు ఫారమ్‌ను డౌన్‌లోడ్ చేసుకోండి',
          hi: 'एसएसवाई खाता खोलने का फॉर्म (Form-1) प्राप्त करें'
        },
        description: {
          en: 'Download Form-1 from India Post (indiapost.gov.in) or collect it from any post office or nationalized bank branch (SBI, PNB, Canara Bank).',
          te: 'ఇండియా పోస్ట్ వెబ్‌సైట్ లేదా సమీప పోస్ట్ ఆఫీస్/బ్యాంకు నుండి ఫారం పొందండి.',
          hi: 'डाकघर या किसी भी बैंक (SBI, PNB आदि) से फॉर्म प्राप्त करें।'
        },
        estimatedTime: '5 Mins'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Attach Photos, Birth Certificate & Guardian KYC',
          te: 'ఫోటోలు, బర్త్ సర్టిఫికెట్ మరియు ఆధార్ జతచేయండి',
          hi: 'फोटो, जन्म प्रमाण पत्र एवं अभिभावक का आधार संलग्न करें'
        },
        description: {
          en: 'Fill in details of the child and guardian. Affix passport photos of child and parent.',
          te: 'ఫారంలో పాప మరియు తల్లిదండ్రుల వివరాలు రాసి ఫోటోలను అంటించండి.',
          hi: 'बालिका और माता-पिता की जानकारी भरें और फोटो लगाएं।'
        },
        estimatedTime: '15 Mins'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Submit with Initial Deposit (Min ₹250) & Collect Passbook',
          te: 'కనీస డిపాజిట్‌తో సమర్పించి పాస్‌బుక్ అందుకోండి',
          hi: 'न्यूनतम राशि (₹250) के साथ जमा करें और पासबुक प्राप्त करें'
        },
        description: {
          en: 'Submit at the counter with initial cash/cheque deposit. Receive a dedicated Sukanya Samriddhi Passbook with account number.',
          te: 'కౌంటర్‌లో సమర్పించి సుకన్య సమృద్ధి పాస్‌బుక్‌ను తీసుకోండి.',
          hi: 'काउंटर पर जमा करें और तुरंत एसएसवाई पासबुक प्राप्त करें।'
        },
        tips: {
          en: 'You can link your SSY account to IPPB (India Post Payments Bank) app or Internet Banking for hassle-free online monthly transfers.',
          te: 'ఆన్‌లైన్ ద్వారా ప్రతి నెలా డబ్బులు చెల్లించడానికి నెట్ బ్యాంకింగ్ లేదా IPPB యాప్‌ను లింక్ చేసుకోండి.',
          hi: 'घर बैठे पैसे जमा करने के लिए पोस्ट ऑफिस ऐप (IPPB) या नेट बैंकिंग से लिंक करें।'
        },
        estimatedTime: '20 Mins'
      }
    ],
    postSubmission: {
      timeline: {
        en: 'Instant passbook issued on the spot at post office or bank branch',
        te: 'పోస్ట్ ఆఫీస్ లేదా బ్యాంకులో వెంటనే పాస్‌బుక్ అందుతుంది',
        hi: 'शाखा में आवेदन करते ही तत्काल पासबुक जारी'
      },
      trackingMethod: {
        en: 'View balance via Internet Banking, Mobile Banking, or passbook updates.',
        te: 'నెట్ బ్యాంకింగ్ లేదా పాస్‌బుక్ ఎంట్రీ ద్వారా బ్యాలెన్స్ చూడవచ్చు.',
        hi: 'नेट बैंकिंग या पासबुक एंट्री कराकर जमा राशि और ब्याज देख सकते हैं।'
      },
      grievanceContact: {
        en: 'India Post Customer Toll-Free Helpline: 1800-266-6868',
        te: 'ఇండియా పోస్ట్ టోల్-ఫ్రీ హెల్ప్‌లైన్: 1800-266-6868',
        hi: 'डाक विभाग टोल-फ्री हेल्पलाइन: 1800-266-6868'
      },
      nextSteps: {
        en: [
          'Earn compounded quarterly sovereign guaranteed interest (currently 8.2% p.a.)',
          'Deposit anytime round the year through net banking, UPI, or cash',
          'Full income tax deduction up to ₹1,50,000 under Section 80C every year',
          'Principal, interest earned, and maturity proceeds are 100% tax-free'
        ],
        te: [
          'ప్రభుత్వ హామీతో కూడిన అత్యధిక వార్షిక వడ్డీ (8.2%) లభిస్తుంది',
          'సంవత్సరంలో ఎప్పుడైనా ఆన్‌లైన్ లేదా నగదు రూపంలో పొదుపు చేసుకోవచ్చు',
          'సెక్షన్ 80C కింద ప్రతి సంవత్సరం ₹1,50,000 వరకు పూర్తి పన్ను మినహాయింపు',
          'మెచ్యూరిటీ సమయంలో లభించే మొత్తంపై పైసా కూడా పన్ను ఉండదు'
        ],
        hi: [
          'सरकार द्वारा निर्धारित 8.2% की सुरक्षित एवं उच्चतम चक्रवृद्धि ब्याज दर',
          'वर्ष भर में कभी भी UPI, नेट बैंकिंग या नकद से जमा की सुविधा',
          'आयकर की धारा 80C के तहत ₹1.5 लाख तक की वार्षिक कर छूट',
          'परिपक्वता पर मिलने वाला पूरा पैसा और ब्याज 100% कर-मुक्त'
        ]
      }
    },
    links: {
      applyUrl: 'https://www.indiapost.gov.in',
      officialPortalUrl: 'https://www.indiapost.gov.in',
      portalName: 'India Post Official Portal (indiapost.gov.in)',
      helplineNumber: '1800-266-6868'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Girl Child', 'Education', 'Savings', 'Sukanya', 'Women', 'Tax Free']
  },
  {
    id: 'ignop-pension',
    code: 'SOC-NSAP-08',
    name: {
      en: 'National Social Assistance Old Age Pension (IGNOAPS)',
      te: 'ఇందిరా గాంధీ జాతీయ వృద్ధాప్య పెన్షన్ పథకం (IGNOAPS)',
      hi: 'इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना (IGNOAPS)'
    },
    shortDescription: {
      en: 'Monthly financial pension paid directly to elderly citizens aged 60 years and above living below the poverty line (BPL).',
      te: 'దారిద్ర్యరేఖకు దిగువన ఉన్న 60 సంవత్సరాలు మరియు అంతకంటే ఎక్కువ వయస్సు గల వయోవృద్ధులకు ప్రతి నెలా అందించే ప్రభుత్వ పింఛను.',
      hi: 'गरीबी रेखा से नीचे (BPL) जीवन यापन कर रहे 60 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिकों हेतु मासिक सरकारी पेंशन।'
    },
    fullDescription: {
      en: 'Under the National Social Assistance Programme (NSAP), the Indira Gandhi National Old Age Pension Scheme provides monthly social security support to destitute elderly citizens to ensure basic sustenance with dignity.',
      te: 'నిరుపేద వయోవృద్ధులకు ఆసరాగా నిలిచి గౌరవప్రదమైన జీవనాన్ని అందించడానికి కేంద్ర మరియు రాష్ట్ర ప్రభుత్వాలు ఉమ్మడిగా అందించే నెలవారీ పింఛను పథకం.',
      hi: 'राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP) के अंतर्गत असहाय बुजुर्ग नागरिकों को गरिमापूर्ण जीवन जीने हेतु नियमित मासिक पेंशन सहायता प्रदान की जाती है।'
    },
    purpose: {
      en: 'To provide social security and monthly sustenance allowance to destitute elderly persons.',
      te: 'ఆధారము లేని వృద్ధులకు నెలవారీ ఆర్థిక భరోసా కల్పించడం.',
      hi: 'बुजुर्गों को बुनियादी जरूरतों (दवा, भोजन) हेतु मासिक वित्तीय सहारा उपलब्ध कराना।'
    },
    department: {
      en: 'Ministry of Rural Development & Social Welfare Department',
      te: 'గ్రామీణాభివృద్ధి మరియు సాంఘిక సంక్షేమ శాఖ',
      hi: 'ग्रामीण विकास मंत्रालय एवं समाज कल्याण विभाग'
    },
    category: 'social_welfare',
    targetGroups: ['senior_citizens', 'low_income'],
    eligibility: {
      whoCanApply: {
        en: [
          'Senior citizens who have attained the age of 60 years or above',
          'Belonging to a household living Below the Poverty Line (BPL Card holder)',
          'Permanent resident of the applying state/district'
        ],
        te: [
          '60 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయస్సు నిండిన వృద్ధులు',
          'దారిద్ర్య రేఖకు దిగువన ఉన్న కుటుంబానికి చెందినవారు (BPL లేదా తెల్ల రేషన్ కార్డు)',
          'సంబంధిత రాష్ట్రంలో శాశ్వత నివాసి అయి ఉండాలి'
        ],
        hi: [
          '60 वर्ष या उससे अधिक आयु प्राप्त कर चुके वरिष्ठ नागरिक',
          'गरीबी रेखा से नीचे (BPL) कार्ड धारक परिवार के सदस्य',
          'संबंधित राज्य/जिले के स्थायी निवासी'
        ]
      },
      conditions: {
        en: [
          'Must not be drawing any other regular state/central government pension',
          'Bank or Post Office account must be seeded with Aadhaar'
        ],
        te: [
          'ఇతర ప్రభుత్వ ఉద్యోగ లేదా సంస్థాగత పెన్షన్ పొందుతూ ఉండకూడదు',
          'బ్యాంక్ లేదా పోస్ట్ ఆఫీస్ ఖాతా ఆధార్‌తో లింక్ అయి ఉండాలి'
        ],
        hi: [
          'किसी अन्य सरकारी पेंशन के लाभार्थी नहीं होने चाहिए',
          'बैंक या डाकघर खाता आधार से जुड़ा होना चाहिए'
        ]
      },
      ageRange: { min: 60, max: 120 },
      maxAnnualIncome: 120000,
      citizenshipRequired: true
    },
    documents: [
      {
        id: 'pen-age',
        name: { en: 'Age Proof (Aadhaar / Voter ID / Birth Certificate)', te: 'వయస్సు ధృవీకరణ పత్రం (ఆధార్ / ఓటర్ ఐడీ)', hi: 'आयु प्रमाण पत्र (आधार / वोटर आईडी / जन्म प्रमाण पत्र)' },
        description: { en: 'Proving age of 60+ years', te: '60 ఏళ్లు నిండినట్లు రుజువు', hi: '60 वर्ष की आयु का प्रमाण' },
        isMandatory: true,
        acceptableFormats: 'Photocopy / PDF',
        instructions: {
          en: 'Date of birth must be clearly visible and match official records.',
          te: 'పుట్టిన సంవత్సరం స్పష్టంగా ఉండాలి.',
          hi: 'जन्म वर्ष स्पष्ट दिखना चाहिए।'
        }
      },
      {
        id: 'pen-bpl',
        name: { en: 'BPL Card / White Ration Card / Income Proof', te: 'బిపిఎల్ కార్డు / తెల్ల రేషన్ కార్డు', hi: 'बीपीएल राशन कार्ड / अंत्योदय कार्ड' },
        description: { en: 'Poverty line verification document', te: 'దారిద్ర్యరేఖ ధృవీకరణ పత్రం', hi: 'गरीबी रेखा का आधिकारिक प्रमाण' },
        isMandatory: true,
        acceptableFormats: 'Photocopy',
        instructions: {
          en: 'BPL number or Antyodaya Anna Yojana (AAY) card number.',
          te: 'రేషన్ కార్డు నంబర్ స్పష్టంగా ఉండాలి.',
          hi: 'राशन कार्ड संख्या स्पष्ट होनी चाहिए।'
        }
      },
      {
        id: 'pen-bank',
        name: { en: 'Aadhaar Seeded Bank or Post Office Passbook', te: 'ఆధార్ లింక్ బ్యాంక్ లేదా పోస్ట్ ఆఫీస్ పాస్‌బుక్', hi: 'आधार सीडेड बैंक / डाकघर पासबुक' },
        description: { en: 'Direct monthly pension credit account', te: 'నెలనెలా పెన్షన్ జమ అయ్యే ఖాతా', hi: 'पेंशन राशि सीधे ट्रांसफर हेतु' },
        isMandatory: true,
        acceptableFormats: 'Photocopy',
        instructions: {
          en: 'Account should be in the single name of the applicant.',
          te: 'ఖాతా దరఖాస్తుదారుడి పేరు మీద మాత్రమే ఉండాలి.',
          hi: 'खाता केवल आवेदक के एकल नाम पर होना चाहिए।'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Apply Online via NSAP Portal (nsap.nic.in) or Gram/Ward Sachivalayam',
          te: 'NSAP పోర్టల్ లేదా వార్డు సచివాలయం ద్వారా దరఖాస్తు చేయండి',
          hi: 'NSAP पोर्टल (nsap.nic.in) अथवा ग्राम/वार्ड सचिवालय में आवेदन करें'
        },
        description: {
          en: 'Submit application through the national NSAP portal or submit physical form to the Village Panchayat Secretary / Municipal Social Welfare Officer.',
          te: 'nsap.nic.in లో లేదా గ్రామ పంచాయతీ కార్యాలయంలో దరఖాస్తు సమర్పించండి.',
          hi: 'nsap.nic.in पर ऑनलाइन या ग्राम पंचायत सचिव के पास फॉर्म जमा करें।'
        },
        estimatedTime: '15 Mins'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Field Enquiry by Welfare Officer',
          te: 'సంక్షేమ అధికారి ద్వారా క్షేత్రస్థాయి విచారణ',
          hi: 'कल्याण अधिकारी द्वारा सत्यापन'
        },
        description: {
          en: 'Local revenue inspector or social welfare secretary verifies age, BPL status, and residence.',
          te: 'అధికారులు మీ నివాసం మరియు వయస్సును ధృవీకరిస్తారు.',
          hi: 'स्थानीय अधिकारी घर जाकर आयु व आर्थिक स्थिति की पुष्टि करते हैं।'
        },
        estimatedTime: '15 Days'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Pension Sanction & Monthly Direct Credit',
          te: 'పింఛను మంజూరు & ప్రతి నెలా ఖాతాలో జమ',
          hi: 'पेंशन स्वीकृति एवं मासिक भुगतान'
        },
        description: {
          en: 'District Collector sanction order is issued. Pension is transferred on the 1st of every month through DBT or delivered via Village Volunteers / Postman.',
          te: 'కలెక్టర్ ఆమోదం పొందిన తర్వాత ప్రతి నెలా 1వ తేదీన నగదు జమ అవుతుంది.',
          hi: 'स्वीकृति के बाद हर महीने की पहली तारीख को पेंशन राशि सीधे बैंक या डाकघर में आती है।'
        },
        estimatedTime: '30 Days'
      }
    ],
    postSubmission: {
      timeline: {
        en: '30 to 45 days for verification and first monthly payment',
        te: 'ధృవీకరణ మరియు మొదటి చెల్లింపుకు 30 నుండి 45 రోజులు',
        hi: 'सत्यापन और पहली पेंशन आने में 30 से 45 दिन'
      },
      trackingMethod: {
        en: 'Track status on nsap.nic.in using your Application Number or Sanction Number.',
        te: 'nsap.nic.in పోర్టల్ లో అప్లికేషన్ నంబర్‌తో ట్రాక్ చేయవచ్చు.',
        hi: 'nsap.nic.in पर आवेदन संख्या दर्ज कर स्थिति देखें।'
      },
      grievanceContact: {
        en: 'NSAP National Helpdesk: 011-2436-0752 / District Social Welfare Office',
        te: 'జిల్లా సాంఘిక సంక్షేమ కార్యాలయం / NSAP హెల్ప్‌డెస్క్: 011-2436-0752',
        hi: 'जिला समाज कल्याण अधिकारी कार्यालय / 011-2436-0752'
      },
      nextSteps: {
        en: [
          'Sanction letter delivered to home address or Gram Panchayat office',
          'Pension credited on 1st of every month automatically via DBT',
          'Annual life certificate (Jeevan Pramaan) submission via biometric doorstep service every November'
        ],
        te: [
          'మంజూరు పత్రం గ్రామ పంచాయతీ ద్వారా అందుతుంది',
          'ప్రతి నెలా ప్రారంభంలో పింఛను నిధులు జమ అవుతాయి',
          'ప్రతి నవంబర్‌లో బయోమెట్రిక్ జీవన్ ప్రమాణ్ పత్రం సమర్పించాలి'
        ],
        hi: [
          'स्वीकृति आदेश ग्राम पंचायत या पते पर प्राप्त होना',
          'हर महीने की शुरुआत में DBT द्वारा स्वतः पेंशन खाते में आना',
          'हर वर्ष नवंबर में डाकिए या CSC के माध्यम से डिजिटल जीवन प्रमाण पत्र देना'
        ]
      }
    },
    links: {
      applyUrl: 'https://nsap.nic.in',
      officialPortalUrl: 'https://nsap.nic.in',
      portalName: 'National Social Assistance Portal (nsap.nic.in)',
      helplineNumber: '011-24360752'
    },
    status: 'open_yearly',
    popular: true,
    tags: ['Pension', 'Senior Citizens', 'Old Age', 'Social Security', 'NSAP', 'BPL']
  }
];

export const servicesData: GovernmentService[] = [...baseServicesData, ...additionalServices];

// 4. SERVICE CATALOGUE HELPER FUNCTIONS
export function getServiceById(id: string): GovernmentService | undefined {
  return servicesData.find(s => s.id === id);
}

export function getServicesByCategory(category: string): GovernmentService[] {
  if (!category || category === 'all') return servicesData;
  return servicesData.filter(s => s.category === category);
}

export function getServicesByTargetGroup(group: string): GovernmentService[] {
  if (!group || group === 'all') return servicesData;
  return servicesData.filter(s => s.targetGroups.includes(group as any));
}

export function searchServices(
  query: string,
  category: string = 'all',
  audience: string = 'all',
  lang: 'en' | 'te' | 'hi' = 'en'
): GovernmentService[] {
  const cleanQ = (query || '').trim().toLowerCase();
  
  return servicesData.filter(service => {
    // Category filter
    if (category !== 'all' && service.category !== category) {
      return false;
    }
    // Audience filter
    if (audience !== 'all' && !service.targetGroups.includes(audience as any)) {
      return false;
    }
    // Query filter
    if (!cleanQ) return true;

    const nameMatches =
      service.name.en.toLowerCase().includes(cleanQ) ||
      service.name.te.toLowerCase().includes(cleanQ) ||
      service.name.hi.toLowerCase().includes(cleanQ);

    const descMatches =
      service.shortDescription[lang]?.toLowerCase().includes(cleanQ) ||
      service.fullDescription[lang]?.toLowerCase().includes(cleanQ);

    const tagsMatch = service.tags.some(t => t.toLowerCase().includes(cleanQ));
    const keywordsMatch = service.keywords?.some(k => k.toLowerCase().includes(cleanQ));
    const synonymsMatch = service.synonyms?.some(s => s.toLowerCase().includes(cleanQ));
    const deptMatch = service.department[lang]?.toLowerCase().includes(cleanQ);

    return nameMatches || descMatches || tagsMatch || keywordsMatch || synonymsMatch || deptMatch;
  });
}

export function getEligibleServices(profile: {
  age?: number;
  annualIncome?: number;
  category?: string;
  targetGroup?: string;
  isStudent?: boolean;
  isFarmer?: boolean;
  isWoman?: boolean;
  isSeniorCitizen?: boolean;
  isDisabled?: boolean;
}): GovernmentService[] {
  return servicesData.filter(service => {
    const { eligibility } = service;
    if (profile.age !== undefined && eligibility.ageRange) {
      if (profile.age < eligibility.ageRange.min || profile.age > eligibility.ageRange.max) {
        return false;
      }
    }
    if (profile.annualIncome !== undefined && eligibility.maxAnnualIncome !== undefined) {
      if (profile.annualIncome > eligibility.maxAnnualIncome) {
        return false;
      }
    }
    return true;
  });
}

export function getRelatedServices(serviceId: string, limit: number = 3): GovernmentService[] {
  const current = getServiceById(serviceId);
  if (!current) return servicesData.slice(0, limit);
  return servicesData
    .filter(s => s.id !== serviceId && (s.category === current.category || s.targetGroups.some(g => current.targetGroups.includes(g))))
    .slice(0, limit);
}

export function getAllCategories(): string[] {
  const cats = new Set<string>();
  servicesData.forEach(s => cats.add(s.category));
  return Array.from(cats);
}

export function getDashboardMetrics() {
  const totalServices = servicesData.length;
  const categories = new Set(servicesData.map(s => s.category)).size;
  const verifiedLinks = servicesData.filter(s => !!s.links.applyUrl).length;
  const popularCount = servicesData.filter(s => s.popular).length;

  return {
    totalServices,
    categories,
    verifiedLinks,
    popularCount
  };
}

