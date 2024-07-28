import '@/styles.css'
import type { ReactNode } from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

type Props = {
  children: ReactNode,
  project: ReactNode,
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '900'],
})

export default function MainLayout({ children, project }: Props) {
  return (
    <html
      lang='en'
      className={inter.className}
    >
      <head />

      <body>
        <main>
          {children}
          {project}
        </main>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    default: 'Sanny Sherief',
    template: '%s - sanny.io',
  },

  description: 'Portfolio of Sanny Sherief',
}