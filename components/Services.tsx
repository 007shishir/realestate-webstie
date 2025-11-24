import React from 'react';
import { Property } from '../types';
import { BedIcon, BathIcon, RulerIcon } from './icons';

const properties: Property[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
    price: '$2,150,000',
    address: '123 Future Lane, Metropolis',
    beds: 4,
    baths: 5,
    sqft: 4200,
    featured: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
    price: '$1,800,000',
    address: '456 Tech Avenue, Neo-City',
    beds: 3,
    baths: 4,
    sqft: 3500,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1605276374104-5de67d216b04?q=80&w=2070&auto=format&fit=crop',
    price: '$3,500,000',
    address: '789 Skyline Drive, Apex Heights',
    beds: 5,
    baths: 6,
    sqft: 6000,
    featured: true,
  },
];

const FeaturedProperties: React.FC = () => {
  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-primary font-semibold uppercase tracking-wider">Our Listings</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">Featured Properties</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-surface rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-primary">
              <div className="relative">
                <img src={property.image} alt={property.address} className="w-full h-64 object-cover" />
                {property.featured && <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">FEATURED</div>}
              </div>
              <div className="p-6">
                <p className="text-2xl font-bold text-primary mb-2">{property.price}</p>
                <h3 className="text-xl font-semibold text-text-primary mb-4">{property.address}</h3>
                <div className="flex justify-between items-center text-text-secondary border-t border-white/10 pt-4">
                    <div className="flex items-center space-x-2">
                        <BedIcon className="h-5 w-5 text-primary" />
                        <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <BathIcon className="h-5 w-5 text-primary" />
                        <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RulerIcon className="h-5 w-5 text-primary" />
                        <span>{property.sqft} sqft</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;