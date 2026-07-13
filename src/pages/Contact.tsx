import React from 'react';
import { AnimatedSection, PageHeader } from '../components/ui/Shared';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <PageHeader 
        title="Contact & Booking" 
        subtitle="Ready to elevate your style? Get in touch or book your appointment online."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold font-heading mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Location</h4>
                    <p className="text-text-gray">123 Luxury Avenue<br />Downtown District<br />New York, NY 10012</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Phone</h4>
                    <p className="text-text-gray">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Email</h4>
                    <p className="text-text-gray">info@luxecut.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gold" /> Opening Hours
                </h4>
                <ul className="space-y-3 text-text-gray">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Monday - Friday</span>
                    <span className="text-gold">9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Saturday</span>
                    <span className="text-gold">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gold">10:00 AM - 4:00 PM</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 md:p-10">
                <h2 className="text-3xl font-bold font-heading mb-2">Send a Message</h2>
                <p className="text-text-gray mb-8">Have a question or want to request a specific time? Fill out the form below.</p>
                
                <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-gray-300">First Name</label>
                      <input type="text" className="w-full bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-gray-300">Last Name</label>
                      <input type="text" className="w-full bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-300">Email Address</label>
                    <input type="email" className="w-full bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-300">Service Interest</label>
                    <select className="w-full bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                      <option>Select a service</option>
                      <option>Haircut</option>
                      <option>Beard Trim</option>
                      <option>Hot Towel Shave</option>
                      <option>Premium Package</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-300">Message</label>
                    <textarea rows={4} className="w-full bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  
                  <button className="w-full bg-gold hover:bg-gold-light text-primary py-4 font-bold uppercase tracking-wider transition-colors mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Map Placeholder */}
      <section className="h-96 bg-secondary relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass-card p-6 flex flex-col items-center">
            <MapPin className="w-8 h-8 text-gold mb-2" />
            <span className="font-bold uppercase tracking-wider text-sm">Interactive Map</span>
          </div>
        </div>
      </section>
    </div>
  );
}
