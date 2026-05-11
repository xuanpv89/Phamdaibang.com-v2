import { motion } from 'motion/react';
import { translations, Language } from '../lib/translations';
import { TIMELINE } from '../data/experience';

interface AboutMeProps {
  lang: Language;
}

export default function AboutMe({ lang }: AboutMeProps) {
  const t = translations[lang];

  return (
    <div className="space-y-32 py-12">
      {/* Header Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-end geometric-border-b pb-12 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[60px] md:text-[100px] leading-none font-display font-black tracking-tighter uppercase">
          {t.about.title}
        </h2>
        <div className="text-right">
          <div className="text-4xl font-serif italic mb-1 opacity-20">02 //</div>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">{t.about.subtitle}</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Profile Image & Intro */}
        <motion.div
          className="lg:col-span-5 space-y-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative group">
            <div className="aspect-[4/5] bg-primary/5 border border-border overflow-hidden relative">
              <img
                src="/profile.jpg"
                alt="Phạm Đại Bàng – Project Manager & Communication Strategist tại Hà Nội, Việt Nam"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            {/* Geometric accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/30 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent/30 pointer-events-none" aria-hidden="true"></div>
          </div>

          <div className="space-y-6">
            <p className="text-xl font-serif italic leading-relaxed opacity-90">
              {t.about.story}
            </p>
            <div className="h-px w-24 bg-accent" aria-hidden="true"></div>
          </div>
        </motion.div>

        {/* Bio Items & Stats */}
        <motion.div
          className="lg:col-span-7 space-y-16"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {t.about.bioItems.map((item, i) => (
              <motion.div
                key={i}
                className="space-y-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="text-[10px] text-accent font-black tracking-widest">0{i + 1} —</span>
                <p className="text-sm font-light leading-relaxed opacity-60">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Details — from translations, not hard-coded */}
          <motion.div
            className="p-8 border border-border bg-primary/[0.02] grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest opacity-40">{t.nav.contact}</span>
              <p className="text-sm font-mono tracking-tight">
                <a
                  href={`mailto:${t.contact.email}`}
                  className="hover:text-accent transition-colors"
                  aria-label={`Email: ${t.contact.email}`}
                >
                  {t.contact.email}
                </a>
              </p>
              <p className="text-sm font-mono tracking-tight">
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-accent transition-colors"
                  aria-label={`Phone: ${t.contact.phone}`}
                >
                  {t.contact.phone}
                </a>
              </p>
            </div>
            <div className="space-y-1" id="location-info">
              <span className="text-[9px] uppercase tracking-widest opacity-40">{t.common.location}</span>
              <p className="text-xs opacity-70">{t.contact.addressHanoi}</p>
              <p className="text-xs opacity-70">{t.contact.addressHCMC}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Visual Timeline Section — uses data from src/data/experience.ts */}
      <section className="space-y-16" id="visual-timeline">
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-4xl font-display font-black uppercase tracking-tighter">{t.about.timeline}</h3>
          <div className="h-px bg-border flex-grow" aria-hidden="true"></div>
        </motion.div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[22px] left-0 w-full h-[1px] bg-border" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                className="flex lg:flex-col items-start gap-4 lg:gap-8 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.07 }}
              >
                <div className="w-12 h-12 lg:w-[44px] lg:h-[44px] rounded-none border border-border bg-bg group-hover:border-accent transition-colors flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-mono font-bold text-accent">{item.year.slice(2)}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-display font-black group-hover:text-accent transition-colors">{item.year}</span>
                  <p className="text-base font-serif italic whitespace-nowrap">
                    {lang === 'vi' && item.companyVi ? item.companyVi : item.company}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">
                    {lang === 'vi' ? item.roleVi : item.roleEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Competencies Highlights */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-24 border-t border-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="space-y-8">
          <h4 className="text-2xl font-display font-black uppercase tracking-tight flex items-center gap-4">
            <span className="w-8 h-px bg-accent" aria-hidden="true"></span>
            {t.about.organizingTitle}
          </h4>
          <p className="text-sm font-light leading-relaxed opacity-60 italic border-l-2 border-accent/20 pl-6">
            {t.about.organizingDesc}
          </p>
        </div>
        <div className="space-y-8">
          <h4 className="text-2xl font-display font-black uppercase tracking-tight flex items-center gap-4">
            <span className="w-8 h-px bg-accent" aria-hidden="true"></span>
            {t.about.contentTitle}
          </h4>
          <p className="text-sm font-light leading-relaxed opacity-60 italic border-l-2 border-accent/20 pl-6">
            {t.about.contentDesc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

