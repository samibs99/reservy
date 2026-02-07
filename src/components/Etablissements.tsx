import React from "react";

const services = [
  {
    name: "Barbier",
    icon: "✂️",
    description: "Nos barbier populaires en Tunisie",
    cities: ["Tunis", "Sfax", "Sousse", "Ariana", "Nabeul", "Bizerte", "Gabès", "Gafsa", "Monastir"]
  },
  {
    name: "Coiffures",
    icon: "💇",
    description: "Nos salons de coiffure populaires en Tunisie",
    cities: ["Tunis", "Sfax", "Sousse", "Ariana", "Nabeul", "Bizerte", "Gabès", "Gafsa", "Monastir"]
  },
  {
    name: "Manucure",
    icon: "💅",
    description: "Nos salons de manucure populaires en Tunisie",
    cities: ["Tunis", "Sfax", "Sousse", "Ariana", "Nabeul", "Bizerte", "Gabès", "Gafsa", "Monastir"]
  },
  {
    name: "Pédicure",
    icon: "🦶",
    description: "Nos salons de pédicure populaire en Tunisie",
    cities: ["Tunis", "Sfax", "Sousse", "Ariana", "Nabeul", "Bizerte", "Gabès", "Gafsa", "Monastir"]
  },
  {
    name: "Épilation",
    icon: "✨",
    description: "Nos salon d'épilation populaire en Tunisie",
    cities: ["Tunis", "Sfax", "Sousse", "Ariana", "Nabeul", "Bizerte", "Gabès", "Gafsa", "Monastir"]
  }
];

export default function Etablissements() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-gray-400 uppercase text-sm text-center mb-4">NOS SERVICES</p>
        <h2 className="text-4xl font-bold text-center mb-12">Trouvez vos soins de beauté partout en Tunisie</h2>
        
        <div className="grid md:grid-cols-5 gap-8">
          {services.map((service) => (
            <div key={service.name} className="text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.cities.map((city) => (
                  <li key={city} className="text-gray-700 text-sm hover:text-purple-600 cursor-pointer">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
