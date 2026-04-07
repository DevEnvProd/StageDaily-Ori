import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import { motion } from 'motion/react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-card rounded-xl overflow-hidden border border-white/10 group concert-poster-shadow"
    >
      <Link to={`/events/${event.slug}`} className="block relative aspect-[3/4] overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-[10px] font-accent uppercase tracking-widest px-3 py-1 rounded-full">
            {event.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
      </Link>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-secondary mb-2">
          <Calendar size={14} />
          <span className="text-[10px] font-accent uppercase tracking-widest">{event.date} • {event.time}</span>
        </div>
        
        <Link to={`/events/${event.slug}`}>
          <h3 className="text-xl text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {event.title}
          </h3>
        </Link>
        
        <div className="flex items-center gap-2 text-gray-400 mb-4">
          <MapPin size={14} />
          <span className="text-xs font-accent uppercase tracking-widest">{event.venueName}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="font-mono text-secondary text-sm">
            {event.priceRange}
          </div>
          <Link
            to={`/events/${event.slug}`}
            className="flex items-center gap-2 text-white hover:text-primary transition-colors text-xs font-accent uppercase tracking-widest"
          >
            <Ticket size={14} />
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
