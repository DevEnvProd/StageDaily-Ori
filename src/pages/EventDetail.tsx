import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Ticket, Clock, Info, ArrowLeft, Share2, Heart, ExternalLink, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { events, venues } from '../data/mockData';
import CasinoBanner from '../components/CasinoBanner';

const EventDetail = () => {
  const { slug } = useParams();
  const event = events.find(e => e.slug === slug);
  const venue = venues.find(v => v.id === event?.venueId);

  if (!event) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-4xl mb-4">Event Not Found</h1>
        <Link to="/events" className="text-primary hover:underline">Back to Events</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link to="/events" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors font-accent uppercase tracking-widest text-xs">
                <ArrowLeft size={14} /> Back to Events
              </Link>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-primary text-white text-[10px] font-accent uppercase tracking-widest px-3 py-1 rounded-full">
                  {event.category}
                </span>
                {venue?.isCasinoResort && (
                  <span className="bg-secondary text-background text-[10px] font-accent uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                    Casino Resort Exclusive
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-7xl mb-4 leading-tight">{event.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  <span className="font-accent uppercase tracking-widest text-sm">{event.venueName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  <span className="font-accent uppercase tracking-widest text-sm">{event.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-card border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
                <h2 className="text-3xl mb-8">About the <span className="text-primary">Show</span></h2>
                <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed mb-12">
                  <p>{event.description}</p>
                  <p className="mt-4">
                    Don't miss this spectacular performance by {event.artist}. Known for their captivating stage presence and incredible talent, this is set to be one of the highlight events of the year at {event.venueName}.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/5">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-accent uppercase tracking-widest text-xs text-white mb-1">Door Opens</h4>
                      <p className="text-gray-400 text-sm">60 minutes before showtime</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <Info className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-accent uppercase tracking-widest text-xs text-white mb-1">Age Limit</h4>
                      <p className="text-gray-400 text-sm">All ages welcome (unless specified)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl mb-6">Seating Chart</h3>
                  <div className="aspect-video bg-background border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                    <img 
                      src="https://picsum.photos/seed/seating/800/450?blur=5" 
                      alt="Seating Chart Placeholder" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30"
                      referrerPolicy="no-referrer"
                    />
                    <div className="relative z-10 text-center">
                      <MapPin size={32} className="mx-auto text-primary mb-4" />
                      <p className="text-gray-400 text-sm font-accent uppercase tracking-widest">Seating chart available during booking</p>
                    </div>
                  </div>
                </div>
              </div>

              {venue?.isCasinoResort && (
                <div className="bg-secondary/5 border border-secondary/20 rounded-3xl p-8 md:p-12 mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <Star className="text-background" size={20} fill="currentColor" />
                    </div>
                    <h3 className="text-2xl">Make it a full night out</h3>
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Since you're heading to {event.venueName} at Resorts World Genting, why not complete the experience? Visit **Platinum Casino** before or after the show for world-class gaming, signature cocktails, and live music.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                      <h4 className="text-secondary font-accent uppercase tracking-widest text-xs mb-2">Pre-Show Dinner</h4>
                      <p className="text-gray-400 text-xs">Enjoy a premium buffet or fine dining at Platinum's signature restaurants.</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                      <h4 className="text-secondary font-accent uppercase tracking-widest text-xs mb-2">Post-Show Drinks</h4>
                      <p className="text-gray-400 text-xs">The night is young. Head to the Platinum Lounge for live jazz and cocktails.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar / Booking */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                <div className="bg-card border border-white/10 rounded-3xl p-8 concert-poster-shadow">
                  <div className="mb-8">
                    <span className="text-gray-400 font-accent uppercase tracking-widest text-[10px] mb-2 block">Tickets starting from</span>
                    <div className="font-mono text-3xl text-secondary">{event.priceRange.split('-')[0]}</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-gray-400 text-sm">Date</span>
                      <span className="text-white text-sm font-accent uppercase tracking-widest">{event.date}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-gray-400 text-sm">Time</span>
                      <span className="text-white text-sm font-accent uppercase tracking-widest">{event.time}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-gray-400 text-sm">Venue</span>
                      <span className="text-white text-sm font-accent uppercase tracking-widest">{event.venueName}</span>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white py-5 rounded-2xl font-accent uppercase tracking-widest text-sm font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 mb-4">
                    <Ticket size={20} /> Get Tickets Now
                  </button>
                  
                  <div className="flex gap-4">
                    <button className="flex-1 border border-white/10 hover:border-white/30 py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-accent uppercase tracking-widest transition-colors">
                      <Share2 size={14} /> Share
                    </button>
                    <button className="flex-1 border border-white/10 hover:border-white/30 py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-accent uppercase tracking-widest transition-colors">
                      <Heart size={14} /> Save
                    </button>
                  </div>
                </div>

                <CasinoBanner type="box" />

                <div className="bg-card border border-white/10 rounded-3xl p-8">
                  <h3 className="text-xl mb-6">Venue Location</h3>
                  <div className="aspect-square bg-background border border-white/10 rounded-2xl mb-4 overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/map/400/400" 
                      alt="Map Placeholder" 
                      className="w-full h-full object-cover opacity-50"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mb-4">{venue?.location}</p>
                  <Link to={`/venues/${venue?.slug}`} className="text-primary hover:text-white transition-colors text-xs font-accent uppercase tracking-widest flex items-center gap-2">
                    View Venue Details <ExternalLink size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
