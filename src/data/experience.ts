export interface TimelineItem {
  year: string;
  company: string;
  companyVi?: string;
  roleEn: string;
  roleVi: string;
}

export const TIMELINE: TimelineItem[] = [
  { year: '2011', company: 'Startup', companyVi: 'Khởi nghiệp', roleEn: 'Awarded', roleVi: 'Giải thưởng' },
  { year: '2012', company: 'Blaki', roleEn: 'Creative', roleVi: 'Sáng tạo' },
  { year: '2013', company: 'GHN', roleEn: 'Founding Team', roleVi: 'Đội ngũ sáng lập' },
  { year: '2015', company: 'TCH', roleEn: 'Operations', roleVi: 'Vận hành' },
  { year: '2017', company: 'Tomato', roleEn: 'Strategy', roleVi: 'Chiến lược' },
  { year: '2018', company: 'Freelance', roleEn: 'R&D', roleVi: 'R&D' },
  { year: '2019', company: 'Compassio', roleEn: 'New Venture', roleVi: 'Hành trình mới' },
];
