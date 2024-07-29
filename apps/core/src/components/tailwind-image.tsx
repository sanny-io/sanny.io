import Image from 'next/image'
import { ComponentProps } from 'react'

type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const sizes: Record<Size, number> = {
  '2xl': 1400,
  'xl': 1280,
  'lg': 1024,
  'md': 768,
  'sm': 640,
}

type Props = Omit<ComponentProps<typeof Image>, 'sizes'> & {
  sizes?: Partial<Record<Size, number>>
  size?: number,
}

export function TailwindImage({ sizes: sizesProp, size: sizeProp, ...props }: Props) {
  const sizesStringArray = sizesProp
    ? Object.entries(sizesProp).map(([size, width]) => (
      `(max-width: ${sizes[size as Size]}px) ${width}vw`
    ))
    : []

  const sizesString = `${sizesStringArray.join(', ')}${sizeProp ? `, ${sizeProp}vw` : ''}`

  return (
    <Image
      {...props}
      sizes={sizesStringArray.length ? sizesString : sizeProp ? `${sizeProp}vw` : undefined}
    />
  )
}