import '@/styles.css'
import type { ReactNode } from 'react'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

type Props = {
  children: ReactNode,
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
})

export default function MainLayout({ children }: Props) {
  return (
    <html
      lang='en'
      className={inter.className}
    >
      <head />

      <body>
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    default: 'sanny.io',
    template: '%s - sanny.io',
  },
}