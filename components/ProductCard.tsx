
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
  onViewMore: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, onViewMore }) => {
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="group"
    >
      <div 
        onClick={onViewMore}
        className="relative bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-yellow-400/40 transition-all p-8 flex flex-col h-full cursor-pointer shadow-xl hover:shadow-yellow-400/5 group-hover:bg-[#121212]"
      >
        <div 
          className="aspect-square mb-8 overflow-visible relative flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* 3D Image Animation */}
          <motion.img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-10"
            animate={{ 
              rotateY: [0, 15, 0, -15, 0],
              y: [0, -15, 0],
              rotateZ: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8, 
              ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.1, rotateY: 360 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Solar+Light';
            }}
          />
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-yellow-400/5 blur-[60px] rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="space-y-4 flex-grow relative z-10">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition-colors leading-tight max-w-[80%]">
              {product.name}
            </h3>
            <div className="bg-yellow-400/10 text-yellow-400 p-2 rounded-xl group-hover:bg-yellow-400 group-hover:text-black transition-all">
              <ChevronRight size={18} />
            </div>
          </div>
          
          <ul className="space-y-2">
            {(product.specs || []).slice(0, 3).map((spec, i) => (
              <li key={i} className="flex items-center text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-gray-300 transition-colors">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mr-2" />
                {spec}
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute top-6 left-6 flex items-center bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
           <ShieldCheck size={12} className="text-green-500 mr-2" />
           <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Premium Series</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
