import React from 'react';
import { Agent } from '../types';
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from './icons';

const agents: Agent[] = [
  {
    name: 'Julianne Moore',
    role: 'Lead Agent',
    image: 'https://picsum.photos/400/400?random=30',
    social: { twitter: '#', facebook: '#', instagram: '#', linkedin: '#' }
  },
  {
    name: 'Ken Watanabe',
    role: 'Luxury Specialist',
    image: 'https://picsum.photos/400/400?random=31',
    social: { twitter: '#', facebook: '#', instagram: '#', linkedin: '#' }
  },
  {
    name: 'Priyanka Chopra',
    role: 'Urban Properties Expert',
    image: 'https://picsum.photos/400/400?random=32',
    social: { twitter: '#', facebook: '#', instagram: '#', linkedin: '#' }
  },
  {
    name: 'Tom Hardy',
    role: 'Commercial Real Estate',
    image: 'https://picsum.photos/400/400?random=33',
    social: { twitter: '#', facebook: '#', instagram: '#', linkedin: '#' }
  },
];

const Agents: React.FC = () => {
  return (
    <section id="agents" className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-primary font-semibold uppercase tracking-wider">Our Professionals</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">Meet Our Expert Agents</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <div key={index} className="group relative text-center bg-background rounded-lg shadow-lg overflow-hidden">
              <img src={agent.image} alt={agent.name} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-text-primary">{agent.name}</h4>
                <p className="text-text-secondary">{agent.role}</p>
              </div>
              <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  <a href={agent.social.twitter} className="text-white hover:text-gray-200"><TwitterIcon className="h-6 w-6" /></a>
                  <a href={agent.social.facebook} className="text-white hover:text-gray-200"><FacebookIcon className="h-6 w-6" /></a>
                  <a href={agent.social.instagram} className="text-white hover:text-gray-200"><InstagramIcon className="h-6 w-6" /></a>
                  <a href={agent.social.linkedin} className="text-white hover:text-gray-200"><LinkedinIcon className="h-6 w-6" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;