// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres' // database-adapter-import
import { mongooseAdapter } from '@payloadcms/db-mongodb'
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
import { Navigation } from '@/payload/globals/navigation'
import { ContactMe } from '@/payload/globals/contact-me'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Svg],
  globals: [Header, AboutMe, Experiences, Agile, ResponsiveDesign, Projects, Histories, ContactMe, Navigation],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET!,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // database-adapter-config-start
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  // db: mongooseAdapter({
  //   url: process.env.MONGO_URL!,
  // }),
  // database-adapter-config-end
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
