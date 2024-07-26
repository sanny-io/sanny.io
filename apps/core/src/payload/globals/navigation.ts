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
          name: 'link',
          required: true,
        },

        {
          type: 'text',
          name: 'icon',
          required: true,
        },
      ],
    }
  ],
}