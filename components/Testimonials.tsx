import React, { useState, useEffect, useCallback } from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "NestVibe's platform is revolutionary. Finding our dream home was intuitive and exciting. The virtual tours are a game-changer!",
    author: 'Alex & Samantha Rey',
    title: 'Happy Homeowners',
    image: 'https://picsum.photos/200/200?random=20',
  },
  {
    quote: "The entire process was seamless, from search to signing. Their agent was incredibly knowledgeable and supportive.",
    author: 'David Chen',
    title: 'First-Time Buyer',
    image: 'https://picsum.photos/200/200?random=21',
  },
  {
    quote: "As a seller, I was impressed by their marketing strategy and the quality of leads. We sold our property faster than we ever expected.",
    author: 'Maria Rodriguez',
    title: 'Property Seller',
    image: 'https://picsum.photos/200/200?random=22',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-primary font-semibold uppercase tracking-wider">Testimonials</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-8">What Our Clients Say</h2>
        
        <div className="max-w-3xl mx-auto relative">
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-4">
                            <img src={testimonial.image} alt={testimonial.author} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary/30" />
                            <h4 className="text-xl font-bold text-text-primary">{testimonial.author}</h4>
                            <p className="text-text-secondary mb-4">{testimonial.title}</p>
                            <p className="text-lg italic text-text-primary">"{testimonial.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 mx-2 rounded-full transition-colors ${
                currentIndex === index ? 'bg-primary' : 'bg-surface hover:bg-primary/50'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;