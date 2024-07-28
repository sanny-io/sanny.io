import type { CollectionConfig } from 'payload'

export const Svgs: CollectionConfig = {
  slug: 'svgs',

  fields: [
    {
      type: 'text',
      name: 'name',
    },

    {
      type: 'code',
      name: 'code',
    },
  ],
}