"use client";

import React, { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Excellent service ! J'ai réservé un rendez-vous chez un barbier à Tunis en quelques clics. Super simple et rapide !",
      author: "Lucian Obrien",
      date: "03 Feb 2026",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      text: "J'adore cette plateforme ! J'ai trouvé un salon de coiffure à Sousse qui correspond parfaitement à mes besoins. L'interface est intuitive, et la réservation est tellement pratique. Bravo à l'équipe pour ce travail incroyable !",
      author: "Deja Brady",
      date: "02 Feb 2026",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      text: "Le service client est rapide et très efficace. J'avais une question sur ma réservation pour une manucure à Nabeul, et ils m'ont répondu en quelques minutes. L'application est magnifique et facile à utiliser !",
      author: "Harrison Stein",
      date: "01 Feb 2026",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    {
      text: "Vraiment impressionnant ! J'ai réservé une séance d'épilation à Ariana, et tout s'est déroulé sans problème. La plateforme est bien conçue et offre plein d'options.",
      author: "Reece Chung",
      date: "31 Jan 2026",
      rating: 1,
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    {
      text: "J'avais quelques doutes avant de réserver un massage à Monastir, mais l'équipe m'a guidé rapidement. La plateforme est intuitive.",
      author: "Marie Dubois",
      date: "30 Jan 2026",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
      text: "En tant que cliente régulière, je trouve que cette plateforme simplifie vraiment la réservation de mes rendez-vous beauté.",
      author: "Sophie Martin",
      date: "29 Jan 2026",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=20"
    }
  ];

  const handleScroll = (direction: 'up' | 'down') => {
    const container = document.getElementById('testimonials-container');
    if (container) {
      const scrollAmount = 350;
      if (direction === 'down') {
        container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Image de fond floue avec overlay sombre */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600" 
          alt="background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-[45%_55%] gap-16 items-start">
          {/* Colonne gauche - Texte */}
          <div className="pt-8">
            <p className="text-gray-500 uppercase text-xs tracking-wider mb-6">TÉMOIGNAGES</p>
            <h2 className="text-5xl font-bold mb-8 leading-tight">Ce qu'ils pensent<br/>de nous</h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-base">
              Notre objectif est de vous offrir une plateforme de réservation de services de beauté qui vous satisfait pleinement et que vous utilisez au quotidien. C'est pourquoi nous améliorons constamment nos services pour répondre à vos besoins et écoutons attentivement vos retours.
            </p>
            <button className="text-purple-500 font-semibold hover:text-purple-400 flex items-center gap-2 text-sm">
              Lire plus <span className="text-lg">→</span>
            </button>
          </div>
          
          {/* Colonne droite - Grille de témoignages 2x3 avec scroll */}
          <div className="relative">
            <div 
              id="testimonials-container"
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:max-h-[650px] md:overflow-y-auto md:pr-2 scrollbar-hidden"
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gray-800/70 backdrop-blur-sm p-5 rounded-xl">
                  <p className="text-4xl text-gray-700 mb-3 leading-none font-serif">"</p>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed min-h-[80px]">{testimonial.text}</p>
                  <div className="flex text-yellow-400 mb-4 text-base">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < testimonial.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                      <div className="text-xs text-gray-500">{testimonial.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicateur de scroll (optionnel) */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="w-full h-1/3 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}