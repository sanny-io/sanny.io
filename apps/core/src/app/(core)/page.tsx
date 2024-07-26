import { AboutMe } from '@/components/about-me'
import { Agile } from '@/components/agile'
import { Experiences } from '@/components/experiences'
import { Header } from '@/components/header'
import { Projects } from '@/components/projects'
import { ResponsiveDesign } from '@/components/responsive-design'

export default function HomePage() {
  return (
    <div
      className='flex-grow'
    >
      <Header />
      <AboutMe />
      <Experiences />
      <Agile />
      <ResponsiveDesign />
      <Projects />
    </div>
  )
}