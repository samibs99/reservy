'use client';

import { Children, isValidElement } from 'react';

// ----------------------------------------------------------------------

type CarouselProps = {
  children: React.ReactNode;
  emblaRef: any;
  className?: string;
  slideClassName?: string;
};

export function Carousel({ children, emblaRef, className = '', slideClassName = '' }: CarouselProps) {
  const renderChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return (
        <div key={index} className={`flex-[0_0_100%] min-w-0 ${slideClassName}`}>
          {child}
        </div>
      );
    }
    return null;
  });

  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
      <div className="flex -ml-4">{renderChildren}</div>
    </div>
  );
}

type CarouselArrowsProps = {
  onPrev: () => void;
  onNext: () => void;
  disabledPrev?: boolean;
  disabledNext?: boolean;
  className?: string;
};

export function CarouselArrows({
  onPrev,
  onNext,
  disabledPrev,
  disabledNext,
  className = '',
}: CarouselArrowsProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <button
        onClick={onPrev}
        disabled={disabledPrev}
        className="p-2 rounded-full bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={onNext}
        disabled={disabledNext}
        className="p-2 rounded-full bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

type CarouselDotsProps = {
  scrollSnaps: number[];
  selectedIndex: number;
  onDotClick: (index: number) => void;
  className?: string;
};

export function CarouselDots({ scrollSnaps, selectedIndex, onDotClick, className = '' }: CarouselDotsProps) {
  return (
    <div className={`flex gap-2 justify-center ${className}`}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            index === selectedIndex ? 'bg-gray-900 w-8' : 'bg-gray-300'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
