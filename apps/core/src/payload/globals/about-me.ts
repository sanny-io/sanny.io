import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import type { GlobalConfig } from 'payload'

export const AboutMe: GlobalConfig = {
  slug: 'about-me',

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
      type: 'richText',
      name: 'description',
      required: true,

      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },

    lexicalHTML('description', {
      name: 'descriptionHtml',
    }),
  ],
}