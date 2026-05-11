import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Art of Minimalist Operations',
    excerpt: 'How to simplify business processes without losing efficiency. Insights from a decade of management.',
    date: 'Oct 12, 2023',
    author: 'Pham Dai Bang',
    category: 'Management',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Psychology in Communication',
    excerpt: 'Understanding the underlying human drivers that make or break a marketing campaign.',
    date: 'Sept 28, 2023',
    author: 'Pham Dai Bang',
    category: 'Psychology',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8a9b749f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Building Communities that Last',
    excerpt: 'The transition from top-down management to collaborative community building in the modern era.',
    date: 'Aug 15, 2023',
    author: 'Pham Dai Bang',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Blog() {
  return (
    <div className="space-y-24 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12 gap-8">
        <div className="space-y-4">
          <h2 className="text-[60px] md:text-[100px] leading-none font-serif font-black tracking-tighter uppercase opacity-90">
            BLOG
          </h2>
          <p className="text-white/40 text-sm uppercase tracking-[0.2em]">Thoughts, insights, and stories.</p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-serif italic mb-1 text-white/40">12 //</div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Articles & Essays</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {BLOG_POSTS.map((post, index) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[16/10] overflow-hidden bg-white/5 border border-white/10 mb-6 group-hover:border-white/30 transition-all duration-500">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/40">
                <span className="text-white/60">{post.category}</span>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
              </div>
              
              <h3 className="text-2xl font-serif italic group-hover:text-white transition-colors">
                {post.title}
              </h3>
              
              <p className="text-sm text-white/40 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="pt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
                Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pt-12">
        <button className="px-12 py-4 border border-white/10 text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500">
          Load More Thoughts
        </button>
      </div>
    </div>
  );
}
