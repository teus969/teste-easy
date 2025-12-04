import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <Sparkles className="w-8 h-8 text-fuchsia-500 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-serif font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600 group-hover:from-fuchsia-300 group-hover:to-purple-500 transition-all">
              LUMINA
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Perfumes', 'Maquiagem', 'Skincare', 'Lançamentos'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-fuchsia-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <button className="text-white hover:text-fuchsia-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="relative group cursor-pointer">
              <ShoppingBag className="w-5 h-5 text-white group-hover:text-fuchsia-400 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse shadow-[0_0_10px_rgba(192,38,211,0.5)]">
                  {cartCount}
                </span>
              )}
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {['Perfumes', 'Maquiagem', 'Skincare', 'Lançamentos'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-lg font-medium hover:text-fuchsia-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;