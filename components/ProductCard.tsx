
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ChevronRight, RefreshCw } from 'lucide-react';
import { Product } from '../types.ts';

interface ProductCardProps {
  product: Product;
  index: number;
  onViewMore: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, onViewMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        onClick={onViewMore}
        className="relative bg-white border border-slate-100 rounded-[3.5rem] p-10 flex flex-col h-full cursor-pointer transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2 group-hover:border-yellow-200 overflow-hidden"
      >
        <div className="aspect-square mb-12 relative flex items-center justify-center p-6">
          {/* Front Image */}
          <motion.img 
            src={product.image} 
            alt={`${product.name} Front`}
            className="w-full h-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.08)] z-10 transition-opacity duration-500"
            style={{ opacity: isHovered && product.backImage ? 0 : 1 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Solar+Unit';
            }}
          />
          
          {/* Back Image (Appears on Hover) */}
          {product.backImage && (
            <motion.img 
              src={product.backImage} 
              alt={`${product.name} Rear`}
              className="absolute w-full h-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.08)] z-10 transition-opacity duration-500 left-0 top-0 p-12"
              style={{ 
                opacity: isHovered ? 1 : 0,
                pointerEvents: 'none'
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          )}

          <div className="absolute inset-0 bg-yellow-400/5 blur-[80px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
          
          {/* View Toggle Badge */}
          {product.backImage && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm border border-slate-100 px-3 py-1 rounded-full flex items-center space-x-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <RefreshCw size={10} className="text-yellow-600 animate-spin-slow" />
               <span className="text-[8px] font-black uppercase tracking-tighter text-slate-500">Auto Flipping View</span>
            </div>
          )}
        </div>
        
        <div className="space-y-6 flex-grow">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-3xl font-black text-slate-900 group-hover:text-yellow-600 transition-colors leading-none tracking-tighter">
              {product.name}
            </h3>
            <div className="bg-slate-900 text-white p-3 rounded-[1.25rem] group-hover:bg-yellow-400 group-hover:text-black transition-all shrink-0">
              <ChevronRight size={18} />
            </div>
          </div>
          
          <div className="space-y-3">
            {(product.specs || []).slice(0, 3).map((spec, i) => (
              <div key={i} className="flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3" />
                {spec}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-8 left-8 flex items-center bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full shadow-sm">
           <ShieldCheck size={12} className="text-green-500 mr-2" />
           <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Industrial Grade</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
