import { Mail, MapPin, Phone, Play } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl mb-8">About <span className="text-primary">StageDaily</span></h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            StageDaily is Malaysia's premier entertainment and show guide. We are dedicated to bringing you the most comprehensive and up-to-date information on live performances across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-3xl mb-8">Our <span className="text-primary">Mission</span></h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our mission is to connect entertainment lovers with the best live experiences Malaysia has to offer. Whether it's an international pop star's world tour, a local theater production, or a spectacular show at a casino resort, we believe that live entertainment has the power to create unforgettable memories.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We work closely with venues and promoters to ensure our guide is accurate and helpful, providing you with everything you need to plan your perfect night out.
            </p>
          </div>
          <div className="bg-card border border-white/10 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16" />
            <h2 className="text-3xl mb-8">Contact <span className="text-primary">Us</span></h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <span className="text-gray-300">hello@stagemalaysia.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <span className="text-gray-300">+60 3-1234 5678</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <span className="text-gray-300">Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-24 border-t border-white/10">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <Play className="text-white fill-white w-8 h-8" />
          </div>
          <h2 className="text-4xl mb-6">Ready for the <span className="text-primary">Spotlight?</span></h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Join thousands of entertainment fans and never miss a show again.
          </p>
          <button className="bg-primary text-white px-12 py-5 rounded-full font-accent uppercase tracking-widest text-sm font-bold hover:scale-105 transition-transform">
            Join Stage Weekly
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
