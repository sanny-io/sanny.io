import { initializePayload } from '@/services/payload'

export async function Navigation() {
  const payload = await initializePayload()
  const navigation = await payload.findGlobal({
    slug: 'navigation',
  })

  return (
    <nav
      className='fixed z-10 hidden p-2 text-gray-200 transform -translate-y-1/2 bg-gray-900 border border-gray-800 shadow-2xl lg:block top-1/2 left-8'
    >
      <ul
        className='grid grid-cols-1 gap-y-4'
      >
        {
          navigation.links?.map(link => (
            <li
              key={link.id}
              className='hover:text-secondary'
            >
              <a
                href={link.url}
                title={link.name}
              >
                <div
                  className='w-5'

                  dangerouslySetInnerHTML={{
                    __html: link.icon,
                  }}
                />
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}