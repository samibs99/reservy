"use client";

import React, { useState } from "react";

const faqs = [
  { 
    q: "Comment puis-je réserver un rendez-vous ?", 
    a: "Vous pouvez réserver un rendez-vous directement sur notre plateforme en sélectionnant votre ville, le service souhaité (coiffure, manucure, etc.) et un créneau horaire disponible. Découvrez comment commencer votre réservation en quelques clics." 
  },
  { 
    q: "Quels services sont disponibles sur la plateforme ?", 
    a: (
      <div>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Barbier</strong> : coupes modernes et soins de barbe.</li>
          <li><strong>Coiffures</strong> : coupes, colorations et styles tendance.</li>
          <li><strong>Manucure et pédicure</strong> : soins des ongles et designs.</li>
          <li><strong>Épilation</strong> : pour une peau lisse et douce.</li>
          <li><strong>Massage</strong> : traitements relaxants.</li>
        </ul>
        <p className="mt-2">Consultez tous nos <a href="/services" className="text-purple-600 hover:underline">services</a> pour plus de détails.</p>
      </div>
    )
  },
  { 
    q: "Puis-je annuler ou modifier mon rendez-vous ?", 
    a: "Oui, vous pouvez annuler ou modifier votre rendez-vous depuis votre compte selon la politique d'annulation de chaque salon. Veuillez vérifier les conditions spécifiques lors de votre réservation." 
  },
  { 
    q: "Dans quelles villes vos services sont-ils disponibles ?", 
    a: "Nos services sont disponibles dans plusieurs villes de Tunisie, notamment Tunis, Sfax, Sousse, Ariana, Nabeul, Bizerte, Gabès, Gafsa, Monastir et d'autres régions. Consultez la liste complète des villes disponibles lors de votre recherche." 
  },
  { 
    q: "Comment trouver un salon fiable près de chez moi ?", 
    a: "Utilisez notre barre de recherche en indiquant votre adresse ou ville. Vous verrez les salons les mieux notés avec leurs avis clients, leurs services et leurs disponibilités. Filtrez selon vos préférences pour trouver le salon parfait." 
  },
  { 
    q: "Y a-t-il une application mobile pour réserver ?", 
    a: "Actuellement, notre plateforme est accessible via votre navigateur web sur mobile et desktop. Une application mobile dédiée est en cours de développement et sera bientôt disponible pour iOS et Android." 
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-purple-500 uppercase text-sm text-center mb-4">QUESTIONS FRÉQUENTES</p>
        <h2 className="text-4xl font-bold text-center mb-12">Nous avons les réponses</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-800 pr-4">{faq.q}</span>
                <span className="text-2xl text-gray-600 flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600">
                  {typeof faq.a === 'string' ? <p>{faq.a}</p> : faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}