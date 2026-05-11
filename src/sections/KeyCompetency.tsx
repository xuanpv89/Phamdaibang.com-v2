import { motion } from 'motion/react';
import { translations, Language } from '../lib/translations';

interface KeyCompetencyProps {
  lang: Language;
}

const CORE_COMPETENCIES = [
  { emoji: '🎨', keyDev: 'humanDev', keyDesc: 'humanDevDesc' },
  { emoji: '📢', keyDev: 'communication', keyDesc: 'communicationDesc' },
  { emoji: '⌨️', keyDev: 'contentCreation', keyDesc: 'contentCreationDesc' },
  { emoji: '⚙️', keyDev: 'highTech', keyDesc: 'highTechDesc' },
] as const;

export default function KeyCompetency({ lang }: KeyCompetencyProps) {
  const t = translations[lang];

  return (
    <div className="space-y-24 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-border pb-12 gap-8">
        <h2 className="text-[60px] md:text-[80px] font-display font-black leading-none tracking-tighter uppercase">
          {t.competencies.title}
        </h2>
        <div className="text-right">
          <div className="text-4xl font-serif italic mb-1 opacity-20">15 //</div>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-30">{t.competencies.subtitle}</p>
        </div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-y-16 gap-x-24">
        {/* Core Competencies — fixed: use design system tokens instead of white/* */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-x-12 gap-y-16">
          {CORE_COMPETENCIES.map((item, i) => (
            <motion.div
              key={item.keyDev}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 border border-border rounded-none flex items-center justify-center bg-primary/5">
                <span className="text-xl" aria-hidden="true">{item.emoji}</span>
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest border-b border-border pb-2 text-text">
                {t.competencies[item.keyDev]}
              </h3>
              <p className="text-xs font-light text-text/50 leading-relaxed">
                {t.competencies[item.keyDesc]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Skills & Education */}
        <div className="lg:col-span-6 space-y-16">
          {/* Knowledge Base */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text/40">
                {t.competencies.knowledgeBase}
              </span>
              <div className="h-px bg-border flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left">
              {[
                { key: 'psychology', descKey: 'psychologyDesc' },
                { key: 'research', descKey: 'researchDesc' },
                { key: 'mediaRelations', descKey: 'mediaRelationsDesc' },
                { key: 'cLevelNetwork', descKey: 'cLevelNetworkDesc' },
              ].map(({ key, descKey }, i) => (
                <motion.div
                  key={key}
                  className="space-y-3"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-text border-l border-border pl-3">
                    {t.competencies[key as keyof typeof t.competencies]}
                  </h4>
                  <p className="text-[11px] font-light text-text/50 leading-relaxed">
                    {t.competencies[descKey as keyof typeof t.competencies]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8 p-1 w-full">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text/40">
                {t.competencies.education}
              </span>
              <div className="h-px bg-border flex-grow"></div>
            </div>
            <div className="space-y-6 text-left">
              {[
                { nameKey: 'neu', degreeKey: 'neuDegree', year: '2012' },
                { nameKey: 'fsb', degreeKey: 'fsbDegree', year: '2014' },
                { nameKey: 'siy', degreeKey: 'siyDegree', year: '2022' },
              ].map(({ nameKey, degreeKey, year }, i) => (
                <motion.div
                  key={nameKey}
                  className="flex justify-between items-start border-b border-border/50 pb-4 last:border-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="space-y-1">
                    <p className="text-sm font-serif text-text">
                      {t.competencies[nameKey as keyof typeof t.competencies]}
                    </p>
                    <p className="text-[10px] text-text/40 uppercase tracking-widest">
                      {t.competencies[degreeKey as keyof typeof t.competencies]}
                    </p>
                  </div>
                  <span className="text-xs font-mono opacity-40">{year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

