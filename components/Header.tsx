import React from 'react';
import { Briefcase, Menu } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="bg-ibmr-green p-2 rounded">
                <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-ibmr-green tracking-tighter">MEI</span>
                <span className="text-sm font-semibold text-gray-500 tracking-wide">JOVEM</span>
            </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-gray-600 hover:text-ibmr-green font-medium">Início</a>
            <a href="#trilhas" className="text-gray-600 hover:text-ibmr-green font-medium">Trilhas</a>
            <a href="#mentor" className="text-gray-600 hover:text-ibmr-green font-medium">Mentor IA</a>
        </nav>

        <div className="flex gap-4">
            <Button variant="primary" className="hidden md:block">
                Inscreva-se
            </Button>
            <button className="md:hidden text-ibmr-green">
                <Menu size={28} />
            </button>
        </div>
      </div>
    </header>
  );
};