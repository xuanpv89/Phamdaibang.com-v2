import { translations, Language } from '../lib/translations';

interface ContentProductionProps {
  lang: Language;
}

export default function ContentProduction({ lang }: ContentProductionProps) {
  const t = translations[lang];

  return (
    <div className="space-y-24 py-12">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start geometric-border-b pb-12 gap-12">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 border border-accent/20 bg-accent/5 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
            {lang === 'vi' ? 'Truyền thông & Sáng tạo' : 'Communication & Creative'}
          </div>
          <h2 className="text-[50px] md:text-[80px] leading-[0.9] font-display font-black tracking-tighter uppercase max-w-2xl">
            {t.sections.contentProduction.label}
          </h2>
        </div>
        <div className="md:text-right space-y-2">
          <div className="text-4xl font-serif italic opacity-20">07 //</div>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-40">{lang === 'vi' ? 'HỢP TÁC CÙNG' : 'FEATURE WITH'}</p>
          <p className="text-xl font-display font-bold tracking-tight">COMPASSIO</p>
        </div>
      </div>

      <div className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Podcast */}
          <div className="space-y-8 group">
            <div className="aspect-[3/4] bg-primary/5 border border-border overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-[10px] uppercase font-serif italic opacity-20 tracking-widest">Podcast Production</span>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-accent">01 // Editor-in-chief</span>
              <h3 className="text-2xl font-display font-black uppercase tracking-tight">Compassio Podcast</h3>
              <ul className="space-y-3 text-sm font-light opacity-60 leading-relaxed">
                <li>{lang === 'vi' ? 'Tuyển dụng, đào tạo và hướng dẫn đội ngũ biên tập viên.' : 'Recruit, training, guidance for Editor Team.'}</li>
                <li>{lang === 'vi' ? 'Xây dựng và theo dõi quy trình sản xuất.' : 'Production process making & tracking.'}</li>
                <li>{lang === 'vi' ? 'Chiến lược nội dung & phát triển dài hạn.' : 'Content strategy & long-term development.'}</li>
              </ul>
            </div>
          </div>

          {/* Website */}
          <div className="space-y-8 group">
             <div className="aspect-[3/4] bg-primary/5 border border-border overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-[10px] uppercase font-serif italic opacity-20 tracking-widest">Website Content</span>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-accent">02 // Producer</span>
              <h3 className="text-2xl font-display font-black uppercase tracking-tight">Compassio Website</h3>
              <ul className="space-y-3 text-sm font-light opacity-60 leading-relaxed">
                <li>{lang === 'vi' ? 'Sản xuất: Bố cục nội dung, duyệt kịch bản, dịch thuật, ghi âm audio, sản xuất video...' : 'Production: Content layout, script approve, translate content, audio recording, video production...'}</li>
                <li>{lang === 'vi' ? 'Tìm kiếm nguồn lực (đối tác, khách mời, tài năng, ekip sản xuất).' : 'Resource Seeking (partner, guest, talent, crew for production line).'}</li>
              </ul>
            </div>
          </div>

          {/* TV/Video */}
          <div className="space-y-8 group">
             <div className="aspect-[3/4] bg-primary/5 border border-border overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-[10px] uppercase font-serif italic opacity-20 tracking-widest">Video Direction</span>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-accent">03 // Creative Lead</span>
              <h3 className="text-2xl font-display font-black uppercase tracking-tight">Compassio TV</h3>
              <p className="text-sm font-light opacity-60 leading-relaxed">
                {lang === 'vi' 
                  ? 'Điều phối sản xuất Talkshow, review và các video chia sẻ (giai đoạn đầu) - Tập trung vào giá trị chuyển hóa.' 
                  : 'Talkshow, review, sharing video (early phase) - via Compassio TV. Focused on transformative value.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

