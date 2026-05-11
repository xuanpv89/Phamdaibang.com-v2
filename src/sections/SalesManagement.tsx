import { translations, Language } from '../lib/translations';

interface SalesManagementProps {
  lang: Language;
}

export default function SalesManagement({ lang }: SalesManagementProps) {
  const t = translations[lang];

  return (
    <div className="space-y-24 py-12">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start geometric-border-b pb-12 gap-12">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 border border-accent/20 bg-accent/5 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
            {lang === 'vi' ? 'Ngành Kinh doanh & Công nghệ' : 'Business & Technology Industry'}
          </div>
          <h2 className="text-[50px] md:text-[80px] leading-[0.9] font-display font-black tracking-tighter uppercase max-w-2xl">
            {t.sections.salesManagement.label}
          </h2>
        </div>
        <div className="md:text-right space-y-2">
          <div className="text-4xl font-serif italic opacity-20">06 //</div>
          <p className="text-xl font-display font-bold tracking-tight">GIAO HANG NHANH (GHN)</p>
          <p className="text-xs uppercase tracking-[0.2em] opacity-40">2013 - 2015</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Roles & Desc */}
        <div className="lg:col-span-7 space-y-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-black uppercase tracking-tight flex items-center gap-4">
                <span className="w-8 h-px bg-accent"></span>
                {lang === 'vi' ? 'Vai trò: Trưởng phòng Kinh doanh' : 'Role: Sales Manager'}
              </h3>
              <ul className="space-y-4 text-sm font-light leading-relaxed opacity-60">
                {[
                  lang === 'vi' ? 'Chịu trách nhiệm thị trường khu vực miền Bắc, xây dựng mạng lưới khách hàng (các công ty TMĐT lớn).' : 'Responsible for Northern region market, building a network of customers (big e-commerce company).',
                  lang === 'vi' ? 'Làm việc chuyên sâu với các bộ phận khác, đội ngũ quản lý và Ban Giám đốc để thực hiện chiến lược kinh doanh.' : 'Cross-functional work with other departments, management team & BOD to implement business strategy.',
                  lang === 'vi' ? 'Phát triển thương hiệu để đưa GHN trở thành top 5 trong ngành.' : 'Develop brand to become top 5 in the industry.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-accent/40 font-mono">/0{i+1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-display font-black uppercase tracking-tight flex items-center gap-4">
                <span className="w-8 h-px bg-accent"></span>
                {lang === 'vi' ? 'Vai trò: Trưởng nhóm Kinh doanh' : 'Role: Sales Lead'}
              </h3>
              <ul className="space-y-4 text-sm font-light leading-relaxed opacity-60">
                {[
                  lang === 'vi' ? 'Tiếp cận thị trường mới, lập kế hoạch và thực hiện các chiến dịch bán hàng.' : 'Reach new markets, plan & execute sales campaigns.',
                  lang === 'vi' ? 'Quản lý, đào tạo và phân công công việc cho đội ngũ kinh doanh.' : 'Managing, training, assign work for sales team.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-accent/40 font-mono">/0{i+1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Photos Grid */}
          <div className="grid grid-cols-3 gap-4">
             {[1,2,3].map(i => (
               <div key={i} className="aspect-square bg-primary/5 border border-border group overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                 <div className="absolute inset-0 flex items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity bg-bg/90">
                    <p className="text-[8px] uppercase tracking-widest font-bold">
                       {i === 1 ? 'With Core Team GHN' : i === 2 ? 'E-commerce Conference' : 'With Partners'}
                    </p>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Right: Key Results */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-12">
          <div className="p-8 border border-border bg-primary/[0.02] space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/40">
                {lang === 'vi' ? 'KẾT QUẢ THEN CHỐT' : 'KEY RESULTS'}
              </span>
              <div className="h-px bg-border w-full"></div>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <div className="flex items-end justify-between">
                <div className="text-6xl font-display font-black tracking-tighter">25</div>
                <p className="text-[10px] uppercase tracking-widest text-right opacity-40 max-w-[120px]">
                  {lang === 'vi' ? 'Khách hàng TMĐT lớn' : 'Big E-commerce Client'}
                </p>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-6xl font-display font-black tracking-tighter">&gt;500</div>
                <p className="text-[10px] uppercase tracking-widest text-right opacity-40 max-w-[120px]">
                  {lang === 'vi' ? 'Khách hàng trực tuyến (Shop, cá nhân)' : 'Online client (Shop, individual)'}
                </p>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-6xl font-display font-black tracking-tighter">12</div>
                <p className="text-[10px] uppercase tracking-widest text-right opacity-40 max-w-[120px]">
                  {lang === 'vi' ? 'Nhân sự trực tiếp' : 'Direct Staff'}
                </p>
              </div>
              <div className="pt-6 border-t border-border">
                <div className="text-3xl font-display font-black tracking-tight text-accent italic">TOP 5 INDUSTRY</div>
                <p className="text-[9px] uppercase tracking-widest opacity-40 mt-2">
                   {lang === 'vi' ? 'Góp phần đưa GHN vào top 5 trong ngành' : 'Contributing to bringing GHN into the top 5 in the industry'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
