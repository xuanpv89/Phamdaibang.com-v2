import { translations, Language } from '../lib/translations';

interface CEOAssistantProps {
  lang: Language;
}

export default function CEOAssistant({ lang }: CEOAssistantProps) {
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
            {t.sections.ceoAssistant.label}
          </h2>
        </div>
        <div className="md:text-right space-y-2">
          <div className="text-4xl font-serif italic opacity-20">04 //</div>
          <p className="text-xl font-display font-bold tracking-tight">TOMATO EDUCATION</p>
          <p className="text-xs uppercase tracking-[0.2em] opacity-40">2017 - 2018</p>
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
                {lang === 'vi' ? 'Vai trò: Trợ lý CEO' : 'Role: Assistant to CEO'}
              </h3>
              <ul className="space-y-4 text-sm font-light leading-relaxed opacity-60">
                {[
                  lang === 'vi' ? 'Hỗ trợ CEO trong việc triển khai các dự án quan trọng của công ty (Cụ thể: Dự án Chuẩn hóa Quy trình).' : 'Support the CEO in implementing important projects (Specifically: Process Standardization project).',
                  lang === 'vi' ? 'Làm việc với các chi nhánh, bộ phận, đội ngũ quản lý để đạt được mục tiêu.' : 'Work with branches, departments, management team to achieve goals.',
                  lang === 'vi' ? 'Hỗ trợ các công việc cá nhân cho CEO như sắp xếp lịch trình, hội họp, làm việc với đối tác...' : 'Support tasks for the CEO such as scheduling, meeting, working with partners...'
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
                {lang === 'vi' ? 'Vai trò: Điều phối Tuyển sinh' : 'Role: Enrollment Coordinator'}
              </h3>
              <ul className="space-y-4 text-sm font-light leading-relaxed opacity-60">
                {[
                  lang === 'vi' ? 'Chịu trách nhiệm tổng thể về tuyển sinh cho một chi nhánh (trường), lập kế hoạch tuyển sinh và doanh số.' : 'Overall responsibility for enrollment for a branch, enrollment planning and sales.',
                  lang === 'vi' ? 'Quản lý & điều phối con người: giám sát và hướng dẫn nhân viên.' : 'Human management & coordination: monitoring and mentoring employees.',
                  lang === 'vi' ? 'Tư vấn phụ huynh, phối hợp với các bộ phận (Học thuật, giáo viên...) để đạt mục tiêu kinh doanh.' : 'Advise parents, work with academic teams/teachers to achieve business goals.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-accent/40 font-mono">/0{i+1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="p-8 border border-border bg-primary/[0.01] space-y-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-accent/40">{lang === 'vi' ? 'THÀNH TỰU CHÍNH' : 'KEY ACHIEVEMENTS'}</span>
            <ul className="space-y-3 text-sm font-light opacity-60 list-disc list-inside">
              <li>{lang === 'vi' ? 'Triển khai thành công dự án Chuẩn hóa Quy trình Công ty với sự tham gia của toàn bộ nhân viên.' : 'Successfully implemented the project of Standardizing the Company\'s Process.'}</li>
              <li>{lang === 'vi' ? 'Hoàn thành xuất sắc các nhiệm vụ được giao bởi Ban Giám đốc và CEO.' : 'Complete the tasks set by the company and the CEO.'}</li>
            </ul>
          </div>
        </div>

        {/* Right: Visual Accent */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-12">
          <div className="aspect-[3/4] bg-primary/5 border border-border relative overflow-hidden flex flex-col justify-end p-8 grayscale contrast-125">
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10"></div>
            <div className="relative z-20 space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-black text-accent">{lang === 'vi' ? 'ẢNH HOẠT ĐỘNG' : 'ACTIVITY PHOTO'}</span>
              <p className="text-xs leading-relaxed opacity-60">
                {lang === 'vi' ? 'Cùng các em nhỏ tại sự kiện trung thu @ một chi nhánh trường' : 'With kids at mid-autumn event @ a school branch'}
              </p>
            </div>
            {/* Abstract geometric shape */}
            <div className="absolute top-12 right-12 w-32 h-32 border border-accent/20 rotate-45 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

