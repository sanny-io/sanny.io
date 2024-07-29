import '@/styles.css'
import type { ReactNode } from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { AboutMe } from '@/components/about-me'
import { Agile } from '@/components/agile'
import { ContactMe } from '@/components/contact-me'
import { MyExperience } from '@/components/my-experience'
import { Header } from '@/components/header'
import { MyHistory } from '@/components/my-history'
import { Projects } from '@/components/projects'
import { ResponsiveDesign } from '@/components/responsive-design'
import { initializePayload } from '@/services/payload'
import { Navigation } from '@/components/navigation'

type Props = {
  children: ReactNode,
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '900'],
})

export default async function MainLayout({ children }: Props) {
  const payload = await initializePayload()

  const [
    agile,
    contactMe
  ] = await Promise.all([
    payload.findGlobal({
      slug: 'agile',
    }),

    payload.findGlobal({
      slug: 'contact-me',
    })
  ])

  return (
    <html
      lang='en'
      className={inter.className}
    >
      <head />

      <body>
        <main>
          <div
            className='flex-grow'
          >
            {children}

            <Navigation />

            <Header />
            <AboutMe />
            <MyExperience />

            <Agile
              {...agile}
            />

            <ResponsiveDesign />
            <Projects />
            <MyHistory />

            <ContactMe
              {...contactMe}
            />
          </div>
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