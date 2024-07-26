import type { GlobalConfig } from 'payload'

export const AboutMe: GlobalConfig = {
  slug: 'about-me',

  fields: [
    {
      type: 'text',
      name: 'title',
    },

    {
      type: 'richText',
      name: 'description',
    },
  ],
}