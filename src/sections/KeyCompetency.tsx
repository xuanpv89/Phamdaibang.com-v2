import { translations, Language } from '../lib/translations';

interface KeyCompetencyProps {
  lang: Language;
}

export default function KeyCompetency({ lang }: KeyCompetencyProps) {
  const t = translations[lang];

  return (
    <div className="space-y-24 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12 gap-8">
        <h2 className="text-[60px] md:text-[80px] leading-none font-serif font-black tracking-tighter uppercase opacity-90">
          {t.competencies.title}
        </h2>
        <div className="text-right">
          <div className="text-4xl font-serif italic mb-1 text-white/40">15 //</div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">{t.competencies.subtitle}</p>
        </div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-y-16 gap-x-24">
        {/* Core Competencies */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-x-12 gap-y-16">
          <div className="space-y-6">
            <div className="w-10 h-10 border border-white/20 rounded-none flex items-center justify-center bg-white/5">
               <span className="text-xl">🎨</span>
            </div>
            <h3 className="text-sm font-black uppercase tracking-widest border-b border-white/10 pb-2">{t.competencies.humanDev}</h3>
            <p className="text-xs font-light text-white/50 leading-relaxed">
              {t.competencies.humanDevDesc}
            </p>
          </div>

          <div className="space-y-6">
            <div className="w-10 h-10 border border-white/20 rounded-none flex items-center justify-center bg-white/5">
               <span className="text-xl">📢</span>
            </div>
            <h3 className="text-sm font-black uppercase tracking-widest border-b border-white/10 pb-2">{t.competencies.communication}</h3>
            <p className="text-xs font-light text-white/50 leading-relaxed">
              {t.competencies.communicationDesc}
            </p>
          </div>

          <div className="space-y-6">
            <div className="w-10 h-10 border border-white/20 rounded-none flex items-center justify-center bg-white/5">
               <span className="text-xl">⌨️</span>
            </div>
            <h3 className="text-sm font-black uppercase tracking-widest border-b border-white/10 pb-2">{t.competencies.contentCreation}</h3>
            <p className="text-xs font-light text-white/50 leading-relaxed">
              {t.competencies.contentCreationDesc}
            </p>
          </div>

          <div className="space-y-6">
            <div className="w-10 h-10 border border-white/20 rounded-none flex items-center justify-center bg-white/5">
               <span className="text-xl">⚙️</span>
            </div>
            <h3 className="text-sm font-black uppercase tracking-widest border-b border-white/10 pb-2">{t.competencies.highTech}</h3>
            <p className="text-xs font-light text-white/50 leading-relaxed">
              {t.competencies.highTechDesc}
            </p>
          </div>
        </div>

        {/* Key Skills & Education */}
        <div className="lg:col-span-6 space-y-16">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">{t.competencies.knowledgeBase}</span>
               <div className="h-px bg-white/10 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left">
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white border-l border-white/20 pl-3">{t.competencies.psychology}</h4>
                <p className="text-[11px] font-light text-white/50 leading-relaxed">{t.competencies.psychologyDesc}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white border-l border-white/20 pl-3">{t.competencies.research}</h4>
                <p className="text-[11px] font-light text-white/50 leading-relaxed">{t.competencies.researchDesc}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white border-l border-white/20 pl-3">{t.competencies.mediaRelations}</h4>
                <p className="text-[11px] font-light text-white/50 leading-relaxed">{t.competencies.mediaRelationsDesc}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white border-l border-white/20 pl-3">{t.competencies.cLevelNetwork}</h4>
                <p className="text-[11px] font-light text-white/50 leading-relaxed">{t.competencies.cLevelNetworkDesc}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8 p-1 w-full">
            <div className="flex items-center gap-4 mb-8">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">{t.competencies.education}</span>
               <div className="h-px bg-white/10 flex-grow"></div>
            </div>
            <div className="space-y-6 text-left">
              <div className="flex justify-between items-start border-b border-white/5 pb-4">
                <div className="space-y-1">
                  <p className="text-sm font-serif">{lang === 'vi' ? 'Đại học Kinh tế Quốc dân' : 'National Economics University'}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{lang === 'vi' ? 'Cử nhân | Kế hoạch \u0026 Phát triển' : 'Bachelor | Planning \u0026 Development'}</p>
                </div>
                <span className="text-xs font-mono opacity-40">2012</span>
              </div>
              <div className="flex justify-between items-start border-b border-white/5 pb-4">
                <div className="space-y-1">
                  <p className="text-sm font-serif">FSB (FPT University)</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{lang === 'vi' ? 'Chương trình Quản lý Cấp trung' : 'Middle Manager Program'}</p>
                </div>
                <span className="text-xs font-mono opacity-40">2014</span>
              </div>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm font-serif">SIY Leadership Institute</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{lang === 'vi' ? 'Chứng chỉ Search Inside Yourself' : 'Search Inside Yourself Certification'}</p>
                </div>
                <span className="text-xs font-mono opacity-40">2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
