import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">
          The Future of <span className="text-primary">Living</span> is Here
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-12 animate-fade-in-up">
          Discover visionary homes and unparalleled living experiences with NestVibe.
        </p>
        
        <div className="w-full max-w-4xl p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 animate-fade-in-up animation-delay-300">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="col-span-1 md:col-span-2">
                    <label htmlFor="location" className="sr-only">Location</label>
                    <input 
                        id="location"
                        type="text" 
                        placeholder="Enter a city, address, or neighborhood"
                        className="w-full bg-transparent border-b-2 border-white/50 focus:border-primary focus:ring-0 placeholder-text-primary/80 transition"
                    />
                </div>
                <div>
                     <label htmlFor="property-type" className="sr-only">Property Type</label>
                     <select 
                        id="property-type"
                        className="w-full bg-transparent border-b-2 border-white/50 focus:border-primary focus:ring-0 text-text-primary/80 transition">
                         <option className="bg-surface text-text-primary">Apartment</option>
                         <option className="bg-surface text-text-primary">House</option>
                         <option className="bg-surface text-text-primary">Villa</option>
                         <option className="bg-surface text-text-primary">Penthouse</option>
                     </select>
                </div>
                <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark hover:shadow-glow transition-all duration-300">
                    Search
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;