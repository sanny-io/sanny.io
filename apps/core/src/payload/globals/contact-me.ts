import type { GlobalConfig } from 'payload'

export const ContactMe: GlobalConfig = {
  slug: 'contact-me',

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
      type: 'text',
      name: 'description',
      required: true,
    },

    {
      type: 'email',
      name: 'email',
      required: true,
    },
  ],
}