import type { GlobalConfig } from 'payload'

export const ContactMe: GlobalConfig = {
  slug: 'contact-me',

  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },

    {
      type: 'text',
      name: 'description',
      required: true,
    },
  ],
}