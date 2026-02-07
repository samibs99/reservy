"use client";

import React from "react";
import { useCarousel } from "@/components/carousel";
import { Image } from "@/components/image";
import { Iconify } from "@/components/iconify";

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

  const carousel = useCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-gray-400 uppercase text-sm text-center mb-4">NOS SERVICES</p>
        <h2 className="text-4xl font-bold text-center mb-4">Découvrez nos prestations de beauté</h2>
        <p className="text-center text-gray-600 mb-12">Découvrez nos prestations, Découvrez nos prestations</p>
        
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={carousel.emblaRef}>
            <div className="flex -ml-6">
              {services.map((service, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_33.333%]">
                  <div className="relative rounded-2xl overflow-hidden h-96 group">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full"
                      visibleByDefault={idx < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-sm mb-4">{service.description}</p>
                      <button className="text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        DÉCOUVRIR <Iconify icon="mdi:arrow-right" width={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={carousel.onPrevButtonClick}
            disabled={carousel.prevBtnDisabled}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <Iconify icon="mdi:chevron-left" width={24} />
          </button>
          <button 
            onClick={carousel.onNextButtonClick}
            disabled={carousel.nextBtnDisabled}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <Iconify icon="mdi:chevron-right" width={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {carousel.scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => carousel.onDotButtonClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === carousel.selectedIndex
                  ? 'bg-gray-900 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}