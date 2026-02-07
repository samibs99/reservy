'use client';

import { forwardRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

type ImageProps = {
  src: string;
  alt?: string;
  ratio?: string;
  className?: string;
  disabledEffect?: boolean;
  visibleByDefault?: boolean;
  [key: string]: any;
};

export const Image = forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      alt = '',
      src,
      ratio,
      className = '',
      disabledEffect = false,
      visibleByDefault = false,
      ...other
    },
    ref
  ) => {
    const wrapperClassName = `relative inline-block overflow-hidden ${ratio ? 'w-full' : ''} ${className}`;

    const imageStyles: React.CSSProperties = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      verticalAlign: 'bottom',
      ...(ratio && { aspectRatio: ratio }),
    };

    return (
      <span ref={ref} className={wrapperClassName} {...other}>
        <LazyLoadImage
          alt={alt}
          src={src}
          effect={visibleByDefault || disabledEffect ? undefined : 'blur'}
          visibleByDefault={visibleByDefault}
          wrapperClassName="w-full h-full"
          style={imageStyles}
          placeholderSrc={
            disabledEffect
              ? undefined
              : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
          }
        />
      </span>
    );
  }
);

Image.displayName = 'Image';
