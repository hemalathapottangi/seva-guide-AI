export type Language = 'en' | 'te' | 'hi';

export type Category = 
  | 'all'
  | 'education' 
  | 'employment' 
  | 'healthcare' 
  | 'agriculture' 
  | 'housing' 
  | 'women_child' 
  | 'senior_citizens' 
  | 'social_welfare' 
  | 'disability' 
  | 'certificates' 
  | 'identity' 
  | 'financial_assistance' 
  | 'utilities' 
  | 'transport' 
  | 'rural_development' 
  | 'business' 
  | 'other';

export type TargetGroup = 
  | 'all'
  | 'students' 
  | 'farmers' 
  | 'senior_citizens' 
  | 'women' 
  | 'youth' 
  | 'low_income' 
  | 'workers' 
  | 'disabled' 
  | 'entrepreneurs' 
  | 'general';

export interface DocumentItem {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  isMandatory: boolean;
  acceptableFormats: string;
  instructions: Record<Language, string>;
}

export interface ApplicationStep {
  stepNumber: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  tips?: Record<Language, string>;
  estimatedTime?: string;
}

export interface EligibilityCriteria {
  whoCanApply: Record<Language, string[]>;
  conditions: Record<Language, string[]>;
  ageRange?: { min?: number; max?: number };
  maxAnnualIncome?: number; // in INR
  targetOccupations?: string[];
  citizenshipRequired: boolean;
  notes?: Record<Language, string>;
}

export interface PostSubmissionInfo {
  timeline: Record<Language, string>;
  trackingMethod: Record<Language, string>;
  grievanceContact: Record<Language, string>;
  nextSteps: Record<Language, string[]>;
}

export interface GovernmentService {
  id: string;
  code: string;
  name: Record<Language, string>;
  shortDescription: Record<Language, string>;
  fullDescription: Record<Language, string>;
  purpose: Record<Language, string>;
  department: Record<Language, string>;
  category: Category;
  targetGroups: TargetGroup[];
  eligibility: EligibilityCriteria;
  documents: DocumentItem[];
  steps: ApplicationStep[];
  postSubmission: PostSubmissionInfo;
  links: {
    applyUrl: string;
    officialPortalUrl: string;
    portalName: string;
    helplineNumber: string;
  };
  activeDeadline?: string;
  status: 'active' | 'upcoming' | 'open_yearly';
  popular?: boolean;
  tags: string[];
  keywords?: string[];
  synonyms?: string[];
  location?: string;
  lastUpdated?: string;
  isDemo?: boolean;
}

export type SpeechStatus = 'idle' | 'listening' | 'processing' | 'error' | 'unsupported';
export type TtsStatus = 'idle' | 'speaking' | 'paused';

export interface AwarenessNotification {
  id: string;
  title: Record<Language, string>;
  message: Record<Language, string>;
  type: 'deadline' | 'new_scheme' | 'advisory' | 'update';
  date: string;
  relatedServiceId?: string;
  isUrgent?: boolean;
  badgeText?: Record<Language, string>;
}

export interface AiRecommendation {
  service: GovernmentService;
  matchScore: number;
  matchReason: Record<Language, string>;
  personalizedSummary: Record<Language, string>;
  keyDocumentsHighlight: string[];
  quickApplyAdvice: Record<Language, string>;
}

export interface CitizenProfile {
  occupation: string;
  annualIncome: number;
  age: number;
  category: string;
  state: string;
  isStudent: boolean;
  isFarmer: boolean;
  isSeniorCitizen: boolean;
  isWoman: boolean;
}

export type ChatMatchConfidence = 'exact' | 'closest' | 'clarification' | 'followup';

export interface StructuredAiServiceMatch {
  service: GovernmentService;
  whyExplanation: Record<Language, string>;
  eligibilitySummary: Record<Language, string>;
  requiredDocuments: string[];
  applicationSteps: { stepNumber: number; title: Record<Language, string>; description: Record<Language, string> }[];
  officialLink: string;
  portalName: string;
  importantNote: Record<Language, string>;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  timestamp: number;
  text: string;
  serviceMatch?: StructuredAiServiceMatch;
  confidence?: ChatMatchConfidence;
  closestServices?: GovernmentService[];
  quickFollowUps?: string[];
  activeServiceId?: string;
}
