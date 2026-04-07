import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-xl font-heading text-white tracking-tighter">
                Stage<span className="text-primary">Daily</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your ultimate guide to live entertainment in Malaysia. From international concerts to casino resort shows, we bring the stage to you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-accent uppercase tracking-widest text-sm mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors text-sm">All Events</Link></li>
              <li><Link to="/venues" className="text-gray-400 hover:text-white transition-colors text-sm">Venues</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-accent uppercase tracking-widest text-sm mb-6">Categories</h3>
            <ul className="space-y-4">
              <li><Link to="/events?category=Concerts" className="text-gray-400 hover:text-white transition-colors text-sm">Concerts</Link></li>
              <li><Link to="/events?category=Casino Resort Shows" className="text-gray-400 hover:text-white transition-colors text-sm">Casino Shows</Link></li>
              <li><Link to="/events?category=Comedy" className="text-gray-400 hover:text-white transition-colors text-sm">Comedy</Link></li>
              <li><Link to="/events?category=Theater & Stage" className="text-gray-400 hover:text-white transition-colors text-sm">Theater</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-accent uppercase tracking-widest text-sm mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Get the weekly "Stage Weekly" guide delivered to your inbox.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-card border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-accent uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 StageDaily. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
