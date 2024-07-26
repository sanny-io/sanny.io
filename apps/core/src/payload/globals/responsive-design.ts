import type { GlobalConfig } from 'payload'

export const ResponsiveDesign: GlobalConfig = {
  slug: 'responsive-design',

  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },

    {
      type: 'richText',
      name: 'description',
      required: true,
    },
  ],
}