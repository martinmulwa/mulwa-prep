/**
 * Mulwa Clinical Exam Portal
 * Primary Application Shell & Navigation Layout
 *
 * Provides a responsive header, desktop navigation tabs, mobile bottom navigation,
 * and standard content framing.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import React from 'react';
import { Home, BookOpen, AlertCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'home' | 'papers' | 'review';
  setActiveTab: (tab: 'home' | 'papers' | 'review') => void;
}

/**
 * Responsive layout container with persistent top navigation and mobile bottom tab bar.
 */
export default function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans antialiased text-slate-900">
      
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-center md:justify-between relative">
          
          {/* Brand Heading / Logo */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center select-none cursor-pointer group"
            id="app-logo-container"
          >
            <h1 className="text-lg sm:text-xl font-black text-[#0B1B3D] tracking-widest uppercase">
              MULWA
            </h1>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Primary Navigation">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-lg ${
                activeTab === 'home'
                  ? 'bg-[#0B1B3D] text-white'
                  : 'text-slate-500 hover:text-[#0B1B3D] hover:bg-slate-100'
              }`}
            >
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab('papers')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-lg ${
                activeTab === 'papers'
                  ? 'bg-[#0B1B3D] text-white'
                  : 'text-slate-500 hover:text-[#0B1B3D] hover:bg-slate-100'
              }`}
            >
              Papers
            </button>

            <button
              onClick={() => setActiveTab('review')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-lg ${
                activeTab === 'review'
                  ? 'bg-[#0B1B3D] text-white'
                  : 'text-slate-500 hover:text-[#0B1B3D] hover:bg-slate-100'
              }`}
            >
              Mistakes
            </button>
          </nav>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-20 md:pb-10">
        <div className="bg-white border border-slate-200/80 p-4 sm:p-6 md:p-8 min-h-[460px] rounded-lg">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-2.5 z-40 flex justify-around items-center" aria-label="Mobile Navigation">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
            activeTab === 'home' ? 'text-[#0B1B3D]' : 'text-slate-400'
          }`}
          title="Dashboard"
        >
          <Home className="w-5 h-5" strokeWidth={activeTab === 'home' ? 2.5 : 2} />
        </button>

        <button
          onClick={() => setActiveTab('papers')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
            activeTab === 'papers' ? 'text-[#0B1B3D]' : 'text-slate-400'
          }`}
          title="Past Papers"
        >
          <BookOpen className="w-5 h-5" strokeWidth={activeTab === 'papers' ? 2.5 : 2} />
        </button>

        <button
          onClick={() => setActiveTab('review')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
            activeTab === 'review' ? 'text-[#0B1B3D]' : 'text-slate-400'
          }`}
          title="Mistakes"
        >
          <AlertCircle className="w-5 h-5" strokeWidth={activeTab === 'review' ? 2.5 : 2} />
        </button>
      </nav>

    </div>
  );
}
