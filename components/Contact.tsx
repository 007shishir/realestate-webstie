import React from 'react';
import { LocationMarkerIcon, MailIcon, PhoneIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-primary font-semibold uppercase tracking-wider">Contact</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">Get In Touch With Us</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-start p-6 bg-surface rounded-lg">
              <LocationMarkerIcon className="h-8 w-8 text-primary flex-shrink-0 mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-text-primary">Our Address</h4>
                <p className="text-text-secondary">123 Future Lane, Metropolis, 90210</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-surface rounded-lg">
              <MailIcon className="h-8 w-8 text-primary flex-shrink-0 mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-text-primary">Email Us</h4>
                <p className="text-text-secondary">contact@nestvibe.com</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-surface rounded-lg">
              <PhoneIcon className="h-8 w-8 text-primary flex-shrink-0 mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-text-primary">Call Us</h4>
                <p className="text-text-secondary">+1 5589 55488 55</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 bg-surface p-8 rounded-lg">
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md bg-background border border-white/20 text-text-primary focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md bg-background border border-white/20 text-text-primary focus:ring-primary focus:border-primary" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="Subject" className="w-full px-4 py-3 rounded-md bg-background border border-white/20 text-text-primary focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows={5} placeholder="Message" className="w-full px-4 py-3 rounded-md bg-background border border-white/20 text-text-primary focus:ring-primary focus:border-primary"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark hover:shadow-glow transition-all duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;