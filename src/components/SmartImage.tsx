'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toWebpSrc } from '../../lib/image';

type SmartImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

export default function SmartImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  priority,
}: SmartImageProps) {
  const webpSrc = toWebpSrc(src);
  const [activeSrc, setActiveSrc] = useState(webpSrc);

  useEffect(() => {
    setActiveSrc(webpSrc);
  }, [webpSrc]);

  return (
    <Image
      src={activeSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={priority}
      onError={() => {
        if (activeSrc !== src) {
          setActiveSrc(src);
        }
      }}
    />
  );
}
