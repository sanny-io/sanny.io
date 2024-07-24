import '@/styles.css'
import type { ReactNode } from 'react'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

type Props = {
  children: ReactNode,
}

export default function MainLayout({ children }: Props) {
  return (
    <html
      lang='en'
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
    default: 'Untitled',
    template: '%s - Untitled',
  },
}