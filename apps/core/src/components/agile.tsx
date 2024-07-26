import { initializePayload } from '@/services/payload'

export async function Agile() {
  const payload = await initializePayload()
  const agile = await payload.findGlobal({
    slug: 'agile',
  })

  return (
    <div
      className='bg-black/80'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#262626'
          d='M0,288L1440,0L1440,0L0,0Z'
        >
        </path>
      </svg>

      <div
        className='container flex flex-col p-8 mx-auto mb-8 space-y-8 text-left text-white md:mb-32 lg:flex-row'
      >
        <h2
          className='mr-32 text-6xl font-black uppercase md:text-7xl lg:text-8xl'
        >
          Did <br />someone <br />say <br /><span className='text-primary'>agile</span>?
        </h2>

        <div className='pb-8 space-y-8 text-xl border-primary border-b-[3px] self-start'>

        </div>
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='rotate-180'
      >
        <path
          fill='#262626'
          d='M0,288L1440,0L1440,0L0,0Z'
        >
        </path>
      </svg>
    </div>
  )
}