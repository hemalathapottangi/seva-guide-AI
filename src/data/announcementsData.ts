import { AwarenessNotification } from '../types';

export const announcementsData: AwarenessNotification[] = [
  {
    id: 'ann-01',
    title: {
      en: 'National Scholarship Portal (NSP 2026-27) Registration Closing Soon',
      te: 'నేషనల్ స్కాలర్‌షిప్ పోర్టల్ (NSP 2026-27) దరఖాస్తు గడువు త్వరలో ముగియనుంది',
      hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP 2026-27) पंजीकरण की अंतिम तिथि निकट है'
    },
    message: {
      en: 'All college and university students are advised to submit their fresh and renewal applications before 31st October 2026. Complete college bonafide verification early to avoid last-minute portal rush.',
      te: 'డిగ్రీ మరియు పీజీ విద్యార్థులందరూ అక్టోబర్ 31, 2026 లోపు తమ కొత్త మరియు రెన్యూవల్ దరఖాస్తులను సమర్పించాలని సూచించడమైనది. కళాశాల ధృవీకరణను ముందుగానే పూర్తి చేసుకోండి.',
      hi: 'सभी कॉलेज और विश्वविद्यालय के छात्रों को सलाह दी जाती है कि वे 31 अक्टूबर 2026 से पहले नए और नवीनीकरण आवेदन जमा करें। संस्थान स्तर पर सत्यापन समय से करवाएं।'
    },
    type: 'deadline',
    date: 'Active Alert • Closing 31 Oct 2026',
    relatedServiceId: 'nsp-scholarship',
    isUrgent: true,
    badgeText: {
      en: 'Deadline Alert',
      te: 'గడువు హెచ్చరిక',
      hi: 'अंतिम तिथि'
    }
  },
  {
    id: 'ann-02',
    title: {
      en: 'Ayushman Bharat Expands: Free ₹5 Lakh Cover for ALL Senior Citizens (70+ Years)',
      te: 'ఆయుష్మాన్ భారత్ విస్తరణ: 70 ఏళ్లు పైబడిన వయోవృద్ధులందరికీ ఉచితంగా ₹5 లక్షల ఆరోగ్య కవరేజ్',
      hi: 'आयुष्मान भारत का विस्तार: 70 वर्ष से अधिक आयु के सभी बुजुर्गों को ₹5 लाख का मुफ्त इलाज'
    },
    message: {
      en: 'Under the PM-JAY expansion, every citizen aged 70 years and above is now eligible for a dedicated Ayushman Vaya Vandana card, regardless of family income or economic status.',
      te: 'పీఎం-జేఏవై విస్తరణలో భాగంగా, ఆదాయ పరిమితితో సంబంధం లేకుండా 70 ఏళ్లు పైబడిన ప్రతి వృద్ధుడికి ప్రత్యేక ఆయుష్మాన్ వయ వందన కార్డు ద్వారా ఉచిత వైద్యం లభిస్తుంది.',
      hi: 'पीएम-जय के विस्तार के तहत, पारिवारिक आय की परवाह किए बिना 70 वर्ष या उससे अधिक आयु के प्रत्येक वरिष्ठ नागरिक को समर्पित गोल्डन कार्ड जारी किया जा रहा है।'
    },
    type: 'new_scheme',
    date: 'New Expansion Announcement',
    relatedServiceId: 'ayushman-bharat',
    isUrgent: false,
    badgeText: {
      en: 'New Initiative',
      te: 'కొత్త సదుపాయం',
      hi: 'नई पहल'
    }
  },
  {
    id: 'ann-03',
    title: {
      en: 'Citizen Advisory: Government Scheme Application Forms Are 100% Free',
      te: 'పౌర సలహా: ప్రభుత్వ పథకాల దరఖాస్తులు పూర్తిగా ఉచితం',
      hi: 'नागरिक सलाह: सरकारी योजनाओं के आवेदन फॉर्म पूरी तरह निःशुल्क हैं'
    },
    message: {
      en: 'Beware of fraudulent agents or fake websites asking for processing fees. All Central and State government welfare schemes are free to apply via official .gov.in websites or Common Service Centres (CSC) at fixed nominal rates.',
      te: 'ప్రభుత్వ పథకాల పేరుతో డబ్బులు డిమాండ్ చేసే నకిలీ ఏజెంట్లను నమ్మవద్దు. అధికారిక .gov.in సైట్లలో దరఖాస్తులు పూర్తిగా ఉచితం.',
      hi: 'प्रोसेसिंग फीस या पैसे मांगने वाले फर्जी एजेंटों से सावधान रहें। सभी सरकारी योजनाएं आधिकारिक .gov.in वेबसाइटों पर पूरी तरह निःशुल्क हैं।'
    },
    type: 'advisory',
    date: 'Public Safety Notice',
    isUrgent: true,
    badgeText: {
      en: 'Important Advisory',
      te: 'ముఖ్య సలహా',
      hi: 'सावधानी सूचना'
    }
  },
  {
    id: 'ann-04',
    title: {
      en: 'Mandatory Aadhaar e-KYC Notice for PM-Kisan 19th Installment',
      te: 'పీఎం-కిసాన్ 19వ విడత నిధుల కోసం ఆధార్ e-KYC తప్పనిసరి',
      hi: 'पीएम-किसान की 19वीं किस्त हेतु अनिवार्य आधार e-KYC सूचना'
    },
    message: {
      en: 'Farmers must complete Aadhaar OTP e-KYC on pmkisan.gov.in or biometric verification at CSCs to receive uninterrupted credit of their upcoming ₹2,000 installment.',
      te: 'రైతులు తమ తదుపరి ₹2,000 కిస్తీని పొందడానికి pmkisan.gov.in లో లేదా సమీప CSC కేంద్రంలో ఆధార్ e-KYCని వెంటనే పూర్తి చేయాలి.',
      hi: 'किसान अपनी ₹2,000 की अगली किस्त बिना रुकावट पाने के लिए pmkisan.gov.in पर ओटीपी से या CSC पर जाकर अनिवार्य e-KYC पूरा करें।'
    },
    type: 'update',
    date: 'Active Directive',
    relatedServiceId: 'pm-kisan',
    isUrgent: false,
    badgeText: {
      en: 'Mandatory Update',
      te: 'తప్పనిసరి అప్‌డేట్',
      hi: 'अनिवार्य सूचना'
    }
  },
  {
    id: 'ann-05',
    title: {
      en: 'Digital Locker Integration: Instant Auto-Verification for Certificates',
      te: 'డిజిలాకర్ అనుసంధానం: పత్రాల తక్షణ ఆటో ధృవీకరణ',
      hi: 'डिजिलॉकर एकीकरण: प्रमाण पत्रों का त्वरित स्वतः सत्यापन'
    },
    message: {
      en: 'Citizens can now link their DigiLocker accounts on the scholarship and pension portals to automatically verify 10th/12th marksheets, caste, and income certificates without physical copies.',
      te: 'పౌరులు ఇప్పుడు డిజిలాకర్‌ను అనుసంధానించడం ద్వారా మార్కుల జాబితా, కుల మరియు ఆదాయ ధృవీకరణ పత్రాలను సులభంగా ఆన్‌లైన్‌లో ధృవీకరించుకోవచ్చు.',
      hi: 'छात्रवृत्ति और पेंशन पोर्टल्स पर डिजिलॉकर लिंक कर विद्यार्थी अपने 10वीं/12वीं अंकपत्र व जाति प्रमाण पत्र बिना कागजात जमा किए सत्यापित करा सकते हैं।'
    },
    type: 'update',
    date: 'Service Feature',
    isUrgent: false,
    badgeText: {
      en: 'Tech Upgrade',
      te: 'సాంకేతిక మెరుగుదల',
      hi: 'तकनीकी सुविधा'
    }
  }
];
