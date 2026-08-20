# Mulwa Clinical Exam Portal

A high-performance, distraction-free clinical revision and exam preparation platform designed specifically for nursing and medical candidates.

🌐 **Live Website:** [https://mulwa-rev.netlify.app/](https://mulwa-rev.netlify.app/)  
👨‍💻 **Author:** MULWA ([martinmulwa95@gmail.com](mailto:martinmulwa95@gmail.com))  
📦 **Version:** 1.0.0  
📄 **License:** MIT  

---

## Dashboard Preview

![Mulwa Clinical Portal Dashboard](readme-hero.png)

---

## Overview

The **Mulwa Clinical Exam Portal** provides an unfatigued, high-yield study environment for clinical examination candidates. Standard past examination papers often contain 70 to 118+ complex stems, which can cause cognitive fatigue when practiced all at once. The portal partitions authentic past papers into bite-sized 20-question practice modules with instant rationale feedback, live performance metrics, and an active mistake-correction queue.

---

## Key Features

### 📊 Real-Time Analytics Dashboard
- **Session Performance Metrics:** Instant calculations tracking **Total Attempted**, **Correct Answers**, and overall **Accuracy Percentage**.
- **Quick-Resume Card:** Automatically pinpoints and offers one-click resumption for your most recently active practice set.
- **Activity Log:** Chronological record of completed exam modules, latest scores, and in-progress sets.
- **Session Reset with Safeguards:** A modal-protected "Clear Progress" tool allowing candidates to reset session scores and mistaken question queues at any time.

### 📚 Past Papers Question Bank
- **Curated Exam Archive:** Official multi-year examination papers covering key medical-surgical, anatomy, physiology, and pharmacology domains.
- **Standardized 20-Question Practice Sets:** Large exams are segmented into manageable 20-question modules, each with dedicated start, resume, and review states.
- **Progress Tracking per Paper:** Visual indicators highlighting how many sets have been completed per paper.

### ✍️ Interactive Examination Workspace
- **Distraction-Free Focus Mode:** Clean, minimalist UI displaying the question stem, four selectable choices (A, B, C, D), and a numerical question tracker (`1 / 20`).
- **Bi-Directional Navigation:** Move smoothly between previous and next questions within any set, allowing you to review and adjust answers before final submission.
- **Live Rationale Explanations:** Immediate, in-depth physiological and clinical rationale explanations for every question, clarifying why the correct choice is accurate and breaking down why the distractors are incorrect.
- **Visual Feedback:** Instant chromatic feedback upon answer selection (emerald styling for correct answers, crimson highlighting for incorrect choices).
- **Question Bookmarking:** One-click bookmarking tool to flag challenging questions for subsequent review.

### 🎯 Dedicated Mistakes Review Queue
- **Targeted Spaced Review:** Every question answered incorrectly is automatically captured into a centralized review queue.
- **Diagnostic Breakdown:** View the question stem, your selected answer, the correct answer, and the complete clinical rationale.
- **"Understood" Action:** Mark questions as understood once mastered to remove them from the mistake queue.

### 🔒 Ephemeral Session Storage Architecture
- **Tab-Level Persistence:** Uses `window.sessionStorage` so test progress, answers, and scores persist through page reloads and tab navigation.
- **Automatic Session Cleanup:** Closes cleanly when the browser or tab is closed—ensuring zero data bleed on shared clinical lab or library workstations.

---

## Exam Content & Question Bank

The portal includes comprehensive past papers with complete clinical rationales:

| Past Paper | Year | MCQs | Practice Sets | Clinical Domains Covered |
| :--- | :--- | :--- | :--- | :--- |
| **End of Year 1 Exam (1)** | 2023 | 70 MCQs | 4 Sets (Sets 1–3: 20 Qs, Set 4: 10 Qs) | Cell Biology, Musculoskeletal, Nervous System, Cardiovascular, Respiratory, GI, Renal, Endocrine |
| **End of Year 1 Exam (2)** | 2024 | 70 MCQs | 4 Sets (Sets 1–3: 20 Qs, Set 4: 10 Qs) | Homeostasis, Autonomic Nervous System, Renal Physiology, Pharmacology, Immunology, Nursing Process |
| **End of Year 1 Exam (3)** | 2025 | 118 MCQs | 6 Sets (Sets 1–5: 20 Qs, Set 6: 18 Qs) | Pathophysiology, Surgical Nursing, Gastrointestinal Disorders, Emergency & Critical Care, Fluid & Electrolytes |
| **End of Year 1 Exam (4)** | Comprehensive | 120 MCQs | 6 Sets (Sets 1–6: 20 Qs each) | Emergency Nursing, Cardiopulmonary Care, Pharmacology, Nursing Process & Ethics, Surgical/Perioperative Care, Renal & Gastrointestinal |
| **End of Year 1 Exam (5)** | Comprehensive | 120 MCQs | 6 Sets (Sets 1–6: 20 Qs each) | Respiratory Care, Microbiology & Environmental Hygiene, Community Health & Primary Care, Psychiatric & Mental Health, Pediatrics & IMNCI, Obstetric & Reproductive Health |
| **End of Year 1 Exam (6)** | 2022 | 120 MCQs | 6 Sets (Sets 1–6: 20 Qs each) | Hematology & Coagulation, Endocrine & Renal Disorders, Perioperative Nursing & Waste Management, Cardiopulmonary & Critical Care, Pediatric Emergencies & Pharmacokinetics |
| **End of Year 1 Exam (7)** | Comprehensive | 120 MCQs | 6 Sets (Sets 1–6: 20 Qs each) | Nursing Theories & Ethics, Gastrointestinal & Surgical Care, Renal & Fluid Dynamics, Cardiovascular & Respiratory Management, Endocrine & Reproductive Health |
| **End of Year 1 Exam (8)** | 2024 | 120 MCQs | 6 Sets (Sets 1–6: 20 Qs each) | Psychiatric Nursing, Primary Health Care, IMNCI & Pediatric Care, Maternal & Reproductive Health, Pharmacotherapy, Infectious Diseases & Immunology |
| **End of Year 1 Exam (9)** | 2022 | 120 MCQs | 6 Sets (Sets 1–6: 20 Qs each) | Medico-Legal Ethics & Documentation, Biochemistry & Muscle Physiology, Pediatric Emergency & IMCI, Clinical Pharmacology & Toxicology, Community Health & Environmental Sanitation |
| **End of Year 1 Exam (10)** | 2022 | 50 MCQs | 3 Sets (Sets 1–2: 20 Qs, Set 3: 10 Qs) | Gastrointestinal Disorders, Endoscopy & Barium Diagnostics, Esophageal Pathology & GERD, Abdominal Physical Assessment & Liver Function Tests |
| **End of Year 2 Exam (1)** | 2023 | 120 MCQs | 6 Sets (Sets 1–6: 20 Qs each) | Inhaler Technique & Respiratory Pharmacology, Neonatal & Pediatric Emergencies, Community & Primary Health Care, Psychiatric Disorders & Psychopharmacology, Reproductive Health & Obstetric Nursing |

---

## Tech Stack & Libraries

- **Frontend Framework:** React 19 + TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **Animations:** Motion
- **Build Tool:** Vite 6
- **Storage:** Browser `sessionStorage` API
- **Deployment:** Netlify ([Live Link](https://mulwa-rev.netlify.app/))

---

## Project Structure

```
├── public/
│   └── favicon.svg              # Application brand favicon
├── src/
│   ├── components/
│   │   ├── HomeDashboard.tsx          # Analytics, quick resume, activity log
│   │   ├── Layout.tsx                 # Navigation bar, mobile bottom bar, layout
│   │   ├── PastPapersLibrary.tsx      # Past papers directory & archive
│   │   ├── QuestionScreen.tsx         # MCQ test interface & rationales
│   │   ├── ResultsScreen.tsx          # Scorecard, accuracy summary, actions
│   │   ├── ReviewIncorrectScreen.tsx  # Mistakes review queue with rationales
│   │   └── RevisionSetSelection.tsx   # 20-question module selector
│   ├── data/
│   │   ├── papers/                    # Modular past paper modules
│   │   │   ├── paper1.ts              # End of Year 1 Exam (1) - 70 MCQs
│   │   │   ├── paper2.ts              # End of Year 1 Exam (2) - 70 MCQs
│   │   │   ├── paper3.ts              # End of Year 1 Exam (3) - 118 MCQs
│   │   │   ├── paper4.ts              # End of Year 1 Exam (4) - 120 MCQs
│   │   │   ├── paper4_part1.ts        # Exam 4 part 1
│   │   │   ├── paper4_part2.ts        # Exam 4 part 2
│   │   │   ├── paper5.ts              # End of Year 1 Exam (5) - 120 MCQs
│   │   │   ├── paper5_part1.ts        # Exam 5 part 1
│   │   │   ├── paper5_part2.ts        # Exam 5 part 2
│   │   │   ├── paper6.ts              # End of Year 1 Exam (6) - 120 MCQs
│   │   │   ├── paper6_part1.ts        # Exam 6 part 1
│   │   │   ├── paper6_part2.ts        # Exam 6 part 2
│   │   │   ├── paper7.ts              # End of Year 1 Exam (7) - 120 MCQs
│   │   │   ├── paper7_part1.ts        # Exam 7 part 1
│   │   │   ├── paper7_part2.ts        # Exam 7 part 2
│   │   │   ├── paper8.ts              # End of Year 1 Exam (8) - 120 MCQs
│   │   │   ├── paper8_part1.ts        # Exam 8 part 1
│   │   │   ├── paper8_part2.ts        # Exam 8 part 2
│   │   │   ├── paper9.ts              # End of Year 1 Exam (9) - 120 MCQs
│   │   │   ├── paper9_part1.ts        # Exam 9 part 1
│   │   │   ├── paper9_part2.ts        # Exam 9 part 2
│   │   │   ├── paper10.ts             # End of Year 1 Exam (10) - 50 MCQs
│   │   │   └── index.ts               # Registry & aggregator of all papers
│   │   ├── validator.ts               # Automated schema & data integrity checks
│   │   ├── questions.ts               # Central export & set slicing utilities
│   │   └── index.ts                   # Data layer barrel export
│   ├── utils/
│   │   └── storage.ts                 # Session storage persistence layer
│   ├── types.ts                       # TypeScript interfaces & types
│   ├── App.tsx                        # Main state machine & navigation controller
│   ├── main.tsx                       # React DOM root mounting
│   └── index.css                      # Tailwind styles & keyframe animations
├── DESIGN.md                          # Visual design system specifications
├── package.json                       # Dependencies and project metadata
├── tsconfig.json                      # TypeScript configuration
├── vite.config.ts                     # Vite build configuration
├── readme-hero.png                    # Dashboard hero screenshot
└── README.md                          # Documentation
```

---

## Getting Started Locally

### Prerequisites

- Node.js (v18.0 or later)
- npm or yarn

### Installation & Run

1. Clone repository:
   ```bash
   git clone https://github.com/mulwa/clinical-exam-portal.git
   cd clinical-exam-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run local dev server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## Adding New Past Papers (Quick Scaling Guide)

The modular database architecture allows you to add any new exam paper in 3 simple steps:

1. **Create the Paper File:** Create `src/data/papers/paper5.ts` defining your `PastPaper` object:
   ```ts
   import { PastPaper } from '../../types';

   export const PAPER_5: PastPaper = {
     id: "eoy1-nursing-exam-5",
     year: "2026",
     title: "End of Year 1 Exam (5)",
     totalQuestions: 70,
     totalSets: 4,
     questions: [ /* array of Question objects */ ]
   };
   ```

2. **Register in Aggregator:** Add `PAPER_5` to `ALL_PAPERS` in `src/data/papers/index.ts`:
   ```ts
   import { PAPER_5 } from './paper5';
   export const ALL_PAPERS: PastPaper[] = [PAPER_1, PAPER_2, PAPER_3, PAPER_4, PAPER_5];
   ```

3. **Verify Integrity:** Run `npm run lint` or `npm run build`. The schema validator will automatically verify question uniqueness, options completeness, and rationale definitions!

---

## Author & Contact

- **Lead Developer & Content Curator:** MULWA
- **Email:** [martinmulwa95@gmail.com](mailto:martinmulwa95@gmail.com)
- **Live Deployment:** [https://mulwa-rev.netlify.app/](https://mulwa-rev.netlify.app/)
