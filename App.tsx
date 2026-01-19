
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronRight, Sun, Zap, Battery, Shield, Globe } from 'lucide-react';
import Navbar from './components/Navbar.tsx';
import Section from './components/Section.tsx';
import ProductCard from './components/ProductCard.tsx';
import ProductPage from './components/ProductPage.tsx';
import { PRODUCTS, FEATURES, APPLICATIONS, CONTACT_INFO } from './constants.tsx';
import { Product } from './types.ts';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (!window.location.hash.startsWith('#product-')) {
        // Handle generic hash navigation if needed
      }
    };
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo(0, 0);
  };

  const handleNav = (id: string) => {
    // If we are on a product page, clear it first
    if (selectedProduct) {
      setSelectedProduct(null);
      // Wait for the main page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If already on main page, just scroll
      const element = document.getElementById(id.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-yellow-200 selection:text-yellow-900 font-['Inter']">
      <Navbar onNavigate={handleNav} />

      <AnimatePresence mode="wait">
        {!selectedProduct ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Hero Section */}
            <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden min-h-[95vh] flex items-center scroll-mt-20">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="z-10"
                >
                  <div className="inline-flex items-center space-x-2 bg-yellow-100 border border-yellow-200 px-4 py-2 rounded-full mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-yellow-700">Premium Solar Solutions</span>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
                    Lighting India's Future, <br />
                    <span className="solar-gradient-text">Sustainable</span> <br />
                    Technology.
                  </h1>
                  <p className="text-lg md:text-2xl text-slate-500 mb-12 max-w-xl leading-relaxed">
                    Premium solar street lighting solutions for Indian infrastructure, featuring smart, sustainable, and reliable technology.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <button onClick={() => handleNav('#products')} className="px-10 py-5 btn-primary text-slate-900 font-black rounded-2xl flex items-center justify-center transition-all uppercase tracking-wider text-sm">
                      View Catalog <ChevronRight size={18} className="ml-2" />
                    </button>
                    <button onClick={() => handleNav('#contact')} className="px-10 py-5 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-all uppercase tracking-wider text-sm shadow-sm hover:shadow-md">
                      Get a Quote
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="relative flex justify-center lg:justify-end"
                >
                  <motion.div 
                    animate={{ 
                      y: [0, -20, 0],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 6, 
                      ease: "easeInOut" 
                    }}
                    className="relative z-10 w-full max-w-md aspect-square bg-white rounded-[4rem] border border-slate-200 flex items-center justify-center p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-visible"
                  >
                    <img 
                      src="/images/hs-60.png" 
                      alt="HS-60 Solar Light" 
                      className="w-full h-full object-contain drop-shadow-[0_40px_60px_rgba(234,179,8,0.3)]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x600?text=HS-60';
                      }}
                    />
                    <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-6 rounded-[2.5rem] shadow-2xl">
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Bestseller</p>
                      <p className="text-3xl font-black text-yellow-400 tracking-tighter">HS-60</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            <Section id="products" title="Our Catalog" subtitle="Explore our high-performance solar range." className="scroll-mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {PRODUCTS.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index} 
                    onViewMore={() => navigateToProduct(product)}
                  />
                ))}
              </div>
            </Section>

            <Section id="technology" title="Smart Technology" subtitle="Built with the world's most reliable components." lightBackground className="scroll-mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FEATURES.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-yellow-300 transition-all group shadow-sm hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-yellow-600 transition-colors">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="contact" title="Get In Touch" subtitle="Contact us for infrastructure needs." className="scroll-mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-10">
                  <div className="p-10 bg-white rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50">
                    <h3 className="text-3xl font-black mb-10 tracking-tight">Direct Support</h3>
                    <div className="space-y-8">
                      <div className="flex items-center space-x-6">
                        <div className="bg-yellow-100 p-5 rounded-2xl text-yellow-600"><Phone size={24} /></div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Call Us</p>
                          <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold hover:text-yellow-600 transition-colors">{CONTACT_INFO.phone}</a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="bg-blue-100 p-5 rounded-2xl text-blue-600"><Mail size={24} /></div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Email</p>
                          <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold hover:text-blue-600 transition-colors break-all">{CONTACT_INFO.email}</a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="bg-green-100 p-5 rounded-2xl text-green-600"><MapPin size={24} /></div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Headquarters</p>
                          <p className="text-xl font-bold">{CONTACT_INFO.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-slate-200/50">
                  <h4 className="text-2xl font-bold mb-8 text-slate-800">Inquiry Form</h4>
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-yellow-400 focus:bg-white transition-all shadow-inner" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
                        <input type="tel" placeholder="+91..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-yellow-400 focus:bg-white transition-all shadow-inner" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Message</label>
                      <textarea rows={4} placeholder="Tell us about your project requirements..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-yellow-400 focus:bg-white transition-all resize-none shadow-inner"></textarea>
                    </div>
                    <button className="w-full py-6 btn-secondary text-white font-black rounded-[2rem] transition-all uppercase tracking-[0.2em] text-sm">
                      Send Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </Section>
          </motion.div>
        ) : (
          <ProductPage 
            key="product-page" 
            product={selectedProduct} 
            onBack={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>

      <footer className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <img src="/images/logo.png" alt="Logo" className="h-16 mb-12 grayscale opacity-40" />
          <div className="flex flex-wrap justify-center gap-12 mb-16 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            <button onClick={() => handleNav('#home')} className="hover:text-yellow-600 transition-colors">Home</button>
            <button onClick={() => handleNav('#products')} className="hover:text-yellow-600 transition-colors">Products</button>
            <button onClick={() => handleNav('#technology')} className="hover:text-yellow-600 transition-colors">Tech</button>
            <button onClick={() => handleNav('#contact')} className="hover:text-yellow-600 transition-colors">Contact</button>
          </div>
          <p className="text-slate-300 text-[9px] uppercase tracking-[0.4em] font-black text-center max-w-lg leading-loose">
            HARISH SOLAR SYSTEMS &copy; {new Date().getFullYear()}. Rajasthan's Premier Infrastructure Partner.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
