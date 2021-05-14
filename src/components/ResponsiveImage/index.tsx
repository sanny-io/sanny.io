import React from 'react';
import rawTailwindConfig from '../../../tailwind.config.js?raw';

// Ugly hack to parse the screens configuration because it can't be imported.
// @ts-ignore
const definedScreens = eval(`(${rawTailwindConfig.match(/screens:\s*({(?:.|\n)*?})/)[1]})`);
definedScreens['*'] = '5000px';

export type ResponsiveImageProps = {
  images: Record<string, any>,
  screens: Record<string, string>,
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function ResponsiveImage({ images, screens, className, src }: ResponsiveImageProps) {
  return (
    <img
      src={src}
      className={className}
      // @ts-ignore
      srcSet={Object.keys(images).map(image => `${image} ${image.match(/w_(\d+)/)[1]}w`).join(', ')}
      sizes={`${Object.keys(screens).map(screen => `(max-width: ${definedScreens[screen]}) ${screens[screen]}`).join(', ')}, ${screens['*']}`}
    />
  )
}