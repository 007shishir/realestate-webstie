import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about-us" className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-primary font-semibold uppercase tracking-wider">About NestVibe</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-4">
              Redefining the Real Estate Experience
            </h2>
            <p className="text-text-secondary mb-4">
              At NestVibe, we are pioneering the future of property acquisition. We leverage cutting-edge technology and data-driven insights to provide a seamless and intelligent platform for buyers, sellers, and agents.
            </p>
            <p className="text-text-secondary mb-6">
              Our mission is to make finding the perfect home an inspiring and effortless journey. We believe in transparency, innovation, and creating lasting value for our clients through exceptional service and a forward-thinking approach.
            </p>
            <a href="#" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark hover:shadow-glow transition-all duration-300">
              Learn More
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" alt="Modern Interior" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;