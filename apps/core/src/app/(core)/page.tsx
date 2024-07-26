import { AboutMe } from '@/components/about-me'
import { Agile } from '@/components/agile'
import { Experiences } from '@/components/experiences'
import { Header } from '@/components/header'

export default function HomePage() {
  return (
    <div
      className='flex-grow'
    >
      <Header />
      <AboutMe />
      <Experiences />
      <Agile />
    </div>
  )
}