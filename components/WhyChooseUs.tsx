import React from 'react';
import { CheckCircleIcon } from './icons';

const WhyChooseUs: React.FC = () => {
  const features = [
    'AI-Powered Property Matching',
    'Immersive Virtual 3D Tours',
    'Dedicated Expert Agents',
    'Seamless Digital Transactions'
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop" alt="Happy couple in a modern kitchen" className="rounded-lg shadow-2xl" />
          </div>
          <div>
            <h3 className="text-primary font-semibold uppercase tracking-wider">Why Choose NestVibe</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-4">
              The Smartest Way to Find Your Home
            </h2>
            <p className="text-text-secondary mb-6">
              We merge technology with personalized service to create an unparalleled real estate experience. Our platform is designed to be intuitive, efficient, and transparent.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                  <span className="text-text-primary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;