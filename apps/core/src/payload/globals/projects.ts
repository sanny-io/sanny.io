import type { GlobalConfig } from 'payload'

export const Projects: GlobalConfig = {
  slug: 'projects',

  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },

    {
      type: 'array',
      name: 'projects',

      fields: [
        {
          type: 'text',
          name: 'name',
          required: true,
        },

        {
          type: 'text',
          name: 'liveUrl',
          required: false,
        },

        {
          type: 'text',
          name: 'sourceUrl',
          required: false,
        },

        {
          type: 'textarea',
          name: 'lede',
          required: true,
        },

        {
          type: 'richText',
          name: 'description',
          required: true,
        },

        {
          type: 'text',
          name: 'tags',
          required: false,
          hasMany: true,
        },
      ],
    }
  ],
}