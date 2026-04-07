import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl mb-4">Stage <span className="text-primary">Weekly</span></h1>
          <p className="text-gray-400 font-accent uppercase tracking-widest text-sm">Insights, guides, and entertainment news</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden rounded-2xl mb-6 border border-white/10">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Calendar size={14} />
                <span className="text-[10px] font-accent uppercase tracking-widest">{post.date}</span>
              </div>
              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-2xl mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
              </Link>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-white font-accent uppercase tracking-widest text-xs hover:text-primary transition-colors">
                Read More <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
