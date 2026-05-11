/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Globe2 } from 'lucide-react';
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

  const currentIndex = PAGES.indexOf(currentPage);
  const t = useMemo(() => translations[lang], [lang]);

  const goToPage = (id: PageId) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomeIndex onNavigate={goToPage} lang={lang} />;
      case 'about': return <AboutMe lang={lang} />;
      case 'project-manager': return <ProjectManager />;
      case 'ceo-assistant': return <CEOAssistant />;
      case 'store-management': return <StoreManagement />;
      case 'sales-management': return <SalesManagement />;
      case 'content-production': return <ContentProduction />;
      case 'projects-campaigns': return <ProjectsCampaigns />;
      case 'events-training': return <EventsTraining />;
      case 'online-channels': return <OnlineChannels />;
      case 'content-projects': return <ContentProjectsSection />;
      case 'community-projects': return <CommunityProjects />;
      case 'event-projects': return <EventProjects />;
      case 'key-competency': return <KeyCompetency lang={lang} />;
      case 'achievements': return <Achievements />;
      case 'blog': return <Blog />;
      default: return <HomeIndex onNavigate={goToPage} lang={lang} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0F0F0F] text-[#E5E5E5] selection:bg-white selection:text-black font-sans flex flex-col overflow-hidden">
      <StarBackground />
      
      {/* Top Navigation & Branding */}
      <header className="flex items-center justify-between px-12 h-24 border-b border-white/10 shrink-0 relative z-20 bg-[#0F0F0F]/80 backdrop-blur-sm">
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-serif font-bold tracking-tighter uppercase cursor-pointer" onClick={() => goToPage('home')}>Phạm Đại Bàng</span>
          <span className="text-[10px] uppercase tracking-widest text-white/40">{t.common.v2024}</span>
        </div>
        
        <div className="flex items-center gap-12">
          <nav className="hidden lg:flex space-x-12">
            {[
              { id: 'home', label: t.nav.home },
              { id: 'projects-campaigns', label: t.nav.works },
              { id: 'about', label: t.nav.about },
              { id: 'key-competency', label: t.nav.skills },
              { id: 'blog', label: t.nav.blog }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => goToPage(item.id as PageId)}
                className={`text-xs uppercase tracking-widest transition-all ${currentPage === item.id ? 'border-b border-white pb-1' : 'text-white/40 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            <Globe2 className="w-3 h-3" />
            {lang === 'en' ? 'Tiếng Việt' : 'English'}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* Left Vertical Info Rail */}
        <aside className="w-16 border-r border-white/10 flex flex-col items-center justify-center space-y-24 py-12 shrink-0 hidden md:flex">
          <div className="vertical-text rotate-180 text-[10px] uppercase tracking-[0.4em] text-white/30 whitespace-nowrap">Creative Technologist</div>
          <div className="h-24 w-px bg-white/20"></div>
          <div className="vertical-text rotate-180 text-[10px] uppercase tracking-[0.4em] text-white/30 whitespace-nowrap">Architectural Design</div>
        </aside>

        {/* Main Stage */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-hide pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full px-6 md:px-12 py-12 max-w-7xl mx-auto"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Right Sidebar / Status */}
        <aside className="w-48 border-l border-white/10 flex flex-col p-6 shrink-0 hidden xl:flex">
          <div className="space-y-8">
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-white/40">{t.common.availability}</div>
              <div className="flex items-center text-[11px]">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                {t.common.openForProjects}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-white/40">{t.common.location}</div>
              <div className="text-[11px]">Hanoi, VN [GMT+7]</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-white/40">{t.common.status}</div>
              <div className="text-[11px] font-mono opacity-60">{t.common.active}</div>
            </div>
          </div>
          
          <div className="mt-auto">
             <div className="w-full aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-full flex items-center justify-center border border-white/5 group hover:border-white/20 hover:scale-105 transition-all cursor-pointer">
               <div className="text-[10px] uppercase tracking-tighter text-center">{t.common.letsTalk}</div>
             </div>
          </div>
        </aside>
      </div>

      {/* Bottom Status Bar */}
      <footer className="h-12 border-t border-white/10 flex items-center px-12 justify-between shrink-0 relative z-20 bg-[#0F0F0F]">
        <div className="text-[9px] uppercase tracking-widest text-white/30">
          &copy; {t.common.copyright}
        </div>
        
        {/* Navigation Info */}
        <div className="flex items-center gap-8 text-nowrap">
          <div className="flex space-x-8 text-[9px] uppercase tracking-widest text-white/30">
             <button onClick={prevPage} className="hover:text-white flex items-center gap-1 transition-colors">
               <ChevronLeft className="w-3 h-3" /> Prev
             </button>
             <button onClick={nextPage} className="hover:text-white flex items-center gap-1 transition-colors">
               Next <ChevronRight className="w-3 h-3" />
             </button>
          </div>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="text-[9px] uppercase tracking-widest text-white/40 font-mono">
            {String(currentIndex + 1).padStart(2, '0')} / {String(PAGES.length).padStart(2, '0')}
          </div>
        </div>
      </footer>
    </div>
  );
}

