import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ticket, Calendar, MapPin, Star } from 'lucide-react';
import { events, venues } from '../data/mockData';
import EventCard from '../components/EventCard';
import CasinoBanner from '../components/CasinoBanner';

const Home = () => {
  const featuredEvent = events.find(e => e.featured) || events[0];
  const upcomingEvents = events.slice(0, 4);
  const categories = [
    { name: 'Concerts', icon: '🎸' },
    { name: 'Casino Shows', icon: '🎰' },
    { name: 'Comedy', icon: '😂' },
    { name: 'Theater', icon: '🎭' },
    { name: 'Family', icon: '👨‍👩‍👧‍👦' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/stage/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 spotlight-gradient" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-accent uppercase tracking-[0.3em] text-sm mb-4 block">
              Live Entertainment in Malaysia
            </span>
            <h1 className="text-6xl md:text-8xl mb-6 leading-none">
              Stage<span className="text-primary">Daily</span> — <br />
              BIG STAGES.
            </h1>
            <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
              Your comprehensive guide to concerts, live shows, comedy nights, and performances at major entertainment venues across Malaysia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/events" 
                className="bg-primary text-white px-10 py-5 rounded-full font-accent uppercase tracking-widest text-sm font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Explore Events <ArrowRight size={18} />
              </Link>
              <Link 
                to="/venues" 
                className="border border-white/20 hover:border-white/40 text-white px-10 py-5 rounded-full font-accent uppercase tracking-widest text-sm transition-all flex items-center justify-center"
              >
                View Venues
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Quick Buttons */}
      <section className="py-12 bg-card/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/events?category=${cat.name}`}
                className="flex items-center gap-3 bg-card hover:bg-white/5 border border-white/10 px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="font-accent uppercase tracking-widest text-xs">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Show of the Week */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl">Featured <span className="text-primary">Show</span></h2>
            <Link to="/events" className="text-primary hover:text-white transition-colors font-accent uppercase tracking-widest text-sm flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-card rounded-3xl overflow-hidden border border-white/10 flex flex-col lg:flex-row concert-poster-shadow">
            <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
              <img 
                src={featuredEvent.imageUrl} 
                alt={featuredEvent.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-secondary text-background px-4 py-1 rounded-full font-accent text-xs uppercase tracking-widest font-bold">
                Selling Fast
              </div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Star size={18} fill="currentColor" />
                <span className="font-accent uppercase tracking-widest text-sm">Must See Event</span>
              </div>
              <h3 className="text-4xl md:text-5xl mb-6">{featuredEvent.title}</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar size={20} className="text-secondary" />
                  <span className="font-accent uppercase tracking-widest text-sm">{featuredEvent.date} • {featuredEvent.time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={20} className="text-secondary" />
                  <span className="font-accent uppercase tracking-widest text-sm">{featuredEvent.venueName}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Ticket size={20} className="text-secondary" />
                  <span className="font-mono text-lg">{featuredEvent.priceRange}</span>
                </div>
              </div>
              <p className="text-gray-400 mb-10 leading-relaxed">
                {featuredEvent.description}
              </p>
              <Link 
                to={`/events/${featuredEvent.slug}`}
                className="bg-white text-background px-8 py-4 rounded-full font-accent uppercase tracking-widest text-sm font-bold hover:bg-primary hover:text-white transition-all text-center lg:self-start"
              >
                Book Tickets Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl">Upcoming <span className="text-primary">Events</span></h2>
            <Link to="/events" className="text-primary hover:text-white transition-colors font-accent uppercase tracking-widest text-sm flex items-center gap-2">
              All Events <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Venue Spotlight (Arena of Stars) */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="text-secondary font-accent uppercase tracking-[0.3em] text-sm mb-4 block">Venue Spotlight</span>
              <h2 className="text-4xl md:text-6xl mb-6">Arena of Stars <br /> <span className="text-primary">Genting Highlands</span></h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Experience world-class entertainment at 6,000 feet above sea level. The Arena of Stars is Malaysia's premier mountain-top venue, hosting international legends and spectacular productions.
              </p>
              <Link 
                to="/venues/arena-of-stars"
                className="inline-flex items-center gap-2 text-white border-b-2 border-primary pb-1 font-accent uppercase tracking-widest text-sm hover:text-primary transition-colors"
              >
                View Venue Schedule <ArrowRight size={16} />
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/genting1/400/400" alt="Genting" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/genting2/400/400" alt="Genting" className="rounded-2xl w-full aspect-square object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Casino Banner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CasinoBanner type="horizontal" />
        </div>
      </section>
    </div>
  );
};

export default Home;
