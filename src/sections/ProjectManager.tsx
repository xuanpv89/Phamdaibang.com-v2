import { translations, Language } from '../lib/translations';

interface ProjectManagerProps {
  lang: Language;
}

export default function ProjectManager({ lang }: ProjectManagerProps) {
  const t = translations[lang];

  return (
    <div className="space-y-24 py-12">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start geometric-border-b pb-12 gap-12">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 border border-accent/20 bg-accent/5 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
            {lang === 'vi' ? 'Ngành Giáo dục & Phát triển Con người' : 'Education & Human Development Industry'}
          </div>
          <h2 className="text-[50px] md:text-[80px] leading-[0.9] font-display font-black tracking-tighter uppercase max-w-2xl">
            {t.sections.projectManager.label}
          </h2>
        </div>
        <div className="md:text-right space-y-2">
          <div className="text-4xl font-serif italic opacity-20">03 //</div>
          <p className="text-xl font-display font-bold tracking-tight">COMPASSIO (FOLKS., LTD)</p>
          <p className="text-xs uppercase tracking-[0.2em] opacity-40">{lang === 'vi' ? '2019 - HIỆN TẠI' : '2019 - PRESENT'}</p>
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
                {lang === 'vi' ? 'Vai trò: Quản lý Dự án' : 'Role: Project Manager'}
              </h3>
              <ul className="space-y-4 text-sm font-light leading-relaxed opacity-60">
                {[
                  lang === 'vi' ? 'Quản lý tổng thể, vận hành và điều phối mọi hoạt động dự án.' : 'Project overall, operated & coordination all activities.',
                  lang === 'vi' ? 'Lập kế hoạch chiến lược phát triển, phối hợp nguồn lực để phát triển dự án.' : 'Planning development strategy, coordinating resources to develop the project.',
                  lang === 'vi' ? 'Quản trị: tìm kiếm nguồn lực, phát triển con người, mạng lưới đối tác, dòng tiền, R&D...' : 'Administration: resource seeking, human development, partnership networking, cash flow, R&D...'
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
                {lang === 'vi' ? 'Vai trò: Điều phối / Đào tạo' : 'Role: Facilitator / Trainer'}
              </h3>
              <ul className="space-y-4 text-sm font-light leading-relaxed opacity-60">
                {[
                  lang === 'vi' ? 'Điều phối các chương trình, sự kiện, lớp học cho khách hàng cá nhân và tổ chức.' : 'Facilitate, coordinate programs, events, classes for individual customers & organizations client.',
                  lang === 'vi' ? 'Phát triển nội dung chương trình, thiết kế nội dung phát triển cộng đồng người dùng.' : 'Develop program content, design content to develop community of users of products and services.'
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
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-video bg-primary/5 border border-border group overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-bg/80 z-10">
                   <span className="text-[10px] uppercase tracking-widest font-bold">{lang === 'vi' ? 'Ảnh dự án' : 'Project Detail'} {i}</span>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent group-hover:scale-110 transition-transform duration-700"></div>
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
              <div className="space-y-2">
                <div className="text-6xl font-display font-black tracking-tighter">&gt;10.000</div>
                <p className="text-[10px] uppercase tracking-widest leading-tight opacity-40">
                  {lang === 'vi' ? 'Thành viên trong cộng đồng này' : 'Member in this community'}
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-display font-black tracking-tighter">&gt;1.000</div>
                <p className="text-[10px] uppercase tracking-widest leading-tight opacity-40">
                  {lang === 'vi' ? 'Khách hàng / Thành viên tích cực (đã phát sinh giao dịch)' : 'Client/active member (used at least 01 transaction)'}
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-display font-black tracking-tighter">~50</div>
                <p className="text-[10px] uppercase tracking-widest leading-tight opacity-40">
                  {lang === 'vi' ? 'Nhân viên & Cộng tác viên' : 'Staff & Collaborator'}
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-display font-black tracking-tighter">&gt;50</div>
                <p className="text-[10px] uppercase tracking-widest leading-tight opacity-40">
                  {lang === 'vi' ? 'Sự kiện (khóa học, lớp học, talkshow)' : 'Event (course, class, talkshow)'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
