import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Trash2, 
  CheckCircle2, 
  FileCheck2, 
  ExternalLink, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Bot, 
  User, 
  RefreshCw, 
  AlertCircle, 
  Info, 
  Layers,
  BookOpen,
  CornerDownLeft
} from 'lucide-react';
import { Language, GovernmentService, ChatMessage } from '../types';
import { translations } from '../data/translations';
import { evaluateCitizenQuery } from '../utils/sevaguideAiEngine';

interface AiServiceAdvisorProps {
  currentLang: Language;
  onSelectService: (service: GovernmentService) => void;
  onApplyDirect: (service: GovernmentService) => void;
}

export const AiServiceAdvisor: React.FC<AiServiceAdvisorProps> = ({
  currentLang,
  onSelectService,
  onApplyDirect
}) => {
  const t = translations[currentLang];
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<string | undefined>(undefined);

  // Initial welcome message from SEVAGUIDE AI Assistant
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome-1',
      sender: 'assistant',
      timestamp: Date.now(),
      text: currentLang === 'en'
        ? `Hello! I am **SEVAGUIDE AI Assistant**, your conversational government service advisor.\n\nAsk me about any welfare scheme, educational financial aid, farmer assistance, health cover, required documents, or application procedures in simple words. I will identify the exact service and outline your verified next steps.`
        : currentLang === 'te'
        ? `నమస్కారం! నేను **SEVAGUIDE AI అసిస్టెంట్**, మీ పౌర సంక్షేమ పథకాల మార్గదర్శిని.\n\nవిద్యార్థి స్కాలర్‌షిప్‌లు, రైతు పథకాలు, ఉచిత ఆరోగ్య బీమా లేదా దరఖాస్తు విధానం గురించి నాతో మాట్లాడండి. మీకు సరిపోయే ఖచ్చితమైన పథకాన్ని నేను గుర్తిస్తాను.`
        : `नमस्ते! मैं **SEVAGUIDE AI सहायक** हूं, आपका नागरिक सेवा सलाहकार।\n\nमुझसे किसी भी सरकारी योजना, छात्रवृत्ति, किसान सहायता, स्वास्थ्य बीमा, आवश्यक दस्तावेज या आवेदन प्रक्रिया के बारे में सरल शब्दों में पूछें।`,
      quickFollowUps: [
        'I am a student from Andhra Pradesh and I need financial assistance for my education. Which government service should I apply for?',
        'I am a farmer and need government assistance.',
        'I need help with a health-related government scheme.',
        'I want to apply for a government service related to employment.',
        'I want to know which documents are required.'
      ]
    }
  ]);

  // Demonstration prompt suggestions
  const demoPrompts = [
    {
      label: currentLang === 'en' ? 'Student Education Financial Aid' : currentLang === 'te' ? 'విద్యార్థి విద్యా ఆర్థిక సహాయం' : 'विद्यार्थी शिक्षा वित्तीय सहायता',
      prompt: 'I am a student from Andhra Pradesh and I need financial assistance for my education. Which government service should I apply for?'
    },
    {
      label: currentLang === 'en' ? 'Farmer Assistance (PM-Kisan)' : currentLang === 'te' ? 'రైతు ఆర్థిక సహాయం' : 'किसान सम्मान सहायता',
      prompt: 'I am a farmer and need government assistance.'
    },
    {
      label: currentLang === 'en' ? 'Health Insurance (Ayushman Bharat)' : currentLang === 'te' ? 'ఆరోగ్య బీమా (ఆయుష్మాన్)' : 'मुफ्त स्वास्थ्य योजना',
      prompt: 'I need help with a health-related government scheme.'
    },
    {
      label: currentLang === 'en' ? 'Unorganized Labor (e-Shram)' : currentLang === 'te' ? 'కార్మిక సంక్షేమం (ఈ-శ్రమ్)' : 'श्रमिक कल्याण (ई-श्रम)',
      prompt: 'I want to apply for a government service related to employment.'
    },
    {
      label: currentLang === 'en' ? 'Small Business Loan (MUDRA)' : currentLang === 'te' ? 'చిన్న వ్యాపార రుణం (ముద్ర)' : 'व्यापार ऋण (मुद्रा)',
      prompt: 'I want a collateral free government loan to start a small retail shop.'
    }
  ];

  // Auto-scroll chat to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend !== undefined ? textToSend : inputMessage).trim();
    if (!text) return;

    const userMessageId = `user-${Date.now()}`;
    const newUserMsg: ChatMessage = {
      id: userMessageId,
      sender: 'user',
      timestamp: Date.now(),
      text
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate conversational reasoning step
    setTimeout(() => {
      const evaluation = evaluateCitizenQuery(text, currentLang, activeServiceId);

      if (evaluation.activeServiceId) {
        setActiveServiceId(evaluation.activeServiceId);
      }

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        timestamp: Date.now(),
        text: evaluation.replyText,
        serviceMatch: evaluation.serviceMatch,
        confidence: evaluation.confidence,
        closestServices: evaluation.closestServices,
        quickFollowUps: evaluation.quickFollowUps,
        activeServiceId: evaluation.activeServiceId
      };

      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleClearChat = () => {
    setActiveServiceId(undefined);
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'assistant',
        timestamp: Date.now(),
        text: currentLang === 'en'
          ? `Chat history cleared. How can **SEVAGUIDE AI Assistant** help you today?`
          : currentLang === 'te'
          ? `చాట్ చరిత్ర క్లియర్ చేయబడింది. ఈ రోజు **SEVAGUIDE AI అసిస్టెంట్** మీకు ఎలా సహాయపడగలదు?`
          : `चैट इतिहास साफ़ हो गया। आज **SEVAGUIDE AI सहायक** आपकी किस प्रकार सहायता कर सकता है?`,
        quickFollowUps: [
          'I am a student from Andhra Pradesh and I need financial assistance for my education. Which government service should I apply for?',
          'I am a farmer and need government assistance.',
          'I need help with a health-related government scheme.'
        ]
      }
    ]);
  };

  return (
    <div id="sevaguide-ai-chatbot-container" className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-7 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-indigo-200 rounded-full text-xs font-bold uppercase tracking-wider border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>SEVAGUIDE AI Assistant</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {t.aiFinderTitle}
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              {t.aiFinderSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
            <button
              id="clear-chat-btn"
              type="button"
              onClick={handleClearChat}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 border border-white/15"
              title={t.chatClearBtn}
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{t.chatClearBtn}</span>
            </button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Suggested Demo Prompts Strip */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>{t.samplePromptsTitle}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {demoPrompts.map((item, idx) => (
            <button
              key={idx}
              id={`demo-prompt-${idx}`}
              type="button"
              onClick={() => handleSendMessage(item.prompt)}
              className="text-left px-3 py-1.5 bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-800 border border-slate-200 hover:border-indigo-300 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Stream */}
      <div 
        id="chat-messages-container"
        className="bg-slate-50 rounded-3xl border border-slate-200 p-4 sm:p-6 min-h-[460px] max-h-[640px] overflow-y-auto space-y-5 shadow-inner"
      >
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';

          return (
            <div 
              key={msg.id}
              className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Bot className="w-5 h-5" />
                </div>
              )}

              <div className={`max-w-2xl sm:max-w-3xl space-y-3 ${isUser ? 'items-end' : 'items-start'}`}>
                {/* Message Bubble */}
                <div 
                  className={`p-4 sm:p-5 rounded-2xl text-sm leading-relaxed ${
                    isUser
                      ? 'bg-blue-700 text-white rounded-br-xs shadow-sm font-medium'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-xs shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* Structured Recommendation Card (When AI identified an Exact Service) */}
                {msg.serviceMatch && (
                  <div 
                    id={`structured-match-card-${msg.serviceMatch.service.id}`}
                    className="bg-white border-2 border-indigo-200 rounded-2xl p-5 sm:p-6 shadow-md space-y-5 text-slate-800"
                  >
                    {/* Header with Recommended Service Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-full border border-indigo-200 uppercase tracking-wider mb-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{t.recommendedServiceBadge}</span>
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                          {msg.serviceMatch.service.name[currentLang]}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {msg.serviceMatch.service.department[currentLang]} • Scheme Code: <span className="font-mono font-semibold">{msg.serviceMatch.service.code}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          id={`view-details-${msg.serviceMatch.service.id}`}
                          type="button"
                          onClick={() => onSelectService(msg.serviceMatch!.service)}
                          className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                          <span>View Full Details</span>
                        </button>
                        <button
                          id={`apply-now-${msg.serviceMatch.service.id}`}
                          type="button"
                          onClick={() => onApplyDirect(msg.serviceMatch!.service)}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5"
                        >
                          <span>{t.applyNow}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* 1. Why this service matches */}
                    <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl space-y-1">
                      <h4 className="text-xs font-bold text-blue-900 flex items-center gap-1.5 uppercase tracking-wide">
                        <Info className="w-3.5 h-3.5 text-blue-600" />
                        <span>{t.whyServiceMatches}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                        {msg.serviceMatch.whyExplanation[currentLang]}
                      </p>
                    </div>

                    {/* 2. Eligibility Criteria */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                        <span>{t.eligibility}</span>
                      </h4>
                      <div className="p-3 bg-slate-50 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed border border-slate-100">
                        <p className="font-medium">{msg.serviceMatch.eligibilitySummary[currentLang]}</p>
                        <div className="mt-2 flex flex-wrap gap-2 text-xs">
                          <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md text-slate-600">
                            Age: {msg.serviceMatch.service.eligibility.ageRange.min} - {msg.serviceMatch.service.eligibility.ageRange.max} Years
                          </span>
                          {msg.serviceMatch.service.eligibility.maxAnnualIncome && (
                            <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md text-slate-600">
                              Income Limit: Up to ₹{msg.serviceMatch.service.eligibility.maxAnnualIncome.toLocaleString('en-IN')}/year
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* 3. Required Documents */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <FileCheck2 className="w-3.5 h-3.5 text-indigo-600" />
                        <span>{t.requiredDocuments}</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {msg.serviceMatch.service.documents.map((doc, dIdx) => (
                          <div 
                            key={dIdx}
                            className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2"
                          >
                            <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                              {dIdx + 1}
                            </span>
                            <div>
                              <span className="font-semibold text-slate-900 block">{doc.name[currentLang]}</span>
                              <span className="text-[11px] text-slate-500">{doc.isMandatory ? 'Mandatory' : 'Optional'} • {doc.acceptableFormats}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 4. How to Apply Steps */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-indigo-600" />
                        <span>{t.howToApplySection}</span>
                      </h4>
                      <div className="space-y-2">
                        {msg.serviceMatch.applicationSteps.map((step) => (
                          <div 
                            key={step.stepNumber}
                            className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1"
                          >
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 bg-blue-600 text-white rounded-md text-[11px] font-bold">
                                Step {step.stepNumber}
                              </span>
                              <span className="font-bold text-slate-900">{step.title[currentLang]}</span>
                            </div>
                            <p className="text-slate-600 text-xs pl-1 leading-relaxed">
                              {step.description[currentLang]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 5. Official Application Link & Important Note */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>{t.officialApplyLink}:</span>
                        </span>
                        <a 
                          href={msg.serviceMatch.officialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-emerald-800 hover:text-emerald-950 font-bold underline flex items-center gap-1"
                        >
                          <span>{msg.serviceMatch.portalName}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <button
                        type="button"
                        onClick={() => onApplyDirect(msg.serviceMatch!.service)}
                        className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-1.5"
                      >
                        <span>Proceed to Application</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Important Info Note */}
                    <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                      <span className="font-bold block">{t.importantInfoSection}:</span>
                      <p>{msg.serviceMatch.importantNote[currentLang]}</p>
                    </div>
                  </div>
                )}

                {/* Closest Services Cards (When no exact match could be confidently identified) */}
                {msg.closestServices && msg.closestServices.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{t.noExactMatchNotice}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {msg.closestServices.map((service) => (
                        <div 
                          key={service.id}
                          className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-sm transition-all space-y-2.5 text-left"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-bold text-slate-900 text-sm line-clamp-1">
                              {service.name[currentLang]}
                            </h4>
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-md uppercase">
                              {service.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 line-clamp-2">
                            {service.shortDescription[currentLang]}
                          </p>
                          <div className="flex items-center justify-between pt-1">
                            <button
                              type="button"
                              onClick={() => onSelectService(service)}
                              className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1"
                            >
                              <span>View Details</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSendMessage(`Tell me about ${service.name[currentLang]}`)}
                              className="px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg transition-colors"
                            >
                              Ask Assistant
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Smart Follow-Up Quick Buttons */}
                {msg.quickFollowUps && msg.quickFollowUps.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {t.quickFollowUpsLabel}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.quickFollowUps.map((action, aIdx) => (
                        <button
                          key={aIdx}
                          id={`followup-btn-${aIdx}`}
                          type="button"
                          onClick={() => handleSendMessage(action)}
                          className="px-3 py-1.5 bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-800 border border-slate-200 hover:border-indigo-300 rounded-xl text-xs font-medium transition-colors flex items-center gap-1 shadow-2xs"
                        >
                          <span>{action}</span>
                          <ChevronRight className="w-3 h-3 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {isUser && (
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <User className="w-5 h-5" />
                </div>
              )}
            </div>
          );
        })}

        {/* Typing / Loading Indicator */}
        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-2xl rounded-bl-xs shadow-xs flex items-center gap-2 text-xs text-slate-600">
              <RefreshCw className="w-3.5 h-3.5 text-indigo-600 animate-spin" />
              <span>{t.chatTypingIndicator}</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input Bar */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="bg-white rounded-2xl p-2.5 sm:p-3 border-2 border-slate-200 focus-within:border-indigo-500 shadow-md flex items-center gap-2 transition-colors"
      >
        <div className="pl-2.5 text-slate-400">
          <Bot className="w-5 h-5" />
        </div>

        <input 
          ref={inputRef}
          id="chat-user-input"
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={t.chatInputPlaceholder}
          disabled={isTyping}
          className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden px-2 py-1.5"
        />

        <button
          id="chat-send-btn"
          type="submit"
          disabled={!inputMessage.trim() || isTyping}
          className="px-4 py-2.5 bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 disabled:opacity-40 disabled:hover:from-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5 shrink-0"
        >
          <span>{t.chatSendBtn}</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* Safety & Grounding Footer Notice */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 px-2">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Grounded in authentic Government of India scheme data • No hallucinations</span>
        </div>
        <span className="hidden sm:inline">Priority: Intent &gt; Purpose &gt; Eligibility &gt; Documents</span>
      </div>

    </div>
  );
};
