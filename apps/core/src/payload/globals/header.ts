import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',

  // Bug in payload
  access: {
    read: ({ req }) => true,
    create: ({ req }) => true,
    delete: ({ req }) => true,
    update: ({ req }) => true,
    unlock: ({ req }) => true,
    admin: ({ req }) => true,
  },

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

    {
      type: 'array',
      name: 'socials',
      required: false,

      fields: [
        {
          type: 'text',
          name: 'tooltip',
          required: true,
        },

        {
          type: 'text',
          name: 'url',
          required: true,
        },

        {
          type: 'code',
          name: 'icon',
          required: true,
        },
      ],
    },
  ],
}