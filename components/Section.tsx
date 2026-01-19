
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  lightBackground?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '', lightBackground = false }) => {
  return (
    <section 
      id={id} 
      className={`py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden ${lightBackground ? 'bg-white' : 'bg-slate-50'} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {(title || subtitle) && (
          <div className="mb-24 text-center">
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
              >
                {subtitle}
              </motion.p>
            )}
            <motion.div 
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="h-1.5 w-24 bg-yellow-400 mx-auto mt-10 rounded-full"
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
