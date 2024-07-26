// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres' // database-adapter-import
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from '@/payload/collections/users'
import { Media } from '@/payload/collections/media'
import { Svg } from '@/payload/collections/svg'

import { AboutMe } from '@/payload/globals/about-me'
import { Agile } from '@/payload/globals/agile'
import { Experiences } from '@/payload/globals/experiences'
import { Header } from '@/payload/globals/header'
import { Projects } from '@/payload/globals/projects'
import { ResponsiveDesign } from '@/payload/globals/responsive-design'
import { Histories } from '@/payload/globals/histories'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Svg],
  globals: [Header, AboutMe, Experiences, Agile, ResponsiveDesign, Projects, Histories],
  editor: lexicalEditor(),
  secret: 'sanny.io',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // database-adapter-config-start
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  // database-adapter-config-end
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
