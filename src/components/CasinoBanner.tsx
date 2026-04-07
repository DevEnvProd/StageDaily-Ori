import { motion } from 'motion/react';
import { ExternalLink, Sparkles } from 'lucide-react';

interface CasinoBannerProps {
  type?: 'horizontal' | 'vertical' | 'box';
  className?: string;
}

const CasinoBanner = ({ type = 'horizontal', className = "" }: CasinoBannerProps) => {
  if (type === 'horizontal') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border border-secondary/20 rounded-2xl p-8 relative overflow-hidden ${className}`}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-3xl -mr-32 -mt-32 rounded-full" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-secondary mb-2">
              <Sparkles size={16} />
              <span className="text-xs font-accent uppercase tracking-[0.2em]">Platinum Casino Exclusive</span>
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">Complete your night at <span className="text-secondary">Platinum Casino</span></h2>
            <p className="text-gray-400 max-w-xl">
              Located just steps away from the Arena of Stars. Enjoy world-class gaming, fine dining, and exclusive post-show lounges.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#" 
              className="bg-secondary text-background px-8 py-4 rounded-full font-accent uppercase tracking-widest text-sm font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Visit Casino <ExternalLink size={16} />
            </a>
            <a 
              href="#" 
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-accent uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2"
            >
              Book Stay
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`bg-card border border-secondary/20 rounded-xl p-6 relative overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 text-secondary mb-4">
        <Sparkles size={14} />
        <span className="text-[10px] font-accent uppercase tracking-widest">Sponsored</span>
      </div>
      <h3 className="text-xl mb-3">Platinum Casino</h3>
      <p className="text-gray-400 text-sm mb-6">
        Make it a full night out. Visit Platinum Casino before or after the show for an unforgettable experience.
      </p>
      <a 
        href="#" 
        className="block w-full text-center bg-secondary text-background py-3 rounded-lg font-accent uppercase tracking-widest text-xs font-bold hover:bg-secondary/90 transition-colors"
      >
        Learn More
      </a>
    </div>
  );
};

export default CasinoBanner;
