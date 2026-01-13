
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink, ChevronRight, Globe, Shield, Sun, Zap, ArrowLeft, Download, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ProductCard from './components/ProductCard';
import ProductPage from './components/ProductPage';
import { PRODUCTS, FEATURES, APPLICATIONS, CONTACT_INFO } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Handle browser back button or navigation resets
  useEffect(() => {
    const handleHashChange = () => {
      if (!window.location.hash.startsWith('#product-')) {
        setSelectedProduct(null);
      }
    };
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo(0, 0);
    // We don't change actual URL path to avoid routing issues, 
    // but we can use hash if desired.
  };

  const navigateHome = () => {
    setSelectedProduct(null);
    setTimeout(() => {
      const element = document.getElementById('products');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black font-['Inter']">
      <Navbar onHomeClick={() => setSelectedProduct(null)} />

      <AnimatePresence mode="wait">
        {!selectedProduct ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen flex items-center scroll-mt-20">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="z-10"
                >
                  <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-300">SMART LIGHTING TECH</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                    Lighting India's Future, <br />
                    <span className="solar-gradient">One Street at a Time.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                    Smart, sustainable solar street lighting solutions designed from the heart of Rajasthan with advanced engineering.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#products" className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg flex items-center justify-center hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] uppercase tracking-wider">
                      View Catalog <ChevronRight size={20} className="ml-2" />
                    </a>
                    <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg flex items-center justify-center hover:bg-white/10 transition-all uppercase tracking-wider">
                      Get a Quote
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, rotateY: -30, rotateX: 10 }}
                  animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ perspective: 1000 }}
                  className="relative flex justify-center lg:justify-end"
                >
                  <motion.div 
                    animate={{ 
                      y: [0, -25, 0],
                      rotateY: [-5, 5, -5],
                      rotateX: [2, -2, 2]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 6, 
                      ease: "easeInOut" 
                    }}
                    className="relative z-10 w-full max-w-md aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] border border-white/20 flex items-center justify-center p-12 backdrop-blur-md shadow-2xl"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <img 
                      src="/images/hs-60.png" 
                      alt="HS-60 Solar Light" 
                      className="w-full h-full object-contain drop-shadow-[0_35px_60px_rgba(250,204,21,0.4)]"
                      style={{ transform: 'translateZ(50px)' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600?text=HS-60';
                      }}
                    />
                    <div 
                      className="absolute -bottom-8 -left-8 bg-yellow-400 text-black p-5 rounded-3xl shadow-2xl"
                      style={{ transform: 'translateZ(80px)' }}
                    >
                      <p className="text-xs font-bold uppercase opacity-60">Engineered Precision</p>
                      <p className="text-2xl font-black">HS-60 SERIES</p>
                    </div>
                  </motion.div>
                  <div className="absolute inset-0 bg-yellow-400/20 blur-[120px] rounded-full scale-75 opacity-50" />
                </motion.div>
              </div>
            </section>

            {/* About Section */}
            <Section id="about" title="Engineering Excellence" subtitle="Born in Rajasthan, built for the world. We combine high-tech design with sustainable energy." lightBackground className="scroll-mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
                 <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="space-y-6 text-gray-300 leading-relaxed text-lg"
                 >
                    <p>
                      Based in <strong>Jodhpur, Rajasthan</strong>, Harish Solar is a pioneer in the next generation of smart infrastructure. Our solar street lights are engineered using advanced simulation tools to ensure maximum durability in the toughest Indian climates.
                    </p>
                    <p>
                      As part of the <strong>Harish Group</strong>, we bring 25 years of legacy in real estate and infrastructure to every product we manufacture. Reliability isn't just a promise; it's our core DNA.
                    </p>
                    <div className="pt-4 grid grid-cols-2 gap-6">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-3xl font-black text-yellow-400">10k+</p>
                        <p className="text-xs uppercase font-bold text-gray-500">Lights Installed</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-3xl font-black text-green-500">25yr</p>
                        <p className="text-xs uppercase font-bold text-gray-500">Group Legacy</p>
                      </div>
                    </div>
                 </motion.div>
                 
                 <div className="relative group" style={{ perspective: 1200 }}>
                   <motion.div
                     whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
                     transition={{ type: 'spring', stiffness: 100 }}
                     className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl"
                     style={{ transformStyle: 'preserve-3d' }}
                   >
                     <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80" alt="Solar Project" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                     <div className="absolute bottom-6 left-6" style={{ transform: 'translateZ(30px)' }}>
                        <p className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-1">Modern Infrastructure</p>
                        <p className="text-xl font-bold">Smart City Solutions</p>
                     </div>
                   </motion.div>
                 </div>
              </div>
            </Section>

            {/* Products Section */}
            <Section id="products" title="Our Smart Catalog" subtitle="Interactive models of our high-performance solar range. Click any product to explore detailed specs and 360° views." className="scroll-mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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

            {/* Technology */}
            <Section id="technology" title="Integrated Technology" subtitle="Beyond simple lighting. We integrate the world's most reliable components." lightBackground className="scroll-mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FEATURES.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-[2rem] bg-black border border-white/5 hover:border-yellow-400/30 transition-all group relative overflow-hidden"
                  >
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-yellow-400/5 blur-3xl rounded-full group-hover:bg-yellow-400/10 transition-colors" />
                    <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-yellow-400/10 transition-colors">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* Contact */}
            <Section id="contact" title="Project Inquiry" subtitle="Let our experts design the perfect lighting layout for your infrastructure needs." className="scroll-mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-10">
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-yellow-400/20 transition-all">
                    <h3 className="text-2xl font-bold mb-6">Connect with Sales</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-yellow-400/10 p-3 rounded-xl"><Phone className="text-yellow-400" /></div>
                        <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-bold hover:text-yellow-400 transition-colors">{CONTACT_INFO.phone}</a>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-yellow-400/10 p-3 rounded-xl"><Mail className="text-yellow-400" /></div>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-bold hover:text-yellow-400 transition-colors break-all">{CONTACT_INFO.email}</a>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-yellow-400/10 p-3 rounded-xl"><MapPin className="text-yellow-400" /></div>
                        <p className="text-lg font-bold">{CONTACT_INFO.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-yellow-400 transition-colors" />
                      <input type="tel" placeholder="Phone" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-yellow-400 transition-colors" />
                    </div>
                    <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-yellow-400 transition-colors resize-none"></textarea>
                    <button className="w-full py-5 bg-yellow-400 text-black font-black rounded-2xl hover:bg-yellow-300 transition-all uppercase tracking-widest shadow-xl shadow-yellow-400/10">
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
            onBack={navigateHome} 
          />
        )}
      </AnimatePresence>

      <footer className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <img src="/images/logo.png" alt="Logo" className="h-20 mb-8 opacity-60 grayscale hover:grayscale-0 transition-all" />
          <div className="flex flex-wrap justify-center gap-10 mb-12 text-sm font-bold uppercase tracking-widest text-gray-500">
            <a href="#home" onClick={() => setSelectedProduct(null)} className="hover:text-yellow-400">Home</a>
            <a href="#about" onClick={() => setSelectedProduct(null)} className="hover:text-yellow-400">About</a>
            <a href="#products" onClick={() => setSelectedProduct(null)} className="hover:text-yellow-400">Products</a>
            <a href="#contact" onClick={() => setSelectedProduct(null)} className="hover:text-yellow-400">Contact</a>
          </div>
          <p className="text-gray-700 text-[10px] uppercase tracking-[0.2em] font-black">
            &copy; {new Date().getFullYear()} Harish Solar Systems. Rajasthan, India.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
