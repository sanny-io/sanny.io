import { initializePayload } from '@/services/payload'

const stringifyDate = (date: Date) => `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`

export async function Histories() {
  const payload = await initializePayload()
  const histories = await payload.findGlobal({
    slug: 'histories',
  })

  return (
    <section
      id='histories'
      className='container px-4 py-16 mx-auto text-white md:px-32'
    >
      <hr
        className='mb-16 border-t-2 border-primary'
      />

      <h2
        className='mb-16 text-5xl tracking-widest text-center uppercase lg:text-left lg:mb-24 md:text-6xl'
      >
        {histories.title}
      </h2>

      <ol
        className='flex flex-col space-y-6'
      >
        {
          histories.histories?.map(history => (
            <div
              key={history.id}
              className='w-full p-4 duration-300 bg-gray-900 border border-gray-800 rounded hover:bg-gray-800'
            >
              <h3
                className={`inline-block mb-2 text-4xl font-semibold ${history.url ? 'hover:text-primary/90' : ''}`}>
                <a
                  href={history.url!}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {history.name}
                </a>
              </h3>

              <p
                className='mb-1 text-xl font-light uppercase text'
              >
                {history.title}
              </p>

              <p
                className='mb-4'
              >
                {`${stringifyDate(new Date(history.start))} - ${history.end ? stringifyDate(new Date(history.end)) : 'Present'}`}
              </p>

              <hr
                className='w-64 mb-4 border-t-2 border-primary'
              />

              <div
                className='prose'

                dangerouslySetInnerHTML={{
                  __html: history.descriptionHtml!,
                }}
              />
            </div>
          ))
        }
      </ol>
    </section>
  )
}