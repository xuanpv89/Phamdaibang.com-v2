import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { translations, Language } from '../lib/translations';

interface BlogProps {
  lang: Language;
}

const BLOG_POSTS = [
  {
    id: 1,
    titleVi: 'Nghệ thuật vận hành tối giản',
    titleEn: 'The Art of Minimalist Operations',
    excerptVi: 'Cách đơn giản hóa các quy trình kinh doanh mà không làm mất hiệu quả. Những hiểu biết sau một thập kỷ quản lý.',
    excerptEn: 'How to simplify business processes without losing efficiency. Insights from a decade of management.',
    date: 'Oct 12, 2023',
    categoryVi: 'Quản trị',
    categoryEn: 'Management',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    titleVi: 'Tâm lý trong truyền thông',
    titleEn: 'Psychology in Communication',
    excerptVi: 'Hiểu về các yếu tố tâm lý con người ẩn sau sự thành bại của một chiến dịch marketing.',
    excerptEn: 'Understanding the underlying human drivers that make or break a marketing campaign.',
    date: 'Sept 28, 2023',
    categoryVi: 'Tâm lý học',
    categoryEn: 'Psychology',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8a9b749f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    titleVi: 'Xây dựng cộng đồng bền vững',
    titleEn: 'Building Communities that Last',
    excerptVi: 'Sự chuyển đổi từ quản lý phân cấp sang xây dựng cộng đồng hợp tác trong thời đại mới.',
    excerptEn: 'The transition from top-down management to collaborative community building in the modern era.',
    date: 'Aug 15, 2023',
    categoryVi: 'Cộng đồng',
    categoryEn: 'Community',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Blog({ lang }: BlogProps) {
  const t = translations[lang];

  return (
    <div className="space-y-24 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end geometric-border-b pb-12 gap-8">
        <div className="space-y-4">
          <h2 className="text-[60px] md:text-[100px] leading-none font-display font-black tracking-tighter uppercase">
            {t.sections.blog.label}
          </h2>
          <p className="text-text/40 text-sm italic font-light tracking-tight">
            {lang === 'vi' ? 'Những suy nghĩ, góc nhìn và câu chuyện.' : 'Thoughts, insights, and stories.'}
          </p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-serif italic mb-1 opacity-20">12 //</div>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-30">Articles & Essays</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {BLOG_POSTS.map((post, index) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer space-y-6"
          >
            <div className="aspect-[16/10] overflow-hidden bg-primary/5 border border-border relative">
              <img 
                src={post.image} 
                alt={lang === 'vi' ? post.titleVi : post.titleEn}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-accent font-black">
                <span>{lang === 'vi' ? post.categoryVi : post.categoryEn}</span>
                <div className="w-8 h-px bg-border"></div>
                <div className="flex items-center gap-1 font-mono font-normal opacity-40">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-black uppercase tracking-tight leading-tight group-hover:text-accent transition-colors duration-500">
                {lang === 'vi' ? post.titleVi : post.titleEn}
              </h3>
              
              <p className="text-sm text-text/40 leading-relaxed line-clamp-3 font-light">
                {lang === 'vi' ? post.excerptVi : post.excerptEn}
              </p>
              
              <div className="pt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                {lang === 'vi' ? 'Đọc bài viết' : 'Read Article'} 
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pt-12">
        <button className="px-12 py-4 border border-border text-[10px] uppercase tracking-[0.4em] font-black hover:bg-primary hover:text-bg transition-all duration-500">
          {lang === 'vi' ? 'Xem thêm' : 'Load More'}
        </button>
      </div>
    </div>
  );
}
