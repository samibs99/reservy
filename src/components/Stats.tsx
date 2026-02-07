import React from "react";

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <p className="text-purple-500 uppercase text-sm mb-4">LA MEILLEUR FAÇON DE RÉSERVER VOS SOINS BEAUTÉ</p>
        <h2 className="text-4xl font-bold mb-16">La beauté à portée de clic partout en Tunisie</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">25.6k+</div>
          <div className="text-gray-600">Rendez-vous réservés</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">320+</div>
          <div className="text-gray-600">Salons partenaires</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">98%</div>
          <div className="text-gray-600">Clients satisfaits</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">24</div>
          <div className="text-gray-600">Régions couvertes</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">2+</div>
          <div className="text-gray-600">Services proposés</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">4.8/5</div>
          <div className="text-gray-600">Note moyenne</div>
        </div>
      </div>
    </section>
  );
}