import { translations, Language } from '../lib/translations';

interface CommunityProjectsProps {
  lang: Language;
}

export default function CommunityProjects({ lang }: CommunityProjectsProps) {
  const t = translations[lang];

  return (
    <div className="space-y-24 py-12">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start geometric-border-b pb-12 gap-12">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 border border-accent/20 bg-accent/5 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
            {lang === 'vi' ? 'Dự án Cá nhân & Cộng đồng' : 'Personal & Community Projects'}
          </div>
          <h2 className="text-[50px] md:text-[80px] leading-[0.9] font-display font-black tracking-tighter uppercase max-w-2xl">
            {t.sections.communityProjects.label}
          </h2>
          <p className="max-w-xl text-sm font-light opacity-60 leading-relaxed italic">
            {lang === 'vi' 
              ? 'Đây là các dự án cá nhân, được thực hiện dưới thương hiệu riêng, thông qua Blog cá nhân, hoặc hợp tác với các hội, nhóm và tổ chức khác.'
              : 'This is personal projects, done in the personal brandname, through personal Blog, or collabs with other associations, groups, and organizations.'}
          </p>
        </div>
        <div className="md:text-right">
          <div className="text-4xl font-serif italic opacity-20">11 //</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left Col: Social Dev */}
        <div className="lg:col-span-7 space-y-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-black uppercase tracking-tight flex items-baseline gap-4">
               {lang === 'vi' ? 'PHÁT TRIỂN CỘNG ĐỒNG' : 'SOCIAL DEVELOPMENT'}
               <span className="h-px bg-border flex-grow"></span>
            </h3>
            
            <div className="space-y-12">
              {[
                { 
                  title: lang === 'vi' ? 'Hiểu Về Cảm Xúc (2017-nay)' : 'Understanding Emotions (2017-present)',
                  desc: lang === 'vi' ? 'Dịch thuật, viết và phát triển nội dung để nâng cao nhận thức cộng đồng về chăm sóc cảm xúc & sức khỏe tinh thần.' : 'Translating, writing & developing content to raise awareness and community aware in caring for emotions & wellbeing.'
                },
                {
                  title: lang === 'vi' ? 'Hiểu Về Chính Mình (2018-2019)' : 'Understanding Yourself (2018-2019)',
                  desc: lang === 'vi' ? 'Thành lập và vận hành nhóm WIG - Wonderful Introversion Group (>7000 TV) & HSP - Highly Sensitive Person Vietnam (600 TV).' : 'Established and operated the group WIG - Wonderful Introversion Group (7000+ members) & HSP - Highly Sensitive Person Vietnam (600 members).'
                },
                {
                  title: lang === 'vi' ? 'Crowdtalk & Crowdlearning (2019)' : 'Crowdtalk & Crowdlearning (2019)',
                  desc: lang === 'vi' ? 'Chuỗi trò chuyện về "Cái tôi/Tôi là ai" & các buổi học tập dưới hình thức "cộng đồng tự học".' : 'Series of talks about \'The Self/Who I Am\' & sessions in the form of \'self-learning community\'.'
                },
                {
                   title: lang === 'vi' ? 'Writing as a Happy Journey (2020-nay)' : 'Writing as a Happy Journey (2020-present)',
                   desc: lang === 'vi' ? 'Viết/ứng dụng viết trong chăm sóc cảm xúc & phát triển lối sống lành mạnh, hạnh phúc.' : 'Writing applications in emotional caring & development of a healthy, happy, and fulfilling life.'
                }
              ].map((project, i) => (
                <div key={i} className="group space-y-4">
                  <h4 className="text-xl font-display font-black uppercase tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm font-light leading-relaxed opacity-60">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Organizations & Exp */}
        <div className="lg:col-span-5 space-y-16">
          <div className="p-8 border border-border bg-primary/[0.02] space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/40">
              {lang === 'vi' ? 'TỔ CHỨC TIÊU BIỂU' : 'TYPICAL ORGANIZATIONS'}
            </h3>
            
            <div className="space-y-8">
              {[
                { name: 'Folks Foundation (2016-present)', role: lang === 'vi' ? 'Sức khỏe tinh thần, văn hóa & nghệ thuật' : 'Wellbeing, culture & arts' },
                { name: 'Green Seagrass/Cói Xanh (2011-present)', role: lang === 'vi' ? 'Sản xuất & xuất khẩu hàng thủ công mỹ nghệ' : 'Handicraft production & export' },
                { name: 'Live House (2016)', role: lang === 'vi' ? 'Phát triển cộng đồng âm nhạc' : 'Music community development' },
                { name: 'BSG (Business Solution Group) (2011-2012)', role: lang === 'vi' ? 'Dịch vụ tư vấn nhân sự' : 'Consulting services' }
              ].map((org, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-sm font-bold uppercase tracking-tight">{org.name}</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40">{org.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-display font-black uppercase tracking-tight italic">
              {lang === 'vi' ? 'HÀNH TRÌNH KHÁC.' : 'OTHER JOURNEYS.'}
            </h3>
            <ul className="space-y-4 text-xs font-light opacity-60 uppercase tracking-widest leading-relaxed">
              <li>{lang === 'vi' ? '— 35 Ngày Độc Hành (2015): Xuyên Việt bằng xe máy.' : '— 35 Days of Wandering (2015): Solo motorbike trip across Vietnam.'}</li>
              <li>{lang === 'vi' ? '— Eagles Gap Year (2015-2016): Sống qua ba miền.' : '— Living Across Three Regions (2015-2016).'}</li>
              <li>{lang === 'vi' ? '— Sinh Tồn Qua Ba Miền (2018)' : '— Survival Across Three Regions (2018)'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

