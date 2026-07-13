import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection, PageHeader } from '../components/ui/Shared';
import { Scissors, Sparkles, Crown } from 'lucide-react';

const SERVICES = {
  hair: [
    { title: 'Classic Haircut', price: '$45', time: '45 Min', desc: 'Tailored cut, relaxing shampoo, hot towel, and professional styling.' },
    { title: 'Skin Fade', price: '$50', time: '60 Min', desc: 'Precision fade down to the skin, straight razor lineup, and styling.' },
    { title: 'Taper Fade', price: '$45', time: '45 Min', desc: 'Clean taper on the neck and sides, blended perfectly with the top.' },
    { title: 'Kids Haircut', price: '$35', time: '30 Min', desc: 'Patience and precision for the young gentlemen (12 and under).' },
  ],
  beard: [
    { title: 'Hot Towel Shave', price: '$40', time: '45 Min', desc: 'Traditional straight razor shave with premium oils and hot towels.' },
    { title: 'Beard Trim & Lineup', price: '$30', time: '30 Min', desc: 'Shaping, trimming, and a straight razor lineup on the cheeks and neck.' },
    { title: 'Premium Beard Grooming', price: '$55', time: '45 Min', desc: 'Trim, shape, hot towel, condition, and straight razor finish.' },
  ],
  packages: [
    { title: 'The Executive', price: '$80', time: '90 Min', desc: 'Classic haircut paired with a hot towel straight razor shave.' },
    { title: 'The Royal Treatment', price: '$120', time: '120 Min', desc: 'Haircut, premium beard grooming, facial massage, and wax.' },
  ]
};

export default function Services() {
  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="Precision, luxury, and relaxation. Choose from our range of premium grooming services."
        image="https://images.unsplash.com/photo-1593702288056-ccbfb4588e34?q=80&w=1974&auto=format&fit=crop"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          
          {/* Hair Services */}
          <div className="mb-24">
            <AnimatedSection className="flex items-center gap-4 mb-12">
              <Scissors className="w-8 h-8 text-gold" />
              <h2 className="text-4xl font-bold">Hair Services</h2>
              <div className="h-px bg-white/10 flex-grow ml-4"></div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.hair.map((service, i) => (
                <ServiceCard key={i} service={service} index={i} />
              ))}
            </div>
          </div>

          {/* Beard Services */}
          <div className="mb-24">
            <AnimatedSection className="flex items-center gap-4 mb-12">
              <Sparkles className="w-8 h-8 text-gold" />
              <h2 className="text-4xl font-bold">Beard & Shave</h2>
              <div className="h-px bg-white/10 flex-grow ml-4"></div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.beard.map((service, i) => (
                <ServiceCard key={i} service={service} index={i} />
              ))}
            </div>
          </div>

          {/* Packages */}
          <div>
            <AnimatedSection className="flex items-center gap-4 mb-12">
              <Crown className="w-8 h-8 text-gold" />
              <h2 className="text-4xl font-bold">Premium Packages</h2>
              <div className="h-px bg-white/10 flex-grow ml-4"></div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.packages.map((service, i) => (
                <ServiceCard key={i} service={service} index={i} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, index }: { service: any, index: number, key?: React.Key }) {
  return (
    <AnimatedSection delay={index * 0.1} className="glass-card p-8 group hover:border-gold/30 transition-all flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-baseline mb-4 border-b border-white/10 pb-4">
          <h3 className="text-2xl font-bold font-heading">{service.title}</h3>
          <span className="text-2xl text-gold font-bold">{service.price}</span>
        </div>
        <p className="text-text-gray mb-6 text-sm">{service.time}</p>
        <p className="text-gray-300 mb-8 leading-relaxed">{service.desc}</p>
      </div>
      <Link to="/contact" className="w-full text-center py-3 border border-white/20 uppercase tracking-wider text-sm font-bold hover:bg-gold hover:text-primary hover:border-gold transition-colors">
        Book Now
      </Link>
    </AnimatedSection>
  );
}
