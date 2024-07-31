import ExportedImage from 'next-image-export-optimizer'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof ExportedImage>

export function OptimizedImage({ src, ...props }: Props) {
  return (
    <ExportedImage
      src={`${process.env.NEXT_PUBLIC_DEPLOYED_URL}${src}`}
      {...props}
    />
  )
}