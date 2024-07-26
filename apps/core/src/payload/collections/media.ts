import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',

  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
  },

  fields: [
    {
      type: 'text',
      name: 'alt',
    },
  ],
}