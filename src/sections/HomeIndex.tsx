import { PageId } from '../App';
import { translations, Language } from '../lib/translations';

interface HomeIndexProps {
  onNavigate: (id: PageId) => void;
  lang: Language;
}

export default function HomeIndex({ onNavigate, lang }: HomeIndexProps) {
  const t = translations[lang];

  const sections: { label: string; id: PageId; num: string; desc: string }[] = [
    { label: t.sections.about.label, id: 'about', num: '02', desc: t.sections.about.desc },
    { label: t.sections.projectManager.label, id: 'project-manager', num: '03', desc: t.sections.projectManager.desc },
    { label: t.sections.ceoAssistant.label, id: 'ceo-assistant', num: '04', desc: t.sections.ceoAssistant.desc },
    { label: t.sections.storeManagement.label, id: 'store-management', num: '05', desc: t.sections.storeManagement.desc },
    { label: t.sections.salesManagement.label, id: 'sales-management', num: '06', desc: t.sections.salesManagement.desc },
    { label: t.sections.contentProduction.label, id: 'content-production', num: '07', desc: t.sections.contentProduction.desc },
    { label: t.sections.projectsCampaigns.label, id: 'projects-campaigns', num: '08', desc: t.sections.projectsCampaigns.desc },
    { label: t.sections.eventsTraining.label, id: 'events-training', num: '09', desc: t.sections.eventsTraining.desc },
    { label: t.sections.onlineChannels.label, id: 'online-channels', num: '10', desc: t.sections.onlineChannels.desc },
    { label: t.sections.keyCompetency.label, id: 'key-competency', num: '15', desc: t.sections.keyCompetency.desc },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Big Geometric Headline Section */}
      <div className="h-[450px] flex flex-col justify-between border-b border-white/10 pb-12 mb-12">
        <h1 className="text-[100px] md:text-[140px] leading-[0.8] font-serif font-black uppercase tracking-tighter opacity-80 select-none">
          {t.home.headline.split('\n')[0]}<br/>{t.home.headline.split('\n')[1]}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-md space-y-4">
            <p className="text-sm leading-relaxed text-white/50 font-light">
              {t.home.description}
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => onNavigate('about')}
                className="px-6 py-2 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                {t.common.readStory}
              </button>
              <button 
                onClick={() => onNavigate('projects-campaigns')}
                className="px-6 py-2 bg-white text-black text-[10px] uppercase tracking-widest font-bold hover:bg-white/90 transition-colors"
              >
                {t.common.curatedWork}
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="text-5xl md:text-6xl font-serif italic mb-2">01 //</div>
            <div className="text-[10px] uppercase tracking-widest text-white/40">{t.common.portfolioIndex}</div>
          </div>
        </div>
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
        {sections.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="group aspect-video md:aspect-square lg:aspect-video p-8 flex flex-col justify-between hover:bg-white/[0.03] transition-all border-r border-b border-white/10 text-left"
          >
            <div className="space-y-2">
              <span className="text-[10px] text-white/40 uppercase block tracking-widest">
                {item.num} / {item.id.replace('-', ' ')}
              </span>
              <h3 className="text-2xl font-serif font-light italic group-hover:pl-2 transition-all duration-300">
                {item.label}
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] text-white/30 uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.desc}
              </p>
              <div className="h-px w-0 bg-white/20 group-hover:w-full transition-all duration-700"></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
