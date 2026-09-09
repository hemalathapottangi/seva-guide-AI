# SEVAGUIDE AI

**SEVAGUIDE AI** is a comprehensive, production-ready Citizen Service Access, Eligibility Verification, and Scheme Guidance Web Application built with React 18, TypeScript, and Tailwind CSS.

Developed as a hands-on AI Vibe Coding Project by a final-year Computer Science Engineering student, SEVAGUIDE AI bridges the information divide across India by providing transparent, authentic, and step-by-step guidance for essential central and state government schemes.

---

## 🚀 Key Highlights & 7 Core Features

1. **Service Details & Eligibility Verification**
   - Detailed scheme cards with governing ministry, core purpose, who can apply, age/income thresholds, and interactive assessment.
2. **Required Documents Checklists**
   - Interactive document preparation checklists with acceptable formats (PDF/JPEG), file size limits, and preparation instructions.
3. **Step-by-Step Application Guidance**
   - Verified sequential walkthroughs, institute verification guidelines, status tracking methods, and helpline contacts.
4. **Direct Service/Application Links**
   - Direct, authentic links routing to genuine Government of India (`.gov.in` and `.nic.in`) portals with clear external redirect notifications.
5. **Multilingual Support**
   - Full tri-lingual support across English (`EN`), Telugu (`TE`), and Hindi (`HI`), with instant language switching and persisted preferences.
6. **Simple & User-Friendly UI**
   - Responsive, accessible design built with Tailwind CSS, clean typography, category filters, target beneficiary filters, and bookmarks drawer.
7. **Awareness Notifications & Advisories**
   - Real-time citizen awareness alerts highlighting upcoming application deadlines, new scheme rollouts, and official advisories.

---

## 🤖 SEVAGUIDE AI Assistant

An intelligent conversational AI chatbot assistant that understands natural language queries from citizens, maps user intent directly to verified government services, and provides structured application roadmaps:

- **Natural Language Intent Recognition**: Understands complex citizen questions (e.g. *"I am a student from Andhra Pradesh and I need financial assistance for my education. Which government service should I apply for?"*).
- **Exact Priority Matching**: `USER INTENT > SERVICE PURPOSE > ELIGIBILITY > SERVICE DESCRIPTION > KEYWORDS`.
- **Structured Response Format**:
  - Recommended Service
  - Why this service matches your requirement
  - Eligibility criteria & qualifications
  - Required document checklist
  - Step-by-step application procedure
  - Direct verified `.gov.in` portal link
  - Important notes & pro-tips
- **Conversational Follow-Up Handling**: Supports contextual follow-ups (*"What documents do I need?"*, *"How can I apply?"*, *"Check eligibility"*, *"Apply now"*).
- **100% Grounded & Safe**: Strictly grounded in `servicesData.ts`. Never hallucinates non-existent schemes or fake links.
- **Offline-First Zero-Cost Resilience**: Works reliably offline and requires no paid external API keys for demonstration.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Persistence**: LocalStorage with graceful in-memory fallbacks
