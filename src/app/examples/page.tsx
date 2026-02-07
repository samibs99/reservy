'use client';

import { Iconify } from '@/components/iconify';
import { Image } from '@/components/image';
import { Carousel, CarouselArrows, CarouselDots, useCarousel } from '@/components/carousel';
import { useBoolean } from '@/hooks/use-boolean';
import { m } from 'framer-motion';
import { varFade } from '@/components/animate';

// ----------------------------------------------------------------------

export default function ExamplePage() {
  const modal = useBoolean();

  const carousel = useCarousel({
    loop: true,
  });

  const images = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Exemples de composants du template</h1>

      {/* Iconify Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Composant Iconify</h2>
        <div className="flex gap-4 items-center">
          <Iconify icon="mdi:home" width={32} className="text-blue-500" />
          <Iconify icon="mdi:account" width={32} className="text-green-500" />
          <Iconify icon="mdi:heart" width={32} className="text-red-500" />
          <Iconify icon="mdi:star" width={32} className="text-yellow-500" />
        </div>
      </section>

      {/* Image Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Composant Image avec lazy loading</h2>
        <div className="grid grid-cols-3 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400"
            alt="Salon 1"
            ratio="1/1"
            className="rounded-lg"
          />
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400"
            alt="Salon 2"
            ratio="1/1"
            className="rounded-lg"
          />
          <Image
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400"
            alt="Salon 3"
            ratio="1/1"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Boolean Hook Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Hook useBoolean</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <button
              onClick={modal.onToggle}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Toggle Modal
            </button>
            <button
              onClick={modal.onTrue}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Open Modal
            </button>
            <button
              onClick={modal.onFalse}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Close Modal
            </button>
          </div>

          {modal.value && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-900">Le modal est ouvert !</p>
            </div>
          )}
        </div>
      </section>

      {/* Carousel Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Carousel</h2>
        <div className="relative">
          <Carousel emblaRef={carousel.emblaRef} slideClassName="pl-4">
            {images.map((image, index) => (
              <div key={index} className="relative h-96">
                <Image
                  src={`${image}?w=800`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full rounded-xl"
                />
              </div>
            ))}
          </Carousel>

          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
            <CarouselArrows
              onPrev={carousel.onPrevButtonClick}
              onNext={carousel.onNextButtonClick}
              disabledPrev={carousel.prevBtnDisabled}
              disabledNext={carousel.nextBtnDisabled}
            />
          </div>

          <CarouselDots
            scrollSnaps={carousel.scrollSnaps}
            selectedIndex={carousel.selectedIndex}
            onDotClick={carousel.onDotButtonClick}
            className="mt-4"
          />
        </div>
      </section>

      {/* Animation Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Animations Framer Motion</h2>
        <div className="grid grid-cols-3 gap-4">
          <m.div
            {...varFade().inUp}
            className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white"
          >
            <h3 className="font-bold text-xl mb-2">Fade In Up</h3>
            <p>Animation depuis le bas</p>
          </m.div>

          <m.div
            {...varFade().inLeft}
            className="p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg text-white"
          >
            <h3 className="font-bold text-xl mb-2">Fade In Left</h3>
            <p>Animation depuis la gauche</p>
          </m.div>

          <m.div
            {...varFade().inRight}
            className="p-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg text-white"
          >
            <h3 className="font-bold text-xl mb-2">Fade In Right</h3>
            <p>Animation depuis la droite</p>
          </m.div>
        </div>
      </section>
    </div>
  );
}
