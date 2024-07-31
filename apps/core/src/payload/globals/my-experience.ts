import type { GlobalConfig } from 'payload'

export const MyExperience: GlobalConfig = {
  slug: 'my-experience',
  label: 'Experience',

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
      name: 'title',
      required: true,
    },

    {
      type: 'array',
      name: 'experiences',
      label: 'Experience',

      fields: [
        {
          type: 'text',
          name: 'name',
          required: true,
        },

        {
          type: 'text',
          name: 'description',
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