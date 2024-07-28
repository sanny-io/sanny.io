import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',

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