import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { FEATURED_PRODUCTS } from './constants';
import { Product } from './types';
import { Sparkles, Zap, ShieldCheck, Truck } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    // Optional: Add toast notification here
    console.log(`Added ${product.name} to cart`);
  };

  const filteredProducts = activeCategory === 'all' 
    ? FEATURED_PRODUCTS 
    : FEATURED_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-fuchsia-500 selection:text-white">
      <Navbar cartCount={cart.length} />
      
      <main>
        <Hero />

        {/* Categories / Filter Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto" id="products">
          <div className="text-center mb-16">
            <span className="text-fuchsia-500 font-bold tracking-widest text-sm uppercase mb-2 block">
              Nossa Seleção
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              Descubra o Extraordinário
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'perfume', label: 'Perfumes' },
                { id: 'makeup', label: 'Maquiagem' },
                { id: 'skincare', label: 'Skincare' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-fuchsia-600 border-fuchsia-600 text-white shadow-[0_0_20px_rgba(192,38,211,0.5)]'
                      : 'border-white/20 text-gray-400 hover:border-white hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>
        </section>

        {/* Features Banner */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-fuchsia-900/20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-fuchsia-500/30 transition-colors group">
              <div className="w-16 h-16 bg-fuchsia-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-fuchsia-600 transition-colors duration-500">
                <Zap className="w-8 h-8 text-fuchsia-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Entrega Flash</h3>
              <p className="text-gray-400 text-sm">Receba suas essências favoritas em até 24h nas capitais.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-fuchsia-500/30 transition-colors group">
              <div className="w-16 h-16 bg-fuchsia-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-fuchsia-600 transition-colors duration-500">
                <ShieldCheck className="w-8 h-8 text-fuchsia-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Autenticidade Garantida</h3>
              <p className="text-gray-400 text-sm">Todos os produtos são 100% originais e selados.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-fuchsia-500/30 transition-colors group">
              <div className="w-16 h-16 bg-fuchsia-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-fuchsia-600 transition-colors duration-500">
                <Sparkles className="w-8 h-8 text-fuchsia-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Embalagem Premium</h3>
              <p className="text-gray-400 text-sm">Cada pedido é uma experiência de unboxing inesquecível.</p>
            </div>
          </div>
        </section>

        {/* Promo Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?q=80&w=2676&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-20"
               alt="Background"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-500 mb-6 drop-shadow-2xl">
              Sinta o Poder
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Transforme sua presença com nossa coleção exclusiva de Eau de Parfum.
            </p>
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold tracking-widest hover:bg-fuchsia-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]">
              EXPLORAR AGORA
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;