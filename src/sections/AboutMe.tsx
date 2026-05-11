import { Mail, MapPin, Phone } from 'lucide-react';
import { translations, Language } from '../lib/translations';

interface AboutMeProps {
  lang: Language;
}

export default function AboutMe({ lang }: AboutMeProps) {
  const t = translations[lang];

  return (
    <div className="space-y-24 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12 gap-8">
        <h2 className="text-[60px] md:text-[100px] leading-none font-serif font-black tracking-tighter uppercase opacity-90">
          {t.about.title}
        </h2>
        <div className="text-right">
          <div className="text-4xl font-serif italic mb-1 text-white/40">02 //</div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">{t.about.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Timeline Column */}
        <div className="lg:col-span-3">
          <div className="bg-[#E5E5E5] p-8 text-[#0F0F0F] rounded-none shadow-2xl relative">
            <h3 className="font-serif font-bold text-2xl mb-6 border-b border-black/10 pb-2">{t.about.timeline}</h3>
            <div className="relative border-l border-black/20 pl-6 space-y-8 text-xs">
              {[
                { year: '2011', text: lang === 'vi' ? 'Giải thưởng Cuộc thi Khởi nghiệp Kinh doanh' : 'Start-up Business Contest Awarded' },
                { year: '2012', text: lang === 'vi' ? 'Blaki - Dự án đầu tiên' : 'Blaki - Initial Venture' },
                { year: '2013', text: lang === 'vi' ? 'Giao Hàng Nhanh - Đội ngũ sáng lập' : 'Giao Hang Nhanh - Founding Team' },
                { year: '2015', text: lang === 'vi' ? 'The Coffee House - Quản lý' : 'The Coffee House - Management' },
                { year: '2017', text: lang === 'vi' ? 'Tomato Education - Chiến lược' : 'Tomato Education - Strategy' },
                { year: '2018', text: lang === 'vi' ? 'Làm tự do Marketing / Nghiên cứu \u0026 Phát triển' : 'Marketing Freelance / R&D' },
                { year: '2019', text: lang === 'vi' ? 'Compassio - Thành viên sáng lập' : 'Compassio - Founding Member' },
              ].map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-[25px] top-1 w-2 h-2 bg-black rounded-full"></div>
                  <span className="font-bold text-sm block mb-1">{item.year}</span>
                  <p className="opacity-70 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-6 border-t border-black/10">
              <p className="text-[10px] leading-relaxed font-serif italic opacity-80">
                {lang === 'vi' 
                  ? '"Làm việc trong lĩnh vực truyền thông, đóng góp vào sự thành công của doanh nghiệp, tạo ra lợi ích cho xã hội."'
                  : '"Working in communication field, contribute to the success of business, creating benefits for society."'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-4 space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-white/20 flex-grow"></div>
              <span className="text-[10px] uppercase tracking-widest text-white/40">{t.about.expertiseTitle}</span>
            </div>
            <h3 className="text-2xl font-serif italic text-white">
              {t.about.expertiseSubtitle}
            </h3>
            <ul className="space-y-4 text-white/50 text-sm font-light leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-white/20 mt-1">/</span>
                <span>{lang === 'vi' ? 'Đắm mình sâu sắc trong lĩnh vực truyền thông qua nhiều ngành công nghiệp khác nhau.' : 'Deep immersion in the communication field across varied industries.'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/20 mt-1">/</span>
                <span>{lang === 'vi' ? 'Chứng minh năng lực tại các tổ chức Sáng tạo \u0026 Đổi mới.' : 'Provenance in Creativity & Innovation organizations.'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/20 mt-1">/</span>
                <span>{lang === 'vi' ? 'Nền tảng kép: Tư duy sở hữu + Thực thi chiến lược.' : 'Hybrid background: Ownership mindset + Strategic execution.'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/20 mt-1">/</span>
                <span>{lang === 'vi' ? 'Kinh nghiệm trải dài từ thực thi trực tiếp đến quản lý cấp cao.' : 'Experience spanning from on-the-ground execution to high-level management.'}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6 border-t border-white/10 pt-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-white/20 flex-grow"></div>
              <span className="text-[10px] uppercase tracking-widest text-white/40">{t.about.contact}</span>
            </div>
            <div className="space-y-6 text-white/60 text-sm font-light">
              <div className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-white/20" />
                <span>+84-973-768-653</span>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-white/20 mt-1" />
                <div className="flex flex-col">
                  <span>HCMC: 814 Su Van Hanh Str, W12, D10</span>
                  <span className="text-white/20">Ha Noi: 58/7, W. Dao Tan, D. Ba Dinh</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-white/20" />
                <span>xuanpv89@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Title Rail */}
        <div className="hidden lg:flex lg:col-span-1 geometric-border-l geometric-border-r items-center justify-center">
          <span className="vertical-text text-5xl font-serif font-black tracking-[0.2em] text-white/5 uppercase">
            {lang === 'vi' ? 'KINH NGHIỆM' : 'EXPERIENCES'}
          </span>
        </div>

        {/* Right Info Column */}
        <div className="lg:col-span-4 space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-white/20 flex-grow"></div>
              <span className="text-[10px] uppercase tracking-widest text-white/40">{t.about.organizingTitle}</span>
            </div>
            <h3 className="text-2xl font-serif italic text-white">
              {t.about.organizingSubtitle}
            </h3>
            <div className="space-y-6 text-white/50 text-sm font-light leading-relaxed">
              <p className="border-l-2 border-white/10 pl-4 italic">
                {lang === 'vi' ? 'Quản lý hơn 10 sự kiện doanh nghiệp và trên 50 chương trình cá nhân với sự chính xác tập trung.' : 'Managed over 10 corporate events and 50+ individual programs with focused precision.'}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-white/20 mt-1">/</span>
                  <span>{lang === 'vi' ? 'Điều phối và dẫn dắt các sự kiện phức tạp, làm việc chặt chẽ với các chuyên gia và diễn giả chính.' : 'Facilitated and hosted complex events, working closely with industry experts and keynote speakers.'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/20 mt-1">/</span>
                  <span>{lang === 'vi' ? 'Duy trì mạng lưới đối tác chất lượng cao và các kết nối chuyên gia mạnh mẽ.' : 'Maintains a robust network of high-quality partners and expert connections.'}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 border-t border-white/10 pt-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-white/20 flex-grow"></div>
              <span className="text-[10px] uppercase tracking-widest text-white/40">{t.about.contentTitle}</span>
            </div>
            <h3 className="text-2xl font-serif italic text-white">
              {t.about.contentSubtitle}
            </h3>
            <ul className="space-y-4 text-white/50 text-sm font-light leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-white/20 mt-1">/</span>
                <span>{lang === 'vi' ? 'Kinh nghiệm phong phú trong sản xuất kỹ thuật số qua các định dạng âm thanh, bài viết và video.' : 'Vast experience in digital production across audio, articles, and video content formats.'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/20 mt-1">/</span>
                <span>{lang === 'vi' ? 'Kết nối chiến lược với mạng lưới biên tập viên hàng đầu để mở rộng quy mô nhanh chóng.' : 'Strategic connection with top-tier editor networks for rapid scaling.'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
