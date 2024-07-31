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
import { Svgs } from '@/payload/collections/svgs'

import { AboutMe } from '@/payload/globals/about-me'
import { Agile } from '@/payload/globals/agile'
import { MyExperience } from '@/payload/globals/my-experience'
import { Header } from '@/payload/globals/header'
import { Projects } from '@/payload/globals/projects'
import { ResponsiveDesign } from '@/payload/globals/responsive-design'
import { MyHistory } from '@/payload/globals/my-history'
import { Navigation } from '@/payload/globals/navigation'
import { ContactMe } from '@/payload/globals/contact-me'

import { gcsStorage } from '@payloadcms/storage-gcs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Svgs],
  globals: [Header, AboutMe, MyExperience, Agile, ResponsiveDesign, Projects, MyHistory, ContactMe, Navigation],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET!,
  rateLimit: {
    trustProxy: true,
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  csrf: [
    'https://sanny.io',
  ],
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
    // @ts-ignore
    gcsStorage({
      bucket: process.env.GCS_BUCKET!,

      collections: {
        media: true,
      },

      options: {
        credentials: JSON.parse(Buffer.from(process.env.GCS_CREDENTIALS!, 'base64').toString()),
      },
    })
  ],
})
