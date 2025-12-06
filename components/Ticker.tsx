import React from 'react';

export const Ticker: React.FC = () => {
  return (
    <div className="bg-gray-200 text-gray-700 py-2 overflow-hidden relative border-b border-gray-300">
      <div className="whitespace-nowrap animate-marquee flex gap-12 text-xs font-bold uppercase tracking-wider">
        <span>No MEI JOVEM, sua ideia vira negócio. <span className="text-ibmr-green">Prepare-se para lucrar!</span></span>
        <span>MEI 2025</span>
        <span>Apoio total ao empreendedor iniciante. <span className="text-ibmr-green">Consultoria Gratuita com IA!</span></span>
        <span>MEI 2025</span>
        <span>Formalize seu sonho hoje. <span className="text-ibmr-green">Bolsas de estudo para cursos de gestão.</span></span>
        <span>MEI 2025</span>
        <span>No MEI JOVEM, sua ideia vira negócio. <span className="text-ibmr-green">Prepare-se para lucrar!</span></span>
        <span>MEI 2025</span>
      </div>
    </div>
  );
};