import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import { events } from '../data/mockData';
import EventCard from '../components/EventCard';
import CasinoBanner from '../components/CasinoBanner';

const Events = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredEvents = events.filter(event => {
    const matchesCategory = !categoryFilter || event.category === categoryFilter || (categoryFilter === 'Casino Shows' && event.category === 'Casino Resort Shows');
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.venueName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Concerts', 'Casino Resort Shows', 'Theater & Stage', 'Comedy', 'Family Shows'];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl mb-4">Live <span className="text-primary">Events</span></h1>
          <p className="text-gray-400 font-accent uppercase tracking-widest text-sm">Discover the best shows in Malaysia</p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/4 space-y-8">
            <div className="bg-card border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6 text-white">
                <Search size={18} className="text-primary" />
                <h3 className="font-accent uppercase tracking-widest text-sm">Search</h3>
              </div>
              <input
                type="text"
                placeholder="Search artist, venue..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="bg-card border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6 text-white">
                <Filter size={18} className="text-primary" />
                <h3 className="font-accent uppercase tracking-widest text-sm">Categories</h3>
              </div>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSearchParams(cat === 'All' ? {} : { category: cat })}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-accent uppercase tracking-widest transition-all ${
                      (categoryFilter === cat || (!categoryFilter && cat === 'All'))
                        ? 'bg-primary text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat === 'Casino Resort Shows' ? 'Casino Shows' : cat}
                  </button>
                ))}
              </div>
            </div>

            <CasinoBanner type="box" />
          </div>

          <div className="lg:w-3/4">
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card/30 rounded-3xl border border-dashed border-white/10">
                <SlidersHorizontal size={48} className="mx-auto text-gray-600 mb-4" />
                <h3 className="text-2xl mb-2">No events found</h3>
                <p className="text-gray-400">Try adjusting your filters or search term.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setSearchParams({});}}
                  className="mt-6 text-primary hover:text-white font-accent uppercase tracking-widest text-sm"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
