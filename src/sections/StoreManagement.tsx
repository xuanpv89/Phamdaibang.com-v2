import { translations, Language } from '../lib/translations';

interface StoreManagementProps {
  lang: Language;
}

export default function StoreManagement({ lang }: StoreManagementProps) {
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
            {t.sections.storeManagement.label}
          </h2>
        </div>
        <div className="md:text-right space-y-2">
          <div className="text-4xl font-serif italic opacity-20">05 //</div>
          <p className="text-xl font-display font-bold tracking-tight">THE COFFEE HOUSE</p>
          <p className="text-xs uppercase tracking-[0.2em] opacity-40">2015 - 2016</p>
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
                {lang === 'vi' ? 'Vai trò: Quản lý Cửa hàng' : 'Role: Store Manager'}
              </h3>
              <ul className="space-y-4 text-sm font-light leading-relaxed opacity-60">
                {[
                  lang === 'vi' ? 'Quản lý toàn bộ nhân viên (14 nhân viên): Phân công công việc - tuyển dụng nhân viên mới.' : 'Managing all crew (14 employees): Assigning jobs - recruiting new employees.',
                  lang === 'vi' ? 'Chịu trách nhiệm về chỉ số/điểm số của cửa hàng (doanh thu - giá vốn - tỷ lệ hủy - sự hài lòng của khách hàng) với Ban Giám đốc.' : 'Responsible for store metrics/score (revenue - cost of goods sold - cancellation rate - customer satisfaction) to BOD.',
                  lang === 'vi' ? 'Tài chính: Kiểm soát tất cả các hoạt động tài chính (lợi nhuận & lỗ của cửa hàng).' : 'Finance: Control all financial activities (profit & loss of the store).'
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
                {lang === 'vi' ? 'Vai trò: Giám sát Cửa hàng' : 'Role: Store Supervisor'}
              </h3>
              <ul className="space-y-4 text-sm font-light leading-relaxed opacity-60">
                {[
                  lang === 'vi' ? 'Chịu trách nhiệm toàn bộ cửa hàng trong ca trực: chất lượng sản phẩm, thái độ phục vụ, vệ sinh cửa hàng, chăm sóc khách hàng, kiểm soát doanh thu.' : 'Responsible for the entire store during the shift: product quality, service attitude, store hygiene, customer care, controlling revenue.',
                  lang === 'vi' ? 'Kiểm soát kho - kiểm soát giá vốn hàng bán, kho bãi...' : 'Inventory control - control cost of goods sold, warehouse...'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-accent/40 font-mono">/0{i+1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="p-8 border border-border bg-primary/[0.01]">
            <p className="text-sm font-light leading-relaxed opacity-60 italic">
              {lang === 'vi' 
                ? 'Thiết lập & vận hành chi nhánh mới tại trung tâm Quận 1 (TP.HCM), đưa chi nhánh trở thành một trong những điểm kinh doanh trọng yếu của hệ thống.' 
                : 'Set up & operate a new branch to become a big branch in the center of District 1 (HCMC).'}
            </p>
          </div>
        </div>

        {/* Right: Key Results */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-12">
          <div className="aspect-square bg-primary/5 border border-border relative overflow-hidden flex flex-col justify-end p-8">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary/10 to-transparent"></div>
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-black text-accent">{lang === 'vi' ? 'ẢNH THỰC TẾ' : 'FEATURE PHOTO'}</span>
              <p className="text-[11px] leading-relaxed opacity-60 max-w-[200px]">
                {lang === 'vi' ? 'Với đội ngũ tại TCH Trần Cao Vân (Quận 1 - TP.HCM)' : 'With staff at TCH Tran Cao Van (Centre District 1 - HCMC)'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
             <div className="flex items-center gap-6 p-6 border border-border group hover:bg-accent/5 transition-colors">
               <div className="text-4xl font-display font-black text-accent/20 transition-colors group-hover:text-accent">6M</div>
               <div className="text-xs uppercase tracking-widest leading-tight opacity-40">
                 {lang === 'vi' ? 'Thăng tiến từ Giám sát lên Quản lý trong 6 tháng' : 'From Supervisor to Store Manager in 6 months'}
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
