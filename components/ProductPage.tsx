
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Download, MessageSquare, Sun, Battery, CheckCircle2, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Hook into scroll position for the image transition effect
  const { scrollY } = useScroll();
  
  // Transform scroll position to blur, opacity, and scale for mobile immersion
  // Effects kick in after 50px and reach max at 400px scroll
  const imageBlur = useTransform(scrollY, [50, 400], [0, 15]);
  const imageOpacity = useTransform(scrollY, [50, 400], [1, 0.15]);
  const imageScale = useTransform(scrollY, [50, 400], [1, 0.8]);
  const imageSaturate = useTransform(scrollY, [50, 400], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors mb-12 uppercase text-xs font-black tracking-widest"
        >
          <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all">
            <ArrowLeft size={18} />
          </div>
          <span>Back to Catalog</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* 3D Product View Side */}
          {/* On Mobile: This stays sticky but blurs/fades as text scrolls over it */}
          <div className="sticky top-24 md:top-40 z-0 lg:z-10">
            <motion.div 
              style={{ 
                filter: useTransform(imageBlur, (v) => `blur(${v}px) saturate(${imageSaturate.get()})`),
                opacity: imageOpacity,
                scale: imageScale,
                perspective: 1200
              }}
              className="relative aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[3rem] md:rounded-[4rem] flex items-center justify-center p-8 md:p-12 overflow-visible shadow-2xl"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
              
              <motion.div
                initial={{ rotateY: -20, rotateX: 10, scale: 0.8 }}
                animate={{ 
                  rotateY: [0, 10, 0, -10, 0],
                  rotateX: [0, 5, 0, -5, 0],
                  y: [0, -20, 0],
                  scale: 1
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10 w-full h-full flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-[0_50px_100px_rgba(250,204,21,0.3)]"
                  style={{ transform: 'translateZ(100px)' }}
                />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 md:w-40 h-32 md:h-40 bg-yellow-400/10 blur-[80px] rounded-full animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-48 md:w-60 h-48 md:h-60 bg-green-500/5 blur-[100px] rounded-full" />
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-40">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">3D Interactive Model</p>
                <div className="flex space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-bounce" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </motion.div>

            {/* View selectors - Hidden when blurred on mobile for better focus */}
            <motion.div 
              style={{ opacity: imageOpacity }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {['Front', 'Top', 'Side'].map((view) => (
                <button key={view} className="py-3 md:py-4 bg-white/5 border border-white/10 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white hover:bg-white/10 transition-all">
                  {view}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Details Side - This will scroll "on top" of the sticky image on mobile */}
          <div className="space-y-12 relative z-10 mt-[-20vh] md:mt-0 pt-[25vh] lg:pt-0">
            {/* Background mask for text readability on mobile when scrolling over the image */}
            <div className="lg:hidden absolute inset-0 -z-10 bg-gradient-to-t from-black via-black to-transparent pointer-events-none opacity-90 rounded-t-[3rem]" />
            
            <div className="px-4 md:px-0">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Premium Grade</span>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Model {product.id.toUpperCase()}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{product.name}</h1>
              <p className="text-xl text-gray-400 leading-relaxed font-light">{product.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-start space-x-4 backdrop-blur-md">
                <div className="bg-yellow-400/10 p-3 rounded-xl"><Sun className="text-yellow-400" /></div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Illumination</p>
                  <p className="text-lg font-bold">OSRAM German Tech</p>
                </div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-start space-x-4 backdrop-blur-md">
                <div className="bg-green-500/10 p-3 rounded-xl"><Battery className="text-green-500" /></div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Energy Storage</p>
                  <p className="text-lg font-bold">LiFePO4 Cells</p>
                </div>
              </div>
            </div>

            {/* Technical Data Table */}
            <div className="px-4 md:px-0">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <ShieldCheck className="text-yellow-400 mr-3" /> Technical Specifications
              </h3>
              <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-white/5">
                    {product.details.map((detail, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 md:px-8 py-5 text-gray-400 font-medium text-sm">{detail.feature}</td>
                        <td className="px-6 md:px-8 py-5 font-bold text-sm text-right md:text-left">{detail.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 px-4 md:px-0">
              <button className="flex-1 py-6 bg-yellow-400 text-black font-black rounded-3xl hover:bg-yellow-300 transition-all uppercase tracking-[0.2em] text-sm shadow-2xl shadow-yellow-400/20 flex items-center justify-center space-x-3 group">
                <MessageSquare size={20} />
                <span>Enquire Now</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex-1 py-6 bg-white/5 border border-white/10 text-white font-black rounded-3xl hover:bg-white/10 transition-all uppercase tracking-[0.2em] text-sm flex items-center justify-center space-x-3 backdrop-blur-md">
                <Download size={20} />
                <span>Datasheet</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-between items-center py-8 border-y border-white/5 px-4 md:px-0">
              {['IP65 Rated', 'Remote Ready', '50k+ Life'].map((badge) => (
                <div key={badge} className="flex items-center space-x-2">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPage;
