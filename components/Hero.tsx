import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-ibmr-green overflow-hidden min-h-[600px] flex items-center">
      {/* Background patterns/texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 lg:px-12 grid md:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Left Text Content */}
        <div className="text-white space-y-4">
            <h2 className="text-lg md:text-xl font-light uppercase tracking-widest opacity-90">
                O futuro do seu negócio começa aqui
            </h2>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
                MEI<br/>
                <span className="text-emerald-400">JOVEM</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-lg mt-4 leading-snug">
                Transforme sua paixão em uma empresa real.
                <br/>
                <span className="text-emerald-300">Apoio completo para iniciar.</span>
            </p>
            <div className="pt-4">
                 <p className="text-xs text-right w-fit ml-auto rotate-90 origin-bottom-left absolute right-0 top-1/2 opacity-50 hidden lg:block">
                    *Consulte condições no site.
                </p>
            </div>
        </div>

        {/* Right Image Content */}
        <div className="relative h-full flex justify-center md:justify-end items-end">
            <div className="relative w-full max-w-md md:max-w-lg aspect-square">
                {/* Green Circle decorative background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl"></div>
                
                <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Jovem empreendedora sorrindo" 
                    className="object-cover relative z-10 rounded-xl shadow-2xl border-4 border-white/10"
                />
                
                <div className="absolute bottom-8 -left-8 bg-black/30 backdrop-blur-md p-4 rounded text-white border-l-4 border-emerald-400 z-20">
                    <p className="font-bold">Ana Silva</p>
                    <p className="text-xs opacity-80">CEO da DesignCriativo (MEI)</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};