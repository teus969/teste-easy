import React from 'react';
import { Sparkles, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-fuchsia-500" />
              <span className="text-xl font-serif font-bold text-white">LUMINA</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Elevando a beleza através de fragrâncias e cosméticos curados para expressar sua verdadeira essência.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">Categorias</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-fuchsia-400 cursor-pointer transition-colors">Perfumes Importados</li>
              <li className="hover:text-fuchsia-400 cursor-pointer transition-colors">Maquiagem Artística</li>
              <li className="hover:text-fuchsia-400 cursor-pointer transition-colors">Skincare Premium</li>
              <li className="hover:text-fuchsia-400 cursor-pointer transition-colors">Sets de Presente</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">Suporte</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-fuchsia-400 cursor-pointer transition-colors">Rastrear Pedido</li>
              <li className="hover:text-fuchsia-400 cursor-pointer transition-colors">Política de Devolução</li>
              <li className="hover:text-fuchsia-400 cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-fuchsia-400 cursor-pointer transition-colors">Contato</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Receba ofertas exclusivas e lançamentos em primeira mão.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-fuchsia-500 w-full"
              />
              <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 Lumina Essence. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Instagram className="w-5 h-5 text-gray-500 hover:text-fuchsia-500 cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-500 hover:text-sky-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;