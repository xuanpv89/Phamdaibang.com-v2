export interface BlogPost {
  id: number;
  titleVi: string;
  titleEn: string;
  excerptVi: string;
  excerptEn: string;
  date: string;
  categoryVi: string;
  categoryEn: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    titleVi: 'Nghệ thuật vận hành tối giản',
    titleEn: 'The Art of Minimalist Operations',
    excerptVi:
      'Cách đơn giản hóa các quy trình kinh doanh mà không làm mất hiệu quả. Những hiểu biết sau một thập kỷ quản lý.',
    excerptEn:
      'How to simplify business processes without losing efficiency. Insights from a decade of management.',
    date: 'Oct 12, 2023',
    categoryVi: 'Quản trị',
    categoryEn: 'Management',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    titleVi: 'Tâm lý trong truyền thông',
    titleEn: 'Psychology in Communication',
    excerptVi:
      'Hiểu về các yếu tố tâm lý con người ẩn sau sự thành bại của một chiến dịch marketing.',
    excerptEn:
      'Understanding the underlying human drivers that make or break a marketing campaign.',
    date: 'Sept 28, 2023',
    categoryVi: 'Tâm lý học',
    categoryEn: 'Psychology',
    image:
      'https://images.unsplash.com/photo-1518173946687-a4c8a9b749f5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    titleVi: 'Xây dựng cộng đồng bền vững',
    titleEn: 'Building Communities that Last',
    excerptVi:
      'Sự chuyển đổi từ quản lý phân cấp sang xây dựng cộng đồng hợp tác trong thời đại mới.',
    excerptEn:
      'The transition from top-down management to collaborative community building in the modern era.',
    date: 'Aug 15, 2023',
    categoryVi: 'Cộng đồng',
    categoryEn: 'Community',
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800',
  },
];
