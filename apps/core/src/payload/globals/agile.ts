import type { GlobalConfig } from 'payload'

export const Agile: GlobalConfig = {
  slug: 'agile',

  fields: [
    {
      type: 'richText',
      name: 'description',
      required: true,
    },
  ],
}