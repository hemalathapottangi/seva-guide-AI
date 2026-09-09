import { GovernmentService, Language } from '../types';
import {
  servicesData,
  getServiceById,
  getServicesByCategory,
  getServicesByTargetGroup,
  searchServices,
  getEligibleServices,
  getRelatedServices,
  getAllCategories,
  getDashboardMetrics
} from '../data/servicesData';

export {
  servicesData,
  getServiceById,
  getServicesByCategory,
  getServicesByTargetGroup,
  searchServices,
  getEligibleServices,
  getRelatedServices,
  getAllCategories,
  getDashboardMetrics
};

/**
 * Returns localized services for rendering in given language
 */
export function getServicesByLanguage(lang: Language): Array<{
  service: GovernmentService;
  localizedName: string;
  localizedDescription: string;
  localizedDepartment: string;
}> {
  return servicesData.map(service => ({
    service,
    localizedName: service.name[lang] || service.name.en,
    localizedDescription: service.shortDescription[lang] || service.shortDescription.en,
    localizedDepartment: service.department[lang] || service.department.en
  }));
}

/**
 * Intelligent single-service finder using natural language tokens, keywords, and category matches.
 */
export function findBestService(
  query: string,
  lang: Language = 'en',
  activeServiceId?: string | null
): { service: GovernmentService | null; score: number; confidence: 'high' | 'medium' | 'low' } {
  if (!query || !query.trim()) {
    return { service: null, score: 0, confidence: 'low' };
  }

  const q = query.toLowerCase();
  let bestService: GovernmentService | null = null;
  let highestScore = 0;

  for (const service of servicesData) {
    let score = 0;

    // Prioritize active context if conversation refers to "it", "this scheme", etc.
    if (activeServiceId && service.id === activeServiceId) {
      if (q.includes('document') || q.includes('apply') || q.includes('how') || q.includes('eligible') || q.includes('link') || q.includes('cost')) {
        score += 45;
      }
    }

    // Exact ID or Code match
    if (q.includes(service.id.toLowerCase()) || q.includes(service.code.toLowerCase())) {
      score += 100;
    }

    // Name match
    if (service.name.en.toLowerCase().includes(q) || service.name[lang]?.toLowerCase().includes(q)) {
      score += 70;
    }

    // Individual words match in name
    const qTokens = q.split(/\s+/).filter(t => t.length > 2);
    for (const token of qTokens) {
      if (service.name.en.toLowerCase().includes(token)) score += 15;
      if (service.tags.some(tag => tag.toLowerCase().includes(token))) score += 12;
      if (service.keywords?.some(k => k.toLowerCase().includes(token))) score += 18;
      if (service.synonyms?.some(s => s.toLowerCase().includes(token))) score += 15;
      if (service.category.toLowerCase().includes(token)) score += 10;
      if (service.shortDescription.en.toLowerCase().includes(token)) score += 6;
    }

    if (score > highestScore) {
      highestScore = score;
      bestService = service;
    }
  }

  const confidence: 'high' | 'medium' | 'low' =
    highestScore >= 60 ? 'high' : highestScore >= 25 ? 'medium' : 'low';

  return {
    service: bestService,
    score: highestScore,
    confidence
  };
}
