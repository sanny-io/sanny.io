import { AboutMe } from '@/components/about-me'
import { Header } from '@/components/header'

export default function HomePage() {
  return (
    <div
      className='flex-grow'
    >
      <Header />
      <AboutMe />
    </div>
  )
}