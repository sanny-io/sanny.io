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
  const contactMe = await payload.findGlobal({
    slug: 'contact-me',
  })

  return (
    <div
      className='flex-grow'
    >
      <Navigation />

      <Header />
      <AboutMe />
      <MyExperience />
      <Agile />
      <ResponsiveDesign />
      <Projects />
      <MyHistory />

      <ContactMe
        title={contactMe.title}
        description={contactMe.description}
      />
    </div>
  )
}