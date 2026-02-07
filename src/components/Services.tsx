"use client";

import React, { useState } from "react";

export default function Services() {
  const services = [
    { 
      title: "Barbier", 
      description: "Des coupes modernes et des soins de barbe impeccables pour un look soigné.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=500&fit=crop"
    },
    { 
      title: "Coiffures", 
      description: "Coupes, colorations et coiffures tendance adaptées à votre style.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=500&fit=crop"
    },
    { 
      title: "Manucure", 
      description: "Soins des ongles et designs personnalisés pour des mains élégantes.",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=500&fit=crop"
    },
    { 
      title: "Pédicure", 
      description: "Traitements relaxants pour des pieds doux et esthétiques.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=500&fit=crop"
    },
    { 
      title: "Épilation", 
      description: "Épilation professionnelle pour une peau lisse et douce.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
    },
    { 
      title: "Massage", 
      description: "Massages relaxants pour soulager le stress et revitaliser votre corps.",
      image: "https://www.lesjardins-suspendus.com/wp-content/uploads/2022/03/massage-bienfait-scaled.jpg"
    },
    { 
      title: "Maquillage", 
      description: "Maquillage professionnel pour toutes les occasions, du naturel au glamour.",
      image: "https://cdn.flaconi.fr/media/cms/wimpern-tuschen-01.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const visibleServices = [
    services[currentIndex],
    services[(currentIndex + 1) % services.length],
    services[(currentIndex + 2) % services.length]
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-gray-400 uppercase text-sm text-center mb-4">NOS SERVICES</p>
        <h2 className="text-4xl font-bold text-center mb-4">Découvrez nos prestations de beauté</h2>
        <p className="text-center text-gray-600 mb-12">Découvrez nos prestations, Découvrez nos prestations</p>
        
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleServices.map((service, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden h-96 group">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm mb-4">{service.description}</p>
                  <button className="text-sm font-semibold flex items-center gap-2 hover:gap-3 transition">
                    DÉCOUVRIR <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Boutons de navigation */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition"
          >
            ‹
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}