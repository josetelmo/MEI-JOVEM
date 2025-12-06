import React from 'react';
import { Header } from './components/Header';
import { Ticker } from './components/Ticker';
import { Hero } from './components/Hero';
import { CardsSection } from './components/CardsSection';
import { AIConsultant } from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <Ticker />
      
      <main>
        <Hero />
        <CardsSection />
        <AIConsultant />
      </main>

      <footer className="bg-[#00281a] text-white py-12 px-4 border-t border-emerald-900">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 text-sm">
            <div>
                <h4 className="font-bold text-lg mb-4 text-emerald-400">MEI JOVEM</h4>
                <p className="opacity-70">
                    A plataforma educacional feita para a nova geração de empreendedores brasileiros.
                </p>
            </div>
            <div>
                <h4 className="font-bold mb-4">Links Úteis</h4>
                <ul className="space-y-2 opacity-70">
                    <li><a href="#" className="hover:text-emerald-400">Portal do Empreendedor</a></li>
                    <li><a href="#" className="hover:text-emerald-400">Receita Federal</a></li>
                    <li><a href="#" className="hover:text-emerald-400">Sebrae</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Contato</h4>
                <ul className="space-y-2 opacity-70">
                    <li>suporte@meijovem.com.br</li>
                    <li>0800 123 4567</li>
                    <li>São Paulo, SP</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 opacity-70">
                    <li><a href="#" className="hover:text-emerald-400">Termos de Uso</a></li>
                    <li><a href="#" className="hover:text-emerald-400">Privacidade</a></li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto mt-12 pt-8 border-t border-emerald-900 text-center text-xs opacity-50">
            &copy; 2025 MEI JOVEM Educacional. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default App;