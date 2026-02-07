"use client";

import React from "react";

const governorates = [
  "Tunis",
  "Sfax",
  "Sousse",
  "Kairouan",
  "Bizerte",
  "Gabès",
  "Ariana",
  "Gafsa",
  "Monastir",
  "Nabeul",
  "Ben Arous",
  "Jendouba",
  "Le Kef",
  "Siliana",
  "Médenine",
  "Tataouine",
  "Tozeur",
  "Kébili",
  "Kasserine",
  "Sidi Bouzid",
  "Mahdia",
  "Manouba",
  "Béja",
  "Zaghouan"
];

const descriptionMap: Record<string, string> = {
  barbier:
    "Trouvez les meilleurs barbiers en Tunisie pour une coupe et un rasage professionnels.",
  coiffeur:
    "Découvrez les salons de coiffure pour femmes et hommes dans toute la Tunisie.",
  manucure:
    "Réservez vos soins des mains avec les meilleures manucures de Tunisie.",
  pédicure:
    "Trouvez des spécialistes en pédicure pour des pieds impeccables.",
  épilation:
    "Explorez les services d'épilation professionnels en Tunisie.",
  massage:
    "Découvrez les meilleurs massothérapeutes pour une détente totale.",
  maquillage:
    "Réservez avec les meilleures maquilleuses pour tous vos événements."
};

const cityImages: Record<string, string> = {
  Tunis:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  Sfax:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  Sousse:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  Kairouan:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  Bizerte:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  Gabès:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
};

export default function ServiceContent({ service }: { service?: string }) {
  const serviceName = service
    ? service
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Votre Prestation";

  const description = service
    ? descriptionMap[service.toLowerCase()] || `Trouvez les meilleurs professionnels en ${serviceName} en Tunisie.`
    : "Trouvez les meilleurs professionnels en Tunisie pour vos soins et prestations.";

  return (
    <div className="pt-20">
      {/* Hero + Search */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-[72px] lg:text-[84px] font-extrabold leading-tight text-gray-900 mb-8">
            Trouvez Votre Prestation Idéale
          </h1>
          <p className="text-gray-600 mb-10 text-lg">{description}</p>

          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 items-center">
              <div className="flex-1 bg-white rounded-lg shadow-md border border-gray-200 flex items-center px-4 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <input type="text" defaultValue={serviceName} className="w-full text-gray-900 placeholder-gray-400 text-base bg-transparent focus:outline-none" aria-label="Que cherchez-vous ?" />
              </div>

              <div className="flex-1 bg-white rounded-lg shadow-md border border-gray-200 flex items-center px-4 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s7-4.5 7-10.5A7 7 0 005 10.5C5 16.5 12 21 12 21z" />
                </svg>
                <input type="text" placeholder="Adresse, ville..." className="w-full text-gray-900 placeholder-gray-400 text-base bg-transparent focus:outline-none" aria-label="Où ?" />
              </div>

              <button className="h-[54px] px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">Rechercher</button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Explorez les Villes Populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governorates.map((city) => (
              <a key={city} href={`/${service}/${city.toLowerCase().replace(/\s+/g, "-")}`} className="group rounded-2xl border bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 bg-gray-100 overflow-hidden">
                  <img src={cityImages[city] || cityImages.Tunis} alt={`Ville de ${city}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5 text-center">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Découvrir nos</p>
                  <h3 className="text-lg font-semibold text-gray-900">{serviceName} à {city}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section (omitted internal comments for brevity) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Guide Complet des Soins Personnels en Tunisie</h2>

          <div className="max-w-6xl mx-auto px-4 mb-16">
            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Pourquoi les Soins Personnels Sont Essentiels</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Les soins personnels sont vitaux pour le bien-être en Tunisie, un pays où la vie active exige un équilibre. Que ce soit une pédicure relaxante ou une coupe de cheveux, ces moments réduisent le stress et boostent la confiance.</p>
                <p className="text-gray-700 leading-relaxed">Selon des experts, 30 minutes de self-care par semaine peuvent améliorer la santé mentale de 15%. Avec <a href="/" className="text-purple-600 underline">Réservy</a>, accédez facilement à ces bienfaits.</p>
              </div>

              <div>
                <div className="w-full overflow-hidden rounded-lg shadow-lg">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" alt="Soin personnel - maison" className="w-full h-[420px] md:h-[480px] lg:h-[520px] object-cover block" />
                </div>
                <p className="mt-6 text-center md:text-left text-gray-600 max-w-prose mx-auto md:mx-0">Découvrez des salons et professionnels de qualité dans toute la Tunisie — réservez facilement avec <a href="/" className="text-purple-600 underline">Réservy</a>.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1728949202468-c37fdbd76856?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800" alt="Prestations pour tous" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Prestations pour Tous : Hommes et Femmes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Les femmes adorent les pédicures et manucures à Tunis ou Sfax, tandis que les hommes optent pour des soins de barbe à Bizerte. Nos partenaires offrent des services variés, de l'épilation aux massages.</p>
              <p className="text-gray-700 leading-relaxed">Explorez nos pédicures pour des pieds impeccables. Réservy connecte tous les Tunisiens aux meilleurs professionnels, quel que soit votre style ou vos préférences.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">la Simplicité de Réserver avec Réservy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Oubliez les appels interminables : avec Réservy, réservez une pédicure à Nabeul ou une coupe à Gabès en ligne. Notre plateforme, utilisée dans 24 régions, inclut des filtres et avis clients.</p>
              <p className="text-gray-700 leading-relaxed">Découvrez comment ça marche pour une expérience fluide. Réservez en quelques clics, sans complications. C'est rapide, simple et transparent.</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800" alt="Réservation en ligne" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
          </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Bienfaits Durables du Self-Care</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Une pédicure régulière améliore la posture, tandis qu'une coupe nette renforce l'image professionnelle. Réservy dessert Ariana, Kairouan et plus, avec des salons variés. </p>
              <p className="text-gray-700 leading-relaxed">Lisez nos témoignages pour vous motiver. Les soins réguliers ne sont pas qu'une question de beauté, c'est aussi un investissement dans votre bien-être global et votre santé mentale.</p>
            </div>

              <div>
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Bien-être self-care" className="w-full h-96 object-cover rounded-lg shadow-lg" />
              </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Démarrer routine soins" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Démarrez Votre Routine de Soins</h3>
              <p className="text-gray-700 leading-relaxed mb-4">En Tunisie, Réservy rend les soins personnels accessibles avec des milliers de réservations mensuelles. Réservez une pédicure à Monastir via notre site ou suivez-nous sur les réseaux sociaux pour des conseils.</p>
              <p className="text-gray-700 leading-relaxed">Commencez dès aujourd'hui à prendre soin de vous. Que vous cherchiez une coupe simple ou un moment complet de détente, Réservy est là pour vous connecter aux meilleurs professionnels.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
