"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const renderWavy = (text: string, className?: string) => (
    <span className={`wavy ${className ?? ""}`} aria-hidden="true">
      {text.split("").map((char, index) => (
        <span key={`${text}-${index}`} style={{ animationDelay: `${index * 0.06}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );

  const serviceOptions = [
    "Barbier",
    "Coiffeur",
    "Manucure",
    "Pédicure",
    "Épilation",
    "Massage",
    "Maquillage"
  ];

  const governorateOptions = [
    "Ariana",
    "Béja",
    "Ben Arous",
    "Bizerte",
    "Gabès",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kébili",
    "Le Kef",
    "Mahdia",
    "Manouba",
    "Médenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan"
  ];

  const [serviceQuery, setServiceQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  const filteredServices = useMemo(() => {
    const q = serviceQuery.trim().toLowerCase();
    return q
      ? serviceOptions.filter((opt) => opt.toLowerCase().includes(q))
      : serviceOptions;
  }, [serviceQuery]);

  const filteredGovernorates = useMemo(() => {
    const q = locationQuery.trim().toLowerCase();
    return q
      ? governorateOptions.filter((opt) => opt.toLowerCase().includes(q))
      : governorateOptions;
  }, [locationQuery]);

  return (
    <section className="relative bg-gray-800 text-white py-32" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span className="sr-only">Réserver en beauté</span>
          {renderWavy("Réserver", "text-purple-500")}
          <span className="inline-block w-3" aria-hidden="true" />
          {renderWavy("en beauté")}
        </h1>
        <p className="text-3xl mb-8">
          <span className="sr-only">Simple et toujours disponible</span>
          {renderWavy("Simple et toujours disponible")}
        </p>
        
        <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto shadow-2xl">
          <div className="grid md:grid-cols-[2fr_1fr_auto] gap-4 items-end">
            <div className="text-left relative">
              <label className="text-gray-700 text-sm mb-2 block">Que cherchez-vous ? *</label>
              <input 
                type="text" 
                placeholder="Nom du salon, prestations (coupe...)"
                className="w-full px-4 py-3 border rounded-md text-gray-900"
                value={serviceQuery}
                onChange={(e) => {
                  setServiceQuery(e.target.value);
                  setServiceOpen(true);
                }}
                onFocus={() => setServiceOpen(true)}
                onBlur={() => setServiceOpen(false)}
              />
              {serviceOpen && filteredServices.length > 0 && (
                <ul className="absolute z-20 mt-2 w-full max-h-64 overflow-auto rounded-md border bg-white text-gray-900 shadow-lg">
                  {filteredServices.map((opt) => (
                    <li
                      key={opt}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onMouseDown={() => {
                        setServiceQuery(opt);
                        setServiceOpen(false);
                        router.push(`/${opt.toLowerCase().replace(/\s+/g, '-')}`);
                      }}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="text-left relative">
              <label className="text-gray-700 text-sm mb-2 block">Où ?</label>
              <input 
                type="text" 
                placeholder="Adresse, ville..."
                className="w-full px-4 py-3 border rounded-md text-gray-900"
                value={locationQuery}
                onChange={(e) => {
                  setLocationQuery(e.target.value);
                  setLocationOpen(true);
                }}
                onFocus={() => setLocationOpen(true)}
                onBlur={() => setLocationOpen(false)}
              />
              {locationOpen && filteredGovernorates.length > 0 && (
                <ul className="absolute z-20 mt-2 w-full max-h-64 overflow-auto rounded-md border bg-white text-gray-900 shadow-lg">
                  {filteredGovernorates.map((opt) => (
                    <li
                      key={opt}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onMouseDown={() => {
                        setLocationQuery(opt);
                        setLocationOpen(false);
                      }}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="px-8 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 h-[50px]">
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}