import type { GlobalConfig } from 'payload'

export const Histories: GlobalConfig = {
  slug: 'histories',

  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },

    {
      type: 'array',
      name: 'histories',

      fields: [
        {
          type: 'text',
          name: 'name',
          required: true,
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
          type: 'date',
          name: 'start',
          required: true,
        },

        {
          type: 'date',
          name: 'end',
          required: false,
        },
      ],
    }
  ],
}