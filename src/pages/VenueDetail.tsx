import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Info, Car, Utensils, ArrowLeft, Star, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { venues, events } from '../data/mockData';
import EventCard from '../components/EventCard';
import CasinoBanner from '../components/CasinoBanner';

const VenueDetail = () => {
  const { slug } = useParams();
  const venue = venues.find(v => v.slug === slug);
  const venueEvents = events.filter(e => e.venueId === venue?.id);

  if (!venue) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-4xl mb-4">Venue Not Found</h1>
        <Link to="/venues" className="text-primary hover:underline">Back to Venues</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img 
            src={venue.imageUrl} 
            alt={venue.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-full pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link to="/venues" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors font-accent uppercase tracking-widest text-xs">
                <ArrowLeft size={14} /> Back to Venues
              </Link>
              <h1 className="text-5xl md:text-7xl mb-4">{venue.name}</h1>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} className="text-primary" />
                <span className="font-accent uppercase tracking-widest text-sm">{venue.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="bg-card border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
                <h2 className="text-3xl mb-8">Venue <span className="text-primary">Overview</span></h2>
                <p className="text-gray-400 leading-relaxed mb-12">{venue.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <Users className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-accent uppercase tracking-widest text-xs text-white mb-1">Capacity</h4>
                      <p className="text-gray-400 text-sm">{venue.capacity} Seats</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <Car className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-accent uppercase tracking-widest text-xs text-white mb-1">Parking</h4>
                      <p className="text-gray-400 text-sm">{venue.parking}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <Utensils className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-accent uppercase tracking-widest text-xs text-white mb-1">Dining</h4>
                      <p className="text-gray-400 text-sm">{venue.dining}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <Info className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-accent uppercase tracking-widest text-xs text-white mb-1">Facilities</h4>
                      <p className="text-gray-400 text-sm">{venue.facilities.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl mb-8">Upcoming <span className="text-primary">Shows</span></h2>
              {venueEvents.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {venueEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="p-12 bg-card/30 rounded-3xl border border-dashed border-white/10 text-center">
                  <Calendar size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400">No upcoming shows scheduled for this venue yet.</p>
                </div>
              )}
            </div>

            <div className="lg:w-1/3 space-y-8">
              {venue.isCasinoResort && (
                <div className="bg-gradient-to-br from-secondary/20 to-transparent border border-secondary/30 rounded-3xl p-8">
                  <Star className="text-secondary mb-4" size={32} fill="currentColor" />
                  <h3 className="text-2xl mb-4">Casino Resort</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    This venue is part of a premium casino resort. Enhance your visit with a trip to **Platinum Casino**, located just a short walk from the theater.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" /> VIP Gaming Lounges
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" /> 24/7 Fine Dining
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" /> Exclusive Member Rewards
                    </li>
                  </ul>
                  <a href="#" className="block w-full text-center bg-secondary text-background py-4 rounded-xl font-accent uppercase tracking-widest text-xs font-bold">
                    Explore Platinum Casino
                  </a>
                </div>
              )}
              <CasinoBanner type="box" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VenueDetail;
