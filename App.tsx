import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProperties from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Agents from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background font-sans text-text-primary">
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Agents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;