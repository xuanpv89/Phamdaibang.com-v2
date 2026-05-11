import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { translations, Language } from '../lib/translations';
import { BLOG_POSTS } from '../data/blog';

interface BlogProps {
  lang: Language;
}

export default function Blog({ lang }: BlogProps) {
  const t = translations[lang];

  return (
    <div className="space-y-24 py-12">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-end geometric-border-b pb-12 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <h2 className="text-[60px] md:text-[100px] leading-none font-display font-black tracking-tighter uppercase">
            {t.sections.blog.label}
          </h2>
          <p className="text-text/40 text-sm italic font-light tracking-tight">
            {t.sections.blog.desc}
          </p>
        </div>
        <div className="text-right" aria-hidden="true">
          <div className="text-4xl font-serif italic mb-1 opacity-20">09 //</div>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-30">Articles &amp; Essays</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {BLOG_POSTS.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer space-y-6"
            aria-label={lang === 'vi' ? post.titleVi : post.titleEn}
          >
            <div className="aspect-[16/10] overflow-hidden bg-primary/5 border border-border relative">
              <img
                src={post.image}
                alt={lang === 'vi' ? post.titleVi : post.titleEn}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-accent font-black">
                <span>{lang === 'vi' ? post.categoryVi : post.categoryEn}</span>
                <div className="w-8 h-px bg-border" aria-hidden="true"></div>
                <div className="flex items-center gap-1 font-mono font-normal opacity-40">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  <time dateTime={post.date}>{post.date}</time>
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
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="flex justify-center pt-12">
        <button
          className="px-12 py-4 border border-border text-[10px] uppercase tracking-[0.4em] font-black hover:bg-primary hover:text-bg transition-all duration-500"
          aria-label={lang === 'vi' ? 'Xem thêm bài viết' : 'Load more articles'}
        >
          {lang === 'vi' ? 'Xem thêm' : 'Load More'}
        </button>
      </div>
    </div>
  );
}

