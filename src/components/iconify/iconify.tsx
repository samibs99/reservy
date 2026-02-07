'use client';

import { forwardRef } from 'react';
import { Icon, disableCache } from '@iconify/react';

// ----------------------------------------------------------------------

export const Iconify = forwardRef<
  SVGElement,
  {
    icon: string;
    width?: number | string;
    className?: string;
    [key: string]: any;
  }
>(({ icon, width = 20, className, ...other }, ref) => {
  return (
    <Icon
      ref={ref as any}
      icon={icon}
      width={width}
      height={width}
      className={className}
      {...other}
    />
  );
});

Iconify.displayName = 'Iconify';

// https://iconify.design/docs/iconify-icon/disable-cache.html
disableCache('local');
