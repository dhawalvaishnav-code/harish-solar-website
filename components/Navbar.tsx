
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', onClick: onHomeClick },
    { name: 'About', href: '#about', onClick: onHomeClick },
    { name: 'Products', href: '#products', onClick: onHomeClick },
    { name: 'Technology', href: '#technology', onClick: onHomeClick },
    { name: 'Applications', href: '#applications', onClick: onHomeClick },
    { name: 'Contact', href: '#contact', onClick: onHomeClick },
  ];

  const handleLinkClick = (onClick?: () => void) => {
    if (onClick) onClick();
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-2 border-b border-white/10 shadow-2xl' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" onClick={() => handleLinkClick(onHomeClick)} className="flex items-center group">
          {!logoError ? (
            <motion.img 
              src="/images/logo.png" 
              alt="Harish Solar Logo" 
              className="h-14 md:h-20 w-auto object-contain brightness-125 contrast-125"
              whileHover={{ scale: 1.05 }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex items-center space-x-2">
              <div className="bg-yellow-400 p-2 rounded-xl shadow-lg shadow-yellow-400/20">
                <span className="text-black font-black text-xl">HS</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">HARISH <span className="text-yellow-400">SOLAR</span></span>
            </div>
          )}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => handleLinkClick(link.onClick)}
              className="text-[10px] font-black text-gray-400 hover:text-yellow-400 transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => handleLinkClick(onHomeClick)}
            className="px-8 py-3 bg-yellow-400 text-black text-[10px] font-black rounded-full hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 uppercase tracking-widest"
          >
            Enquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-3 bg-white/5 rounded-2xl border border-white/10" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-effect border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => handleLinkClick(link.onClick)}
                  className="text-xl font-black text-gray-300 hover:text-yellow-400 transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => handleLinkClick(onHomeClick)}
                className="w-full py-5 bg-yellow-400 text-black text-center font-black rounded-2xl shadow-xl shadow-yellow-400/10 uppercase tracking-widest"
              >
                ENQUIRE NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
