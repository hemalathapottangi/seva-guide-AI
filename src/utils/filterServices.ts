import { GovernmentService, Category, TargetGroup, Language } from '../types';

export interface FilterServicesOptions {
  services: GovernmentService[];
  searchQuery?: string;
  category?: Category | string;
  audience?: TargetGroup | string;
  currentLang?: Language;
}

// Common bilingual & contextual synonyms for resilient natural-language search
const SEARCH_SYNONYMS: Record<string, string[]> = {
  // Help & finance
  help: ['assistance', 'support', 'aid', 'grant', 'subsidy', 'scheme', 'yojana', 'help'],
  assistance: ['help', 'aid', 'grant', 'subsidy', 'support'],
  aid: ['assistance', 'support', 'grant', 'help'],
  grant: ['assistance', 'scholarship', 'fund', 'aid'],
  money: ['financial', 'grant', 'cash', 'fund', 'subsidy', 'dbt', 'pension', 'loan'],
  fund: ['financial', 'money', 'grant', 'assistance'],
  free: ['muft', 'subsidy', 'zero cost', 'free', '100%'],
  loan: ['mudra', 'credit', 'finance', 'svanidhi', 'borrow'],

  // College & Education
  college: ['college', 'university', 'degree', 'diploma', 'higher education', 'students', 'institution', 'pragati', 'nsp'],
  school: ['students', 'matric', 'post-matric', 'scholarship', 'education'],
  scholarship: ['scholarship', 'stipend', 'fellowship', 'pragati', 'nsp'],
  student: ['students', 'youth', 'scholarship', 'college', 'pragati', 'nsp'],

  // Health & Medicine
  health: ['healthcare', 'medical', 'hospital', 'ayushman', 'aushadhi', 'wellness'],
  medicine: ['medicine', 'aushadhi', 'pharmacy', 'generic', 'drugs'],
  medical: ['health', 'hospital', 'ayushman', 'medicine', 'clinic'],
  hospital: ['ayushman', 'health', 'treatment', 'medical', 'golden card'],
  disease: ['health', 'ayushman', 'treatment', 'medical'],

  // Farmer & Agriculture
  farmer: ['farmer', 'kisan', 'agriculture', 'crop', 'fasal', 'krishi'],
  farming: ['farmer', 'kisan', 'agriculture', 'crop', 'fasal', 'krishi'],
  crop: ['fasal', 'farmer', 'kisan', 'insurance', 'bima', 'pmfby'],
  insurance: ['bima', 'fasal', 'crop', 'pmfby', 'ayushman'],

  // Women & Children
  girl: ['girl', 'daughter', 'woman', 'women', 'mahila', 'sukanya', 'female', 'matru', 'balika'],
  daughter: ['girl', 'daughter', 'sukanya', 'samriddhi', 'pragati', 'balika'],
  woman: ['women', 'mahila', 'mother', 'maternity', 'matru', 'sukanya', 'pragati'],
  women: ['woman', 'mahila', 'mother', 'maternity', 'matru', 'sukanya', 'pragati'],
  baby: ['birth', 'maternity', 'matru', 'newborn', 'infant', 'child', 'crs'],
  pregnant: ['maternity', 'matru', 'pmmvy', 'vandana', 'infant', 'women'],

  // Disability
  handicap: ['disability', 'disabled', 'divyang', 'divyangjan', 'udid', 'swavlamban'],
  disabled: ['disability', 'disabled', 'divyang', 'divyangjan', 'udid', 'swavlamban'],
  disability: ['disability', 'disabled', 'divyang', 'divyangjan', 'udid', 'swavlamban'],
  divyang: ['disability', 'disabled', 'udid', 'swavlamban'],

  // Energy & Solar
  solar: ['solar', 'rooftop', 'bijli', 'electricity', 'power', 'surya', 'energy'],
  electricity: ['solar', 'bijli', 'power', 'surya', 'energy'],
  power: ['solar', 'electricity', 'bijli', 'surya'],
  bijli: ['solar', 'electricity', 'power', 'surya', 'muft'],

  // Transport & Driving
  license: ['licence', 'license', 'sarathi', 'driving', 'parivahan', 'llr', 'dl'],
  licence: ['license', 'licence', 'sarathi', 'driving', 'parivahan', 'llr', 'dl'],
  driving: ['license', 'licence', 'sarathi', 'parivahan', 'dl', 'driver'],
  vehicle: ['transport', 'parivahan', 'driving', 'licence'],

  // Jobs & Employment
  job: ['employment', 'work', 'skill', 'training', 'recruitment', 'career', 'mgnrega', 'shram', 'pmkvy'],
  work: ['job', 'employment', 'worker', 'labour', 'shram', 'mgnrega'],
  worker: ['unorganized', 'shram', 'labour', 'mgnrega', 'svanidhi'],
  training: ['skill', 'pmkvy', 'kaushal', 'training', 'employment'],
  pension: ['pension', 'old age', 'ignop', 'senior citizen', 'nsap', 'retirement'],
  elderly: ['senior citizen', 'old age', 'pension', 'ignop'],

  // Identity & Certificates
  aadhaar: ['uidai', 'aadhaar', 'identity', 'card', 'fingerprint'],
  certificate: ['caste', 'income', 'residence', 'birth', 'death', 'crs', 'meeseva', 'e-seva'],
  caste: ['certificate', 'income', 'residence', 'state certificates', 'meeseva'],
  birth: ['death', 'crs', 'civil registration', 'certificate', 'newborn']
};

/**
 * Normalizes a category string to handle differences in naming, casing, formatting, or aliases.
 */
export function normalizeCategory(category?: string): string {
  if (!category || category === 'all' || category === 'All' || category.trim() === '') {
    return 'all';
  }

  const clean = category.toLowerCase().trim().replace(/&/g, 'and').replace(/\s+/g, '_');

  // Direct matches or known aliases
  if (clean.includes('educat') || clean.includes('scholarship')) return 'education';
  if (clean.includes('agri') || clean.includes('farm') || clean.includes('kisan')) return 'agriculture';
  if (clean.includes('health') || clean.includes('medic') || clean.includes('wellness')) return 'healthcare';
  if (clean.includes('employ') || clean.includes('job') || clean.includes('skill')) return 'employment';
  if (clean.includes('women') || clean.includes('child') || clean.includes('matru')) return 'women_child';
  if (clean.includes('disab') || clean.includes('divyang')) return 'disability';
  if (clean.includes('certificat') || clean.includes('civil') || clean.includes('birth')) return 'certificates';
  if (clean.includes('utilit') || clean.includes('energy') || clean.includes('solar') || clean.includes('power')) return 'utilities';
  if (clean.includes('transport') || clean.includes('licens') || clean.includes('driving')) return 'transport';
  if (clean.includes('rural') || clean.includes('mgnrega') || clean.includes('livelihood')) return 'rural_development';
  if (clean.includes('hous') || clean.includes('urban') || clean.includes('awas')) return 'housing';
  if (clean.includes('busin') || clean.includes('msme') || clean.includes('mudra')) return 'business';
  if (clean.includes('financ') || clean.includes('subsid') || clean.includes('svanidhi')) return 'financial_assistance';
  if (clean.includes('ident') || clean.includes('aadhaar') || clean.includes('uidai')) return 'identity';
  if (clean.includes('welfare') || clean.includes('pension') || clean.includes('social')) return 'social_welfare';

  return clean;
}

/**
 * Normalizes audience input string.
 */
export function normalizeAudience(audience?: string): string {
  if (!audience || audience === 'all' || audience === 'All' || audience.trim() === '') {
    return 'all';
  }

  const clean = audience.toLowerCase().trim().replace(/&/g, 'and').replace(/\s+/g, '_');

  if (clean.includes('citizen') || clean.includes('general') || clean === 'all_citizens') return 'citizens';
  if (clean.includes('student') || clean.includes('youth')) return 'students';
  if (clean.includes('farm') || clean.includes('agri') || clean.includes('kisan')) return 'farmers';
  if (clean.includes('women') || clean.includes('child') || clean.includes('girl')) return 'women';
  if (clean.includes('job') || clean.includes('seeker') || clean.includes('unemploy')) return 'youth';
  if (clean.includes('disab') || clean.includes('divyang')) return 'disabled';
  if (clean.includes('worker') || clean.includes('unorganiz') || clean.includes('labour')) return 'workers';
  if (clean.includes('vendor') || clean.includes('entrepreneur') || clean.includes('business')) return 'entrepreneurs';
  if (clean.includes('senior') || clean.includes('elder') || clean.includes('pension')) return 'senior_citizens';
  if (clean.includes('low_income') || clean.includes('poor') || clean.includes('bpl')) return 'low_income';

  return clean;
}

/**
 * Checks if a service satisfies the selected category filter.
 */
export function matchesCategory(service: GovernmentService, selectedCategory?: string): boolean {
  const normCat = normalizeCategory(selectedCategory);
  if (normCat === 'all') return true;

  // Direct category equality
  if (service.category === normCat) return true;

  // Domain-specific inclusive matching
  if (normCat === 'women_child') {
    return service.category === 'women_child' || service.id === 'sukanya-samriddhi' || service.targetGroups.includes('women');
  }
  if (normCat === 'social_welfare') {
    return service.category === 'social_welfare' || service.id === 'ignop-pension' || service.id === 'sukanya-samriddhi';
  }
  if (normCat === 'healthcare') {
    return service.category === 'healthcare' || service.id === 'pm-jan-aushadhi' || service.id === 'ayushman-bharat';
  }
  if (normCat === 'education') {
    return service.category === 'education' || service.id === 'nsp-scholarship' || service.id === 'aicte-pragati';
  }
  if (normCat === 'agriculture') {
    return service.category === 'agriculture' || service.id === 'pm-kisan' || service.id === 'pm-fby';
  }
  if (normCat === 'employment') {
    return service.category === 'employment' || service.id === 'pmkvy-skill' || service.id === 'e-shram' || service.id === 'mgnrega-job-card';
  }
  if (normCat === 'certificates') {
    return service.category === 'certificates' || service.id === 'state-certificates' || service.id === 'crs-birth-death';
  }
  if (normCat === 'transport') {
    return service.category === 'transport' || service.id === 'parivahan-driving-license';
  }
  if (normCat === 'utilities') {
    return service.category === 'utilities' || service.id === 'pm-surya-ghar';
  }
  if (normCat === 'disability') {
    return service.category === 'disability' || service.id === 'udid-disability';
  }
  if (normCat === 'identity') {
    return service.category === 'identity' || service.id === 'uidai-aadhaar';
  }
  if (normCat === 'financial_assistance') {
    return service.category === 'financial_assistance' || service.id === 'pm-svanidhi' || service.id === 'pm-mudra';
  }
  if (normCat === 'rural_development') {
    return service.category === 'rural_development' || service.id === 'mgnrega-job-card';
  }
  if (normCat === 'housing') {
    return service.category === 'housing' || service.id === 'pm-awas';
  }
  if (normCat === 'business') {
    return service.category === 'business' || service.id === 'pm-mudra';
  }

  return false;
}

/**
 * Checks if a service satisfies the selected target audience filter.
 */
export function matchesAudience(service: GovernmentService, selectedAudience?: string): boolean {
  const normAud = normalizeAudience(selectedAudience);
  if (normAud === 'all') return true;

  const groups = service.targetGroups || [];
  const cat = service.category;
  const id = service.id;

  switch (normAud) {
    case 'citizens':
      return groups.includes('all') || groups.includes('general');

    case 'students':
      return groups.includes('students') || groups.includes('youth') || cat === 'education' || id === 'aicte-pragati' || id === 'nsp-scholarship' || id === 'pmkvy-skill';

    case 'farmers':
      return groups.includes('farmers') || cat === 'agriculture' || id === 'pm-kisan' || id === 'pm-fby';

    case 'women':
      return groups.includes('women') || cat === 'women_child' || id === 'sukanya-samriddhi' || id === 'pm-matru-vandana' || id === 'aicte-pragati';

    case 'youth': // Also represents Job Seekers
      return groups.includes('youth') || groups.includes('workers') || cat === 'employment' || id === 'pmkvy-skill' || id === 'e-shram' || id === 'mgnrega-job-card';

    case 'disabled':
      return groups.includes('disabled') || cat === 'disability' || id === 'udid-disability';

    case 'workers':
      return groups.includes('workers') || groups.includes('low_income') || id === 'e-shram' || id === 'mgnrega-job-card' || id === 'pm-svanidhi';

    case 'entrepreneurs':
      return groups.includes('entrepreneurs') || cat === 'business' || id === 'pm-svanidhi' || id === 'pm-mudra';

    case 'senior_citizens':
      return groups.includes('senior_citizens') || id === 'ignop-pension' || id === 'pm-jan-aushadhi' || id === 'ayushman-bharat';

    case 'low_income':
      return groups.includes('low_income');

    default:
      return groups.includes(normAud as TargetGroup);
  }
}

/**
 * Checks if a service matches a natural-language search query across multiple languages,
 * descriptions, purpose, departments, tags, keywords, and eligibility text.
 */
export function matchesSearchQuery(service: GovernmentService, query: string, lang: Language = 'en'): boolean {
  const cleanQuery = (query || '').toLowerCase().trim();
  if (!cleanQuery) return true;

  // Build searchable text corpus
  const corpusParts: string[] = [
    service.name.en,
    service.name.te || '',
    service.name.hi || '',
    service.shortDescription.en,
    service.shortDescription.te || '',
    service.shortDescription.hi || '',
    service.fullDescription.en,
    service.fullDescription.te || '',
    service.fullDescription.hi || '',
    service.purpose.en,
    service.purpose.te || '',
    service.purpose.hi || '',
    service.department.en,
    service.department.te || '',
    service.department.hi || '',
    service.category,
    ...(service.tags || []),
    ...(service.keywords || []),
    ...(service.synonyms || []),
    ...(service.targetGroups || []),
    ...(service.eligibility?.whoCanApply?.en || []),
    ...(service.eligibility?.whoCanApply?.te || []),
    ...(service.eligibility?.whoCanApply?.hi || []),
    ...(service.eligibility?.conditions?.en || []),
    ...(service.eligibility?.conditions?.te || []),
    ...(service.eligibility?.conditions?.hi || []),
    service.links?.portalName || ''
  ];

  const corpus = corpusParts.join(' ').toLowerCase();

  // 1. Direct whole-query substring match
  if (corpus.includes(cleanQuery)) return true;

  // 2. Tokenized multi-word search with synonym matching
  const tokens = cleanQuery.split(/\s+/).filter(t => t.length > 1);
  if (tokens.length === 0) return true;

  // All tokens must be matched directly or via expanded synonyms
  const allTokensMatch = tokens.every(token => {
    // Check if token exists in corpus
    if (corpus.includes(token)) return true;

    // Check if token matches a synonym
    const synList = SEARCH_SYNONYMS[token];
    if (synList && synList.some(s => corpus.includes(s))) {
      return true;
    }

    // Prefix match for tokens > 3 chars
    if (token.length >= 4 && corpus.split(/\s+/).some(word => word.startsWith(token.slice(0, -1)))) {
      return true;
    }

    return false;
  });

  return allTokensMatch;
}

/**
 * Main Centralized Data-Driven Filtering Function.
 * Filters the central government services catalogue according to search, category, audience.
 */
export function filterServices({
  services,
  searchQuery = '',
  category = 'all',
  audience = 'all',
  currentLang = 'en'
}: FilterServicesOptions): GovernmentService[] {
  if (!services || !Array.isArray(services)) {
    return [];
  }

  const cleanQuery = searchQuery.trim().toLowerCase();

  const filtered = services.filter(service => {
    // 1. Category Filter
    if (!matchesCategory(service, category)) {
      return false;
    }

    // 2. Target Audience Filter
    if (!matchesAudience(service, audience)) {
      return false;
    }

    // 3. Search Query Filter
    if (cleanQuery && !matchesSearchQuery(service, cleanQuery, currentLang)) {
      return false;
    }

    return true;
  });

  // If search query is present, rank higher relevance results to the top
  if (cleanQuery) {
    return filtered.sort((a, b) => {
      const scoreA = calculateRelevance(a, cleanQuery, currentLang);
      const scoreB = calculateRelevance(b, cleanQuery, currentLang);
      return scoreB - scoreA;
    });
  }

  return filtered;
}

function calculateRelevance(service: GovernmentService, query: string, lang: Language): number {
  let score = 0;
  const nameCurrent = service.name[lang]?.toLowerCase() || '';
  const nameEn = service.name.en.toLowerCase();
  const descCurrent = service.shortDescription[lang]?.toLowerCase() || '';
  const descEn = service.shortDescription.en.toLowerCase();
  const purposeCurrent = service.purpose[lang]?.toLowerCase() || '';
  const purposeEn = service.purpose.en.toLowerCase();

  if (nameCurrent.includes(query) || nameEn.includes(query)) score += 100;
  if (service.category.toLowerCase().includes(query)) score += 60;
  if (service.tags.some(t => t.toLowerCase().includes(query))) score += 40;
  if (service.keywords?.some(k => k.toLowerCase().includes(query))) score += 35;
  if (purposeCurrent.includes(query) || purposeEn.includes(query)) score += 25;
  if (descCurrent.includes(query) || descEn.includes(query)) score += 15;

  // Check individual query tokens
  const tokens = query.split(/\s+/).filter(t => t.length > 1);
  tokens.forEach(t => {
    if (nameEn.includes(t) || nameCurrent.includes(t)) score += 40;
    if (service.tags.some(tag => tag.toLowerCase().includes(t))) score += 20;
    if (service.keywords?.some(k => k.toLowerCase().includes(t))) score += 20;
    if (service.category.toLowerCase().includes(t)) score += 15;
  });

  return score;
}

