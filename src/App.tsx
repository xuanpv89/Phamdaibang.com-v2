/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Globe2, Sun, Moon } from 'lucide-react';
import StarBackground from './components/StarBackground';

// Content Components
import HomeIndex from './sections/HomeIndex';
import AboutMe from './sections/AboutMe';
import ProjectManager from './sections/ProjectManager';
import CEOAssistant from './sections/CEOAssistant';
import StoreManagement from './sections/StoreManagement';
import SalesManagement from './sections/SalesManagement';
import ContentProduction from './sections/ContentProduction';
import ProjectsCampaigns from './sections/ProjectsCampaigns';
import EventsTraining from './sections/EventsTraining';
import OnlineChannels from './sections/OnlineChannels';
import ContentProjectsSection from './sections/ContentProjectsSection';
import CommunityProjects from './sections/CommunityProjects';
import EventProjects from './sections/EventProjects';
import KeyCompetency from './sections/KeyCompetency';
import Achievements from './sections/Achievements';
import Blog from './sections/Blog';
import { translations, Language } from './lib/translations';

export type PageId = 
  | 'home' 
  | 'about' 
  | 'project-manager' 
  | 'ceo-assistant' 
  | 'store-management' 
  | 'sales-management' 
  | 'content-production' 
  | 'projects-campaigns' 
  | 'events-training' 
  | 'online-channels' 
  | 'content-projects' 
  | 'community-projects' 
  | 'event-projects' 
  | 'key-competency' 
  | 'achievements'
  | 'blog';

const PAGES: PageId[] = [
  'home',
  'about',
  'project-manager',
  'ceo-assistant',
  'store-management',
  'sales-management',
  'content-production',
  'projects-campaigns',
  'events-training',
  'online-channels',
  'content-projects',
  'community-projects',
  'event-projects',
  'key-competency',
  'achievements',
  'blog'
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [lang, setLang] = useState<Language>('vi');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const currentIndex = PAGES.indexOf(currentPage);
  const t = useMemo(() => translations[lang], [lang]);

  const goToPage = (id: PageId) => {
    setCurrentPage(id);
    document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextPage = () => {
    const nextIdx = (currentIndex + 1) % PAGES.length;
    goToPage(PAGES[nextIdx]);
  };

  const prevPage = () => {
    const prevIdx = (currentIndex - 1 + PAGES.length) % PAGES.length;
    goToPage(PAGES[prevIdx]);
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'vi' : 'en');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomeIndex onNavigate={goToPage} lang={lang} />;
      case 'about': return <AboutMe lang={lang} />;
      case 'project-manager': return <ProjectManager lang={lang} />;
      case 'ceo-assistant': return <CEOAssistant lang={lang} />;
      case 'store-management': return <StoreManagement lang={lang} />;
      case 'sales-management': return <SalesManagement lang={lang} />;
      case 'content-production': return <ContentProduction lang={lang} />;
      case 'projects-campaigns': return <ProjectsCampaigns lang={lang} />;
      case 'events-training': return <EventsTraining lang={lang} />;
      case 'online-channels': return <OnlineChannels lang={lang} />;
      case 'content-projects': return <ContentProjectsSection lang={lang} />;
      case 'community-projects': return <CommunityProjects lang={lang} />;
      case 'event-projects': return <EventProjects lang={lang} />;
      case 'key-competency': return <KeyCompetency lang={lang} />;
      case 'achievements': return <Achievements lang={lang} />;
      case 'blog': return <Blog lang={lang} />;
      default: return <HomeIndex onNavigate={goToPage} lang={lang} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-primary selection:text-bg font-sans flex flex-col overflow-hidden transition-colors duration-300">
      <StarBackground />
      
      {/* Top Navigation & Branding */}
      <header className="flex items-center justify-between px-12 h-24 border-b border-border shrink-0 relative z-20 bg-bg/80 backdrop-blur-sm">
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-serif font-black tracking-tighter uppercase cursor-pointer" onClick={() => goToPage('home')}>Phạm Đại Bàng</span>
          <span className="text-[10px] uppercase tracking-widest text-text/40">{t.common.v2024}</span>
        </div>
        
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex space-x-8">
            {[
              { id: 'home', label: t.nav.home },
              { id: 'about', label: t.nav.about },
              { id: 'projects-campaigns', label: t.nav.works },
              { id: 'blog', label: t.nav.blog }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => goToPage(item.id as PageId)}
                className={`text-xs uppercase tracking-widest transition-all ${currentPage === item.id ? 'border-b border-primary pb-1' : 'text-text/40 hover:text-text'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 border border-border rounded-full hover:bg-primary/5 transition-all outline-none"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1 border border-border rounded-full text-[10px] uppercase tracking-widest hover:bg-primary/5 transition-all h-8 outline-none"
            >
              <Globe2 className="w-3 h-3" />
              {lang === 'en' ? 'VI' : 'EN'}
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* Left Vertical Info Rail */}
        <aside className="w-16 border-r border-border flex flex-col items-center justify-center space-y-24 py-12 shrink-0 hidden md:flex">
          <div className="vertical-text rotate-180 text-[10px] uppercase tracking-[0.4em] text-text/30 whitespace-nowrap font-display">Creative Technologist</div>
          <div className="h-24 w-px bg-primary/20"></div>
          <div className="vertical-text rotate-180 text-[10px] uppercase tracking-[0.4em] text-text/30 whitespace-nowrap font-display">Architectural Design</div>
        </aside>

        {/* Main Stage */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-hide pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full px-6 md:px-12 py-12 max-w-7xl mx-auto"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Right Sidebar / Status */}
        <aside className="w-48 border-l border-border flex flex-col p-6 shrink-0 hidden xl:flex">
          <div className="space-y-8">
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-text/40">{t.common.availability}</div>
              <div className="flex items-center text-[11px]">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                {t.common.openForProjects}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-text/40">{t.common.location}</div>
              <div className="text-[11px]">Hanoi, VN [GMT+7]</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-text/40">{t.common.status}</div>
              <div className="text-[11px] font-mono opacity-60">{t.common.active}</div>
            </div>
          </div>
          
          <div className="mt-auto">
             <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-transparent rounded-full flex items-center justify-center border border-primary/5 group hover:border-primary/20 hover:scale-105 transition-all cursor-pointer">
               <div className="text-[10px] uppercase tracking-tighter text-center">{t.common.letsTalk}</div>
             </div>
          </div>
        </aside>
      </div>

      {/* Bottom Status Bar */}
      <footer className="h-16 border-t border-border flex items-center px-12 justify-between shrink-0 relative z-20 bg-bg">
        <div className="text-[9px] uppercase tracking-widest text-text/30">
          &copy; {t.common.copyright}
        </div>
        
        {/* Navigation Info */}
        <div className="flex items-center gap-12 text-nowrap">
          <div className="flex space-x-12">
             <button 
               onClick={prevPage} 
               className="group flex flex-col items-start transition-colors"
             >
               <span className="text-[8px] uppercase tracking-widest text-text/40 mb-1">{t.common.prev}</span>
               <div className="flex items-center gap-2 group-hover:text-accent">
                 <ChevronLeft className="w-4 h-4" />
                 <span className="text-[10px] uppercase font-bold tracking-widest">
                   {PAGES[(currentIndex - 1 + PAGES.length) % PAGES.length].replace('-', ' ')}
                 </span>
               </div>
             </button>

             <button 
               onClick={nextPage} 
               className="group flex flex-col items-end transition-colors"
             >
               <span className="text-[8px] uppercase tracking-widest text-text/40 mb-1">{t.common.next}</span>
               <div className="flex items-center gap-2 group-hover:text-accent">
                 <span className="text-[10px] uppercase font-bold tracking-widest">
                   {PAGES[(currentIndex + 1) % PAGES.length].replace('-', ' ')}
                 </span>
                 <ChevronRight className="w-4 h-4" />
               </div>
             </button>
          </div>
          <div className="h-8 w-px bg-border"></div>
          <div className="text-[11px] font-display font-black tracking-widest text-text/60">
            {String(currentIndex + 1).padStart(2, '0')} — {String(PAGES.length).padStart(2, '0')}
          </div>
        </div>
      </footer>
    </div>
  );
}

