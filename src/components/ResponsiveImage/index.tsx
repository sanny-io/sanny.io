import React from 'react';

const definedScreens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '*': '5000px',
}

export type ResponsiveImageProps = {
  images: Record<string, any>,
  screens: Record<string, string>,
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function ResponsiveImage({ images, screens, className, src, ...rest }: ResponsiveImageProps) {
  return (
    <img
      src={src}
      className={className}
      // @ts-ignore
      srcSet={Object.entries(images).map(([originalImage, { default: image }]) => `${image} ${originalImage.match(/w_(\d+)/)[1]}w`).join(', ')}
      // @ts-ignore
      sizes={`${Object.keys(screens).map(screen => `(max-width: ${definedScreens[screen]}) ${screens[screen]}`).join(', ')}, ${screens['*']}`}
      {...rest}
    />
  )
}