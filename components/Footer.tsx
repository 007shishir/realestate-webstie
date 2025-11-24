import React from 'react';
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface text-text-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Nest<span className="text-primary">Vibe</span></h3>
            <p>
              123 Future Lane<br />
              Metropolis, 90210<br />
              United States <br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@nestvibe.com<br />
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about-us" className="hover:text-primary transition-colors">About us</a></li>
              <li><a href="#properties" className="hover:text-primary transition-colors">Properties</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="hover:text-primary transition-colors">Property Buying</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Property Selling</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Agent Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Market Analysis</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Virtual Tours</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Join Our Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter for the latest properties and market updates.</p>
            <form>
              <div className="flex">
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-l-md bg-background border border-white/20 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary" />
                <button type="submit" className="bg-primary px-4 py-2 rounded-r-md text-white font-semibold hover:bg-primary-dark transition-colors">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-background py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="text-text-secondary">
            &copy; {new Date().getFullYear()} <strong><span>NestVibe</span></strong>. All Rights Reserved
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-text-secondary hover:text-primary transition-colors"><TwitterIcon className="h-5 w-5" /></a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors"><FacebookIcon className="h-5 w-5" /></a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors"><InstagramIcon className="h-5 w-5" /></a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors"><LinkedinIcon className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;