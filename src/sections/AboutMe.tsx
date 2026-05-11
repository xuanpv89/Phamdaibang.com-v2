import { Mail, MapPin, Phone } from 'lucide-react';
import { translations, Language } from '../lib/translations';

interface AboutMeProps {
  lang: Language;
}

export default function AboutMe({ lang }: AboutMeProps) {
  const t = translations[lang];

  return (
    <div className="space-y-32 py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end geometric-border-b pb-12 gap-8">
        <h2 className="text-[60px] md:text-[100px] leading-none font-display font-black tracking-tighter uppercase">
          {t.about.title}
        </h2>
        <div className="text-right">
          <div className="text-4xl font-serif italic mb-1 opacity-20">02 //</div>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">{t.about.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Profile Image & Intro */}
        <div className="lg:col-span-5 space-y-12">
          <div className="relative group">
            <div className="aspect-[4/5] bg-primary/5 border border-border overflow-hidden relative">
              <img 
                src="/profile.jpg" 
                alt="Pham Dai Bang" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            {/* Geometric accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/30 pointer-events-none"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent/30 pointer-events-none"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl font-serif italic leading-relaxed opacity-90">
              {t.about.story}
            </p>
            <div className="h-px w-24 bg-accent"></div>
          </div>
        </div>

        {/* Bio Items & Stats */}
        <div className="lg:col-span-7 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {t.about.bioItems.map((item, i) => (
              <div key={i} className="space-y-4">
                <span className="text-[10px] text-accent font-black tracking-widest">0{i+1} —</span>
                <p className="text-sm font-light leading-relaxed opacity-60">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Details Embedded */}
          <div className="p-8 border border-border bg-primary/[0.02] grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest opacity-40">{t.nav.contact}</span>
              <p className="text-sm font-mono tracking-tight">xuanpv89@gmail.com</p>
              <p className="text-sm font-mono tracking-tight">+84 973 768 653</p>
            </div>
            <div className="space-y-1" id="location-info">
              <span className="text-[9px] uppercase tracking-widest opacity-40">{t.common.location}</span>
              <p className="text-xs opacity-70">Dao Tan, Ba Dinh, Hanoi</p>
              <p className="text-xs opacity-70">Su Van Hanh, D10, HCMC</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Timeline Section */}
      <section className="space-y-16" id="visual-timeline">
        <div className="flex items-center gap-6">
          <h3 className="text-4xl font-display font-black uppercase tracking-tighter">{t.about.timeline}</h3>
          <div className="h-px bg-border flex-grow"></div>
        </div>
        
        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[22px] left-0 w-full h-[1px] bg-border"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            {[
              { year: '2011', company: lang === 'vi' ? 'Khởi nghiệp' : 'Startup', role: lang === 'vi' ? 'Giải thưởng' : 'Awarded' },
              { year: '2012', company: 'Blaki', role: lang === 'vi' ? 'Sáng tạo' : 'Creative' },
              { year: '2013', company: 'GHN', role: lang === 'vi' ? 'Đội ngũ sáng lập' : 'Founding Team' },
              { year: '2015', company: 'TCH', role: lang === 'vi' ? 'Vận hành' : 'Operations' },
              { year: '2017', company: 'Tomato', role: lang === 'vi' ? 'Chiến lược' : 'Strategy' },
              { year: '2018', company: 'Freelance', role: 'R&D' },
              { year: '2019', company: 'Compassio', role: lang === 'vi' ? 'Hành trình mới' : 'New Venture' },
            ].map((item, i) => (
              <div key={i} className="flex lg:flex-col items-start gap-4 lg:gap-8 group">
                <div className="w-12 h-12 lg:w-[44px] lg:h-[44px] rounded-none border border-border bg-bg group-hover:border-accent transition-colors flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-mono font-bold text-accent">{item.year.slice(2)}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-display font-black group-hover:text-accent transition-colors">{item.year}</span>
                  <p className="text-base font-serif italic whitespace-nowrap">{item.company}</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Competencies Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-24 border-t border-border">
        <div className="space-y-8">
          <h4 className="text-2xl font-display font-black uppercase tracking-tight flex items-center gap-4">
            <span className="w-8 h-px bg-accent"></span>
            {t.about.organizingTitle}
          </h4>
          <p className="text-sm font-light leading-relaxed opacity-60 italic border-l-2 border-accent/20 pl-6">
            {lang === 'vi' 
              ? 'Điều phối và dẫn dắt hơn 10 sự kiện quy mô doanh nghiệp và hơn 50 chương trình đào tạo chuyển hóa với độ chính xác tuyệt đối.' 
              : 'Coordinated and facilitated over 10 corporate-scale events and 50+ transformative training programs with absolute precision.'}
          </p>
        </div>
        <div className="space-y-8">
          <h4 className="text-2xl font-display font-black uppercase tracking-tight flex items-center gap-4">
            <span className="w-8 h-px bg-accent"></span>
            {t.about.contentTitle}
          </h4>
          <p className="text-sm font-light leading-relaxed opacity-60 italic border-l-2 border-accent/20 pl-6">
            {lang === 'vi'
              ? 'Quản trị hệ thống sản xuất nội dung đa phương tiện, tối ưu hóa quy trình biên tập và mở rộng mạng lưới chuyên gia.'
              : 'Managing multimedia content production systems, optimizing editorial processes, and expanding expert networks.'}
          </p>
        </div>
      </div>
    </div>
  );
}
