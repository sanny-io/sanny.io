import { Image as CloudinaryImage } from 'cloudinary-react';

export default function Image({ src, alt, ...rest }) {
  return (
    <CloudinaryImage
      responsive
      publicId={src}
      dpr="auto"
      width="auto"
      crop="crop"
      alt={alt}
      responsiveUseBreakpoints="true"
      {...rest}
    />);
}