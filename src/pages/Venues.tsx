import { Link } from 'react-router-dom';
import { MapPin, Users, Info, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { venues } from '../data/mockData';

const Venues = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl mb-4">The <span className="text-primary">Stages</span></h1>
          <p className="text-gray-400 font-accent uppercase tracking-widest text-sm">Malaysia's premier entertainment destinations</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-white/10 rounded-3xl overflow-hidden flex flex-col lg:flex-row group"
            >
              <div className="lg:w-2/5 relative h-[300px] lg:h-auto overflow-hidden">
                <img 
                  src={venue.imageUrl} 
                  alt={venue.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {venue.isCasinoResort && (
                  <div className="absolute top-6 left-6 bg-secondary text-background px-4 py-1 rounded-full font-accent text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
                    <Star size={12} fill="currentColor" /> Casino Resort
                  </div>
                )}
              </div>
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <MapPin size={16} className="text-primary" />
                  <span className="font-accent uppercase tracking-widest text-xs">{venue.location}</span>
                </div>
                <h2 className="text-3xl md:text-4xl mb-6 group-hover:text-primary transition-colors">{venue.name}</h2>
                <p className="text-gray-400 mb-8 leading-relaxed line-clamp-3">
                  {venue.description}
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
                  <div className="flex items-center gap-3">
                    <Users size={20} className="text-secondary" />
                    <div>
                      <h4 className="text-[10px] font-accent uppercase tracking-widest text-gray-500">Capacity</h4>
                      <p className="text-sm text-white">{venue.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Info size={20} className="text-secondary" />
                    <div>
                      <h4 className="text-[10px] font-accent uppercase tracking-widest text-gray-500">Facilities</h4>
                      <p className="text-sm text-white">{venue.facilities.length} Premium</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to={`/venues/${venue.slug}`}
                    className="bg-white text-background px-8 py-3 rounded-full font-accent uppercase tracking-widest text-xs font-bold hover:bg-primary hover:text-white transition-all text-center"
                  >
                    View Schedule
                  </Link>
                  {venue.isCasinoResort && (
                    <a 
                      href="#"
                      className="border border-secondary/30 text-secondary px-8 py-3 rounded-full font-accent uppercase tracking-widest text-xs font-bold hover:bg-secondary hover:text-background transition-all text-center"
                    >
                      Platinum Casino
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Venues;
