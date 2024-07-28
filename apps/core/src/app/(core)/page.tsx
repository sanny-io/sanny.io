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

export default async function HomePage() {
  const payload = await initializePayload()

  // const agile = await payload.findGlobal({
  //   slug: 'agile',
  // })

  // const contactMe = await payload.findGlobal({
  //   slug: 'contact-me',
  // })

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
    <div
      className='flex-grow'
    >
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
  )
}