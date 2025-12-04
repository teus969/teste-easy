import React from 'react';
import { Product } from '../types';
import { Heart, ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-[#0f0f0f] rounded-2xl overflow-hidden border border-white/5 hover:border-fuchsia-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]">
      
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-gray-900">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 will-change-transform"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Floating Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {product.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded border border-white/10">
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Actions - Slide in from right */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-fuchsia-500 hover:text-white transition-colors shadow-lg">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-fuchsia-400 text-xs font-bold tracking-widest uppercase mb-1">{product.brand}</p>
            <h3 className="text-xl font-serif font-semibold text-white group-hover:text-fuchsia-200 transition-colors">
              {product.name}
            </h3>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">4.9</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2 mb-6 group-hover:text-gray-300 transition-colors">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-white">
            R$ {product.price.toFixed(2)}
          </span>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-bold hover:bg-fuchsia-500 hover:text-white transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 opacity-80 group-hover:opacity-100 shadow-md hover:shadow-fuchsia-500/50"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">ADICIONAR</span>
          </button>
        </div>

        {/* Decorative Glow Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

export default ProductCard;