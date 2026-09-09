import { Language } from '../types';

// Web Speech API interface declarations for TypeScript
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message?: string;
}

interface WebSpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onstart: ((this: WebSpeechRecognition, ev: Event) => any) | null;
  onresult: ((this: WebSpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onerror: ((this: WebSpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
  onend: ((this: WebSpeechRecognition, ev: Event) => any) | null;
}

declare global {
  interface Window {
    SpeechRecognition?: {
      new (): WebSpeechRecognition;
    };
    webkitSpeechRecognition?: {
      new (): WebSpeechRecognition;
    };
  }
}

export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

export function isSpeechSynthesisSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'speechSynthesis' in window && typeof window.speechSynthesis.speak === 'function';
}

export function getLocaleCode(lang: Language): string {
  switch (lang) {
    case 'te':
      return 'te-IN';
    case 'hi':
      return 'hi-IN';
    case 'en':
    default:
      return 'en-IN';
  }
}

export class VoiceAssistant {
  private recognition: WebSpeechRecognition | null = null;
  private isListening = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    if (isSpeechRecognitionSupported()) {
      const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognitionClass) {
        this.recognition = new SpeechRecognitionClass();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
      }
    }
  }

  /**
   * Listen to user speech and return recognized transcript
   */
  public startListening(
    lang: Language,
    onResult: (text: string) => void,
    onError: (err: string) => void,
    onEnd: () => void
  ): boolean {
    if (!this.recognition) {
      onError('Speech recognition is not supported in this browser.');
      return false;
    }

    try {
      if (this.isListening) {
        this.recognition.abort();
      }

      this.recognition.lang = getLocaleCode(lang);

      this.recognition.onstart = () => {
        this.isListening = true;
      };

      this.recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          onResult(transcript);
        }
      };

      this.recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        this.isListening = false;
        onError(event.error || 'Speech recognition error');
      };

      this.recognition.onend = () => {
        this.isListening = false;
        onEnd();
      };

      this.recognition.start();
      return true;
    } catch (e: any) {
      this.isListening = false;
      onError(e?.message || 'Could not start microphone');
      return false;
    }
  }

  public stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
      this.isListening = false;
    }
  }

  /**
   * Read text aloud using SpeechSynthesis
   */
  public speak(
    text: string,
    lang: Language,
    onEnd?: () => void
  ): void {
    if (!isSpeechSynthesisSupported()) return;

    try {
      this.stopSpeaking();

      // Clean markdown tags for clean vocal output
      const cleanText = text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\[(.*?)\]\(.*?\)/g, '$1')
        .replace(/#{1,6}\s+/g, '')
        .replace(/`{1,3}.*?`{1,3}/gs, '')
        .replace(/•/g, '')
        .replace(/🌐|🔗|📞|💡|⚠️|📌|✅|❌/g, '')
        .trim();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = getLocaleCode(lang);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      // Select voice if available
      const voices = window.speechSynthesis.getVoices();
      const targetLang = getLocaleCode(lang);
      const matchedVoice = voices.find(v => v.lang.startsWith(targetLang.slice(0, 2)));
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onend = () => {
        this.currentUtterance = null;
        if (onEnd) onEnd();
      };

      utterance.onerror = () => {
        this.currentUtterance = null;
        if (onEnd) onEnd();
      };

      this.currentUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('TTS error:', e);
      if (onEnd) onEnd();
    }
  }

  public stopSpeaking() {
    if (isSpeechSynthesisSupported()) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {
        // ignore
      }
    }
    this.currentUtterance = null;
  }
}

export const voiceAssistant = new VoiceAssistant();
