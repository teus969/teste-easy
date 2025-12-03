import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1615634260167-c8c9c3e35069?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury Perfume Background"
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-fuchsia-500 font-bold tracking-[0.3em] text-sm md:text-base mb-6 animate-[fadeIn_1s_ease-out]">
          NOVA COLEÇÃO 2024
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-2xl">
            Essência
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 animate-[pulse_4s_ease-in-out_infinite]">
            Inesquecível
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Descubra fragrâncias que transcendem o tempo. Uma curadoria exclusiva das marcas mais desejadas do mundo, feita para quem ousa ser único.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-fuchsia-600 text-white font-bold tracking-wider overflow-hidden rounded-full transition-all hover:shadow-[0_0_40px_-10px_rgba(192,38,211,0.6)] hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              COMPRAR AGORA <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
          
          <button className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-full font-medium tracking-wider transition-all hover:border-white">
            VER CATÁLOGO
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-fuchsia-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;