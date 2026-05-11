import { PageId } from '../App';
import { translations, Language } from '../lib/translations';

interface HomeIndexProps {
  onNavigate: (id: PageId) => void;
  lang: Language;
}

export default function HomeIndex({ onNavigate, lang }: HomeIndexProps) {
  const t = translations[lang];

  const experience: { label: string; id: PageId; num: string; desc: string }[] = [
    { label: t.sections.about.label, id: 'about', num: '02', desc: t.sections.about.desc },
    { label: t.sections.projectManager.label, id: 'project-manager', num: '03', desc: t.sections.projectManager.desc },
    { label: t.sections.ceoAssistant.label, id: 'ceo-assistant', num: '04', desc: t.sections.ceoAssistant.desc },
    { label: t.sections.storeManagement.label, id: 'store-management', num: '05', desc: t.sections.storeManagement.desc },
    { label: t.sections.salesManagement.label, id: 'sales-management', num: '06', desc: t.sections.salesManagement.desc },
  ];

  const others: { label: string; id: PageId; num: string; desc: string }[] = [
    { label: t.sections.contentProduction.label, id: 'content-production', num: '07', desc: t.sections.contentProduction.desc },
    { label: t.sections.projectsCampaigns.label, id: 'projects-campaigns', num: '08', desc: t.sections.projectsCampaigns.desc },
    { label: t.sections.onlineChannels.label, id: 'online-channels', num: '10', desc: t.sections.onlineChannels.desc },
    { label: t.sections.communityProjects.label, id: 'community-projects', num: '11', desc: t.sections.communityProjects.desc },
    { label: t.sections.contentProjects.label, id: 'content-projects', num: '12', desc: t.sections.contentProjects.desc },
    { label: t.sections.eventProjects.label, id: 'event-projects', num: '13', desc: t.sections.eventProjects.desc },
    { label: t.sections.eventsTraining.label, id: 'events-training', num: '14', desc: t.sections.eventsTraining.desc },
    { label: t.sections.keyCompetency.label, id: 'key-competency', num: '15', desc: t.sections.keyCompetency.desc },
    { label: t.sections.achievements.label, id: 'achievements', num: '16', desc: t.sections.achievements.desc },
    { label: t.sections.blog.label, id: 'blog', num: '09', desc: t.sections.blog.desc },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Big Geometric Headline Section */}
      <div className="min-h-[450px] flex flex-col justify-between geometric-border-b pb-12 mb-16">
        <h1 className="text-[90px] md:text-[140px] leading-[0.85] font-display font-black uppercase tracking-tighter opacity-90 select-none">
          {t.home.headline.split('\n')[0]}<br/>{t.home.headline.split('\n')[1]}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-12">
          <div className="max-w-md space-y-6">
            <p className="text-sm md:text-base leading-relaxed text-text/60 font-light">
              {t.home.description}
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => onNavigate('about')}
                className="px-8 py-3 border border-border text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-primary hover:text-bg transition-colors"
                id="cta-read-story"
              >
                {t.common.readStory}
              </button>
              <button 
                onClick={() => onNavigate('projects-campaigns')}
                className="px-8 py-3 bg-primary text-bg text-[11px] uppercase tracking-[0.2em] font-black hover:opacity-90 transition-colors"
                id="cta-curated-work"
              >
                {t.common.curatedWork}
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="text-6xl md:text-8xl font-serif italic mb-4 opacity-10">01 //</div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-text/40">{t.common.portfolioIndex}</div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="mb-24" id="work-experience-section">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-4xl font-display font-black uppercase tracking-tighter">{t.common.experience}</h2>
          <div className="h-px bg-border flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
          {experience.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="group aspect-video p-8 flex flex-col justify-between hover:bg-primary/[0.03] transition-all border-r border-b border-border text-left relative overflow-hidden"
              id={`nav-item-${item.id}`}
            >
              <div className="space-y-4">
                <span className="text-[10px] text-accent uppercase block tracking-[0.3em] font-bold">
                  {item.num} / {item.id.replace(/-/g, ' ')}
                </span>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight group-hover:pl-4 transition-all duration-500">
                  {item.label}
                </h3>
              </div>
              <p className="text-[11px] text-text/40 uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {item.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-700"></div>
            </button>
          ))}
        </div>
      </section>

      {/* Others Section */}
      <section className="mb-24" id="projects-knowledge-section">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-4xl font-display font-black uppercase tracking-tighter">{t.common.projects}</h2>
          <div className="h-px bg-border flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
          {others.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="group aspect-video p-8 flex flex-col justify-between hover:bg-primary/[0.03] transition-all border-r border-b border-border text-left relative overflow-hidden"
              id={`nav-item-${item.id}`}
            >
              <div className="space-y-4">
                <span className="text-[10px] text-text/40 uppercase block tracking-[0.3em]">
                  {item.num} / {item.id.replace(/-/g, ' ')}
                </span>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight group-hover:pl-4 transition-all duration-500">
                  {item.label}
                </h3>
              </div>
              <p className="text-[11px] text-text/40 uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {item.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary/20 group-hover:w-full transition-all duration-700"></div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
