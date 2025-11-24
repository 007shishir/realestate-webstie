import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = ["Home", "Properties", "About Us", "Agents", "Contact"];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white">
              Nest<span className="text-primary">Vibe</span>
            </a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="px-3 py-2 rounded-md text-sm font-medium text-text-primary hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="hidden md:block">
             <a href="#contact" className="bg-primary text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors">
                List Property
             </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-primary hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-surface">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-text-primary hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {link}
              </a>
            ))}
             <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-primary text-white block w-full text-center mt-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors">
                List Property
             </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;