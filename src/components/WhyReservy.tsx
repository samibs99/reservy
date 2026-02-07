import React from "react";

export default function WhyReservy() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Texte */}
          <div>
            <p className="text-gray-400 uppercase text-sm mb-4">LA MEILLEUR FAÇON DE RÉSERVER VOS SOINS BEAUTÉ</p>
            <h2 className="text-4xl font-bold mb-8">Pourquoi Reservy?</h2>
            
            <div className="space-y-8">
              {/* Offre 1 */}
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">〰️</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Des offres toutes douces</h3>
                  <p className="text-gray-600">Réservez dès à présent des offres de dernière minute ou heures creuses</p>
                </div>
              </div>

              {/* Offre 2 */}
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">📍</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Réservez 24h/24 et 7j/7</h3>
                  <p className="text-gray-600">Depuis votre lit ou dans le bus.</p>
                </div>
              </div>

              {/* Offre 3 */}
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">💻</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Des choix d'établissements top-rated</h3>
                  <p className="text-gray-600">Des milliers d'établissements (et d'avis) disponibles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Images */}
          <div className="grid grid-cols-2 gap-4 h-96">
            <img 
              src="https://images.ctfassets.net/0xsz2r7o7t3z/3gmwLOeWLzGyDg34N78efR/fc65c55b94922c4b86c9372c37adba94/Soin_complet_du_visage.jpg" 
              alt="Soin du visage" 
              className="rounded-lg object-cover h-48"
            />
            <img 
              src="https://media.istockphoto.com/id/184615483/fr/photo/produits-cosm%C3%A9tiques-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=5X_DQ2x5qXZtyO4GJ6HB8lE3ZwKD-eiqr-CGSjGRoYg=" 
              alt="Beauté" 
              className="rounded-lg object-cover h-48"
            />
            <img 
              src="https://static.toiimg.com/thumb/msid-122860262,imgsize-24920,width-400,resizemode-4/9-tips-to-wake-up-early-and-feel-refreshed-every-day.jpg" 
              alt="Bien-être" 
              className="rounded-lg object-cover h-48"
            />
            <img 
              src="https://www.lesjardins-suspendus.com/wp-content/uploads/2022/03/massage-bienfait-scaled.jpg" 
              alt="Massage" 
              className="rounded-lg object-cover h-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
}