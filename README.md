# Mulwa Clinical Exam Portal

A high-performance, minimalist clinical revision and exam preparation platform designed for nursing and medical students. 

**Author:** MULWA ([martinmulwa95@gmail.com](mailto:martinmulwa95@gmail.com))  
**Version:** 1.0.0  
**License:** MIT

---

## Overview

The **Mulwa Clinical Exam Portal** is built to deliver an unfatigued, distraction-free study environment for clinical examination candidates. It features authentic past examination papers partitioned into structured 20-question practice modules, comprehensive rationale explanations for every question, real-time performance analytics, and a targeted review queue for incorrect answers.

---

## Key Features

- **Standardized 20-Question Practice Sets:** Large past papers (70 to 118+ questions) are split into 20-question practice sets to optimize cognitive retention and pacing.
- **Instant Clinical Rationales:** Detailed explanations elucidate why the correct option is medically accurate while explaining why distractors are incorrect.
- **Bi-Directional Question Navigation:** Candidates can navigate back to earlier questions within a set, change selections before completing, or jump between questions seamlessly.
- **Dedicated Mistakes Queue:** Every question answered incorrectly is automatically captured in a specialized review list with full clinical rationales and an "Understood" resolve action.
- **Real-Time Performance Dashboard:** Visual metrics tracking total questions attempted, correct answers, accuracy percentage, and recent activity logs.
- **Ephemeral Session Persistence:** Progress is managed via `sessionStorage`, persisting across page reloads in the active browser tab while automatically resetting when the browser or tab is closed—ideal for shared library and hospital lab workstations.
- **Manual Session Reset:** A built-in "Clear Progress" feature enables instant state resets with confirmation safeguards.
- **Responsive Ergonomic Design:** Crafted with high-contrast typography (Plus Jakarta Sans) and clean 1px structural borders for maximum legibility and zero visual clutter.

---

## Exam Content & Question Bank

The portal currently incorporates comprehensive examination past papers:

| Past Paper | Year | Questions | Sets | Key Clinical Domains Covered |
| :--- | :--- | :--- | :--- | :--- |
| **End of Year 1 Exam (1)** | 2023 | 70 MCQs | 4 Sets | Cellular Biology, Musculoskeletal, Nervous System, Cardiovascular, Respiratory, GI, Renal, Endocrine |
| **End of Year 1 Exam (2)** | 2024 | 70 MCQs | 4 Sets | Homeostasis, Autonomic Nervous System, Renal Physiology, Pharmacology, Immunology, Nursing Process |
| **End of Year 1 Exam (3)** | 2025 | 118 MCQs | 6 Sets | Pathophysiology, Surgical Nursing, Gastrointestinal Disorders, Emergency & Critical Care, Fluid & Electrolytes |

---

## Tech Stack & Architecture

- **Frontend Framework:** React 19 + TypeScript (Strict mode)
- **Bundler & Dev Server:** Vite 6
- **Styling:** Tailwind CSS (v4)
- **Iconography:** Lucide React
- **Animations:** Motion
- **State & Storage:** React Hooks + Ephemeral Browser `sessionStorage`

---

## Project Structure

```
├── public/
│   ├── favicon.svg              # Application icon
├── src/
│   ├── components/
│   │   ├── HomeDashboard.tsx          # Analytics, resume card, activity feed
│   │   ├── Layout.tsx                 # Navigation header, tabs, mobile bar
│   │   ├── PastPapersLibrary.tsx      # Exam archive directory
│   │   ├── QuestionScreen.tsx         # MCQ practice workspace & rationales
│   │   ├── ResultsScreen.tsx          # Scorecard, accuracy, action controls
│   │   ├── ReviewIncorrectScreen.tsx  # Dedicated mistake review queue
│   │   └── RevisionSetSelection.tsx   # 20-question module selector
│   ├── data/
│   │   └── questions.ts               # Exam papers repository & question bank
│   ├── utils/
│   │   └── storage.ts                 # Session storage & metrics computation
│   ├── types.ts                       # Shared TypeScript interfaces & models
│   ├── App.tsx                        # Main state machine & route controller
│   ├── main.tsx                       # React DOM entry point
│   └── index.css                      # Tailwind styling & animations
├── DESIGN.md                          # Design system & ergonomic specifications
├── package.json                       # Project configuration & dependencies
├── tsconfig.json                      # TypeScript configuration
├── vite.config.ts                     # Vite build configuration
└── README.md                          # Platform documentation
```

---

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone or download the repository:
   ```bash
   git clone https://github.com/mulwa/clinical-exam-portal.git
   cd clinical-exam-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

---

## Available Scripts

- `npm run dev` — Starts the local Vite development server on port 3000.
- `npm run build` — Compiles TypeScript and creates an optimized production build in `dist/`.
- `npm run preview` — Locally previews the production build.
- `npm run lint` — Runs TypeScript compiler check (`tsc --noEmit`) to validate type safety.
- `npm run clean` — Removes build artifacts.

---

## Author & Acknowledgments

- **Lead Developer & Content Curator:** MULWA
- **Contact:** [martinmulwa95@gmail.com](mailto:martinmulwa95@gmail.com)
- Dedicated to providing high-yield, accessible clinical study tools for nursing and medical professionals.
