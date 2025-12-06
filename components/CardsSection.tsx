import React from 'react';
import { Rocket, FileText, TrendingUp } from 'lucide-react';
import { CardData } from '../types';
import { Button } from './Button';

const cards: CardData[] = [
    {
        id: 1,
        icon: <Rocket className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={1.5} />,
        title: "Ideação & Planejamento",
        description: "Tire sua ideia do papel. Aprenda a usar o Canvas de Modelo de Negócios e valide seu produto antes de gastar.",
        buttonText: "Começar Jornada"
    },
    {
        id: 2,
        icon: <FileText className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={1.5} />,
        title: "Formalização MEI",
        description: "Passo a passo para obter seu CNPJ gratuitamente no Portal do Empreendedor e entender seus deveres.",
        buttonText: "Ver Guia Prático"
    },
    {
        id: 3,
        icon: <TrendingUp className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={1.5} />,
        title: "Gestão & Crescimento",
        description: "Aprenda o básico de fluxo de caixa, marketing digital e como vender online para escalar seu negócio.",
        buttonText: "Acessar Aulas"
    }
];

export const CardsSection: React.FC = () => {
  return (
    <section id="trilhas" className="bg-ibmr-green py-20 px-4 relative">
        <div className="container mx-auto">
            {/* Divider line mimicking the reference */}
            <div className="w-24 h-1 bg-emerald-500 mb-8 rounded-full"></div>
            
            <div className="mb-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Como começar a <span className="text-emerald-400">EMPREENDER?</span>
                </h2>
                <p className="text-lg max-w-2xl opacity-90">
                    Quer abrir seu negócio e não sabe por onde começar? 
                    Oferecemos trilhas educacionais gratuitas, veja qual combina com seu momento atual:
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div key={card.id} className="bg-white/95 backdrop-blur rounded-lg p-8 flex flex-col items-center text-center shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300 group border-b-4 border-transparent hover:border-emerald-500">
                        <div className="bg-emerald-50 p-4 rounded-full mb-4 group-hover:bg-emerald-100 transition-colors">
                            {card.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                        <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">
                            {card.description}
                        </p>
                        <Button fullWidth className="mt-auto">
                            {card.buttonText}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};