import { Language, CitizenProfile } from '../types';

const STORAGE_KEYS = {
  LANG: 'citizen_portal_lang',
  SAVED_SERVICES: 'citizen_portal_saved_services',
  CHECKED_DOCS: 'citizen_portal_checked_docs',
  READ_NOTICES: 'citizen_portal_read_notices',
  USER_PROFILE: 'citizen_portal_user_profile'
};

export function getSavedLanguage(fallback: Language = 'en'): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG);
    if (saved === 'en' || saved === 'te' || saved === 'hi') {
      return saved;
    }
  } catch {
    // LocalStorage unavailable
  }
  return fallback;
}

export function saveLanguage(lang: Language): void {
  try {
    localStorage.setItem(STORAGE_KEYS.LANG, lang);
  } catch {
    // LocalStorage unavailable
  }
}

export function getSavedServices(): string[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SAVED_SERVICES);
    if (data) {
      return JSON.parse(data);
    }
  } catch {
    // LocalStorage error
  }
  return [];
}

export function toggleSaveService(serviceId: string): string[] {
  try {
    const current = getSavedServices();
    const exists = current.includes(serviceId);
    const updated = exists ? current.filter(id => id !== serviceId) : [...current, serviceId];
    localStorage.setItem(STORAGE_KEYS.SAVED_SERVICES, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function getCheckedDocs(): Record<string, boolean> {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CHECKED_DOCS);
    if (data) {
      return JSON.parse(data);
    }
  } catch {
    // ignore
  }
  return {};
}

export function toggleDocChecked(docId: string): Record<string, boolean> {
  try {
    const current = getCheckedDocs();
    const updated = { ...current, [docId]: !current[docId] };
    localStorage.setItem(STORAGE_KEYS.CHECKED_DOCS, JSON.stringify(updated));
    return updated;
  } catch {
    return {};
  }
}

export function getReadNotices(): string[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.READ_NOTICES);
    if (data) {
      return JSON.parse(data);
    }
  } catch {
    // ignore
  }
  return [];
}

export function markNoticeRead(noticeId: string): string[] {
  try {
    const current = getReadNotices();
    if (!current.includes(noticeId)) {
      const updated = [...current, noticeId];
      localStorage.setItem(STORAGE_KEYS.READ_NOTICES, JSON.stringify(updated));
      return updated;
    }
    return current;
  } catch {
    return [];
  }
}

export function getSavedProfile(): CitizenProfile | null {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    if (data) {
      return JSON.parse(data);
    }
  } catch {
    // ignore
  }
  return null;
}

export function saveProfile(profile: CitizenProfile): void {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  } catch {
    // ignore
  }
}
