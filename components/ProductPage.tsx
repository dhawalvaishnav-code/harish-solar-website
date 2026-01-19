
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShieldCheck, MessageSquare, Sun, Battery, CheckCircle2, ChevronRight, Eye, Loader2 } from 'lucide-react';
import { Product } from '../types.ts';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onBack }) => {
  const [currentView, setCurrentView] = useState<'front' | 'back'>('front');
  const [isImageLoading, setIsImageLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  // Reset loading state when view or product changes
  useEffect(() => {
    setIsImageLoading(true);
  }, [currentView, product.id]);

  const activeImage = currentView === 'front' ? product.image : product.backImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-32 pb-32 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-4 text-slate-400 hover:text-slate-900 transition-all mb-20 uppercase text-[10px] font-black tracking-[0.3em]"
        >
          <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all shadow-sm">
            <ArrowLeft size={20} />
          </div>
          <span>Back to catalog</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="lg:sticky lg:top-40">
            <div className="relative aspect-square bg-slate-50 border border-slate-100 rounded-[4rem] flex items-center justify-center p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
              
              {/* Image Loading Skeleton */}
              <AnimatePresence>
                {isImageLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-slate-50"
                  >
                    <div className="w-full h-full p-20 animate-pulse flex items-center justify-center">
                       <div className="w-full h-full bg-slate-200/50 rounded-[3rem] relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                       </div>
                    </div>
                    <div className="absolute flex flex-col items-center">
                       <Loader2 className="w-10 h-10 text-yellow-500 animate-spin mb-4" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Unit...</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentView}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: -30 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img 
                    src={activeImage} 
                    alt={`${product.name} ${currentView}`}
                    onLoad={() => setIsImageLoading(false)}
                    className={`w-full h-full object-contain drop-shadow-[0_40px_60px_rgba(234,179,8,0.2)] transition-opacity duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                    onError={(e) => {
                      setIsImageLoading(false);
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x600?text=Product+View';
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute top-10 right-10 flex space-x-2 z-30">
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-75" />
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse delay-150" />
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-12">
              {[
                { id: 'front', label: 'Front View' },
                { id: 'back', label: 'Rear View' }
              ].map((view) => (
                <button 
                  key={view.id} 
                  onClick={() => setCurrentView(view.id as any)}
                  className={`flex items-center space-x-3 px-10 py-5 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                    currentView === view.id 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
                    : 'bg-white border-slate-100 text-slate-400 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  <Eye size={16} />
                  <span>{view.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <span className="bg-yellow-100 text-yellow-700 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-yellow-200">Official Product</span>
                <span className="text-slate-300 text-[10px] font-black uppercase tracking-widest">Model: {product.id.toUpperCase()}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 tracking-tighter leading-none">{product.name}</h1>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">{product.description}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-start space-x-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-yellow-500"><Sun size={24} /></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Illumination</p>
                  <p className="text-xl font-bold text-slate-900">High Lumen LED</p>
                </div>
              </div>
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-start space-x-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-green-500"><Battery size={24} /></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Energy</p>
                  <p className="text-xl font-bold text-slate-900">Long-life Battery</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-black mb-10 flex items-center text-slate-900 uppercase tracking-tight">
                <ShieldCheck className="text-yellow-500 mr-4" /> Technical Specifications
              </h3>
              <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-900/5">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-slate-100">
                    {product.details.map((detail, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="px-10 py-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest border-r border-slate-50">{detail.feature}</td>
                        <td className="px-10 py-6 font-black text-sm text-slate-900">{detail.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-6 pt-10"
            >
              <a 
                href="#contact"
                className="w-full py-7 btn-secondary text-white font-black rounded-[2.5rem] transition-all uppercase tracking-[0.2em] text-xs flex items-center justify-center space-x-4 group"
                onClick={(e) => {
                  e.preventDefault();
                  onBack();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
              >
                <MessageSquare size={18} />
                <span>Instant Quote</span>
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>

            <div className="flex justify-between items-center py-10 border-t border-slate-100">
              {['IP65 Rated', 'Remote Access', 'Maintenance Free'].map((badge) => (
                <div key={badge} className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{badge}</span>
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
