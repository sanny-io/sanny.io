import type { CollectionConfig } from 'payload'

export const Svg: CollectionConfig = {
  slug: 'svg',

  upload: {
    staticDir: 'media',
    mimeTypes: ['image/svg+xml'],
  },

  fields: [],
}