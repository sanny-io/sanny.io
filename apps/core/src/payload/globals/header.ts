import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',

  fields: [
    {
      type: 'text',
      name: 'name',
      required: true,
    },

    {
      type: 'text',
      name: 'title',
      required: true,
    },

    {
      type: 'upload',
      name: 'image',
      relationTo: 'media',
      required: true,
    },
  ],
}