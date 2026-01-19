
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
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
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Tech', href: '#technology' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleAction = (href: string) => {
    setIsOpen(false);
    onNavigate(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-effect py-4 border-b border-slate-100 shadow-xl shadow-slate-900/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <button onClick={() => handleAction('#home')} className="flex items-center group relative z-50">
          {!logoError ? (
            <motion.img 
              src="/images/logo.png" 
              alt="Harish Solar Logo" 
              className="h-10 md:h-14 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-400 p-2 rounded-xl shadow-lg">
                <span className="text-black font-black text-lg">HS</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">Harish<span className="text-yellow-500">Solar</span></span>
            </div>
          )}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleAction(link.href)}
              className="text-[10px] font-black text-slate-400 hover:text-yellow-600 transition-colors uppercase tracking-[0.3em]"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleAction('#contact')}
            className="px-8 py-3.5 bg-slate-900 text-white text-[10px] font-black rounded-2xl hover:bg-yellow-500 hover:text-black transition-all shadow-xl shadow-slate-900/10 uppercase tracking-[0.2em]"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 p-3 bg-white rounded-xl border border-slate-100 shadow-lg relative z-50" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden fixed inset-0 z-40 bg-white pt-32 p-8"
          >
            <div className="flex flex-col space-y-10">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => handleAction(link.href)}
                  className="text-4xl font-black text-slate-900 hover:text-yellow-500 transition-colors uppercase tracking-tight text-left"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => handleAction('#contact')}
                className="w-full py-6 btn-primary text-slate-900 text-center font-black rounded-[2rem] uppercase tracking-widest shadow-xl"
              >
                REQUEST QUOTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
