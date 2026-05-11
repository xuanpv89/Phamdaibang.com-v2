/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Globe2, Sun, Moon } from 'lucide-react';
import StarBackground from './components/StarBackground';
import { translations, Language } from './lib/translations';

// Lazy-loaded section components
const HomeIndex        = lazy(() => import('./sections/HomeIndex'));
const AboutMe          = lazy(() => import('./sections/AboutMe'));
const ProjectManager   = lazy(() => import('./sections/ProjectManager'));
const CEOAssistant     = lazy(() => import('./sections/CEOAssistant'));
const StoreManagement  = lazy(() => import('./sections/StoreManagement'));
const SalesManagement  = lazy(() => import('./sections/SalesManagement'));
const ContentProduction      = lazy(() => import('./sections/ContentProduction'));
const ProjectsCampaigns      = lazy(() => import('./sections/ProjectsCampaigns'));
const EventsTraining         = lazy(() => import('./sections/EventsTraining'));
const OnlineChannels         = lazy(() => import('./sections/OnlineChannels'));
const ContentProjectsSection = lazy(() => import('./sections/ContentProjectsSection'));
const CommunityProjects      = lazy(() => import('./sections/CommunityProjects'));
const EventProjects          = lazy(() => import('./sections/EventProjects'));
const KeyCompetency          = lazy(() => import('./sections/KeyCompetency'));
const Achievements           = lazy(() => import('./sections/Achievements'));
const Blog                   = lazy(() => import('./sections/Blog'));

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

// Ordered list of all pages
export const PAGES: PageId[] = [
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
  'blog',
];

// Map PageId → URL path
const PAGE_PATHS: Record<PageId, string> = {
  'home':             '/',
  'about':            '/about',
  'project-manager':  '/project-manager',
  'ceo-assistant':    '/ceo-assistant',
  'store-management': '/store-management',
  'sales-management': '/sales-management',
  'content-production':  '/content-production',
  'projects-campaigns':  '/projects-campaigns',
  'events-training':     '/events-training',
  'online-channels':     '/online-channels',
  'content-projects':    '/content-projects',
  'community-projects':  '/community-projects',
  'event-projects':      '/event-projects',
  'key-competency':      '/key-competency',
  'achievements':        '/achievements',
  'blog':                '/blog',
};

// Derive PageId from pathname
function pageIdFromPath(pathname: string): PageId {
  const entry = Object.entries(PAGE_PATHS).find(([, path]) => path === pathname);
  return (entry?.[0] as PageId) ?? 'home';
}

// Loading fallback
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-6 h-6 border border-primary/40 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [lang, setLang]   = useState<Language>('vi');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const t = translations[lang];

  const currentPage  = pageIdFromPath(location.pathname);
  const currentIndex = PAGES.indexOf(currentPage);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  // Scroll to top whenever the route changes
  useEffect(() => {
    document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const goToPage = (id: PageId) => {
    navigate(PAGE_PATHS[id]);
  };

  const nextPage = () => {
    const nextIdx = (currentIndex + 1) % PAGES.length;
    goToPage(PAGES[nextIdx]);
  };

  const prevPage = () => {
    const prevIdx = (currentIndex - 1 + PAGES.length) % PAGES.length;
    goToPage(PAGES[prevIdx]);
  };

  const toggleLang  = () => setLang(prev => (prev === 'en' ? 'vi' : 'en'));
  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  const prevId    = PAGES[(currentIndex - 1 + PAGES.length) % PAGES.length];
  const nextId    = PAGES[(currentIndex + 1) % PAGES.length];
  const prevLabel = t.sections[prevId === 'home' ? 'about' : prevId as keyof typeof t.sections]?.label ?? prevId.replace(/-/g, ' ');
  const nextLabel = t.sections[nextId === 'home' ? 'about' : nextId as keyof typeof t.sections]?.label ?? nextId.replace(/-/g, ' ');

  // Helper for nav items with translated labels
  const NAV_ITEMS = [
    { id: 'home' as PageId,               label: t.nav.home,  aria: t.aria.navHome  },
    { id: 'about' as PageId,              label: t.nav.about, aria: t.aria.navAbout },
    { id: 'projects-campaigns' as PageId, label: t.nav.works, aria: t.aria.navWorks },
    { id: 'blog' as PageId,               label: t.nav.blog,  aria: t.aria.navBlog  },
  ];

  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-primary selection:text-bg font-sans flex flex-col overflow-hidden transition-colors duration-300">
      <StarBackground />

      {/* Top Navigation & Branding */}
      <header className="flex items-center justify-between px-12 h-24 border-b border-border shrink-0 relative z-20 bg-bg/80 backdrop-blur-sm">
        <div className="flex items-baseline space-x-2">
          <span
            className="text-2xl font-display font-black tracking-tighter uppercase cursor-pointer"
            onClick={() => goToPage('home')}
            role="link"
            tabIndex={0}
            aria-label="Go to home page"
            onKeyDown={e => e.key === 'Enter' && goToPage('home')}
          >
            Phạm Đại Bàng
          </span>
          <span className="text-[10px] uppercase tracking-widest text-text/40">{t.common.v2024}</span>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex space-x-8" aria-label="Main navigation">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => goToPage(item.id)}
                aria-label={item.aria}
                aria-current={currentPage === item.id ? 'page' : undefined}
                className={`text-xs uppercase tracking-widest transition-all ${
                  currentPage === item.id
                    ? 'border-b border-primary pb-1'
                    : 'text-text/40 hover:text-text'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 border border-border rounded-full hover:bg-primary/5 transition-all outline-none"
              aria-label={t.aria.toggleTheme}
              title={t.aria.toggleTheme}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1 border border-border rounded-full text-[10px] uppercase tracking-widest hover:bg-primary/5 transition-all h-8 outline-none"
              aria-label={t.aria.toggleLang}
            >
              <Globe2 className="w-3 h-3" aria-hidden="true" />
              {lang === 'en' ? 'VI' : 'EN'}
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* Left Vertical Info Rail */}
        <aside className="w-16 border-r border-border flex flex-col items-center justify-center space-y-24 py-12 shrink-0 hidden md:flex" aria-hidden="true">
          <div className="vertical-text rotate-180 text-[10px] uppercase tracking-[0.4em] text-text/30 whitespace-nowrap font-display">Creative Technologist</div>
          <div className="h-24 w-px bg-primary/20"></div>
          <div className="vertical-text rotate-180 text-[10px] uppercase tracking-[0.4em] text-text/30 whitespace-nowrap font-display">Architectural Design</div>
        </aside>

        {/* Main Stage */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-hide pb-32" id="main-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full px-6 md:px-12 py-12 max-w-7xl mx-auto"
            >
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/"                   element={<HomeIndex onNavigate={goToPage} lang={lang} />} />
                  <Route path="/about"              element={<AboutMe lang={lang} />} />
                  <Route path="/project-manager"    element={<ProjectManager lang={lang} />} />
                  <Route path="/ceo-assistant"      element={<CEOAssistant lang={lang} />} />
                  <Route path="/store-management"   element={<StoreManagement lang={lang} />} />
                  <Route path="/sales-management"   element={<SalesManagement lang={lang} />} />
                  <Route path="/content-production" element={<ContentProduction lang={lang} />} />
                  <Route path="/projects-campaigns" element={<ProjectsCampaigns lang={lang} />} />
                  <Route path="/events-training"    element={<EventsTraining lang={lang} />} />
                  <Route path="/online-channels"    element={<OnlineChannels lang={lang} />} />
                  <Route path="/content-projects"   element={<ContentProjectsSection lang={lang} />} />
                  <Route path="/community-projects" element={<CommunityProjects lang={lang} />} />
                  <Route path="/event-projects"     element={<EventProjects lang={lang} />} />
                  <Route path="/key-competency"     element={<KeyCompetency lang={lang} />} />
                  <Route path="/achievements"       element={<Achievements lang={lang} />} />
                  <Route path="/blog"               element={<Blog lang={lang} />} />
                  {/* Catch-all → home */}
                  <Route path="*"                   element={<HomeIndex onNavigate={goToPage} lang={lang} />} />
                </Routes>
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Right Sidebar / Status */}
        <aside className="w-48 border-l border-border flex flex-col p-6 shrink-0 hidden xl:flex" aria-label="Status panel">
          <div className="space-y-8">
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-text/40">{t.common.availability}</div>
              <div className="flex items-center text-[11px]">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" aria-hidden="true"></span>
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
            <a
              href={`mailto:${t.contact.email}?subject=${encodeURIComponent(t.contact.emailSubject)}`}
              className="w-full aspect-square bg-gradient-to-br from-primary/10 to-transparent rounded-full flex items-center justify-center border border-primary/5 group hover:border-primary/20 hover:scale-105 transition-all cursor-pointer no-underline"
              aria-label={`Send email to ${t.contact.email}`}
            >
              <div className="text-[10px] uppercase tracking-tighter text-center leading-tight px-2">
                {t.common.letsTalk}
              </div>
            </a>
          </div>
        </aside>
      </div>

      {/* Bottom Status Bar */}
      <footer className="h-16 border-t border-border flex items-center px-12 justify-between shrink-0 relative z-20 bg-bg">
        <div className="text-[9px] uppercase tracking-widest text-text/30">
          &copy; {t.common.copyright}
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-12 text-nowrap">
          <div className="flex space-x-12">
            <button
              onClick={prevPage}
              className="group flex flex-col items-start transition-colors"
              aria-label={t.aria.prevPage}
            >
              <span className="text-[8px] uppercase tracking-widest text-text/40 mb-1">{t.common.prev}</span>
              <div className="flex items-center gap-2 group-hover:text-accent">
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                <span className="text-[10px] uppercase font-bold tracking-widest">
                  {prevId === 'home'
                    ? t.nav.home
                    : t.sections[prevId as keyof typeof t.sections]?.label ?? prevId.replace(/-/g, ' ')}
                </span>
              </div>
            </button>

            <button
              onClick={nextPage}
              className="group flex flex-col items-end transition-colors"
              aria-label={t.aria.nextPage}
            >
              <span className="text-[8px] uppercase tracking-widest text-text/40 mb-1">{t.common.next}</span>
              <div className="flex items-center gap-2 group-hover:text-accent">
                <span className="text-[10px] uppercase font-bold tracking-widest">
                  {nextId === 'home'
                    ? t.nav.home
                    : t.sections[nextId as keyof typeof t.sections]?.label ?? nextId.replace(/-/g, ' ')}
                </span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </button>
          </div>
          <div className="h-8 w-px bg-border" aria-hidden="true"></div>
          <div className="text-[11px] font-display font-black tracking-widest text-text/60" aria-label={`Page ${currentIndex + 1} of ${PAGES.length}`}>
            {String(currentIndex + 1).padStart(2, '0')} — {String(PAGES.length).padStart(2, '0')}
          </div>
        </div>
      </footer>
    </div>
  );
}
