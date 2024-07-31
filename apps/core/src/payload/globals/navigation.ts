import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',

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
      type: 'array',
      name: 'links',

      fields: [
        {
          type: 'text',
          name: 'name',
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
    }
  ],
}