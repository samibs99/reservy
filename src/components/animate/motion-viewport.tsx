'use client';

import { m } from 'framer-motion';
import { forwardRef } from 'react';
import { useResponsive } from '@/hooks/use-responsive';
import { varContainer } from './variants';

// ----------------------------------------------------------------------

type MotionViewportProps = {
  children: React.ReactNode;
  disableAnimate?: boolean;
  className?: string;
  [key: string]: any;
};

export const MotionViewport = forwardRef<HTMLDivElement, MotionViewportProps>(
  ({ children, disableAnimate = true, className, ...other }, ref) => {
    const smDown = useResponsive('down', 'sm');

    const disabled = smDown && disableAnimate;

    if (disabled) {
      return (
        <div ref={ref} className={className} {...other}>
          {children}
        </div>
      );
    }

    return (
      <m.div
        ref={ref}
        initial="initial"
        whileInView="animate"
        variants={varContainer()}
        viewport={{ once: true, amount: 0.3 }}
        className={className}
        {...other}
      >
        {children}
      </m.div>
    );
  }
);

MotionViewport.displayName = 'MotionViewport';
