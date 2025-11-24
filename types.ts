import type React from 'react';

export interface Property {
  id: number;
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  image: string;
}

export interface Agent {
    name: string;
    role: string;
    image: string;
    social: {
        twitter: string;
        facebook: string;
        instagram: string;
        linkedin: string;
    }
}